package wne.rule.hrs.engine.external.jdbc.helper;


import org.junit.Test;

import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ReplaceTest {
    @Test
    public void test() {

        String data = "hongdskskekf${dkdkdk ${}";

        Pattern pattern = Pattern.compile("\\$\\{(.+?)\\}");
        Matcher m = pattern.matcher(data);
        StringBuilder sb = new StringBuilder();
        while (m.find()) {
            String variable = m.group(1);
            System.out.println("variable: "+ variable);

        }
    }

    @Test
    public void atest() {

        HashMap<String, String> replacements = new HashMap<String, String>();
        replacements.put("name", "Johannes");
        replacements.put("age", "22");

        String text = "Hello, my name is ${name}. I am ${age} years old.";
        Pattern pattern = Pattern.compile("\\$\\{(.+?)\\}");
        Matcher matcher = pattern.matcher(text);

        StringBuilder builder = new StringBuilder();
        int i = 0;
        while (matcher.find()) {

            System.out.println(matcher.group(1));

            String replacement = replacements.get(matcher.group(1));
            builder.append(text.substring(i, matcher.start()));
            if (replacement == null) {
                builder.append("");
            } else {
                builder.append(replacement);
                i = matcher.end();
            }
        }
        builder.append(text.substring(i, text.length()));
        System.out.println(builder);
    }
}
