package wne.rule.hrs.engine.spring.integration.service;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import wne.rule.hrs.engine.external.jdbc.DataSourceProvider;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileWriter;
import java.util.List;
import java.util.Map;

@Service
public class SampleGenerator {

    private JdbcTemplate jdbcTemplate;
    private final String BASE_DIR_PATH = "./src/test/resources/sample/";

    @Autowired
    public SampleGenerator(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    public void executeQueryAndWriteToFile() {
        try {
            // 쿼리 실행
            String sql = "select rule_id, concat('var ', rule_id, ' = ', rule_code_content) as c, rule_code_content_debug from hrs.tbl_rule where compile_status = true limit 500;";
            List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql);

            for (Map<String, Object> row : queryResult) {
                // 결과 처리 및 파일 작성
                File scriptFile = new File(BASE_DIR_PATH+row.get("rule_id")+".js");
                FileWriter scriptFileWriter = new FileWriter(scriptFile);

                if (null != row.get("c")) {
                    String scriptFiledata = (String) row.get("c");
                    scriptFileWriter.write(scriptFiledata);
                    scriptFileWriter.close();
                }


                File debugFile = new File(BASE_DIR_PATH+row.get("rule_id")+"_debug.js");
                FileWriter debugFileWriter = new FileWriter(debugFile);

                if (null != row.get("rule_code_content_debug")) {
                    String debugFilData = (String) row.get("rule_code_content_debug");
                    debugFileWriter.write(debugFilData);
                    debugFileWriter.close();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
