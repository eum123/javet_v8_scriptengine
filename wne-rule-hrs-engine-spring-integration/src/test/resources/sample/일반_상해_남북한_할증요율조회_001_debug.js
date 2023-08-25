function(담보코드,여행중사망후유장해2의운동담보할증율,여행중의료실비2의운동담보할증율,전쟁위험담보할증율 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_남북한_할증요율조회_001',ruleName:'일반_상해_남북한_할증요율조회',ruleType:'LOGIC_TABLE',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'여행중사망후유장해2의운동담보할증율:'+JSON.stringify(여행중사망후유장해2의운동담보할증율)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'여행중사망후유장해2의운동담보할증율' , 'value':JSON.stringify(여행중사망후유장해2의운동담보할증율) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'여행중의료실비2의운동담보할증율:'+JSON.stringify(여행중의료실비2의운동담보할증율)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'여행중의료실비2의운동담보할증율' , 'value':JSON.stringify(여행중의료실비2의운동담보할증율) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'전쟁위험담보할증율:'+JSON.stringify(전쟁위험담보할증율)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'전쟁위험담보할증율' , 'value':JSON.stringify(전쟁위험담보할증율) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 여행중천재상해사망후유장해할증율 = null;
    var 여행중천재상해의료실비할증율 = null;
    var 여행중사망후유장해1의운동담보할증율 = null;
    var 여행중사망후유장해2의운동담보할증율 = 여행중사망후유장해2의운동담보할증율;
    var 여행중의료실비1의운동담보할증율 = null;
    var 여행중의료실비2의운동담보할증율 = 여행중의료실비2의운동담보할증율;
    var 여행중특별비용2의운동담보할증율 = null;
    var 전쟁위험담보할증율 = 전쟁위험담보할증율;

    // Compiler Version 1 , Created : 2023-08-24 18:02:27
    if(담보코드 == "CFA10604"
){
        여행중천재상해사망후유장해할증율 = 0.0006

    }

    if(담보코드 == "CFA10605"
){
        여행중천재상해의료실비할증율 = 0.05

    }

    if(담보코드 == "CFA10625"
){
        여행중사망후유장해1의운동담보할증율 = 0.111

    }

    if(담보코드 == "CFA10626"
){
        여행중의료실비1의운동담보할증율 = 2.17

    }

    if(담보코드 == "CFA10627"
){
        여행중사망후유장해2의운동담보할증율 = 여행중사망후유장해2의운동담보할증율

    }

    if(담보코드 == "CFA10628"
){
        여행중의료실비2의운동담보할증율 = 여행중의료실비2의운동담보할증율

    }

    if(담보코드 == "CFA10629"
){
        여행중특별비용2의운동담보할증율 = 0.29

    }

    if(담보코드 == "CFA10598"
){
        전쟁위험담보할증율 = 전쟁위험담보할증율

    }
    __hpasRuleResult = {
        여행중천재상해사망후유장해할증율 : 여행중천재상해사망후유장해할증율 , 여행중천재상해의료실비할증율 : 여행중천재상해의료실비할증율 , 여행중사망후유장해1의운동담보할증율 : 여행중사망후유장해1의운동담보할증율 , 여행중사망후유장해2의운동담보할증율 : 여행중사망후유장해2의운동담보할증율 , 여행중의료실비1의운동담보할증율 : 여행중의료실비1의운동담보할증율 , 여행중의료실비2의운동담보할증율 : 여행중의료실비2의운동담보할증율 , 여행중특별비용2의운동담보할증율 : 여행중특별비용2의운동담보할증율 , 전쟁위험담보할증율 : 전쟁위험담보할증율
    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};