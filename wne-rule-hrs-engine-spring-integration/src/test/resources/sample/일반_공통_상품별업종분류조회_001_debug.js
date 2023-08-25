function(상품코드,위험유형코드,목적물유형코드,목적물유형분류코드,물건구분코드,가입유형코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_상품별업종분류조회_001',ruleName:'일반_공통_상품별업종분류조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'위험유형코드:'+JSON.stringify(위험유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'위험유형코드' , 'value':JSON.stringify(위험유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'목적물유형코드:'+JSON.stringify(목적물유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'목적물유형코드' , 'value':JSON.stringify(목적물유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'목적물유형분류코드:'+JSON.stringify(목적물유형분류코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'목적물유형분류코드' , 'value':JSON.stringify(목적물유형분류코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'물건구분코드:'+JSON.stringify(물건구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'물건구분코드' , 'value':JSON.stringify(물건구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'가입유형코드:'+JSON.stringify(가입유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'가입유형코드' , 'value':JSON.stringify(가입유형코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:18:10
    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00003001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:0});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00003001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00003002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00003002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:3});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:4});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:5});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:6});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:7});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:8});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:9});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:10});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:11});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:12});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:13});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:14});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:15});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:16});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:17});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:18});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:19});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:20});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:21});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:22});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:23});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:24});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:25});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:26});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:27});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:28});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:29});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:30});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:31});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:32});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:33});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:34});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:35});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:36});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:37});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:38});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:39});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:40});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:41});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:42});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:43});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:44});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:45});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:46});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:47});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:48});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:49});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:50});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:51});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:52});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:53});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:54});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:55});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:56});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:57});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:58});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:59});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:60});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:61});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:62});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:63});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:64});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:65});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:66});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:67});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:68});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:69});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:70});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:71});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:72});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10164"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:73});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:74});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:75});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:76});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:77});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:78});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:79});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:80});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:81});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:82});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:83});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:84});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:85});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:86});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:87});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:88});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:89});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:90});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:91});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:92});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:93});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:94});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:95});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:96});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:97});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:98});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:99});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:100});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:101});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:102});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:103});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:104});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:105});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:106});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004004'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:107});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:108});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:109});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:110});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:111});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:112});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:113});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:114});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:115});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:116});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:117});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:118});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:119});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:120});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:121});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:122});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:123});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:124});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:125});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:126});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:127});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:128});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:129});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:130});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:131});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:132});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:133});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:134});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:135});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:136});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:137});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:138});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:139});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:140});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:141});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:142});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:143});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:144});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:145});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:146});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:147});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:148});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:149});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:150});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:151});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:152});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:153});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:154});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:155});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:156});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:157});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:158});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:159});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:160});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:161});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:162});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:163});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:164});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:165});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:166});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:167});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:168});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:169});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:170});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:171});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:172});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:173});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:174});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10164"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:175});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:176});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:177});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:178});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:179});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:180});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:181});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:182});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:183});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:184});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:185});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:186});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:187});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:188});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:189});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:190});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:191});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:192});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:193});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:194});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:195});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:196});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:197});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:198});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:199});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:200});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:201});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:202});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:203});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:204});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:205});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:206});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:207});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005004'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:208});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00008001'))
    && ((위험유형코드 == "RFA00029"))
    && ((목적물유형코드 == "MFA10038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:209});
     __hpasRuleResult = {
'업종분류코드' : "707"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010001'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:210});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010001'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:211});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010001'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:212});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010002'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:213});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010002'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:214});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010002'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:215});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010013'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:216});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010013'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:217});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010013'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:218});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010011'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:219});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010011'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:220});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010011'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:221});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010003'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:222});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010003'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:223});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010003'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:224});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010014'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:225});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010014'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:226});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010014'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:227});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010012'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:228});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010012'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:229});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010012'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:230});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010004'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:231});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010004'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:232});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010004'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:233});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010005'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:234});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010005'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:235});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010005'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:236});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010006'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:237});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010006'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:238});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010006'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:239});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011001'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:240});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011001'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:241});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011001'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:242});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011001'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:243});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011002'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:244});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011002'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:245});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011002'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:246});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011002'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:247});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:248});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:249});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:250});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:251});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011003'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:252});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011003'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:253});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011003'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:254});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011003'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:255});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:256});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012001'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:257});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:258});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:259});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:260});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:261});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012002'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:262});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013001'))
    && ((위험유형코드 == "RFA00104"))
    && ((목적물유형코드 == "MFA10111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:263});
     __hpasRuleResult = {
'업종분류코드' : "607"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013001'))
    && ((위험유형코드 == "RFA00105"))
    && ((목적물유형코드 == "MFA10112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:264});
     __hpasRuleResult = {
'업종분류코드' : "608"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013001'))
    && ((위험유형코드 == "RFA00106"))
    && ((목적물유형코드 == "MFA10113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:265});
     __hpasRuleResult = {
'업종분류코드' : "609"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013002'))
    && ((위험유형코드 == "RFA00104"))
    && ((목적물유형코드 == "MFA10111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:266});
     __hpasRuleResult = {
'업종분류코드' : "607"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013002'))
    && ((위험유형코드 == "RFA00105"))
    && ((목적물유형코드 == "MFA10112"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:267});
     __hpasRuleResult = {
'업종분류코드' : "608"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00013002'))
    && ((위험유형코드 == "RFA00106"))
    && ((목적물유형코드 == "MFA10113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:268});
     __hpasRuleResult = {
'업종분류코드' : "609"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00014001'))
    && ((위험유형코드 == "RFA00107"))
    && ((목적물유형코드 == "MFA10114"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:269});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00014001'))
    && ((위험유형코드 == "RFA00108"))
    && ((목적물유형코드 == "MFA10115"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:270});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:271});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:272});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:273});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:274});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:275});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:276});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:277});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:278});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:279});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:280});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00036"))
    && ((목적물유형코드 == "MFA10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:281});
     __hpasRuleResult = {
'업종분류코드' : "205"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00037"))
    && ((목적물유형코드 == "MFA10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:282});
     __hpasRuleResult = {
'업종분류코드' : "205"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:283});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:284});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:285});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066003'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:286});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00040"))
    && ((목적물유형코드 == "MFA10047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:287});
     __hpasRuleResult = {
'업종분류코드' : "208"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00041"))
    && ((목적물유형코드 == "MFA10048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:288});
     __hpasRuleResult = {
'업종분류코드' : "209"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00042"))
    && ((목적물유형코드 == "MFA10049"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:289});
     __hpasRuleResult = {
'업종분류코드' : "210"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00043"))
    && ((목적물유형코드 == "MFA10050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:290});
     __hpasRuleResult = {
'업종분류코드' : "210"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00044"))
    && ((목적물유형코드 == "MFA10051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:291});
     __hpasRuleResult = {
'업종분류코드' : "211"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00045"))
    && ((목적물유형코드 == "MFA10052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:292});
     __hpasRuleResult = {
'업종분류코드' : "211"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00046"))
    && ((목적물유형코드 == "MFA10053"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:293});
     __hpasRuleResult = {
'업종분류코드' : "212"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:294});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00048"))
    && ((목적물유형코드 == "MFA10055"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:295});
     __hpasRuleResult = {
'업종분류코드' : "213"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016002'))
    && ((위험유형코드 == "RFA00049"))
    && ((목적물유형코드 == "MFA10056"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:296});
     __hpasRuleResult = {
'업종분류코드' : "214"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016003'))
    && ((위험유형코드 == "RFA00050"))
    && ((목적물유형코드 == "MFA10057"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:297});
     __hpasRuleResult = {
'업종분류코드' : "215"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016004'))
    && ((위험유형코드 == "RFA00051"))
    && ((목적물유형코드 == "MFA10058"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:298});
     __hpasRuleResult = {
'업종분류코드' : "216"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016004'))
    && ((위험유형코드 == "RFA00052"))
    && ((목적물유형코드 == "MFA10059"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:299});
     __hpasRuleResult = {
'업종분류코드' : "217"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00016005'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:300});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016005'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:301});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016005'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:302});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016005'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:303});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016005'))
    && ((위험유형코드 == "RFA00150"))
    && ((목적물유형코드 == "MFA10156"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:304});
     __hpasRuleResult = {
'업종분류코드' : "268"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016006'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:305});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016006'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:306});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016006'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:307});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016006'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:308});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016006'))
    && ((위험유형코드 == "RFA00150"))
    && ((목적물유형코드 == "MFA10156"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:309});
     __hpasRuleResult = {
'업종분류코드' : "268"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:310});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:311});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:312});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:313});
     __hpasRuleResult = {
'업종분류코드' : "220"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:314});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00150"))
    && ((목적물유형코드 == "MFA10156"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:315});
     __hpasRuleResult = {
'업종분류코드' : "268"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00054"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:316});
     __hpasRuleResult = {
'업종분류코드' : "220"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016007'))
    && ((위험유형코드 == "RFA00055"))
    && ((목적물유형코드 == "MFA10062"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:317});
     __hpasRuleResult = {
'업종분류코드' : "221"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016008'))
    && ((위험유형코드 == "RFA00056"))
    && ((목적물유형코드 == "MFA10063"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:318});
     __hpasRuleResult = {
'업종분류코드' : "222"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016008'))
    && ((위험유형코드 == "RFA00057"))
    && ((목적물유형코드 == "MFA10064"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:319});
     __hpasRuleResult = {
'업종분류코드' : "222"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016009'))
    && ((위험유형코드 == "RFA00058"))
    && ((목적물유형코드 == "MFA10065"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:320});
     __hpasRuleResult = {
'업종분류코드' : "223"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016009'))
    && ((위험유형코드 == "RFA00238"))
    && ((목적물유형코드 == "MFA10065"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:321});
     __hpasRuleResult = {
'업종분류코드' : "223"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016010'))
    && ((위험유형코드 == "RFA00058"))
    && ((목적물유형코드 == "MFA10065"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:322});
     __hpasRuleResult = {
'업종분류코드' : "223"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016011'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:323});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016011'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:324});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016011'))
    && ((위험유형코드 == "RFA00059"))
    && ((목적물유형코드 == "MFA10066"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:325});
     __hpasRuleResult = {
'업종분류코드' : "224"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016012'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:326});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:327});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:328});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:329});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:330});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:331});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:332});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:333});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:334});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:335});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:336});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:337});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:338});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:339});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:340});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:341});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:342});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:343});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:344});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:345});
     __hpasRuleResult = {
'업종분류코드' : "237"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:346});
     __hpasRuleResult = {
'업종분류코드' : "238"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:347});
     __hpasRuleResult = {
'업종분류코드' : "239"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00072"))
    && ((목적물유형코드 == "MFA10079"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:348});
     __hpasRuleResult = {
'업종분류코드' : "249"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00073"))
    && ((목적물유형코드 == "MFA10080"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:349});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((목적물유형코드 == "MFA10081"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:350});
     __hpasRuleResult = {
'업종분류코드' : "250"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019002'))
    && ((위험유형코드 == "RFA00075"))
    && ((목적물유형코드 == "MFA10082"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:351});
     __hpasRuleResult = {
'업종분류코드' : "251"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00076"))
    && ((목적물유형코드 == "MFA10083"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:352});
     __hpasRuleResult = {
'업종분류코드' : "252"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00077"))
    && ((목적물유형코드 == "MFA10084"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:353});
     __hpasRuleResult = {
'업종분류코드' : "253"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021001'))
    && ((위험유형코드 == "RFA00051"))
    && ((목적물유형코드 == "MFA10058"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:354});
     __hpasRuleResult = {
'업종분류코드' : "216"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021001'))
    && ((위험유형코드 == "RFA00052"))
    && ((목적물유형코드 == "MFA10059"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:355});
     __hpasRuleResult = {
'업종분류코드' : "217"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021001'))
    && ((위험유형코드 == "RFA00078"))
    && ((목적물유형코드 == "MFA10085"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:356});
     __hpasRuleResult = {
'업종분류코드' : "218"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021002'))
    && ((위험유형코드 == "RFA00051"))
    && ((목적물유형코드 == "MFA10058"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:357});
     __hpasRuleResult = {
'업종분류코드' : "216"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021002'))
    && ((위험유형코드 == "RFA00052"))
    && ((목적물유형코드 == "MFA10059"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:358});
     __hpasRuleResult = {
'업종분류코드' : "217"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00021002'))
    && ((위험유형코드 == "RFA00078"))
    && ((목적물유형코드 == "MFA10085"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:359});
     __hpasRuleResult = {
'업종분류코드' : "218"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:360});
     __hpasRuleResult = {
'업종분류코드' : "708"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:361});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022011'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:362});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022011'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:363});
     __hpasRuleResult = {
'업종분류코드' : "708"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022002'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:364});
     __hpasRuleResult = {
'업종분류코드' : "708"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022002'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:365});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:366});
     __hpasRuleResult = {
'업종분류코드' : "708"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:367});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022004'))
    && ((위험유형코드 == "RFA00079"))
    && ((목적물유형코드 == "MFA10086"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:368});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022005'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:369});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022006'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:370});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:371});
     __hpasRuleResult = {
'업종분류코드' : "255"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:372});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:373});
     __hpasRuleResult = {
'업종분류코드' : "253"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00080"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:374});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00162"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:375});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00081"))
    && ((목적물유형코드 == "MFA10088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:376});
     __hpasRuleResult = {
'업종분류코드' : "256"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:377});
     __hpasRuleResult = {
'업종분류코드' : "257"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00151"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:378});
     __hpasRuleResult = {
'업종분류코드' : "253"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:379});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00081"))
    && ((목적물유형코드 == "MFA10088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:380});
     __hpasRuleResult = {
'업종분류코드' : "256"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00082"))
    && ((목적물유형코드 == "MFA10089"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:381});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023002'))
    && ((위험유형코드 == "RFA00083"))
    && ((목적물유형코드 == "MFA10090"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:382});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023003'))
    && ((위험유형코드 == "RFA00084"))
    && ((목적물유형코드 == "MFA10091"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:383});
     __hpasRuleResult = {
'업종분류코드' : "258"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023004'))
    && ((위험유형코드 == "RFA00085"))
    && ((목적물유형코드 == "MFA10092"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:384});
     __hpasRuleResult = {
'업종분류코드' : "259"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023005'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:385});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023006'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:386});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023007'))
    && ((위험유형코드 == "RFA00087"))
    && ((목적물유형코드 == "MFA10094"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:387});
     __hpasRuleResult = {
'업종분류코드' : "261"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023008'))
    && ((위험유형코드 == "RFA00055"))
    && ((목적물유형코드 == "MFA10062"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:388});
     __hpasRuleResult = {
'업종분류코드' : "221"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023009'))
    && ((위험유형코드 == "RFA00088"))
    && ((목적물유형코드 == "MFA10095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:389});
     __hpasRuleResult = {
'업종분류코드' : "262"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023010'))
    && ((위험유형코드 == "RFA00089"))
    && ((목적물유형코드 == "MFA10096"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:390});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023011'))
    && ((위험유형코드 == "RFA00090"))
    && ((목적물유형코드 == "MFA10097"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:391});
     __hpasRuleResult = {
'업종분류코드' : "264"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023012'))
    && ((위험유형코드 == "RFA00091"))
    && ((목적물유형코드 == "MFA10098"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:392});
     __hpasRuleResult = {
'업종분류코드' : "264"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023013'))
    && ((위험유형코드 == "RFA00092"))
    && ((목적물유형코드 == "MFA10099"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:393});
     __hpasRuleResult = {
'업종분류코드' : "265"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023014'))
    && ((위험유형코드 == "RFA00093"))
    && ((목적물유형코드 == "MFA10100"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:394});
     __hpasRuleResult = {
'업종분류코드' : "266"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023015'))
    && ((위험유형코드 == "RFA00094"))
    && ((목적물유형코드 == "MFA10101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:395});
     __hpasRuleResult = {
'업종분류코드' : "267"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00025001'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:396});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00025004'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:397});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00025002'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:398});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00026001'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:399});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00129001'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:400});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00027001'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:401});
     __hpasRuleResult = {
'업종분류코드' : "302"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00028001'))
    && ((위험유형코드 == "RFA00099"))
    && ((목적물유형코드 == "MFA10106"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:402});
     __hpasRuleResult = {
'업종분류코드' : "303"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:403});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:404});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:405});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:406});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:407});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:408});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:409});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:410});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:411});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:412});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:413});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:414});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:415});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:416});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:417});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:418});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:419});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:420});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:421});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:422});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:423});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:424});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:425});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:426});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:427});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:428});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:429});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:430});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:431});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:432});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:433});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:434});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:435});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:436});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((목적물유형코드 == "MFA10118"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:437});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:438});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:439});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:440});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:441});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:442});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:443});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:444});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:445});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:446});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:447});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:448});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:449});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:450});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:451});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:452});
     __hpasRuleResult = {
'업종분류코드' : "405"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:453});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:454});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:455});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:456});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:457});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:458});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:459});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:460});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:461});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:462});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:463});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:464});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:465});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:466});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:467});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:468});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:469});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:470});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:471});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00058001'))
    && ((위험유형코드 == "RFA00111"))
    && ((목적물유형코드 == "MFA10118"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:472});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:473});
     __hpasRuleResult = {
'업종분류코드' : "406"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:474});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:475});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:476});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:477});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:478});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:479});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:480});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:481});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:482});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:483});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:484});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:485});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:486});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:487});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:488});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:489});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:490});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:491});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:492});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:493});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:494});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:495});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:496});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:497});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:498});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:499});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:500});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:501});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:502});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:503});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:504});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:505});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:506});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:507});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:508});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:509});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00061001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:510});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:511});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:512});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:513});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:514});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:515});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:516});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:517});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:518});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:519});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:520});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:521});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:522});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:523});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:524});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:525});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:526});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:527});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:528});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:529});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:530});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:531});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:532});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:533});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:534});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:535});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:536});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:537});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:538});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:539});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:540});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:541});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:542});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:543});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:544});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:545});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:546});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00062001'))
    && ((위험유형코드 == "RFA00113"))
    && ((목적물유형코드 == "MFA10119"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:547});
     __hpasRuleResult = {
'업종분류코드' : "407"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:548});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050001'))
    && ((위험유형코드 == "RFA00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:549});
     __hpasRuleResult = {
'업종분류코드' : "401"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:550});
     __hpasRuleResult = {
'업종분류코드' : "402"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:551});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00063001'))
    && ((위험유형코드 == "RFA00110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:552});
     __hpasRuleResult = {
'업종분류코드' : "403"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00064001'))
    && ((위험유형코드 == "RFA00110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:553});
     __hpasRuleResult = {
'업종분류코드' : "404"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00065001'))
    && ((위험유형코드 == "RFA00110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:554});
     __hpasRuleResult = {
'업종분류코드' : "404"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:555});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:556});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:557});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:558});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:559});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:560});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:561});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:562});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:563});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:564});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:565});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:566});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:567});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:568});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:569});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:570});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:571});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:572});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:573});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:574});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:575});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:576});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:577});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:578});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:579});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:580});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:581});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:582});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:583});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:584});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:585});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:586});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:587});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:588});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:589});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00048001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:590});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:591});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:592});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:593});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:594});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:595});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:596});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:597});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:598});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:599});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:600});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:601});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:602});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:603});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:604});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:605});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:606});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:607});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:608});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:609});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:610});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:611});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:612});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:613});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:614});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:615});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:616});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:617});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:618});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:619});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:620});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:621});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:622});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:623});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:624});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:625});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049002'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:626});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:627});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:628});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:629});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:630});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:631});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:632});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:633});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:634});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:635});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:636});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:637});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:638});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:639});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:640});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:641});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:642});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:643});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:644});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:645});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:646});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:647});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:648});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:649});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:650});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:651});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:652});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:653});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:654});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:655});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:656});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:657});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:658});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:659});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:660});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:661});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049003'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:662});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:663});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:664});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:665});
     __hpasRuleResult = {
'업종분류코드' : "408"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00115"))
    && ((목적물유형코드 == "MFA10121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:666});
     __hpasRuleResult = {
'업종분류코드' : "409"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:667});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:668});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:669});
     __hpasRuleResult = {
'업종분류코드' : "408"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00115"))
    && ((목적물유형코드 == "MFA10121"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:670});
     __hpasRuleResult = {
'업종분류코드' : "409"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066002'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:671});
     __hpasRuleResult = {
'업종분류코드' : "408"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066003'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10120"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:672});
     __hpasRuleResult = {
'업종분류코드' : "408"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:673});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:674});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:675});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:676});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:677});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:678});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:679});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:680});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:681});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:682});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:683});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:684});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:685});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:686});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:687});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:688});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:689});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:690});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:691});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:692});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:693});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:694});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:695});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:696});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:697});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:698});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:699});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:700});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:701});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:702});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:703});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:704});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:705});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:706});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:707});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:708});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:709});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:710});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:711});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:712});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:713});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:714});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:715});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:716});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:717});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:718});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:719});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:720});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:721});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:722});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:723});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:724});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:725});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:726});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:727});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:728});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:729});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:730});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:731});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:732});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:733});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:734});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:735});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:736});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:737});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:738});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:739});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:740});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:741});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:742});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:743});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:744});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:745});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:746});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:747});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:748});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:749});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:750});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:751});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:752});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:753});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:754});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:755});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:756});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:757});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:758});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:759});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:760});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:761});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:762});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:763});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:764});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:765});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:766});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:767});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:768});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:769});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:770});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:771});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:772});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:773});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:774});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:775});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:776});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:777});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:778});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:779});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:780});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:781});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:782});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:783});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:784});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:785});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:786});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:787});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:788});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:789});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:790});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:791});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:792});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:793});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:794});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:795});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:796});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:797});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:798});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:799});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:800});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:801});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:802});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:803});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:804});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:805});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:806});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:807});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:808});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:809});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:810});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:811});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:812});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:813});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:814});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:815});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:816});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:817});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:818});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:819});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:820});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:821});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:822});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:823});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:824});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:825});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:826});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:827});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:828});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:829});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:830});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:831});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:832});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:833});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:834});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:835});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:836});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:837});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:838});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:839});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:840});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:841});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:842});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:843});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:844});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:845});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:846});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:847});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:848});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:849});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:850});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:851});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:852});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:853});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:854});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00068001'))
    && ((위험유형코드 == "RFA00118"))
    && ((목적물유형코드 == "MFA10124"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:855});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00068001'))
    && ((위험유형코드 == "RFA00119"))
    && ((목적물유형코드 == "MFA10125"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:856});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00069001'))
    && ((위험유형코드 == "RFA00110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:857});
     __hpasRuleResult = {
'업종분류코드' : "410"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00069001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:858});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00069001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:859});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:860});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:861});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:862});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:863});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:864});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:865});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:866});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:867});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:868});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:869});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:870});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:871});
     __hpasRuleResult = {
'업종분류코드' : "716"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:872});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:873});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:874});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:875});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:876});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:877});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:878});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:879});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:880});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:881});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:882});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052023'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:883});
     __hpasRuleResult = {
'업종분류코드' : "716"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:884});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:885});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:886});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:887});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:888});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:889});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052002'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:890});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052004'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:891});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052004'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:892});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052004'))
    && ((위험유형코드 == "RFA00123"))
    && ((목적물유형코드 == "MFA10129"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:893});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052005'))
    && ((위험유형코드 == "RFA00124"))
    && ((목적물유형코드 == "MFA10130"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:894});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052005'))
    && ((위험유형코드 == "RFA00125"))
    && ((목적물유형코드 == "MFA10131"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:895});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:896});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:897});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:898});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:899});
     __hpasRuleResult = {
'업종분류코드' : "253"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:900});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:901});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:902});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:903});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:904});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052006'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:905});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:906});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:907});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:908});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:909});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:910});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:911});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:912});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:913});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:914});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:915});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052007'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:916});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:917});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:918});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:919});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:920});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:921});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:922});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:923});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:924});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:925});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:926});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052020'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:927});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00053001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:928});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00053001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:929});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00053001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:930});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00053001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:931});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00053001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:932});
     __hpasRuleResult = {
'업종분류코드' : "416"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00054001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:933});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00054001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:934});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00054001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:935});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00054001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:936});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00070001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:937});
     __hpasRuleResult = {
'업종분류코드' : "411"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00070001'))
    && ((위험유형코드 == "RFA00126"))
    && ((목적물유형코드 == "MFA10132"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:938});
     __hpasRuleResult = {
'업종분류코드' : "412"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071001'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:939});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071001'))
    && ((위험유형코드 == "RFA00087"))
    && ((목적물유형코드 == "MFA10094"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:940});
     __hpasRuleResult = {
'업종분류코드' : "261"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071001'))
    && ((위험유형코드 == "RFA00127"))
    && ((목적물유형코드 == "MFA10133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:941});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055001'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:942});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:943});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:944});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055001'))
    && ((위험유형코드 == "RFA00128"))
    && ((목적물유형코드 == "MFA10134"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:945});
     __hpasRuleResult = {
'업종분류코드' : "414"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055002'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:946});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055002'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:947});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00055002'))
    && ((위험유형코드 == "RFA00128"))
    && ((목적물유형코드 == "MFA10134"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:948});
     __hpasRuleResult = {
'업종분류코드' : "414"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00072001'))
    && ((위험유형코드 == "RFA00104"))
    && ((목적물유형코드 == "MFA10111"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:949});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00072001'))
    && ((위험유형코드 == "RFA00129"))
    && ((목적물유형코드 == "MFA10135"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:950});
     __hpasRuleResult = {
'업종분류코드' : "415"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00072001'))
    && ((위험유형코드 == "RFA00130"))
    && ((목적물유형코드 == "MFA10136"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:951});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00072001'))
    && ((위험유형코드 == "RFA00131"))
    && ((목적물유형코드 == "MFA10137"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:952});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00074001'))
    && ((위험유형코드 == "RFA00116"))
    && ((목적물유형코드 == "MFA10122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:953});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00074001'))
    && ((위험유형코드 == "RFA00117"))
    && ((목적물유형코드 == "MFA10123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:954});
     __hpasRuleResult = {
'업종분류코드' : "702"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00074001'))
    && ((위험유형코드 == "RFA00132"))
    && ((목적물유형코드 == "MFA10138"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:955});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00074002'))
    && ((위험유형코드 == "RFA00117"))
    && ((목적물유형코드 == "MFA10123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:956});
     __hpasRuleResult = {
'업종분류코드' : "702"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00075001'))
    && ((위험유형코드 == "RFA00133"))
    && ((목적물유형코드 == "MFA10139"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:957});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00076001'))
    && ((위험유형코드 == "RFA00134"))
    && ((목적물유형코드 == "MFA10140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:958});
     __hpasRuleResult = {
'업종분류코드' : "704"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00076002'))
    && ((위험유형코드 == "RFA00134"))
    && ((목적물유형코드 == "MFA10140"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:959});
     __hpasRuleResult = {
'업종분류코드' : "704"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077001'))
    && ((위험유형코드 == "RFA00135"))
    && ((목적물유형코드 == "MFA10141"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:960});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077001'))
    && ((위험유형코드 == "RFA00136"))
    && ((목적물유형코드 == "MFA10142"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:961});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077001'))
    && ((위험유형코드 == "RFA00137"))
    && ((목적물유형코드 == "MFA10143"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:962});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077001'))
    && ((위험유형코드 == "RFA00138"))
    && ((목적물유형코드 == "MFA10144"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:963});
     __hpasRuleResult = {
'업종분류코드' : "706"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077002'))
    && ((위험유형코드 == "RFA00139"))
    && ((목적물유형코드 == "MFA10145"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:964});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077003'))
    && ((위험유형코드 == "RFA00139"))
    && ((목적물유형코드 == "MFA10145"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:965});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00077004'))
    && ((위험유형코드 == "RFA00136"))
    && ((목적물유형코드 == "MFA10142"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:966});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00078001'))
    && ((위험유형코드 == "RFA00137"))
    && ((목적물유형코드 == "MFA10143"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:967});
     __hpasRuleResult = {
'업종분류코드' : "705"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00079001'))
    && ((위험유형코드 == "RFA00127"))
    && ((목적물유형코드 == "MFA10133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:968});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00080001'))
    && ((위험유형코드 == "RFA00140"))
    && ((목적물유형코드 == "MFA10146"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:969});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081001'))
    && ((위험유형코드 == "RFA00141"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:970});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00082001'))
    && ((위험유형코드 == "RFA00142"))
    && ((목적물유형코드 == "MFA10148"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:971});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00083001'))
    && ((위험유형코드 == "RFA00143"))
    && ((목적물유형코드 == "MFA10149"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:972});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00084001'))
    && ((위험유형코드 == "RFA00144"))
    && ((목적물유형코드 == "MFA10150"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:973});
     __hpasRuleResult = {
'업종분류코드' : "706"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:974});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:975});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012001'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:976});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012001'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:977});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:978});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012002'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:979});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00067001'))
    && ((위험유형코드 == "RFA00152"))
    && ((목적물유형코드 == "MFA10000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:980});
     __hpasRuleResult = {
'업종분류코드' : "418"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016013'))
    && ((위험유형코드 == "RFA00154"))
    && ((목적물유형코드 == "MFA10165"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:981});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023016'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:982});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00157"))
    && ((목적물유형코드 == "MFA10166"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:983});
     __hpasRuleResult = {
'업종분류코드' : "420"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((목적물유형코드 == "MFA10167"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:984});
     __hpasRuleResult = {
'업종분류코드' : "270"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00312"))
    && ((목적물유형코드 == "MFA10275"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:985});
     __hpasRuleResult = {
'업종분류코드' : "742"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00156"))
    && ((목적물유형코드 == "MFA10168"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:986});
     __hpasRuleResult = {
'업종분류코드' : "270"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023017'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:987});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023018'))
    && ((위험유형코드 == "RFA00158"))
    && ((목적물유형코드 == "MFA10169"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:988});
     __hpasRuleResult = {
'업종분류코드' : "258"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023019'))
    && ((위험유형코드 == "RFA00159"))
    && ((목적물유형코드 == "MFA10170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:989});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023020'))
    && ((위험유형코드 == "RFA00158"))
    && ((목적물유형코드 == "MFA10169"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:990});
     __hpasRuleResult = {
'업종분류코드' : "258"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00092001'))
    && ((위험유형코드 == "RFA00160"))
    && ((목적물유형코드 == "MFA10133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:991});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00093001'))
    && ((위험유형코드 == "RFA00152"))
    && ((목적물유형코드 == "MFA10000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:992});
     __hpasRuleResult = {
'업종분류코드' : "418"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00093001'))
    && ((위험유형코드 == "RFA00116"))
    && ((목적물유형코드 == "MFA10122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:993});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00093001'))
    && ((위험유형코드 == "RFA00117"))
    && ((목적물유형코드 == "MFA10123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:994});
     __hpasRuleResult = {
'업종분류코드' : "702"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00093001'))
    && ((위험유형코드 == "RFA00132"))
    && ((목적물유형코드 == "MFA10138"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:995});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00094001'))
    && ((위험유형코드 == "RFA00080"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:996});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00094001'))
    && ((위험유형코드 == "RFA00162"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:997});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00094001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:998});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00094001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:999});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00094001'))
    && ((위험유형코드 == "RFA00163"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1000});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1001});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1002});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1003});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1004});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1005});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1006});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1007});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1008});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1009});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1010});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1011});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1012});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1013});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1014});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1015});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1016});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1017});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1018});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1019});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1020});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1021});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1022});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1023});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1024});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1025});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1026});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1027});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1028});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1029});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1030});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1031});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1032});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1033});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1034});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1035});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1036});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1037});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1038});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1039});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1040});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1041});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1042});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1043});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1044});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1045});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1046});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1047});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1048});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1049});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1050});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1051});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1052});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1053});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1054});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1055});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1056});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1057});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1058});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1059});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1060});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1061});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1062});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1063});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1064});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1065});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1066});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1067});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1068});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1069});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1070});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1071});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1072});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1073});
     __hpasRuleResult = {
'업종분류코드' : "421"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1074});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1075});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1076});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1077});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1078});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1079});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1080});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1081});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1082});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1083});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1084});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1085});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1086});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1087});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1088});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1089});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1090});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1091});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1092});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1093});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1094});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1095});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1096});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1097});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1098});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1099});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1100});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1101});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1102});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1103});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1104});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1105});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1106});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1107});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1108});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1109});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1110});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1111});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1112});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1113});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1114});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1115});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1116});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1117});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1118});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1119});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1120});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1121});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1122});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1123});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1124});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1125});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1126});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1127});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1128});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049004'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1129});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00166"))
    && ((목적물유형코드 == "MFA10172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1130});
     __hpasRuleResult = {
'업종분류코드' : "422"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00167"))
    && ((목적물유형코드 == "MFA10172"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1131});
     __hpasRuleResult = {
'업종분류코드' : "423"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00098001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1132});
     __hpasRuleResult = {
'업종분류코드' : "424"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052008'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1133});
     __hpasRuleResult = {
'업종분류코드' : "425"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052008'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1134});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052008'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1135});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052009'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1136});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052009'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1137});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052009'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1138});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052009'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1139});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012003'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10109"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1140});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012003'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10110"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1141});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00106001'))
    && ((위험유형코드 == "RFA00168"))
    && ((목적물유형코드 == "MFA10173"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1142});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00106001'))
    && ((위험유형코드 == "RFA00170"))
    && ((목적물유형코드 == "MFA10174"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1143});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00025003'))
    && ((위험유형코드 == "RFA00098"))
    && ((목적물유형코드 == "MFA10061"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1144});
     __hpasRuleResult = {
'업종분류코드' : "304"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00107001'))
    && ((위험유형코드 == "RFA00174"))
    && ((목적물유형코드 == "MFA10175"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1145});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00107002'))
    && ((위험유형코드 == "RFA00175"))
    && ((목적물유형코드 == "MFA10175"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1146});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00107003'))
    && ((위험유형코드 == "RFA00176"))
    && ((목적물유형코드 == "MFA10175"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1147});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023021'))
    && ((위험유형코드 == "RFA00177"))
    && ((목적물유형코드 == "MFA10177"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1148});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023022'))
    && ((위험유형코드 == "RFA00180"))
    && ((목적물유형코드 == "MFA10178"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1149});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00109001'))
    && ((위험유형코드 == "RFA00152"))
    && ((목적물유형코드 == "MFA10000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1150});
     __hpasRuleResult = {
'업종분류코드' : "418"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00109001'))
    && ((위험유형코드 == "RFA00116"))
    && ((목적물유형코드 == "MFA10122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1151});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00109001'))
    && ((위험유형코드 == "RFA00117"))
    && ((목적물유형코드 == "MFA10123"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1152});
     __hpasRuleResult = {
'업종분류코드' : "702"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023010'))
    && ((위험유형코드 == "RFA00181"))
    && ((목적물유형코드 == "MFA10096"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1153});
     __hpasRuleResult = {
'업종분류코드' : "426"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023010'))
    && ((위험유형코드 == "RFA00226"))
    && ((목적물유형코드 == "MFA10096"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1154});
     __hpasRuleResult = {
'업종분류코드' : "277"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023010'))
    && ((위험유형코드 == "RFA00307"))
    && ((목적물유형코드 == "MFA10096"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1155});
     __hpasRuleResult = {
'업종분류코드' : "737"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1156});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1157});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1158});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1159});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00141"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1160});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00054001'))
    && ((위험유형코드 == "RFA00183"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1161});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00113001'))
    && ((위험유형코드 == "RFA00186"))
    && ((목적물유형코드 == "MFA10129"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1162});
     __hpasRuleResult = {
'업종분류코드' : "709"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1163});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1164});
     __hpasRuleResult = {
'업종분류코드' : "401"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1165});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1166});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1167});
     __hpasRuleResult = {
'업종분류코드' : "271"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1168});
     __hpasRuleResult = {
'업종분류코드' : "128"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1169});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1170});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1171});
     __hpasRuleResult = {
'업종분류코드' : "128"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00110001'))
    && ((위험유형코드 == "RFA00187"))
    && ((목적물유형코드 == "MFA10056"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1172});
     __hpasRuleResult = {
'업종분류코드' : "272"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022007'))
    && ((위험유형코드 == "RFA00079"))
    && ((목적물유형코드 == "MFA10086"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1173});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022008'))
    && ((위험유형코드 == "RFA00188"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1174});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022012'))
    && ((위험유형코드 == "RFA00188"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1175});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016014'))
    && ((위험유형코드 == "RFA00189"))
    && ((목적물유형코드 == "MFA10066"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1176});
     __hpasRuleResult = {
'업종분류코드' : "224"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023023'))
    && ((위험유형코드 == "RFA00190"))
    && ((목적물유형코드 == "MFA10179"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1177});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00141"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1178});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00191"))
    && ((목적물유형코드 == "MFA10180"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1179});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00192"))
    && ((목적물유형코드 == "MFA10181"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1180});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00197"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1181});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00198"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1182});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00199"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1183});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00219"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1184});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00220"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1185});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00221"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1186});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1187});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1188});
     __hpasRuleResult = {
'업종분류코드' : "401"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1189});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1190});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1191});
     __hpasRuleResult = {
'업종분류코드' : "271"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00115001'))
    && ((위험유형코드 == "RFA00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1192});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1193});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1194});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1195});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1196});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1197});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016015'))
    && ((위험유형코드 == "RFA00193"))
    && ((목적물유형코드 == "MFA10058"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1198});
     __hpasRuleResult = {
'업종분류코드' : "222"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00119001'))
    && ((위험유형코드 == "RFA00200"))
    && ((목적물유형코드 == "MFA10182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1199});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1200});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1201});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1202});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1203});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1204});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1205});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1206});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1207});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1208});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1209});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1210});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1211});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1212});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1213});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1214});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1215});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1216});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1217});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1218});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1219});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1220});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1221});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1222});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1223});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1224});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1225});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1226});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1227});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1228});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1229});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1230});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1231});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1232});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1233});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1234});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081003'))
    && ((위험유형코드 == "RFA00202"))
    && ((목적물유형코드 == "MFA10187"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1235});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081003'))
    && ((위험유형코드 == "RFA00203"))
    && ((목적물유형코드 == "MFA10187"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1236});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00113002'))
    && ((위험유형코드 == "RFA00186"))
    && ((목적물유형코드 == "MFA10129"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1237});
     __hpasRuleResult = {
'업종분류코드' : "709"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095002'))
    && ((위험유형코드 == "RFA00204"))
    && ((목적물유형코드 == "MFA10188"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1238});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095003'))
    && ((위험유형코드 == "RFA00205"))
    && ((목적물유형코드 == "MFA10189"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1239});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066002'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1240});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00206"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1241});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00207"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1242});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00208"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1243});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023024'))
    && ((위험유형코드 == "RFA00209"))
    && ((목적물유형코드 == "MFA10190"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1244});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016016'))
    && ((위험유형코드 == "RFA00210"))
    && ((목적물유형코드 == "MFA10191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1245});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00213"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1246});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00081002'))
    && ((위험유형코드 == "RFA00214"))
    && ((목적물유형코드 == "MFA10147"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1247});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00211"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1248});
     __hpasRuleResult = {
'업종분류코드' : "273"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023001'))
    && ((위험유형코드 == "RFA00212"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1249});
     __hpasRuleResult = {
'업종분류코드' : "273"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016017'))
    && ((위험유형코드 == "RFA00215"))
    && ((목적물유형코드 == "MFA10192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1250});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016018'))
    && ((위험유형코드 == "RFA00216"))
    && ((목적물유형코드 == "MFA10193"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1251});
     __hpasRuleResult = {
'업종분류코드' : "213"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016018'))
    && ((위험유형코드 == "RFA00048"))
    && ((목적물유형코드 == "MFA10055"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1252});
     __hpasRuleResult = {
'업종분류코드' : "213"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00017001'))
    && ((위험유형코드 == "RFA00217"))
    && ((목적물유형코드 == "MFA10194"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1253});
     __hpasRuleResult = {
'업종분류코드' : "710"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00014001'))
    && ((위험유형코드 == "RFA00218"))
    && ((목적물유형코드 == "MFA10195"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1254});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1255});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095004'))
    && ((위험유형코드 == "RFA00222"))
    && ((목적물유형코드 == "MFA10195"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1256});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1257});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1258});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1259});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1260});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1261});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1262});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1263});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1264});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1265});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1266});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1267});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1268});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1269});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1270});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1271});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1272});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1273});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1274});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1275});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1276});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1277});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1278});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1279});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1280});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1281});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1282});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1283});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1284});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1285});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1286});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1287});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1288});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1289});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1290});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1291});
     __hpasRuleResult = {
'업종분류코드' : "428"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1292});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00122001')||(상품코드 == 'FA00122002'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1293});
     __hpasRuleResult = {
'업종분류코드' : "427"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016019'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1294});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016019'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1295});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1296});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004001'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1297});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1298});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1299});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1300});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00098001'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1301});
     __hpasRuleResult = {
'업종분류코드' : "275"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1302});
     __hpasRuleResult = {
'업종분류코드' : "275"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1303});
     __hpasRuleResult = {
'업종분류코드' : "424"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019003'))
    && ((위험유형코드 == "RFA00225"))
    && ((목적물유형코드 == "MFA10198"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1304});
     __hpasRuleResult = {
'업종분류코드' : "251"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023025'))
    && ((위험유형코드 == "RFA00227"))
    && ((목적물유형코드 == "MFA10199"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1305});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020002'))
    && ((위험유형코드 == "RFA00228"))
    && ((목적물유형코드 == "MFA10200"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1306});
     __hpasRuleResult = {
'업종분류코드' : "278"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1307});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1308});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1309});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1310});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1311});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1312});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1313});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1314});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1315});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1316});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1317});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1318});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1319});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1320});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1321});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1322});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1323});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1324});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1325});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1326});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1327});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1328});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1329});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1330});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1331});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1332});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1333});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1334});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1335});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1336});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1337});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1338});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1339});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1340});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1341});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00004003'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1342});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1343});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1344});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1345});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1346});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1347});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1348});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1349});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1350});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1351});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1352});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1353});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1354});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1355});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1356});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1357});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1358});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1359});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1360});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1361});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1362});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1363});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1364});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1365});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1366});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1367});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1368});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1369});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1370});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1371});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1372});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1373});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1374});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1375});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00005003'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1376});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1377});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1378});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1379});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1380});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1381});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1382});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1383});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00033"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1384});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1385});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1386});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00036"))
    && ((목적물유형코드 == "MFA10043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1387});
     __hpasRuleResult = {
'업종분류코드' : "205"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00037"))
    && ((목적물유형코드 == "MFA10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1388});
     __hpasRuleResult = {
'업종분류코드' : "205"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1389});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1390});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00040"))
    && ((목적물유형코드 == "MFA10047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1391});
     __hpasRuleResult = {
'업종분류코드' : "208"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00041"))
    && ((목적물유형코드 == "MFA10048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1392});
     __hpasRuleResult = {
'업종분류코드' : "209"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00042"))
    && ((목적물유형코드 == "MFA10049"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1393});
     __hpasRuleResult = {
'업종분류코드' : "210"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00043"))
    && ((목적물유형코드 == "MFA10050"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1394});
     __hpasRuleResult = {
'업종분류코드' : "210"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00044"))
    && ((목적물유형코드 == "MFA10051"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1395});
     __hpasRuleResult = {
'업종분류코드' : "211"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00045"))
    && ((목적물유형코드 == "MFA10052"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1396});
     __hpasRuleResult = {
'업종분류코드' : "211"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00046"))
    && ((목적물유형코드 == "MFA10053"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1397});
     __hpasRuleResult = {
'업종분류코드' : "212"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1398});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00048"))
    && ((목적물유형코드 == "MFA10055"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1399});
     __hpasRuleResult = {
'업종분류코드' : "213"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1400});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1401});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1402});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1403});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1404});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016021'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1405});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1406});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1407});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00082"))
    && ((목적물유형코드 == "MFA10089"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1408});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1409});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023027'))
    && ((위험유형코드 == "RFA00181"))
    && ((목적물유형코드 == "MFA10201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1410});
     __hpasRuleResult = {
'업종분류코드' : "429"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023028'))
    && ((위험유형코드 == "RFA00229"))
    && ((목적물유형코드 == "MFA10202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1411});
     __hpasRuleResult = {
'업종분류코드' : "430"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00092002'))
    && ((위험유형코드 == "RFA00230"))
    && ((목적물유형코드 == "MFA10203"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1412});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00080002'))
    && ((위험유형코드 == "RFA00231"))
    && ((목적물유형코드 == "MFA10204"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1413});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00080002'))
    && ((위험유형코드 == "RFA00232"))
    && ((목적물유형코드 == "MFA10205"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1414});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((목적물유형코드 == "MFA10206"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1415});
     __hpasRuleResult = {
'업종분류코드' : "279"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016022'))
    && ((위험유형코드 == "RFA00234"))
    && ((목적물유형코드 == "MFA10207"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1416});
     __hpasRuleResult = {
'업종분류코드' : "280"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1417});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1418});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1419});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1420});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1421});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1422});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1423});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1424});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1425});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1426});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1427});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1428});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1429});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1430});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1431});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1432});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1433});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1434});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1435});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1436});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1437});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1438});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1439});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1440});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1441});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1442});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1443});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1444});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1445});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1446});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1447});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1448});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1449});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1450});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1451});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1452});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1453});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1454});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1455});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1456});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1457});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1458});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1459});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1460});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1461});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1462});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1463});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1464});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1465});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1466});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1467});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1468});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1469});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1470});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1471});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1472});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1473});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1474});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1475});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1476});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1477});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1478});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1479});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1480});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1481});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1482});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1483});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1484});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1485});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1486});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1487});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1488});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1489});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1490});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1491});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1492});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1493});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1494});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1495});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1496});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1497});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1498});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1499});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1500});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1501});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1502});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1503});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1504});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1505});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1506});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1507});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1508});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1509});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1510});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1511});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1512});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023029'))
    && ((위험유형코드 == "RFA00226"))
    && ((목적물유형코드 == "MFA10208"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1513});
     __hpasRuleResult = {
'업종분류코드' : "281"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1514});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1515});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1516});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1517});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1518});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1519});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1520});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1521});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1522});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1523});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1524});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1525});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1526});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1527});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1528});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1529});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1530});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1531});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1532});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1533});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1534});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1535});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1536});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1537});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1538});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1539});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1540});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1541});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1542});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1543});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1544});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1545});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1546});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1547});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1548});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1549});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1550});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1551});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1552});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1553});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1554});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1555});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1556});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1557});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1558});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1559});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1560});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1561});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1562});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1563});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1564});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1565});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1566});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1567});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1568});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1569});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1570});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1571});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1572});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1573});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1574});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1575});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1576});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1577});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1578});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1579});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1580});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1581});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1582});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1583});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1584});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1585});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1586});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1587});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1588});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1589});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1590});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1591});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1592});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1593});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1594});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1595});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1596});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1597});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1598});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1599});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1600});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1601});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1602});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1603});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1604});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1605});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1606});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1607});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1608});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1609});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1610});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1611});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1612});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1613});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1614});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1615});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1616});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1617});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1618});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1619});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1620});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1621});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1622});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1623});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1624});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1625});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1626});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1627});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1628});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1629});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1630});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1631});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1632});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1633});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1634});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1635});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1636});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1637});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1638});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1639});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1640});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1641});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1642});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1643});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1644});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1645});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1646});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1647});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1648});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1649});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1650});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1651});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1652});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1653});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1654});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1655});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1656});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1657});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1658});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1659});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1660});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1661});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1662});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1663});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1664});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1665});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1666});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1667});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1668});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1669});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1670});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1671});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1672});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1673});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1674});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1675});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1676});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1677});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1678});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1679});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1680});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1681});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1682});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1683});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1684});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1685});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1686});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1687});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1688});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1689});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1690});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1691});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1692});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1693});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1694});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1695});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1696});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1697});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1698});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1699});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1700});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1701});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1702});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1703});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1704});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1705});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1706});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1707});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1708});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1709});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1710});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1711});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1712});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1713});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1714});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1715});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1716});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1717});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1718});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1719});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1720});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1721});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1722});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1723});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1724});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1725});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1726});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1727});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1728});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1729});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1730});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1731});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1732});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1733});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1734});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1735});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1736});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1737});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1738});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1739});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1740});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1741});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1742});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1743});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1744});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1745});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1746});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1747});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1748});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1749});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1750});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1751});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1752});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1753});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1754});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1755});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1756});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1757});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1758});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1759});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1760});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1761});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1762});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1763});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1764});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1765});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1766});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1767});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1768});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1769});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1770});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1771});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1772});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1773});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1774});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1775});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1776});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1777});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1778});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1779});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1780});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1781});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1782});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1783});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1784});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1785});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1786});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1787});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1788});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1789});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1790});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1791});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1792});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1793});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1794});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1795});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1796});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1797});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1798});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1799});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1800});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1801});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1802});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1803});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1804});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1805});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1806});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1807});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1808});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1809});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1810});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016023'))
    && ((위험유형코드 == "RFA00235"))
    && ((목적물유형코드 == "MFA10209"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1811});
     __hpasRuleResult = {
'업종분류코드' : "282"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095005'))
    && ((위험유형코드 == "RFA00236"))
    && ((목적물유형코드 == "MFA10210"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1812});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095005'))
    && ((위험유형코드 == "RFA00237"))
    && ((목적물유형코드 == "MFA10211"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1813});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095006'))
    && ((위험유형코드 == "RFA00205"))
    && ((목적물유형코드 == "MFA10189"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1814});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016025'))
    && ((위험유형코드 == "RFA00240"))
    && ((목적물유형코드 == "MFA10213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1815});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016024'))
    && ((위험유형코드 == "RFA00239"))
    && ((목적물유형코드 == "MFA10212"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1816});
     __hpasRuleResult = {
'업종분류코드' : "283"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016026'))
    && ((위험유형코드 == "RFA00210"))
    && ((목적물유형코드 == "MFA10191"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1817});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00127001'))
    && ((위험유형코드 == "RFA00241"))
    && ((목적물유형코드 == "MFA10214"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1818});
     __hpasRuleResult = {
'업종분류코드' : "711"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00115002'))
    && ((위험유형코드 == "RFA00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1819});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016027'))
    && ((위험유형코드 == "RFA00187"))
    && ((목적물유형코드 == "MFA10056"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1820});
     __hpasRuleResult = {
'업종분류코드' : "272"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016027'))
    && ((위험유형코드 == "RFA00242"))
    && ((목적물유형코드 == "MFA10215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1821});
     __hpasRuleResult = {
'업종분류코드' : "284"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023030'))
    && ((위험유형코드 == "RFA00086"))
    && ((목적물유형코드 == "MFA10093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1822});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016029'))
    && ((위험유형코드 == "RFA00243"))
    && ((목적물유형코드 == "MFA10216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1823});
     __hpasRuleResult = {
'업종분류코드' : "285"
}
    canSheetNext = false
    }
    else if(((상품코드 == '{드론의무배상책임보험}'))
    && ((위험유형코드 == "RFA00243"))
    && ((목적물유형코드 == "MFA10216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1824});
     __hpasRuleResult = {
'업종분류코드' : "285"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1825});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1826});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1827});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1828});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1829});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1830});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1831});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1832});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1833});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1834});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1835});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052013'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1836});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1837});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1838});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1839});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1840});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1841});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1842});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1843});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1844});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1845});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1846});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1847});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052014'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1848});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016028'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1849});
     __hpasRuleResult = {
'업종분류코드' : "287"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016030'))
    && ((위험유형코드 == "RFA00240"))
    && ((목적물유형코드 == "MFA10213"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1850});
     __hpasRuleResult = {
'업종분류코드' : "286"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00130001'))
    && ((위험유형코드 == "RFA00152"))
    && ((목적물유형코드 == "MFA10000"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1851});
     __hpasRuleResult = {
'업종분류코드' : "418"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00130001'))
    && ((위험유형코드 == "RFA00116"))
    && ((목적물유형코드 == "MFA10122"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1852});
     __hpasRuleResult = {
'업종분류코드' : "701"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00131001'))
    && ((위험유형코드 == "RFA00245"))
    && ((목적물유형코드 == "MFA10219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1853});
     __hpasRuleResult = {
'업종분류코드' : "288"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00131001'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1854});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00131002'))
    && ((위험유형코드 == "RFA00245"))
    && ((목적물유형코드 == "MFA10219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1855});
     __hpasRuleResult = {
'업종분류코드' : "288"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00131002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1856});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095007'))
    && ((위험유형코드 == "RFA00248"))
    && ((목적물유형코드 == "MFA10221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1857});
     __hpasRuleResult = {
'업종분류코드' : "712"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1858});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1859});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1860});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1861});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1862});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1863});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1864});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1865});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1866});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1867});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1868});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1869});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1870});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1871});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1872});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1873});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1874});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1875});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1876});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1877});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1878});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1879});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1880});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1881});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1882});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1883});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1884});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1885});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1886});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1887});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1888});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1889});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1890});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1891});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1892});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1893});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1894});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1895});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1896});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1897});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1898});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1899});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1900});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1901});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1902});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1903});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1904});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1905});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1906});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1907});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1908});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1909});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1910});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1911});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1912});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1913});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1914});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1915});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1916});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1917});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1918});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1919});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1920});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1921});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1922});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1923});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1924});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1925});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1926});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1927});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1928});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1929});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1930});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1931});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1932});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1933});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1934});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1935});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1936});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1937});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1938});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1939});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1940});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1941});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1942});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1943});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1944});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1945});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1946});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1947});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1948});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00080"))
    && ((목적물유형코드 == "MFA10087"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1949});
     __hpasRuleResult = {
'업종분류코드' : "254"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052015'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1950});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095008'))
    && ((위험유형코드 == "RFA00251"))
    && ((목적물유형코드 == "MFA10223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1951});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1952});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1953});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1954});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00253"))
    && ((목적물유형코드 == "MFA10224"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1955});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00255"))
    && ((목적물유형코드 == "MFA10225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1956});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010008'))
    && ((위험유형코드 == "RFA00257"))
    && ((목적물유형코드 == "MFA10226"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1957});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1958});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1959});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1960});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00253"))
    && ((목적물유형코드 == "MFA10224"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1961});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00255"))
    && ((목적물유형코드 == "MFA10225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1962});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010015'))
    && ((위험유형코드 == "RFA00257"))
    && ((목적물유형코드 == "MFA10226"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1963});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1964});
     __hpasRuleResult = {
'업종분류코드' : "290"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1965});
     __hpasRuleResult = {
'업종분류코드' : "291"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1966});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00181"))
    && ((목적물유형코드 == "MFA10201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1967});
     __hpasRuleResult = {
'업종분류코드' : "429"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00226"))
    && ((목적물유형코드 == "MFA10208"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1968});
     __hpasRuleResult = {
'업종분류코드' : "281"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00133001'))
    && ((위험유형코드 == "RFA00258"))
    && ((목적물유형코드 == "MFA10227"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1969});
     __hpasRuleResult = {
'업종분류코드' : "292"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016031'))
    && ((위험유형코드 == "RFA00259"))
    && ((목적물유형코드 == "MFA10228"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1970});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016031'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1971});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((목적물유형코드 == "MFA10229"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1972});
     __hpasRuleResult = {
'업종분류코드' : "270"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016032'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1973});
     __hpasRuleResult = {
'업종분류코드' : "293"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016032'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1974});
     __hpasRuleResult = {
'업종분류코드' : "293"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1975});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1976});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1977});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1978});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1979});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1980});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1981});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1982});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1983});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1984});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1985});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052016'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1986});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095009'))
    && ((위험유형코드 == "RFA00165"))
    && ((목적물유형코드 == "MFA10171"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1987});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012004'))
    && ((위험유형코드 == "RFA00114"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1988});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012004'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1989});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1990});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1991});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1992});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1993});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1994});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1995});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1996});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1997});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1998});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:1999});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2000});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2001});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2002});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2003});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2004});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2005});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2006});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2007});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2008});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2009});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2010});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2011});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2012});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2013});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2014});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2015});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2016});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2017});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2018});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2019});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2020});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2021});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2022});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00135001'))
    && ((위험유형코드 == "RFA00263"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2023});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00136001'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2024});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00136002'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2025});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2026});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2027});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016033'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2028});
     __hpasRuleResult = {
'업종분류코드' : "714"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00138001'))
    && ((위험유형코드 == "RFA00267"))
    && ((목적물유형코드 == "MFA10233"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2029});
     __hpasRuleResult = {
'업종분류코드' : "715"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00138001'))
    && ((위험유형코드 == "RFA00268"))
    && ((목적물유형코드 == "MFA10233"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2030});
     __hpasRuleResult = {
'업종분류코드' : "715"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00138001'))
    && ((위험유형코드 == "RFA00269"))
    && ((목적물유형코드 == "MFA10233"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2031});
     __hpasRuleResult = {
'업종분류코드' : "715"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00138001'))
    && ((위험유형코드 == "RFA00270"))
    && ((목적물유형코드 == "MFA10233"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2032});
     __hpasRuleResult = {
'업종분류코드' : "715"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016034'))
    && ((위험유형코드 == "RFA00259"))
    && ((목적물유형코드 == "MFA10228"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2033});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016034'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2034});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016035'))
    && ((위험유형코드 == "RFA00259"))
    && ((목적물유형코드 == "MFA10228"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2035});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016035'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2036});
     __hpasRuleResult = {
'업종분류코드' : "269"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00139001'))
    && ((위험유형코드 == "RFA00048"))
    && ((목적물유형코드 == "MFA10055"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2037});
     __hpasRuleResult = {
'업종분류코드' : "213"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00139001'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2038});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022009'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2039});
     __hpasRuleResult = {
'업종분류코드' : "708"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022009'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2040});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023008'))
    && ((위험유형코드 == "RFA00272"))
    && ((목적물유형코드 == "MFA10236"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2041});
     __hpasRuleResult = {
'업종분류코드' : "717"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00119002'))
    && ((위험유형코드 == "RFA00200"))
    && ((목적물유형코드 == "MFA10182"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2042});
     __hpasRuleResult = {
'업종분류코드' : "703"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023032'))
    && ((위험유형코드 == "RFA00278"))
    && ((목적물유형코드 == "MFA10242"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2043});
     __hpasRuleResult = {
'업종분류코드' : "721"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00142001'))
    && ((위험유형코드 == "RFA00280"))
    && ((목적물유형코드 == "MFA10244"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2044});
     __hpasRuleResult = {
'업종분류코드' : "722"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00142002'))
    && ((위험유형코드 == "RFA00280"))
    && ((목적물유형코드 == "MFA10244"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2045});
     __hpasRuleResult = {
'업종분류코드' : "722"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023033'))
    && ((위험유형코드 == "RFA00159"))
    && ((목적물유형코드 == "MFA10170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2046});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023034'))
    && ((위험유형코드 == "RFA00159"))
    && ((목적물유형코드 == "MFA10170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2047});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023035'))
    && ((위험유형코드 == "RFA00159"))
    && ((목적물유형코드 == "MFA10170"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2048});
     __hpasRuleResult = {
'업종분류코드' : "263"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00146001'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2049});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00147001'))
    && ((위험유형코드 == "RFA00282"))
    && ((목적물유형코드 == "MFA10246"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2050});
     __hpasRuleResult = {
'업종분류코드' : "723"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2051});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2052});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2053});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2054});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2055});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2056});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2057});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2058});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2059});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2060});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2061});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2062});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2063});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2064});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2065});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2066});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2067});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2068});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2069});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2070});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2071});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2072});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2073});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2074});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2075});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2076});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2077});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2078});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2079});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2080});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2081});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2082});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2083});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2084});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2085});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2086});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2087});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2088});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2089});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2090});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2091});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2092});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2093});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2094});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2095});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2096});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2097});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2098});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2099});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2100});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2101});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2102});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2103});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2104});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2105});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2106});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2107});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2108});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2109});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2110});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2111});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2112});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2113});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2114});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2115});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2116});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2117});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2118});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2119});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2120});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2121});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2122});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2123});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2124});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2125});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2126});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2127});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2128});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2129});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2130});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2131});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2132});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2133});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2134});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2135});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2136});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2137});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2138});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2139});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2140});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2141});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2142});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2143});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2144});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2145});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00148001'))
    && ((위험유형코드 == "RFA00215"))
    && ((목적물유형코드 == "MFA10192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2146});
     __hpasRuleResult = {
'업종분류코드' : "724"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00148002'))
    && ((위험유형코드 == "RFA00215"))
    && ((목적물유형코드 == "MFA10192"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2147});
     __hpasRuleResult = {
'업종분류코드' : "724"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2148});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2149});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2150});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052012')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00037"))
    && ((목적물유형코드 == "MFA10044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2151});
     __hpasRuleResult = {
'업종분류코드' : "205"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010009'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2152});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010009'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2153});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010009'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2154});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00282"))
    && ((목적물유형코드 == "MFA10246"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2155});
     __hpasRuleResult = {
'업종분류코드' : "723"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((목적물유형코드 == "MFA10249"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2156});
     __hpasRuleResult = {
'업종분류코드' : "725"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00150001'))
    && ((위험유형코드 == "RFA00286"))
    && ((목적물유형코드 == "MFA10250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2157});
     __hpasRuleResult = {
'업종분류코드' : "726"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00150002'))
    && ((위험유형코드 == "RFA00286"))
    && ((목적물유형코드 == "MFA10250"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2158});
     __hpasRuleResult = {
'업종분류코드' : "727"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023036'))
    && ((위험유형코드 == "RFA00055"))
    && ((목적물유형코드 == "MFA10062"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2159});
     __hpasRuleResult = {
'업종분류코드' : "221"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023036'))
    && ((위험유형코드 == "RFA00272"))
    && ((목적물유형코드 == "MFA10236"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2160});
     __hpasRuleResult = {
'업종분류코드' : "717"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00151001'))
    && ((위험유형코드 == "RFA00288"))
    && ((목적물유형코드 == "MFA10252"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2161});
     __hpasRuleResult = {
'업종분류코드' : "728"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00289"))
    && ((목적물유형코드 == "MFA10253"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2162});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00290"))
    && ((목적물유형코드 == "MFA10254"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2163});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00291"))
    && ((목적물유형코드 == "MFA10255"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2164});
     __hpasRuleResult = {
'업종분류코드' : "260"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00292"))
    && ((목적물유형코드 == "MFA10256"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2165});
     __hpasRuleResult = {
'업종분류코드' : "261"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00293"))
    && ((목적물유형코드 == "MFA10257"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2166});
     __hpasRuleResult = {
'업종분류코드' : "261"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00294"))
    && ((목적물유형코드 == "MFA10258"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2167});
     __hpasRuleResult = {
'업종분류코드' : "261"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00071002'))
    && ((위험유형코드 == "RFA00127"))
    && ((목적물유형코드 == "MFA10133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2168});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00136003'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2169});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022010'))
    && ((위험유형코드 == "RFA00079"))
    && ((목적물유형코드 == "MFA10086"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2170});
     __hpasRuleResult = {
'업종분류코드' : "729"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00095005'))
    && ((위험유형코드 == "RFA00295"))
    && ((목적물유형코드 == "MFA10259"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2171});
     __hpasRuleResult = {
'업종분류코드' : "729"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00153001'))
    && ((위험유형코드 == "RFA00296"))
    && ((목적물유형코드 == "MFA10260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2172});
     __hpasRuleResult = {
'업종분류코드' : "729"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00153002'))
    && ((위험유형코드 == "RFA00296"))
    && ((목적물유형코드 == "MFA10260"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2173});
     __hpasRuleResult = {
'업종분류코드' : "729"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00154001'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2174});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00156001'))
    && ((위험유형코드 == "RFA00297"))
    && ((목적물유형코드 == "MFA10261"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2175});
     __hpasRuleResult = {
'업종분류코드' : "731"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00157001')||(상품코드 == 'FA00157002'))
    && ((위험유형코드 == "RFA00298"))
    && ((목적물유형코드 == "MFA10262"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2176});
     __hpasRuleResult = {
'업종분류코드' : "732"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00158001')||(상품코드 == 'FA00158002'))
    && ((위험유형코드 == "RFA00299"))
    && ((목적물유형코드 == "MFA10263"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2177});
     __hpasRuleResult = {
'업종분류코드' : "733"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00160001'))
    && ((위험유형코드 == "RFA00302"))
    && ((목적물유형코드 == "MFA10266"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2178});
     __hpasRuleResult = {
'업종분류코드' : "735"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2179});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011'))
    && ((위험유형코드 == "RFA00303"))
    && ((목적물유형코드 == "MFA10267"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2180});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2181});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00303"))
    && ((목적물유형코드 == "MFA10267"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2182});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010010'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2183});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010010'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2184});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00010010'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2185});
     __hpasRuleResult = {
'업종분류코드' : "601"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012005'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2186});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012005'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2187});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012005'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2188});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00012005'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2189});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2190});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2191});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2192});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2193});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2194});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2195});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2196});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2197});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2198});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2199});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2200});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2201});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2202});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2203});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2204});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2205});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2206});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2207});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2208});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2209});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2210});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2211});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2212});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2213});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2214});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2215});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2216});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2217});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2218});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2219});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2220});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2221});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2222});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2223});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2224});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00049005'))
    && ((위험유형코드 == "RFA00112"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2225});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011004'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2226});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011004'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2227});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011004'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2228});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011004'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2229});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2230});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2231});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2232});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2233});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2234});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2235});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2236});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2237});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2238});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2239});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2240});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2241});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2242});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2243});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2244});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2245});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2246});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2247});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2248});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2249});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2250});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2251});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2252});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2253});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10019"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2254});
     __hpasRuleResult = {
'업종분류코드' : "111"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10020"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2255});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10161"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2256});
     __hpasRuleResult = {
'업종분류코드' : "112"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10021"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2257});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10022"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2258});
     __hpasRuleResult = {
'업종분류코드' : "113"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10023"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2259});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10024"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2260});
     __hpasRuleResult = {
'업종분류코드' : "114"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10025"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2261});
     __hpasRuleResult = {
'업종분류코드' : "115"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2262});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2263});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2264});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10000"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2265});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2266});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10002"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2267});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10003"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2268});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10004"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2269});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10005"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2270});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10006"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2271});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10007"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2272});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10008"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2273});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10009"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2274});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10010"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2275});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10011"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2276});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10012"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2277});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2278});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10159"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2279});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10013"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2280});
     __hpasRuleResult = {
'업종분류코드' : "104"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2281});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))
    && ((목적물유형분류코드 == "06"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2282});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10160"))
    && ((목적물유형분류코드 == "02"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2283});
     __hpasRuleResult = {
'업종분류코드' : "106"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10015"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2284});
     __hpasRuleResult = {
'업종분류코드' : "107"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10016"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2285});
     __hpasRuleResult = {
'업종분류코드' : "108"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10017"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2286});
     __hpasRuleResult = {
'업종분류코드' : "109"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10018"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2287});
     __hpasRuleResult = {
'업종분류코드' : "110"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10026"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2288});
     __hpasRuleResult = {
'업종분류코드' : "116"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10027"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2289});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10028"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2290});
     __hpasRuleResult = {
'업종분류코드' : "117"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10029"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2291});
     __hpasRuleResult = {
'업종분류코드' : "118"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10030"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2292});
     __hpasRuleResult = {
'업종분류코드' : "119"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2293});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2294});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10033"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2295});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10162"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2296});
     __hpasRuleResult = {
'업종분류코드' : "122"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10034"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2297});
     __hpasRuleResult = {
'업종분류코드' : "123"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10035"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2298});
     __hpasRuleResult = {
'업종분류코드' : "124"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10036"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2299});
     __hpasRuleResult = {
'업종분류코드' : "125"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형코드 == "MFA10037"))
    && ((목적물유형분류코드 == "04"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2300});
     __hpasRuleResult = {
'업종분류코드' : "126"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00027"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2301});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2302});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2303});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2304});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2305});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00060"))
    && ((목적물유형코드 == "MFA10067"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2306});
     __hpasRuleResult = {
'업종분류코드' : "225"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00061"))
    && ((목적물유형코드 == "MFA10068"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2307});
     __hpasRuleResult = {
'업종분류코드' : "226"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00062"))
    && ((목적물유형코드 == "MFA10069"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2308});
     __hpasRuleResult = {
'업종분류코드' : "227"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00063"))
    && ((목적물유형코드 == "MFA10070"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2309});
     __hpasRuleResult = {
'업종분류코드' : "228"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00064"))
    && ((목적물유형코드 == "MFA10071"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2310});
     __hpasRuleResult = {
'업종분류코드' : "229"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00065"))
    && ((목적물유형코드 == "MFA10072"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2311});
     __hpasRuleResult = {
'업종분류코드' : "230"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00066"))
    && ((목적물유형코드 == "MFA10073"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2312});
     __hpasRuleResult = {
'업종분류코드' : "231"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00067"))
    && ((목적물유형코드 == "MFA10074"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2313});
     __hpasRuleResult = {
'업종분류코드' : "232"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00068"))
    && ((목적물유형코드 == "MFA10075"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2314});
     __hpasRuleResult = {
'업종분류코드' : "233"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00069"))
    && ((목적물유형코드 == "MFA10076"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2315});
     __hpasRuleResult = {
'업종분류코드' : "234"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00070"))
    && ((목적물유형코드 == "MFA10077"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2316});
     __hpasRuleResult = {
'업종분류코드' : "235"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2317});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "01"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2318});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2319});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2320});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "07"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2321});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "03"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2322});
     __hpasRuleResult = {
'업종분류코드' : "120"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "05"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2323});
     __hpasRuleResult = {
'업종분류코드' : "121"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00032"))
    && ((목적물유형코드 == "MFA10001"))
    && ((목적물유형분류코드 == "08"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2324});
     __hpasRuleResult = {
'업종분류코드' : "127"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00224"))
    && ((목적물유형코드 == "MFA10197"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2325});
     __hpasRuleResult = {
'업종분류코드' : "274"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((목적물유형코드 == "MFA10041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2326});
     __hpasRuleResult = {
'업종분류코드' : "203"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00047"))
    && ((목적물유형코드 == "MFA10054"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2327});
     __hpasRuleResult = {
'업종분류코드' : "301"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((목적물유형코드 == "MFA10046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2328});
     __hpasRuleResult = {
'업종분류코드' : "207"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((목적물유형코드 == "MFA10045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2329});
     __hpasRuleResult = {
'업종분류코드' : "206"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00071"))
    && ((목적물유형코드 == "MFA10078"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2330});
     __hpasRuleResult = {
'업종분류코드' : "236"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00303"))
    && ((목적물유형코드 == "MFA10267"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2331});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2332});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2333});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2334});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2335});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2336});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2337});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2338});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2339});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2340});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2341});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2342});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00161001'))
    && ((위험유형코드 == "RFA00304"))
    && ((목적물유형코드 == "MFA10268"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2343});
     __hpasRuleResult = {
'업종분류코드' : "736"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052018'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2344});
     __hpasRuleResult = {
'업종분류코드' : "716"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2345});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2346});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2347});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2348});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2349});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2350});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2351});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2352});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2353});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2354});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2355});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052019'))
    && ((위험유형코드 == "RFA00261"))
    && ((목적물유형코드 == "MFA10230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2356});
     __hpasRuleResult = {
'업종분류코드' : "716"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011005'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2357});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011005'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2358});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011005'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2359});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011005'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2360});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00100"))
    && ((목적물유형코드 == "MFA10107"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2361});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00148"))
    && ((목적물유형코드 == "MFA10154"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2362});
     __hpasRuleResult = {
'업종분류코드' : "602"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00149"))
    && ((목적물유형코드 == "MFA10155"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2363});
     __hpasRuleResult = {
'업종분류코드' : "604"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00011006'))
    && ((위험유형코드 == "RFA00101"))
    && ((목적물유형코드 == "MFA10108"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2364});
     __hpasRuleResult = {
'업종분류코드' : "603"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00136004'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2365});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2366});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2367});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2368});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2369});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2370});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2371});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2372});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2373});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2374});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2375});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2376});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052021'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2377});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == "FA00159001"))
    && ((위험유형코드 == "RFA00160"))
    && ((목적물유형코드 == "MFA10133"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2378});
     __hpasRuleResult = {
'업종분류코드' : "413"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00028"))
    && ((목적물유형코드 == "MFA10014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2379});
     __hpasRuleResult = {
'업종분류코드' : "105"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00030"))
    && ((목적물유형코드 == "MFA10039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2380});
     __hpasRuleResult = {
'업종분류코드' : "201"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00031"))
    && ((목적물유형코드 == "MFA10040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2381});
     __hpasRuleResult = {
'업종분류코드' : "202"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00035"))
    && ((목적물유형코드 == "MFA10042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2382});
     __hpasRuleResult = {
'업종분류코드' : "204"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00053"))
    && ((목적물유형코드 == "MFA10060"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2383});
     __hpasRuleResult = {
'업종분류코드' : "219"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2384});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00102"))
    && ((목적물유형코드 == "MFA10109"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2385});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2386});
     __hpasRuleResult = {
'업종분류코드' : "102"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2387});
     __hpasRuleResult = {
'업종분류코드' : "103"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2388});
     __hpasRuleResult = {
'업종분류코드' : "605"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00103"))
    && ((목적물유형코드 == "MFA10110"))
    && ((가입유형코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2389});
     __hpasRuleResult = {
'업종분류코드' : "606"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052022'))
    && ((위험유형코드 == "RFA00110"))
    && ((목적물유형코드 == "MFA10117"))
    && ((물건구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2390});
     __hpasRuleResult = {
'업종분류코드' : "101"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00164001'))
    && ((위험유형코드 == "RFA00309"))
    && ((목적물유형코드 == "MFA10272"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2391});
     __hpasRuleResult = {
'업종분류코드' : "739"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00165001'))
    && ((위험유형코드 == "RFA00264"))
    && ((목적물유형코드 == "MFA10232"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2392});
     __hpasRuleResult = {
'업종분류코드' : "713"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022013'))
    && ((위험유형코드 == "RFA00314"))
    && ((목적물유형코드 == "MFA10277"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2393});
     __hpasRuleResult = {
'업종분류코드' : "741"
}
    canSheetNext = false
    }
    else if(((상품코드 == '{반려동물위탁관리업자배상책임보험}'))
    && ((위험유형코드 == "RFA00317"))
    && ((목적물유형코드 == "MFA10280"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별업종분류조회_001' , row:2394});
     __hpasRuleResult = {
'업종분류코드' : "743"
}
    canSheetNext = false
    }
    }

    업종분류코드 = ""


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};