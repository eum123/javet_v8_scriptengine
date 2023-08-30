package wne.rule.hrs.engine.core;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

@Builder
@ToString
public class EngineParameter {

    /**
     * 룰 ID.
     *
     */
    @Getter @Setter
    private String ruleId;

    /**
     * 룰 이름
     */
    @Getter
    private String ruleName;

    /**
     * true인 경우 scriptfetcher에서 debug용 script를 조회한다. ture - debug 모드, false - 일반 모드
     */
    @Getter
    private boolean isDebug;

    @Getter
    private ScriptFetcher scriptFetcher;

}
