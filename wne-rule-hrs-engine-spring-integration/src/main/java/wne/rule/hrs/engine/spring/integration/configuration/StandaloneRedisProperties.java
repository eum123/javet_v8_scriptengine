package wne.rule.hrs.engine.spring.integration.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(value = "spring.redis")
public class StandaloneRedisProperties {

    @Getter @Setter
    private String host;

    @Getter @Setter
    private int port;

    @Getter @Setter
    private int database;

}
