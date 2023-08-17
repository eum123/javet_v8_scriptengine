package wne.rule.hrs.engine.core.util;


import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapHelperTest {

//    @DisplayName("기본 테스트")
    @Test
    public void test() {
        Map m = new HashMap();
        m.put("key", "value");

        Object obj = MapHelper.find(m, "key");

        Assert.assertEquals("value", obj);
    }

//    @DisplayName("list 조회")
    @Test
    public void arrayTest() {
        Map m = new HashMap();
        m.put("key", "value");

        List list = new ArrayList();
        list.add("aaaaa");
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals("bbbbb", MapHelper.find(m, "list[1]"));
    }

//    @DisplayName("map_list_map 구조 테스트")
    @Test
    public void map_array_map() {
        Map m = new HashMap();
        m.put("key", "value");

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals("hong", MapHelper.find(m, "list[0].name"));
    }

//    @DisplayName("빈 map 테스트")
    @Test
    public void empty_map() {
        Map m = new HashMap();

        Assert.assertEquals("", MapHelper.find(m, "list[0].name"));
    }

//    @DisplayName("배열이 아닌데 잘못 설정한 배열 테스트")
    @Test
    public void invalid_array() {
        Map m = new HashMap();
        m.put("key", "value");

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals("", MapHelper.find(m, "key[0]"));
    }

//    @DisplayName("배열인데 잘못 설정한 배열 테스트")
    @Test
    public void invalid_map() {
        Map m = new HashMap();
        m.put("key", "value");

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals(list, MapHelper.find(m, "list"));
    }

//    @DisplayName("배열이 아닌데 잘못 설정한 배열 테스트")
    @Test
    public void invalid_array_map() {
        Map m = new HashMap();
        m.put("key", "value");

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals("", MapHelper.find(m, "key[0].name[0]"));
    }

//    @DisplayName("잘못 선언한 index ")
    @Test
    public void invalid_index() {
        Map m = new HashMap();
        m.put("key", "value");

        Map m1 = new HashMap();
        m1.put("name", "hong");
        m1.put("age", 10);

        List list = new ArrayList();
        list.add(m1);
        list.add("bbbbb");
        m.put("list", list);

        Assert.assertEquals("", MapHelper.find(m, "list[3]"));
    }
}
