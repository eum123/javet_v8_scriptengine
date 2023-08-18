package wne.rule.hrs.engine.external.bean;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;

import javax.sql.DataSource;

@Slf4j
public class BeanProvider {
    public static Object getBean(String beanName) {
        log.debug("beanName : {}", beanName);

        return ApplicationContextProvider.getBean(beanName);

    }

}
