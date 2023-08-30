package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;


@Slf4j
public class RuleContext {

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    private RuleEngineFactory factory;

    private RuleLogger logger = new RuleLogger(this);

    @Getter
    private RuleExecuteResult ruleExecuteResult;

    @Getter @Setter
    @Builder.Default
    private boolean debug = false;

    public RuleContext(RuleEngineFactory factory, String ruleId, String ruleName) {
        this.factory = factory;
        this.ruleId = ruleId;
        this.ruleName = ruleName;
        this.ruleExecuteResult = new RuleExecuteResult(ruleId, ruleName);
    }


    public void start() {
        ruleExecuteResult.setStartTime(System.currentTimeMillis());
    }

    public void addParameter(String key, Object value) {
        ruleExecuteResult.addParameter(key, value);
    }

    /**
     * script 처리 결과 저장
     * @param result
     */
    public void end(Object result) {
        ruleExecuteResult.setResult(result);
    }

    /**
     * 대기중인 engine 개수
     * @return
     */
    public int getIdle() {
        return factory.getIdle();
    }

    /**
     * 사용중인 engine 개수
     * @return
     */
    public int getActive() {
        return factory.getActive();
    }

    /**
     * 설정한 최대 engine 개수
     * @return
     */
    public int getMaxTotal() {
        return factory.getMaxTotal();
    }

    public ScriptFetchResult fetchByRuleName(String ruleName, String date) throws Exception {
        return ((ManagedRuleEngineFactory)factory).getScriptFetcher().fetchByRuleName(ruleName, date);
    }
    public ScriptFetchResult fetchByRuleId(String ruleId) throws Exception {

        ScriptFetcher scriptFetcher = ((ManagedRuleEngineFactory)factory).getScriptFetcher();

        if(scriptFetcher == null) {
            return null;
        }



        return ((ManagedRuleEngineFactory)factory).getScriptFetcher().fetchByRuleId(ruleId);
    }

    /**
     * 새로운 rule engine을 생성하여 실행.
     * @return
     */
    public Object newEngineByName(String ruleName, String date, Object ... args) {

        try {

            //동일 이름에 ID가 다를수 있으나 history라서 이름으로 비교해도 로직상 문제 없을거라 판단됨
            if(this.ruleName != null && this.ruleName.equalsIgnoreCase(ruleName)) {
                throw new RuntimeException("not support recursive function. ruleName : " + ruleName);
            }

            RuleEngine engine = factory.borrow();

            log.info("NEW ENGINE(Java) ruleName:{}, date:{}, Parameter:{}", ruleName, date, args);

            RuleExecuteResult result =  engine.executeByRuleName(debug, ruleName, date, args);
            result.setParentRuleId(this.ruleId);    //parent urleId 설정

            //append sub result
            this.ruleExecuteResult.addSubRuleExecuteResult(result);

            return result.getResult();

        } catch (RuleException | InterruptedException e) {
            //engine 생성 오류
            throw new RuntimeException(e);
        }
    }

    public RuleLogger getLogger() {
        return logger;
    }

}
