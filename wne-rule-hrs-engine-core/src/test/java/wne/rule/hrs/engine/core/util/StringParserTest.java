package wne.rule.hrs.engine.core.util;


import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StringParserTest {
    @Test
    public void test() {
        Map m = new HashMap();
        m.put("query", "SELECT * FROM DUAL");

        Assert.assertEquals(m.get("query"), StringParser.parse(m, "${query}"));
    }

    @Test
    public void part_test() {
        Map m = new HashMap();
        m.put("name", "hong");
        m.put("age", 1);

        Assert.assertEquals("select * from dual where name='hong' and age=1", StringParser.parse(m, "select * from dual where name='${name}' and age=${age}"));
    }

    @Test
    public void map_array_map() {
        Map m = new HashMap();
        m.put("key", "value");
        m.put("age", 1);

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);


        Assert.assertEquals("select * from dual where name='hong' and age=1", StringParser.parse(m, "select * from dual where name='${list[0].name}' and age=${age}"));
    }
}
