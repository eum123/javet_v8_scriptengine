package wne.rule.hrs.engine.core.util;

import java.util.Optional;
import java.util.Properties;

public interface ManagedRuleEngineFactory {
    Optional<String> getInternalScript();

    Optional<Properties> getReserveProperties();

    Optional<String> getExternalScript();

    boolean isUpdate();
}
