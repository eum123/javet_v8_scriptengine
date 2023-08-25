function(상품코드,상위위험유형코드,위험유형코드,적용영역,상태코드,기준일자 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001',ruleName:'일반_공통_화면_위험유형별콤포넌트매핑',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상위위험유형코드:'+JSON.stringify(상위위험유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상위위험유형코드' , 'value':JSON.stringify(상위위험유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'위험유형코드:'+JSON.stringify(위험유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'위험유형코드' , 'value':JSON.stringify(위험유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'적용영역:'+JSON.stringify(적용영역)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'적용영역' , 'value':JSON.stringify(적용영역) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상태코드:'+JSON.stringify(상태코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상태코드' , 'value':JSON.stringify(상태코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기준일자:'+JSON.stringify(기준일자)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기준일자' , 'value':JSON.stringify(기준일자) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = [];


    // Compiler Version 1 , Created : 2023-08-18 17:35:44
    var canSheetNext = true
    if(canSheetNext) {

    if(((위험유형코드 == "RFA00027"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:0});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "C000009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00027"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:1});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000010"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00001"))
    && ((위험유형코드 == "RFA00027"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:2});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "C000013"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00012"))
    && ((위험유형코드 == "RFA00028"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:3});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00012"))
    && ((위험유형코드 == "RFA00028"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:4});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00012"))
    && ((위험유형코드 == "RFA00028"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:5});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00011"))
    && ((위험유형코드 == "RFA00028"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:6});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "C000004"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00011"))
    && ((위험유형코드 == "RFA00028"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:7});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "C000005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00030"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:8});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00030"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:9});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00030"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:10});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00030"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:11});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00031"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:12});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00031"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:13});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00007"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00031"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:14});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00031"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:15});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00008"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00031"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:16});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00035"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:17});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00035"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:18});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00035"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:19});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00035"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:20});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00035"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:21});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00031"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00039"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:22});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00041"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00039"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:23});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00042"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00039"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:24});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00043"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00039"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:25});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00044"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00048"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:26});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00045"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00048"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:27});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00046"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00048"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:28});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00047"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00048"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:29});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00048"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:30});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00010"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:31});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00011"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:32});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:33});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00012"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:34});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00032"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00053"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:35});
     __hpasRuleResult.push({
'콤포넌트순번' : 7 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00188"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:36});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00010"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00188"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:37});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00011"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00188"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:38});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00012"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00188"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:39});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00032"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00188"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:40});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00055"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:41});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00055"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:42});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00055"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:43});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00055"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:44});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00056"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:45});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00056"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:46});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00056"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:47});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00056"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:48});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00057"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:49});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00057"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:50});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00057"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:51});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00057"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:52});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00058"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:53});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00058"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:54});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00058"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:55});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00040"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00058"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:56});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00058"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:57});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00059"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:58});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00059"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:59});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00059"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:60});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00059"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:61});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00079"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:62});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00010"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00079"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:63});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00011"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00079"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:64});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00012"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00079"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:65});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00079"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:66});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00086"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:67});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00086"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:68});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00034"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00086"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:69});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00035"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00086"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:70});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00086"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:71});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00087"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:72});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00087"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:73});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00087"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:74});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00087"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:75});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00088"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:76});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00088"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:77});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00088"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:78});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00088"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:79});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00090"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:80});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00090"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:81});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00090"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:82});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00090"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:83});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00091"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:84});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00091"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:85});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00091"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:86});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00091"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:87});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00092"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:88});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00092"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:89});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00092"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:90});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00092"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:91});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00093"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:92});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00093"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:93});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00093"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:94});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00093"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:95});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00094"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:96});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00037"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00094"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:97});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00094"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:98});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00094"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:99});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00100"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:100});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00100"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:101});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00100"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:102});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00100"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:103});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00101"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:104});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00101"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:105});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00101"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:106});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00101"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:107});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00101"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:108});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00102"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:109});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00102"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:110});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00102"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:111});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00102"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:112});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00103"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:113});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00103"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:114});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00103"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:115});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00103"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:116});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:117});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:118});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:119});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:120});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:121});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00104"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:122});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00107"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:123});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00107"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:124});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00107"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:125});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00107"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:126});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00108"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:127});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00108"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:128});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00108"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:129});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00108"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:130});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00110"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:131});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "C000001"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00001"))
    && ((위험유형코드 == "RFA00110"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:132});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00110"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:133});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00112"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:134});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "MVPR001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00112"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:135});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "MVPR002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00112"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:136});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "MVPR003"
})
    canSheetNext = false
    }

    if(((상위위험유형코드 == "RFA00001"))
    && ((위험유형코드 == "RFA00112"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:137});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "C000013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00114"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:138});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00114"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:139});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00114"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:140});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00114"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:141});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00127"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:142});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00127"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:143});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00127"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:144});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00127"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:145});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00127"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:146});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00128"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:147});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00128"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:148});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00128"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:149});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00128"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:150});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00129"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:151});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00129"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:152});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00129"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:153});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00129"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:154});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:155});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:156});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:157});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:158});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:159});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00130"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:160});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:161});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:162});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:163});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:164});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:165});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00131"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:166});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00140"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:167});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00140"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:168});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00140"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:169});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00140"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:170});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00140"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:171});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:172});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:173});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:174});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:175});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:176});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00141"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:177});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00148"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:178});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00006"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00148"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:179});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00148"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:180});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00148"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:181});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00150"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:182});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00150"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:183});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00150"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:184});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00150"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:185});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00159"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:186});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00036"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00159"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:187});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00159"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:188});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00159"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:189});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00160"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:190});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00160"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:191});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00160"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:192});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00160"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:193});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00160"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:194});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:195});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:196});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:197});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:198});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:199});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00168"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:200});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:201});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:202});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:203});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:204});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:205});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00170"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:206});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00177"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:207});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00036"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00177"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:208});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00177"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:209});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00177"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:210});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00180"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:211});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00036"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00180"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:212});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00180"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:213});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00180"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:214});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00189"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:215});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00189"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:216});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00189"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:217});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00189"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:218});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:219});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:220});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:221});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:222});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:223});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00204"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:224});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:225});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:226});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:227});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:228});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:229});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00205"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:230});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00227"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:231});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00227"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:232});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00034"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00227"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:233});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00035"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00227"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:234});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00227"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:235});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00231"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:236});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00231"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:237});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00231"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:238});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00231"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:239});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00231"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:240});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00232"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:241});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00232"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:242});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00232"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:243});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00232"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:244});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00232"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:245});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00238"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:246});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00238"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:247});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00238"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:248});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00040"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00238"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:249});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00238"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:250});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00240"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:251});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00240"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:252});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00240"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:253});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00240"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:254});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:255});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:256});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:257});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:258});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:259});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00248"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:260});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:261});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00021"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:262});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00022"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:263});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:264});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:265});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00019"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00251"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:266});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00020"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00259"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:267});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00259"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:268});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00259"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:269});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00004"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00259"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:270});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00261"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:271});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00023"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00261"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:272});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00261"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:273});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00261"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:274});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00026"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00261"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:275});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00027"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00262"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:276});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "C000011"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00262"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:277});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "C000012"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00267"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:278});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00267"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:279});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00267"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:280});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00015"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00267"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:281});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00267"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:282});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00017"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:283});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:284});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:285});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00015"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:286});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:287});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00017"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00268"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:288});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00018"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:289});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:290});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:291});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00015"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:292});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00016"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:293});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00017"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00269"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:294});
     __hpasRuleResult.push({
'콤포넌트순번' : 6 , '콤포넌트아이디' : "LB00018"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00272"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:295});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00272"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:296});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00037"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00272"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:297});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00038"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00272"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:298});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00039"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00289"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:299});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {

    if(((위험유형코드 == "RFA00289"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:300});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00034"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00289"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:301});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00035"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00289"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:302});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00289"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:303});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00290"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:304});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00290"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:305});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00034"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00290"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:306});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00035"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00290"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:307});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00290"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:308});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00291"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:309});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00291"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:310});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00034"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00291"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:311});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00035"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00291"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:312});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00291"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:313});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00292"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:314});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00292"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:315});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00292"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:316});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00292"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:317});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00293"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:318});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00293"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:319});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00293"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:320});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00293"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:321});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00294"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:322});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00033"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00294"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:323});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00294"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:324});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00294"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:325});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00297"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:326});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00297"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:327});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00037"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00297"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:328});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00038"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00297"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:329});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "LB00039"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00301"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:330});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "LB00029"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00301"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:331});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "LB00024"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00301"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:332});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "LB00025"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00134"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:333});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00134"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:334});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00011"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00134"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:335});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00012"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00134"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:336});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00135"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:337});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00135"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:338});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00136"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:339});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00136"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:340});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00135")||(위험유형코드 == "RFA00136"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:341});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00008"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00135")||(위험유형코드 == "RFA00136"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:342});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00009"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00135")||(위험유형코드 == "RFA00136"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:343});
     __hpasRuleResult.push({
'콤포넌트순번' : 5 , '콤포넌트아이디' : "GR00010"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00137"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:344});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00137"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:345});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00138"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:346});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00138"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:347});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00139"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:348});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00139"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:349});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00144"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:350});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00013"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00144"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:351});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00183"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:352});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "C000001"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00183"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:353});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "C000002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00183"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:354});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "C000003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00253"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:355});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00253"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:356});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00253"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:357});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00253"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:358});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00255"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:359});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00255"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:360});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00255"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:361});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00255"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:362});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00257"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:363});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "GR00014"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00257"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:364});
     __hpasRuleResult.push({
'콤포넌트순번' : 2 , '콤포넌트아이디' : "GR00002"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00257"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:365});
     __hpasRuleResult.push({
'콤포넌트순번' : 3 , '콤포넌트아이디' : "GR00003"
})
    canSheetNext = false
    }

    if(((위험유형코드 == "RFA00257"))
    && ((적용영역 == "목적물"))
    && ((기준일자 >= "2021-09-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:366});
     __hpasRuleResult.push({
'콤포넌트순번' : 4 , '콤포넌트아이디' : "GR00005"
})
    canSheetNext = false
    }

    if(((위험유형코드 == ""))
    && ((적용영역 == "출력물"))
    && ((기준일자 >= "1900-01-01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_위험유형별콤포넌트매핑_001' , row:367});
     __hpasRuleResult.push({
'콤포넌트순번' : 1 , '콤포넌트아이디' : "PRNOT001"
})
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};