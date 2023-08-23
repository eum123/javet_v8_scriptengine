package wne.rule.hrs.engine.core.loader;

import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
public class ExternalRuleLoader {

    private static String script = null;

    /**
     * 외부 rule을 로딩한다.
     * @param pathList file://c:/aaaa/, classpath://directory/
     * @return
     */
    public static Optional<String> load(List<String> pathList) {
        try {
            if(script == null || script.isEmpty()) {
               return loadForce(pathList);
            }

            return Optional.ofNullable(script);

        } catch (Exception e) {
            log.warn("internal rule error", e);
        }

        return Optional.empty();
    }

    public static Optional<String> loadForce(List<String> path) {

        path.forEach(x -> {
            try {
                URI uri = new URI(x);
                String scheme = uri.getScheme();

                if(scheme.equalsIgnoreCase("classpath")) {
                    script += loadClassPath(uri.getHost() + uri.getPath());
                } else if((scheme.equalsIgnoreCase("file"))) {
                    script += loadLocal(uri.getPath());
                } else {
                    //ignore
                    log.warn("not support protocol : {}", x);
                }
            } catch (Exception e) {
                log.warn("external rule load fail: {}", x, e);
            }
        });

        return Optional.of(script);
    }

    private static String loadLocal(String path) throws Exception {
        StringBuilder builder = new StringBuilder();

        File f = new File(path);
        if(f.isDirectory()) {
            String[] list = f.list(new FilenameFilter() {
                @Override
                public boolean accept(File dir, String name) {
                    return name.indexOf(".js") > 0;
                }
            });

            Arrays.stream(list).parallel().forEach(x -> {
                try {
                    builder.append(Files.readAllLines(Paths.get(path + File.separator + x)).stream().collect(Collectors.joining("\n")));
                    builder.append("\r\n");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        } else {
            builder.append(Files.readAllLines(f.toPath()).stream().collect(Collectors.joining("\n")));
            builder.append("\r\n");
        }

        log.info("external script directory loaded. length:{}", builder.length());

        return builder.toString();
    }

    private static String loadClassPath(String pathString) throws Exception {

        StringBuilder builder = new StringBuilder();

        Path path = Paths.get(ClassLoader.getSystemResource(pathString).toURI());
        if(path.toFile().isDirectory()) {
            String[] list = path.toFile().list(new FilenameFilter() {
                @Override
                public boolean accept(File dir, String name) {
                    return name.indexOf(".js") > 0;
                }
            });

            Arrays.stream(list).parallel().forEach(x -> {
                try {
                    builder.append(loadClassPathFile(pathString + File.separator + x));
                    builder.append("\r\n");
                } catch (IOException | URISyntaxException  e) {
                    throw new RuntimeException(e);
                }
            });
        } else {
            builder.append(loadClassPathFile(pathString));
            builder.append("\r\n");
        }

        log.info("external script classpath loaded. length:{}", builder.length());

        return builder.toString();

    }

    private static String loadClassPathFile(String path) throws URISyntaxException, IOException {

        return Files.readAllLines(Paths.get(
                ClassLoader.getSystemResource(path).toURI())
        ).stream().collect(Collectors.joining("\n"));
    }
}
