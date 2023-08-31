package jlint;

import com.googlecode.jslint4java.JSLint;
import com.googlecode.jslint4java.JSLintBuilder;
import com.googlecode.jslint4java.JSLintResult;
import org.junit.Test;

public class JLintTest {
    @Test
    public void test() {
        String script =
                "function aaa(a, b, c) {\n" +
                "    fun(); \n" +
                "    var aaaa = 1; \n" +
                "    hong.date = 1; \n" +
                "    return \"hong\"; \n" +
                "} \n";


        JSLint lint = new JSLintBuilder().fromDefault();
        JSLintResult result = lint.lint("aaa", script);

        System.out.println(result.getFunctions());

        System.out.println(result.isJson());

        result.getIssues().forEach(x -> {
            //System.out.println(x);
            System.out.println("raw:" + x.getRaw());

            System.out.println("evidence: " + x.getEvidence());
            System.out.println("reason:" + x.getReason());
            System.out.println("character:" + x.getCharacter());
            System.out.println("line: " + x.getLine());

            System.out.println("===========");
        });
    }
}
