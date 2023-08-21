package javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.exceptions.JavetExecutionException;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.values.IV8Value;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.RuleConfig;
import wne.rule.hrs.engine.core.RuleEngineFactory;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.component.RuleComponent;
import wne.rule.hrs.engine.spring.integration.vo.RuleResultVo;

import java.util.ArrayList;
import java.util.List;


public class DBSearchTest {


    @Test
    public void test() throws Exception {

        RuleEngineFactory factory = null;
        factory = new JavetRuleEngineFactory(RuleConfig.builder().maxWaitMills(1000)
                .maxTotal(100)
                .build());

        String script = "function b() {\n" +
                "return 'c'; \n" +
                "} \n" +
                "function myfunction() {\n" +
                "for(var i = 0 ;i<10; i++) { \n" +
                "const obj = Type.of('javet.DBSelect'); \n" +
                "obj.execute(factory, 'premium_increment_단건'); \n" +
                "} \n" +
                "return '1';\n" +
                "} \n" +
                "function a() { \n" +
                "return 'h';\n" +
                "}\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());


            v8Runtime.getGlobalObject().set("Type", new CreateInstance());
            v8Runtime.getGlobalObject().set("factory", factory);

            v8Runtime.getExecutor(script).executeVoid();

            Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", null);

            System.out.println(result);



        } catch(JavetExecutionException e) {
            System.out.println("Error line number: " + e.getScriptingError().getLineNumber());
            System.out.println("Error column number: " + e.getScriptingError().getMessage());
            throw e;
        }
    }

    @Test
    public void redisTest() throws Exception {

        RuleEngineFactory factory = null;
        factory = new JavetRuleEngineFactory(RuleConfig.builder().maxWaitMills(1000)
                .maxTotal(1)
                .build());

        String script = "function b() {\n" +
                "return 'c'; \n" +
                "} \n" +
                "function myfunction() {\n" +
                "for(var i = 0 ;i<10; i++) { \n" +
                "const obj = Type.of('javet.RedisSelect'); \n" +
                "obj.execute(factory, 'premium_increment_단건'); \n" +
                "} \n" +
                "return '1';\n" +
                "} \n" +
                "function a() { \n" +
                "return 'h';\n" +
                "}\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());


            v8Runtime.getGlobalObject().set("Type", new CreateInstance());
            v8Runtime.getGlobalObject().set("factory", factory);

            v8Runtime.getExecutor(script).executeVoid();

            Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", null);

            System.out.println(result);



        } catch(JavetExecutionException e) {
            System.out.println("Error line number: " + e.getScriptingError().getLineNumber());
            System.out.println("Error column number: " + e.getScriptingError().getMessage());
            throw e;
        }
    }
}
