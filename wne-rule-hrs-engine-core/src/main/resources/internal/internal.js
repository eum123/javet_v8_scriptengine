//###################################################
// Internal script
// engine에서 공통으로 사용되는 함수 정의
// 사이트별 함수는 external rule에 정의
//###################################################

/**
 * 신규 Rule Engine을 이용하여 실행
 * @param ruleName 룰 이름
 * @param baseDate 기준일자
 * @param args  parameters
 * @returns {*}
 * @constructor
 */
function NEW_ENGINE_BY_NAME(ruleName, baseDate, ...args) {
    CONTEXT.getLogger().debug("NEW ENGINE(Script) ruleName:{}, baseDate:{}, parameter:{}", ruleName, baseDate, args);
    return CONTEXT.newEngineByName(ruleName, baseDate, ...args);
}

function _GET_GLOBAL(loggerId) {
    return CONTEXT.getRuleExecuteResult().getGlobalVariable(loggerId);
}

function _SET_GLOBAL(loggerId, data) {
    CONTEXT.getRuleExecuteResult().setGlobalVariable(loggerId, data);
}


function LPAD(val, char) {
    return ''+(val<10?char+val:val);
}

function TODAY_FORMAT(time) {

    if( time && time !== ''){
        //javascript Date object
        let d = new Date(time);

        return '' + d.getFullYear() + '-' + LPAD(d.getMonth() + 1, '0') + '-' + LPAD(d.getDate(), '0')
            + ' ' + LPAD(d.getHours(),'0') + ':' + LPAD(d.getMinutes(),'0') + ':'
            + LPAD(d.getSeconds(),'0')    + ' ' + d.getMilliseconds();
    }
    return '';
}

//절대값
function ABS(x) {
    return Math.abs(x);
}

//올림
function CEIL(x) {
    return Math.ceil(x);
}

//내림
function FLOOR(x) {
    return Math.floor(x);
}
function MAX(...x) {
    return Math.max(...x);
}

function MIN(...x) {
    return Math.min(...x);
}

//제곱근
function POW(x, y) {
    return Math.pow(x, y);
}

//random
function RANDOM() {
    return Math.random();
}

function IS_EMPTY(inputValue) {
    if(inputValue === null || inputValue === undefined || inputValue === ''){
        return true;
    }
    return false;
}


function IS_EMPTY_OBJECT(inputValue) {
    if(IS_EMPTY(inputValue)) {
        return true;
    }

    if(Array.isArray(inputValue) && !inputValue?.length) {
        return true;
    }
    return false;
}


