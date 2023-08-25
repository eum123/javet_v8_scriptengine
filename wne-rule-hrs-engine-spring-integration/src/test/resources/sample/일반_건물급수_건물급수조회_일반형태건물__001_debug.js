function(기둥구조구분,지붕구조구분,벽구조구분 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_건물급수_건물급수조회_일반형태건물__001',ruleName:'일반_건물급수_건물급수조회(일반형태건물)',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기둥구조구분:'+JSON.stringify(기둥구조구분)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기둥구조구분' , 'value':JSON.stringify(기둥구조구분) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'지붕구조구분:'+JSON.stringify(지붕구조구분)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'지붕구조구분' , 'value':JSON.stringify(지붕구조구분) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'벽구조구분:'+JSON.stringify(벽구조구분)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'벽구조구분' , 'value':JSON.stringify(벽구조구분) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:41:09
    if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:0});
     __hpasRuleResult = {
'건물급수코드' : "1"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:1});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "준가연"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:2});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "준가연"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:3});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "준가연"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:4});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "준가연"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:5});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:6});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:7});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "내화"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:8});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:9});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:10});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "불연"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:11});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((기둥구조구분 == '기둥구조구분'))
    && ((지붕구조구분 == '지붕구조구분'))
    && ((벽구조구분 == '벽구조구분'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_일반형태건물__001' , row:12});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};