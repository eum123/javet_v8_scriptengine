package wne.rule.hrs.engine.core.util;


import org.junit.Test;

import java.util.Map;

public class URISupportTest {
    @Test
    public void test() throws Exception {
        String parameter = "a=1";

        Map<String, Object> map = URISupport.parseQuery(parameter);

        System.out.println(map);

    }


    @Test
    public void queryTest() throws Exception {
        String parameter = "query=select * from a where a='1'";

        Map<String, Object> map = URISupport.parseQuery(parameter);

        System.out.println(map);

    }

    @Test
    public void bindQueryTest() throws Exception {
        String parameter = "query=select * from a where a='1' and b='${name}'&name=aaa";

        Map<String, Object> map = URISupport.parseQuery(parameter);

        System.out.println(map);

    }
}
