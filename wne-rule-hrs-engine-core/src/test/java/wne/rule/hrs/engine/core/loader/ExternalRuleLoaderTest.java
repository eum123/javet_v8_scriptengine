package wne.rule.hrs.engine.core.loader;

import org.assertj.core.util.Lists;
import org.junit.Assert;
import org.junit.Test;
import wne.rule.hrs.engine.core.function.loader.ExternalRuleLoader;

import java.net.URI;
import java.util.Optional;

public class ExternalRuleLoaderTest {
    @Test
    public void test() throws Exception {
        String x = "file:///Users/manjineum/Desktop/00.project/00.shinahnez/00.repository/wne-rule-hrs-engine/wne-rule-hrs-engine-core/src/main/resources/internal/internal.js";

        Optional<String> optional = ExternalRuleLoader.load(Lists.newArrayList(x));

        Assert.assertTrue(optional.isPresent());
    }

    @Test
    public void testDirectory() throws Exception {
        String x = "file:///Users/manjineum/Desktop/00.project/00.shinahnez/00.repository/wne-rule-hrs-engine/wne-rule-hrs-engine-core/src/main/resources/internal";

        Optional<String> optional = ExternalRuleLoader.load(Lists.newArrayList(x));

        Assert.assertTrue(optional.isPresent());
    }

    @Test
    public void testNotFoundDirectory() throws Exception {
        String x = "file:///Users/manjineum/Desktop/00.project/00.shinahnez/00.repository/wne-rule-hrs-engine/wne-rule-hrs-engine-core/src/main/aaa";

        Optional<String> optional = ExternalRuleLoader.load(Lists.newArrayList(x));

        Assert.assertFalse(optional.isPresent());
    }

    @Test
    public void testClassPath() throws Exception {
        String x = "classpath://internal/internal.js";

        Optional<String> optional = ExternalRuleLoader.load(Lists.newArrayList(x));

        Assert.assertTrue(optional.isPresent());
    }

    @Test
    public void testClassPathDirectory() throws Exception {
        String x = "classpath://internal";

        Optional<String> optional = ExternalRuleLoader.load(Lists.newArrayList(x));

        Assert.assertTrue(optional.isPresent());
    }

    @Test
    public void uriTest() throws Exception {
        String uri = "classpath://internal/internal.js";
        URI u = new URI(uri);

        System.out.println(u);
        Assert.assertEquals("classpath", u.getScheme());

        System.out.println(u.getHost());
        System.out.println(u.getPath());
    }
}
