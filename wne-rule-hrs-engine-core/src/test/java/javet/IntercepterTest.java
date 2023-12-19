package javet;

import com.caoccao.javet.annotations.V8Function;
import com.caoccao.javet.annotations.V8Property;
import com.caoccao.javet.exceptions.JavetError;
import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.exceptions.JavetExecutionException;
import com.caoccao.javet.interception.BaseJavetInterceptor;
import com.caoccao.javet.interception.logging.JavetStandardConsoleInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.callback.JavetCallbackContext;
import com.caoccao.javet.interop.executors.IV8Executor;
import com.caoccao.javet.utils.SimpleMap;
import com.caoccao.javet.values.V8Value;
import com.caoccao.javet.values.reference.IV8ValueObject;
import com.caoccao.javet.values.reference.V8Script;
import com.caoccao.javet.values.reference.V8ValueObject;
import org.junit.Assert;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class IntercepterTest {

    @Test
    public void intercepterTest() throws Exception {
        String script = "function getName() { \n" +
                "   BREAK(); \n" +
                "   return 'hong'; \n" +
                "} \n" +
                "function main() { \n" +
                "   return getName(); \n" +
                "} \n" +
                "function BREAK() { \n" +
                "   var a = false;" +
                "   try { \n" +
                "       a = service.break(); \n" +
                "       console.log('a:' + a); \n" +
                "   } catch (e) {} \n"+

                "   if(a) { \n" +
                "       console.log('aaaaa'); \n" +
                "       throw 'stop'; \n" +
                "   } \n" +
                "} \n"
                ;



        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            BreakPointIntercepter intercepter = new BreakPointIntercepter(v8Runtime);
            intercepter.register(v8Runtime.getGlobalObject());

            JavetStandardConsoleInterceptor javetStandardConsoleInterceptor = new JavetStandardConsoleInterceptor(v8Runtime);
            javetStandardConsoleInterceptor.register(v8Runtime.getGlobalObject());

            new Thread(() -> {
                try {
                    System.out.println("start wait");

                    Thread.sleep(5000);

                    intercepter.noti();
//                    intercepter.notAndThrow();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }

            }).start();

            // Step 4: Bind the interceptor to a variable.
            try (V8ValueObject v8ValueObject = v8Runtime.createV8ValueObject()) {
                v8Runtime.getGlobalObject().set("a", v8ValueObject);
            }

            // Test property name
            v8Runtime.getExecutor(script).executeVoid();
            try {
                Object result = v8Runtime.getGlobalObject().invokeObject("main");

                System.out.println("result:" + result);
            } catch (JavetExecutionException e) {
                //script에서 throw ''; 를 하면 오류가 발생된다.
                System.out.println(e.getMessage());
                e.printStackTrace();
            }

            // Step 5: Delete the interceptor.
            v8Runtime.getGlobalObject().delete("a");
            // Step 6: Unregister console.
            intercepter.unregister(v8Runtime.getGlobalObject());
            javetStandardConsoleInterceptor.unregister(v8Runtime.getGlobalObject());

            // Step 7: Notify V8 to perform GC. (Optional)
            v8Runtime.lowMemoryNotification();

        }

    }



    //    @DisplayName("함수 호출 기능")
    @Test
    public void functionTest() throws Exception {
        String script = "function getName() {\n" +
                "return 'hong'; \n" +
                "}\n";



        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            // Step 2: Register console.
            JavetStandardConsoleInterceptor javetStandardConsoleInterceptor = new JavetStandardConsoleInterceptor(v8Runtime);
            javetStandardConsoleInterceptor.register(v8Runtime.getGlobalObject());
            // Step 3: Create an interceptor.
            TestInterception testInterceptor = new TestInterception();
            // Step 4: Bind the interceptor to a variable.
            try (V8ValueObject v8ValueObject = v8Runtime.createV8ValueObject()) {
                v8Runtime.getGlobalObject().set("a", v8ValueObject);
                v8ValueObject.bind(testInterceptor);
            }

            // Test property name
            v8Runtime.getExecutor("console.log(`a.name is initially ${a.name}.`);").executeVoid(); // null
            // a.name setter => setName(String name)
            v8Runtime.getExecutor("a.name = 'Javet';").executeVoid();
            // name is changed
       //     System.out.println("Interceptor name is " + testInterceptor.getName() + "."); // Javet
            // a.name getter => getName()
            v8Runtime.getExecutor("console.log(`a.name is now ${a.name}.`);").executeVoid(); // Javet

            // Test property value
            v8Runtime.getExecutor("console.log(`a.value is initially ${a.value}.`);").executeVoid(); // 0
            // a.value setter => setValue(String value)
            v8Runtime.getExecutor("a.value = 123;").executeVoid();
            // value is changed
            System.out.println("Interceptor value is " + testInterceptor.getValue() + "."); // 123
            // a.value getter => getValue()
            v8Runtime.getExecutor("console.log(`a.value is now ${a.value}.`);").executeVoid(); // 123

            // Test functions
            v8Runtime.getExecutor("console.log(`a.increaseAndGet() is ${a.increaseAndGet()}.`);").executeVoid(); // 124
            v8Runtime.getExecutor("console.log(`a.add(76) is ${a.add(76)}.`);").executeVoid(); // 200

            // Step 5: Delete the interceptor.
            v8Runtime.getGlobalObject().delete("a");
            // Step 6: Unregister console.
            javetStandardConsoleInterceptor.unregister(v8Runtime.getGlobalObject());
            // Step 7: Notify V8 to perform GC. (Optional)
            v8Runtime.lowMemoryNotification();

        }

    }



    class TestInterception {
        private String name;
        private int value;

        @V8Property
        public String getName() {



            return name;
        }

        @V8Property
        public void setName(String name) {
            this.name = name;
        }

        @V8Property
        public int getValue() {
            return value;
        }

        @V8Property
        public void setValue(int value) {
            this.value = value;
        }

        @V8Function
        public int increaseAndGet() {
            return ++value;
        }

        @V8Function
        public int add(int delta) {

            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            value += delta;
            return value;
        }
    }

}
