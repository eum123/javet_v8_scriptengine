package sample;

import org.junit.Test;

public class ParameterTest {
    @Test
    public void test() {
        method("id");
    }
    private void method(String id, String ... args) {
        System.out.println(args);
    }

}
