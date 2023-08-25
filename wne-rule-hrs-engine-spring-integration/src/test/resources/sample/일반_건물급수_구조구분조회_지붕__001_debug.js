function(지붕코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_건물급수_구조구분조회_지붕__001',ruleName:'일반_건물급수_구조구분조회(지붕)',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'지붕코드:'+JSON.stringify(지붕코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'지붕코드' , 'value':JSON.stringify(지붕코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 18:06:02
    if(((지붕코드 == "01"/* 슬라브즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:0});
     __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "02"/* 슬라브위아스팔트슁글즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:1});
     __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "03"/* 슬라브위기와즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:2});
     __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "04"/* 철골지붕틀칼라피복철판즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:3});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "05"/* 슬레이트즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:4});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "06"/* 목조지붕틀기와즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:5});
     __hpasRuleResult = {
'지붕구조구분' : "준가연"
}

    }
    else if(((지붕코드 == "07"/* 철골철판즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:6});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "08"/* 동슁글즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:7});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "09"/* 샌드위치판넬즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:8});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "10"/* 한식기와즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:9});
     __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }
    else if(((지붕코드 == "11"/* 철골지붕틀슬레이트즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:10});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "12"/* 목조지붕틀슬레이트즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:11});
     __hpasRuleResult = {
'지붕구조구분' : "준가연"
}

    }
    else if(((지붕코드 == "13"/* 아스팔트슁글즙 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:12});
     __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "14"/* 목조지붕틀천막잇기 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:13});
     __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }
    else if(((지붕코드 == "15"/* 철골지붕틀천막잇기 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_지붕__001' , row:14});
     __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};