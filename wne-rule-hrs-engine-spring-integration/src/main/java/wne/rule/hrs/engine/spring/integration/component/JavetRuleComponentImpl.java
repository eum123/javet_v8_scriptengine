package wne.rule.hrs.engine.spring.integration.component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import wne.rule.hrs.engine.core.*;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;
import wne.rule.hrs.engine.spring.integration.properties.RuleServiceProperties;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Slf4j
@RequiredArgsConstructor
@Scope("prototype")
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
    }

    public RuleExecuteResult executeByRuleId(String ruleId, String ruleName, Object ... parameter) throws Exception {
        RuleEngine engine = null;
        try {
            engine = factory.borrow();

            EngineParameter engineParameter = EngineParameter.builder().ruleId(ruleId).ruleName(ruleName).scriptFetcher(scriptFetcher).build();

            return engine.executeByRuleId(engineParameter, parameter);

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
