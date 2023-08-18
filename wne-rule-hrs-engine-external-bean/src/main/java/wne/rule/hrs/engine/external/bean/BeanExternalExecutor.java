package wne.rule.hrs.engine.external.bean;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.external.ExternalComponent;
import wne.rule.hrs.engine.core.external.ExternalExecutor;
import wne.rule.hrs.engine.core.util.URISupport;
import wne.rule.hrs.engine.external.bean.constants.BeanParameterConstants;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * bean에서 Map을 parameter로 받는 method만 호출 가능.
 */
@Slf4j
@ExternalComponent("bean")
public class BeanExternalExecutor implements ExternalExecutor {

    private String beanName = null;
    private Map<String, Object> parameter = new HashMap<>();

    @Override
    public Map execute(Map args) throws ComponentException {

        try {
            Object obj = BeanProvider.getBean(beanName);

            if(obj == null) {
                throw new ComponentException("bean not found. bean name:" + beanName);
            }

            Method method = obj.getClass().getDeclaredMethod((String)parameter.get(BeanParameterConstants.METHOD), Map.class);
            return (Map)method.invoke(obj, args);

        } catch(Exception e) {
            throw new ComponentException(e);
        }
    }


    @Override
    public void setConfigration(String schema, String beanName, String parameter) throws Exception {
        this.beanName = beanName;

        //convert string to Map
        this.parameter = URISupport.parseQuery(parameter);
    }

}
