package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.ScriptFetcher;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;

import java.math.BigDecimal;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class})
public class JavetRuleComponentNewEngineTest {

    @Autowired
    private RuleComponent ruleService;

    @Test
    public void newEngine_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = context.newEngine('sub').getResult(); \n" +

                "return result; \n" +
                "} \n";


        ruleService.updateRule("my", script);

        ruleService.setScriptFetcher(new DefaultScriptFetcher());


        RuleResultVo obj = ruleService.executeByRuleId("my", null);

        System.out.println("result:" +obj.getResult());
        System.out.println("log:" + obj.getExecuteLog());

    }

    class DefaultScriptFetcher implements ScriptFetcher {

        @Override
        public String fetch(String ruleId) {

            System.out.println("call fetch()");

            return "function sub() {\n" +
                    " return 'hong' \n"+
                    "}\n";
        }
    }
}
