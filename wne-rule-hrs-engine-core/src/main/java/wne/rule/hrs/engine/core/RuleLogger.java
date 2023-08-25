package wne.rule.hrs.engine.core;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.exception.ExceptionUtils;
import wne.rule.hrs.engine.core.RuleContext;
import wne.rule.hrs.engine.core.util.LogFormatHelper;

@Slf4j
public class RuleLogger {
    private RuleContext context = null;
    public RuleLogger(RuleContext context) {
        this.context = context;
    }
    public void debug(String message) {
        context.getRuleExecuteResult().appendRuleExecuteLog(message);
        log.debug(message);
    }

    public void debug(String format, Object ... args) {
        context.getRuleExecuteResult().appendRuleExecuteLog(LogFormatHelper.assemble(format, args));
        log.debug(format, args);
    }

    public void info(String message) {
        context.getRuleExecuteResult().appendRuleExecuteLog(message);
        log.info(message);
    }

    public void info(String format, Object ... args) {
        context.getRuleExecuteResult().appendRuleExecuteLog(LogFormatHelper.assemble(format, args));
        log.info(format, args);
    }

    public void warn(String message) {
        context.getRuleExecuteResult().appendRuleExecuteLog(message);
        log.warn(message);
    }

    public void warn(String format, Object ... args) {
        context.getRuleExecuteResult().appendRuleExecuteLog(LogFormatHelper.assemble(format, args));
        log.warn(format, args);
    }

    public void error(String message) {
        context.getRuleExecuteResult().appendRuleExecuteLog(message);
        log.error(message);
    }
    public void error(String message, Throwable throwable) {
        context.getRuleExecuteResult().appendRuleExecuteLog(message);
        context.getRuleExecuteResult().appendRuleExecuteLog(ExceptionUtils.getStackTrace(throwable));

        log.error(message, throwable);
    }

    public void error(String format, Object ... args) {
        context.getRuleExecuteResult().appendRuleExecuteLog(LogFormatHelper.assemble(format, args));
        log.error(format, args);
    }
}
