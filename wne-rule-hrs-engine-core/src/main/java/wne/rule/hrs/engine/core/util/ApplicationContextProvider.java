package wne.rule.hrs.engine.core.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Slf4j
@Component
public class ApplicationContextProvider implements ApplicationContextAware  {

    //일반 class에서 사용하기 위해 static으로 선언함.
    private static ApplicationContext applicationContext;


    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        ApplicationContextProvider.applicationContext = applicationContext;
    }

    public static Object getBean(String beanId, Class type) {
        return applicationContext.getBean(beanId, type);
    }

    public static Object getBean(String beanId) {
        return applicationContext.getBean(beanId);
    }

}
