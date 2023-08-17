package wne.rule.hrs.engine.core.loader;


import org.junit.Assert;
import org.junit.Test;

import java.util.Optional;
import java.util.Properties;

public class ReservedObjectsLoaderTest {

//    @DisplayName("예약 객체 설정 읽기 테스트")
    @Test
    public void test() {
        Optional<Properties> optional = ReservedObjectLoader.load();
        Assert.assertTrue(optional.isPresent());

        Assert.assertTrue(optional.get().size() > 0);
    }
}
