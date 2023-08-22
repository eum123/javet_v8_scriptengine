package wne.rule.hrs.engine.core.exception;

import lombok.Getter;

public class EngineInitializationException extends RuleException {

    public EngineInitializationException(String message) {
        super(message);
    }

    public EngineInitializationException(String message, Throwable throwable) {
        super( message, throwable);
    }

    public EngineInitializationException(Throwable throwable) {
        super(throwable);
    }


}
