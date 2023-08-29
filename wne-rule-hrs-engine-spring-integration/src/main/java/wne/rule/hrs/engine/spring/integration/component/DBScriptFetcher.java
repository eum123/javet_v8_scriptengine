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
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Component;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;
import wne.rule.hrs.engine.core.util.DateUtil;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.util.Date;
import java.util.List;

@Slf4j
@Scope(value = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
@Component
public class DBScriptFetcher implements ScriptFetcher {
    private static final String CACHE_NAME = "DBRuleScript";

    private NamedParameterJdbcTemplate jdbcTemplate;

    /**
     * 1. Self-autowired reference to proxified bean of this class.
     */
    @Resource
    private DBScriptFetcher self;

    @Getter @Setter
    @Builder.Default
    private boolean debug = false;

    public DBScriptFetcher(@Autowired DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public ScriptFetchResult fetchByRuleId(String ruleId) throws Exception {
        String query = "select rule_name, rule_id, rule_code_content, rule_code_content_debug, start_effective_date, end_effective_date " +
                "from hrs.tbl_rule " +
                "where " +
                "   rule_id = :ruleId";

        SqlParameterSource parameters = new MapSqlParameterSource("ruleId", ruleId);

        DBScriptEntity entity = jdbcTemplate.queryForObject(query, parameters, (rs, rowNum) -> {
            return DBScriptEntity.builder().ruleName(rs.getString("rule_name"))
                    .ruleId(rs.getString("rule_id"))
                    .ruleCodeContent(rs.getString("rule_code_content"))
                    .ruleCodeContentDebug(rs.getString("rule_code_content_debug"))
                    .startEffectiveDate(rs.getDate("start_effective_date"))
                    .endEffectiveDate(rs.getDate("end_effective_date"))
                    .build();
        });

        if(entity == null) {
            throw new Exception(ruleId + " rule notfound");
        }

        return ScriptFetchResult.builder()
                .script(entity.getScript(debug)).ruleId(ruleId).ruleName(entity.getRuleName())
                .build();
    }

    @Override
    public ScriptFetchResult fetchByRuleName(String ruleName, String baseDate) throws Exception {
        //self invoke 방지.
        List<DBScriptEntity> list = self.fetchDB(ruleName);

        //기준일자가 startEffective와 endEffective 사이 값인 script를 찾는다.
        DBScriptEntity entity = list.stream().filter(x -> {
            return DateUtil.isBetween(x.getStartEffectiveDate(), x.getEndEffectiveDate(), DateUtil.toDate(baseDate, "yyyyMMdd", new Date()));
        }).findAny().orElseThrow(() -> new RuleException("ruleName:" + ruleName + ", baseDate:" + baseDate + " 의 Rule ID가 존재하지 않습니다."));

        return ScriptFetchResult.builder()
                .script(entity.getScript(debug)).ruleId(entity.getRuleId()).ruleName(entity.getRuleName())
                .build();
    }

    @Cacheable(value = CACHE_NAME, key = "#ruleName")
    public List<DBScriptEntity> fetchDB(String ruleName) throws Exception {

        log.debug("search db : " + ruleName);

        String query = "select rule_name, rule_id, rule_code_content, rule_code_content_debug, start_effective_date, end_effective_date " +
                "from hrs.tbl_rule " +
                "where " +
                "   rule_name = :ruleName";

        SqlParameterSource parameters = new MapSqlParameterSource("ruleName", ruleName);

        return jdbcTemplate.query(query, parameters, (rs, rowNum) -> {
            return DBScriptEntity.builder().ruleName(rs.getString("rule_name"))
                    .ruleId(rs.getString("rule_id"))
                    .ruleCodeContent(rs.getString("rule_code_content"))
                    .ruleCodeContentDebug(rs.getString("rule_code_content_debug"))
                    .startEffectiveDate(rs.getDate("start_effective_date"))
                    .endEffectiveDate(rs.getDate("end_effective_date"))
                    .build();
        });

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
