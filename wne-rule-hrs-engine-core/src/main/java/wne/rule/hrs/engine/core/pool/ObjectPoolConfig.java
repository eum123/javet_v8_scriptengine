package wne.rule.hrs.engine.core.pool;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ToString
@Builder
public class ObjectPoolConfig {
    @Getter
    private int maxTotal = 1;

    @Getter
    private int maxWaitMills;
}
