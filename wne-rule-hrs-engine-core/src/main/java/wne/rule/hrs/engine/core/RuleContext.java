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

}
