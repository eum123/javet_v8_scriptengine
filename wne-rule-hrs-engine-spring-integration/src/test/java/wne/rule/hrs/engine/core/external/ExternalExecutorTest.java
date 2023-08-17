package wne.rule.hrs.engine.core.external;

import org.junit.Test;
import wne.rule.hrs.engine.core.JavetRuleEngineFactory;
import wne.rule.hrs.engine.core.RuleConfig;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;

public class ExternalExecutorTest {

    @Test
    public void test() throws Exception {

        RuleConfig config = RuleConfig.builder().externalScriptPath("./rule").maxTotal(2).build();

        RuleEngineFactory factory = new JavetRuleEngineFactory(config);

        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('jdbc:datasourceName?query=select...', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";

        factory.update("my", script);


        RuleEngine engine = factory.borrow();
        Object result = engine.executeByRuleId("my", null);

        System.out.println("result:" + result);

        factory.terminate();

    }
}