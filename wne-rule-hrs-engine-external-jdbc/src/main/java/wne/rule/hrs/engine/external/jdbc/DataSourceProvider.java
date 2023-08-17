package wne.rule.hrs.engine.external.jdbc;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.GenericApplicationContext;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;

import javax.sql.DataSource;

@Slf4j
public class DataSourceProvider  {
    public static DataSource getDataSource(String dataSourceName) {
        log.debug("datasource : {}", dataSourceName);

        DataSource dataSource = (DataSource) ApplicationContextProvider.getBean(dataSourceName, DataSource.class);
        log.debug("dataSource :{}", dataSource);

        return dataSource;
    }

}
