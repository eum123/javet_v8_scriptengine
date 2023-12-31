package wne.rule.hrs.engine.core.fetcher;

/**
 * script를 외부(DB, redis 등)으로 조회.
 */
public interface ScriptFetcher {

    /**
     * Rule ID로 rule을 조회 한다.
     * @param ruleId
     * @return
     */
    ScriptFetchResult fetchByRuleId(String ruleId) throws Exception ;

    /**
     * Rule 이름으로 rule을 조회 한다.
     * @param ruleName
     * @param baseDate
     * @return
     */
    ScriptFetchResult fetchByRuleName(String ruleName, String baseDate)  throws Exception ;

    void setDebug(boolean isDebug);
}
