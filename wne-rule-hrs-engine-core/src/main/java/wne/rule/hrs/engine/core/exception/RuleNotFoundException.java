package wne.rule.hrs.engine.core.exception;

import lombok.Getter;
import wne.rule.hrs.engine.core.RuleContext;

public class RuleNotFoundException extends RuleException {
    @Getter
    private String ruleId;

    public RuleNotFoundException(String ruleId, String message) {
        super(message);
        this.ruleId = ruleId;
    }

    public RuleNotFoundException(String ruleId, String message, Throwable throwable) {
        super( message, throwable);
        this.ruleId = ruleId;
    }

    public RuleNotFoundException(String ruleId, Throwable throwable) {
        super(throwable);
        this.ruleId = ruleId;
    }


}
