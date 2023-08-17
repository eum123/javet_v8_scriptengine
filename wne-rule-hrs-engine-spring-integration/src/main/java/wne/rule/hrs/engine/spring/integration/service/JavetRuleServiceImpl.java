package wne.rule.hrs.engine.spring.integration.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import wne.rule.hrs.engine.core.JavetRuleEngineFactory;
import wne.rule.hrs.engine.core.RuleConfig;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;
import wne.rule.hrs.engine.spring.integration.properties.RuleServiceProperties;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class JavetRuleServiceImpl implements RuleService {
    private final RuleServiceProperties properties;
    private RuleEngineFactory factory = null;

    @PostConstruct
    public void init() throws Exception {

        factory = new JavetRuleEngineFactory(RuleConfig.builder().maxWaitMills(properties.getMaxWaitMills())
                .maxTotal(properties.getMaxTotal())
                .build());
    }

    public Object executeByRuleId(String ruleId, Map parameter) throws Exception {
        RuleEngine engine = factory.borrow();
        return engine.executeByRuleId(ruleId, parameter);
    }

    public Object executeByScript(String script, Map parameter) throws Exception {
        RuleEngine engine = factory.borrow();
        return engine.executeByScript(script, parameter);
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
