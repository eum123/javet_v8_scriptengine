function(상품코드,위험유형코드,업종1레벨코드,업종2레벨코드,담보코드,보상한도금액단위코드,배상구분코드,자기부담금액 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001',ruleName:'일반_공통_자기부담금액사이값입력가능금액기준표',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'업종1레벨코드:'+JSON.stringify(업종1레벨코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'업종1레벨코드' , 'value':JSON.stringify(업종1레벨코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'업종2레벨코드:'+JSON.stringify(업종2레벨코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'업종2레벨코드' , 'value':JSON.stringify(업종2레벨코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보상한도금액단위코드:'+JSON.stringify(보상한도금액단위코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보상한도금액단위코드' , 'value':JSON.stringify(보상한도금액단위코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'배상구분코드:'+JSON.stringify(배상구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'배상구분코드' , 'value':JSON.stringify(배상구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'자기부담금액:'+JSON.stringify(자기부담금액)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'자기부담금액' , 'value':JSON.stringify(자기부담금액) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:27:51
    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:0});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:1});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:2});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:3});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:4});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:5});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:6});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:7});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:8});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:9});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:10});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:11});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016027'))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:12});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:13});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:14});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:15});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:16});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:17});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:18});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:19});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:20});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:21});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:22});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:23});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:24});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:25});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:26});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:27});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:28});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:29});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:30});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:31});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:32});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:33});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:34});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:35});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:36});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:37});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:38});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:39});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:40});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:41});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:42});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:43});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:44});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:45});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:46});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:47});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:48});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:49});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:50});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:51});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:52});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:53});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:54});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:55});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:56});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:57});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:58});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:59});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:60});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:61});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:62});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:63});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:64});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:65});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:66});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:67});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:68});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:69});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:70});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:71});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:72});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:73});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:74});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:75});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:76});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:77});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:78});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:79});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00076"))
    && ((업종1레벨코드 == "C000"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:80});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00076"))
    && ((업종1레벨코드 == "C000"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:81});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00076"))
    && ((업종1레벨코드 == "C000"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:82});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00077"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10306"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:83});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00077"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10306"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:84});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00077"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10306"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:85});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:86});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:87});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:88});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:89});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:90});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:91});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:92});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:93});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:94});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:95});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:96});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:97});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:98});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:99});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:100});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:101});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:102});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:103});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:104});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:105});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:106});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:107});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:108});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:109});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:110});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:111});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:112});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:113});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:114});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:115});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:116});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:117});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:118});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:119});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:120});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:121});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:122});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:123});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:124});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:125});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:126});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:127});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:128});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:129});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:130});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:131});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:132});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:133});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:134});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:135});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:136});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:137});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:138});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:139});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:140});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:141});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:142});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:143});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:144});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:145});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:146});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:147});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:148});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:149});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:150});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:151});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:152});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:153});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:154});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:155});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:156});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:157});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:158});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:159});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:160});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:161});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:162});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:163});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:164});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:165});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:166});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:167});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:168});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:169});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:170});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:171});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:172});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:173});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:174});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:175});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:176});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:177});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:178});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:179});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:180});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:181});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:182});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:183});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:184});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:185});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:186});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:187});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:188});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:189});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:190});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:191});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:192});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:193});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:194});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:195});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:196});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:197});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:198});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:199});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:200});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:201});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:202});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:203});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:204});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:205});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:206});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:207});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:208});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:209});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:210});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:211});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:212});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:213});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:214});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:215});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:216});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:217});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:218});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:219});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:220});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:221});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:222});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:223});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:224});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:225});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:226});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:227});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:228});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:229});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:230});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:231});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:232});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:233});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:234});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:235});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:236});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:237});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:238});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:239});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:240});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:241});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:242});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:243});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:244});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:245});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:246});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:247});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:248});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:249});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:250});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:251});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:252});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:253});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:254});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:255});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:256});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:257});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:258});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:259});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:260});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:261});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:262});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:263});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:264});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:265});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:266});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:267});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:268});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:269});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:270});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:271});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:272});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:273});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:274});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:275});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:276});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:277});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:278});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:279});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:280});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:281});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:282});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:283});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:284});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:285});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:286});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:287});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:288});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:289});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:290});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:291});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:292});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:293});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:294});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:295});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:296});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:297});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:298});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:299});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:300});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:301});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:302});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:303});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:304});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00072"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:305});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00072"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:306});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00072"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:307});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:308});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:309});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:310});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:311});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:312});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066004'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:313});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((담보코드 == "CFA10650"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:314});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((담보코드 == "CFA10650"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:315});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((담보코드 == "CFA10650"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:316});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((담보코드 == "CFA10650"))
    && ((자기부담금액 == 5000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:317});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00114"))
    && ((담보코드 == "CFA10650"))
    && ((자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:318});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00166"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:319});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00166"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:320});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00166"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:321});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00167"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && (!(자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:322});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00167"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && (!(자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:323});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((위험유형코드 == "RFA00167"))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && (!(자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:324});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && (!(업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:325});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:326});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:327});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:328});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:329});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:330});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:331});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00097001'))
    && ((업종1레벨코드 == "42203"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:332});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:333});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:334});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:335});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:336});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:337});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:338});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:339});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:340});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:341});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:342});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00082"))
    && ((담보코드 == "CFA10334"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 >= 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:343});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023027'))
    && ((위험유형코드 == "RFA00181"))
    && ((담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 >= 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:344});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023027'))
    && ((위험유형코드 == "RFA00181"))
    && ((담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 >= 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:345});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023028'))
    && ((위험유형코드 == "RFA00229"))
    && ((담보코드 == "CFA11229"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 >= 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:346});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10847"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:347});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10847"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:348});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10848"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:349});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10848"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:350});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:351});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:352});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:353});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:354});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:355});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:356});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:357});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:358});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:359});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:360});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:361});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:362});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:363});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:364});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:365});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:366});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:367});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:368});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:369});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:370});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:371});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11241"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:372});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:373});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:374});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:375});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:376});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:377});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:378});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:379});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:380});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:381});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:382});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:383});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:384});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:385});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:386});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:387});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:388});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:389});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:390});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:391});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:392});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:393});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:394});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:395});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:396});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:397});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:398});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:399});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:400});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:401});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:402});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:403});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:404});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:405});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:406});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:407});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:408});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:409});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:410});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:411});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:412});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:413});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:414});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:415});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:416});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:417});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:418});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:419});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:420});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:421});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:422});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:423});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:424});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:425});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:426});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:427});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:428});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:429});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:430});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:431});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:432});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:433});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:434});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:435});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:436});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:437});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:438});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:439});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:440});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:441});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:442});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:443});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:444});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:445});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:446});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:447});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:448});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:449});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:450});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:451});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:452});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:453});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:454});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:455});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:456});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:457});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:458});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:459});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:460});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:461});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:462});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:463});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:464});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:465});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:466});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:467});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:468});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:469});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:470});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:471});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:472});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:473});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:474});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:475});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:476});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:477});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:478});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:479});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:480});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:481});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:482});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:483});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:484});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:485});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:486});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:487});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:488});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:489});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:490});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:491});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:492});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:493});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:494});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:495});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:496});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:497});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:498});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:499});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:500});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:501});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:502});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:503});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:504});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:505});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:506});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:507});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:508});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:509});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:510});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:511});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:512});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:513});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:514});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:515});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:516});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:517});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:518});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:519});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:520});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:521});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:522});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:523});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:524});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:525});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:526});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:527});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:528});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:529});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:530});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:531});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:532});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:533});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:534});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:535});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:536});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:537});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:538});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:539});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:540});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:541});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:542});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:543});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:544});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:545});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:546});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:547});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:548});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:549});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:550});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:551});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:552});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:553});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:554});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:555});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:556});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:557});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:558});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:559});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:560});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:561});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:562});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:563});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:564});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:565});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:566});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:567});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:568});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:569});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:570});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:571});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:572});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:573});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:574});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:575});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:576});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:577});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:578});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:579});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:580});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:581});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:582});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:583});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:584});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:585});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:586});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:587});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:588});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:589});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:590});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:591});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:592});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:593});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:594});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:595});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:596});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:597});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:598});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:599});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:600});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:601});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:602});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:603});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:604});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:605});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:606});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:607});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:608});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:609});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:610});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:611});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:612});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:613});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:614});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:615});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:616});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:617});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:618});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:619});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:620});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:621});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:622});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:623});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:624});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:625});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:626});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:627});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:628});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:629});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:630});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:631});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:632});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:633});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:634});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:635});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:636});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:637});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:638});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:639});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:640});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:641});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:642});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:643});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:644});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:645});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:646});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:647});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:648});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:649});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:650});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:651});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 50000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:652});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:653});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:654});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:655});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:656});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:657});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 0.0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:658});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:659});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:660});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:661});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 400000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:662});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:663});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:664});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:665});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:666});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:667});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00016028'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:668});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:669});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:670});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && (!(업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2500000)||(자기부담금액 == 5000000)||(자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:671});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && (!(업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2500000)||(자기부담금액 == 5000000)||(자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:672});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:673});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA10132"))
    && ((보상한도금액단위코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2500000)||(자기부담금액 == 5000000)||(자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:674});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 3000000)||(자기부담금액 == 5000000)||(자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:675});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA11256"))
    && ((보상한도금액단위코드 == "15"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:676});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2500000)||(자기부담금액 == 5000000)||(자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:677});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:678});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:679});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:680});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:681});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:682});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:683});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:684});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:685});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:686});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:687});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:688});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:689});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:690});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:691});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:692});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:693});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:694});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:695});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:696});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:697});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:698});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:699});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:700});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:701});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:702});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:703});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000)||(자기부담금액 == 200000)||(자기부담금액 == 300000)||(자기부담금액 == 500000)||(자기부담금액 == 1000000)||(자기부담금액 == 2000000)||(자기부담금액 == 2500000)||(자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:704});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:705});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:706});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:707});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:708});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:709});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:710});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:711});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:712});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:713});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:714});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:715});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:716});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:717});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:718});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:719});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:720});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:721});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:722});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:723});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:724});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:725});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 2000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:726});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 3000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:727});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 5000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:728});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))
    && ((자기부담금액 == 10000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:729});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:730});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:731});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:732});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:733});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:734});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 100000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:735});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 200000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:736});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 300000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:737});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 500000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:738});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))
    && ((자기부담금액 == 1000000))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력가능금액기준표_001' , row:739});
     __hpasRuleResult = {
'자기부담금액적합성여부' : "1"
}
    canSheetNext = false
    }
    }

    자기부담금액적합성여부 = "0"


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};