package wne.rule.hrs.engine.spring.integration.sample;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.service.SampleGenerator;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class})
public class SampleGeneratorTest {

    @Autowired
    private SampleGenerator sampleGenerator;

    @Test
    public void generateSample() {
        sampleGenerator.executeQueryAndWriteToFile();
    }
}
