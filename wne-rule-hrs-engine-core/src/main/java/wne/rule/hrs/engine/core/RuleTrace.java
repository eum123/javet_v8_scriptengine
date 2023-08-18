package wne.rule.hrs.engine.core;

import lombok.Getter;
import lombok.ToString;

import java.util.HashMap;
import java.util.Map;


@ToString
public class RuleTrace {
    @Getter
    private String ruleId = "";

    @Getter
    private Map<String, Object> parameter = new HashMap<>();

    @Getter
    private Object result = null;

    @Getter
    private long startTime = 0L;
    @Getter
    private long endTime = 0;

    public RuleTrace(String ruleId) {
        this.ruleId = ruleId;
        this.startTime = System.currentTimeMillis();
    }

    public void addParameter(String key, Object value) {
        this.parameter.put(key, value);
    }

    public void setResult(Object result) {
        this.result = result;
        this.endTime = System.currentTimeMillis();
    }
}
