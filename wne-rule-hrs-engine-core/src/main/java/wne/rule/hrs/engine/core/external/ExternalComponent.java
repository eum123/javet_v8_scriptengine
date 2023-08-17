package wne.rule.hrs.engine.core.external;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
@Target(ElementType.TYPE)
public @interface ExternalComponent {
    String value();
}
