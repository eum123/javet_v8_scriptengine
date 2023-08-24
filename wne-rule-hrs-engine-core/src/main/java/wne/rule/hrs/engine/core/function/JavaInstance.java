package wne.rule.hrs.engine.core.function;

import java.math.BigDecimal;

public class JavaInstance {
    public Object type(String className) throws Exception {
        Class clazz = Class.forName(className);
        if(clazz == BigDecimal.class) {
            return new BigDecimal(0);
        }

        if(clazz == Integer.class) {
            return new Integer(0);
        }

        if(clazz == Long.class) {
            return new Long(0);
        }

        if(clazz == Double.class) {
            return new Double(0);
        }

        if(clazz == Float.class) {
            return new Float(0);
        }

        return clazz.newInstance();
    }
}
