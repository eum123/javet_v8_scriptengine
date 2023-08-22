package wne.rule.hrs.engine.core.pool;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ToString
@Builder
public class ObjectPoolConfig {
    @Getter
    @Builder.Default
    private int maxTotal = 1;

    @Getter
    @Builder.Default
    private int maxWaitMills = 1000;

    @Getter
    @Builder.Default
    private ObjectCreatePolicy objectCreatePolicy = ObjectCreatePolicy.INCREASE;

    @Getter
    @Builder.Default
    private boolean reset = true;
}
