package wne.rule.hrs.engine.core.javet;

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.values.reference.V8ValueObject;
import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.ManagedRuleEngineFactory;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class JavetCustomBinder {
    public static List<V8ValueObject> bind(ManagedRuleEngineFactory factory, V8Runtime v8Runtime) throws JavetException {
        //load external class (static method만 사용 가능)
        List<V8ValueObject> list = new ArrayList<>();
        factory.getRuleConfig().getExternalClasses().entrySet().stream().forEach(x -> {
            try {
                V8ValueObject valueObject = v8Runtime.createV8ValueObject();
                v8Runtime.getGlobalObject().set(x.getKey(), valueObject);
                valueObject.bind(x.getValue().newInstance());

                list.add(valueObject);

                log.debug("load custom class : {} - {}", x.getKey(), x.getValue());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        //load external js
        v8Runtime.getExecutor(factory.getExternalScript().orElse("")).executeVoid();

        return list;
    }
}
