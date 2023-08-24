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


}
