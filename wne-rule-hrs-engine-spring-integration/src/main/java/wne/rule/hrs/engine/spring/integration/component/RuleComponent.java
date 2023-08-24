package wne.rule.hrs.engine.spring.integration.component;

import wne.rule.hrs.engine.core.ScriptFetcher;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;

import java.util.Map;

public interface RuleComponent {
    /**
     * RuleID를 이용한 rule 실행
     * @param ruleId
     * @param parameters
     * @return
     * @throws Exception
     */
    RuleResultVo executeByRuleId(String ruleId, String ruleName, Object ... parameters) throws Exception;


    /**
     * Rule 변경
     * @param ruleId
     * @param script
     */
    void updateRule(String ruleId, String script);

    /**
     * Rule script 정보를 조회하는 기능 설정
     * @param scriptFetcher
     */
    void setScriptFetcher(ScriptFetcher scriptFetcher);
}
