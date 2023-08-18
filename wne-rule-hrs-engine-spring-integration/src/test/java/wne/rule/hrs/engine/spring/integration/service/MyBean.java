package wne.rule.hrs.engine.spring.integration.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service("myBean")
public class MyBean {
    public Map hello(Map map) {
        Map m = new HashMap();
        m.put("1", 1);
        return m;
    }
}
