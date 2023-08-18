package javet;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.junit.Assert;
import org.junit.Test;

import java.awt.*;

public class DynamicJavaObjectUsageTest {
//    @DisplayName("동적으로 사용자 class 생성 기능")
    @Test
    public void test() throws Exception {
        String script = "function myfunction() {\n" +
                "const obj = Type.of('javet.MyObject'); \n" +
                "return obj.getName(); \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());

            v8Runtime.getGlobalObject().set("Type", new CreateInstance());

            v8Runtime.getExecutor(script).executeVoid();

            Object result = v8Runtime.getGlobalObject().invokeObject("myfunction", null);

            System.out.println(result);

        }
    }

//    @DisplayName("객체 생성 테스트")
    @Test
    public void customObjectTest() throws Exception {
        String script = "function myfunction() {\n" +
                "const obj = new MyObject(); \n" +
                "return obj.getName(); \n" +
                "} \n" ;
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());

            v8Runtime.getGlobalObject().set("MyObject", MyObject.class);

            v8Runtime.getExecutor(script).execute();

            //객체 생성 테스트
            String result = v8Runtime.getGlobalObject().invokeString("myfunction", null);

            System.out.println(result);


            v8Runtime.getGlobalObject().delete("MyObject");
            Assert.assertFalse(v8Runtime.getGlobalObject().has("MyObject"));

        }
    }

//    @DisplayName("static method 테스트")
    @Test
    public void customStaticMethodTest() throws Exception {
        String script = "function myfunction() { \n" +
                "return MyObject.getAge(); \n" +
                "}\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());

            v8Runtime.getGlobalObject().set("MyObject", MyObject.class);

            v8Runtime.getExecutor(script).execute();


            Integer result = v8Runtime.getGlobalObject().invokeInteger("myfunction", null);

            Assert.assertEquals(10, result.intValue());


            v8Runtime.getGlobalObject().delete("MyObject");
            Assert.assertFalse(v8Runtime.getGlobalObject().has("MyObject"));

        }
    }
}
