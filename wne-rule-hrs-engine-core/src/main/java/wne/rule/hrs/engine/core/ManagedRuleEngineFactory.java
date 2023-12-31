package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

import java.util.Optional;
import java.util.Properties;

public interface ManagedRuleEngineFactory {
    Optional<String> getInternalScript();

    Optional<Properties> getReserveProperties();

    Optional<String> getExternalScript();

    boolean isUpdate();

    RuleConfig getRuleConfig();
}
