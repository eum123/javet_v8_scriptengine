package wne.rule.hrs.engine.core.exception;

public class ComponentInstantiationException extends ComponentException {
    public ComponentInstantiationException(String message) {
        super(message);
    }

    public ComponentInstantiationException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public ComponentInstantiationException(Throwable throwable) {
        super(throwable);
    }
}
