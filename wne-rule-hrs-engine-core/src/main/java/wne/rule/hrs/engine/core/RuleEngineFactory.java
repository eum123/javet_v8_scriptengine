package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Optional;
import java.util.Properties;

public interface RuleEngineFactory {

    RuleEngine borrow() throws InterruptedException, RuleException, ComponentException;

    void release(RuleEngine engine);

    void update(String ruleId, String script);

    void terminate();
}
