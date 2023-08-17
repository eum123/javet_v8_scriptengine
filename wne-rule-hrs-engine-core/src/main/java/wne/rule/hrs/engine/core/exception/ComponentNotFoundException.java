package wne.rule.hrs.engine.core.exception;

public class ComponentNotFoundException extends ComponentException {
    public ComponentNotFoundException(String message) {
        super(message);
    }

    public ComponentNotFoundException(String message, Throwable throwable) {
        super(message, throwable);
    }
}
