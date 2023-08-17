package wne.rule.hrs.engine.external.bean;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.external.ExternalComponent;
import wne.rule.hrs.engine.core.external.ExternalExecutor;
import wne.rule.hrs.engine.core.util.URISupport;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@ExternalComponent("bean")
public class BeanExternalExecutor implements ExternalExecutor {


    private Map<String, Object> parameter = new HashMap<>();

    @Override
    public Map execute(Map parameter) throws ComponentException {

        try {
            return null;
        } catch(Exception e) {
            throw new ComponentException(e);
        }
    }


    @Override
    public void setConfigration(String schema, String path, String parameter) throws Exception {

        //convert string to Map
        this.parameter = URISupport.parseQuery(parameter);
    }

}
