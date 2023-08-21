package wne.rule.hrs.engine.core.pool;

public enum ObjectCreatePolicy {
    INCREASE(0);

    private int code;

    private ObjectCreatePolicy(int code) {
        this.code = code;
    }
}
