package wne.rule.hrs.engine.core.pool;

import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;

public interface PoolObjectFactory {
    ManagedRuleEngine create() throws RuleException, ComponentException;
}
