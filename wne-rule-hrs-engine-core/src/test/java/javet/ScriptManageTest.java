package javet;

import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.interop.executors.IV8Executor;
import org.junit.Assert;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ScriptManageTest {
    //@DisplayName("Map 테스트")
    @Test
    public void scriptDelete() throws Exception {
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

                    IV8Executor executor = v8Runtime.getExecutor(script);
                    executor.executeVoid();

                    Assert.assertTrue(v8Runtime.getGlobalObject().has("HashMap"));
                    Assert.assertTrue(v8Runtime.getGlobalObject().has("myfunction"));

                    v8Runtime.getGlobalObject().delete("myfunction");

                    Assert.assertTrue(v8Runtime.getGlobalObject().has("myfunction"));

                    v8Runtime.resetContext();

                    Assert.assertFalse(v8Runtime.getGlobalObject().has("myfunction"));
                    Assert.assertFalse(v8Runtime.getGlobalObject().has("HashMap"));


                }
            }

        }
    }



}
