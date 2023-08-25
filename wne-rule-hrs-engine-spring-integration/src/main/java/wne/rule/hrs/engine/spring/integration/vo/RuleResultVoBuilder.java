package wne.rule.hrs.engine.spring.integration.vo;

import wne.rule.hrs.engine.core.RuleExecuteResult;

public class RuleResultVoBuilder {
    public static RuleResultVo convert(RuleExecuteResult executeResult) {
        RuleResultVo vo = new RuleResultVo();
        vo.setExecuteLog(executeResult.getRuleExecuteLog());
        vo.setResult(executeResult.getResult());
        vo.setThrowable(executeResult.getThrowable());

        return vo;
    }
}
