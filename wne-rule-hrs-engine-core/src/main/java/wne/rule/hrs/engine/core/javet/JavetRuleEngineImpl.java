package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.*;
import wne.rule.hrs.engine.core.constants.SystemConstants;
import wne.rule.hrs.engine.core.exception.*;

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

    private static final String ID_EXECUTE_TYPE = "ID";

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

    @Getter
    private boolean start = false;

    public JavetRuleEngineImpl(ManagedRuleEngineFactory factory) throws RuleException {
        this.factory = factory;

        init();

        start = true;
    }

    public void init() throws EngineInitializationException {
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
            JavetSystemBinder.bind(factory, v8Runtime);

            //custom
            JavetCustomBinder.bind(factory, v8Runtime);

        } catch (Exception e) {
            throw new EngineInitializationException(e);
        }
    }

    public void terminate() {

        start = false;

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



    public RuleExecuteResult executeByRuleId(String ruleId, Object ... parameters) throws RuleException {
        return execute(ID_EXECUTE_TYPE, ruleId, parameters);
    }

    private Object executeUsingId(RuleContext context, String ruleId, Object ... parameters) throws Exception {

        v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);
        validate(ruleId);

        //execute main
        Object result = v8Runtime.getGlobalObject().invokeObject(ruleId, parameters);


        return result;
    }

    private Object executeUsingScript(RuleContext context, String script, Map replaceData) throws Exception {

        //execute main
        Object result = v8Runtime.getExecutor(script).executeObject();


        return result;
    }

    private RuleExecuteResult execute(String type, String key, Object ... parameters) throws RuleException {
        lock.lock();

        RuleContext context = new RuleContext((RuleEngineFactory) this.factory);
        RuleExecuteResult executeResult = new RuleExecuteResult();

        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            if(factory.getScriptFetcher() != null) {
                //실행 하기 전 script를 조회 한다.
                v8Runtime.getExecutor(factory.getScriptFetcher().fetch(key)).executeVoid();
            }

            Object result;
            if(type.equals(ID_EXECUTE_TYPE)) {
                //ID 방식
                result = executeUsingId(context, key, parameters);
            } else {
                //script 방식
                if(parameters.length > 0 ) {

                }

                result = executeUsingScript(context, key, null);
            }

            log.debug("output log: {}", byteArrayOutputStream.toString());

            executeResult.setResult(result);
            executeResult.setTrace(context.getRuleTraces());
            executeResult.setExecuteLog(byteArrayOutputStream.toString());

            return executeResult;
        } catch (Exception e ) {
            log.error("execute fail", e);
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

        if(byteArrayOutputStream != null) {
            byteArrayOutputStream.reset();
        }
    }

    public void reset() throws EngineResetException {
        if(v8Runtime != null) {
            try {
                v8Runtime.resetContext();
            } catch (JavetException e) {
                throw new EngineResetException(e);
            }
        }
    }

}
