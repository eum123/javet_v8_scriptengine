package wne.rule.hrs.engine.core;

import java.util.Optional;
import java.util.Properties;

public interface ManagedRuleEngineFactory {
    Optional<String> getInternalScript();

    Optional<Properties> getReserveProperties();

    Optional<String> getExternalScript();

    boolean isUpdate();

    void setScriptFetcher(ScriptFetcher scriptFetcher);
    ScriptFetcher getScriptFetcher();

    RuleConfig getRuleConfig();
}
