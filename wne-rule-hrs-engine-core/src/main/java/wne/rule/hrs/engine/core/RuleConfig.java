package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ToString
@Builder
public class RuleConfig {
    @Getter
    private List<String> externalScriptPaths;

    @Getter
    @Builder.Default
    private Map<String, Class> externalClasses = new HashMap<>();

    @Getter
    private int maxTotal = 1;

    @Getter
    private int maxWaitMills = 1000;

    /**
     * Class이름을 key 사용할수 있게 추가
     * @param clazz
     */
    public void addExternalClass(Class clazz) {
        externalClasses.put(clazz.getName(), clazz);
    }

}
