package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.RuleExecuteResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class})
public class JavetRuleComponentNewEngineTest {

    @Autowired
    private RuleComponent ruleService;

    @Test
    public void newEngine_테스트() throws Exception {


        ruleService.setScriptFetcher(new DefaultScriptFetcher());


        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("result:" +obj);


    }

    class DefaultScriptFetcher implements ScriptFetcher {

        private int order = 0;

        @Override
        public ScriptFetchResult fetchByRuleId(String ruleId) {

            System.out.println("call fetchByRuleId ()");

            String script = "function my() {\n" +
                    "CONTEXT.getLogger().debug('my'); \n" +
                    "var result = CONTEXT.newEngineByName('sub', 'date'); \n" +

                    "return result; \n" +
                    "} \n";

            return ScriptFetchResult.builder().ruleId(ruleId)
                    .ruleName("my")
                    .script(script)
                    .build();
        }


        @Override
        public ScriptFetchResult fetchByRuleName(String ruleName, String date) {
            System.out.println("call fetchByRuleName ()");

            if(order == 0) {
                order++;
                return ScriptFetchResult.builder()
                        .ruleId("sub")
                        .ruleName("sub")
                        .script("function sub() {\n" +
                                "CONTEXT.getLogger().debug('sub'); \n" +
                                "var a = NEW_ENGINE_BY_NAME('sub1', 'date'); \n" +
                                " return a + CONTEXT.newEngineByName('sub1', 'date'); \n" +
                                "}\n")
                        .build();
            } else {
                return ScriptFetchResult.builder().ruleName("sub" + order)
                        .ruleId("sub1")
                        .script("function sub1() {\n" +
                                "CONTEXT.getLogger().debug('sub1'); \n" +
                                " return 'hong' \n" +
                                "}\n")
                        .build();
            }
        }
    }

}
