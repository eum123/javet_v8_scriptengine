package wne.rule.hrs.engine.core.loader;


import org.junit.Assert;
import org.junit.Test;
import wne.rule.hrs.engine.core.function.loader.InternalRuleLoader;

import java.util.Optional;

public class InternalRuleLoaderTest {

//    @DisplayName("예약 함수 읽기 테스트")
    @Test
    public void test() {
        Optional<String> optional = InternalRuleLoader.load();

        Assert.assertTrue(optional.isPresent());

        Assert.assertTrue(optional.get().length() > 0);


    }
}
