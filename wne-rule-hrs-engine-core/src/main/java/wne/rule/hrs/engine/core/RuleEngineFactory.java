package wne.rule.hrs.engine.core;

import wne.rule.hrs.engine.core.exception.ComponentException;
import wne.rule.hrs.engine.core.exception.RuleException;
import wne.rule.hrs.engine.core.fetcher.ScriptFetcher;

public interface RuleEngineFactory {

    /**
     * rule engine을 구한다.
     * @return
     * @throws InterruptedException
     * @throws RuleException
     * @throws ComponentException
     */
    RuleEngine borrow() throws InterruptedException, RuleException, ComponentException;

    void release(RuleEngine engine);

    /**
     * 전체 engine에 rule를 적용한다.
     * @param ruleId
     * @param script
     */
    void update(String ruleId, String script);

    void terminate();

    /**
     * 현재 사용가능한 engine 개수
     * @return
     */
    int getIdle();

    /**
     * 현재 사용중인 engine 개수
     * @return
     */
    int getActive();

    /**
     * 설정된 최대 rule 개수.
     * @return
     */
    int getMaxTotal();

}
