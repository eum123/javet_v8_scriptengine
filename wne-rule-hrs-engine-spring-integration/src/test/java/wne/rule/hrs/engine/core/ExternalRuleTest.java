package wne.rule.hrs.engine.core;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.assertj.core.util.Lists;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.loader.ExternalRuleLoader;
import wne.rule.hrs.engine.core.loader.InternalRuleLoader;
import wne.rule.hrs.engine.core.loader.ReservedObjectLoader;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Properties;

public class ExternalRuleTest {
    private static Logger logger = LoggerFactory.getLogger(ExternalRuleTest.class);

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
        v8Runtime.getExecutor(ExternalRuleLoader.load(Lists.newArrayList("classpath://external/")).orElse("")).executeVoid();

        v8Runtime.getGlobalObject().set("out", System.out);


    }


    @Test
    public void GET_NEW_DATE() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("GET_NEW_DATE"));

        Object result = null;
        String script = "" +
                "const arr = '20230801'; \n" +
                "GET_NEW_DATE(arr);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        System.out.println(result);

    }

    @Test
    public void GET_DATE_STR_FORMAT() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("GET_DATE_STR_FORMAT"));

        Object result = null;
        String script = "" +
                "const arr = '20230801'; \n" +
                "GET_DATE_STR_FORMAT(arr);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        System.out.println(result);

    }

    @Test
    public void CAL_DAYS_BETWEEN() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("CAL_DAYS_BETWEEN"));

        Object result = null;
        String script = "" +
                "let arr = '20230801'; \n" +
                "let arr1 = '20230804'; \n " +
                "CAL_DAYS_BETWEEN(arr, arr1);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        System.out.println(result);

    }

    //TODO 결과 이상. 검증 필요
    @Test
    public void CAL_HOURS_BETWEEN() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("CAL_HOURS_BETWEEN"));

        Object result = null;
        String script = "" +
                "let arr = '20230801100101'; \n" +
                "let arr1 = '20230801120101'; \n " +
                "CAL_HOURS_BETWEEN(arr, arr1);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        System.out.println(result);

    }

    //TODO 결과 이상. 검증 필요
    @Test
    public void CAL_MINUTES_BETWEEN() throws Exception{
        Assert.assertTrue(v8Runtime.getGlobalObject().has("CAL_MINUTES_BETWEEN"));

        Object result = null;
        String script = "" +
                "let arr = '20230801100101'; \n" +
                "let arr1 = '20230801120101'; \n " +
                "CAL_MINUTES_BETWEEN(arr, arr1);\n";

        result = v8Runtime.getExecutor(script).executeObject();
        System.out.println(result);

    }


}
