package javet;

import org.junit.Test;

public class ValiableParameterTest {
    @Test
    public void test() {
        String name = "name";

        Object[] param = new Object[] {"1", "2"};
        variableMethod(name, param);
    }

    private void variableMethod(String name, Object ... args) {
        System.out.println(name);
        System.out.println(args[0]);
        System.out.println(args[1]);
    }
}
