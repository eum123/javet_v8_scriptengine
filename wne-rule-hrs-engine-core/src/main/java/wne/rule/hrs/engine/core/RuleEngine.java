package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {

    /**
     * rule Id로 script를 실행한다.
     * script fetcher가 있으면 id로 script를 조회하여 사용하여 없는 경우 바로 실행한다.
     * @param ruleId
     * @param ruleName
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleId(String ruleId, String ruleName, Object ... parameters);

    RuleExecuteResult executeByRuleId(boolean isDebug, String ruleId, String ruleName, Object ... parameters);

    /**
     * 룰 이름으로 script를 실행한다.
     * 반드시 script  fetcher가 필요하다.
     * @param ruleName
     * @param date rule history 기능으로 필요
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleName(String ruleName, String date, Object ... parameters);

    RuleExecuteResult executeByRuleName(boolean isDebug, String ruleName, String date, Object ... parameters);

    /**
     * RuleEngine에 script를 변경한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script) throws RuleException;

}
