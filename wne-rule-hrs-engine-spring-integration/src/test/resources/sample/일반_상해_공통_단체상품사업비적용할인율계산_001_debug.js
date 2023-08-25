function(계속계약할인율_PCT,고액계약할인율_PCT,단체할인율_PCT,부부가족할인율_PCT,세대수할인율_PCT,부보대수할인율_PCT,패키지할인율_PCT,예정사업비율,상품코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_공통_단체상품사업비적용할인율계산_001',ruleName:'일반_상해_공통_단체상품사업비적용할인율계산',ruleType:'LOGIC_TABLE',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'계속계약할인율_PCT:'+JSON.stringify(계속계약할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'계속계약할인율_PCT' , 'value':JSON.stringify(계속계약할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'고액계약할인율_PCT:'+JSON.stringify(고액계약할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'고액계약할인율_PCT' , 'value':JSON.stringify(고액계약할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'단체할인율_PCT:'+JSON.stringify(단체할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'단체할인율_PCT' , 'value':JSON.stringify(단체할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'부부가족할인율_PCT:'+JSON.stringify(부부가족할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'부부가족할인율_PCT' , 'value':JSON.stringify(부부가족할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'세대수할인율_PCT:'+JSON.stringify(세대수할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'세대수할인율_PCT' , 'value':JSON.stringify(세대수할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'부보대수할인율_PCT:'+JSON.stringify(부보대수할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'부보대수할인율_PCT' , 'value':JSON.stringify(부보대수할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'패키지할인율_PCT:'+JSON.stringify(패키지할인율_PCT)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'패키지할인율_PCT' , 'value':JSON.stringify(패키지할인율_PCT) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'예정사업비율:'+JSON.stringify(예정사업비율)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'예정사업비율' , 'value':JSON.stringify(예정사업비율) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 사업비합계할인율 = null;
    var 사업비최대할인율 
var 사업비적용율 


    // Compiler Version 1 , Created : 2023-08-24 18:06:20
    if(true
){
        사업비최대할인율=(AMT(예정사업비율)).multiply(AMT(0.6))

    }

    if(true
){
        사업비적용율 = 100

    }

    if(계속계약할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(계속계약할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(고액계약할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(고액계약할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(단체할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(단체할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(부부가족할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(부부가족할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(세대수할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(세대수할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(부보대수할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(부보대수할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(패키지할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(패키지할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(true
){
        사업비적용율 = 100 - 사업비적용율

    }

    if(사업비최대할인율 > 사업비적용율
){
        사업비합계할인율 = 사업비적용율

    }

    if(사업비최대할인율 <= 사업비적용율
){
        사업비합계할인율 = 사업비최대할인율

    }
    __hpasRuleResult = {
        사업비합계할인율 : 사업비합계할인율
    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};