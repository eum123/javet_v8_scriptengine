var 일반_건물급수_면적단위변환_LOOP_001 = function (면적단위코드,바닥면적,바닥면적합계){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 면적단위코드 : [],바닥면적 : [],바닥면적합계 : null }
var _면적단위코드  = IS_EMPTY(면적단위코드) ? [] : JSON.parse(JSON.stringify(면적단위코드)) 
var _바닥면적  = IS_EMPTY(바닥면적) ? [] : JSON.parse(JSON.stringify(바닥면적)) 
var _바닥면적합계  = 바닥면적합계 

var _LOOP_SIZE = Math.max( 1 , Array.isArray(_면적단위코드) ? _면적단위코드.length  : 0 , Array.isArray(_바닥면적) ? _바닥면적.length  : 0 ) 
var __LIDX = null
var __LSIZE = null
var __TARGET_DATE__ = null
var 면적단위코드 = null
var 바닥면적 = null
var 바닥면적합계 = null
var __Incrementor
for (__Incrementor= 0; __Incrementor < _LOOP_SIZE; __Incrementor++){ 
면적단위코드 = Array.isArray(_면적단위코드) ? _면적단위코드[__Incrementor] : _면적단위코드
바닥면적 = Array.isArray(_바닥면적) ? _바닥면적[__Incrementor] : _바닥면적
바닥면적합계 = Array.isArray(_바닥면적합계) ? _바닥면적합계[__Incrementor] : _바닥면적합계
__hpasRuleResult.면적단위코드[__Incrementor] = 면적단위코드
__hpasRuleResult.바닥면적[__Incrementor] = 바닥면적
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [266fcdb3-1708-4e35-8ad2-28c310cf93df_014215] Rule Call Start [일반_건물급수_면적단위변환] 
var _000___LIDX = __LIDX 
var _000_면적단위코드 = 면적단위코드 
var _000_바닥면적 = 바닥면적 
var _000_바닥면적합계 = 바닥면적합계 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_면적단위변환', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000___LIDX,_000_바닥면적,_000_면적단위코드,_000_바닥면적합계", "return "+ __RULE_CALL_ID__ + "(_000___LIDX,_000_바닥면적,_000_면적단위코드,_000_바닥면적합계)"); 
var _000_rule_output = _f(_000___LIDX,_000_바닥면적,_000_면적단위코드,_000_바닥면적합계);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 면적단위코드 : null,바닥면적 : null,바닥면적합계 : null }  } 
if(!IS_EMPTY(_000_rule_output.면적단위코드)){ 면적단위코드 = _000_rule_output.면적단위코드 }  
if(!IS_EMPTY(_000_rule_output.바닥면적)){ 바닥면적 = _000_rule_output.바닥면적 }  
if(!IS_EMPTY(_000_rule_output.바닥면적합계)){ 바닥면적합계 = _000_rule_output.바닥면적합계 }  
// [266fcdb3-1708-4e35-8ad2-28c310cf93df_014215] Rule Call End [일반_건물급수_면적단위변환] 
}
__hpasRuleResult.면적단위코드[__Incrementor] = 면적단위코드
__hpasRuleResult.바닥면적[__Incrementor] = 바닥면적
} 
__hpasRuleResult.바닥면적합계 = Array.isArray(바닥면적합계) ? 바닥면적합계[바닥면적합계.length-1] : 바닥면적합계
return RESULT( __hpasRuleResult); 
}