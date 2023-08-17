package wne.rule.hrs.engine.core.pool;

import wne.rule.hrs.engine.core.JavetRuleEngineImpl;
import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.pool.PoolObjectFactory;
import wne.rule.hrs.engine.core.util.ManagedRuleEngineFactory;

public class JavetPoolObjectFactory implements PoolObjectFactory {

    private ManagedRuleEngineFactory factory;

    public JavetPoolObjectFactory(ManagedRuleEngineFactory factory) {
        this.factory = factory;
    }

    @Override
    public ManagedRuleEngine create() throws RuleException {
        try {
            JavetRuleEngineImpl engine = new JavetRuleEngineImpl(factory);
            return engine;
        } catch (ComponentException e) {
            throw new RuleException(e);
        }

    }
}
