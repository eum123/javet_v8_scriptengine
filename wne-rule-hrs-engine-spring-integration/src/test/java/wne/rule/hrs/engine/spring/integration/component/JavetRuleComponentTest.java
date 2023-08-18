package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;

import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class})
public class JavetRuleComponentTest {

    @Autowired
    private RuleComponent ruleService;

    @Test
    public void test() throws Exception {
        String script = "function my() {\n" +
                "return 'hong'; \n" +
                "}\n";
        ruleService.updateRule("my", script);

        Object obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals("hong", obj);

    }

    @Test
    public void 외부DB_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('jdbc:RuleDataSource?query=select 1', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";

        ruleService.updateRule("my", script);

        RuleResultVo obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals(1, ((Map)obj.getResult()).get("1"));
    }

    @Test
    public void 외부Bean_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('bean:myBean?method=hello', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";

        ruleService.updateRule("my", script);

        RuleResultVo obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals(1, ((Map)obj.getResult()).get("1"));
    }

    @Test
    public void context_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "context.start('my');\n" +
                "context.addParameter('my', 'key', 'value1'); \n" +
                "console.log('my');\n" +
                "context.end('my');\n" +
                "sub(); \n" +

                "return 'hi'; \n" +
                "} \n" +
                "function sub() {\n" +
                "context.start('sub');\n" +
                "context.addParameter('sub', 'key', 'value1'); \n" +
                "console.log('sub');\n" +
                "context.end('sub');\n" +
                "}\n";

        ruleService.updateRule("my", script);

        RuleResultVo obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getExecuteLog());
        System.out.println("trace:" + obj.getTraceList());

    }


    @Test
    public void break_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "context.start('my');\n" +
                "context.addParameter('my', 'key', 'value1'); \n" +
                "console.log('before braek');\n" +


                "console.log('after break');\n" +
                "context.end('my');\n" +


                "return 'hi'; \n" +
                "} \n"
                ;

        ruleService.updateRule("my", script);

        RuleResultVo obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getExecuteLog());
        System.out.println("trace:" + obj.getTraceList());

    }
}
