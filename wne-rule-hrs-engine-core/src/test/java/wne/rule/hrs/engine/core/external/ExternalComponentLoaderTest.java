package wne.rule.hrs.engine.core.external;


import org.junit.Assert;
import org.junit.Test;

import java.util.Map;

public class ExternalComponentLoaderTest {
    @Test
    public void test() {
        Map<String, String> map = ExternalComponentLoader.load("wne.rule.hrs.engine");

        Assert.assertNotNull(map);

        Assert.assertTrue(map.size() > 0);
    }

}
