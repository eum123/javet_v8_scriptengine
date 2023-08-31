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

public class ListTest {
    //@DisplayName("Map 테스트")
    @Test
    public void test() throws Exception {
        String script = "function myfunction(l) {\n" +
                "console.log('list:' + Array.isArray(l)); \n" +
                "console.log('111 : ' + Array.isArray(l[1])); \n" +
                "console.log('111 : ' + Array.isArray(l[2])); \n" +
                "console.log('111 : ' + typeof l); \n" +
                "l.push('c');" +
                "return l; \n" +
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

                    v8Runtime.getExecutor(script).executeVoid();

                    List list = new ArrayList();
                    list.add("a");
                    list.add("b");

                    List list1 = new ArrayList();
                    list1.add(1);
                    list1.add(2);

                    list.add(list1);

                    //객체 생성 테스트
                    Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", list);

                    System.out.println(result);
                    System.out.println("로그결과 : " + byteArrayOutputStream);
                    interceptor.unregister(v8Runtime.getGlobalObject());
                }
            }

        }
    }



}
