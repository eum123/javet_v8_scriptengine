package wne.rule.hrs.engine.core.external;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.ComponentNotFoundException;
import wne.rule.hrs.engine.core.util.URIParser;

import java.util.Map;

@Slf4j
public class ExternalLauncher {
    private static ExternalExecutorRegistry registry;

    public void init() throws Exception {
        if(registry == null) {
            registry = new ExternalExecutorRegistry();
            registry.load();
        }
    }

    public static Object create() throws Exception {
        ExternalLauncher launcher = new ExternalLauncher();
        launcher.init();

        return launcher;
    }

    public Map execute(String url, Map parameter) throws  Exception {

        String[] parsed = URIParser.parseUri(url);
        ExternalExecutor executor = registry.getExternalExecutor(parsed[0]);
        executor.setConfigration(parsed[0], parsed[1], parsed[2]);

        log.debug("executor:" + executor);

        return executor.execute(parameter);
    }
}
