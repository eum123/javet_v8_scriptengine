function(목적물유형분류코드,업종코드,물건구분코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_건물급수_건물급수조회_특정물건__001',ruleName:'일반_건물급수_건물급수조회(특정물건)',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'물건구분코드:'+JSON.stringify(물건구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'물건구분코드' , 'value':JSON.stringify(물건구분코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:45:29
    if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E011"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:0});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E012"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:1});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E013"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:2});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E014"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:3});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E015"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:4});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E041"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:5});
     __hpasRuleResult = {
'건물급수코드' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E042"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:6});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E043"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:7});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E05"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:8});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E061"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:9});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E062"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:10});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E063"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:11});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E064"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:12});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E071"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:13});
     __hpasRuleResult = {
'건물급수코드' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E072"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:14});
     __hpasRuleResult = {
'건물급수코드' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E0811"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:15});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E0812"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:16});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E0813"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:17});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E0814"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:18});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E091"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:19});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E092"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:20});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E093"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:21});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E094"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:22});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E101"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:23});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E102"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:24});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E121"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:25});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1221"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:26});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1222"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:27});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1223"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:28});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1224"))
    && ((물건구분코드 == '2')||(물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:29});
     __hpasRuleResult = {
'건물급수코드' : "3"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E133"))
    && ((물건구분코드 == '2'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:30});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1311"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:31});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1312"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:32});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1313"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:33});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1314"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:34});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1321"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:35});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1322"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:36});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1323"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:37});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1324"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:38});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E133"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:39});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E15"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:40});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E16"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:41});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1721"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:42});
     __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((목적물유형분류코드 == "04"/* 특정물건 */))
    && ((업종코드 == "E1722"))
    && ((물건구분코드 == '3'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_건물급수조회_특정물건__001' , row:43});
     __hpasRuleResult = {
'건물급수코드' : "4"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};