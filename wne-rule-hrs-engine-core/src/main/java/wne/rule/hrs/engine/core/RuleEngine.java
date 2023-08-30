package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {

    /**
     *
     * @param engineParameter
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleId(EngineParameter engineParameter, Object ... parameters);

    RuleExecuteResult executeByScript(EngineParameter engineParameter, String script, Object ... parameters);

    RuleExecuteResult executeByRuleName(EngineParameter engineParameter, String baseDate, Object ... parameters);

//    /**
//     * rule Id로 script를 실행한다.
//     * scriptfetcher가 없는 경우 ruleId로 실행을 하며 등록된 ruleId가 없는 경우 오류가 발생된다.
//     * @param ruleId
//     * @param ruleName
//     * @param parameters
//     * @return
//     */
//    RuleExecuteResult executeByRuleId(String ruleId, String ruleName, Object ... parameters);
//
//    /**
//     * rule Id로 script를 실행한다.
//     * scriptfetcher가 없는 경우 ruleId로 실행을 하며 등록된 ruleId가 없는 경우 오류가 발생된다.
//     * @param isDebug true인 경우 scriptfetcher에서 debug용 script를 조회한다. ture - debug 모드, false - 일반 모드
//     * @param ruleId
//     * @param ruleName
//     * @param parameters
//     * @return
//     */
//    RuleExecuteResult executeByRuleId(boolean isDebug, String ruleId, String ruleName, Object ... parameters);

//    /**
//     * script를 입력 받아 실행한다.
//     * @param isDebug true인 경우 scriptfetcher에서 debug용 script를 조회한다. ture - debug 모드, false - 일반 모드
//     * @param ruleId
//     * @param ruleName
//     * @param script
//     * @param parameters
//     * @return
//     */
//    RuleExecuteResult executeByRuleIdAndScript(boolean isDebug, String ruleId, String ruleName, String script, Object ... parameters);
//
//    /**
//     * 룰 이름으로 scriptfetcher를 통해 script를 조회 하여 실행 한다.
//     * 반드시 script  fetcher가 필요하다.
//     * @param ruleName
//     * @param date rule history 기능으로 필요
//     * @param parameters
//     * @return
//     */
//    RuleExecuteResult executeByRuleName(String ruleName, String date, Object ... parameters);
//
//    /**
//     * 룰 이름으로 scriptfetcher를 통해 script를 조회 하여 실행 한다.
//     * 반드시 script  fetcher가 필요하다.
//     * @param isDebug true인 경우 scriptfetcher에서 debug용 script를 조회한다. ture - debug 모드, false - 일반 모드
//     * @param ruleName
//     * @param date
//     * @param parameters
//     * @return
//     */
//    RuleExecuteResult executeByRuleName(boolean isDebug, String ruleName, String date, Object ... parameters);

    /**
     * RuleEngine에 script를 변경한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script) throws RuleException;

}
