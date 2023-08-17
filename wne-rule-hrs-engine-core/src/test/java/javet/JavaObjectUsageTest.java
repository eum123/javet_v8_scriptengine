package javet;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import org.junit.Assert;
import org.junit.Test;

import java.awt.*;

public class JavaObjectUsageTest {
//    @DisplayName("sample method call")
    @Test
    public void test() throws Exception {
        String script = "function myfunction() {\n" +
                "const obj = new MyObject(); \n" +
                "return obj.getName(); \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            //반드시 필요
            v8Runtime.setConverter(new JavetProxyConverter());

            v8Runtime.getGlobalObject().set("Color", Color.class);
            System.out.println(v8Runtime.getExecutor("Color.pink.toString();").executeString());
            System.out.println("The enum in JavaScript is the one in Java: " +
                    (Color.pink == (Color) v8Runtime.getExecutor("Color.pink;").executeObject()));
            v8Runtime.getGlobalObject().delete("Color");

            Assert.assertFalse(v8Runtime.getGlobalObject().has("Color"));

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
