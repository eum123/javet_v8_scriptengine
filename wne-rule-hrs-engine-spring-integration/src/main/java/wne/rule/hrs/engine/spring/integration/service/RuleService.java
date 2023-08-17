package wne.rule.hrs.engine.spring.integration.service;

import wne.rule.hrs.engine.core.RuleEngine;

import java.util.Map;

public interface RuleService {
    /**
     * RuleID를 이용한 rule 실행
     * @param ruleId
     * @param parameter
     * @return
     * @throws Exception
     */
    Object executeByRuleId(String ruleId, Map parameter) throws Exception;

    /**
     * rule script를 이용한 rule 실행
     * @param script
     * @param parameter
     * @return
     * @throws Exception
     */
    Object executeByScript(String script, Map parameter) throws Exception;

    /**
     * Rule 변경
     * @param ruleId
     * @param script
     */
    void updateRule(String ruleId, String script);
}
