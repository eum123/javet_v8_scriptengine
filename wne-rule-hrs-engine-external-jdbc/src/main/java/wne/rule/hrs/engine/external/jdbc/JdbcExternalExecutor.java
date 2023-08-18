package wne.rule.hrs.engine.external.jdbc;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.external.ExternalComponent;
import wne.rule.hrs.engine.core.external.ExternalExecutor;
import wne.rule.hrs.engine.core.util.StringParser;
import wne.rule.hrs.engine.core.util.URISupport;
import wne.rule.hrs.engine.external.jdbc.constants.JdbcParameterConstants;
import wne.rule.hrs.engine.external.jdbc.helper.ResultSetConverter;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

/**
 * DB 호출하는 클래스.
 * 단건인 경우 map으로 반환하고 여러건인경우 List<Map>으로 반환 한다.
 */
@Slf4j
@ExternalComponent("jdbc")
public class JdbcExternalExecutor implements ExternalExecutor {

    private String dataSourceName = null;
    private Map<String, Object> parameter = new HashMap<>();

    @Override
    public Map execute(Map parameter) throws ComponentException {

        DataSource dataSource = DataSourceProvider.getDataSource(dataSourceName);

        if(dataSource == null) {
            throw new ComponentException("datasource not found. DataSourceName:" + dataSourceName);
        }

        //query bind
        String query = (String)this.parameter.get(JdbcParameterConstants.QUERY);
        query = StringParser.parse(parameter, query);

        log.debug("replaced query:{}", query);

        //실행
        try(Connection connection = dataSource.getConnection();
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
            ResultSet resultSet = statement.executeQuery(query); ) {

            resultSet.last();
            int totalCount = resultSet.getRow();

            log.debug("total count:{}", totalCount);

            resultSet.beforeFirst();

            Map result = null;
            if (totalCount == 1) {
                result =  ResultSetConverter.convertResultSetToMap(resultSet);
            } else if(totalCount == 0) {
                result = new HashMap<>();
            } else {
                //여러건인 경우
                result = new HashMap();
                result.put("result", ResultSetConverter.convertResultSetToArrayList(resultSet));

            }
            return result;
        } catch(Exception e) {
            throw new ComponentException(e);
        }
    }


    @Override
    public void setConfigration(String schema, String path, String parameter) throws Exception {
        this.dataSourceName = path;

        //convert string to Map
        this.parameter = URISupport.parseQuery(parameter);
    }

}
