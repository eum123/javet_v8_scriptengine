package wne.rule.hrs.engine.core.exception;

import lombok.Getter;

public class RuleResetException extends RuleException {
    @Getter
    private String ruleId;

    public RuleResetException(String ruleId, String message) {
        super(message);
        this.ruleId = ruleId;
    }

    public RuleResetException(String ruleId, String message, Throwable throwable) {
        super( message, throwable);
        this.ruleId = ruleId;
    }

    public RuleResetException(String ruleId, Throwable throwable) {
        super(throwable);
        this.ruleId = ruleId;
    }


}
