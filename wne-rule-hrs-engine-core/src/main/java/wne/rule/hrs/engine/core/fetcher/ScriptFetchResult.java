package wne.rule.hrs.engine.core.fetcher;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
public class ScriptFetchResult {
    @Getter @Setter
    private String ruleId;

    @Getter @Setter
    private String ruleName;

    @Getter @Setter
    private String script;
}
