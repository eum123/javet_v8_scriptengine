package wne.rule.hrs.engine.core.pool;

import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;

public interface PoolObjectFactory {

    /**
     * RuleEngine을 생성한다.
     * @return
     * @throws RuleException
     * @throws ComponentException
     */
    ManagedRuleEngine create() throws RuleException, ComponentException;
}
