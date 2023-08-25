function (목적물유형코드,상품코드,룰상품코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 상품코드 : null,상품코드 : null,카네이션보험여부 : null,카네이션보험여부 : null,카네이션보험전환계수 : null,카네이션보험전환계수 : null }
var 룰상품코드  = 룰상품코드
var 목적물유형코드  = 목적물유형코드
var 상품코드  = 상품코드
var 카네이션보험여부 = null
var 카네이션보험전환계수 = null
var __TARGET_DATE__ = null
var 원본상품코드 = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [72e5ba14-0567-4457-bfc5-e3da163a8e9a_017951] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('72e5ba14-0567-4457-bfc5-e3da163a8e9a_017951');
 카네이션보험전환계수=1

}
_GET_GLOBAL('__hrs_flowNode_logger').push('bd460abe-65ab-46e4-9328-728fff9a0830_017952');
 // 조건분기 변수 초기화 
var __cond_004 = 상품코드 == 'FA00051001' || 상품코드 == 'FA00051002' || 상품코드 == 'FA00051003' || 상품코드 == 'FA00051004'  || 상품코드 == 'FA00052010' || 상품코드 == 'FA00052011' || 상품코드 == 'FA00052012' || 상품코드 == 'FA00052017' || 상품코드 == 'FA00052015' || 상품코드 == 'FA00145001' || 상품코드 == 'FA00145002'
// 조건분기 변수 초기화 
var __cond_002 = !( 상품코드 == 'FA00051001' || 상품코드 == 'FA00051002' || 상품코드 == 'FA00051003' || 상품코드 == 'FA00051004'  || 상품코드 == 'FA00052010' || 상품코드 == 'FA00052011' || 상품코드 == 'FA00052012' || 상품코드 == 'FA00052017' || 상품코드 == 'FA00052015' || 상품코드 == 'FA00145001' || 상품코드 == 'FA00145002' ) && 상품코드 != 'FA00051001' && 상품코드 != 'FA00051002' && 상품코드 != 'FA00051003' && 상품코드 != 'FA00051004' && 상품코드 != 'FA00052010' && 상품코드 != 'FA00052011' && 상품코드 != 'FA00052012' && 상품코드 != 'FA00052017' && 상품코드 != 'FA00052015' && 상품코드 != 'FA00145001' && 상품코드 != 'FA00145002'
// 조건분기 값 할당 
canFlowNext = __cond_004
if(canFlowNext){
// [e0327fb0-88ac-47d1-8993-988e5a2f3ec5_017955] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('e0327fb0-88ac-47d1-8993-988e5a2f3ec5_017955');
 카네이션보험여부="1"

}
_GET_GLOBAL('__hrs_flowNode_logger').push('cd5ad33e-2f29-4092-94a4-a6e525f9641b_017954');
 // join 대상변수 초기화  
var __join_004 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_002
if(canFlowNext){
// [be875e16-dd53-4911-b08f-6ee4c96e16c4_017953] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('be875e16-dd53-4911-b08f-6ee4c96e16c4_017953');
 카네이션보험여부 = "0"

}
_GET_GLOBAL('__hrs_flowNode_logger').push('cd5ad33e-2f29-4092-94a4-a6e525f9641b_017954');
 // join 대상변수 초기화  
var __join_002 = canFlowNext
__hpasRuleResult.상품코드  = 상품코드
__hpasRuleResult.카네이션보험여부  = 카네이션보험여부
__hpasRuleResult.카네이션보험전환계수  = 카네이션보험전환계수
return RESULT( __hpasRuleResult); 
}