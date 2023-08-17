package wne.rule.hrs.engine.core.external;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.ComponentInstantiationException;
import wne.rule.hrs.engine.core.exception.ComponentNotFoundException;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class ExternalExecutorRegistry {

    private Map<String, String> registry = new HashMap<>();

    public void load() throws Exception {
        registry = ExternalComponentLoader.load();
    }

    public ExternalExecutor getExternalExecutor(String format) throws ComponentException {
        if(registry.containsKey(format)) {
            try {
                return createInstance(registry.get(format));
            } catch (Exception e) {
                throw new ComponentInstantiationException(e);
            }
        } else {
            throw new ComponentNotFoundException(format + " format not found ");
        }
    }

    private ExternalExecutor createInstance(String clazz) throws ClassNotFoundException,
            IllegalAccessException, InstantiationException {

        //TODO: 생성에 필요한 parameter를 구현한다.
        return (ExternalExecutor)Class.forName(clazz)
                .newInstance();
    }


}
