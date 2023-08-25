var 일반_공통_제휴사코드조회_001 = function (TO_BE코드,기관코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { TO_BE코드 : null,기관코드 : null,제휴사명 : null,제휴사코드 : null }
var TO_BE코드  = TO_BE코드
var 기관코드  = 기관코드
var 제휴사명 = null
var 제휴사코드 = null
var __TARGET_DATE__ = null
// flow진행변수 초기화 
var canFlowNext = true 

// 조건분기 변수 초기화 
var __cond_000 = 기관코드 != "" && 기관코드 != "NULL"
// 조건분기 변수 초기화 
var __cond_002 = !( 기관코드 != "" && 기관코드 != "NULL" ) && TO_BE코드 != "" && TO_BE코드 != "NULL"
// 조건분기 값 할당 
canFlowNext = __cond_000
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('64ef93ba-c9eb-46d8-a885-bad6a0584c03_011541');
 }
if(canFlowNext){
// [33455dfe-7e81-4c1d-bd11-48228902ec4b_011540] Rule Call Start [일반_공통_제휴사코드조회(기관코드기준)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('33455dfe-7e81-4c1d-bd11-48228902ec4b_011540');
 var _000_기관코드 = 기관코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_제휴사코드조회(기관코드기준)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_기관코드", "return "+ __RULE_CALL_ID__ + "(_000_기관코드)"); 
var _000_rule_output = _f(_000_기관코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { TO_BE코드 : null,제휴사명 : null,제휴사코드 : null }  } 
if(!IS_EMPTY(_000_rule_output.TO_BE코드)){ TO_BE코드 = _000_rule_output.TO_BE코드 }  
if(!IS_EMPTY(_000_rule_output.제휴사명)){ 제휴사명 = _000_rule_output.제휴사명 }  
if(!IS_EMPTY(_000_rule_output.제휴사코드)){ 제휴사코드 = _000_rule_output.제휴사코드 }  
// [33455dfe-7e81-4c1d-bd11-48228902ec4b_011540] Rule Call End [일반_공통_제휴사코드조회(기관코드기준)] 
}
// 조건분기 값 할당 
canFlowNext = __cond_002
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('64ef93ba-c9eb-46d8-a885-bad6a0584c03_011541');
 }
if(canFlowNext){
// [dd14fd70-54de-42ca-9327-ee2100329336_011542] Rule Call Start [일반_공통_제휴사코드조회(TO_BE코드기준)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('dd14fd70-54de-42ca-9327-ee2100329336_011542');
 var _002_TO_BE코드 = TO_BE코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_제휴사코드조회(TO_BE코드기준)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_002_TO_BE코드", "return "+ __RULE_CALL_ID__ + "(_002_TO_BE코드)"); 
var _002_rule_output = _f(_002_TO_BE코드);
if( IS_EMPTY(_002_rule_output)){ _002_rule_output= { 기관코드 : null,제휴사명 : null,제휴사코드 : null }  } 
if(!IS_EMPTY(_002_rule_output.기관코드)){ 기관코드 = _002_rule_output.기관코드 }  
if(!IS_EMPTY(_002_rule_output.제휴사명)){ 제휴사명 = _002_rule_output.제휴사명 }  
if(!IS_EMPTY(_002_rule_output.제휴사코드)){ 제휴사코드 = _002_rule_output.제휴사코드 }  
// [dd14fd70-54de-42ca-9327-ee2100329336_011542] Rule Call End [일반_공통_제휴사코드조회(TO_BE코드기준)] 
}
__hpasRuleResult.TO_BE코드  = TO_BE코드
__hpasRuleResult.기관코드  = 기관코드
__hpasRuleResult.제휴사명  = 제휴사명
__hpasRuleResult.제휴사코드  = 제휴사코드
return RESULT( __hpasRuleResult); 
}