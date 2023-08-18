package wne.rule.hrs.engine.spring.integration.component;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;
import wne.rule.hrs.engine.core.RuleConfig;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;
import wne.rule.hrs.engine.core.RuleExecuteResult;
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

    @PostConstruct
    public void init() throws Exception {

        factory = new JavetRuleEngineFactory(RuleConfig.builder().maxWaitMills(properties.getMaxWaitMills())
                .maxTotal(properties.getMaxTotal())
                .build());
    }

    public RuleResultVo executeByRuleId(String ruleId, Map parameter) throws Exception {
        RuleEngine engine = null;
        try {
            engine = factory.borrow();
            RuleExecuteResult r = engine.executeByRuleId(ruleId, parameter);

            return RuleResultVoBuilder.convert(r);
        } finally {
            if(engine != null) {
                factory.release(engine);
            }
        }
    }

    public RuleResultVo executeByScript(String script, Map parameter) throws Exception {

        RuleEngine engine = null;
        try {
            engine = factory.borrow();
            RuleExecuteResult r = engine.executeByScript(script, parameter);

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
