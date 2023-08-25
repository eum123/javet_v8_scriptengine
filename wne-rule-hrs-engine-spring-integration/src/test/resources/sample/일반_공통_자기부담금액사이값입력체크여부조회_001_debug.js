function(상품코드,위험유형코드,업종1레벨코드,업종2레벨코드,담보코드,보상한도금액단위코드,배상구분코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001',ruleName:'일반_공통_자기부담금액사이값입력체크여부조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:28:39
    if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:0});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:1});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016027'))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:2});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:3});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:4});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:5});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:6});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:7});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:8});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:9});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:10});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:11});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:12});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:13});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:14});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:15});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:16});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:17});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && (!(업종2레벨코드 == "C991"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:18});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:19});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:20});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:21});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00074"))
    && ((담보코드 == "CFA10303"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:22});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00076"))
    && ((업종1레벨코드 == "C000"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:23});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00020001'))
    && ((위험유형코드 == "RFA00077"))
    && ((업종1레벨코드 == "J011"))
    && ((담보코드 == "CFA10306"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:24});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:25});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:26});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:27});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:28});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:29});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:30});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:31});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00022003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:32});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:33});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:34});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:35});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:36});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:37});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:38});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:39});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:40});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:41});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:42});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:43});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:44});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:45});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:46});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:47});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051001'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:48});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:49});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:50});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:51});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:52});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:53});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:54});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:55});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:56});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:57});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:58});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:59});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:60});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:61});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:62});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:63});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:64});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:65});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:66});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:67});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:68});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:69});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:70});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:71});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:72});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:73});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:74});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:75});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:76});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:77});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:78});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:79});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:80});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && (!(업종2레벨코드 == "C991"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:81});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:82});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00057001'))
    && ((위험유형코드 == "RFA00111"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:83});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:84});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:85});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016020'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:86});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:87});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:88});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00019001'))
    && ((위험유형코드 == "RFA00072"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:89});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:90});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:91});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051002'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:92});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00097001'))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:93});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00097001'))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:94});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00097001'))
    && ((담보코드 == "CFA10892"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:95});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00097001'))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:96});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:97});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10115"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:98});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023026'))
    && ((위험유형코드 == "RFA00082"))
    && ((담보코드 == "CFA10334"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:99});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023027'))
    && ((위험유형코드 == "RFA00181"))
    && ((담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:100});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023027'))
    && ((위험유형코드 == "RFA00181"))
    && ((담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:101});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023028'))
    && ((위험유형코드 == "RFA00229"))
    && ((담보코드 == "CFA11229"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:102});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10847"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:103});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10847"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:104});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10848"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:105});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10848"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:106});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:107});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00155"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:108});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:109});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((위험유형코드 == "RFA00260"))
    && ((담보코드 == "CFA10846"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:110});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11241"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:111});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00020003'))
    && ((위험유형코드 == "RFA00233"))
    && ((담보코드 == "CFA11242"))
    && ((보상한도금액단위코드 == "01"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:112});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:113});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:114});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:115});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:116});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:117});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:118});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:119});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:120});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:121});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:122});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:123});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:124});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:125});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:126});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:127});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:128});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:129});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:130});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:131});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:132});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:133});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:134});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:135});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:136});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:137});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:138});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:139});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:140});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:141});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:142});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:143});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:144});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:145});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:146});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:147});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:148});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:149});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:150});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:151});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:152});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:153});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:154});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:155});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:156});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:157});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:158});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:159});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:160});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:161});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:162});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:163});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:164});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:165});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:166});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:167});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:168});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:169});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:170});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:171});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:172});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:173});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:174});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:175});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:176});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:177});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:178});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:179});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:180});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:181});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052010'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:182});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:183});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:184});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:185});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:186});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:187});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052011')||(상품코드 == 'FA00052017'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:188});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:189});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:190});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:191});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:192});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00038"))
    && ((담보코드 == "CFA10135"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:193});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00052012'))
    && ((위험유형코드 == "RFA00039"))
    && ((담보코드 == "CFA10136"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:194});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051003'))
    && ((위험유형코드 == "RFA00071"))
    && (!(업종2레벨코드 == "C991"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:195});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10113"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:196});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00051004'))
    && ((위험유형코드 == "RFA00034"))
    && ((담보코드 == "CFA10130"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:197});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00016028'))
    && ((위험유형코드 == "RFA00030"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:198});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:199});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00050003'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:200});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:201});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00050002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:202});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:203});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023031'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:204});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA10112")||(담보코드 == "CFA10115")||(담보코드 == "CFA10132")||(담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:205});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00023031'))
    && ((담보코드 == "CFA11256")||(담보코드 == "CFA11228"))
    && ((보상한도금액단위코드 == "15"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:206});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:207});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종2레벨코드 == "A301"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:208});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:209});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A401"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:210});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:211});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:212});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A501"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:213});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:214});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A601"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:215});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:216});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A700"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:217});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00030"))
    && ((업종1레벨코드 == "A801"))
    && ((담보코드 == "CFA10112"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:218});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:219});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J0100"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:220});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:221});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00145001')||(상품코드 == 'FA00145002'))
    && ((위험유형코드 == "RFA00053"))
    && ((업종1레벨코드 == "J012"))
    && ((담보코드 == "CFA10236"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:222});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00149001'))
    && ((위험유형코드 == "RFA00285"))
    && ((담보코드 == "CFA11677"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01")||(배상구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:223});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00018001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:224});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((위험유형코드 == "RFA00071"))
    && ((담보코드 == "CFA10301"))
    && ((보상한도금액단위코드 == "02"))
    && ((배상구분코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_자기부담금액사이값입력체크여부조회_001' , row:225});
     __hpasRuleResult = {
'자기부담금액체크여부' : "1"
}

    }
    자기부담금액체크여부 = "0"


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};