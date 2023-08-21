package javet;

import lombok.extern.slf4j.Slf4j;
import wne.rule.hrs.engine.core.RuleEngine;
import wne.rule.hrs.engine.core.RuleEngineFactory;

import java.sql.*;
import java.util.List;

@Slf4j
public class DBSelect {


    public void execute(RuleEngineFactory factory, String ruleId) throws Exception {

        long start = System.currentTimeMillis();


        RuleEngine engine = factory.borrow();

        log.debug("create================ : {}", (System.currentTimeMillis() - start));

        String script = getScript(ruleId);

        log.debug("script:{}", script);
        engine.update(ruleId, script);

        log.debug("================ : {}", (System.currentTimeMillis() - start));

        //db 조회 시간만 측정하기 위해 실행을 하지 않는다.
        //engine.executeByRuleId(ruleId, null);
        factory.release(engine);
    }
    public String getScript(String ruleId) {
        String query = "select rule_code_content from hrs.tbl_rule where rule_id='" + ruleId + "'";

        long start = System.currentTimeMillis();

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        try (

                Connection conn = DriverManager.getConnection("jdbc:postgresql://172.16.51.75:4521/wne", "papricarun", "password");
                Statement statement = conn.createStatement();
                ResultSet rs = statement.executeQuery(query);
                ){

            rs.next();

        log.debug("DB>>>>>>>>>>>>>>>>> : {}", (System.currentTimeMillis() - start));
            //임의 결과 반환
            return "";

//            return rs.getString("rule_code_content");

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
