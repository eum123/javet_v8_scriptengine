package wne.rule.hrs.engine.core.loader;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.util.Optional;
import java.util.Properties;

@Slf4j
public class ReservedObjectLoader {

    private static final String FILE_NAME = "reserved_objects.properties";
    public static Optional<Properties> load() {

        try(InputStream inputStream = ReservedObjectLoader.class.getClassLoader().getResourceAsStream("reserved/" + FILE_NAME)) {

            Properties properties = new Properties();
            properties.load(inputStream);

            log.info("reserved properties loaded. length:{}", properties.size());

            return Optional.ofNullable(properties);
        } catch (Exception e) {
            log.warn("reserved object error", e);
        }
        return Optional.empty();
    }
}
