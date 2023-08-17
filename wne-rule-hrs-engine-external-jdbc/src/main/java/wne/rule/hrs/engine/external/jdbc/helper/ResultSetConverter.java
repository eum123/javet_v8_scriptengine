package wne.rule.hrs.engine.external.jdbc.helper;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ResultSetConverter {

    /**
     * ResultSet을 Map으로 변경한다.
     *
     * @param rs
     * @return
     * @throws SQLException
     */
    public static Map<String, ?> convertResultSetToMap(ResultSet rs) throws SQLException {
        ResultSetMetaData md = rs.getMetaData();
        int columns = md.getColumnCount();

        HashMap<String,Object> row = new HashMap<String, Object>();
        if(rs.next()) {
            for(int i=1; i<=columns; ++i) {
                row.put(md.getColumnName(i), rs.getObject(i));
            }
        }

        return row;
    }


    /**
     * ResultSet을 list로 변경 한다.
     *
     * @param rs
     * @return
     * @throws SQLException
     */
    public static List<Map<String,Object>> convertResultSetToArrayList(ResultSet rs) throws SQLException {


        ResultSetMetaData md = rs.getMetaData();
        int columns = md.getColumnCount();
        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();

        while(rs.next()) {
            HashMap<String,Object> row = new HashMap<String, Object>(columns);
            for(int i=1; i<=columns; ++i) {
                row.put(md.getColumnName(i), rs.getObject(i));
            }
            list.add(row);
        }

        return list;
    }
}
