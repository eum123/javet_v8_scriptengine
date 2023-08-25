package wne.rule.hrs.engine.core;

import lombok.Getter;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class RuleParameters {
    @Getter
    private List<String> parameterOrder = new LinkedList<>();

    @Getter
    private Map<String, Object> parameters = new HashMap<>();

    public void add(String key, Object value) {
        parameterOrder.add(key);
        parameters.put(key, value);
    }

}
