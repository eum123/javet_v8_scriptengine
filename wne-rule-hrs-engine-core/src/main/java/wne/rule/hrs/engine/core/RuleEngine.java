package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {
    RuleExecuteResult executeByRuleId(String ruleId, String ruleName, Object ... parameters);

    /**
     * 룰 이름으로 script를 실행한다.
     * @param ruleName
     * @param date rule history 기능으로 필요
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleName(String ruleName, String date, Object ... parameters);

    /**
     * RuleEngine에 script를 변경한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script) throws RuleException;

}
