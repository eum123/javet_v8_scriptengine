package wne.rule.hrs.engine.core;


import org.assertj.core.util.Lists;
import org.junit.Assert;
import org.junit.Test;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.exception.RuleExecuteException;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;

public class NotFoundRuleTest  {
    @Test
    public void test() throws Exception {

        RuleConfig config = RuleConfig.builder().externalScriptPaths(Lists.newArrayList("file://./rule")).maxTotal(2).build();

        RuleEngineFactory factory = new JavetRuleEngineFactory(config);

        String script = "function my() {\n" +

                "return 'hi'; \n" +
                "} \n";

        factory.update("my", script);


        RuleEngine engine = factory.borrow();

        EngineParameter engineParameter = EngineParameter.builder().ruleId("noname").ruleName("noname").build();

        Assert.assertThrows(RuleException.class, () -> {
            engine.executeByRuleId(engineParameter);
        });


        factory.terminate();

    }
}
