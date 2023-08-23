package wne.rule.hrs.engine.spring.integration.properties;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "hrs.rule.engine:pool")
public class RuleServiceProperties {

    @Getter @Setter
    private int maxTotal = 1;

    @Getter @Setter
    private int maxWaitMills = 1000;

    @Setter @Getter
    @Builder.Default
    private List<String> externalScriptPaths = new ArrayList<>();
}
