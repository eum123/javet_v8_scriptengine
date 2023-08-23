package wne.rule.hrs.engine.spring.integration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;


@SpringBootApplication(scanBasePackages = "wne.rule.hrs.engine.spring.integration")
public class TestApplication {
    public static void main(String[] args) {

        //test
//        System.setProperty("spring.profiles.active", "core-test, oauth-security");
//        System.setProperty("spring.config.location", "classpath:application.yml");

        SpringApplication app = new SpringApplication(TestApplication.class);
        app.addListeners(new ApplicationPidFileWriter());
        app.run(args);


    }
}
