function(건물급수코드,업종코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_화재공장물건기본요율_001',ruleName:'일반_화재공장물건기본요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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


    // Compiler Version 1 , Created : 2023-08-18 17:39:18
    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "1"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 0.162
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 0.291
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "01160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 0.192
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02312"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02313"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 0.285
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 0.004
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 0.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 0.132
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02921"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 0.161
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02931"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02932"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02933"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "02980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "03150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 0.087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:44});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:45});
     __hpasRuleResult = {
'순요율' : 0.158
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:46});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:47});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:48});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:49});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:50});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:51});
     __hpasRuleResult = {
'순요율' : 0.194
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04281"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:52});
     __hpasRuleResult = {
'순요율' : 0.219
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04282"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:53});
     __hpasRuleResult = {
'순요율' : 0.182
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04290"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:54});
     __hpasRuleResult = {
'순요율' : 0.336
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:55});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:56});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:57});
     __hpasRuleResult = {
'순요율' : 0.197
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04350"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:58});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:59});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:60});
     __hpasRuleResult = {
'순요율' : 0.469
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:61});
     __hpasRuleResult = {
'순요율' : 0.238
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04460"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:62});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04470"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:63});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04480"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:64});
     __hpasRuleResult = {
'순요율' : 0.414
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:65});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:66});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:67});
     __hpasRuleResult = {
'순요율' : 1.463
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:68});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:69});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:70});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:71});
     __hpasRuleResult = {
'순요율' : 0.122
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04621"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:72});
     __hpasRuleResult = {
'순요율' : 0.111
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04622"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:73});
     __hpasRuleResult = {
'순요율' : 0.212
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04623"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:74});
     __hpasRuleResult = {
'순요율' : 0.19
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04624"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:75});
     __hpasRuleResult = {
'순요율' : 0.073
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04631"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:76});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04632"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:77});
     __hpasRuleResult = {
'순요율' : 0.338
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04633"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:78});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04634"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:79});
     __hpasRuleResult = {
'순요율' : 0.14
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:80});
     __hpasRuleResult = {
'순요율' : 0.137
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:81});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04671"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:82});
     __hpasRuleResult = {
'순요율' : 0.199
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04672"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:83});
     __hpasRuleResult = {
'순요율' : 0.089
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04673"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:84});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04674"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:85});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04681"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:86});
     __hpasRuleResult = {
'순요율' : 0.228
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04682"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:87});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04683"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:88});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04690"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:89});
     __hpasRuleResult = {
'순요율' : 0.166
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:90});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:91});
     __hpasRuleResult = {
'순요율' : 0.224
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:92});
     __hpasRuleResult = {
'순요율' : 0.176
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:93});
     __hpasRuleResult = {
'순요율' : 0.334
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:94});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04760"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:95});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:96});
     __hpasRuleResult = {
'순요율' : 0.508
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:97});
     __hpasRuleResult = {
'순요율' : 0.255
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04792"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:98});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04794"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:99});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04796"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:100});
     __hpasRuleResult = {
'순요율' : 1.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04797"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:101});
     __hpasRuleResult = {
'순요율' : 1.306
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04799"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:102});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479A"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:103});
     __hpasRuleResult = {
'순요율' : 0.295
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479B"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:104});
     __hpasRuleResult = {
'순요율' : 0.218
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479C"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:105});
     __hpasRuleResult = {
'순요율' : 0.163
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479D"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:106});
     __hpasRuleResult = {
'순요율' : 0.258
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479E"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:107});
     __hpasRuleResult = {
'순요율' : 0.192
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479F"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:108});
     __hpasRuleResult = {
'순요율' : 0.144
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479G"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:109});
     __hpasRuleResult = {
'순요율' : 0.295
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479H"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:110});
     __hpasRuleResult = {
'순요율' : 0.218
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479I"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:111});
     __hpasRuleResult = {
'순요율' : 0.163
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479J"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:112});
     __hpasRuleResult = {
'순요율' : 0.232
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479K"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:113});
     __hpasRuleResult = {
'순요율' : 0.172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "0479L"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:114});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:115});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:116});
     __hpasRuleResult = {
'순요율' : 0.215
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:117});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:118});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:119});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04860"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:120});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:121});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:122});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04914"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:123});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:124});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04923"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:125});
     __hpasRuleResult = {
'순요율' : 0.12
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:126});
     __hpasRuleResult = {
'순요율' : 0.501
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:127});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:128});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04961"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:129});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04962"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:130});
     __hpasRuleResult = {
'순요율' : 0.136
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:131});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04981"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:132});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04982"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:133});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04991"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:134});
     __hpasRuleResult = {
'순요율' : 0.216
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04992"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:135});
     __hpasRuleResult = {
'순요율' : 0.233
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04993"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:136});
     __hpasRuleResult = {
'순요율' : 0.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "04994"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:137});
     __hpasRuleResult = {
'순요율' : 0.313
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "05111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:138});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "05112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:139});
     __hpasRuleResult = {
'순요율' : 0.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "05211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:140});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:141});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:142});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:143});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:144});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:145});
     __hpasRuleResult = {
'순요율' : 0.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:146});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:147});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:148});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:149});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:150});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06331"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:151});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06340"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:152});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:153});
     __hpasRuleResult = {
'순요율' : 0.08
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:154});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:155});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06440"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:156});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:157});
     __hpasRuleResult = {
'순요율' : 0.007
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:158});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:159});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:160});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:161});
     __hpasRuleResult = {
'순요율' : 0.003
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:162});
     __hpasRuleResult = {
'순요율' : 0.098
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:163});
     __hpasRuleResult = {
'순요율' : 0.005
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:164});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06590"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:165});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "06610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:166});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:167});
     __hpasRuleResult = {
'순요율' : 0.128
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:168});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:169});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07131"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:170});
     __hpasRuleResult = {
'순요율' : 0.327
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07132"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:171});
     __hpasRuleResult = {
'순요율' : 0.093
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:172});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:173});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:174});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07190"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:175});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:176});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:177});
     __hpasRuleResult = {
'순요율' : 0.128
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:178});
     __hpasRuleResult = {
'순요율' : 0.265
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:179});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:180});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:181});
     __hpasRuleResult = {
'순요율' : 0.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:182});
     __hpasRuleResult = {
'순요율' : 1.202
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:183});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07811"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:184});
     __hpasRuleResult = {
'순요율' : 0.665
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07812"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:185});
     __hpasRuleResult = {
'순요율' : 0.222
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07813"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:186});
     __hpasRuleResult = {
'순요율' : 0.387
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07814"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:187});
     __hpasRuleResult = {
'순요율' : 0.255
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07821"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:188});
     __hpasRuleResult = {
'순요율' : 0.333
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07822"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:189});
     __hpasRuleResult = {
'순요율' : 0.477
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:190});
     __hpasRuleResult = {
'순요율' : 0.174
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:191});
     __hpasRuleResult = {
'순요율' : 0.253
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:192});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:193});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:194});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:195});
     __hpasRuleResult = {
'순요율' : 0.286
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "07950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:196});
     __hpasRuleResult = {
'순요율' : 0.23
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:197});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:198});
     __hpasRuleResult = {
'순요율' : 0.152
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:199});
     __hpasRuleResult = {
'순요율' : 0.265
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:200});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:201});
     __hpasRuleResult = {
'순요율' : 0.191
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:202});
     __hpasRuleResult = {
'순요율' : 0.088
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:203});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:204});
     __hpasRuleResult = {
'순요율' : 0.215
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "08320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:205});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:206});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:207});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:208});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:209});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:210});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:211});
     __hpasRuleResult = {
'순요율' : 0.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:212});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:213});
     __hpasRuleResult = {
'순요율' : 0.136
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:214});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:215});
     __hpasRuleResult = {
'순요율' : 0.055
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:216});
     __hpasRuleResult = {
'순요율' : 0.249
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:217});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:218});
     __hpasRuleResult = {
'순요율' : 0.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:219});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:220});
     __hpasRuleResult = {
'순요율' : 0.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:221});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:222});
     __hpasRuleResult = {
'순요율' : 0.004
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:223});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:224});
     __hpasRuleResult = {
'순요율' : 0.004
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:225});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:226});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:227});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:228});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:229});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "09980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:230});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:231});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:232});
     __hpasRuleResult = {
'순요율' : 0.054
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:233});
     __hpasRuleResult = {
'순요율' : 0.079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:234});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:235});
     __hpasRuleResult = {
'순요율' : 0.1
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:236});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "10410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:237});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:238});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:239});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:240});
     __hpasRuleResult = {
'순요율' : 0.124
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:241});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:242});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:243});
     __hpasRuleResult = {
'순요율' : 0.119
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:244});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:245});
     __hpasRuleResult = {
'순요율' : 0.155
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:246});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:247});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11171"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:248});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:249});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11173"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:250});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:251});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:252});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11183"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:253});
     __hpasRuleResult = {
'순요율' : 0.119
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:254});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:255});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11193"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:256});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:257});
     __hpasRuleResult = {
'순요율' : 0.0008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:258});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:259});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:260});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:261});
     __hpasRuleResult = {
'순요율' : 0.0081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:262});
     __hpasRuleResult = {
'순요율' : 0.0059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:263});
     __hpasRuleResult = {
'순요율' : 0.0023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11300"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:264});
     __hpasRuleResult = {
'순요율' : 0.147
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:265});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:266});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:267});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11513"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:268});
     __hpasRuleResult = {
'순요율' : 0.07
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11521"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:269});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11522"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:270});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11523"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:271});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:272});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11541"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:273});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11542"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:274});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11543"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:275});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11551"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:276});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11552"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:277});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11553"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:278});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:279});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11571"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:280});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11572"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:281});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11573"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:282});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:283});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11591"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:284});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11592"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:285});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11593"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:286});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11594"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:287});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11595"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:288});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11596"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:289});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "11597"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:290});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:291});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:292});
     __hpasRuleResult = {
'순요율' : 0.244
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:293});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:294});
     __hpasRuleResult = {
'순요율' : 0.212
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:295});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12421"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:296});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12422"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:297});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12423"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:298});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12450"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:299});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "1"))
    && ((업종코드 == "12510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:300});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:301});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12531"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:302});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12532"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:303});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:304});
     __hpasRuleResult = {
'순요율' : 0.119
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:305});
     __hpasRuleResult = {
'순요율' : 0.067
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:306});
     __hpasRuleResult = {
'순요율' : 0.527
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:307});
     __hpasRuleResult = {
'순요율' : 0.151
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:308});
     __hpasRuleResult = {
'순요율' : 0.088
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:309});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:310});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:311});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:312});
     __hpasRuleResult = {
'순요율' : 1.339
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:313});
     __hpasRuleResult = {
'순요율' : 0.109
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:314});
     __hpasRuleResult = {
'순요율' : 0.192
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:315});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:316});
     __hpasRuleResult = {
'순요율' : 0.315
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12790"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:317});
     __hpasRuleResult = {
'순요율' : 0.094
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:318});
     __hpasRuleResult = {
'순요율' : 0.43
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12870"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:319});
     __hpasRuleResult = {
'순요율' : 0.073
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:320});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:321});
     __hpasRuleResult = {
'순요율' : 0.48
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:322});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:323});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:324});
     __hpasRuleResult = {
'순요율' : 0.156
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:325});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12971"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:326});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "12972"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:327});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "I1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:328});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:329});
     __hpasRuleResult = {
'순요율' : 0.368
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P2200"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:330});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P3000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:331});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P4001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:332});
     __hpasRuleResult = {
'순요율' : 0.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P4002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:333});
     __hpasRuleResult = {
'순요율' : 0.062
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P4003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:334});
     __hpasRuleResult = {
'순요율' : 0.087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "P4004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:335});
     __hpasRuleResult = {
'순요율' : 0.137
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:336});
     __hpasRuleResult = {
'순요율' : 0.26
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:337});
     __hpasRuleResult = {
'순요율' : 0.463
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "01160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:338});
     __hpasRuleResult = {
'순요율' : 0.308
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:339});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:340});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:341});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:342});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:343});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:344});
     __hpasRuleResult = {
'순요율' : 0.054
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02312"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:345});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02313"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:346});
     __hpasRuleResult = {
'순요율' : 0.143
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:347});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:348});
     __hpasRuleResult = {
'순요율' : 0.458
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:349});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:350});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:351});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:352});
     __hpasRuleResult = {
'순요율' : 0.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:353});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:354});
     __hpasRuleResult = {
'순요율' : 0.218
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:355});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:356});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:357});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:358});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02921"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:359});
     __hpasRuleResult = {
'순요율' : 0.257
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:360});
     __hpasRuleResult = {
'순요율' : 0.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02931"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:361});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02932"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:362});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02933"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:363});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:364});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:365});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:366});
     __hpasRuleResult = {
'순요율' : 0.097
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:367});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "02980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:368});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:369});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:370});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:371});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:372});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:373});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "03150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:374});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:375});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:376});
     __hpasRuleResult = {
'순요율' : 0.128
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:377});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:378});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:379});
     __hpasRuleResult = {
'순요율' : 0.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:380});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:381});
     __hpasRuleResult = {
'순요율' : 0.253
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:382});
     __hpasRuleResult = {
'순요율' : 0.012
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:383});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:384});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:385});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:386});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:387});
     __hpasRuleResult = {
'순요율' : 0.311
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04281"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:388});
     __hpasRuleResult = {
'순요율' : 0.349
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04282"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:389});
     __hpasRuleResult = {
'순요율' : 0.291
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04290"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:390});
     __hpasRuleResult = {
'순요율' : 0.538
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:391});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:392});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:393});
     __hpasRuleResult = {
'순요율' : 0.317
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04350"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:394});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:395});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:396});
     __hpasRuleResult = {
'순요율' : 0.75
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:397});
     __hpasRuleResult = {
'순요율' : 0.381
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04460"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:398});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04470"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:399});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04480"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:400});
     __hpasRuleResult = {
'순요율' : 0.659
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:401});
     __hpasRuleResult = {
'순요율' : 0.132
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:402});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:403});
     __hpasRuleResult = {
'순요율' : 2.346
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:404});
     __hpasRuleResult = {
'순요율' : 0.211
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:405});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:406});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:407});
     __hpasRuleResult = {
'순요율' : 0.196
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04621"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:408});
     __hpasRuleResult = {
'순요율' : 0.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04622"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:409});
     __hpasRuleResult = {
'순요율' : 0.337
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04623"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:410});
     __hpasRuleResult = {
'순요율' : 0.299
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04624"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:411});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04631"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:412});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04632"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:413});
     __hpasRuleResult = {
'순요율' : 0.539
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04633"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:414});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04634"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:415});
     __hpasRuleResult = {
'순요율' : 0.224
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:416});
     __hpasRuleResult = {
'순요율' : 0.22
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:417});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04671"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:418});
     __hpasRuleResult = {
'순요율' : 0.317
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04672"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:419});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04673"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:420});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04674"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:421});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04681"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:422});
     __hpasRuleResult = {
'순요율' : 0.365
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04682"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:423});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04683"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:424});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04690"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:425});
     __hpasRuleResult = {
'순요율' : 0.263
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:426});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:427});
     __hpasRuleResult = {
'순요율' : 0.355
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:428});
     __hpasRuleResult = {
'순요율' : 0.281
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:429});
     __hpasRuleResult = {
'순요율' : 0.535
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:430});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04760"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:431});
     __hpasRuleResult = {
'순요율' : 0.059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:432});
     __hpasRuleResult = {
'순요율' : 0.815
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:433});
     __hpasRuleResult = {
'순요율' : 0.407
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04792"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:434});
     __hpasRuleResult = {
'순요율' : 0.249
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04794"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:435});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04796"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:436});
     __hpasRuleResult = {
'순요율' : 1.637
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04797"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:437});
     __hpasRuleResult = {
'순요율' : 2.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04799"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:438});
     __hpasRuleResult = {
'순요율' : 0.145
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479A"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:439});
     __hpasRuleResult = {
'순요율' : 0.473
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479B"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:440});
     __hpasRuleResult = {
'순요율' : 0.349
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479C"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:441});
     __hpasRuleResult = {
'순요율' : 0.263
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479D"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:442});
     __hpasRuleResult = {
'순요율' : 0.412
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479E"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:443});
     __hpasRuleResult = {
'순요율' : 0.307
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479F"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:444});
     __hpasRuleResult = {
'순요율' : 0.229
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479G"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:445});
     __hpasRuleResult = {
'순요율' : 0.473
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479H"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:446});
     __hpasRuleResult = {
'순요율' : 0.349
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479I"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:447});
     __hpasRuleResult = {
'순요율' : 0.263
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479J"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:448});
     __hpasRuleResult = {
'순요율' : 0.371
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479K"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:449});
     __hpasRuleResult = {
'순요율' : 0.275
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "0479L"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:450});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:451});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:452});
     __hpasRuleResult = {
'순요율' : 0.344
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:453});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:454});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:455});
     __hpasRuleResult = {
'순요율' : 0.186
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04860"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:456});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:457});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:458});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04914"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:459});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:460});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04923"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:461});
     __hpasRuleResult = {
'순요율' : 0.193
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:462});
     __hpasRuleResult = {
'순요율' : 0.798
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:463});
     __hpasRuleResult = {
'순요율' : 0.119
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:464});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04961"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:465});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04962"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:466});
     __hpasRuleResult = {
'순요율' : 0.218
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:467});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04981"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:468});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04982"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:469});
     __hpasRuleResult = {
'순요율' : 0.195
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04991"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:470});
     __hpasRuleResult = {
'순요율' : 0.351
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04992"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:471});
     __hpasRuleResult = {
'순요율' : 0.375
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04993"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:472});
     __hpasRuleResult = {
'순요율' : 0.404
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "04994"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:473});
     __hpasRuleResult = {
'순요율' : 0.503
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "05111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:474});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "05112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:475});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "05211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:476});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:477});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:478});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:479});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:480});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:481});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:482});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:483});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:484});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:485});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:486});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06331"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:487});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06340"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:488});
     __hpasRuleResult = {
'순요율' : 0.137
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:489});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:490});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:491});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06440"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:492});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:493});
     __hpasRuleResult = {
'순요율' : 0.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:494});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:495});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:496});
     __hpasRuleResult = {
'순요율' : 0.038
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:497});
     __hpasRuleResult = {
'순요율' : 0.004
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:498});
     __hpasRuleResult = {
'순요율' : 0.154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:499});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:500});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06590"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:501});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "06610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:502});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:503});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:504});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:505});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07131"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:506});
     __hpasRuleResult = {
'순요율' : 0.521
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07132"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:507});
     __hpasRuleResult = {
'순요율' : 0.15
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:508});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:509});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:510});
     __hpasRuleResult = {
'순요율' : 0.21
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07190"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:511});
     __hpasRuleResult = {
'순요율' : 0.187
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:512});
     __hpasRuleResult = {
'순요율' : 0.149
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:513});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:514});
     __hpasRuleResult = {
'순요율' : 0.424
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:515});
     __hpasRuleResult = {
'순요율' : 0.145
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:516});
     __hpasRuleResult = {
'순요율' : 0.098
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:517});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:518});
     __hpasRuleResult = {
'순요율' : 1.923
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:519});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07811"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:520});
     __hpasRuleResult = {
'순요율' : 1.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07812"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:521});
     __hpasRuleResult = {
'순요율' : 0.353
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07813"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:522});
     __hpasRuleResult = {
'순요율' : 0.618
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07814"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:523});
     __hpasRuleResult = {
'순요율' : 0.405
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07821"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:524});
     __hpasRuleResult = {
'순요율' : 0.532
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07822"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:525});
     __hpasRuleResult = {
'순요율' : 0.765
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:526});
     __hpasRuleResult = {
'순요율' : 0.28
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:527});
     __hpasRuleResult = {
'순요율' : 0.403
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:528});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:529});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:530});
     __hpasRuleResult = {
'순요율' : 0.03
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:531});
     __hpasRuleResult = {
'순요율' : 0.456
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "07950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:532});
     __hpasRuleResult = {
'순요율' : 0.368
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:533});
     __hpasRuleResult = {
'순요율' : 0.173
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:534});
     __hpasRuleResult = {
'순요율' : 0.244
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:535});
     __hpasRuleResult = {
'순요율' : 0.422
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:536});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:537});
     __hpasRuleResult = {
'순요율' : 0.308
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:538});
     __hpasRuleResult = {
'순요율' : 0.141
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:539});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:540});
     __hpasRuleResult = {
'순요율' : 0.344
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "08320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:541});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:542});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:543});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:544});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:545});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:546});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:547});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:548});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:549});
     __hpasRuleResult = {
'순요율' : 0.215
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:550});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:551});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:552});
     __hpasRuleResult = {
'순요율' : 0.395
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:553});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:554});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:555});
     __hpasRuleResult = {
'순요율' : 0.018
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:556});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:557});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:558});
     __hpasRuleResult = {
'순요율' : 0.005
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:559});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:560});
     __hpasRuleResult = {
'순요율' : 0.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:561});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:562});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:563});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:564});
     __hpasRuleResult = {
'순요율' : 0.122
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:565});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "09980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:566});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:567});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:568});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:569});
     __hpasRuleResult = {
'순요율' : 0.124
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:570});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:571});
     __hpasRuleResult = {
'순요율' : 0.162
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:572});
     __hpasRuleResult = {
'순요율' : 0.167
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "10410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:573});
     __hpasRuleResult = {
'순요율' : 0.154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:574});
     __hpasRuleResult = {
'순요율' : 0.15
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:575});
     __hpasRuleResult = {
'순요율' : 0.184
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:576});
     __hpasRuleResult = {
'순요율' : 0.197
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:577});
     __hpasRuleResult = {
'순요율' : 0.144
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:578});
     __hpasRuleResult = {
'순요율' : 0.18
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:579});
     __hpasRuleResult = {
'순요율' : 0.191
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:580});
     __hpasRuleResult = {
'순요율' : 0.151
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:581});
     __hpasRuleResult = {
'순요율' : 0.245
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:582});
     __hpasRuleResult = {
'순요율' : 0.15
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:583});
     __hpasRuleResult = {
'순요율' : 0.208
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11171"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:584});
     __hpasRuleResult = {
'순요율' : 0.134
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:585});
     __hpasRuleResult = {
'순요율' : 0.159
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11173"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:586});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:587});
     __hpasRuleResult = {
'순요율' : 0.144
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:588});
     __hpasRuleResult = {
'순요율' : 0.169
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11183"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:589});
     __hpasRuleResult = {
'순요율' : 0.188
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:590});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:591});
     __hpasRuleResult = {
'순요율' : 0.161
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11193"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:592});
     __hpasRuleResult = {
'순요율' : 0.159
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:593});
     __hpasRuleResult = {
'순요율' : 0.0008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:594});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:595});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:596});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:597});
     __hpasRuleResult = {
'순요율' : 0.0081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:598});
     __hpasRuleResult = {
'순요율' : 0.0059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:599});
     __hpasRuleResult = {
'순요율' : 0.0023
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "2"))
    && ((업종코드 == "11300"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:600});
     __hpasRuleResult = {
'순요율' : 0.234
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:601});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:602});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:603});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11513"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:604});
     __hpasRuleResult = {
'순요율' : 0.112
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11521"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:605});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11522"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:606});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11523"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:607});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:608});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11541"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:609});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11542"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:610});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11543"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:611});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11551"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:612});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11552"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:613});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11553"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:614});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:615});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11571"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:616});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11572"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:617});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11573"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:618});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:619});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11591"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:620});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11592"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:621});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11593"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:622});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11594"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:623});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11595"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:624});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11596"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:625});
     __hpasRuleResult = {
'순요율' : 0.059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "11597"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:626});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:627});
     __hpasRuleResult = {
'순요율' : 0.17
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:628});
     __hpasRuleResult = {
'순요율' : 0.388
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:629});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:630});
     __hpasRuleResult = {
'순요율' : 0.34
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:631});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12421"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:632});
     __hpasRuleResult = {
'순요율' : 0.162
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12422"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:633});
     __hpasRuleResult = {
'순요율' : 0.137
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12423"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:634});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12450"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:635});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:636});
     __hpasRuleResult = {
'순요율' : 0.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:637});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12531"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:638});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12532"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:639});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:640});
     __hpasRuleResult = {
'순요율' : 0.19
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:641});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:642});
     __hpasRuleResult = {
'순요율' : 0.838
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:643});
     __hpasRuleResult = {
'순요율' : 0.238
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:644});
     __hpasRuleResult = {
'순요율' : 0.139
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:645});
     __hpasRuleResult = {
'순요율' : 0.187
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:646});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:647});
     __hpasRuleResult = {
'순요율' : 0.269
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:648});
     __hpasRuleResult = {
'순요율' : 2.145
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:649});
     __hpasRuleResult = {
'순요율' : 0.175
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:650});
     __hpasRuleResult = {
'순요율' : 0.308
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:651});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:652});
     __hpasRuleResult = {
'순요율' : 0.501
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12790"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:653});
     __hpasRuleResult = {
'순요율' : 0.147
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:654});
     __hpasRuleResult = {
'순요율' : 0.685
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12870"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:655});
     __hpasRuleResult = {
'순요율' : 0.118
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:656});
     __hpasRuleResult = {
'순요율' : 0.132
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:657});
     __hpasRuleResult = {
'순요율' : 0.767
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:658});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:659});
     __hpasRuleResult = {
'순요율' : 0.055
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:660});
     __hpasRuleResult = {
'순요율' : 0.248
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:661});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12971"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:662});
     __hpasRuleResult = {
'순요율' : 0.196
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "12972"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:663});
     __hpasRuleResult = {
'순요율' : 0.196
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "I1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:664});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:665});
     __hpasRuleResult = {
'순요율' : 0.564
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P2200"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:666});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P3000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:667});
     __hpasRuleResult = {
'순요율' : 0.191
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P4001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:668});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P4002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:669});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P4003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:670});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "P4004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:671});
     __hpasRuleResult = {
'순요율' : 0.225
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:672});
     __hpasRuleResult = {
'순요율' : 0.421
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:673});
     __hpasRuleResult = {
'순요율' : 0.753
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "01160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:674});
     __hpasRuleResult = {
'순요율' : 0.5
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:675});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:676});
     __hpasRuleResult = {
'순요율' : 0.057
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:677});
     __hpasRuleResult = {
'순요율' : 0.047
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:678});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:679});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:680});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02312"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:681});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02313"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:682});
     __hpasRuleResult = {
'순요율' : 0.229
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:683});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:684});
     __hpasRuleResult = {
'순요율' : 0.745
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:685});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:686});
     __hpasRuleResult = {
'순요율' : 0.073
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:687});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:688});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:689});
     __hpasRuleResult = {
'순요율' : 0.109
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:690});
     __hpasRuleResult = {
'순요율' : 0.354
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:691});
     __hpasRuleResult = {
'순요율' : 0.136
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:692});
     __hpasRuleResult = {
'순요율' : 0.338
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:693});
     __hpasRuleResult = {
'순요율' : 0.149
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:694});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02921"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:695});
     __hpasRuleResult = {
'순요율' : 0.418
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:696});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02931"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:697});
     __hpasRuleResult = {
'순요율' : 0.15
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02932"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:698});
     __hpasRuleResult = {
'순요율' : 0.198
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02933"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:699});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:700});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:701});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:702});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:703});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "02980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:704});
     __hpasRuleResult = {
'순요율' : 0.109
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:705});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:706});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:707});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:708});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:709});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "03150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:710});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:711});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:712});
     __hpasRuleResult = {
'순요율' : 0.208
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:713});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:714});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:715});
     __hpasRuleResult = {
'순요율' : 0.225
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:716});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:717});
     __hpasRuleResult = {
'순요율' : 0.411
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:718});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:719});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:720});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:721});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:722});
     __hpasRuleResult = {
'순요율' : 0.021
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:723});
     __hpasRuleResult = {
'순요율' : 0.505
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04281"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:724});
     __hpasRuleResult = {
'순요율' : 0.566
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04282"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:725});
     __hpasRuleResult = {
'순요율' : 0.472
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04290"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:726});
     __hpasRuleResult = {
'순요율' : 0.873
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:727});
     __hpasRuleResult = {
'순요율' : 0.149
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:728});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:729});
     __hpasRuleResult = {
'순요율' : 0.515
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04350"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:730});
     __hpasRuleResult = {
'순요율' : 0.071
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:731});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:732});
     __hpasRuleResult = {
'순요율' : 1.223
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:733});
     __hpasRuleResult = {
'순요율' : 0.621
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04460"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:734});
     __hpasRuleResult = {
'순요율' : 0.231
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04470"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:735});
     __hpasRuleResult = {
'순요율' : 0.132
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04480"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:736});
     __hpasRuleResult = {
'순요율' : 1.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:737});
     __hpasRuleResult = {
'순요율' : 0.213
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:738});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:739});
     __hpasRuleResult = {
'순요율' : 3.775
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:740});
     __hpasRuleResult = {
'순요율' : 0.343
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:741});
     __hpasRuleResult = {
'순요율' : 0.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:742});
     __hpasRuleResult = {
'순요율' : 0.186
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:743});
     __hpasRuleResult = {
'순요율' : 0.318
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04621"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:744});
     __hpasRuleResult = {
'순요율' : 0.29
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04622"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:745});
     __hpasRuleResult = {
'순요율' : 0.547
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04623"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:746});
     __hpasRuleResult = {
'순요율' : 0.486
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04624"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:747});
     __hpasRuleResult = {
'순요율' : 0.19
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04631"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:748});
     __hpasRuleResult = {
'순요율' : 0.151
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04632"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:749});
     __hpasRuleResult = {
'순요율' : 0.875
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04633"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:750});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04634"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:751});
     __hpasRuleResult = {
'순요율' : 0.364
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:752});
     __hpasRuleResult = {
'순요율' : 0.355
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:753});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04671"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:754});
     __hpasRuleResult = {
'순요율' : 0.511
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04672"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:755});
     __hpasRuleResult = {
'순요율' : 0.231
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04673"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:756});
     __hpasRuleResult = {
'순요율' : 0.197
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04674"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:757});
     __hpasRuleResult = {
'순요율' : 0.21
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04681"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:758});
     __hpasRuleResult = {
'순요율' : 0.593
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04682"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:759});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04683"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:760});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04690"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:761});
     __hpasRuleResult = {
'순요율' : 0.427
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:762});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:763});
     __hpasRuleResult = {
'순요율' : 0.578
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:764});
     __hpasRuleResult = {
'순요율' : 0.457
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:765});
     __hpasRuleResult = {
'순요율' : 0.868
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:766});
     __hpasRuleResult = {
'순요율' : 0.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04760"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:767});
     __hpasRuleResult = {
'순요율' : 0.097
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:768});
     __hpasRuleResult = {
'순요율' : 1.322
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:769});
     __hpasRuleResult = {
'순요율' : 0.662
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04792"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:770});
     __hpasRuleResult = {
'순요율' : 0.405
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04794"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:771});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04796"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:772});
     __hpasRuleResult = {
'순요율' : 2.659
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04797"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:773});
     __hpasRuleResult = {
'순요율' : 3.395
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04799"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:774});
     __hpasRuleResult = {
'순요율' : 0.236
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479A"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:775});
     __hpasRuleResult = {
'순요율' : 0.765
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479B"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:776});
     __hpasRuleResult = {
'순요율' : 0.567
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479C"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:777});
     __hpasRuleResult = {
'순요율' : 0.425
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479D"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:778});
     __hpasRuleResult = {
'순요율' : 0.666
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479E"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:779});
     __hpasRuleResult = {
'순요율' : 0.494
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479F"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:780});
     __hpasRuleResult = {
'순요율' : 0.371
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479G"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:781});
     __hpasRuleResult = {
'순요율' : 0.765
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479H"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:782});
     __hpasRuleResult = {
'순요율' : 0.567
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479I"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:783});
     __hpasRuleResult = {
'순요율' : 0.425
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479J"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:784});
     __hpasRuleResult = {
'순요율' : 0.601
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479K"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:785});
     __hpasRuleResult = {
'순요율' : 0.446
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "0479L"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:786});
     __hpasRuleResult = {
'순요율' : 0.333
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:787});
     __hpasRuleResult = {
'순요율' : 0.231
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:788});
     __hpasRuleResult = {
'순요율' : 0.558
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:789});
     __hpasRuleResult = {
'순요율' : 0.086
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:790});
     __hpasRuleResult = {
'순요율' : 0.02
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:791});
     __hpasRuleResult = {
'순요율' : 0.3
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04860"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:792});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:793});
     __hpasRuleResult = {
'순요율' : 0.048
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:794});
     __hpasRuleResult = {
'순요율' : 0.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04914"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:795});
     __hpasRuleResult = {
'순요율' : 0.065
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:796});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04923"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:797});
     __hpasRuleResult = {
'순요율' : 0.311
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:798});
     __hpasRuleResult = {
'순요율' : 1.294
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:799});
     __hpasRuleResult = {
'순요율' : 0.191
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:800});
     __hpasRuleResult = {
'순요율' : 0.146
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04961"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:801});
     __hpasRuleResult = {
'순요율' : 0.059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04962"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:802});
     __hpasRuleResult = {
'순요율' : 0.352
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:803});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04981"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:804});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04982"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:805});
     __hpasRuleResult = {
'순요율' : 0.317
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04991"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:806});
     __hpasRuleResult = {
'순요율' : 0.567
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04992"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:807});
     __hpasRuleResult = {
'순요율' : 0.607
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04993"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:808});
     __hpasRuleResult = {
'순요율' : 0.656
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "04994"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:809});
     __hpasRuleResult = {
'순요율' : 0.815
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "05111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:810});
     __hpasRuleResult = {
'순요율' : 0.05
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "05112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:811});
     __hpasRuleResult = {
'순요율' : 0.017
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "05211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:812});
     __hpasRuleResult = {
'순요율' : 0.054
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:813});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:814});
     __hpasRuleResult = {
'순요율' : 0.054
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:815});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:816});
     __hpasRuleResult = {
'순요율' : 0.046
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:817});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:818});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:819});
     __hpasRuleResult = {
'순요율' : 0.083
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:820});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:821});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:822});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06331"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:823});
     __hpasRuleResult = {
'순요율' : 0.174
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06340"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:824});
     __hpasRuleResult = {
'순요율' : 0.223
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:825});
     __hpasRuleResult = {
'순요율' : 0.211
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:826});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:827});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06440"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:828});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:829});
     __hpasRuleResult = {
'순요율' : 0.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:830});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:831});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:832});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:833});
     __hpasRuleResult = {
'순요율' : 0.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:834});
     __hpasRuleResult = {
'순요율' : 0.25
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:835});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:836});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06590"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:837});
     __hpasRuleResult = {
'순요율' : 0.087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "06610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:838});
     __hpasRuleResult = {
'순요율' : 0.08
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:839});
     __hpasRuleResult = {
'순요율' : 0.333
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:840});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:841});
     __hpasRuleResult = {
'순요율' : 0.164
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07131"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:842});
     __hpasRuleResult = {
'순요율' : 0.847
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07132"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:843});
     __hpasRuleResult = {
'순요율' : 0.243
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:844});
     __hpasRuleResult = {
'순요율' : 0.188
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:845});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:846});
     __hpasRuleResult = {
'순요율' : 0.34
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07190"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:847});
     __hpasRuleResult = {
'순요율' : 0.303
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:848});
     __hpasRuleResult = {
'순요율' : 0.24
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:849});
     __hpasRuleResult = {
'순요율' : 0.336
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:850});
     __hpasRuleResult = {
'순요율' : 0.689
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:851});
     __hpasRuleResult = {
'순요율' : 0.239
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:852});
     __hpasRuleResult = {
'순요율' : 0.158
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:853});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:854});
     __hpasRuleResult = {
'순요율' : 3.119
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:855});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07811"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:856});
     __hpasRuleResult = {
'순요율' : 1.73
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07812"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:857});
     __hpasRuleResult = {
'순요율' : 0.575
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07813"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:858});
     __hpasRuleResult = {
'순요율' : 1.006
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07814"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:859});
     __hpasRuleResult = {
'순요율' : 0.66
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07821"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:860});
     __hpasRuleResult = {
'순요율' : 0.864
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07822"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:861});
     __hpasRuleResult = {
'순요율' : 1.242
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:862});
     __hpasRuleResult = {
'순요율' : 0.456
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:863});
     __hpasRuleResult = {
'순요율' : 0.653
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:864});
     __hpasRuleResult = {
'순요율' : 0.195
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:865});
     __hpasRuleResult = {
'순요율' : 0.216
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:866});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:867});
     __hpasRuleResult = {
'순요율' : 0.741
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "07950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:868});
     __hpasRuleResult = {
'순요율' : 0.596
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:869});
     __hpasRuleResult = {
'순요율' : 0.282
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:870});
     __hpasRuleResult = {
'순요율' : 0.399
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:871});
     __hpasRuleResult = {
'순요율' : 0.69
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:872});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:873});
     __hpasRuleResult = {
'순요율' : 0.5
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:874});
     __hpasRuleResult = {
'순요율' : 0.228
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:875});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:876});
     __hpasRuleResult = {
'순요율' : 0.558
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "08320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:877});
     __hpasRuleResult = {
'순요율' : 0.196
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:878});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:879});
     __hpasRuleResult = {
'순요율' : 0.139
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:880});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:881});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:882});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:883});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:884});
     __hpasRuleResult = {
'순요율' : 0.164
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:885});
     __hpasRuleResult = {
'순요율' : 0.35
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:886});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:887});
     __hpasRuleResult = {
'순요율' : 0.139
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:888});
     __hpasRuleResult = {
'순요율' : 0.64
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:889});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:890});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:891});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:892});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:893});
     __hpasRuleResult = {
'순요율' : 0.089
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:894});
     __hpasRuleResult = {
'순요율' : 0.01
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:895});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:896});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:897});
     __hpasRuleResult = {
'순요율' : 0.116
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:898});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:899});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "3"))
    && ((업종코드 == "09960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:900});
     __hpasRuleResult = {
'순요율' : 0.201
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:901});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "09980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:902});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:903});
     __hpasRuleResult = {
'순요율' : 0.068
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:904});
     __hpasRuleResult = {
'순요율' : 0.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:905});
     __hpasRuleResult = {
'순요율' : 0.202
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:906});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:907});
     __hpasRuleResult = {
'순요율' : 0.261
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:908});
     __hpasRuleResult = {
'순요율' : 0.272
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "10410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:909});
     __hpasRuleResult = {
'순요율' : 0.249
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:910});
     __hpasRuleResult = {
'순요율' : 0.243
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:911});
     __hpasRuleResult = {
'순요율' : 0.3
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:912});
     __hpasRuleResult = {
'순요율' : 0.318
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:913});
     __hpasRuleResult = {
'순요율' : 0.233
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:914});
     __hpasRuleResult = {
'순요율' : 0.289
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:915});
     __hpasRuleResult = {
'순요율' : 0.31
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:916});
     __hpasRuleResult = {
'순요율' : 0.245
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:917});
     __hpasRuleResult = {
'순요율' : 0.4
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:918});
     __hpasRuleResult = {
'순요율' : 0.244
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:919});
     __hpasRuleResult = {
'순요율' : 0.34
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11171"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:920});
     __hpasRuleResult = {
'순요율' : 0.216
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:921});
     __hpasRuleResult = {
'순요율' : 0.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11173"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:922});
     __hpasRuleResult = {
'순요율' : 0.273
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:923});
     __hpasRuleResult = {
'순요율' : 0.233
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:924});
     __hpasRuleResult = {
'순요율' : 0.278
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11183"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:925});
     __hpasRuleResult = {
'순요율' : 0.308
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:926});
     __hpasRuleResult = {
'순요율' : 0.21
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:927});
     __hpasRuleResult = {
'순요율' : 0.262
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11193"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:928});
     __hpasRuleResult = {
'순요율' : 0.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:929});
     __hpasRuleResult = {
'순요율' : 0.0008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:930});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:931});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:932});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:933});
     __hpasRuleResult = {
'순요율' : 0.0081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:934});
     __hpasRuleResult = {
'순요율' : 0.0059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:935});
     __hpasRuleResult = {
'순요율' : 0.0023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11300"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:936});
     __hpasRuleResult = {
'순요율' : 0.384
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:937});
     __hpasRuleResult = {
'순요율' : 0.079
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:938});
     __hpasRuleResult = {
'순요율' : 0.136
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:939});
     __hpasRuleResult = {
'순요율' : 0.171
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11513"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:940});
     __hpasRuleResult = {
'순요율' : 0.182
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11521"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:941});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11522"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:942});
     __hpasRuleResult = {
'순요율' : 0.1
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11523"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:943});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:944});
     __hpasRuleResult = {
'순요율' : 0.082
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11541"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:945});
     __hpasRuleResult = {
'순요율' : 0.077
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11542"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:946});
     __hpasRuleResult = {
'순요율' : 0.092
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11543"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:947});
     __hpasRuleResult = {
'순요율' : 0.111
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11551"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:948});
     __hpasRuleResult = {
'순요율' : 0.08
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11552"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:949});
     __hpasRuleResult = {
'순요율' : 0.1
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11553"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:950});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:951});
     __hpasRuleResult = {
'순요율' : 0.077
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11571"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:952});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11572"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:953});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11573"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:954});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:955});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11591"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:956});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11592"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:957});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11593"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:958});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11594"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:959});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11595"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:960});
     __hpasRuleResult = {
'순요율' : 0.094
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11596"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:961});
     __hpasRuleResult = {
'순요율' : 0.095
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "11597"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:962});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:963});
     __hpasRuleResult = {
'순요율' : 0.276
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:964});
     __hpasRuleResult = {
'순요율' : 0.628
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:965});
     __hpasRuleResult = {
'순요율' : 0.067
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:966});
     __hpasRuleResult = {
'순요율' : 0.554
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:967});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12421"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:968});
     __hpasRuleResult = {
'순요율' : 0.262
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12422"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:969});
     __hpasRuleResult = {
'순요율' : 0.223
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12423"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:970});
     __hpasRuleResult = {
'순요율' : 0.166
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12450"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:971});
     __hpasRuleResult = {
'순요율' : 0.213
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:972});
     __hpasRuleResult = {
'순요율' : 0.022
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:973});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12531"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:974});
     __hpasRuleResult = {
'순요율' : 0.04
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12532"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:975});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:976});
     __hpasRuleResult = {
'순요율' : 0.309
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:977});
     __hpasRuleResult = {
'순요율' : 0.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:978});
     __hpasRuleResult = {
'순요율' : 1.357
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:979});
     __hpasRuleResult = {
'순요율' : 0.387
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:980});
     __hpasRuleResult = {
'순요율' : 0.225
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:981});
     __hpasRuleResult = {
'순요율' : 0.303
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:982});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:983});
     __hpasRuleResult = {
'순요율' : 0.436
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:984});
     __hpasRuleResult = {
'순요율' : 3.481
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:985});
     __hpasRuleResult = {
'순요율' : 0.282
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:986});
     __hpasRuleResult = {
'순요율' : 0.499
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:987});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:988});
     __hpasRuleResult = {
'순요율' : 0.815
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12790"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:989});
     __hpasRuleResult = {
'순요율' : 0.244
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:990});
     __hpasRuleResult = {
'순요율' : 1.115
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12870"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:991});
     __hpasRuleResult = {
'순요율' : 0.19
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:992});
     __hpasRuleResult = {
'순요율' : 0.21
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:993});
     __hpasRuleResult = {
'순요율' : 1.246
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:994});
     __hpasRuleResult = {
'순요율' : 0.066
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:995});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:996});
     __hpasRuleResult = {
'순요율' : 0.403
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:997});
     __hpasRuleResult = {
'순요율' : 0.094
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12971"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:998});
     __hpasRuleResult = {
'순요율' : 0.318
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "12972"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:999});
     __hpasRuleResult = {
'순요율' : 0.318
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "I1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1000});
     __hpasRuleResult = {
'순요율' : 0.084
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1001});
     __hpasRuleResult = {
'순요율' : 0.91
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P2200"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1002});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P3000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1003});
     __hpasRuleResult = {
'순요율' : 0.307
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P4001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1004});
     __hpasRuleResult = {
'순요율' : 0.093
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P4002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1005});
     __hpasRuleResult = {
'순요율' : 0.135
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P4003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1006});
     __hpasRuleResult = {
'순요율' : 0.176
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "P4004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1007});
     __hpasRuleResult = {
'순요율' : 0.26
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1008});
     __hpasRuleResult = {
'순요율' : 0.65
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1009});
     __hpasRuleResult = {
'순요율' : 1.156
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "01160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1010});
     __hpasRuleResult = {
'순요율' : 0.769
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1011});
     __hpasRuleResult = {
'순요율' : 0.118
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1012});
     __hpasRuleResult = {
'순요율' : 0.088
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1013});
     __hpasRuleResult = {
'순요율' : 0.072
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1014});
     __hpasRuleResult = {
'순요율' : 0.118
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1015});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1016});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02312"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1017});
     __hpasRuleResult = {
'순요율' : 0.158
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02313"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1018});
     __hpasRuleResult = {
'순요율' : 0.353
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1019});
     __hpasRuleResult = {
'순요율' : 0.07
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1020});
     __hpasRuleResult = {
'순요율' : 1.145
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1021});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1022});
     __hpasRuleResult = {
'순요율' : 0.114
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1023});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1024});
     __hpasRuleResult = {
'순요율' : 0.016
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1025});
     __hpasRuleResult = {
'순요율' : 0.167
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1026});
     __hpasRuleResult = {
'순요율' : 0.545
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1027});
     __hpasRuleResult = {
'순요율' : 0.209
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1028});
     __hpasRuleResult = {
'순요율' : 0.519
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1029});
     __hpasRuleResult = {
'순요율' : 0.228
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1030});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02921"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1031});
     __hpasRuleResult = {
'순요율' : 0.644
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1032});
     __hpasRuleResult = {
'순요율' : 0.032
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02931"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1033});
     __hpasRuleResult = {
'순요율' : 0.227
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02932"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1034});
     __hpasRuleResult = {
'순요율' : 0.306
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02933"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1035});
     __hpasRuleResult = {
'순요율' : 0.169
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1036});
     __hpasRuleResult = {
'순요율' : 0.199
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1037});
     __hpasRuleResult = {
'순요율' : 0.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1038});
     __hpasRuleResult = {
'순요율' : 0.241
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1039});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "02980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1040});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1041});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1042});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1043});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1044});
     __hpasRuleResult = {
'순요율' : 0.166
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1045});
     __hpasRuleResult = {
'순요율' : 0.093
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "03150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1046});
     __hpasRuleResult = {
'순요율' : 0.093
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1047});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1048});
     __hpasRuleResult = {
'순요율' : 0.32
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1049});
     __hpasRuleResult = {
'순요율' : 0.204
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1050});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1051});
     __hpasRuleResult = {
'순요율' : 0.347
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1052});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1053});
     __hpasRuleResult = {
'순요율' : 0.631
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1054});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1055});
     __hpasRuleResult = {
'순요율' : 0.042
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1056});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1057});
     __hpasRuleResult = {
'순요율' : 0.064
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1058});
     __hpasRuleResult = {
'순요율' : 0.033
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1059});
     __hpasRuleResult = {
'순요율' : 0.779
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04281"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1060});
     __hpasRuleResult = {
'순요율' : 0.87
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04282"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1061});
     __hpasRuleResult = {
'순요율' : 0.725
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04290"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1062});
     __hpasRuleResult = {
'순요율' : 1.343
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1063});
     __hpasRuleResult = {
'순요율' : 0.229
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1064});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1065});
     __hpasRuleResult = {
'순요율' : 0.79
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04350"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1066});
     __hpasRuleResult = {
'순요율' : 0.108
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1067});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1068});
     __hpasRuleResult = {
'순요율' : 1.877
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1069});
     __hpasRuleResult = {
'순요율' : 0.954
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04460"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1070});
     __hpasRuleResult = {
'순요율' : 0.355
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04470"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1071});
     __hpasRuleResult = {
'순요율' : 0.202
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04480"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1072});
     __hpasRuleResult = {
'순요율' : 1.649
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1073});
     __hpasRuleResult = {
'순요율' : 0.329
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1074});
     __hpasRuleResult = {
'순요율' : 0.205
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1075});
     __hpasRuleResult = {
'순요율' : 5.84
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1076});
     __hpasRuleResult = {
'순요율' : 0.527
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1077});
     __hpasRuleResult = {
'순요율' : 0.392
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1078});
     __hpasRuleResult = {
'순요율' : 0.284
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1079});
     __hpasRuleResult = {
'순요율' : 0.489
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04621"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1080});
     __hpasRuleResult = {
'순요율' : 0.443
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04622"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1081});
     __hpasRuleResult = {
'순요율' : 0.839
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04623"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1082});
     __hpasRuleResult = {
'순요율' : 0.747
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04624"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1083});
     __hpasRuleResult = {
'순요율' : 0.292
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04631"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1084});
     __hpasRuleResult = {
'순요율' : 0.229
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04632"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1085});
     __hpasRuleResult = {
'순요율' : 1.346
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04633"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1086});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04634"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1087});
     __hpasRuleResult = {
'순요율' : 0.563
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1088});
     __hpasRuleResult = {
'순요율' : 0.547
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1089});
     __hpasRuleResult = {
'순요율' : 0.16
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04671"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1090});
     __hpasRuleResult = {
'순요율' : 0.788
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04672"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1091});
     __hpasRuleResult = {
'순요율' : 0.355
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04673"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1092});
     __hpasRuleResult = {
'순요율' : 0.303
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04674"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1093});
     __hpasRuleResult = {
'순요율' : 0.324
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04681"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1094});
     __hpasRuleResult = {
'순요율' : 0.912
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04682"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1095});
     __hpasRuleResult = {
'순요율' : 0.155
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04683"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1096});
     __hpasRuleResult = {
'순요율' : 0.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04690"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1097});
     __hpasRuleResult = {
'순요율' : 0.658
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1098});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1099});
     __hpasRuleResult = {
'순요율' : 0.89
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1100});
     __hpasRuleResult = {
'순요율' : 0.702
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1101});
     __hpasRuleResult = {
'순요율' : 1.334
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1102});
     __hpasRuleResult = {
'순요율' : 0.274
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04760"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1103});
     __hpasRuleResult = {
'순요율' : 0.147
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1104});
     __hpasRuleResult = {
'순요율' : 2.036
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1105});
     __hpasRuleResult = {
'순요율' : 1.019
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04792"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1106});
     __hpasRuleResult = {
'순요율' : 0.623
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04794"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1107});
     __hpasRuleResult = {
'순요율' : 0.076
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04796"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1108});
     __hpasRuleResult = {
'순요율' : 4.087
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04797"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1109});
     __hpasRuleResult = {
'순요율' : 5.221
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04799"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1110});
     __hpasRuleResult = {
'순요율' : 0.364
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479A"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1111});
     __hpasRuleResult = {
'순요율' : 1.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479B"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1112});
     __hpasRuleResult = {
'순요율' : 0.872
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479C"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1113});
     __hpasRuleResult = {
'순요율' : 0.656
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479D"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1114});
     __hpasRuleResult = {
'순요율' : 1.027
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479E"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1115});
     __hpasRuleResult = {
'순요율' : 0.759
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479F"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1116});
     __hpasRuleResult = {
'순요율' : 0.572
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479G"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1117});
     __hpasRuleResult = {
'순요율' : 1.178
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479H"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1118});
     __hpasRuleResult = {
'순요율' : 0.872
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479I"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1119});
     __hpasRuleResult = {
'순요율' : 0.656
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479J"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1120});
     __hpasRuleResult = {
'순요율' : 0.925
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479K"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1121});
     __hpasRuleResult = {
'순요율' : 0.685
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "0479L"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1122});
     __hpasRuleResult = {
'순요율' : 0.515
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1123});
     __hpasRuleResult = {
'순요율' : 0.355
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1124});
     __hpasRuleResult = {
'순요율' : 0.859
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1125});
     __hpasRuleResult = {
'순요율' : 0.133
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1126});
     __hpasRuleResult = {
'순요율' : 0.031
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1127});
     __hpasRuleResult = {
'순요율' : 0.463
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04860"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1128});
     __hpasRuleResult = {
'순요율' : 0.089
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1129});
     __hpasRuleResult = {
'순요율' : 0.073
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1130});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04914"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1131});
     __hpasRuleResult = {
'순요율' : 0.099
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04922"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1132});
     __hpasRuleResult = {
'순요율' : 0.126
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04923"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1133});
     __hpasRuleResult = {
'순요율' : 0.48
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1134});
     __hpasRuleResult = {
'순요율' : 1.991
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1135});
     __hpasRuleResult = {
'순요율' : 0.295
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1136});
     __hpasRuleResult = {
'순요율' : 0.225
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04961"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1137});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04962"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1138});
     __hpasRuleResult = {
'순요율' : 0.542
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1139});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04981"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1140});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04982"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1141});
     __hpasRuleResult = {
'순요율' : 0.488
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04991"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1142});
     __hpasRuleResult = {
'순요율' : 0.87
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04992"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1143});
     __hpasRuleResult = {
'순요율' : 0.932
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04993"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1144});
     __hpasRuleResult = {
'순요율' : 1.014
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "04994"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1145});
     __hpasRuleResult = {
'순요율' : 1.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "05111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1146});
     __hpasRuleResult = {
'순요율' : 0.074
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "05112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1147});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "05211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1148});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1149});
     __hpasRuleResult = {
'순요율' : 0.16
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1150});
     __hpasRuleResult = {
'순요율' : 0.085
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1151});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1152});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1153});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1154});
     __hpasRuleResult = {
'순요율' : 0.073
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1155});
     __hpasRuleResult = {
'순요율' : 0.127
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1156});
     __hpasRuleResult = {
'순요율' : 0.07
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1157});
     __hpasRuleResult = {
'순요율' : 0.093
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1158});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06331"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1159});
     __hpasRuleResult = {
'순요율' : 0.266
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06340"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1160});
     __hpasRuleResult = {
'순요율' : 0.343
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1161});
     __hpasRuleResult = {
'순요율' : 0.319
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1162});
     __hpasRuleResult = {
'순요율' : 0.063
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1163});
     __hpasRuleResult = {
'순요율' : 0.155
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06440"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1164});
     __hpasRuleResult = {
'순요율' : 0.158
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1165});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1166});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1167});
     __hpasRuleResult = {
'순요율' : 0.131
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1168});
     __hpasRuleResult = {
'순요율' : 0.091
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06550"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1169});
     __hpasRuleResult = {
'순요율' : 0.011
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1170});
     __hpasRuleResult = {
'순요율' : 0.383
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06570"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1171});
     __hpasRuleResult = {
'순요율' : 0.023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1172});
     __hpasRuleResult = {
'순요율' : 0.155
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06590"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1173});
     __hpasRuleResult = {
'순요율' : 0.128
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "06610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1174});
     __hpasRuleResult = {
'순요율' : 0.12
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1175});
     __hpasRuleResult = {
'순요율' : 0.514
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1176});
     __hpasRuleResult = {
'순요율' : 0.159
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1177});
     __hpasRuleResult = {
'순요율' : 0.254
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07131"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1178});
     __hpasRuleResult = {
'순요율' : 1.303
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07132"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1179});
     __hpasRuleResult = {
'순요율' : 0.375
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1180});
     __hpasRuleResult = {
'순요율' : 0.29
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1181});
     __hpasRuleResult = {
'순요율' : 0.081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1182});
     __hpasRuleResult = {
'순요율' : 0.522
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07190"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1183});
     __hpasRuleResult = {
'순요율' : 0.466
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1184});
     __hpasRuleResult = {
'순요율' : 0.369
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1185});
     __hpasRuleResult = {
'순요율' : 0.518
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1186});
     __hpasRuleResult = {
'순요율' : 1.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1187});
     __hpasRuleResult = {
'순요율' : 0.367
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1188});
     __hpasRuleResult = {
'순요율' : 0.243
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1189});
     __hpasRuleResult = {
'순요율' : 0.107
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1190});
     __hpasRuleResult = {
'순요율' : 4.8
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1191});
     __hpasRuleResult = {
'순요율' : 0.062
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07811"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1192});
     __hpasRuleResult = {
'순요율' : 2.664
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07812"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1193});
     __hpasRuleResult = {
'순요율' : 0.884
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07813"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1194});
     __hpasRuleResult = {
'순요율' : 1.546
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07814"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1195});
     __hpasRuleResult = {
'순요율' : 1.013
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07821"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1196});
     __hpasRuleResult = {
'순요율' : 1.328
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07822"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1197});
     __hpasRuleResult = {
'순요율' : 1.913
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07840"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1198});
     __hpasRuleResult = {
'순요율' : 0.701
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1199});
     __hpasRuleResult = {
'순요율' : 1.005
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((건물급수코드 == "4"))
    && ((업종코드 == "07910"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1200});
     __hpasRuleResult = {
'순요율' : 0.299
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1201});
     __hpasRuleResult = {
'순요율' : 0.333
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1202});
     __hpasRuleResult = {
'순요율' : 0.075
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1203});
     __hpasRuleResult = {
'순요율' : 1.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "07950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1204});
     __hpasRuleResult = {
'순요율' : 0.918
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1205});
     __hpasRuleResult = {
'순요율' : 0.433
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1206});
     __hpasRuleResult = {
'순요율' : 0.612
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1207});
     __hpasRuleResult = {
'순요율' : 1.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1208});
     __hpasRuleResult = {
'순요율' : 0.039
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1209});
     __hpasRuleResult = {
'순요율' : 0.768
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1210});
     __hpasRuleResult = {
'순요율' : 0.352
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1211});
     __hpasRuleResult = {
'순요율' : 0.187
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08270"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1212});
     __hpasRuleResult = {
'순요율' : 0.857
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "08320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1213});
     __hpasRuleResult = {
'순요율' : 0.302
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1214});
     __hpasRuleResult = {
'순요율' : 0.044
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1215});
     __hpasRuleResult = {
'순요율' : 0.213
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1216});
     __hpasRuleResult = {
'순요율' : 0.058
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1217});
     __hpasRuleResult = {
'순요율' : 0.037
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1218});
     __hpasRuleResult = {
'순요율' : 0.035
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1219});
     __hpasRuleResult = {
'순요율' : 0.104
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1220});
     __hpasRuleResult = {
'순요율' : 0.253
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09420"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1221});
     __hpasRuleResult = {
'순요율' : 0.54
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09430"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1222});
     __hpasRuleResult = {
'순요율' : 0.056
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1223});
     __hpasRuleResult = {
'순요율' : 0.214
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1224});
     __hpasRuleResult = {
'순요율' : 0.98
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1225});
     __hpasRuleResult = {
'순요율' : 0.256
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1226});
     __hpasRuleResult = {
'순요율' : 0.049
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1227});
     __hpasRuleResult = {
'순요율' : 0.045
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09810"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1228});
     __hpasRuleResult = {
'순요율' : 0.024
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09820"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1229});
     __hpasRuleResult = {
'순요율' : 0.138
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09830"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1230});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1231});
     __hpasRuleResult = {
'순요율' : 0.102
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1232});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09913"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1233});
     __hpasRuleResult = {
'순요율' : 0.176
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1234});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1235});
     __hpasRuleResult = {
'순요율' : 0.051
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09960"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1236});
     __hpasRuleResult = {
'순요율' : 0.308
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09970"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1237});
     __hpasRuleResult = {
'순요율' : 0.205
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "09980"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1238});
     __hpasRuleResult = {
'순요율' : 0.14
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1239});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1240});
     __hpasRuleResult = {
'순요율' : 0.214
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1241});
     __hpasRuleResult = {
'순요율' : 0.311
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1242});
     __hpasRuleResult = {
'순요율' : 0.053
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10370"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1243});
     __hpasRuleResult = {
'순요율' : 0.402
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1244});
     __hpasRuleResult = {
'순요율' : 0.415
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "10410"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1245});
     __hpasRuleResult = {
'순요율' : 0.383
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1246});
     __hpasRuleResult = {
'순요율' : 0.372
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1247});
     __hpasRuleResult = {
'순요율' : 0.463
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1248});
     __hpasRuleResult = {
'순요율' : 0.489
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1249});
     __hpasRuleResult = {
'순요율' : 0.358
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1250});
     __hpasRuleResult = {
'순요율' : 0.446
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1251});
     __hpasRuleResult = {
'순요율' : 0.48
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1252});
     __hpasRuleResult = {
'순요율' : 0.378
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1253});
     __hpasRuleResult = {
'순요율' : 0.612
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1254});
     __hpasRuleResult = {
'순요율' : 0.373
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11160"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1255});
     __hpasRuleResult = {
'순요율' : 0.522
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11171"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1256});
     __hpasRuleResult = {
'순요율' : 0.33
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1257});
     __hpasRuleResult = {
'순요율' : 0.39
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11173"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1258});
     __hpasRuleResult = {
'순요율' : 0.418
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1259});
     __hpasRuleResult = {
'순요율' : 0.358
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1260});
     __hpasRuleResult = {
'순요율' : 0.425
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11183"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1261});
     __hpasRuleResult = {
'순요율' : 0.469
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1262});
     __hpasRuleResult = {
'순요율' : 0.32
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1263});
     __hpasRuleResult = {
'순요율' : 0.402
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11193"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1264});
     __hpasRuleResult = {
'순요율' : 0.39
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1265});
     __hpasRuleResult = {
'순요율' : 0.0008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1266});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1267});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1268});
     __hpasRuleResult = {
'순요율' : 0.0028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1269});
     __hpasRuleResult = {
'순요율' : 0.0081
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11240"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1270});
     __hpasRuleResult = {
'순요율' : 0.0059
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1271});
     __hpasRuleResult = {
'순요율' : 0.0023
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11300"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1272});
     __hpasRuleResult = {
'순요율' : 0.591
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11400"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1273});
     __hpasRuleResult = {
'순요율' : 0.12
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1274});
     __hpasRuleResult = {
'순요율' : 0.209
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11512"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1275});
     __hpasRuleResult = {
'순요율' : 0.261
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11513"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1276});
     __hpasRuleResult = {
'순요율' : 0.28
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11521"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1277});
     __hpasRuleResult = {
'순요율' : 0.125
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11522"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1278});
     __hpasRuleResult = {
'순요율' : 0.154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11523"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1279});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11530"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1280});
     __hpasRuleResult = {
'순요율' : 0.125
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11541"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1281});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11542"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1282});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11543"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1283});
     __hpasRuleResult = {
'순요율' : 0.172
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11551"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1284});
     __hpasRuleResult = {
'순요율' : 0.123
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11552"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1285});
     __hpasRuleResult = {
'순요율' : 0.154
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11553"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1286});
     __hpasRuleResult = {
'순요율' : 0.168
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11560"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1287});
     __hpasRuleResult = {
'순요율' : 0.121
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11571"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1288});
     __hpasRuleResult = {
'순요율' : 0.008
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11572"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1289});
     __hpasRuleResult = {
'순요율' : 0.015
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11573"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1290});
     __hpasRuleResult = {
'순요율' : 0.028
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11580"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1291});
     __hpasRuleResult = {
'순요율' : 0.029
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11591"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1292});
     __hpasRuleResult = {
'순요율' : 0.025
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11592"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1293});
     __hpasRuleResult = {
'순요율' : 0.041
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11593"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1294});
     __hpasRuleResult = {
'순요율' : 0.06
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11594"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1295});
     __hpasRuleResult = {
'순요율' : 0.09
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11595"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1296});
     __hpasRuleResult = {
'순요율' : 0.144
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11596"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1297});
     __hpasRuleResult = {
'순요율' : 0.149
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "11597"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1298});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1299});
     __hpasRuleResult = {
'순요율' : 0.424
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1300});
     __hpasRuleResult = {
'순요율' : 0.969
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12310"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1301});
     __hpasRuleResult = {
'순요율' : 0.105
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12320"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1302});
     __hpasRuleResult = {
'순요율' : 0.849
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12330"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1303});
     __hpasRuleResult = {
'순요율' : 0.11
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12421"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1304});
     __hpasRuleResult = {
'순요율' : 0.405
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12422"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1305});
     __hpasRuleResult = {
'순요율' : 0.34
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12423"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1306});
     __hpasRuleResult = {
'순요율' : 0.256
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12450"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1307});
     __hpasRuleResult = {
'순요율' : 0.328
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12510"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1308});
     __hpasRuleResult = {
'순요율' : 0.034
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12520"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1309});
     __hpasRuleResult = {
'순요율' : 0.069
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12531"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1310});
     __hpasRuleResult = {
'순요율' : 0.062
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12532"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1311});
     __hpasRuleResult = {
'순요율' : 0.052
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12540"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1312});
     __hpasRuleResult = {
'순요율' : 0.474
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12610"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1313});
     __hpasRuleResult = {
'순요율' : 0.273
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12620"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1314});
     __hpasRuleResult = {
'순요율' : 2.106
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12630"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1315});
     __hpasRuleResult = {
'순요율' : 0.596
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12640"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1316});
     __hpasRuleResult = {
'순요율' : 0.346
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12650"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1317});
     __hpasRuleResult = {
'순요율' : 0.466
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12710"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1318});
     __hpasRuleResult = {
'순요율' : 0.157
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12720"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1319});
     __hpasRuleResult = {
'순요율' : 0.669
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12730"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1320});
     __hpasRuleResult = {
'순요율' : 5.359
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12740"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1321});
     __hpasRuleResult = {
'순요율' : 0.436
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12750"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1322});
     __hpasRuleResult = {
'순요율' : 0.766
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12770"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1323});
     __hpasRuleResult = {
'순요율' : 0.117
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12780"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1324});
     __hpasRuleResult = {
'순요율' : 1.255
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12790"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1325});
     __hpasRuleResult = {
'순요율' : 0.371
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12850"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1326});
     __hpasRuleResult = {
'순요율' : 1.712
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12870"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1327});
     __hpasRuleResult = {
'순요율' : 0.295
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1328});
     __hpasRuleResult = {
'순요율' : 0.326
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12912"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1329});
     __hpasRuleResult = {
'순요율' : 1.914
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12920"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1330});
     __hpasRuleResult = {
'순요율' : 0.101
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12930"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1331});
     __hpasRuleResult = {
'순요율' : 0.139
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12940"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1332});
     __hpasRuleResult = {
'순요율' : 0.621
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12950"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1333});
     __hpasRuleResult = {
'순요율' : 0.144
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12971"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1334});
     __hpasRuleResult = {
'순요율' : 0.491
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "12972"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1335});
     __hpasRuleResult = {
'순요율' : 0.491
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "I1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1336});
     __hpasRuleResult = {
'순요율' : 0.129
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P1000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1337});
     __hpasRuleResult = {
'순요율' : 1.411
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P2200"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1338});
     __hpasRuleResult = {
'순요율' : 0.177
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P3000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1339});
     __hpasRuleResult = {
'순요율' : 0.476
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P4001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1340});
     __hpasRuleResult = {
'순요율' : 0.142
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P4002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1341});
     __hpasRuleResult = {
'순요율' : 0.206
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P4003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1342});
     __hpasRuleResult = {
'순요율' : 0.266
}
    canSheetNext = false
    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "P4004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_화재공장물건기본요율_001' , row:1343});
     __hpasRuleResult = {
'순요율' : 0.392
}
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};