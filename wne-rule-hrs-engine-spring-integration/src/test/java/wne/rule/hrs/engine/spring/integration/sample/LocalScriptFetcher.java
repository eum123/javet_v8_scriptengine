package wne.rule.hrs.engine.spring.integration.sample;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

@Slf4j
public class LocalScriptFetcher implements ScriptFetcher {

    private String path = "";

    public LocalScriptFetcher(String path) {
        this.path = path;
    }

    @Override
    public ScriptFetchResult fetchByRuleId(String ruleId) throws Exception {

        log.debug("read script:{}", path);

        String script = Files.readAllLines(Paths.get(
                ClassLoader.getSystemResource(path).toURI())
        ).stream().collect(Collectors.joining("\n"));

        log.debug("read script:{}, length:{}", path, script.length());

        return ScriptFetchResult.builder().ruleId(ruleId).ruleName(ruleId).script(script).build();

    }

    @Override
    public ScriptFetchResult fetchByRuleName(String ruleName, String date) throws Exception  {

        String append= "";
        if(date.trim().length() > 0) {
            append = "_" + date;
        }

        log.debug("read script:{}", "sample/" + ruleName + append + ".js");

        String script = Files.readAllLines(Paths.get(
                ClassLoader.getSystemResource("sample/" + ruleName + append + ".js").toURI())
        ).stream().collect(Collectors.joining("\n"));

        log.debug("read script:{}, length:{}", path, script.length());

        return ScriptFetchResult.builder().ruleId(ruleName + append).ruleName(ruleName).script(script).build();
    }
}
