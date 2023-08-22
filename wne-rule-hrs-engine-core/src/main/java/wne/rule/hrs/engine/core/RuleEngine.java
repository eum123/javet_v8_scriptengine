package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {
    RuleExecuteResult executeByRuleId(String ruleId, Object ... parameters) throws RuleException;

    RuleExecuteResult executeByScript(String script, Map replaceData) throws RuleException;

    /**
     * RuleEngine에 script를 변경한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script) throws RuleException;

}
