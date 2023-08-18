package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class RuleExecuteResult {
    @Getter @Setter
    private Object result;

    @Getter @Setter
    private String executeLog = "";

    @Getter @Setter
    private Throwable throwable;

    @Getter @Setter
    private List<RuleTrace> trace;
}
