package wne.rule.hrs.engine.spring.integration.component;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;
import wne.rule.hrs.engine.core.util.DateUtil;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Redis에서 rule을 조회
 * TODO: 테스트 필요
 */
@Slf4j
@Scope(value = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
@Component
public class RedisScriptFetcher implements ScriptFetcher {

    private static final String CACHE_NAME = "RedisRuleScript";
    private static final String REDIS_RULE_KEY = "HRS_RULE_CACHE";
    private static final String REDIS_HISTORY_KEY = "HRS_RULE_HISTORY_CACHE";


    private final RedisTemplate<String, Object> redisTemplate;

    /**
     * 1. Self-autowired reference to proxified bean of this class.
     */
    @Resource
    private RedisScriptFetcher self;

    @Getter
    @Setter
    @Builder.Default
    private boolean debug = false;

    public RedisScriptFetcher(@Autowired RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @Override
    public ScriptFetchResult fetchByRuleId(String ruleId) throws Exception {
        ScriptEntity entity = findByRuleId(ruleId);

        return ScriptFetchResult.builder().script(entity.getScript(debug)).ruleId(ruleId).ruleName(ruleId).build();
    }

    @Override
    public ScriptFetchResult fetchByRuleName(String ruleName, String baseDate) throws Exception {
        //self invoke 방지.
        List<ScriptEntity> list = self.fetchRedis(ruleName);

        //기준일자가 startEffective와 endEffective 사이 값인 script를 찾는다.
        ScriptEntity entity = list.stream().filter(x -> {
            return DateUtil.isBetween(x.getStartEffectiveDate(), x.getEndEffectiveDate(), DateUtil.toDate(baseDate, "yyyyMMdd", new Date()));
        }).findAny().orElseThrow(() -> new RuleException("ruleName:" + ruleName + ", baseDate:" + baseDate + " 의 Rule ID가 존재하지 않습니다."));

        return ScriptFetchResult.builder()
                .script(entity.getScript(debug)).ruleId(entity.getRuleId()).ruleName(entity.getRuleName())
                .build();
    }

    @Cacheable(value = CACHE_NAME, key = "#ruleName")
    public List<ScriptEntity> fetchRedis(String ruleName) throws Exception {

        log.debug("search redis : " + ruleName);

        List<ScriptEntity> list = new ArrayList<>();

        //start_effective:end_effective, ruleId
        Map<String, String> ruleList = (Map<String, String>)redisTemplate.opsForHash().get(REDIS_HISTORY_KEY, ruleName);

        ruleList.entrySet().forEach(x -> {
            //ruleId로 내용 조회
            ScriptEntity entity = findByRuleId(x.getValue());
            list.add(ScriptEntity.builder().ruleName(ruleName)
                            .startEffectiveDate(getStartEffectiveDate(x.getKey()))
                            .endEffectiveDate(getEndEffectiveDate(x.getKey()))
                            .ruleCodeContent(entity.getRuleCodeContent())
                            .ruleCodeContentDebug(entity.getRuleCodeContentDebug())
                            .build());

        });

        return list;
    }

    private Date getStartEffectiveDate(String redisKey) {
        return DateUtil.toDate(redisKey.substring(0, redisKey.indexOf(":")));
    }
    private Date getEndEffectiveDate(String redisKey) {
        return DateUtil.toDate(redisKey.substring(redisKey.indexOf(":") + 1));
    }

    private ScriptEntity findByRuleId(String ruleId) {
        return (ScriptEntity)redisTemplate.opsForHash().get(REDIS_RULE_KEY, ruleId);
    }

    /**
     * 모든 cache 삭제
     */
    @CacheEvict(value = CACHE_NAME, allEntries = true)
    public void evict() {

    }
    @CacheEvict(value = CACHE_NAME, key = "#ruleName")
    public void evict(String ruleName){}
}
