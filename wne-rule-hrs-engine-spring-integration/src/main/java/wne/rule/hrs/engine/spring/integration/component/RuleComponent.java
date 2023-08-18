package wne.rule.hrs.engine.spring.integration.component;

import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;

import java.util.Map;

public interface RuleComponent {
    /**
     * RuleID를 이용한 rule 실행
     * @param ruleId
     * @param parameter
     * @return
     * @throws Exception
     */
    RuleResultVo executeByRuleId(String ruleId, Map parameter) throws Exception;

    /**
     * rule script를 이용한 rule 실행
     * @param script
     * @param parameter
     * @return
     * @throws Exception
     */
    RuleResultVo executeByScript(String script, Map parameter) throws Exception;

    /**
     * Rule 변경
     * @param ruleId
     * @param script
     */
    void updateRule(String ruleId, String script);
}
