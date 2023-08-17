package wne.rule.hrs.engine.core.loader;

import lombok.extern.slf4j.Slf4j;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
public class ExternalRuleLoader {

    public static Optional<String> load(String path) {
        String script = "";
        try {

            //TODO: 외부 js loading 구현

            log.info("external script loaded. length:{}", script.length());

            return Optional.ofNullable(script);
        } catch (Exception e) {
            log.warn("external rule error", e);
        }

        return Optional.empty();
    }
}
