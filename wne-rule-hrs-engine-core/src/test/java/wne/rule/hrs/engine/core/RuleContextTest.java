package wne.rule.hrs.engine.core;

import org.junit.Test;

public class RuleContextTest {
    @Test
    public void test() throws Exception{
        RuleContext context = new RuleContext(null, "id", "name");
        context.start();
        context.addParameter("param1", "value1");

        Thread.sleep(1000);
        context.end("END");

        System.out.println(context.getRuleExecuteResult());
    }
}
