package wne.rule.hrs.engine.core.util;

import org.junit.Test;

public class LogFormatHelperTest {
    @Test
    public void test() {
        String format = "dkdkdkdk {} dkdkdk {} ";

        String assemble = LogFormatHelper.assemble(format, "aaa", "bbb");

        System.out.println(assemble);
    }
}
