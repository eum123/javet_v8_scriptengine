package wne.rule.hrs.engine.core;

import lombok.Getter;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.javet.RuleLogger;

import java.util.List;
import java.util.stream.Collectors;


public class RuleContext {

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    private RuleEngineFactory factory;

    private RuleLogger logger = new RuleLogger(this);

    @Getter
    private RuleExecuteResult ruleExecuteResult;

    private StringBuilder ruleExecuteLog = new StringBuilder();

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
        ruleExecuteResult.setExecuteLog(ruleExecuteLog.toString());
    }

    public void appendRuleLog(String message) {
        ruleExecuteLog.append(message);
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
     * @param ruleId
     * @param args
     * @return
     */
    public Object newEngine(String ruleId, String ruleName, Object ... args) {

        RuleExecuteResult result = null;
        try {
            RuleEngine engine = factory.borrow();

            result =  engine.executeByRuleId(ruleId, ruleName, args);

            //TODO append result

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
