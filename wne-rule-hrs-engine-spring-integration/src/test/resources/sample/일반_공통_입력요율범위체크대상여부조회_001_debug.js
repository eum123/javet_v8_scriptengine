function(상품코드,담보코드,추가속성코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_입력요율범위체크대상여부조회_001',ruleName:'일반_공통_입력요율범위체크대상여부조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'추가속성코드:'+JSON.stringify(추가속성코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'추가속성코드' , 'value':JSON.stringify(추가속성코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:21:05
    if(((상품코드 == 'FA00030001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:0});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((담보코드 == "CFA11292"))
    && ((추가속성코드 == "CA00337"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:1});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((담보코드 == "CFA11292"))
    && ((추가속성코드 == "CA00338"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:2});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((담보코드 == "CFA11292"))
    && ((추가속성코드 == "CA00339"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:3});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((담보코드 == "CFA11292"))
    && ((추가속성코드 == "CA00340"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:4});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:5});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00031001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:6});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00032001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:7});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:8});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:9});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034009'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:10});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034002'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:11});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034012'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:12});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034003'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:13});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:14});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:15});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:16});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:17});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:18});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:19});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:20});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:21});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:22});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:23});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:24});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:25});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:26});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:27});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:28});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:29});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:30});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:31});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:32});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:33});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:34});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:35});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:36});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:37});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:38});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:39});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:40});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:41});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:42});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:43});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:44});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:45});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:46});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:47});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:48});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:49});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:50});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:51});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:52});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:53});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:54});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:55});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:56});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:57});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:58});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:59});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:60});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:61});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:62});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:63});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:64});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:65});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:66});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:67});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:68});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:69});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:70});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:71});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:72});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:73});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:74});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:75});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:76});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:77});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:78});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:79});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:80});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:81});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:82});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:83});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:84});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:85});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:86});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:87});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:88});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:89});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:90});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:91});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:92});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:93});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:94});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:95});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:96});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:97});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:98});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:99});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:100});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10578"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:101});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10579"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:102});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10580"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:103});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10578"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:104});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10579"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:105});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10580"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:106});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10602"))
    && ((추가속성코드 == "CA00203"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:107});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10603"))
    && ((추가속성코드 == "CA00204"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:108});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00227"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:109});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00227"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:110});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:111});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:112});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:113});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:114});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:115});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:116});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:117});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:118});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00011001'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:119});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00011002'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:120});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00011003'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:121});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:122});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:123});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:124});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:125});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:126});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:127});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:128});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:129});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:130});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:131});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:132});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:133});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00044001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:134});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045001')||(상품코드 == 'FA00045009'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:135});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == '{해외여행보험CM}'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:136});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045005'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:137});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045006'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:138});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00044002'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:139});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:140});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00044001'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:141});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045001')||(상품코드 == 'FA00045009'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:142});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == '{해외여행보험CM}'))
    && ((담보코드 == "CFA10598"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:143});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045005'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:144});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045006'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:145});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00044002'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:146});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:147});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10598"))
    && ((추가속성코드 == "CA00205"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:148});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10636"))
    && ((추가속성코드 == "CA00244"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:149});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10637"))
    && ((추가속성코드 == "CA00245"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:150});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00032001'))
    && ((담보코드 == "CFA10478"))
    && ((추가속성코드 == "CA00187"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:151});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016003'))
    && ((추가속성코드 == "MA00103"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:152});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((추가속성코드 == "MA00095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:153});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((추가속성코드 == "MA00093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:154});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((추가속성코드 == "MA00114"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:155});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((추가속성코드 == "MA00113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:156});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((담보코드 == "CFA10723"))
    && ((추가속성코드 == "CA00251"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:157});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((추가속성코드 == "MA00095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:158});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((추가속성코드 == "MA00093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:159});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((담보코드 == "CFA10723"))
    && ((추가속성코드 == "CA00251"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:160});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:161});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:162});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:163});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:164});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:165});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:166});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:167});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:168});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:169});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:170});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:171});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:172});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:173});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:174});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:175});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:176});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:177});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:178});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:179});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:180});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:181});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:182});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:183});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:184});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:185});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:186});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:187});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:188});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:189});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00111001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:190});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034002'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:191});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034012'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:192});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034003'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:193});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034004'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:194});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034006'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:195});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034013'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:196});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00034014'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:197});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:198});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:199});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:200});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:201});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:202});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:203});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:204});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:205});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:206});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:207});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:208});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:209});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:210});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:211});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:212});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:213});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:214});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:215});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:216});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:217});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:218});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:219});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:220});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:221});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:222});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:223});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:224});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:225});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:226});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:227});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045003'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:228});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00045003'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:229});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:230});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:231});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:232});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:233});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:234});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:235});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:236});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:237});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:238});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:239});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:240});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:241});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:242});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:243});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:244});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:245});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:246});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:247});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:248});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:249});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:250});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:251});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:252});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:253});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:254});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:255});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:256});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:257});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:258});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010010'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:259});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010010'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:260});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010010'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:261});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010010'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:262});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010011'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:263});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010011'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:264});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010011'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:265});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010011'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:266});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010012'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:267});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010012'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:268});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010012'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:269});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    else if(((상품코드 == 'FA00010012'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위체크대상여부조회_001' , row:270});
     __hpasRuleResult = {
'대상여부' : "1"
}

    }
    대상여부 = "0"


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};