package wne.rule.hrs.engine.spring.integration.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;

import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class})
public class JavetRuleServiceTest {

    @Autowired
    private RuleService ruleService;

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
    public void 외부함수_호출_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = EXTERNAL.create().execute('jdbc:RuleDataSource?query=select 1', null); \n" +
                "console.log('result:' + result); \n" +
                "return result; \n" +
                "} \n";

        ruleService.updateRule("my", script);

        Map obj = (Map)ruleService.executeByRuleId("my", null);

        Assert.assertEquals(1, obj.get("1"));
    }
}
