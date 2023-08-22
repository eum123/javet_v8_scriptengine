package wne.rule.hrs.engine.core;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RuleContext {

    @Getter @Setter
    private String ruleExecuteLog = "";

    private RuleEngineFactory factory;

    public RuleContext(RuleEngineFactory factory) {
        this.factory = factory;
    }

    private List<String> order = new LinkedList<>();
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
    public RuleExecuteResult newEngine(String ruleId, Object ... args) {
        RuleExecuteResult result = new RuleExecuteResult();
        try {
            RuleEngine engine = factory.borrow();
            return engine.executeByRuleId(ruleId, args);
        } catch (Exception e) {
            result.setThrowable(e);
            return result;
        }
    }
}
