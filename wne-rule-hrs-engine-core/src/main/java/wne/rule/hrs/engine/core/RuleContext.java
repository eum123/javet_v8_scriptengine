package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;


@Slf4j
public class RuleContext {

    @Getter
    private EngineParameter engineParameter;


    private RuleEngineFactory factory;

    private RuleLogger logger = new RuleLogger(this);

    @Getter @Setter
    private RuleExecuteResult ruleExecuteResult;

//
//    public RuleContext(RuleEngineFactory factory, String ruleId, String ruleName) {
//        this.factory = factory;
//        this.ruleId = ruleId;
//        this.ruleName = ruleName;
//        this.ruleExecuteResult = new RuleExecuteResult(ruleId, ruleName);
//    }
//
    public RuleContext(RuleEngineFactory factory, EngineParameter engineParameter) {
        this.factory = factory;
        this.engineParameter = engineParameter;
        this.ruleExecuteResult = new RuleExecuteResult(engineParameter.getRuleId(), engineParameter.getRuleName());
    }


    /**
     * 시작 시간 설정
     */
    public void start() {
        ruleExecuteResult.setStartTime(System.currentTimeMillis());
    }

    /**
     * script parameter 추가.
     *
     * @param key
     * @param value
     */
    public void addParameter(String key, Object value) {
        ruleExecuteResult.addParameter(key, value);
    }

    /**
     * script 처리 결과 저장
     * @param result
     */
    public void end(Object result) {
        ruleExecuteResult.setResult(result);
    }

    /**
     * 대기중인 engine 개수
     * @return
     */
    public int getIdle() {
        return factory.getIdle();
    }

    /**
     * 사용중인 engine 개수
     * @return
     */
    public int getActive() {
        return factory.getActive();
    }

    /**
     * 설정한 최대 engine 개수
     * @return
     */
    public int getMaxTotal() {
        return factory.getMaxTotal();
    }

    public ScriptFetchResult fetchByRuleName(String baseDate) throws Exception {

        ScriptFetcher scriptFetcher = this.engineParameter.getScriptFetcher();

        if(scriptFetcher == null) {
            throw new Exception("ScriptFetcher not found");
        }

        ScriptFetchResult result = scriptFetcher.fetchByRuleName(engineParameter.getRuleName(), baseDate);

        //이름으로 ruleId를 조회 하므로 현재 ruleId를 변경한다. 반드시 필요하다.
        this.engineParameter.setRuleId(result.getRuleId());
        this.ruleExecuteResult.updateRuleId(result);

        return result;
    }
    public ScriptFetchResult fetchByRuleId() throws Exception {

        ScriptFetcher scriptFetcher = this.engineParameter.getScriptFetcher();

        if(scriptFetcher == null) {
            return null;
        }

        return scriptFetcher.fetchByRuleId(engineParameter.getRuleId());
    }

    /**
     * 새로운 rule engine을 생성하여 실행.
     * @return
     */
    public Object newEngineByName(String ruleName, String date, Object ... args) {

        try {

            //동일 이름에 ID가 다를수 있으나 history라서 이름으로 비교해도 로직상 문제 없을거라 판단됨
            if(this.engineParameter.getRuleName() != null && this.engineParameter.getRuleName().equalsIgnoreCase(ruleName)) {
                throw new RuntimeException("not support recursive function. ruleName : " + ruleName);
            }

            RuleEngine engine = factory.borrow();

            log.info("NEW ENGINE(Java) ruleName:{}, date:{}, Parameter:{}", ruleName, date, args);

            //ruleId는 scriptfecher에서 조회 후 설정된다.
            EngineParameter subEngineParameter = EngineParameter.builder()
                    .ruleName(ruleName)
                    .isDebug(this.engineParameter.isDebug())
                    .scriptFetcher(this.engineParameter.getScriptFetcher())
                    .build();

            RuleExecuteResult result =  engine.executeByRuleName(subEngineParameter, date, args);
            result.setParentRuleId(this.engineParameter.getRuleId());    //parent urleId 설정
log.debug(ruleName + "===========>{}" + result.getSubRuleExecuteResult() );
            //append sub result
            this.ruleExecuteResult.addSubRuleExecuteResult(result);

            return result.getResult();

        } catch (RuleException | InterruptedException e) {
            //engine 생성 오류
            throw new RuntimeException(e);
        }
    }

    public RuleLogger getLogger() {
        return logger;
    }

}
