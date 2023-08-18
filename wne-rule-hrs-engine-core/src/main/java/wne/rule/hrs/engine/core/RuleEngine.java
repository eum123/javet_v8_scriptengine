package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {
    RuleExecuteResult executeByRuleId(String ruleId, Map parameters) throws RuleException;

    RuleExecuteResult executeByScript(String script, Map parameter) throws RuleException;

}
