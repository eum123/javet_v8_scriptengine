package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.RuleExecuteResult;
import wne.rule.hrs.engine.core.ScriptFetcher;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class})
public class JavetRuleComponentNewEngineTest {

    @Autowired
    private RuleComponent ruleService;

    @Test
    public void newEngine_테스트() throws Exception {
        String script = "function my() {\n" +
                "var result = CONTEXT.newEngine('sub'); \n" +

                "return result; \n" +
                "} \n";


        ruleService.updateRule("my", script);

        ruleService.setScriptFetcher(new DefaultScriptFetcher());


        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("result:" +obj.getResult());


    }

    class DefaultScriptFetcher implements ScriptFetcher {

        @Override
        public String fetch(String ruleId, String ruleName) {

            System.out.println("call fetch()");

            return "function sub() {\n" +
                    " return 'hong' \n"+
                    "}\n";
        }
    }
}
