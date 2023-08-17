package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;

@Builder
public class RuleConfig {
    @Getter
    private String externalScriptPath;

    @Getter
    private int maxTotal = 1;

    @Getter
    private int maxWaitMills = 1000;
}
