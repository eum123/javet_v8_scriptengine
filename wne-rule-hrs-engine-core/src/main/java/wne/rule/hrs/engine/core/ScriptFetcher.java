package wne.rule.hrs.engine.core;

/**
 * script를 외부(DB, redis 등)으로 조회.
 */
public interface ScriptFetcher {
    String fetch(String ruleId);
}
