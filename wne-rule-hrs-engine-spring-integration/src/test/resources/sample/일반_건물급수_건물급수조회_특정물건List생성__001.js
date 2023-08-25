var 일반_건물급수_건물급수조회_특정물건List생성__001 = function (업종코드,목적물유형분류코드,물건구분코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 건물급수코드 : [] }
var __TARGET_DATE__ = null
var 건물급수코드 = []
var 목적물유형분류코드  = 목적물유형분류코드
var 물건구분코드  = 물건구분코드
var 업종코드  = 업종코드
var 임시_건물급수 = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [8cecc4d9-396a-4ddf-b630-5fbc1272df64_014903] Rule Call Start [일반_건물급수_건물급수조회(특정물건)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('8cecc4d9-396a-4ddf-b630-5fbc1272df64_014903');
 var _001_목적물유형분류코드 = 목적물유형분류코드 
var _001_물건구분코드 = 물건구분코드 
var _001_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(특정물건)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_목적물유형분류코드,_001_업종코드,_001_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_001_목적물유형분류코드,_001_업종코드,_001_물건구분코드)"); 
var _001_rule_output = _f(_001_목적물유형분류코드,_001_업종코드,_001_물건구분코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_001_rule_output.건물급수코드)){ 임시_건물급수 = _001_rule_output.건물급수코드 }  
// [8cecc4d9-396a-4ddf-b630-5fbc1272df64_014903] Rule Call End [일반_건물급수_건물급수조회(특정물건)] 
}
if(canFlowNext){
// [2bfd7548-cb78-41b4-b713-7567b3db2aff_014902] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('2bfd7548-cb78-41b4-b713-7567b3db2aff_014902');
 건물급수코드[0] = 임시_건물급수

}
__hpasRuleResult.건물급수코드  = IS_EMPTY(건물급수코드) ? [] : JSON.parse(JSON.stringify(건물급수코드))
return RESULT( __hpasRuleResult); 
}