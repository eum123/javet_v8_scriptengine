function(업종코드,건물급수코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001',ruleName:'일반_화재_재산종합_일반물건(특정물건)기본요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'업종코드:'+JSON.stringify(업종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'업종코드' , 'value':JSON.stringify(업종코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'건물급수코드:'+JSON.stringify(건물급수코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'건물급수코드' , 'value':JSON.stringify(건물급수코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 18:09:16
    if(((업종코드 == "E011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 0.026 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 0.053 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 0.075 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 0.098 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 0.14 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 0.342 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 0.51 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 0.058 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 0.089 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 0.022 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 0.033 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 0.077 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E05"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 0.191 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 0.126 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E062"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 0.213 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E063"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 0.301 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E064"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 0.477 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 0.136 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 0.116 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E0811"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 0.028 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E0812"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 0.038 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E0813"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 0.049 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E0814"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 0.069 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E091"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 0.191 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E092"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 0.278 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 0.367 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E094"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 0.542 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 0.469 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E102"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 0.698 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 0.083 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 0.083 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 0.119 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 0.157 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1224"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 0.231 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 0.099 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 0.135 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1233"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 0.172 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1234"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 0.246 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 0.028 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 0.037 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 0.044 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 0.069 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 0.107 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 0.037 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:44});
     __hpasRuleResult = {
'순요율' : 0.044 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:45});
     __hpasRuleResult = {
'순요율' : 0.069 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건_특정물건_기본요율_001' , row:46});
     __hpasRuleResult = {
'순요율' : 0.107 , '특정물건여부' : "1"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};