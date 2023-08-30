package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
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
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

import java.util.ArrayList;
import java.util.List;
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
    private List<V8ValueObject> v8ValueObjects = new ArrayList<>();

    private ManagedRuleEngineFactory factory;


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

        if(v8Runtime != null) {
            try {
                v8Runtime.close();
            } catch (JavetException e) {
                log.warn("close fail", e);
            }
        }
    }

    public RuleExecuteResult executeByRuleId(EngineParameter engineParameter, Object ... parameters) {
        lock.lock();

        log.debug("START(ruleId). engineParameter : {}", engineParameter);

        RuleContext context = new RuleContext((RuleEngineFactory) this.factory, engineParameter);

        try {

            if (factory.isUpdate()) {
                updateCondition.await();
            }

            ScriptFetchResult scriptFetchResult = context.fetchByRuleId();
            if(scriptFetchResult != null) {
                //실행 하기 전 script를 조회 후 engine에 등록한다.
                v8Runtime.getExecutor(scriptFetchResult.getScript()).executeVoid();
            }

            //context 추가
            v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);

            validate(engineParameter.getRuleId());

            //시작 시간
            context.start();

            //execute script
            Object result = v8Runtime.getGlobalObject().invokeObject(engineParameter.getRuleId(), parameters);

            //종료시간
            context.end(result);

            return context.getRuleExecuteResult();
        } catch (Exception e ) {
            log.error("execute fail. {}", engineParameter, e);

            context.getRuleExecuteResult().setThrowable(e);

            return context.getRuleExecuteResult();
        } finally {
            lock.unlock();

            deleteSystem();
        }
    }

    public RuleExecuteResult executeByScript(EngineParameter engineParameter, String script, Object ... parameters) {
        lock.lock();

        log.debug("START(script) engineParameter:{}", engineParameter);

        RuleContext context = new RuleContext((RuleEngineFactory) this.factory, engineParameter);

        try {

            if (factory.isUpdate()) {
                updateCondition.await();
            }

            //실행 하기 전 script를 조회 후 engine에 등록한다.
            v8Runtime.getExecutor(script).executeVoid();

            //context 추가
            v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);
            validate(engineParameter.getRuleId());

            //시작 시간
            context.start();

            //execute script
            Object result = v8Runtime.getGlobalObject().invokeObject(engineParameter.getRuleId(), parameters);

            //종료시간
            context.end(result);

            return context.getRuleExecuteResult();
        } catch (Exception e ) {
            log.error("execute fail. engineParameter:{}", engineParameter, e);

            context.getRuleExecuteResult().setThrowable(e);

            return context.getRuleExecuteResult();
        } finally {
            lock.unlock();

            deleteSystem();
        }
    }


    public RuleExecuteResult executeByRuleName(EngineParameter engineParameter, String baseDate, Object ... parameters) {
        lock.lock();

        log.debug("START(ruleName) engineParameter:{}, date{}", engineParameter, baseDate);

        RuleContext context = new RuleContext((RuleEngineFactory)this.factory, engineParameter);
        try {
            if (factory.isUpdate()) {
                updateCondition.await();
            }

            ScriptFetchResult scriptFetchResult = context.fetchByRuleName(baseDate);


            //실행 하기 전 script를 조회 후 engine에 등록한다.
            v8Runtime.getExecutor(scriptFetchResult.getScript()).executeVoid();

            //context 추가
            v8Runtime.getGlobalObject().set(SystemConstants.CONTEXT, context);

            //룰 조회 후 ID로 검증
            validate(scriptFetchResult.getRuleId());

            //시작 시간
            context.start();

            //execute script
            Object result = v8Runtime.getGlobalObject().invokeObject(scriptFetchResult.getRuleId(), parameters);

            //종료시간
            context.end(result);

            return context.getRuleExecuteResult();
        } catch (Exception e ) {
            log.error("execute fail. engineParameter : {}", engineParameter, e);

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
