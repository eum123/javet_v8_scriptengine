package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Assert;
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
public class ProRuleFunctionTest {
    @Autowired
    private RuleComponent ruleService;
    @Test
    public void _GET_GLOBAL() throws Exception {
        String script = "function my() {\n" +
                "_SET_GLOBAL('my', 'hong');" +
                "CONTEXT.getLogger().debug('log:{}', _GET_GLOBAL('my'));" +

                "return 'hong'; \n" +
                "} \n";
        ruleService.updateRule("my", script);

        ruleService.setScriptFetcher(new DefaultScriptFetcher());

        RuleExecuteResult obj = ruleService.executeByRuleId("my", null);

        System.out.println("result:" +obj);

        Assert.assertEquals(1, obj.getGlobalVariable("my").size());

    }


}
class DefaultScriptFetcher implements ScriptFetcher {

    @Override
    public ScriptFetchResult fetchByRuleId(String ruleId) {

        String script = "function sample() {\n" +
                "return 'a'; \n" +
                "} \n";

        return ScriptFetchResult.builder().ruleId(ruleId)
                .ruleName("sample")
                .script(script)
                .build();
    }


    @Override
    public ScriptFetchResult fetchByRuleName(String ruleName, String date) {

        return ScriptFetchResult.builder()
                .ruleId("sub")
                .ruleName("sub")
                .script("function sub() {\n" +
                        "}\n")
                .build();

    }

    @Override
    public void setDebug(boolean isDebug) {

    }
}
