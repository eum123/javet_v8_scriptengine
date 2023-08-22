package wne.rule.hrs.engine.core.exception;

import lombok.Getter;

public class EngineResetException extends RuleException {

    public EngineResetException(String message) {
        super(message);
    }

    public EngineResetException(String message, Throwable throwable) {
        super( message, throwable);
    }

    public EngineResetException(Throwable throwable) {
        super(throwable);
    }


}
