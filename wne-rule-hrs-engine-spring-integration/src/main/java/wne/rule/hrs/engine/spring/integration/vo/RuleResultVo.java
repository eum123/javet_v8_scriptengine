package wne.rule.hrs.engine.spring.integration.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import wne.rule.hrs.engine.core.RuleTrace;

import java.util.List;

public class RuleResultVo {
    @Getter @Setter
    private Object result;

    @Getter @Setter
    private List<RuleTrace> traceList;
    @Getter @Setter
    private Throwable throwable;
    @Getter @Setter
    private String executeLog = "";


}
