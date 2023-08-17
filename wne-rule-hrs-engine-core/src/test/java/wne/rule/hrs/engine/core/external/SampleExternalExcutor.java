package wne.rule.hrs.engine.core.external;


import java.util.Map;

@ExternalComponent("sample")
public class SampleExternalExcutor implements ExternalExecutor{


    @Override
    public Map execute(Map parameter) {
        return null;
    }

    @Override
    public void setConfigration(String schema, String path, String query) {

    }


}
