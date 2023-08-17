package wne.rule.hrs.engine.core.loader;


import org.junit.Test;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ClassLoaderTest {
    @Test
    public void test() {
        String classpath = System.getProperty("java.class.path");
        String[] classPathValues = classpath.split(File.pathSeparator);
        for (String classPath: classPathValues) {
            System.out.println(classPath);
        }
    }

    @Test
    public void fileTest() {
        String classPath = System.getProperty("java.class.path");

        String[] jars = classPath.split(File.pathSeparator);
        for (int i = 0; i < jars.length; i++) {
            if (jars[i].indexOf(".jar") > 0) {
                continue;
            } else {
                System.out.println(jars[i]);
            }
        }
    }

    @Test
    public void loadUserDir() throws Exception {
        String currentDir = System.getProperty("user.dir");
        System.out.println(currentDir);

        File f = new File(currentDir);

        File parent = new File(f.getParent());

        List<String> list = Arrays.stream(parent.list()).filter(x -> x.indexOf("executor") > 0 )
                        .collect(Collectors.toList());

        System.out.println(list);

        Path start = Paths.get(parent.getAbsolutePath());
        try (Stream<Path> stream = Files.walk(start, Integer.MAX_VALUE)) {
            List<String> collect = stream
                    .filter(x -> x.toFile().getAbsolutePath().indexOf("META-INF") > 0)
                    .filter(x -> x.toFile().isFile() && x.getFileName().startsWith("executor"))
                    .map(String::valueOf)
                    .collect(Collectors.toList());

            collect.forEach(System.out::println);
        }


    }
}
