package wne.rule.hrs.engine.core;

import lombok.Getter;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.external.ExternalExecutorRegistry;
import wne.rule.hrs.engine.core.loader.ExternalRuleLoader;
import wne.rule.hrs.engine.core.loader.InternalRuleLoader;
import wne.rule.hrs.engine.core.loader.ReservedObjectLoader;
import wne.rule.hrs.engine.core.pool.GenericObjectPool;
import wne.rule.hrs.engine.core.pool.JavetPoolObjectFactory;
import wne.rule.hrs.engine.core.pool.ObjectPoolConfig;
import wne.rule.hrs.engine.core.util.ManagedRuleEngineFactory;

import java.util.Optional;
import java.util.Properties;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class JavetRuleEngineFactory implements RuleEngineFactory, ManagedRuleEngineFactory {

    private Lock lock = new ReentrantLock();
    private Condition updateCondition = lock.newCondition();

    @Getter
    private boolean isUpdate = false;

    private RuleConfig ruleConfig;
    private ExternalExecutorRegistry registry;

    private GenericObjectPool pool = null;

    public JavetRuleEngineFactory(RuleConfig config) throws Exception {
        this.ruleConfig = config;

        // external call 기능 등록
        registry = new ExternalExecutorRegistry();
        registry.load();

        ObjectPoolConfig poolConfig = ObjectPoolConfig.builder().maxWaitMills(ruleConfig.getMaxWaitMills()).maxTotal(ruleConfig.getMaxTotal()).build();
        pool = new GenericObjectPool(new JavetPoolObjectFactory(this), poolConfig);
    }


    public RuleEngine borrow() throws InterruptedException {
        lock.lock();
        try {
            if(isUpdate) {
                updateCondition.await();
            }

            return (RuleEngine)pool.borrow();
        } finally {
            lock.unlock();
        }

    }


    public void terminate() {
        pool.terminate();
    }

    public Optional<String> getInternalScript() {
        return InternalRuleLoader.load();
    }

    public Optional<Properties> getReserveProperties() {
        return ReservedObjectLoader.load();
    }

    public Optional<String> getExternalScript() {
        return ExternalRuleLoader.load(ruleConfig.getExternalScriptPath());
    }

    public void update(String ruleId, String script) {
        isUpdate = true;

        lock.lock();
        try {
            pool.update(ruleId, script);
        } finally {
            isUpdate = false;

            updateCondition.signalAll();
            lock.unlock();
        }
    }
}
