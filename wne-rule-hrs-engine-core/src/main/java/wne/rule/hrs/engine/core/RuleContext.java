package wne.rule.hrs.engine.core;

import lombok.Getter;
import wne.rule.hrs.engine.core.exception.RuleException;


public class RuleContext {

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    private RuleEngineFactory factory;

    private RuleLogger logger = new RuleLogger(this);

    @Getter
    private RuleExecuteResult ruleExecuteResult;

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

    /**
     * 새로운 rule engine을 생성하여 실행.
     * @return
     */
    public Object newEngineByName(String ruleName, String date, Object ... args) {

        try {
            RuleEngine engine = factory.borrow();

            RuleExecuteResult result =  engine.executeByRuleName(ruleId, ruleName, args);

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
