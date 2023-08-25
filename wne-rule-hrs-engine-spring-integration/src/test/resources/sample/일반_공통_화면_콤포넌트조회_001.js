var 일반_공통_화면_콤포넌트조회_001 = function (계약시작일자,상품코드,상위위험유형코드,위험유형코드,적용영역,상태코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 콤포넌트순번 : [],콤포넌트아이디 : [],행순번 : [],열순번 : [],길이 : [],행높이 : [],화면표시구성요소구분코드 : [],적용항목명 : [],적용항목 : [],적용코드 : [],속성코드 : [],수정상태코드 : [],필수입력여부 : [],화면CLASS정보 : [],기본값S : [] }
var 계약시작일자  = 계약시작일자
var 기본값S = []
var 길이 = []
var 상위위험유형코드  = 상위위험유형코드
var 상태코드  = 상태코드
var 상품코드  = 상품코드
var 속성코드 = []
var 수정상태코드 = []
var 열순번 = []
var 위험유형코드  = 위험유형코드
var 적용영역  = 적용영역
var 적용코드 = []
var 적용항목 = []
var 적용항목명 = []
var 콤포넌트순번 = []
var 콤포넌트아이디 = []
var 필수입력여부 = []
var 행높이 = []
var 행순번 = []
var 화면CLASS정보 = []
var 화면표시구성요소구분코드 = []
var IDX1 = null
var __TARGET_DATE__ = null
var TEMP_IDX = null
var 임시_수정상태코드 = []
var 임시_콤포넌트순번 = []
var 임시_콤포넌트아이디 = []
var 임시_행순번 = []
var 임시_열순번 = []
var 임시_길이 = []
var 임시_행높이 = []
var 임시_화면표시구성요소구분코드 = []
var 임시_적용항목 = []
var 임시_적용코드 = []
var 임시_속성코드 = []
var 임시_콤포넌트아이디_조회 = null
var IDX2 = null
var IDX3 = null
var IDX4 = null
var 임시_화면CLASS정보 = []
var 임시_필수입력여부 = []
var 임시_적용항목명 = []
var 기준일자 = null
var 임시_기본값 = []
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [56ac4c48_a968_470a_a7d9_31f24c42443c_016267] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('56ac4c48_a968_470a_a7d9_31f24c42443c_016267');
 __TARGET_DATE__ = GET_DATE_STR_FORMAT(계약시작일자)

}
if(canFlowNext){
// [dcabcac1-9ee2-4979-aab9-ec72c15817aa_016272] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('dcabcac1-9ee2-4979-aab9-ec72c15817aa_016272');
 기준일자 = GET_DATE_STR_FORMAT(계약시작일자)

}
if(canFlowNext){
// [fa889cb6_bc91_4877_a363_384210ff8287_016275] Rule Call Start [일반_공통_화면_상품별콤포넌트매핑] 
_GET_GLOBAL('__hrs_flowNode_logger').push('fa889cb6_bc91_4877_a363_384210ff8287_016275');
 var _013_기준일자 = 기준일자 
var _013_상위위험유형코드 = 상위위험유형코드 
var _013_상태코드 = 상태코드 
var _013_상품코드 = 상품코드 
var _013_위험유형코드 = 위험유형코드 
var _013_적용영역 = 적용영역 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_화면_상품별콤포넌트매핑', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_013_상품코드,_013_상위위험유형코드,_013_위험유형코드,_013_적용영역,_013_상태코드,_013_기준일자", "return "+ __RULE_CALL_ID__ + "(_013_상품코드,_013_상위위험유형코드,_013_위험유형코드,_013_적용영역,_013_상태코드,_013_기준일자)"); 
var _013_rule_output = _f(_013_상품코드,_013_상위위험유형코드,_013_위험유형코드,_013_적용영역,_013_상태코드,_013_기준일자);
if( IS_EMPTY(_013_rule_output)){ _013_rule_output= { 콤포넌트순번 : [],콤포넌트아이디 : [] }  } 
if( Array.isArray(_013_rule_output)) { 
var _013_rule_outputList = {콤포넌트순번 : [] ,콤포넌트아이디 : [] } 
var _013_rule_output_inc 
for (_013_rule_output_inc = 0; _013_rule_output_inc < _013_rule_output.length ; _013_rule_output_inc++){ 
_013_rule_outputList.콤포넌트순번.push(_013_rule_output[_013_rule_output_inc].콤포넌트순번) 
_013_rule_outputList.콤포넌트아이디.push(_013_rule_output[_013_rule_output_inc].콤포넌트아이디) 
} 
if(!IS_EMPTY(_013_rule_outputList.콤포넌트순번)){ 임시_콤포넌트순번 = JSON.parse(JSON.stringify(_013_rule_outputList.콤포넌트순번)) }  
if(!IS_EMPTY(_013_rule_outputList.콤포넌트아이디)){ 임시_콤포넌트아이디 = JSON.parse(JSON.stringify(_013_rule_outputList.콤포넌트아이디)) }  
} else { 
if(!IS_EMPTY(_013_rule_output.콤포넌트순번)){ 임시_콤포넌트순번 = IS_EMPTY(_013_rule_output.콤포넌트순번) ? [] : JSON.parse(JSON.stringify(_013_rule_output.콤포넌트순번)) }  
if(!IS_EMPTY(_013_rule_output.콤포넌트아이디)){ 임시_콤포넌트아이디 = IS_EMPTY(_013_rule_output.콤포넌트아이디) ? [] : JSON.parse(JSON.stringify(_013_rule_output.콤포넌트아이디)) }  
} 
// [fa889cb6_bc91_4877_a363_384210ff8287_016275] Rule Call End [일반_공통_화면_상품별콤포넌트매핑] 
}
// 조건분기 변수 초기화 
var __cond_003 = 임시_콤포넌트아이디.length == 0
// 조건분기 변수 초기화 
var __cond_011 = !( 임시_콤포넌트아이디.length == 0 ) && true
// 조건분기 값 할당 
canFlowNext = __cond_003
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('fede7881-60dc-490d-836a-eb98f3caf648_016276');
 }
