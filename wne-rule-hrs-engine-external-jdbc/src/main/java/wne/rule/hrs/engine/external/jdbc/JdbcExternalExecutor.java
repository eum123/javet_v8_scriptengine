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
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

            if (totalCount == 1) {
                return ResultSetConverter.convertResultSetToMap(resultSet);
            }

            if(totalCount == 0) {
                return new HashMap<>();
            }

            //여러건인 경우
            List<Map<String, Object>> list = ResultSetConverter.convertResultSetToArrayList(resultSet);
            Map<String, List<Map<String, Object>>> result = new HashMap<>();
            result.put("result", list);

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
