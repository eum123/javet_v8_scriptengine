package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.RuleExecuteResult;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;

import java.math.BigDecimal;
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

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals("hong", obj.getResult());

    }

    @Test
    public void 외부DB_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('jdbc:RuleDataSource?query=select 1', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";

        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

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

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

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

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj);

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

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());

        obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());
        System.out.println("result:" + obj.getResult());

    }

    @Test
    public void BigDecimal_계산_테스트() throws Exception {
        String script = "function my() {\n" +
                "const a = new BigDecimal(10); \n" +
                "const b = new BigDecimal(0); \n" +
                "return a.subtract(b); \n" +
                "} \n"
                ;

        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());

        System.out.println("result:" + obj.getResult());

        BigDecimal a = new BigDecimal(10);
        BigDecimal b = new BigDecimal(2);
        System.out.println(a.subtract(b));
    }


    @Test
    public void 함수_각각호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "context.start('my');\n" +
                "context.addParameter('my', 'key', 'value1'); \n" +
                "console.log('my');\n" +
                "context.end('my', null);\n" +
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

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());

        ruleService.updateRule("my", script);

        obj = ruleService.executeByRuleId("sub", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());

    }

    //오류 발생
    @Test
    public void 숫자함수_숫자변수_테스트() throws Exception {
        final String script = "function 1my() {\n" +
                "context.start('my');\n" +
                "context.addParameter('my', 'key', 'value1'); \n" +
                "console.log('my');\n" +
                "context.end('my', null);\n" +
                "return 'hong'; \n" +
                "} \n" +
                "function sub() {\n" +
                "context.start('sub');\n" +
                "const 1변수 = 'hong'; " +
                "context.addParameter('sub', 'key', 'value1'); \n" +
                "console.log('sub');\n" +
                "context.end('sub');\n" +
                "return 1변수;" +
                "}\n";

        Assert.assertThrows(Exception.class, () -> ruleService.updateRule("1my", script));

        RuleExecuteResult obj = null;

        String script1 = "function sub() {\n" +
                "context.start('sub');\n" +
                "const 1변수 = 'hong'; " +
                "context.addParameter('sub', 'key', 'value1'); \n" +
                "console.log('sub');\n" +
                "context.end('sub');\n" +
                "return 1변수;" +
                "}\n";
        Assert.assertThrows(Exception.class, () -> ruleService.updateRule("sub", script1));


    }

    //테스트 확인 필요
    @Test
    public void 오류_각각호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "context.start('my');\n" +
                "context.addParameter('my', 'key', 'value1'); \n" +
                "console.log('my');\n" +
                "context.end('my', null);\n" +
                "sub(); \n" +

                "return 'hi'; \n" +
                "} \n" +
                "function sub() {\n" +
                "context.start('sub');\n" +
                "context.addParameter('sub', 'key', 'value1'); \n" +
                "var aaa = 0 / 0; \n" +
                "console.log('sub');\n" +
                "context.end('sub');\n" +
                "}\n";

        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());
        System.out.println("exception:" + obj.getThrowable());

        obj = ruleService.executeByRuleId("sub", null);

        System.out.println("execute log:" +obj.getRuleExecuteLog());


    }

    @Test
    public void reference_테스트() throws Exception {
        String script = "function my() {\n" +
                "var map = new HashMap(); \n" +
                "map.name = 'hong';\n " +
                "console.log(map.toString()); \n"+

                "sub(map); \n" +

                "return map; \n" +
                "} \n" +
                "function sub(map) {\n" +
                " map.age = 12; \n" +
                "console.log(map.toString()); \n"+
                "}\n";

        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("result:" +obj.getResult());
        System.out.println("log:" + obj.getRuleExecuteLog());

    }

    @Test
    public void serverLoggerTest() throws Exception {
        String script = "function my() {\n" +
                "LOGGER.debug('dddddd');" +
                "return 'hong'; \n" +
                "}\n";
        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals("hong", obj.getResult());

    }

    @Test
    public void externalClassTest() throws Exception {
        String script = "function my() {\n" +
                "return RuleExternalFunction.isLeapYear('2023');" +
                "}\n";
        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals(false, obj.getResult());

    }

    @Test
    public void externalClassAMTTest() throws Exception {
        String script = "function my() {\n" +
                "return RuleFunction.AMT('2023');" +
                "}\n";
        ruleService.updateRule("my", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        Assert.assertEquals(false, obj.getResult());

    }

}
