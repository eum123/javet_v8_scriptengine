function(목적물유형분류코드,업종코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_건물급수_특정물건예외여부조회_001',ruleName:'일반_건물급수_특정물건예외여부조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'목적물유형분류코드:'+JSON.stringify(목적물유형분류코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'목적물유형분류코드' , 'value':JSON.stringify(목적물유형분류코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'업종코드:'+JSON.stringify(업종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'업종코드' , 'value':JSON.stringify(업종코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:57:12
    if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:0});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:1});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:2});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:3});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "08120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:4});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "08210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:5});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "02211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:6});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E1713"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_특정물건예외여부조회_001' , row:7});
     __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    특정물건예외여부 = "0"


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};