package wne.rule.hrs.engine.core.external;

import org.assertj.core.util.Lists;
import org.junit.Test;
import wne.rule.hrs.engine.core.EngineParameter;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;
import wne.rule.hrs.engine.core.RuleConfig;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;

public class ExternalExecutorTest {

    @Test
    public void test() throws Exception {

        RuleConfig config = RuleConfig.builder().externalScriptPaths(Lists.newArrayList("file://./rule")).maxTotal(2).build();

        RuleEngineFactory factory = new JavetRuleEngineFactory(config);

        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('jdbc:datasourceName?query=select...', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";


        RuleEngine engine = factory.borrow();

        EngineParameter engineParameter = EngineParameter.builder().ruleId("my").ruleName("my").build();

        Object result = engine.executeByScript(engineParameter, script);

        System.out.println("result:" + result);

        factory.terminate();

    }
}
