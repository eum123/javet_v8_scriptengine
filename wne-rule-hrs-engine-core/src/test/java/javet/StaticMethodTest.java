package javet;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.junit.Assert;
import org.junit.Test;

public class StaticMethodTest {

    @Test
    public void staticMehtodTest() throws Exception {
        String script = "var f = function() {\n" +
                "return MERGE.merge('hong', '1'); \n" +
                "} \n" +
                "\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            v8Runtime.setConverter(new JavetProxyConverter());
            v8Runtime.getGlobalObject().set("MERGE", this);
            v8Runtime.getExecutor(script).executeVoid();

            String result =v8Runtime.getGlobalObject().invokeObject("f");

            Assert.assertEquals("hong1", result);

        }

    }

    public static String merge(String a, String b) {
        return a + b;
    }
}