if(canFlowNext){
// [4abc8914-0047-419f-8c3c-568702662146_016265] Rule Call Start [일반_공통_화면_위험유형별콤포넌트매핑] 
_GET_GLOBAL('__hrs_flowNode_logger').push('4abc8914-0047-419f-8c3c-568702662146_016265');
 var _003_기준일자 = 기준일자 
var _003_상위위험유형코드 = 상위위험유형코드 
var _003_상태코드 = 상태코드 
var _003_상품코드 = 상품코드 
var _003_위험유형코드 = 위험유형코드 
var _003_적용영역 = 적용영역 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_화면_위험유형별콤포넌트매핑', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_003_상품코드,_003_상위위험유형코드,_003_위험유형코드,_003_적용영역,_003_상태코드,_003_기준일자", "return "+ __RULE_CALL_ID__ + "(_003_상품코드,_003_상위위험유형코드,_003_위험유형코드,_003_적용영역,_003_상태코드,_003_기준일자)"); 
var _003_rule_output = _f(_003_상품코드,_003_상위위험유형코드,_003_위험유형코드,_003_적용영역,_003_상태코드,_003_기준일자);
if( IS_EMPTY(_003_rule_output)){ _003_rule_output= { 콤포넌트순번 : [],콤포넌트아이디 : [] }  } 
if( Array.isArray(_003_rule_output)) { 
var _003_rule_outputList = {콤포넌트순번 : [] ,콤포넌트아이디 : [] } 
var _003_rule_output_inc 
for (_003_rule_output_inc = 0; _003_rule_output_inc < _003_rule_output.length ; _003_rule_output_inc++){ 
_003_rule_outputList.콤포넌트순번.push(_003_rule_output[_003_rule_output_inc].콤포넌트순번) 
_003_rule_outputList.콤포넌트아이디.push(_003_rule_output[_003_rule_output_inc].콤포넌트아이디) 
} 
if(!IS_EMPTY(_003_rule_outputList.콤포넌트순번)){ 임시_콤포넌트순번 = JSON.parse(JSON.stringify(_003_rule_outputList.콤포넌트순번)) }  
if(!IS_EMPTY(_003_rule_outputList.콤포넌트아이디)){ 임시_콤포넌트아이디 = JSON.parse(JSON.stringify(_003_rule_outputList.콤포넌트아이디)) }  
} else { 
if(!IS_EMPTY(_003_rule_output.콤포넌트순번)){ 임시_콤포넌트순번 = IS_EMPTY(_003_rule_output.콤포넌트순번) ? [] : JSON.parse(JSON.stringify(_003_rule_output.콤포넌트순번)) }  
if(!IS_EMPTY(_003_rule_output.콤포넌트아이디)){ 임시_콤포넌트아이디 = IS_EMPTY(_003_rule_output.콤포넌트아이디) ? [] : JSON.parse(JSON.stringify(_003_rule_output.콤포넌트아이디)) }  
} 
// [4abc8914-0047-419f-8c3c-568702662146_016265] Rule Call End [일반_공통_화면_위험유형별콤포넌트매핑] 
}
// join 대상변수 초기화  
var __join_003 = __cond_003
// 조건분기 값 할당 
canFlowNext = __cond_011
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('fede7881-60dc-490d-836a-eb98f3caf648_016276');
 }
