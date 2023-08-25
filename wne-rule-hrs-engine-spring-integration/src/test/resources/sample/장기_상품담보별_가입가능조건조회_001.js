var 장기_상품담보별_가입가능조건조회_001 = function (기준일자,보험종목코드,상품코드,담보코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 만기룰적용여부 : [],최대만연령 : [],최대보험연령 : [],최소만연령 : [],최소보험연령 : [] }
var 보험종목코드  = 보험종목코드
var 기준일자  = 기준일자
var 담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드))
var 상품코드  = 상품코드
var 최대보험연령 = []
var 최대만연령 = []
var 최소만연령 = []
var 만기룰적용여부 = []
var 최소보험연령 = []
var __TARGET_DATE__ = null
var 적용기준일자 = null
var 보종코드 = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [9401e960-5242-44e7-8476-c5dcb3d6b872_013526] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('9401e960-5242-44e7-8476-c5dcb3d6b872_013526');
 적용기준일자 = Date(LEFT(기준일자,4)+"-"+MID(기준일자,5,2)+"-"+MID(기준일자,7,2))

}
if(canFlowNext){
// [e7cd7cca-3427-49fd-9053-3dcffe8717d9_013527] Rule Call Start [장기_상품담보별_가입가능조건조회_RSL] 
_GET_GLOBAL('__hrs_flowNode_logger').push('e7cd7cca-3427-49fd-9053-3dcffe8717d9_013527');
 var _001_담보코드 = IS_EMPTY(담보코드) ? [] :JSON.parse(JSON.stringify(담보코드)) 
var _001_보험종목코드 = 보험종목코드 
var _001_상품코드 = 상품코드 
var _001_적용기준일자 = 적용기준일자 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_상품담보별_가입가능조건조회_RSL', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_적용기준일자,_001_보험종목코드,_001_상품코드,_001_담보코드", "return "+ __RULE_CALL_ID__ + "(_001_적용기준일자,_001_보험종목코드,_001_상품코드,_001_담보코드)"); 
var _001_rule_output = _f(_001_적용기준일자,_001_보험종목코드,_001_상품코드,_001_담보코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 만기룰적용여부 : [],최대만연령 : [],최대보험연령 : [],최소만연령 : [],최소보험연령 : [] }  } 
if(!IS_EMPTY(_001_rule_output.만기룰적용여부)){ 만기룰적용여부 = IS_EMPTY(_001_rule_output.만기룰적용여부) ? [] : JSON.parse(JSON.stringify(_001_rule_output.만기룰적용여부)) }  
if(!IS_EMPTY(_001_rule_output.최대만연령)){ 최대만연령 = IS_EMPTY(_001_rule_output.최대만연령) ? [] : JSON.parse(JSON.stringify(_001_rule_output.최대만연령)) }  
if(!IS_EMPTY(_001_rule_output.최대보험연령)){ 최대보험연령 = IS_EMPTY(_001_rule_output.최대보험연령) ? [] : JSON.parse(JSON.stringify(_001_rule_output.최대보험연령)) }  
if(!IS_EMPTY(_001_rule_output.최소만연령)){ 최소만연령 = IS_EMPTY(_001_rule_output.최소만연령) ? [] : JSON.parse(JSON.stringify(_001_rule_output.최소만연령)) }  
if(!IS_EMPTY(_001_rule_output.최소보험연령)){ 최소보험연령 = IS_EMPTY(_001_rule_output.최소보험연령) ? [] : JSON.parse(JSON.stringify(_001_rule_output.최소보험연령)) }  
// [e7cd7cca-3427-49fd-9053-3dcffe8717d9_013527] Rule Call End [장기_상품담보별_가입가능조건조회_RSL] 
}
__hpasRuleResult.만기룰적용여부  = IS_EMPTY(만기룰적용여부) ? [] : JSON.parse(JSON.stringify(만기룰적용여부))
__hpasRuleResult.최대만연령  = IS_EMPTY(최대만연령) ? [] : JSON.parse(JSON.stringify(최대만연령))
__hpasRuleResult.최대보험연령  = IS_EMPTY(최대보험연령) ? [] : JSON.parse(JSON.stringify(최대보험연령))
__hpasRuleResult.최소만연령  = IS_EMPTY(최소만연령) ? [] : JSON.parse(JSON.stringify(최소만연령))
__hpasRuleResult.최소보험연령  = IS_EMPTY(최소보험연령) ? [] : JSON.parse(JSON.stringify(최소보험연령))
return RESULT( __hpasRuleResult); 
}