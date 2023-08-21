package wne.rule.hrs.engine.core.pool;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Slf4j
public class GenericObjectPool {

    private Lock lock = new ReentrantLock();
    private Condition updateCondition = lock.newCondition();

    private BlockingQueue<ManagedRuleEngine> idleRuleEngines;

    private Map<String, ManagedRuleEngine> usedRuleEngines;

    private PoolObjectFactory factory;
    private ObjectPoolConfig config;

    private boolean isUpdate = false;

    public GenericObjectPool(PoolObjectFactory factory, ObjectPoolConfig config) throws RuleException, ComponentException {
        this.config = config;
        this.factory = factory;

        log.debug("config:{}", config);

        usedRuleEngines = new ConcurrentHashMap<>();
        idleRuleEngines = new LinkedBlockingQueue<>(config.getMaxTotal());

        for (int i =0 ;i<config.getMaxTotal() ;i++) {
            idleRuleEngines.add(factory.create());
        }
    }

    public int getActive() {
        return usedRuleEngines.size();
    }

    public int getIdle() {
        return idleRuleEngines.size();
    }

    public void release(ManagedRuleEngine engine) throws InterruptedException {

        lock.lock();
        try {
            if(isUpdate) {
              updateCondition.await();
            }

            if(usedRuleEngines.containsKey(engine.getEngineId())) {
                usedRuleEngines.remove(engine.getEngineId());
                idleRuleEngines.add(engine);
            }
        } finally {
            lock.unlock();
        }
    }

    public synchronized ManagedRuleEngine borrow() throws InterruptedException, RuleException, ComponentException {
        lock.lock();
        try {
            if(isUpdate) {
                updateCondition.await();
            }

            ManagedRuleEngine engine = idleRuleEngines.poll(config.getMaxWaitMills(), TimeUnit.MILLISECONDS);

            if(engine == null) {
                log.warn("create RuleEngine");
                engine = factory.create();

            }
            //사용으로 이동
            usedRuleEngines.put(engine.getEngineId(), engine);

            log.debug("borrow engin:{}", engine.getEngineId());

            return engine;
        } finally {
            lock.unlock();
        }


    }

    public void update(String ruleId, String script) {

        isUpdate = true;

        lock.lock();
        try {

            //대기중인 rule update
            idleRuleEngines.stream().forEach(x -> {
                try {
                    x.update(ruleId, script);
                    log.info("update idle engine:{}", ruleId);
                } catch (RuleException e) {
                    throw new RuntimeException(e);
                }
            });

            usedRuleEngines.values().forEach(x -> {
                try {
                    x.update(ruleId, script);
                    log.info("update used engine:{}", ruleId);
                } catch (RuleException e) {
                    throw new RuntimeException(e);
                }
            });

        } finally {
            isUpdate = false;

            updateCondition.signalAll();
            lock.unlock();
        }

    }

    public void terminate() {
        lock.lock();
        try {

            //대기중인 rule update
            idleRuleEngines.stream().forEach(x -> {
                x.terminate();
                log.info("terminate idle engine:{}", x.getEngineId());
            });

            usedRuleEngines.values().forEach(x -> {
                x.terminate();
                log.info("terminate used engine:{}", x.getEngineId());
            });

        } finally {
            lock.unlock();
        }
    }

}
