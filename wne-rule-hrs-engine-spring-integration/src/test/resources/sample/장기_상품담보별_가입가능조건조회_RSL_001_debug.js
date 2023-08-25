function(적용기준일자,보험종목코드,상품코드,담보코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'장기_상품담보별_가입가능조건조회_RSL_001',ruleName:'장기_상품담보별_가입가능조건조회_RSL',ruleType:'SCRIPT',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'적용기준일자:'+JSON.stringify(적용기준일자)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'적용기준일자' , 'value':JSON.stringify(적용기준일자) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보험종목코드:'+JSON.stringify(보험종목코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보험종목코드' , 'value':JSON.stringify(보험종목코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
var i

DEBUG("==============================================================================")
DEBUG(">> 장기_상품담보별_가입가능조건조회 룰 처리")
DEBUG("(입력)적용기준일자:" + 적용기준일자)
DEBUG("(입력)보험종목코드:" + 보험종목코드)
DEBUG("(입력)상품코드:" + 상품코드)
var __hpasRuleResult = {
	만기룰적용여부: null,
	최대만연령: null,
	최대보험연령: null,
	최소만연령: null,
	최소보험연령: null
};
var 만기룰적용여부 = new Array();
var 최대만연령 = new Array();
var 최대보험연령 = new Array();
var 최소만연령 = new Array();
var 최소보험연령 = new Array();

var __TARGET_DATE__;
for (i = 0; i < 담보코드.length; i = i + 1) {
	var 적용기준일자 = 적용기준일자

	var 보험종목코드 = 보험종목코드

	var 상품코드 = 상품코드

	var 담보코드 = 담보코드[i]

	DEBUG(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

	DEBUG("(" + i + "/" + 담보코드.length + " 호출)적용기준일자:" + 적용기준일자)

	DEBUG("(" + i + "/" + 담보코드.length + " 호출)보험종목코드:" + 보험종목코드)

	DEBUG("(" + i + "/" + 담보코드.length + " 호출)상품코드:" + 상품코드)

	DEBUG("(" + i + "/" + 담보코드.length + " 호출)담보코드:" + 담보코드)

	var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
	var __RULE_CALL_ID__0 = RULESEARCH('장기_상품담보별_가입가능조건조회_GRD', __RULE_INQUIRY_BASE_DATE__);
	var _f_0 = new Function("적용기준일자,보험종목코드,상품코드,담보코드", "return "+ __RULE_CALL_ID__0 + "(적용기준일자,보험종목코드,상품코드,담보코드)");
	var outPut_0 = _f_0(적용기준일자,보험종목코드,상품코드,담보코드);

	DEBUG("(" + i + "/" + 담보코드.length + " 결과)최소만연령:" + outPut_0.최소만연령)

	DEBUG("(" + i + "/" + 담보코드.length + " 결과)최대만연령:" + outPut_0.최대만연령)

	DEBUG("(" + i + "/" + 담보코드.length + " 결과)최소보험연령:" + outPut_0.최소보험연령)

	DEBUG("(" + i + "/" + 담보코드.length + " 결과)최대보험연령:" + outPut_0.최대보험연령)

	DEBUG("(" + i + "/" + 담보코드.length + " 결과)만기룰적용여부:" + outPut_0.만기룰적용여부)

	DEBUG(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

	최소만연령[i] = outPut_0.최소만연령

	최대만연령[i] = outPut_0.최대만연령

	최소보험연령[i] = outPut_0.최소보험연령

	최대보험연령[i] = outPut_0.최대보험연령

	만기룰적용여부[i] = outPut_0.만기룰적용여부

	if (최소만연령[i] < 0) {

		최소만연령[i] = 0

	}

	if (최대만연령[i] < 0) {

		최대만연령[i] = 0

	}

	if (최소보험연령[i] < 0) {

		최소보험연령[i] = 0

	}

	if (최대보험연령[i] < 0) {

		최대보험연령[i] = 0

	}

	if (만기룰적용여부[i] == "") {

		만기룰적용여부[i] = "0"

	}

}
__hpasRuleResult.만기룰적용여부 = 만기룰적용여부;
__hpasRuleResult.최대만연령 = 최대만연령;
__hpasRuleResult.최대보험연령 = 최대보험연령;
__hpasRuleResult.최소만연령 = 최소만연령;
__hpasRuleResult.최소보험연령 = 최소보험연령;

DEBUG("==============================================================================")

};