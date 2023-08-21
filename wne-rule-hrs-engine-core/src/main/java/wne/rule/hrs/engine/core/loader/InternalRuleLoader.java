package wne.rule.hrs.engine.core.loader;

import lombok.extern.slf4j.Slf4j;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
public class InternalRuleLoader {

    private static final String FILE_NAME = "internal.js";

    public static Optional<String> load() {
        String script = "";
        try {
            script = Files.readAllLines(Paths.get(
                    ClassLoader.getSystemResource("internal/" + FILE_NAME).toURI())
            ).stream().collect(Collectors.joining("\n"));

            log.info("internal script loaded. length:{}", script.length());

            return Optional.ofNullable(script);
        } catch (Exception e) {
            log.warn("internal rule error", e);
        }

        return Optional.empty();
    }
}
