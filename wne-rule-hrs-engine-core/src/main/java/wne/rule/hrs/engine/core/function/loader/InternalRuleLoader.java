package wne.rule.hrs.engine.core.function.loader;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
public class InternalRuleLoader {

    private static final String FILE_NAME = "internal.js";

    private static String script = null;

    public static Optional<String> load() {
        try {
            if(script == null || script.isEmpty()) {
                return loadForce();
            }

            return Optional.ofNullable(script);

        } catch (Exception e) {
            log.warn("internal rule error", e);
        }

        return Optional.empty();
    }

    public static Optional<String> loadForce() {

        StringBuilder builder = new StringBuilder();
        String line = "";
        ClassPathResource resource = new ClassPathResource("internal/" + FILE_NAME);

        try (
                InputStreamReader reader = new InputStreamReader(resource.getInputStream());
                BufferedReader br = new BufferedReader(reader);
                ) {

            while((line = br.readLine()) != null) {
                builder.append(br).append("\r\n");
            }

            script = builder.toString();

            log.info("internal script loaded. length:{}", script.length());

            return Optional.ofNullable(script);
        } catch (Exception e) {
            log.warn("internal rule error", e);
        }

        return Optional.empty();
    }
}
