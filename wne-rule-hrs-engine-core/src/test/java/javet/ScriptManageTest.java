package javet;

import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapSample {
    //@DisplayName("Map 테스트")
    @Test
    public void hashMapTest() throws Exception {
        String script = "function myfunction() {\n" +
                "const map = new HashMap(); \n" +
                "map.name = 'hong'; \n" +

                "console.log('map:' + typeof map); \n" +
                "return map; \n" +
                "} \n" ;
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            try (ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()) {
                try (PrintStream printStream = new PrintStream(byteArrayOutputStream)) {
                    JavetStandardConsoleInterceptor interceptor =
                            new JavetStandardConsoleInterceptor(v8Runtime);
                    interceptor.setLog(printStream);
                    interceptor.register(v8Runtime.getGlobalObject());

                    //반드시 필요
                    v8Runtime.setConverter(new JavetProxyConverter());

                    v8Runtime.getGlobalObject().set("HashMap", HashMap.class);

                    v8Runtime.getExecutor(script).executeVoid();

                    //객체 생성 테스트
                    Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", null);

                    System.out.println(result);
                    System.out.println("로그결과 : " + byteArrayOutputStream);
                    interceptor.unregister(v8Runtime.getGlobalObject());
                }
            }

        }
    }

    //@DisplayName("Map 테스트")
    @Test
    public void mapListTest() throws Exception {
        String script = "function myfunction() {\n" +
                "const map = new HashMap(); \n" +
                "map.name = 'hong'; \n" +
                "const list = new ArrayList(); \n" +
                "list[0] = 'aaa';\n" +
                "list[1] = 'bbb';\n" +
                "map.list = list; \n" +
                "console.log('map:' + typeof map); \n" +
                "return map; \n" +
                "} \n" ;
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            try (ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()) {
                try (PrintStream printStream = new PrintStream(byteArrayOutputStream)) {
                    JavetStandardConsoleInterceptor interceptor =
                            new JavetStandardConsoleInterceptor(v8Runtime);
                    interceptor.setLog(printStream);
                    interceptor.register(v8Runtime.getGlobalObject());

                    //반드시 필요
                    v8Runtime.setConverter(new JavetProxyConverter());

                    v8Runtime.getGlobalObject().set("HashMap", HashMap.class);
                    v8Runtime.getGlobalObject().set("ArrayList", ArrayList.class);

                    v8Runtime.getExecutor(script).executeVoid();

                    //객체 생성 테스트
                    Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", null);

                    System.out.println(result);
                    System.out.println("로그결과 : " + byteArrayOutputStream);
                    interceptor.unregister(v8Runtime.getGlobalObject());
                }
            }

        }
    }

    //@DisplayName("Map중에 배열 조회 테스트")
    @Test
    public void hashMapListTest() throws Exception {
        String script = "function main(map) {\n" +
                "console.log('name:' + map.name); \n" +
                "console.log('list:' + map.list[0]); \n" +
                "return map; \n" +
                "} \n" ;

        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            try (ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()) {
                try (PrintStream printStream = new PrintStream(byteArrayOutputStream)) {
                    JavetStandardConsoleInterceptor interceptor =
                            new JavetStandardConsoleInterceptor(v8Runtime);
                    interceptor.setLog(printStream);
                    interceptor.register(v8Runtime.getGlobalObject());

                    //반드시 필요
                    v8Runtime.setConverter(new JavetProxyConverter());

                    //값 생성
                    Map<String, Object> map = new HashMap<>();
                    map.put("name", "hong");
                    List list = new ArrayList();
                    list.add("aaaa");
                    list.add("bbbb");
                    map.put("list", list);

                    v8Runtime.getExecutor(script).executeVoid();

                    //객체 생성 테스트
                    Map result = v8Runtime.getGlobalObject().invokeObject("main", map);

                    System.out.println(result);
                    System.out.println("로그결과 : " + byteArrayOutputStream);
                    interceptor.unregister(v8Runtime.getGlobalObject());
                }
            }

        }
    }

}
