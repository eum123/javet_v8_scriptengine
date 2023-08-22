package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.exception.EngineInitializationException;
import wne.rule.hrs.engine.core.exception.EngineResetException;

public interface ManagedRuleEngine {
    String getEngineId();

    public void terminate();

    void update(String ruleId, String script) throws RuleException;

    boolean isStart();

    void reset() throws EngineResetException;
    void init() throws EngineInitializationException;

}
