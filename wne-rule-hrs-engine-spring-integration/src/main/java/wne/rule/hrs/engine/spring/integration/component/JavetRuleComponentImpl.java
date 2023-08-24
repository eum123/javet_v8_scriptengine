package wne.rule.hrs.engine.spring.integration.component;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;
import wne.rule.hrs.engine.core.*;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;
import wne.rule.hrs.engine.spring.integration.properties.RuleServiceProperties;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVoBuilder;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class JavetRuleComponentImpl implements RuleComponent {
    private final RuleServiceProperties properties;
    private RuleEngineFactory factory = null;

    private ScriptFetcher scriptFetcher;

    @PostConstruct
    public void init() throws Exception {

        factory = new JavetRuleEngineFactory(RuleConfig.builder().maxWaitMills(properties.getPool().getMaxWaitMills())
                .maxTotal(properties.getPool().getMaxTotal())
                .externalScriptPaths(properties.getExternalScriptPaths())
                .externalClasses(properties.getExternalClasses())
                .build());
    }

    public void setScriptFetcher(ScriptFetcher scriptFetcher) {
        this.scriptFetcher = scriptFetcher;
        this.factory.setScriptFetcher(scriptFetcher);
    }

    public RuleResultVo executeByRuleId(String ruleId, String ruleName, Object ... parameter) throws Exception {
        RuleEngine engine = null;
        try {
            engine = factory.borrow();
            RuleExecuteResult r = engine.executeByRuleId(ruleId, ruleName, parameter);

            return RuleResultVoBuilder.convert(r);
        } finally {
            if(engine != null) {
                factory.release(engine);
            }
        }
    }


    public void updateRule(String ruleId, String script) {
        factory.update(ruleId, script);
    }

    @PreDestroy
    public void destroy() {
        if(this.factory != null) {
            factory.terminate();
        }
    }
}
