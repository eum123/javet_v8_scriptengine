var 일반_건물급수_바닥면적비율계산_LOOP_001 = function (평균요율,바닥면적,바닥면적합계,건물급수코드,열급바닥면적비율,우급바닥면적비율,영업요율){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 평균요율 : null,열급바닥면적비율 : null,우급바닥면적비율 : null,대표건물급수코드 : null,바닥면적비율 : [] }
var _평균요율  = 평균요율 
var _바닥면적  = IS_EMPTY(바닥면적) ? [] : JSON.parse(JSON.stringify(바닥면적)) 
var _바닥면적합계  = 바닥면적합계 
var _건물급수코드  = IS_EMPTY(건물급수코드) ? [] : JSON.parse(JSON.stringify(건물급수코드)) 
var _열급바닥면적비율  = 열급바닥면적비율 
var _우급바닥면적비율  = 우급바닥면적비율 
var _영업요율  = IS_EMPTY(영업요율) ? [] : JSON.parse(JSON.stringify(영업요율)) 

var _LOOP_SIZE = Math.max( 1 , Array.isArray(_바닥면적) ? _바닥면적.length  : 0 , Array.isArray(_건물급수코드) ? _건물급수코드.length  : 0 , Array.isArray(_영업요율) ? _영업요율.length  : 0 ) 
var __LIDX = null
var __LSIZE = null
var __TARGET_DATE__ = null
var 건물급수코드 = null
var 대표건물급수코드 = null
var 바닥면적 = null
var 바닥면적비율 = null
var 바닥면적합계 = null
var 열급바닥면적비율 = null
var 영업요율 = null
var 우급바닥면적비율 = null
var 평균요율 = null
var __Incrementor
for (__Incrementor= 0; __Incrementor < _LOOP_SIZE; __Incrementor++){ 
건물급수코드 = Array.isArray(_건물급수코드) ? _건물급수코드[__Incrementor] : _건물급수코드
바닥면적 = Array.isArray(_바닥면적) ? _바닥면적[__Incrementor] : _바닥면적
바닥면적합계 = Array.isArray(_바닥면적합계) ? _바닥면적합계[__Incrementor] : _바닥면적합계
열급바닥면적비율 = Array.isArray(_열급바닥면적비율) ? _열급바닥면적비율[__Incrementor] : _열급바닥면적비율
영업요율 = Array.isArray(_영업요율) ? _영업요율[__Incrementor] : _영업요율
우급바닥면적비율 = Array.isArray(_우급바닥면적비율) ? _우급바닥면적비율[__Incrementor] : _우급바닥면적비율
평균요율 = Array.isArray(_평균요율) ? _평균요율[__Incrementor] : _평균요율
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [e066bddc-6e2f-4f2d-9ac6-6c66370c44e8_014217] Rule Call Start [일반_건물급수_바닥면적비율계산] 
var _000___LIDX = __LIDX 
var _000___LSIZE = __LSIZE 
var _000_건물급수코드 = 건물급수코드 
var _000_바닥면적 = 바닥면적 
var _000_바닥면적합계 = 바닥면적합계 
var _000_열급바닥면적비율 = 열급바닥면적비율 
var _000_영업요율 = 영업요율 
var _000_우급바닥면적비율 = 우급바닥면적비율 
var _000_평균요율 = 평균요율 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_바닥면적비율계산', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000___LIDX,_000_영업요율,_000_평균요율,_000_건물급수코드,_000_바닥면적,_000_바닥면적합계,_000_우급바닥면적비율,_000_열급바닥면적비율,_000___LSIZE", "return "+ __RULE_CALL_ID__ + "(_000___LIDX,_000_영업요율,_000_평균요율,_000_건물급수코드,_000_바닥면적,_000_바닥면적합계,_000_우급바닥면적비율,_000_열급바닥면적비율,_000___LSIZE)"); 
var _000_rule_output = _f(_000___LIDX,_000_영업요율,_000_평균요율,_000_건물급수코드,_000_바닥면적,_000_바닥면적합계,_000_우급바닥면적비율,_000_열급바닥면적비율,_000___LSIZE);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 대표건물급수코드 : null,바닥면적비율 : null,열급바닥면적비율 : null,우급바닥면적비율 : null,평균요율 : null }  } 
if(!IS_EMPTY(_000_rule_output.대표건물급수코드)){ 대표건물급수코드 = _000_rule_output.대표건물급수코드 }  
if(!IS_EMPTY(_000_rule_output.바닥면적비율)){ 바닥면적비율 = _000_rule_output.바닥면적비율 }  
if(!IS_EMPTY(_000_rule_output.열급바닥면적비율)){ 열급바닥면적비율 = _000_rule_output.열급바닥면적비율 }  
if(!IS_EMPTY(_000_rule_output.우급바닥면적비율)){ 우급바닥면적비율 = _000_rule_output.우급바닥면적비율 }  
if(!IS_EMPTY(_000_rule_output.평균요율)){ 평균요율 = _000_rule_output.평균요율 }  
// [e066bddc-6e2f-4f2d-9ac6-6c66370c44e8_014217] Rule Call End [일반_건물급수_바닥면적비율계산] 
}
__hpasRuleResult.바닥면적비율[__Incrementor] = 바닥면적비율
} 
__hpasRuleResult.대표건물급수코드 = Array.isArray(대표건물급수코드) ? 대표건물급수코드[대표건물급수코드.length-1] : 대표건물급수코드
__hpasRuleResult.열급바닥면적비율 = Array.isArray(열급바닥면적비율) ? 열급바닥면적비율[열급바닥면적비율.length-1] : 열급바닥면적비율
__hpasRuleResult.우급바닥면적비율 = Array.isArray(우급바닥면적비율) ? 우급바닥면적비율[우급바닥면적비율.length-1] : 우급바닥면적비율
__hpasRuleResult.평균요율 = Array.isArray(평균요율) ? 평균요율[평균요율.length-1] : 평균요율
return RESULT( __hpasRuleResult); 
}