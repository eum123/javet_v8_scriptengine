var 일반_공통_입력요율범위조회_001 = function (진동담보할인여부,소재지구분코드,운송중파손담보물건코드,전체일부목적물구분코드,품목담보위험급수,추가속성코드,담보코드,상품코드,기계적사고담보품목코드,계약시작일자,계약종료일자,여행목적코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 요율구분_Out : null,담보명_Out : null,요율속성명_Out : null,최저_Out : null,최대_Out : null }
var 계약시작일자  = 계약시작일자
var 계약종료일자  = 계약종료일자
var 기계적사고담보품목코드  = 기계적사고담보품목코드
var 담보명_Out = null
var 담보코드  = 담보코드
var 상품코드  = 상품코드
var 소재지구분코드  = 소재지구분코드
var 여행목적코드  = 여행목적코드
var 요율구분_Out = null
var 요율속성명_Out = null
var 운송중파손담보물건코드  = 운송중파손담보물건코드
var 전체일부목적물구분코드  = 전체일부목적물구분코드
var 진동담보할인여부  = 진동담보할인여부
var 최대_Out = null
var 최저_Out = null
var 추가속성코드  = 추가속성코드
var 품목담보위험급수  = 품목담보위험급수
var __TARGET_DATE__ = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [01e4f084-223f-4494-bf95-428106dcee32_011512] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('01e4f084-223f-4494-bf95-428106dcee32_011512');
 __TARGET_DATE__ = GET_DATE_STR_FORMAT(계약시작일자)

}
if(canFlowNext){
// [23f86b4d-8091-4c9d-8c54-e95496551ba7_011513] Rule Call Start [일반_공통_입력요율범위조회표] 
_GET_GLOBAL('__hrs_flowNode_logger').push('23f86b4d-8091-4c9d-8c54-e95496551ba7_011513');
 var _001_기계적사고담보품목코드 = 기계적사고담보품목코드 
var _001_담보코드 = 담보코드 
var _001_상품코드 = 상품코드 
var _001_소재지구분코드 = 소재지구분코드 
var _001_여행목적코드 = 여행목적코드 
var _001_운송중파손담보물건코드 = 운송중파손담보물건코드 
var _001_전체일부목적물구분코드 = 전체일부목적물구분코드 
var _001_진동담보할인여부 = 진동담보할인여부 
var _001_추가속성코드 = 추가속성코드 
var _001_품목담보위험급수 = 품목담보위험급수 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_입력요율범위조회표', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_상품코드,_001_담보코드,_001_추가속성코드,_001_소재지구분코드,_001_품목담보위험급수,_001_운송중파손담보물건코드,_001_기계적사고담보품목코드,_001_전체일부목적물구분코드,_001_진동담보할인여부,_001_여행목적코드", "return "+ __RULE_CALL_ID__ + "(_001_상품코드,_001_담보코드,_001_추가속성코드,_001_소재지구분코드,_001_품목담보위험급수,_001_운송중파손담보물건코드,_001_기계적사고담보품목코드,_001_전체일부목적물구분코드,_001_진동담보할인여부,_001_여행목적코드)"); 
var _001_rule_output = _f(_001_상품코드,_001_담보코드,_001_추가속성코드,_001_소재지구분코드,_001_품목담보위험급수,_001_운송중파손담보물건코드,_001_기계적사고담보품목코드,_001_전체일부목적물구분코드,_001_진동담보할인여부,_001_여행목적코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 담보명_Out : null,요율구분_Out : null,요율속성명_Out : null,최대_Out : null,최저_Out : null }  } 
if(!IS_EMPTY(_001_rule_output.담보명_Out)){ 담보명_Out = _001_rule_output.담보명_Out }  
if(!IS_EMPTY(_001_rule_output.요율구분_Out)){ 요율구분_Out = _001_rule_output.요율구분_Out }  
if(!IS_EMPTY(_001_rule_output.요율속성명_Out)){ 요율속성명_Out = _001_rule_output.요율속성명_Out }  
if(!IS_EMPTY(_001_rule_output.최대_Out)){ 최대_Out = _001_rule_output.최대_Out }  
if(!IS_EMPTY(_001_rule_output.최저_Out)){ 최저_Out = _001_rule_output.최저_Out }  
// [23f86b4d-8091-4c9d-8c54-e95496551ba7_011513] Rule Call End [일반_공통_입력요율범위조회표] 
}
__hpasRuleResult.담보명_Out  = 담보명_Out
__hpasRuleResult.요율구분_Out  = 요율구분_Out
__hpasRuleResult.요율속성명_Out  = 요율속성명_Out
__hpasRuleResult.최대_Out  = 최대_Out
__hpasRuleResult.최저_Out  = 최저_Out
return RESULT( __hpasRuleResult); 
}