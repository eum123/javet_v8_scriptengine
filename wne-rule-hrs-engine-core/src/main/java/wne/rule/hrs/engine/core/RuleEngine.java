package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {
    Object executeByRuleId(String ruleId, Map parameters) throws RuleException;

    Object executeByScript(String script, Map parameter) throws RuleException;

}
