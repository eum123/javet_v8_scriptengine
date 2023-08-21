package javet;

import lombok.extern.slf4j.Slf4j;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;

import java.util.Set;

@Slf4j
public class RedisSelect {


    public void execute(RuleEngineFactory factory, String ruleId) throws Exception {

        long start = System.currentTimeMillis();


        RuleEngine engine = factory.borrow();

        log.debug("create================ : {}", (System.currentTimeMillis() - start));

        String script = getScript(ruleId);

        log.debug("script:{}", script);
        engine.update(ruleId, script);

        log.debug("================ : {}", (System.currentTimeMillis() - start));

        //db 조회 시간만 측정하기 위해 실행을 하지 않는다.
        //engine.executeByRuleId(ruleId, null);
        factory.release(engine);
    }
    public String getScript(String ruleId) {
        StringBuilder builder = new StringBuilder();

        long start = System.currentTimeMillis();

        try (JedisPool pool = new JedisPool("172.16.51.78", 6379)) {
            // Resource 취득한다. (사실 이게 Pool에서 접속을 하는지 Resource 취득할 때 접속을 하는지 명확한 설명이 없음)
            try (Jedis jedis = pool.getResource()) {
                // test 키로 hello world 값을 넣는다.

                jedis.select(2);

                Set<byte[]> keyList = jedis.keys("rule*".getBytes());

                keyList.forEach(x -> {
                    builder.append(new String(jedis.get(x)));
                    builder.append("\n");
                });

                log.debug("Redis>>>>>>>>>>>>>>>>> : {}", (System.currentTimeMillis() - start));
                return builder.toString();
            }
        }
    }

}
