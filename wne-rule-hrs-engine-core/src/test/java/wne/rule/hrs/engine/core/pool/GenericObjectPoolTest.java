package wne.rule.hrs.engine.core.pool;

import org.junit.Assert;
import org.junit.Test;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineImpl;
import wne.rule.hrs.engine.core.ManagedRuleEngine;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.ManagedRuleEngineFactory;

import java.util.Optional;
import java.util.Properties;

public class GenericObjectPoolTest {

//    @DisplayName("pool 개수 체크")
    @Test
    public void test() throws Exception {

        GenericObjectPool pool = new GenericObjectPool(new PoolObjectFactory() {
            @Override
            public ManagedRuleEngine create() throws RuleException, ComponentException {
                return new JavetRuleEngineImpl(new Factory());
            }
        }, ObjectPoolConfig.builder().maxWaitMills(1000).maxTotal(2).build());

        Assert.assertEquals(2, pool.getIdle());

        ManagedRuleEngine engine = pool.borrow();

        Assert.assertEquals(1, pool.getIdle());

        Assert.assertEquals(1, pool.getActive());

        pool.release(engine);

        Assert.assertEquals(2, pool.getIdle());
        Assert.assertEquals(0, pool.getActive());
    }

    //@DisplayName("임계치 테스트")
    @Test
    public void waitTest() throws Exception {

        GenericObjectPool pool = new GenericObjectPool(new PoolObjectFactory() {
            @Override
            public ManagedRuleEngine create() throws RuleException {
                try {
                    JavetRuleEngineImpl engine = new JavetRuleEngineImpl(new Factory());
                    return engine;
                } catch (ComponentException e) {
                    throw new RuleException(e);
                }

            }
        }, ObjectPoolConfig.builder().maxWaitMills(1000).maxTotal(2).build());

        Assert.assertEquals(2, pool.getIdle());

        ManagedRuleEngine engine = pool.borrow();
        ManagedRuleEngine engine1 = pool.borrow();

        //없는 rule을 요청 한 경우
        Assert.assertThrows(InterruptedException.class, () -> {
            ManagedRuleEngine engine3 = pool.borrow();
        });


    }

    //@DisplayName("update 테스트")
    @Test
    public void updateTest() throws Exception {
        GenericObjectPool pool = new GenericObjectPool(new PoolObjectFactory() {
            @Override
            public ManagedRuleEngine create() throws RuleException {

                try {
                    JavetRuleEngineImpl engine = new JavetRuleEngineImpl(new Factory());
                    return engine;
                } catch (ComponentException e) {
                    throw new RuleException(e);
                }

            }
        }, ObjectPoolConfig.builder().maxWaitMills(1000).maxTotal(2).build());

        ManagedRuleEngine engine = pool.borrow();

        pool.update("id", "function sample() {\n return 'hi'; \n } \n");

        pool.release(engine);

        engine = pool.borrow();
        Assert.assertEquals(1, pool.getActive());

    }

    //TODO: multi thread lock 테스트



    class Factory implements ManagedRuleEngineFactory {

        @Override
        public Optional<String> getInternalScript() {
            return null;
        }

        @Override
        public Optional<Properties> getReserveProperties() {
            return null;
        }

        @Override
        public Optional<String> getExternalScript() {
            return null;
        }

        @Override
        public boolean isUpdate() {
            return false;
        }
    }
}
