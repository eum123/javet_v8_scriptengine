package wne.rule.hrs.engine.core;

import lombok.Getter;
import lombok.Setter;
import wne.rule.hrs.engine.core.javet.RuleLogger;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


public class RuleContext {

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    @Getter @Setter
    private String ruleExecuteLog = "";

    private RuleEngineFactory factory;

    private RuleLogger logger = new RuleLogger(this);

    public RuleContext(RuleEngineFactory factory, String ruleId, String ruleName) {
        this.factory = factory;
        this.ruleId = ruleId;
        this.ruleName = ruleName;
    }

    // 함수 실행 순서
    private List<String> order = new LinkedList<>();
    //실행한 함수들
    private Map<String, RuleTrace> traceMap = new HashMap<>();

    public List<RuleTrace> getRuleTraces() {
        return order.stream().map(x -> traceMap.get(x)).collect(Collectors.toList());
    }

    public void start(String ruleId) {
        RuleTrace trace = new RuleTrace(ruleId);
        order.add(ruleId);
        traceMap.put(ruleId, trace);
    }

    public void addParameter(String ruleId, String key, Object value) {
        traceMap.get(ruleId).addParameter(key, value);
    }

    public void end(String ruleId, Object result) {
        traceMap.get(ruleId).setResult(result);
    }
    public void end(String ruleId) {
        end(ruleId, null);
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
    public RuleExecuteResult newEngine(String ruleId, String ruleName, Object ... args) {

        RuleExecuteResult result = new RuleExecuteResult();
        try {
            RuleEngine engine = factory.borrow();

            //TODO history 저장. script내에서 수행하면 이부분 제외
            this.start(ruleId);
            this.addParameter(ruleId, "parameter", args);

            result =  engine.executeByRuleId(ruleId, ruleName, args);

            this.end(ruleId, result.getResult());

            return result;

        } catch (Exception e) {
            result.setThrowable(e);
            return result;
        }
    }

    public RuleLogger getLogger() {
        return logger;
    }
}
