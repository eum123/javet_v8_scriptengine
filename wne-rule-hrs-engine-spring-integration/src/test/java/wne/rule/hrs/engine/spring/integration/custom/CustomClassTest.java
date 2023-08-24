package wne.rule.hrs.engine.spring.integration.custom;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.values.reference.V8ValueObject;
import org.junit.Assert;
import org.junit.Test;

public class CustomClassTest {

    @Test
    public void staticMehtodTest() throws Exception {
        String script = "var f = function() {\n" +
                " a.amt('1'); \n" +
                "return a.CAL_LEAP_MONTS(Type.of('java.sql.Date'), Type.of('java.sql.Date')); \n" +
                 "} \n" +
                "\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            v8Runtime.setConverter(new JavetProxyConverter());

            V8ValueObject v8ValueObject  = v8Runtime.createV8ValueObject();
            v8Runtime.getGlobalObject().set("a", v8ValueObject);

            v8ValueObject.bind(new RuleFunctionTest());
            v8ValueObject.bind(new RuleExternalFunction());

//            v8Runtime.getGlobalObject().set("RuleExternalFunction", new RuleExternalFunction());
            //v8Runtime.getGlobalObject().set("RuleFunction", RuleFunction.class);
            v8Runtime.getExecutor(script).executeVoid();



            Object result =v8Runtime.getGlobalObject().invokeObject("f");

            System.out.println(result);



        }

    }
}
