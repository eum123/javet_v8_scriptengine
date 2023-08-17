package wne.rule.hrs.engine.core;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.*;
import wne.rule.hrs.engine.core.external.ExternalLauncher;
import wne.rule.hrs.engine.core.util.ManagedRuleEngineFactory;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Slf4j
public class JavetRuleEngineImpl implements ManagedRuleEngine, RuleEngine {

    private Lock lock = new ReentrantLock();
    private Condition updateCondition = lock.newCondition();

    //TODO: 날짜 format으로 변경
    @Getter @Setter
    private String engineId = String.valueOf(System.currentTimeMillis());

    private V8Runtime v8Runtime = null;

    private ManagedRuleEngineFactory factory;

    private ByteArrayOutputStream byteArrayOutputStream;
    private PrintStream printStream;
    private JavetStandardConsoleInterceptor interceptor;

    public JavetRuleEngineImpl(ManagedRuleEngineFactory factory) throws ComponentException {
        this.factory = factory;

        init();
    }

    private void init() throws ComponentException {
        try {
            v8Runtime = V8Host.getV8Instance().createV8Runtime();

            byteArrayOutputStream = new ByteArrayOutputStream();
            printStream = new PrintStream(byteArrayOutputStream);

            interceptor =
                    new JavetStandardConsoleInterceptor(v8Runtime);
            interceptor.setLog(printStream);
            interceptor.register(v8Runtime.getGlobalObject());


            v8Runtime.setConverter(new JavetProxyConverter());

            //external
            v8Runtime.getGlobalObject().set("EXTERNAL", new ExternalLauncher());


            //reserved java object
            Properties properties = factory.getReserveProperties().orElseThrow(() -> new ComponentException("Reserved Properties not found"));
            properties.entrySet().forEach(x -> {
                log.info("regist reserved property. key:{}, value:{}", x.getKey(), x.getValue());

                try {
                    v8Runtime.getGlobalObject().set(x.getKey(), Class.forName((String)x.getValue()));
                } catch (ClassNotFoundException e) {
                    throw new RuntimeException(e);
                } catch (JavetException e) {
                    throw new RuntimeException(e);
                }
            });

            //load internal js
            v8Runtime.getExecutor(factory.getInternalScript().orElse("")).executeVoid();

            //load external js
            v8Runtime.getExecutor(factory.getExternalScript().orElse("")).executeVoid();

        } catch (Exception e) {
            throw new ComponentInstantiationException(e);
        }
    }

    public void terminate() {

        if(byteArrayOutputStream != null) {
            try {
                byteArrayOutputStream.close();
            } catch (IOException e) {
                log.warn("byteArrayOutputStream close fail", e);
            }
        }

        if(interceptor != null) {
            try {
                interceptor.unregister(v8Runtime.getGlobalObject());
            } catch (JavetException e) {
                log.warn("interceptor unregist fail", e);
            }
        }

        if(v8Runtime != null) {
            try {
                v8Runtime.close();
            } catch (JavetException e) {
                log.warn("close fail", e);
            }
        }
    }



    public Object executeByRuleId(String ruleId, Map parameters) throws RuleException {
        lock.lock();

        RuleContext context = new RuleContext();

        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            validate(ruleId);

            v8Runtime.getGlobalObject().set("context", context);

            //execute pre
            //TODO 전처리 구현

            //execute main
            Object result = v8Runtime.getGlobalObject().invokeObject(ruleId, parameters);

            //execute post
            //TODO 후 처리 구현

            System.out.println(byteArrayOutputStream.toString());
            log.debug("output log: {}", byteArrayOutputStream.toString());

            return result;
        } catch (InterruptedException e) {
            throw new RuleException(e);
        } catch (Exception e ) {
            throw new RuleExecuteException(context, e);
        } finally {
            lock.unlock();
        }

    }

    public Object executeByScript(String script, Map parameters) throws RuleException {
        lock.lock();

        RuleContext context = new RuleContext();

        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            v8Runtime.getGlobalObject().set("context", context);

            //execute pre
            //TODO 전처리 구현

            //execute main
            Object result = v8Runtime.getExecutor(script).executeObject();

            //execute post
            //TODO 후 처리 구현

            System.out.println(byteArrayOutputStream.toString());
            log.debug("output log: {}", byteArrayOutputStream.toString());

            return result;
        } catch (InterruptedException e) {
            throw new RuleException(e);
        } catch (Exception e ) {
            throw new RuleExecuteException(context, e);
        } finally {
            lock.unlock();
        }

    }

    private void validate(String ruleId) throws RuleException {
        try {
            if(!v8Runtime.getGlobalObject().has(ruleId)) {
                throw new RuleNotFoundException(ruleId, "not found rule:" + ruleId);
            }
        } catch (Exception e) {
            throw new RuleException(ruleId, e);
        }
    }

    /**
     * rule 등록 및 변경한다.
     */
    public void update(String ruleId, String script) throws RuleException {

        lock.lock();
        try {
            v8Runtime.getExecutor(script).executeVoid();

            log.info("[{}] updated : {}", engineId, ruleId);
        } catch (JavetException e) {
            throw new RuleException(e);
        } finally {

            updateCondition.signalAll();
            lock.unlock();
        }
    }

}