function(업종코드,건물급수코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_화재공장물건_특정물건_기본요율_001',ruleName:'일반_화재공장물건(특정물건)기본요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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


    // Compiler Version 1 , Created : 2023-08-18 17:38:54
    if(((업종코드 == "E011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 0.014 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 0.036 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 0.053 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 0.071 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 0.106 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 0.302 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 0.454 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 0.047 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 0.073 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 0.04 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 0.062 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 0.154 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 0.521 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E102"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 0.781 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 0.051 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 0.051 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 0.075 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 0.101 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1224"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 0.152 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 0.067 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1312"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 0.117 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1313"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 0.168 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1314"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 0.266 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1321"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 0.134 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1322"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 0.184 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1323"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 0.233 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1324"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 0.333 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 0.014 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E15"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 0.095 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E16"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 0.144 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 0.016 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 0.019 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 0.031 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 0.05 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1713"))
    && ((건물급수코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 0.123 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1713"))
    && ((건물급수코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 0.191 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1713"))
    && ((건물급수코드 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 0.307 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1713"))
    && ((건물급수코드 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 0.476 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1721"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 0.191 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E1722"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 0.476 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 0.016 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 0.019 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 0.031 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건_특정물건_기본요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 0.05 , '특정물건여부' : "1"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};