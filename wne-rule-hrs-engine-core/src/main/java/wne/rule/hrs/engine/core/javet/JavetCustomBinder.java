package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interop.V8Runtime;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.ManagedRuleEngineFactory;

@Slf4j
public class JavetCustomBinder {
    public static void bind(ManagedRuleEngineFactory factory, V8Runtime v8Runtime) throws JavetException {
        //load external class (static method만 사용 가능)
        factory.getRuleConfig().getExternalClasses().entrySet().stream().forEach(x -> {
            try {
                v8Runtime.getGlobalObject().set(x.getKey(), x.getValue());
                log.debug("load custom class : {}", x.getValue());
            } catch (JavetException e) {
                throw new RuntimeException(e);
            }
        });

        //load external js
        v8Runtime.getExecutor(factory.getExternalScript().orElse("")).executeVoid();
    }
}
