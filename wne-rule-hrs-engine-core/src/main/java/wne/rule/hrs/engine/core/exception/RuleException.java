package wne.rule.hrs.engine.core.exception;

import lombok.Getter;
import wne.rule.hrs.engine.core.RuleContext;

public class RuleException extends Exception {

    public RuleException(String message) {
        super(message);
    }

    public RuleException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public RuleException(Throwable throwable) {
        super(throwable);
    }


}
