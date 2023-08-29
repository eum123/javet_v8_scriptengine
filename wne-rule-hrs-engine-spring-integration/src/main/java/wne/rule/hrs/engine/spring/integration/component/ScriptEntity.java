package wne.rule.hrs.engine.spring.integration.component;

import lombok.Builder;
import lombok.Getter;

import java.util.Date;

@Builder
public class ScriptEntity {
    @Getter
    private String ruleName;
    @Getter
    private String ruleId;
    @Getter
    private String ruleCodeContent;
    @Getter
    private String ruleCodeContentDebug;
    @Getter
    private Date startEffectiveDate;
    @Getter
    private Date endEffectiveDate;

    public String getScript(boolean isDebug) {
        if(isDebug) {
            return ruleCodeContentDebug;
        } else {
            return ruleCodeContent;
        }

    }
}
