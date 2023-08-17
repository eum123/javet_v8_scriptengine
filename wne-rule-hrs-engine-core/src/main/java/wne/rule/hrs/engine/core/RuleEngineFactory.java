package wne.rule.hrs.engine.core;

import java.util.Optional;
import java.util.Properties;

public interface RuleEngineFactory {

    RuleEngine borrow() throws InterruptedException;

    void update(String ruleId, String script);

    void terminate();
}
