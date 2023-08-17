package wne.rule.hrs.engine.core.util;


import org.junit.Assert;
import org.junit.Test;

public class JdbcUrlParseTest {

    @Test
    public void test() {
        String[] aaa = URIParser.parseUri("jdbc:datasourceTypeName?a=1");

        Assert.assertEquals("jdbc", aaa[0]);
        Assert.assertEquals("datasourceTypeName", aaa[1]);
        Assert.assertEquals("a=1", aaa[2]);
    }

    @Test
    public void 공백_테스트() {
        String[] aaa = URIParser.parseUri("jdbc:datasourceName?query=SELECT 1");
        Assert.assertNotNull(aaa);
        Assert.assertEquals("jdbc", aaa[0]);
        Assert.assertEquals("datasourceName", aaa[1]);
        Assert.assertEquals("query=SELECT 1", aaa[2]);
    }
}
