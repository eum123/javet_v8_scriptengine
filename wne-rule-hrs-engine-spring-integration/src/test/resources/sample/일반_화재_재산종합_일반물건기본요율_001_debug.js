function(건물급수코드,업종코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_화재_재산종합_일반물건기본요율_001',ruleName:'일반_화재_재산종합_일반물건기본요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'건물급수코드:'+JSON.stringify(건물급수코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'건물급수코드' , 'value':JSON.stringify(건물급수코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'업종코드:'+JSON.stringify(업종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'업종코드' , 'value':JSON.stringify(업종코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 17:38:34
    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "1"))
    && ((업종코드 == "01010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01080"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01090"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01100"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 0.009
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 0.0154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "05000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 0.0083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 0.134
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 0.0068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 0.0068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 0.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:44});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:45});
     __hpasRuleResult = {
'순요율' : 0.141
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:46});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:47});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:48});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:49});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:50});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:51});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:52});
     __hpasRuleResult = {
'순요율' : 0.185
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:53});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:54});
     __hpasRuleResult = {
'순요율' : 0.098
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:55});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:56});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:57});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:58});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:59});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:60});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:61});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:62});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:63});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:64});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:65});
     __hpasRuleResult = {
'순요율' : 0.0079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:66});
     __hpasRuleResult = {
'순요율' : 0.0079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "13010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:67});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "13020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:68});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "13030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:69});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "13040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:70});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:71});
     __hpasRuleResult = {
'순요율' : 0.061
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:72});
     __hpasRuleResult = {
'순요율' : 0.1
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:73});
     __hpasRuleResult = {
'순요율' : 0.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:74});
     __hpasRuleResult = {
'순요율' : 0.219
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:75});
     __hpasRuleResult = {
'순요율' : 0.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:76});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:77});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:78});
     __hpasRuleResult = {
'순요율' : 0.078
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:79});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:80});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:81});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "14034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:82});
     __hpasRuleResult = {
'순요율' : 0.062
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:83});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:84});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:85});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:86});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:87});
     __hpasRuleResult = {
'순요율' : 0.0108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:88});
     __hpasRuleResult = {
'순요율' : 0.0129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:89});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:90});
     __hpasRuleResult = {
'순요율' : 0.0204
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "16010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:91});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "16020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:92});
     __hpasRuleResult = {
'순요율' : 0.0081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:93});
     __hpasRuleResult = {
'순요율' : 0.0071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:94});
     __hpasRuleResult = {
'순요율' : 0.134
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:95});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:96});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:97});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "17060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:98});
     __hpasRuleResult = {
'순요율' : 0.177
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "18010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:99});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "18020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:100});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "19010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:101});
     __hpasRuleResult = {
'순요율' : 0.237
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "19020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:102});
     __hpasRuleResult = {
'순요율' : 0.419
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "20011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:103});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "20012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:104});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "20013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:105});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "20020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:106});
     __hpasRuleResult = {
'순요율' : 0.089
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "21010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:107});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "21020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:108});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "22011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:109});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "22012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:110});
     __hpasRuleResult = {
'순요율' : 0.0095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "22020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:111});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "22030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:112});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "22040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:113});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "23011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:114});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "23012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:115});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "23021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:116});
     __hpasRuleResult = {
'순요율' : 0.0083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "23022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:117});
     __hpasRuleResult = {
'순요율' : 0.0083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:118});
     __hpasRuleResult = {
'순요율' : 0.043
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:119});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:120});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:121});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:122});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:123});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:124});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:125});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:126});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01080"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:127});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01090"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:128});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01100"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:129});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:130});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:131});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:132});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:133});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:134});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:135});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:136});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:137});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:138});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:139});
     __hpasRuleResult = {
'순요율' : 0.0198
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:140});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:141});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:142});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "05000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:143});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:144});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:145});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:146});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:147});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:148});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:149});
     __hpasRuleResult = {
'순요율' : 0.0092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:150});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:151});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:152});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:153});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:154});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:155});
     __hpasRuleResult = {
'순요율' : 0.103
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:156});
     __hpasRuleResult = {
'순요율' : 0.0076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:157});
     __hpasRuleResult = {
'순요율' : 0.0076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:158});
     __hpasRuleResult = {
'순요율' : 0.0153
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:159});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:160});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:161});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:162});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:163});
     __hpasRuleResult = {
'순요율' : 0.222
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:164});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:165});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:166});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:167});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:168});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:169});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:170});
     __hpasRuleResult = {
'순요율' : 0.292
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:171});
     __hpasRuleResult = {
'순요율' : 0.061
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:172});
     __hpasRuleResult = {
'순요율' : 0.153
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:173});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:174});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:175});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:176});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:177});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:178});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:179});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:180});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:181});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:182});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:183});
     __hpasRuleResult = {
'순요율' : 0.0085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:184});
     __hpasRuleResult = {
'순요율' : 0.0085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "13010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:185});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "13020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:186});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "13030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:187});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "13040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:188});
     __hpasRuleResult = {
'순요율' : 0.118
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:189});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:190});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:191});
     __hpasRuleResult = {
'순요율' : 0.172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:192});
     __hpasRuleResult = {
'순요율' : 0.248
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:193});
     __hpasRuleResult = {
'순요율' : 0.043
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:194});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:195});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:196});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:197});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:198});
     __hpasRuleResult = {
'순요율' : 0.043
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:199});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "14034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:200});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:201});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:202});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:203});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:204});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:205});
     __hpasRuleResult = {
'순요율' : 0.0129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:206});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:207});
     __hpasRuleResult = {
'순요율' : 0.0172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:208});
     __hpasRuleResult = {
'순요율' : 0.0225
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "16010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:209});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "16020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:210});
     __hpasRuleResult = {
'순요율' : 0.0089
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:211});
     __hpasRuleResult = {
'순요율' : 0.0087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:212});
     __hpasRuleResult = {
'순요율' : 0.208
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:213});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:214});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:215});
     __hpasRuleResult = {
'순요율' : 0.077
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "17060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:216});
     __hpasRuleResult = {
'순요율' : 0.277
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "18010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:217});
     __hpasRuleResult = {
'순요율' : 0.127
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "18020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:218});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "19010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:219});
     __hpasRuleResult = {
'순요율' : 0.377
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "19020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:220});
     __hpasRuleResult = {
'순요율' : 0.67
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "20011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:221});
     __hpasRuleResult = {
'순요율' : 0.246
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "20012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:222});
     __hpasRuleResult = {
'순요율' : 0.246
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "20013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:223});
     __hpasRuleResult = {
'순요율' : 0.246
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "20020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:224});
     __hpasRuleResult = {
'순요율' : 0.135
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "21010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:225});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "21020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:226});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "22011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:227});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "22012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:228});
     __hpasRuleResult = {
'순요율' : 0.0104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "22020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:229});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "22030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:230});
     __hpasRuleResult = {
'순요율' : 0.243
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "22040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:231});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "23011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:232});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "23012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:233});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "23021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:234});
     __hpasRuleResult = {
'순요율' : 0.0092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "23022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:235});
     __hpasRuleResult = {
'순요율' : 0.0092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:236});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:237});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:238});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:239});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:240});
     __hpasRuleResult = {
'순요율' : 0.079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:241});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:242});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:243});
     __hpasRuleResult = {
'순요율' : 0.078
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:244});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01080"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:245});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01090"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:246});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01100"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:247});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:248});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:249});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:250});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:251});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:252});
     __hpasRuleResult = {
'순요율' : 0.171
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:253});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:254});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:255});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:256});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:257});
     __hpasRuleResult = {
'순요율' : 0.0321
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:258});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:259});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:260});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "05000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:261});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:262});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:263});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:264});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:265});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:266});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:267});
     __hpasRuleResult = {
'순요율' : 0.0145
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:268});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:269});
     __hpasRuleResult = {
'순요율' : 0.335
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:270});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:271});
     __hpasRuleResult = {
'순요율' : 0.1
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:272});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:273});
     __hpasRuleResult = {
'순요율' : 0.165
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:274});
     __hpasRuleResult = {
'순요율' : 0.0127
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:275});
     __hpasRuleResult = {
'순요율' : 0.0127
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:276});
     __hpasRuleResult = {
'순요율' : 0.0251
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:277});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:278});
     __hpasRuleResult = {
'순요율' : 0.077
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:279});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:280});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:281});
     __hpasRuleResult = {
'순요율' : 0.359
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:282});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:283});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:284});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:285});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:286});
     __hpasRuleResult = {
'순요율' : 0.162
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:287});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:288});
     __hpasRuleResult = {
'순요율' : 0.471
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:289});
     __hpasRuleResult = {
'순요율' : 0.097
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:290});
     __hpasRuleResult = {
'순요율' : 0.25
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:291});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:292});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:293});
     __hpasRuleResult = {
'순요율' : 0.185
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:294});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:295});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:296});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:297});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:298});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:299});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "3"))
    && ((업종코드 == "12032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:300});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:301});
     __hpasRuleResult = {
'순요율' : 0.0135
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:302});
     __hpasRuleResult = {
'순요율' : 0.0135
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "13010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:303});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "13020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:304});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "13030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:305});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "13040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:306});
     __hpasRuleResult = {
'순요율' : 0.191
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:307});
     __hpasRuleResult = {
'순요율' : 0.161
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:308});
     __hpasRuleResult = {
'순요율' : 0.234
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:309});
     __hpasRuleResult = {
'순요율' : 0.307
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:310});
     __hpasRuleResult = {
'순요율' : 0.456
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:311});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:312});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:313});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:314});
     __hpasRuleResult = {
'순요율' : 0.169
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:315});
     __hpasRuleResult = {
'순요율' : 0.059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:316});
     __hpasRuleResult = {
'순요율' : 0.079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:317});
     __hpasRuleResult = {
'순요율' : 0.097
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "14034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:318});
     __hpasRuleResult = {
'순요율' : 0.135
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:319});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:320});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:321});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:322});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:323});
     __hpasRuleResult = {
'순요율' : 0.0185
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:324});
     __hpasRuleResult = {
'순요율' : 0.0229
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:325});
     __hpasRuleResult = {
'순요율' : 0.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:326});
     __hpasRuleResult = {
'순요율' : 0.0366
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "16010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:327});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "16020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:328});
     __hpasRuleResult = {
'순요율' : 0.0138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:329});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:330});
     __hpasRuleResult = {
'순요율' : 0.34
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:331});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:332});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:333});
     __hpasRuleResult = {
'순요율' : 0.125
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "17060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:334});
     __hpasRuleResult = {
'순요율' : 0.451
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "18010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:335});
     __hpasRuleResult = {
'순요율' : 0.21
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "18020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:336});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "19010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:337});
     __hpasRuleResult = {
'순요율' : 0.612
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "19020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:338});
     __hpasRuleResult = {
'순요율' : 1.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "20011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:339});
     __hpasRuleResult = {
'순요율' : 0.401
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "20012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:340});
     __hpasRuleResult = {
'순요율' : 0.401
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "20013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:341});
     __hpasRuleResult = {
'순요율' : 0.401
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "20020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:342});
     __hpasRuleResult = {
'순요율' : 0.22
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "21010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:343});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "21020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:344});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "22011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:345});
     __hpasRuleResult = {
'순요율' : 0.059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "22012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:346});
     __hpasRuleResult = {
'순요율' : 0.0159
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "22020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:347});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "22030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:348});
     __hpasRuleResult = {
'순요율' : 0.393
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "22040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:349});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "23011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:350});
     __hpasRuleResult = {
'순요율' : 0.078
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "23012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:351});
     __hpasRuleResult = {
'순요율' : 0.078
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "23021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:352});
     __hpasRuleResult = {
'순요율' : 0.0146
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "23022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:353});
     __hpasRuleResult = {
'순요율' : 0.0146
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:354});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:355});
     __hpasRuleResult = {
'순요율' : 0.122
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:356});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:357});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:358});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:359});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:360});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:361});
     __hpasRuleResult = {
'순요율' : 0.115
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:362});
     __hpasRuleResult = {
'순요율' : 0.161
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01080"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:363});
     __hpasRuleResult = {
'순요율' : 0.08
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01090"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:364});
     __hpasRuleResult = {
'순요율' : 0.043
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01100"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:365});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:366});
     __hpasRuleResult = {
'순요율' : 0.08
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:367});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:368});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:369});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:370});
     __hpasRuleResult = {
'순요율' : 0.263
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:371});
     __hpasRuleResult = {
'순요율' : 0.096
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:372});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:373});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:374});
     __hpasRuleResult = {
'순요율' : 0.125
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:375});
     __hpasRuleResult = {
'순요율' : 0.0443
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:376});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:377});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:378});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "05000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:379});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:380});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:381});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:382});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:383});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:384});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:385});
     __hpasRuleResult = {
'순요율' : 0.0171
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:386});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:387});
     __hpasRuleResult = {
'순요율' : 0.509
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:388});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:389});
     __hpasRuleResult = {
'순요율' : 0.151
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:390});
     __hpasRuleResult = {
'순요율' : 0.172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:391});
     __hpasRuleResult = {
'순요율' : 0.248
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:392});
     __hpasRuleResult = {
'순요율' : 0.0169
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:393});
     __hpasRuleResult = {
'순요율' : 0.0169
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:394});
     __hpasRuleResult = {
'순요율' : 0.0328
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:395});
     __hpasRuleResult = {
'순요율' : 0.112
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:396});
     __hpasRuleResult = {
'순요율' : 0.113
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:397});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:398});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:399});
     __hpasRuleResult = {
'순요율' : 0.551
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:400});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:401});
     __hpasRuleResult = {
'순요율' : 0.137
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:402});
     __hpasRuleResult = {
'순요율' : 0.125
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:403});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:404});
     __hpasRuleResult = {
'순요율' : 0.244
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:405});
     __hpasRuleResult = {
'순요율' : 0.158
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:406});
     __hpasRuleResult = {
'순요율' : 0.72
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:407});
     __hpasRuleResult = {
'순요율' : 0.143
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:408});
     __hpasRuleResult = {
'순요율' : 0.378
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:409});
     __hpasRuleResult = {
'순요율' : 0.126
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:410});
     __hpasRuleResult = {
'순요율' : 0.172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:411});
     __hpasRuleResult = {
'순요율' : 0.281
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:412});
     __hpasRuleResult = {
'순요율' : 0.134
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:413});
     __hpasRuleResult = {
'순요율' : 0.134
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:414});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:415});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:416});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:417});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:418});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:419});
     __hpasRuleResult = {
'순요율' : 0.0154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:420});
     __hpasRuleResult = {
'순요율' : 0.0154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "13010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:421});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "13020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:422});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "13030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:423});
     __hpasRuleResult = {
'순요율' : 0.026
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "13040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:424});
     __hpasRuleResult = {
'순요율' : 0.291
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:425});
     __hpasRuleResult = {
'순요율' : 0.354
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:426});
     __hpasRuleResult = {
'순요율' : 0.52
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:427});
     __hpasRuleResult = {
'순요율' : 0.686
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:428});
     __hpasRuleResult = {
'순요율' : 1.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:429});
     __hpasRuleResult = {
'순요율' : 0.164
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:430});
     __hpasRuleResult = {
'순요율' : 0.217
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:431});
     __hpasRuleResult = {
'순요율' : 0.271
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:432});
     __hpasRuleResult = {
'순요율' : 0.378
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:433});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:434});
     __hpasRuleResult = {
'순요율' : 0.174
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:435});
     __hpasRuleResult = {
'순요율' : 0.217
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "14034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:436});
     __hpasRuleResult = {
'순요율' : 0.302
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:437});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:438});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:439});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:440});
     __hpasRuleResult = {
'순요율' : 0.096
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:441});
     __hpasRuleResult = {
'순요율' : 0.0239
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:442});
     __hpasRuleResult = {
'순요율' : 0.0302
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:443});
     __hpasRuleResult = {
'순요율' : 0.0366
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:444});
     __hpasRuleResult = {
'순요율' : 0.0504
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "16010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:445});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "16020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:446});
     __hpasRuleResult = {
'순요율' : 0.0146
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:447});
     __hpasRuleResult = {
'순요율' : 0.0172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:448});
     __hpasRuleResult = {
'순요율' : 0.516
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:449});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:450});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:451});
     __hpasRuleResult = {
'순요율' : 0.187
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "17060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:452});
     __hpasRuleResult = {
'순요율' : 0.686
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "18010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:453});
     __hpasRuleResult = {
'순요율' : 0.318
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "18020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:454});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "19010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:455});
     __hpasRuleResult = {
'순요율' : 0.937
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "19020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:456});
     __hpasRuleResult = {
'순요율' : 1.664
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "20011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:457});
     __hpasRuleResult = {
'순요율' : 0.615
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "20012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:458});
     __hpasRuleResult = {
'순요율' : 0.615
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "20013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:459});
     __hpasRuleResult = {
'순요율' : 0.615
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "20020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:460});
     __hpasRuleResult = {
'순요율' : 0.334
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "21010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:461});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "21020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:462});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "22011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:463});
     __hpasRuleResult = {
'순요율' : 0.087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "22012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:464});
     __hpasRuleResult = {
'순요율' : 0.0198
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "22020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:465});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "22030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:466});
     __hpasRuleResult = {
'순요율' : 0.593
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "22040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:467});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "23011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:468});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "23012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:469});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "23021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:470});
     __hpasRuleResult = {
'순요율' : 0.0155
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "23022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재_재산종합_일반물건기본요율_001' , row:471});
     __hpasRuleResult = {
'순요율' : 0.0155
}
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};