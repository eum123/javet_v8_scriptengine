package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interop.V8Runtime;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.ManagedRuleEngineFactory;
import wne.rule.hrs.engine.core.constants.ExternalFunctionConstants;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.external.ExternalLauncher;
import wne.rule.hrs.engine.core.internal.RuleLogger;

import java.util.Properties;

@Slf4j
public class JavetSystemBinder {
    public static void bind(ManagedRuleEngineFactory factory, V8Runtime v8Runtime) throws JavetException, ComponentException {

        //system
        v8Runtime.getGlobalObject().set(ExternalFunctionConstants.EXTERNAL_FUNCTION, new ExternalLauncher());
        v8Runtime.getGlobalObject().set("LOGGER", RuleLogger.class);

        //reserved java object
        Properties properties = factory.getReserveProperties().orElseThrow(() -> new ComponentException("Reserved Properties not found"));
        properties.entrySet().forEach(x -> {
            log.info("register reserved property. key:{}, value:{}", x.getKey(), x.getValue());

            try {
                v8Runtime.getGlobalObject().set(x.getKey(), Class.forName((String)x.getValue()));
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            } catch (JavetException e) {
                throw new RuntimeException(e);
            }
        });

        //load internal js
        v8Runtime.getExecutor(factory.getInternalScript().orElse("")).executeVoid();
    }
}
