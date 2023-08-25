package wne.rule.hrs.engine.core.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LogFormatHelper {
    private static final Pattern pattern = Pattern.compile("\\{\\}");
    public static String assemble(String format, Object ... objects) {

        Matcher matcher = pattern.matcher(format);

        StringBuilder builder = new StringBuilder();
        int index = 0;
        int i = 0;
        while (matcher.find()) {
            Object replacement = objects[index];
            builder.append(format.substring(i, matcher.start()));
            if (replacement == null) {
                builder.append("");
            } else {
                builder.append(replacement);
                i = matcher.end();
            }
            index++;
        }
        builder.append(format.substring(i, format.length()));

        return builder.toString();
    }
}
