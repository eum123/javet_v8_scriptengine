package wne.rule.hrs.engine.core;

import java.util.Optional;
import java.util.Properties;

public interface RuleEngineFactory {

    RuleEngine borrow() throws InterruptedException;

    void release(RuleEngine engine);

    void update(String ruleId, String script);

    void terminate();
}
