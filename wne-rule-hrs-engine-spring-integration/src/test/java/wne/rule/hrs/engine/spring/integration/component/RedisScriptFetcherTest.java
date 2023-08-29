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
import wne.rule.hrs.engine.spring.integration.configuration.StandaloneRedisProperties;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class, CacheConfiguration.class, StandaloneRedisProperties.class})
@ActiveProfiles("test")
public class RedisScriptFetcherTest {

    @Autowired
    private RedisScriptFetcher scriptFetcher;

    @Test
    public void test() throws Exception {
        Assert.assertNotNull(scriptFetcher);

        ScriptFetchResult result1 = scriptFetcher.fetchByRuleName("일반_공통_보상한도금액사이값입력가능금액기준표", "20230101");

    }

}
