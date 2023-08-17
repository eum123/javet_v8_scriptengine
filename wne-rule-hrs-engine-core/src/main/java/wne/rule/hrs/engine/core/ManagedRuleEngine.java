package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;

public interface ManagedRuleEngine {
    String getEngineId();

    public void terminate();

    void update(String ruleId, String script) throws RuleException;


}
