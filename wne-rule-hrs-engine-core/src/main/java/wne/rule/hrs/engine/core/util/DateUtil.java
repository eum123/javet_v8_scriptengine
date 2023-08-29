package wne.rule.hrs.engine.core.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
    public static boolean isBetween(Date from, Date to, Date source) {
        return source.compareTo(from) >= 0 && source.compareTo(to) <= 0;
    }

    public static Date toDate(String str) {
        return toDate(str, "yyyyMMddHHmmss", new Date());
    }

    public static Date toDate(String str, String pattern, Date defaultDate) {
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);

        try {
            return sdf.parse(str);
        } catch (ParseException var4) {
            return defaultDate;
        }
    }
}
