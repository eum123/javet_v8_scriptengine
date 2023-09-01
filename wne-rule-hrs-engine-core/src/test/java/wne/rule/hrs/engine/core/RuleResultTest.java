package wne.rule.hrs.engine.core;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
import org.junit.Assert;
import org.junit.Test;
import wne.rule.hrs.engine.core.fetcher.ScriptFetchResult;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;
import wne.rule.hrs.engine.core.javet.JavetRuleEngineFactory;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RuleResultTest {
    @Test
    public void test() throws Exception {

        RuleConfig config = RuleConfig.builder().maxTotal(2).build();

        RuleEngineFactory factory = new JavetRuleEngineFactory(config);

        RuleEngine engine = factory.borrow();

        EngineParameter engineParameter = EngineParameter.builder().ruleId("main").ruleName("main").scriptFetcher(new MyScriptFetcher()).build();

        RuleExecuteResult result = engine.executeByRuleId(engineParameter, "hong", 2);

        System.out.println("======================result");
        System.out.println(new ObjectMapper().writeValueAsString(result));
        System.out.println("======================result");

        factory.terminate();

        List<Result> list = new ArrayList();

        Result r = getResult(result.getGlobalVariable());
        r.ruleId = result.getRuleId();
        list.add(r);

        list.addAll(getSub(result.getSubRuleExecuteResult()));

        System.out.println("======================result");
        System.out.println(new ObjectMapper().writeValueAsString(list));
        System.out.println("======================result");

    }

    private Result getResult( Map<String, Object> map ) {
        Result result = new Result();
        List<Map.Entry<String, Object>> e = map.entrySet().stream().filter(x -> x.getKey().contains("nodename:")).collect(Collectors.toList());
        e.forEach(x -> {
            if(x.getKey().contains(":input")) {
                result.key = x.getKey().substring(0, x.getKey().indexOf(":input"));

                result.input = (Map)x.getValue();
            }

            if(x.getKey().contains(":output")) {
                result.output = x.getValue();
            }
        });
        return result;
    }

    private List<Result> getSub(List<RuleExecuteResult> list) {
        List<Result> result = new ArrayList();
        for(int i= 0 ;i<list.size(); i++) {
            Result r = getResult(list.get(i).getGlobalVariable());
            r.ruleId = list.get(i).getRuleId();
            r.order = i;

            result.add(r);

            result.addAll(getSub(list.get(i).getSubRuleExecuteResult()));

        }
        return result;
    }

    class Result {
        public String key;
        public Map<String, Object> input;
        public Object output;

        public String ruleId;

        public int order = 0;
    }



    class MyScriptFetcher implements ScriptFetcher {

        @Override
        public ScriptFetchResult fetchByRuleId(String ruleId) throws Exception {
            String script = Files.readAllLines(Paths.get(
                    ClassLoader.getSystemResource("rule_result_test.js").toURI())
            ).stream().collect(Collectors.joining("\n"));


            return ScriptFetchResult.builder().script(script).ruleName(ruleId).ruleId(ruleId).build();
        }

        @Override
        public ScriptFetchResult fetchByRuleName(String ruleName, String baseDate) throws Exception {
            String script = Files.readAllLines(Paths.get(
                    ClassLoader.getSystemResource("rule_result_test.js").toURI())
            ).stream().collect(Collectors.joining("\n"));


            return ScriptFetchResult.builder().script(script).ruleName(ruleName).ruleId(ruleName).build();
        }

        @Override
        public void setDebug(boolean isDebug) {

        }
    }
}
