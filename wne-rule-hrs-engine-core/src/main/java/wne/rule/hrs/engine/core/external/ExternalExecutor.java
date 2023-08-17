package wne.rule.hrs.engine.core.external;

import wne.rule.hrs.engine.core.exception.ComponentException;

import java.util.Map;

public interface ExternalExecutor {


    Map execute(Map parameter) throws ComponentException;

    void setConfigration(String schema, String path, String parameter) throws Exception;

}
