package wne.rule.hrs.engine.core.external;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * @ExternalCompnent 사용하는 모든 class를 읽는다.
 */
@Slf4j
public class ExternalComponentLoader {

    /**
     * default base package("wne.rule.hrs.engine.external")를 대상으로 ExternalCompnent를 조회한다.
     * @return
     */
    public static Map<String , String> load() {
        return load("wne.rule.hrs.engine.external");
    }

    /**
     * 입력한 모든 base package를 대상으로 ExternalCompnent를 조회한다.
     * @param basePackages
     * @return
     */
    public static Map<String , String> load(String ... basePackages) {

        Map<String , String> map = new HashMap<>();

        ClassPathScanningCandidateComponentProvider scanner =
                new ClassPathScanningCandidateComponentProvider(true);

        scanner.addIncludeFilter(new AnnotationTypeFilter(ExternalComponent.class));

        Arrays.stream(basePackages).forEach(x -> {
            scanner.findCandidateComponents(x).forEach(c -> {
                try {
                    ExternalComponent externalComponent = Class.forName(c.getBeanClassName()).getAnnotation(ExternalComponent.class);

                    log.info("load component: {}", externalComponent);

                    map.put(externalComponent.value(), c.getBeanClassName());
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        });

        return map;
    }
}
