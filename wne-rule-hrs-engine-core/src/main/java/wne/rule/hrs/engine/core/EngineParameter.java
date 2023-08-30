package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

@Builder
@ToString
public class EngineParameter {
    @Getter @Setter
    private String ruleId;

    @Getter
    private String ruleName;

    @Getter
    private boolean isDebug;

    @Getter
    private ScriptFetcher scriptFetcher;

}
