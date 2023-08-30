package wne.rule.hrs.engine.core;

import com.caoccao.javet.exceptions.JavetExecutionException;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.commons.lang.exception.ExceptionUtils;

import java.util.*;

@ToString
public class RuleExecuteResult {

    @Getter @Setter
    private String parentRuleId;

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    /** 입력 parameter */
    @Getter
    private RuleParameters ruleParameters = new RuleParameters();

    /** 실행 결과 */
    @Getter
    private Object result;

    /** 실행 로그 */
    @Setter
    @Builder.Default
    private StringBuilder ruleExecuteLog = new StringBuilder();

    @Getter
    private Throwable throwable;

    /** 시작 시간 */
    @Getter @Setter
    @Builder.Default
    private long startTime = 0;

    @Getter @Setter
    @Builder.Default
    private long endTime = 0;

    /** script 오류에만 사용. 에러 라인 번호 */
    @Getter @Setter
    private int errorLineNumber;

    /** script 오류에만 사용. 에러 메시지 */
    @Getter @Setter
    private String errorMessage;

    /** script 오류에만 사용. 에러 상세 메시지 */
    @Getter @Setter
    private String errorDetailMessage;

    /** sub rule의 실행 결과 */
    private List<RuleExecuteResult> subRuleExecuteResult = new LinkedList<>();

    /** global variable */
    private Map<String, List<Object>> globalVariable = new HashMap<>();

    public RuleExecuteResult(String ruleId, String ruleName) {
        this.ruleId = ruleId;
        this.ruleName = ruleName;
    }

    public void appendRuleExecuteLog(String message) {
        this.ruleExecuteLog.append(message);
        this.ruleExecuteLog.append("\r\n");
    }
    public String getRuleExecuteLog() {
        return ruleExecuteLog.toString();
    }

    /**
     * Throwable을 String으로 변환
     * @return
     */
    public String convertTrowableToString() {
        if(throwable != null) {
            return ExceptionUtils.getStackTrace(throwable);
        }
        return "";
    }

    public void setResult(Object result) {
        this.endTime = System.currentTimeMillis();
        this.result = result;
    }

    public void addParameter(String key, Object value) {
        ruleParameters.add(key, value);
    }

    public void setThrowable(Throwable throwable) {
        this.throwable = throwable;

        if(throwable instanceof JavetExecutionException) {
            JavetExecutionException javetExecutionException = (JavetExecutionException)throwable;

            this.errorLineNumber = javetExecutionException.getScriptingError().getLineNumber();
            this.errorMessage = javetExecutionException.getScriptingError().getMessage();
            this.errorDetailMessage = javetExecutionException.getScriptingError().getDetailedMessage();
        }
    }

    /**
     * sub 함수의 실행 결과를 추가한다.
     * @param result
     */
    public void addSubRuleExecuteResult(RuleExecuteResult result) {
        subRuleExecuteResult.add(result);

    }

    public List<RuleExecuteResult> getSubRuleExecuteResult() {
        List<RuleExecuteResult> list = new LinkedList<>();
        for (RuleExecuteResult executeResult : subRuleExecuteResult) {

            list.add(executeResult.copy());

            List<RuleExecuteResult> subList = executeResult.getSubRuleExecuteResult();
            if(!subList.isEmpty()) {
                //sub 실행 결과가 있는 경우
                list.addAll(getSubRuleExecuteResult(subList));
            }
        }

        return list;
    }

    private List<RuleExecuteResult> getSubRuleExecuteResult(List<RuleExecuteResult> list) {
        List<RuleExecuteResult> newList = new LinkedList<>();
        for (RuleExecuteResult executeResult : list) {

            newList.add(executeResult.copy());

            List<RuleExecuteResult> subList = executeResult.getSubRuleExecuteResult();
            if(!subList.isEmpty()) {
                //sub 실행 결과가 있는 경우
                newList.addAll(getSubRuleExecuteResult(subList));
            }
        }

        return newList;
    }

    public List<Object> getGlobalVariable(String key) {
        if(globalVariable.containsKey(key)) {
            return globalVariable.get(key);
        } else {
            List<Object> list = new ArrayList();
            globalVariable.put(key, list);
            return globalVariable.get(key);
        }
    }
    public void setGlobalVariable(String key, Object value) {
        getGlobalVariable(key).add(value);
    }

    /**
     * subRuleExecuteResult를 제외한 모든 내용을 복사한다.
     * 변수가 추가되면 수정해야 한다.
     * @return
     */
    public RuleExecuteResult copy() {
        RuleExecuteResult ruleExecuteResult = new RuleExecuteResult(this.ruleId, this.ruleName);
        ruleExecuteResult.ruleExecuteLog = this.ruleExecuteLog;
        ruleExecuteResult.result = this.result;
        ruleExecuteResult.endTime = this.endTime;
        ruleExecuteResult.startTime = this.startTime;
        ruleExecuteResult.errorDetailMessage = this.errorDetailMessage;
        ruleExecuteResult.errorMessage = this.errorMessage;
        ruleExecuteResult.errorLineNumber = this.errorLineNumber;
        ruleExecuteResult.ruleParameters = this.ruleParameters;
        ruleExecuteResult.throwable = throwable;
        ruleExecuteResult.globalVariable = globalVariable;
        ruleExecuteResult.parentRuleId = this.parentRuleId;

        return ruleExecuteResult;
    }

}
