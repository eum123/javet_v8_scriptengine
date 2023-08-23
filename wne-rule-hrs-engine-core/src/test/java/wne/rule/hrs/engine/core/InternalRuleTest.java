package wne.rule.hrs.engine.core;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.loader.InternalRuleLoader;
import wne.rule.hrs.engine.core.loader.ReservedObjectLoader;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Date;
import java.util.Properties;

public class InternalRuleTest {
    private static Logger logger = LoggerFactory.getLogger(InternalRuleTest.class);

    private V8Runtime v8Runtime = null;

    private ByteArrayOutputStream byteArrayOutputStream;
    private PrintStream printStream;
    private JavetStandardConsoleInterceptor interceptor;

    @Before
    public void init() throws Exception {
        v8Runtime = V8Host.getV8Instance().createV8Runtime();
        v8Runtime.setConverter(new JavetProxyConverter());

        //reserved java object
        Properties properties = ReservedObjectLoader.load().orElseThrow(() -> new ComponentException("Reserved Properties not found"));
        properties.entrySet().forEach(x -> {

            try {
                v8Runtime.getGlobalObject().set(x.getKey(), Class.forName((String)x.getValue()));
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            } catch (JavetException e) {
                throw new RuntimeException(e);
            }
        });

        v8Runtime.getExecutor(InternalRuleLoader.load().orElse("")).executeVoid();

        v8Runtime.getGlobalObject().set("out", System.out);


    }

    @Test
    public void TODAY_FORMAT() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("TODAY_FORMAT"));

        String result = v8Runtime.getGlobalObject().invokeObject("TODAY_FORMAT", (int)System.currentTimeMillis());
        System.out.println(result);
    }
    @Test
    public void ABS() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("ABS"));

        Object result = v8Runtime.getGlobalObject().invokeObject("ABS", -11);
        Assert.assertEquals(11, result);
    }

    @Test
    public void CEIL() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("CEIL"));

        Object result = v8Runtime.getGlobalObject().invokeObject("CEIL", 11.1);
        Assert.assertEquals(12, result);
    }

    @Test
    public void FLOOR() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("FLOOR"));

        Object result = v8Runtime.getGlobalObject().invokeObject("FLOOR", 11.1);
        Assert.assertEquals(11, result);
    }

    @Test
    public void MAX() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("MAX"));
        Object result = v8Runtime.getGlobalObject().invokeObject("MAX", 11, 12, 14, 4, 20);
        Assert.assertEquals(20, result);

    }

    @Test
    public void MIN() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("MIN"));
        Object result = v8Runtime.getGlobalObject().invokeObject("MIN", 11, 12, 14, 4, 20);
        Assert.assertEquals(4, result);
    }

    @Test
    public void POW() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("POW"));
        Object result = v8Runtime.getGlobalObject().invokeObject("POW", 3, 2);
        Assert.assertEquals(9, result);
    }

    @Test
    public void RANDOM() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("POW"));
        Object result = v8Runtime.getGlobalObject().invokeObject("RANDOM");
        System.out.println(result);
    }

    @Test
    public void IS_EMPTY() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("IS_EMPTY"));
        Object result = v8Runtime.getGlobalObject().invokeObject("IS_EMPTY");
        Assert.assertEquals(true, result);

        result = v8Runtime.getGlobalObject().invokeObject("IS_EMPTY", " ");
        Assert.assertEquals(false, result);

    }

    @Test
    public void IS_EMPTY_OBJECT() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("IS_EMPTY_OBJECT"));

        Object result = null;
        String script = "" +
                "const arr = []; \n" +
                "IS_EMPTY_OBJECT(arr);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        Assert.assertTrue((Boolean)result);

        script = "" +
                "var arr1; \n" +
                "IS_EMPTY_OBJECT(arr1);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        Assert.assertTrue((Boolean)result);

        script = "" +
                "const arr2 = [1]; \n" +
                "IS_EMPTY_OBJECT(arr2);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        Assert.assertFalse((Boolean)result);
    }


}
