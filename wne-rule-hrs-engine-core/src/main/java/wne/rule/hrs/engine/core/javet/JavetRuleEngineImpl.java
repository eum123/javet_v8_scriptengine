package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.exceptions.JavetExecutionException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.values.reference.V8ValueObject;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.*;
import wne.rule.hrs.engine.core.constants.SystemConstants;
import wne.rule.hrs.engine.core.exception.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;
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
    private List<V8ValueObject> v8ValueObjects = new ArrayList<>();

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
            v8Runtime.setConverter(new JavetProxyConverter());

//            byteArrayOutputStream = new ByteArrayOutputStream();
//            printStream = new PrintStream(byteArrayOutputStream);
//
//            interceptor =
//                    new JavetStandardConsoleInterceptor(v8Runtime);
//            interceptor.setLog(printStream);
//            interceptor.register(v8Runtime.getGlobalObject());

            //system
            JavetSystemBinder.bind(factory, v8Runtime);

            //custom
            v8ValueObjects.addAll(JavetCustomBinder.bind(factory, v8Runtime));

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



    public RuleExecuteResult executeByRuleId(String ruleId, String ruleName, Object ... parameters) {
        lock.lock();

        RuleContext context = new RuleContext((RuleEngineFactory) this.factory, ruleId, ruleName);

        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            if(factory.getScriptFetcher() != null) {
                //실행 하기 전 script를 조회 후 engine에 등록한다.
                v8Runtime.getExecutor(factory.getScriptFetcher().fetch(ruleId, ruleName)).executeVoid();
            }

            //context 추가
            v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);
            validate(ruleId);

            //시작 시간
            context.start();

            //execute script
            Object result = v8Runtime.getGlobalObject().invokeObject(ruleId, parameters);

            //종료시간
            context.end(result);

            return context.getRuleExecuteResult();
        } catch (Exception e ) {
            log.error("execute fail", e);

            context.getRuleExecuteResult().setThrowable(e);

            return context.getRuleExecuteResult();
        } finally {
            lock.unlock();

            deleteSystem();
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

    private void deleteSystem() {
        if(v8Runtime != null) {
            try {
                v8Runtime.getGlobalObject().delete(SystemConstants.CONTEXT);
                JavetSystemBinder.unbind(v8Runtime);

            } catch (Exception e) {
                log.warn("내부 함수(객체) 삭제 오류", e);
            }
        }

        if(byteArrayOutputStream != null) {
            byteArrayOutputStream.reset();
        }
    }

    public void reset() throws EngineResetException {
        if(v8ValueObjects != null) {
            v8ValueObjects.forEach(x -> {
                try {
                    x.close();
                } catch (JavetException e) {
                }
            });
            v8ValueObjects.clear();
        }
        if(v8Runtime != null) {
            try {
                //전체 초기화
                v8Runtime.resetContext();
            } catch (JavetException e) {
                throw new EngineResetException(e);
            }
        }
    }

}
