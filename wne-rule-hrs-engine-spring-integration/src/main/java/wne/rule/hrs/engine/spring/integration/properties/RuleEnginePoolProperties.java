package wne.rule.hrs.engine.spring.integration.properties;

import lombok.Getter;
import lombok.Setter;

public class RuleEnginePoolProperties {
    @Getter
    @Setter
    private int maxTotal = 1;

    @Getter @Setter
    private int maxWaitMills = 1000;
}
