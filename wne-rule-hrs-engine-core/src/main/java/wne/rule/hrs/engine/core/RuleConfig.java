package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
public class RuleConfig {
    @Getter
    private List<String> externalScriptPaths;

    @Getter
    private int maxTotal = 1;

    @Getter
    private int maxWaitMills = 1000;
}
