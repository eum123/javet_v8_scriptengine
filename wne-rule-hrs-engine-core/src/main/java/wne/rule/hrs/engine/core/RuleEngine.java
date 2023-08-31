package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.Map;

public interface RuleEngine {

    /**
     * ruleId로 실행.
     * scriptfetcher가 없는 경우 ruleId로 실행하고 scriptfetcher가 있는 경우 ruleId로 script를 조회 후 실행
     * @param engineParameter
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleId(EngineParameter engineParameter, Object ... parameters);

    /**
     * 입력한 script를 실행
     * @param engineParameter
     * @param script
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByScript(EngineParameter engineParameter, String script, Object ... parameters);

    /**
     * rule 이름으로 실행.
     * ScriptFetcher가 없으면 오류 발생.
     * scriptFetcher로 script 조회 후 ruleId설정됨.
     * @param engineParameter
     * @param baseDate
     * @param parameters
     * @return
     */
    RuleExecuteResult executeByRuleName(EngineParameter engineParameter, String baseDate, Object ... parameters);

    /**
     * 스크립트 단순 문법 검사.
     * @param engineParameter
     * @param script
     * @return
     * @throws Exception
     */
    boolean validateScript(EngineParameter engineParameter, String script) throws Exception;


    /**
     * RuleEngine에 script를 변경한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script) throws RuleException;

}