if(canFlowNext){
// [e8116ed6-d9a9-452b-a5d6-15565c86e0c0_016273] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('e8116ed6-d9a9-452b-a5d6-15565c86e0c0_016273');
 
}
// join 대상변수 초기화  
var __join_011 = __cond_011
// join 후 진행조건 값 할당 
canFlowNext = ( __join_003 ) || ( __join_011 )
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('6cfb811b-0f94-48bb-ad0b-ac16cba888ef_016268');
 }
if(canFlowNext){
// [8169c82d-1a8c-4a00-bb12-d9ed09ebdaa8_016269] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('8169c82d-1a8c-4a00-bb12-d9ed09ebdaa8_016269');
 IDX1 = 0
IDX2 = 0
IDX3 = 0
IDX4 = 0

}
if(canFlowNext){
}
__hpasRuleResult.콤포넌트순번  = IS_EMPTY(콤포넌트순번) ? [] : JSON.parse(JSON.stringify(콤포넌트순번))
__hpasRuleResult.콤포넌트아이디  = IS_EMPTY(콤포넌트아이디) ? [] : JSON.parse(JSON.stringify(콤포넌트아이디))
__hpasRuleResult.행순번  = IS_EMPTY(행순번) ? [] : JSON.parse(JSON.stringify(행순번))
__hpasRuleResult.열순번  = IS_EMPTY(열순번) ? [] : JSON.parse(JSON.stringify(열순번))
__hpasRuleResult.길이  = IS_EMPTY(길이) ? [] : JSON.parse(JSON.stringify(길이))
__hpasRuleResult.행높이  = IS_EMPTY(행높이) ? [] : JSON.parse(JSON.stringify(행높이))
__hpasRuleResult.화면표시구성요소구분코드  = IS_EMPTY(화면표시구성요소구분코드) ? [] : JSON.parse(JSON.stringify(화면표시구성요소구분코드))
__hpasRuleResult.적용항목명  = IS_EMPTY(적용항목명) ? [] : JSON.parse(JSON.stringify(적용항목명))
__hpasRuleResult.적용항목  = IS_EMPTY(적용항목) ? [] : JSON.parse(JSON.stringify(적용항목))
__hpasRuleResult.적용코드  = IS_EMPTY(적용코드) ? [] : JSON.parse(JSON.stringify(적용코드))
__hpasRuleResult.속성코드  = IS_EMPTY(속성코드) ? [] : JSON.parse(JSON.stringify(속성코드))
__hpasRuleResult.수정상태코드  = IS_EMPTY(수정상태코드) ? [] : JSON.parse(JSON.stringify(수정상태코드))
__hpasRuleResult.필수입력여부  = IS_EMPTY(필수입력여부) ? [] : JSON.parse(JSON.stringify(필수입력여부))
__hpasRuleResult.화면CLASS정보  = IS_EMPTY(화면CLASS정보) ? [] : JSON.parse(JSON.stringify(화면CLASS정보))
__hpasRuleResult.기본값S  = IS_EMPTY(기본값S) ? [] : JSON.parse(JSON.stringify(기본값S))
return RESULT( __hpasRuleResult); 
}