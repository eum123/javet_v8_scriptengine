package wne.rule.hrs.engine.core.exception;

import lombok.Getter;
import wne.rule.hrs.engine.core.RuleContext;

public class RuleExecuteException extends RuleException {
    @Getter
    private RuleContext context;
    public RuleExecuteException(RuleContext context, String message) {
        super(message);
        this.context = context;
    }

    public RuleExecuteException(RuleContext context, String message, Throwable throwable) {
        super(message, throwable);
    }

    public RuleExecuteException(RuleContext context, Throwable throwable) {
        super(throwable);
        this.context = context;
    }

}
