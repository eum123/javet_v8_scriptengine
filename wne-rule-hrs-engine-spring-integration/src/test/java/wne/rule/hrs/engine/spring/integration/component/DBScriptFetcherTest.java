package wne.rule.hrs.engine.spring.integration.component;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.configuration.CacheConfiguration;

import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class, CacheConfiguration.class})
@ActiveProfiles("test")
public class DBScriptFetcherTest {

    @Autowired
    private DBScriptFetcher scriptFetcher;

    @Test
    public void test() throws Exception {
        Assert.assertNotNull(scriptFetcher);

        ScriptFetchResult result1 = scriptFetcher.fetchByRuleName("일반_공통_보상한도금액사이값입력가능금액기준표", "20230101");

        ScriptFetchResult result2 = scriptFetcher.fetchByRuleName("일반_공통_보상한도금액사이값입력가능금액기준표", "20230101");

        ScriptFetchResult result3 = scriptFetcher.fetchByRuleName("손사_후유장해_(구)구장해동일계열구분2", "20230101");

        scriptFetcher.evict();

        ScriptFetchResult result4 = scriptFetcher.fetchByRuleName("일반_공통_보상한도금액사이값입력가능금액기준표", "20230101");
    }

}
