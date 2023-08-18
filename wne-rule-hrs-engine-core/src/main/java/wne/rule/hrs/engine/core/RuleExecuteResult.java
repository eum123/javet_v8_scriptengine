package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;

@Builder
public class RuleExecuteResult {
    @Getter
    private Object result;
}
