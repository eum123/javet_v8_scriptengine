package wne.rule.hrs.engine.core.exception;

public class ComponentException extends Exception {
    public ComponentException(String message) {
        super(message);
    }

    public ComponentException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public ComponentException(Throwable throwable) {
        super(throwable);
    }
}
