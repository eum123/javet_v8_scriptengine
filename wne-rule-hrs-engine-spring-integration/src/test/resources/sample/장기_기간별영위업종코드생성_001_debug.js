function(영위업종코드,적용기준일자 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'장기_기간별영위업종코드생성_001',ruleName:'장기_기간별영위업종코드생성',ruleType:'SCRIPT',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'영위업종코드:'+JSON.stringify(영위업종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'영위업종코드' , 'value':JSON.stringify(영위업종코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'적용기준일자:'+JSON.stringify(적용기준일자)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'적용기준일자' , 'value':JSON.stringify(적용기준일자) } );}

var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
var __hpasRuleResult = {};

// Compiler Version 1 , Created : 2023-08-21 11:10:14
if ((LEN(영위업종코드) > 0 && 영위업종코드 != "*")
	 && ((적용기준일자 <= "2005-04-30") && (적용기준일자 >= "1900-01-01"))) {
	__hpasRuleResult = {
		'영위업종코드': ("A" + 영위업종코드)
	}

} else if ((LEN(영위업종코드) > 0 && 영위업종코드 != "*")
	 && ((적용기준일자 <= "9999-12-31") && (적용기준일자 >= "2005-05-01"))) {
	__hpasRuleResult = {
		'영위업종코드': ("B" + 영위업종코드)
	}

} else if ((LEN(영위업종코드) > 0)) {
	__hpasRuleResult = {
		'영위업종코드': (영위업종코드)
	}

}

return RESULT(__hpasRuleResult);
};