package wne.rule.hrs.engine.spring.integration.vo;

import wne.rule.hrs.engine.core.RuleExecuteResult;

public class RuleResultVoBuilder {
    public static RuleResultVo convert(RuleExecuteResult executeResult) {
        RuleResultVo vo = new RuleResultVo();
        vo.setExecuteLog(executeResult.getExecuteLog());
        vo.setResult(executeResult.getResult());
        vo.setThrowable(executeResult.getThrowable());
        vo.setTraceList(executeResult.getTrace());
        return vo;
    }
}
