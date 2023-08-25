var 일반_공통_입력요율범위체크_001 = function (진동담보할인여부,소재지구분코드,요율,품목담보위험급수,기계적사고담보품목코드,운송중파손담보물건코드,추가속성코드,담보코드,상품코드,전체일부목적물구분코드,계약시작일자,계약종료일자,여행목적코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 요율_Out : [],담보명_Out : [],요율속성명_Out : [],최저_Out : [],최대_Out : [] }
var 진동담보할인여부  = IS_EMPTY(진동담보할인여부) ? [] : JSON.parse(JSON.stringify(진동담보할인여부))
var 소재지구분코드  = IS_EMPTY(소재지구분코드) ? [] : JSON.parse(JSON.stringify(소재지구분코드))
var 계약시작일자  = 계약시작일자
var 운송중파손담보물건코드  = IS_EMPTY(운송중파손담보물건코드) ? [] : JSON.parse(JSON.stringify(운송중파손담보물건코드))
var 요율  = IS_EMPTY(요율) ? [] : JSON.parse(JSON.stringify(요율))
var 전체일부목적물구분코드  = IS_EMPTY(전체일부목적물구분코드) ? [] : JSON.parse(JSON.stringify(전체일부목적물구분코드))
var 품목담보위험급수  = IS_EMPTY(품목담보위험급수) ? [] : JSON.parse(JSON.stringify(품목담보위험급수))
var 추가속성코드  = IS_EMPTY(추가속성코드) ? [] : JSON.parse(JSON.stringify(추가속성코드))
var 계약종료일자  = 계약종료일자
var 담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드))
var 상품코드  = 상품코드
var 기계적사고담보품목코드  = IS_EMPTY(기계적사고담보품목코드) ? [] : JSON.parse(JSON.stringify(기계적사고담보품목코드))
var 요율_Out = []
var 담보명_Out = []
var 요율속성명_Out = []
var 최저_Out = []
var 최대_Out = []
var __TARGET_DATE__ = null
var 여행목적코드  = 여행목적코드
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [bc6dd789-25ee-4685-aba9-03558ea86c1f_011479] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('bc6dd789-25ee-4685-aba9-03558ea86c1f_011479');
 __TARGET_DATE__ = GET_DATE_STR_FORMAT(계약시작일자)

}
if(canFlowNext){
// [424db25e-3d56-4888-a396-59aa857c49d8_011478] Rule Call Start [일반_공통_입력요율범위체크_LOOP] 
_GET_GLOBAL('__hrs_flowNode_logger').push('424db25e-3d56-4888-a396-59aa857c49d8_011478');
 var _000_기계적사고담보품목코드 = IS_EMPTY(기계적사고담보품목코드) ? [] :JSON.parse(JSON.stringify(기계적사고담보품목코드)) 
var _000_담보명_Out = IS_EMPTY(담보명_Out) ? [] :JSON.parse(JSON.stringify(담보명_Out)) 
var _000_담보코드 = IS_EMPTY(담보코드) ? [] :JSON.parse(JSON.stringify(담보코드)) 
var _000_상품코드 = 상품코드 
var _000_소재지구분코드 = IS_EMPTY(소재지구분코드) ? [] :JSON.parse(JSON.stringify(소재지구분코드)) 
var _000_여행목적코드 = 여행목적코드 
var _000_요율 = IS_EMPTY(요율) ? [] :JSON.parse(JSON.stringify(요율)) 
var _000_요율_Out = IS_EMPTY(요율_Out) ? [] :JSON.parse(JSON.stringify(요율_Out)) 
var _000_요율속성명_Out = IS_EMPTY(요율속성명_Out) ? [] :JSON.parse(JSON.stringify(요율속성명_Out)) 
var _000_운송중파손담보물건코드 = IS_EMPTY(운송중파손담보물건코드) ? [] :JSON.parse(JSON.stringify(운송중파손담보물건코드)) 
var _000_전체일부목적물구분코드 = IS_EMPTY(전체일부목적물구분코드) ? [] :JSON.parse(JSON.stringify(전체일부목적물구분코드)) 
var _000_진동담보할인여부 = IS_EMPTY(진동담보할인여부) ? [] :JSON.parse(JSON.stringify(진동담보할인여부)) 
var _000_최대_Out = IS_EMPTY(최대_Out) ? [] :JSON.parse(JSON.stringify(최대_Out)) 
var _000_최저_Out = IS_EMPTY(최저_Out) ? [] :JSON.parse(JSON.stringify(최저_Out)) 
var _000_추가속성코드 = IS_EMPTY(추가속성코드) ? [] :JSON.parse(JSON.stringify(추가속성코드)) 
var _000_품목담보위험급수 = IS_EMPTY(품목담보위험급수) ? [] :JSON.parse(JSON.stringify(품목담보위험급수)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_입력요율범위체크_LOOP', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_진동담보할인여부,_000_소재지구분코드,_000_운송중파손담보물건코드,_000_요율,_000_품목담보위험급수,_000_추가속성코드,_000_담보코드,_000_상품코드,_000_기계적사고담보품목코드,_000_담보명_Out,_000_요율_Out,_000_요율속성명_Out,_000_최대_Out,_000_최저_Out,_000_전체일부목적물구분코드,_000_여행목적코드", "return "+ __RULE_CALL_ID__ + "(_000_진동담보할인여부,_000_소재지구분코드,_000_운송중파손담보물건코드,_000_요율,_000_품목담보위험급수,_000_추가속성코드,_000_담보코드,_000_상품코드,_000_기계적사고담보품목코드,_000_담보명_Out,_000_요율_Out,_000_요율속성명_Out,_000_최대_Out,_000_최저_Out,_000_전체일부목적물구분코드,_000_여행목적코드)"); 
var _000_rule_output = _f(_000_진동담보할인여부,_000_소재지구분코드,_000_운송중파손담보물건코드,_000_요율,_000_품목담보위험급수,_000_추가속성코드,_000_담보코드,_000_상품코드,_000_기계적사고담보품목코드,_000_담보명_Out,_000_요율_Out,_000_요율속성명_Out,_000_최대_Out,_000_최저_Out,_000_전체일부목적물구분코드,_000_여행목적코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 담보명_Out : [],요율_Out : [],요율속성명_Out : [],최대_Out : [],최저_Out : [] }  } 
if(!IS_EMPTY(_000_rule_output.담보명_Out)){ 담보명_Out = IS_EMPTY(_000_rule_output.담보명_Out) ? [] : JSON.parse(JSON.stringify(_000_rule_output.담보명_Out)) }  
if(!IS_EMPTY(_000_rule_output.요율_Out)){ 요율_Out = IS_EMPTY(_000_rule_output.요율_Out) ? [] : JSON.parse(JSON.stringify(_000_rule_output.요율_Out)) }  
if(!IS_EMPTY(_000_rule_output.요율속성명_Out)){ 요율속성명_Out = IS_EMPTY(_000_rule_output.요율속성명_Out) ? [] : JSON.parse(JSON.stringify(_000_rule_output.요율속성명_Out)) }  
if(!IS_EMPTY(_000_rule_output.최대_Out)){ 최대_Out = IS_EMPTY(_000_rule_output.최대_Out) ? [] : JSON.parse(JSON.stringify(_000_rule_output.최대_Out)) }  
if(!IS_EMPTY(_000_rule_output.최저_Out)){ 최저_Out = IS_EMPTY(_000_rule_output.최저_Out) ? [] : JSON.parse(JSON.stringify(_000_rule_output.최저_Out)) }  
// [424db25e-3d56-4888-a396-59aa857c49d8_011478] Rule Call End [일반_공통_입력요율범위체크_LOOP] 
}
__hpasRuleResult.담보명_Out  = IS_EMPTY(담보명_Out) ? [] : JSON.parse(JSON.stringify(담보명_Out))
__hpasRuleResult.요율_Out  = IS_EMPTY(요율_Out) ? [] : JSON.parse(JSON.stringify(요율_Out))
__hpasRuleResult.요율속성명_Out  = IS_EMPTY(요율속성명_Out) ? [] : JSON.parse(JSON.stringify(요율속성명_Out))
__hpasRuleResult.최대_Out  = IS_EMPTY(최대_Out) ? [] : JSON.parse(JSON.stringify(최대_Out))
__hpasRuleResult.최저_Out  = IS_EMPTY(최저_Out) ? [] : JSON.parse(JSON.stringify(최저_Out))
return RESULT( __hpasRuleResult); 
}