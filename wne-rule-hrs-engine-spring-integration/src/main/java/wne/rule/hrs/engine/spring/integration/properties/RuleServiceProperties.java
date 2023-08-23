package wne.rule.hrs.engine.spring.integration.properties;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "hrs.rule.engine.javet")
public class RuleServiceProperties {

    @Setter @Getter
    private RuleEnginePoolProperties pool;

    @Setter @Getter
    @Builder.Default
    private List<String> externalScriptPaths = new ArrayList<>();

    @Setter
    @Builder.Default
    private Map<String, String> externalClasses = new HashMap<>();

    public void addExternalClass(String name, String classString) {
        //검증
        try {
            Class c = Class.forName(classString);

            this.externalClasses.put(name, classString);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public void addExternalClass(String classString) {
        try {
            //검증
            Class c = Class.forName(classString);

            externalClasses.put(c.getName(), classString);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public Map<String, Class> getExternalClasses() {
        Map<String, Class> map = new HashMap();
        this.externalClasses.entrySet().stream().forEach(x -> {
            try {
                map.put(x.getKey(), Class.forName(x.getValue()));
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        });
        return map;
    }
}
