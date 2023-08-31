package javet;

import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetBridgeConverter;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.interop.executors.IV8Executor;
import com.caoccao.javet.values.reference.V8Script;
import org.junit.Assert;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class SampleTest {
    @Test
    public void sample() throws Exception {
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {
            System.out.println(v8Runtime.getExecutor("'Hello Javet'").executeString());
        }
    }

//    @DisplayName("함수 호출 기능")
    @Test
    public void functionTest() throws Exception {
        String script = "function getName() {\n" +
                "return 'hong'; \n" +
                "}\n";



        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).executeVoid();

            String result = v8Runtime.getGlobalObject().invokeString("getName");

            System.out.println(result);

        }

    }

//    @DisplayName("함수 확인 기능")
    @Test
    public void hasFunctionTest() throws Exception {
        String script = "function getName() {\n" +
                "return 'hong'; \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).execute();


            Assert.assertTrue(v8Runtime.getGlobalObject().has("getName"));
            Assert.assertFalse(v8Runtime.getGlobalObject().has("getName1"));


        }

    }

//    @DisplayName("스크립트 내용 조회")
    @Test
    public void printScriptTest() throws Exception {
        String script = "function getName() {\n" +
                "return 'hong'; \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            IV8Executor executor = v8Runtime.getExecutor(script);

            System.out.println(executor.getScriptString());


        }

    }

//    @DisplayName("함수 삭제 기능 - 동작 안함")
    @Test
    public void createFunctionTest() throws Exception {
        String script = "function getName() {\n" +
                "return 'hong'; \n" +
                "} \n" +
                "function getAge() { \n" +
                "return 10; \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).execute();

            Assert.assertTrue(v8Runtime.getGlobalObject().has("getName"));
            Assert.assertTrue(v8Runtime.getGlobalObject().has("getAge"));

            v8Runtime.getGlobalObject().delete("getName");


            System.out.println(v8Runtime.getGlobalObject().has("getName"));

//            Assertions.assertFalse(v8Runtime.getGlobalObject().has("getName"));


        }

    }

//    @DisplayName("Executor 객체 확인")
    @Test
    public void printMultiScriptTest() throws Exception {
        String script1 = "function getName() {\n" +
                "return 'hong'; \n" +
                "} \n";
        String script2 = "function getAge() {\n" +
                "return getName() + '1'; \n" +
                "} \n";

        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            IV8Executor executor1 = v8Runtime.getExecutor(script1);
            executor1.execute();

            System.out.println(executor1.getScriptString());

            IV8Executor executor2 = v8Runtime.getExecutor(script2);
            executor2.execute();

            System.out.println(executor2.getScriptString());

            Assert.assertNotEquals(executor1, executor2);

            Assert.assertTrue(v8Runtime.getGlobalObject().has("getName"));
            Assert.assertTrue(v8Runtime.getGlobalObject().has("getAge"));


            String result = v8Runtime.getGlobalObject().invokeString("getName", null);
            Assert.assertEquals("hong", result);

            result = v8Runtime.getGlobalObject().invokeString("getAge", null);
            Assert.assertEquals("hong1", result);

        }

    }

    @Test
    public void duplicateFunctionTest() throws Exception {
        String script1 = "function getName() {\n" +
                "return 'hong'; \n" +
                "} \n";
        String script2 = "function getName() {\n" +
                "return 'gil'; \n" +
                "} \n";

        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script1).execute();
            v8Runtime.getExecutor(script2).execute();

            Assert.assertTrue(v8Runtime.getGlobalObject().has("getName"));

            String result = v8Runtime.getGlobalObject().invokeString("getName", null);
            Assert.assertEquals("gil", result);


        }
    }

//    @DisplayName("한글 함수 호출 기능")
    @Test
    public void koreaFunctionNameTest() throws Exception {
        String script = "function 한글함수() {\n" +
                "return 'hong'; \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).execute();

            String result = v8Runtime.getGlobalObject().invokeString("한글함수");

            Assert.assertEquals("hong", result);

        }

    }

//    @DisplayName("한글 parameter 호출 기능")
    @Test
    public void koreaParameterTest() throws Exception {
        String script = "function 한글함수(나이) {\n" +
                "return 'hong' + 나이; \n" +
                "} \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).executeVoid();

            String result = v8Runtime.getGlobalObject().invokeString("한글함수", 1);

            Assert.assertEquals("hong1", result);

        }

    }


//    @DisplayName("빈값 테스트")
    @Test
    public void emptyTest() throws Exception {
        String script = "";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).executeVoid();

        }

    }


    @Test
    public void newFunctionTest() throws Exception {
        String script = "var f = function(나이) {\n" +
                "return 'hong' + 나이; \n" +
                "} \n" +
                "f(1); \n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            String result = v8Runtime.getExecutor(script).executeString();

            Assert.assertEquals("hong1", result);

        }

    }

    @Test
    public void newFunction1Test() throws Exception {
        String script = "var f = function(나이) {\n" +
                "return 'hong' + 나이; \n" +
                "} \n" +
                "\n";
        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            v8Runtime.getExecutor(script).executeVoid();

            String result =v8Runtime.getGlobalObject().invokeObject("f", 1);

            Assert.assertEquals("hong1", result);

        }

    }

    @Test
    public void 문법검증_테스트() throws Exception {
        String script1 = "function getName(a, b, c) {\n" +
                "fun(); \n" +
                "aaaa = 1 and 2; \n" +
                "hong.date = 1; \n" +
                "return 'hong'; \n" +
                "} \n";

        try (V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime()) {

            IV8Executor iV8Executor = v8Runtime.getExecutor(script1);

            try (V8Script v8Script = iV8Executor.compileV8Script()) {
                assertNotNull(v8Script);
                byte[] initializedCachedData = v8Script.getCachedData();
                assertTrue(initializedCachedData != null && initializedCachedData.length > 0);
            }

        }
    }


}
