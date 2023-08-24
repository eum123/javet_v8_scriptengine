package wne.rule.hrs.engine.core.javet;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.RuleContext;

@Slf4j
public class RuleLogger {
    private RuleContext context = null;
    public RuleLogger(RuleContext context) {
        this.context = context;
    }
    public void debug(String message) {
        log.debug(message);
    }

    public void debug(String format, Object ... args) {
        log.debug(format, args);
    }

    public void info(String message) {
        log.info(message);
    }

    public void info(String format, Object ... args) {
        log.info(format, args);
    }

    public void warn(String message) {
        log.warn(message);
    }

    public void warn(String format, Object ... args) {
        log.warn(format, args);
    }

    public void error(String message) {
        log.error(message);
    }
    public void error(String message, Throwable throwable) {
        log.error(message, throwable);
    }

    public void error(String format, Object ... args) {
        log.error(format, args);
    }
}
