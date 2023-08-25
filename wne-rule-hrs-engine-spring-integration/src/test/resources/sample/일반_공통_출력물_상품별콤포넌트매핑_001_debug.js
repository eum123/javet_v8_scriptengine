function(출력물ID,상품분류코드,보종코드,상품코드,약관언어구분코드,기준일자 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001',ruleName:'일반_공통_출력물_상품별콤포넌트매핑',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'출력물ID:'+JSON.stringify(출력물ID)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'출력물ID' , 'value':JSON.stringify(출력물ID) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품분류코드:'+JSON.stringify(상품분류코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품분류코드' , 'value':JSON.stringify(상품분류코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보종코드:'+JSON.stringify(보종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보종코드' , 'value':JSON.stringify(보종코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'약관언어구분코드:'+JSON.stringify(약관언어구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'약관언어구분코드' , 'value':JSON.stringify(약관언어구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기준일자:'+JSON.stringify(기준일자)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기준일자' , 'value':JSON.stringify(기준일자) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = [];


    // Compiler Version 1 , Created : 2023-08-18 17:18:35
    var canSheetNext = true
    if(canSheetNext) {

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:0});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:1});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:2});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:3});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:4});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:5});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:6});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:7});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:8});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:9});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:10});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:11});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:12});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:13});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:14});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:15});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:16});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:17});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:18});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:19});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:20});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:21});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:22});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:23});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:24});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:25});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:26});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:27});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:28});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:29});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:30});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:31});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:32});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:33});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:34});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:35});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:36});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:37});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:38});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:39});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:40});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:41});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:42});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:43});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:44});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:45});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:46});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:47});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:48});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:49});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:50});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:51});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:52});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:53});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:54});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:55});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:56});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:57});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:58});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000003"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:59});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:60});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:61});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:62});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:63});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:64});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:65});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:66});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:67});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:68});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:69});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:70});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:71});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:72});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:73});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:74});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:75});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:76});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:77});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:78});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00003001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:79});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00048001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:80});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:81});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:82});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:83});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:84});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:85});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:86});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:87});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000005"
})
    canSheetNext = false
    }

    if(true){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:88});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000006"
})
    canSheetNext = false
    }

    if(true){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:89});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000007"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00154001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:90});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:91});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:92});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00054001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:93});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:94});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:95});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:96});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:97});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:98});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:99});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:100});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:101});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:102});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:103});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:104});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:105});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:106});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:107});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:108});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:109});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000008"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:110});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:111});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:112});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:113});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:114});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:115});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:116});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:117});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:118});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:119});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:120});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:121});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:122});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:123});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:124});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:125});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00013002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:126});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00014001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:127});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:128});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:129});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:130});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:131});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:132});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:133});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:134});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:135});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:136});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016025"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:137});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:138});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:139});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:140});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:141});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:142});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:143});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:144});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:145});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:146});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:147});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:148});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:149});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:150});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:151});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:152});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:153});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:154});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:155});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:156});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023025"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:157});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:158});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:159});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:160});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023036"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:161});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:162});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:163});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:164});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:165});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:166});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:167});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:168});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:169});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:170});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:171});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:172});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:173});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:174});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:175});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:176});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:177});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:178});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:179});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00054001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:180});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:181});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:182});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:183});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:184});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00070001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:185});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00071001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:186});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00071002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:187});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00072001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:188});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00074002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:189});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00076002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:190});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00077001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:191});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00077002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:192});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00077003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:193});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00077004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:194});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00078001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:195});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:196});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00080001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:197});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00080002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:198});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00081001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:199});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00081002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:200});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00081003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:201});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00082001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:202});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00083001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:203});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00084001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:204});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00087001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:205});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00088001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:206});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00092001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:207});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:208});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:209});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:210});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:211});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:212});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00106001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:213});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00128001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:214});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00138001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:215});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00139001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:216});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00144001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:217});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00154001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:218});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00156001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:219});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00159001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:220});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000009"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00163001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:221});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000010"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:222});
     __hpasRuleResult.push({
'콤포넌트아이디' : "NTC0000011"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00003001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:223});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:224});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:225});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:226});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:227});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:228});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:229});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00048001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:230});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:231});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:232});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:233});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:234});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:235});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:236});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:237});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:238});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:239});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:240});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00114001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:241});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:242});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00115002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:243});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:244});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:245});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:246});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:247});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:248});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:249});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:250});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:251});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:252});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:253});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:254});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:255});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:256});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:257});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:258});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:259});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:260});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:261});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:262});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:263});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00004002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:264});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00005002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:265});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:266});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:267});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:268});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:269});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:270});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:271});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:272});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:273});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:274});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:275});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:276});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:277});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:278});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:279});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:280});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:281});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00054001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:282});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:283});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0002801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:284});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:285});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:286});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:287});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:288});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:289});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:290});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:291});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:292});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:293});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:294});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:295});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:296});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00098001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:297});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:298});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:299});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:300});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00030001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:301});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:302});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:303});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:304});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:305});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:306});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:307});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:308});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:309});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:310});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:311});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:312});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:313});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:314});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:315});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:316});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:317});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:318});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:319});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:320});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00031002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:321});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:322});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:323});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:324});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:325});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:326});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:327});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:328});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:329});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:330});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00034001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:331});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:332});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00018001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:333});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:334});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:335});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:336});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00050003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:337});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:338});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:339});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:340});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:341});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:342});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:343});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:344});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:345});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:346});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:347});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00035001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:348});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:349});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:350});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:351});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:352});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016036"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:353});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:354});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:355});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:356});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:357});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:358});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:359});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:360});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:361});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:362});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:363});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:364});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:365});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003901"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:366});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003911"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:367});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0003911"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:368});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00040001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:369});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00040001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:370});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00041001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:371});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00041001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:372});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00042001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:373});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00042001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:374});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00044001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:375});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00044001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:376});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00046001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:377});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00046001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:378});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:379});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:380});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:381});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:382});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:383});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:384});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:385});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:386});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:387});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00047001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:388});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00050001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00021001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:389});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00052001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:390});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:391});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:392});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:393});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:394});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:395});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:396});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:397});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:398});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:399});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:400});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:401});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:402});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:403});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:404});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:405});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00053001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:406});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:407});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016036"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:408});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00019001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:409});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:410});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:411});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:412});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:413});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:414});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:415});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:416});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:417});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:418});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:419});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:420});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:421});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:422});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:423});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:424});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:425});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:426});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:427});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:428});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:429});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:430});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:431});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005301"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:432});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:433});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:434});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:435});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:436});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:437});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0005311"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:438});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00056001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:439});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00058001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:440});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00058001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00017001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:441});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:442});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:443});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:444});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00051004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:445});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:446});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:447});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00145002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:448});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00068001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00018001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:449});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00071001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:450});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:451});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:452});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:453});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:454});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:455});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:456});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:457});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00164001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:458});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:459});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:460});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:461});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:462});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:463});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075002"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:464});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00148001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:465});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00148002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:466});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:467});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00075001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00020001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:468});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00076001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00020001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:469});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00077001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:470});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00079001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00022010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:471});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00079001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:472});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00086001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:473});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00086001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:474});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00086001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:475});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00086001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:476});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00086001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:477});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:478});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:479});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:480});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:481});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:482});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00025004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:483});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00026001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:484});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00026001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:485});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00027001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:486});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00027001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:487});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00028001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:488});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0009801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:489});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:490});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:491});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:492});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:493});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:494});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:495});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:496});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:497});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:498});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010011"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:499});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:500});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:501});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:502});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:503});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:504});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:505});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:506});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:507});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:508});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:509});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:510});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:511});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:512});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:513});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010321"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00014001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:514});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:515});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:516});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:517});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:518});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:519});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:520});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:521});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:522});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:523});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:524});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:525});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:526});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:527});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:528});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00054001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:529});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:530});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00055002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:531});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00154001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:532});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011021"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:533});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011401"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:534});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011401"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:535});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011401"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:536});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011401"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00066001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:537});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011411"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00074001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:538});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00116001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00109001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:539});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00116001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00074001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:540});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00117001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00109001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:541});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00117001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00071001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:542});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00127001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00071002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:543});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00127001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:544});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00127001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:545});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:546});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:547});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:548});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:549});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:550});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:551});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:552});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:553});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0014801"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:554});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00155001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:555});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0015701"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:556});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0015711"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00097001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:557});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00166001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:558});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00187001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:559});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0021101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:560});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0021101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:561});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00215001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00148001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:562});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00215001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:563});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:564});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00224001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:565});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00224001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:566});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00224001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00122001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:567});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00224001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:568});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00238001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:569});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00260001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:570});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0026101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00016035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:571});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0026101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:572});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0026101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00023032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:573});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00278001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00149001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:574});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0028501"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00149001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:575});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0028501"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00149001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:576});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0028511"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:577});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00303001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00052012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:578});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00303001"
})
    canSheetNext = false
    }

    if(((출력물ID == "FIRB501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:579});
     __hpasRuleResult.push({
'콤포넌트아이디' : "SO00002"
})
    canSheetNext = false
    }

    if(((출력물ID == "FIRB504"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:580});
     __hpasRuleResult.push({
'콤포넌트아이디' : "SO00002"
})
    canSheetNext = false
    }

    if(((출력물ID == "FIRB506"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:581});
     __hpasRuleResult.push({
'콤포넌트아이디' : "SO00002"
})
    canSheetNext = false
    }

    if(true){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:582});
     __hpasRuleResult.push({
'콤포넌트아이디' : "SO00001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00109001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:583});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00152001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00090001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:584});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00157001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:585});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:586});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:587});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:588});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00049001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:589});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0011201"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00012003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:590});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:591});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00011001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:592});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00010002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:593});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00014001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:594});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA0010101"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00131001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:595});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00245001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00131002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:596});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00245001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00131002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:597});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00245001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:598});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:599});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {

    if(((상품코드 == "FA00095003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:600});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:601});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:602});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:603});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:604});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00095009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:605});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00108001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:606});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00108002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:607});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00222001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00163001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:608});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00308001"
})
    canSheetNext = false
    }

    if(((상품코드 == "FA00077004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_상품별콤포넌트매핑_001' , row:609});
     __hpasRuleResult.push({
'콤포넌트아이디' : "RFA00136001"
})
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};