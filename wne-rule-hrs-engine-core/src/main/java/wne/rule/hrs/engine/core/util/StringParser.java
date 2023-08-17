package wne.rule.hrs.engine.core.util;

import wne.rule.hrs.engine.core.util.MapHelper;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringParser {
    public static String parse(Map map, String text) {

        Pattern pattern = Pattern.compile("\\$\\{(.+?)\\}");
        Matcher matcher = pattern.matcher(text);

        StringBuilder builder = new StringBuilder();
        int i = 0;
        while (matcher.find()) {

            Object replacement = MapHelper.find(map, matcher.group(1));
            builder.append(text.substring(i, matcher.start()));
            if (replacement == null) {
                builder.append("");
            } else {
                builder.append(replacement);
                i = matcher.end();
            }
        }
        builder.append(text.substring(i, text.length()));

        return builder.toString();
    }
}
