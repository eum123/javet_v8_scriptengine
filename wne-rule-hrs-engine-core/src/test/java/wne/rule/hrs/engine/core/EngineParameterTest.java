package wne.rule.hrs.engine.core;

import org.junit.Test;
import wne.rule.hrs.engine.core.EngineParameter;

public class EngineParameterTest {
    @Test
    public void test() {
        EngineParameter parameter = EngineParameter.builder()
                .ruleId("ruleId")
                .build();

        System.out.println(parameter.getRuleName());
    }
}
