var 일반_건물급수_영업요율계산_LOOP_001 = function (예정손해율,목적물유형코드,건물급수코드,업종코드,물건구분코드,카네이션보험전환계수,상품코드,재산종합복합구조여부){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 특정물건여부 : null,영업요율 : [] }
var _예정손해율  = 예정손해율 
var _목적물유형코드  = 목적물유형코드 
var _건물급수코드  = IS_EMPTY(건물급수코드) ? [] : JSON.parse(JSON.stringify(건물급수코드)) 
var _업종코드  = 업종코드 
var _물건구분코드  = 물건구분코드 
var _카네이션보험전환계수  = 카네이션보험전환계수 
var _상품코드  = 상품코드 
var _재산종합복합구조여부  = 재산종합복합구조여부 

var 건물급수코드 = null
var 목적물유형코드 = null
var 물건구분코드 = null
var 상품코드 = null
var 업종코드 = null
var 영업요율 = null
var 예정손해율 = null
var 재산종합복합구조여부 = null
var 카네이션보험전환계수 = null
var 특정물건여부 = null
var 순요율 = null
var __TARGET_DATE__ = null
var __LSIZE = null
var __LIDX = null
__LSIZE = Math.max( 1 , Array.isArray(_건물급수코드) ? _건물급수코드.length  : 0 ) 
for (__LIDX= 0; __LIDX < __LSIZE; __LIDX++){ 
건물급수코드 = Array.isArray(_건물급수코드) ? _건물급수코드[__LIDX] : _건물급수코드
목적물유형코드 = Array.isArray(_목적물유형코드) ? _목적물유형코드[__LIDX] : _목적물유형코드
물건구분코드 = Array.isArray(_물건구분코드) ? _물건구분코드[__LIDX] : _물건구분코드
상품코드 = Array.isArray(_상품코드) ? _상품코드[__LIDX] : _상품코드
업종코드 = Array.isArray(_업종코드) ? _업종코드[__LIDX] : _업종코드
예정손해율 = Array.isArray(_예정손해율) ? _예정손해율[__LIDX] : _예정손해율
재산종합복합구조여부 = Array.isArray(_재산종합복합구조여부) ? _재산종합복합구조여부[__LIDX] : _재산종합복합구조여부
카네이션보험전환계수 = Array.isArray(_카네이션보험전환계수) ? _카네이션보험전환계수[__LIDX] : _카네이션보험전환계수
// flow진행변수 초기화 
var canFlowNext = true 

// 조건분기 변수 초기화 
var __cond_005 = true
// 조건분기 변수 초기화 
var __cond_000 = !( true ) && 재산종합복합구조여부 != "1" && (상품코드 == 'FA00052010' || 상품코드 == 'FA00052011' || 상품코드 == 'FA00052012')
// 조건분기 변수 초기화 
var __cond_003 = !( true ) && !( 재산종합복합구조여부 != "1" && (상품코드 == 'FA00052010' || 상품코드 == 'FA00052011' || 상품코드 == 'FA00052012') ) && 재산종합복합구조여부 == "1" && (상품코드 == 'FA00052010' || 상품코드 == 'FA00052011' || 상품코드 == 'FA00052012')
// 조건분기 값 할당 
canFlowNext = __cond_005
if(canFlowNext){
// [d68e66bf-ee55-4f77-9e0f-d6b07a434860_016517] Rule Call Start [일반_화재기본요율] 
var _005_건물급수코드 = 건물급수코드 
var _005_목적물유형코드 = 목적물유형코드 
var _005_물건구분코드 = 물건구분코드 
var _005_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_005_건물급수코드,_005_업종코드,_005_물건구분코드,_005_목적물유형코드", "return "+ __RULE_CALL_ID__ + "(_005_건물급수코드,_005_업종코드,_005_물건구분코드,_005_목적물유형코드)"); 
var _005_rule_output = _f(_005_건물급수코드,_005_업종코드,_005_물건구분코드,_005_목적물유형코드);
if( IS_EMPTY(_005_rule_output)){ _005_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_005_rule_output.순요율)){ 순요율 = _005_rule_output.순요율 }  
if(!IS_EMPTY(_005_rule_output.특정물건여부)){ 특정물건여부 = _005_rule_output.특정물건여부 }  
// [d68e66bf-ee55-4f77-9e0f-d6b07a434860_016517] Rule Call End [일반_화재기본요율] 
}
// join 대상변수 초기화  
var __join_005 = __cond_005
// 조건분기 값 할당 
canFlowNext = __cond_000
if(canFlowNext){
// [23460adc-a147-4b38-be0e-d56b0d65fc4b_016512] Rule Call Start [일반_화재_재산종합_기본요율] 
var _000_건물급수코드 = 건물급수코드 
var _000_목적물유형코드 = 목적물유형코드 
var _000_물건구분코드 = 물건구분코드 
var _000_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_건물급수코드,_000_업종코드,_000_물건구분코드,_000_목적물유형코드", "return "+ __RULE_CALL_ID__ + "(_000_건물급수코드,_000_업종코드,_000_물건구분코드,_000_목적물유형코드)"); 
var _000_rule_output = _f(_000_건물급수코드,_000_업종코드,_000_물건구분코드,_000_목적물유형코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_000_rule_output.순요율)){ 순요율 = _000_rule_output.순요율 }  
if(!IS_EMPTY(_000_rule_output.특정물건여부)){ 특정물건여부 = _000_rule_output.특정물건여부 }  
// [23460adc-a147-4b38-be0e-d56b0d65fc4b_016512] Rule Call End [일반_화재_재산종합_기본요율] 
}
// join 대상변수 초기화  
var __join_000 = __cond_000
// 조건분기 값 할당 
canFlowNext = __cond_003
if(canFlowNext){
// [8d1027cf-b12f-4351-8fbc-165f43c26cea_016515] Rule Call Start [일반_화재기본요율] 
var _003_건물급수코드 = 건물급수코드 
var _003_목적물유형코드 = 목적물유형코드 
var _003_물건구분코드 = 물건구분코드 
var _003_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_003_건물급수코드,_003_업종코드,_003_물건구분코드,_003_목적물유형코드", "return "+ __RULE_CALL_ID__ + "(_003_건물급수코드,_003_업종코드,_003_물건구분코드,_003_목적물유형코드)"); 
var _003_rule_output = _f(_003_건물급수코드,_003_업종코드,_003_물건구분코드,_003_목적물유형코드);
if( IS_EMPTY(_003_rule_output)){ _003_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_003_rule_output.순요율)){ 순요율 = _003_rule_output.순요율 }  
if(!IS_EMPTY(_003_rule_output.특정물건여부)){ 특정물건여부 = _003_rule_output.특정물건여부 }  
// [8d1027cf-b12f-4351-8fbc-165f43c26cea_016515] Rule Call End [일반_화재기본요율] 
}
// join 대상변수 초기화  
var __join_003 = __cond_003
// join 후 진행조건 값 할당 
canFlowNext = ( __join_005 ) || ( __join_000 ) || ( __join_003 )
if(canFlowNext){
// [5388d602-a022-4437-9ad9-63a60d6b8571_016513] Rule Call Start [일반_화재기본담보요율계산(영업요율)] 
var _001_물건구분코드 = 물건구분코드 
var _001_순요율 = 순요율 
var _001_업종코드 = 업종코드 
var _001_예정손해율 = 예정손해율 
var _001_카네이션보험전환계수 = 카네이션보험전환계수 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재기본담보요율계산(영업요율)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_순요율,_001_예정손해율,_001_업종코드,_001_물건구분코드,_001_카네이션보험전환계수", "return "+ __RULE_CALL_ID__ + "(_001_순요율,_001_예정손해율,_001_업종코드,_001_물건구분코드,_001_카네이션보험전환계수)"); 
var _001_rule_output = _f(_001_순요율,_001_예정손해율,_001_업종코드,_001_물건구분코드,_001_카네이션보험전환계수);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 영업요율 : null }  } 
if(!IS_EMPTY(_001_rule_output.영업요율)){ 영업요율 = _001_rule_output.영업요율 }  
// [5388d602-a022-4437-9ad9-63a60d6b8571_016513] Rule Call End [일반_화재기본담보요율계산(영업요율)] 
}
__hpasRuleResult.영업요율[__LIDX] = 영업요율
} 
__hpasRuleResult.특정물건여부 = Array.isArray(특정물건여부) ? 특정물건여부[특정물건여부.length-1] : 특정물건여부
return RESULT( __hpasRuleResult); 
}