package wne.rule.hrs.engine.core;

import org.junit.Test;

public class RuleContextTest {
    @Test
    public void test() throws Exception{
        RuleContext context = new RuleContext(null);
        context.start("rule1");
        context.addParameter("rule1", "param1", "value1");

        Thread.sleep(1000);

        context.start("rule2");


        context.start("rule3");
        context.addParameter("rule3", "param1", "value1");
        context.end("rule3", null);

        Thread.sleep(1000);

        context.start("rule4");
        context.addParameter("rule4", "param1", "value1");
        context.end("rule4", null);

        Thread.sleep(1000);

        context.end("rule2", null);

        Thread.sleep(1000);

        context.end("rule1", null);

        System.out.println(context.getRuleTraces());
    }
}
