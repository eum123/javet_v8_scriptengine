function(담보코드,기본보험료,여행중질병합계보험료,여행중상해합계보험료,연수생상해합계보험료,연수생질병합계보험료 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_해외여행실손의료비합산_001',ruleName:'일반_상해_해외여행실손의료비합산',ruleType:'LOGIC_TABLE',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기본보험료:'+JSON.stringify(기본보험료)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기본보험료' , 'value':JSON.stringify(기본보험료) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'여행중질병합계보험료:'+JSON.stringify(여행중질병합계보험료)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'여행중질병합계보험료' , 'value':JSON.stringify(여행중질병합계보험료) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'여행중상해합계보험료:'+JSON.stringify(여행중상해합계보험료)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'여행중상해합계보험료' , 'value':JSON.stringify(여행중상해합계보험료) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'연수생상해합계보험료:'+JSON.stringify(연수생상해합계보험료)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'연수생상해합계보험료' , 'value':JSON.stringify(연수생상해합계보험료) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'연수생질병합계보험료:'+JSON.stringify(연수생질병합계보험료)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'연수생질병합계보험료' , 'value':JSON.stringify(연수생질병합계보험료) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 여행중상해합계보험료 = 여행중상해합계보험료;
    var 여행중질병합계보험료 = 여행중질병합계보험료;
    var 연수생상해합계보험료 = 연수생상해합계보험료;
    var 연수생질병합계보험료 = 연수생질병합계보험료;

    // Compiler Version 1 , Created : 2023-08-24 18:02:10
    if(담보코드 == "CFA10952" || 담보코드 == "CFA10953" || 담보코드 == "CFA10954"
){
        여행중상해합계보험료 = 여행중상해합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA10956" || 담보코드 == "CFA10957" || 담보코드 == "CFA10958"
){
        여행중질병합계보험료 = 여행중질병합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA10960" || 담보코드 == "CFA10961" || 담보코드 == "CFA10962"
){
        연수생상해합계보험료 = 연수생상해합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA10964" || 담보코드 == "CFA10965" || 담보코드 == "CFA10966"
){
        연수생질병합계보험료 = 연수생질병합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA11421" || 담보코드 == "CFA11422" || 담보코드 == "CFA11423"
){
        여행중상해합계보험료 = 여행중상해합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA11424" || 담보코드 == "CFA11425" || 담보코드 == "CFA11426"
){
        여행중질병합계보험료 = 여행중질병합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA11427" || 담보코드 == "CFA11428" || 담보코드 == "CFA11429"
){
        연수생상해합계보험료 = 연수생상해합계보험료 + 기본보험료

    }

    if(담보코드 == "CFA11430" || 담보코드 == "CFA11431" || 담보코드 == "CFA11432"
){
        연수생질병합계보험료 = 연수생질병합계보험료 + 기본보험료

    }
    __hpasRuleResult = {
        여행중상해합계보험료 : 여행중상해합계보험료 , 여행중질병합계보험료 : 여행중질병합계보험료 , 연수생상해합계보험료 : 연수생상해합계보험료 , 연수생질병합계보험료 : 연수생질병합계보험료
    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};