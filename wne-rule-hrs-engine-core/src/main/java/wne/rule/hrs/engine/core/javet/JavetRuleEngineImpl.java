package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.RuleContext;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.constants.ExternalFunctionConstants;
import wne.rule.hrs.engine.core.constants.SystemConstants;
import wne.rule.hrs.engine.core.exception.*;
import wne.rule.hrs.engine.core.external.ExternalLauncher;
import wne.rule.hrs.engine.core.RuleExecuteResult;
import wne.rule.hrs.engine.core.ManagedRuleEngineFactory;

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

            //system
            v8Runtime.getGlobalObject().set(ExternalFunctionConstants.EXTERNAL_FUNCTION, new ExternalLauncher());

            //reserved java object
            Properties properties = factory.getReserveProperties().orElseThrow(() -> new ComponentException("Reserved Properties not found"));
            properties.entrySet().forEach(x -> {
                log.info("register reserved property. key:{}, value:{}", x.getKey(), x.getValue());

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



    public RuleExecuteResult executeByRuleId(String ruleId, Map parameters) throws RuleException {
        return execute("ID", ruleId, parameters);
    }

    private void executeUsingId(RuleContext context, String ruleId, Map parameters) throws Exception {
        validate(ruleId);

        v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);

        //execute pre
        //TODO 전처리 구현

        //execute main
        Object result = v8Runtime.getGlobalObject().invokeObject(ruleId, parameters);

        //execute post
        //TODO 후 처리 구현


    }

    private void executeUsingScript(RuleContext context, String script, Map parameters) throws Exception {
        //execute pre
        //TODO 전처리 구현

        //execute main
        Object result = v8Runtime.getExecutor(script).executeObject();

        //execute post
        //TODO 후 처리 구현
    }

    private RuleExecuteResult execute(String type, String key, Map parameters) throws RuleException {
        lock.lock();

        RuleContext context = new RuleContext();
        RuleExecuteResult executeResult = new RuleExecuteResult();

        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            if(type.equals("ID")) {
                //ID 방식
                executeUsingId(context, key, parameters);
            } else {
                //script 방식
                executeUsingScript(context, key, parameters);
            }


            log.debug("output log: {}", byteArrayOutputStream.toString());

            executeResult.setTrace(context.getRuleTraces());
            executeResult.setExecuteLog(byteArrayOutputStream.toString());

            return executeResult;
        } catch (Exception e ) {
            executeResult.setTrace(context.getRuleTraces());
            executeResult.setThrowable(e);
            return executeResult;
        } finally {
            lock.unlock();

            deleteSystem();
        }

    }

    public RuleExecuteResult executeByScript(String script, Map parameters) throws RuleException {
        return execute("SCRIPT", script, parameters);
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

    private void deleteSystem() {
        if(v8Runtime != null) {
            try {
                v8Runtime.getGlobalObject().delete(SystemConstants.CONTEXT);
            } catch (Exception e) {
                log.warn("내부 함수(객체) 삭제 오류", e);
            }
        }
    }

}
