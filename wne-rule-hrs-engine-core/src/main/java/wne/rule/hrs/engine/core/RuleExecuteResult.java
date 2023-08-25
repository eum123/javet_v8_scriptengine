package wne.rule.hrs.engine.core;

import com.caoccao.javet.exceptions.JavetExecutionException;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.commons.lang.exception.ExceptionUtils;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@ToString
public class RuleExecuteResult {

    @Getter
    private String ruleId;

    @Getter
    private String ruleName;

    @Getter
    private RuleParameters ruleParameters = new RuleParameters();

    @Getter
    private Object result;

    @Getter @Setter
    @Builder.Default
    private String executeLog = "";

    @Getter
    private Throwable throwable;

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

    @Getter
    private List<RuleExecuteResult> subRuleExecuteResult = new LinkedList<>();

    public RuleExecuteResult(String ruleId, String ruleName) {
        this.ruleId = ruleId;
        this.ruleName = ruleName;
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
    /**
     * sub 함수의 실행 결과를 추가한다..
     * @param list
     */
    public void addSubRuleExecuteResult(List<RuleExecuteResult> list) {
        subRuleExecuteResult.addAll(list);
    }

}
