var 장기_보험종기_001 = function (만기,주민등록번호,만기구분코드,기준일자,연령산출기준구분코드,담보코드,임신경과주){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 보험종기 : null,보험종료일자 : null,보험기간 : null }
var 기준일자  = 기준일자
var 담보코드  = 담보코드
var 만기  = 만기
var 만기구분코드  = 만기구분코드
var 보험기간 = null
var 보험종기 = null
var 보험종료일자 = null
var 연령산출기준구분코드  = 연령산출기준구분코드
var 임신경과주  = 임신경과주
var 주민등록번호  = 주민등록번호
var 성별구분 = null
var 보험연령 = null
var 출산예정일수 = null
var 연령 = null
var 만연령 = null
var 임신경과주기준일자 = null
var 만기코드 = []
var 납입기간코드 = []
var 출산예정일 = null
var 생일 = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [24983a0d-cab1-4a10-a965-bfe3d3255167_018525] Rule Call Start [장기_온라인_연령계산] 
_GET_GLOBAL('__hrs_flowNode_logger').push('24983a0d-cab1-4a10-a965-bfe3d3255167_018525');
 var _001_기준일자 = 기준일자 
var _001_연령산출기준구분코드 = 연령산출기준구분코드 
var _001_주민등록번호 = 주민등록번호 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_온라인_연령계산', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_기준일자,_001_주민등록번호,_001_연령산출기준구분코드", "return "+ __RULE_CALL_ID__ + "(_001_기준일자,_001_주민등록번호,_001_연령산출기준구분코드)"); 
var _001_rule_output = _f(_001_기준일자,_001_주민등록번호,_001_연령산출기준구분코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 만연령 : null,보험연령 : null,생일 : null,연령 : null }  } 
if(!IS_EMPTY(_001_rule_output.만연령)){ 만연령 = _001_rule_output.만연령 }  
if(!IS_EMPTY(_001_rule_output.보험연령)){ 보험연령 = _001_rule_output.보험연령 }  
if(!IS_EMPTY(_001_rule_output.생일)){ 생일 = _001_rule_output.생일 }  
if(!IS_EMPTY(_001_rule_output.연령)){ 연령 = _001_rule_output.연령 }  
// [24983a0d-cab1-4a10-a965-bfe3d3255167_018525] Rule Call End [장기_온라인_연령계산] 
}
// 조건분기 변수 초기화 
var __cond_004 = 담보코드=="CLA00258" || 담보코드=="CLA00379" || 담보코드=="CLA00279" || 담보코드=="CLA00381" || 담보코드=="CLA01045" || 담보코드=="CLA01046" || 담보코드=="CLA01047" || 담보코드=="CLA01048" || 담보코드=="CLA02237" || 담보코드=="CLA02238" || 담보코드=="CLA02236" || 담보코드=="CLA02239" || 담보코드=="CLA01135" || 담보코드=="CLA01054" || 담보코드=="CLA01056"
// 조건분기 변수 초기화 
var __cond_002 = !( 담보코드=="CLA00258" || 담보코드=="CLA00379" || 담보코드=="CLA00279" || 담보코드=="CLA00381" || 담보코드=="CLA01045" || 담보코드=="CLA01046" || 담보코드=="CLA01047" || 담보코드=="CLA01048" || 담보코드=="CLA02237" || 담보코드=="CLA02238" || 담보코드=="CLA02236" || 담보코드=="CLA02239" || 담보코드=="CLA01135" || 담보코드=="CLA01054" || 담보코드=="CLA01056" ) && NOT(담보코드=="CLA00258" || 담보코드=="CLA00379" || 담보코드=="CLA00279" || 담보코드=="CLA00381" || 담보코드=="CLA01045" || 담보코드=="CLA01046" || 담보코드=="CLA01047" || 담보코드=="CLA01048" || 담보코드=="CLA02237" || 담보코드=="CLA02238" || 담보코드=="CLA02236" || 담보코드=="CLA02239" || 담보코드=="CLA01135" || 담보코드=="CLA01054" || 담보코드=="CLA01056")
// 조건분기 값 할당 
canFlowNext = __cond_004
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('701adabe-1631-435b-a49f-55393459428f_018527');
 }
if(canFlowNext){
// [a951d6c7-b99c-4f62-9cc4-fdfb4b3c05e6_018528] Rule Call Start [장기_보험기간월수계산] 
_GET_GLOBAL('__hrs_flowNode_logger').push('a951d6c7-b99c-4f62-9cc4-fdfb4b3c05e6_018528');
 var _004_기준일자 = 기준일자 
var _004_담보코드 = 담보코드 
var _004_생일 = 생일 
var _004_임신경과주 = 임신경과주 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_보험기간월수계산', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_004_담보코드,_004_임신경과주,_004_생일,_004_기준일자", "return "+ __RULE_CALL_ID__ + "(_004_담보코드,_004_임신경과주,_004_생일,_004_기준일자)"); 
var _004_rule_output = _f(_004_담보코드,_004_임신경과주,_004_생일,_004_기준일자);
if( IS_EMPTY(_004_rule_output)){ _004_rule_output= { 보험기간개월수 : null,보험종료일자 : null }  } 
if(!IS_EMPTY(_004_rule_output.보험기간개월수)){ 보험기간 = _004_rule_output.보험기간개월수 }  
if(!IS_EMPTY(_004_rule_output.보험종료일자)){ 보험종료일자 = _004_rule_output.보험종료일자 }  
// [a951d6c7-b99c-4f62-9cc4-fdfb4b3c05e6_018528] Rule Call End [장기_보험기간월수계산] 
}
if(canFlowNext){
// [0e5c156a-07c9-49dd-a081-e53e1fe0041b_018524] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('0e5c156a-07c9-49dd-a081-e53e1fe0041b_018524');
 보험종기 = Date(보험종료일자)

}
// 조건분기 값 할당 
canFlowNext = __cond_002
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('701adabe-1631-435b-a49f-55393459428f_018527');
 }
if(canFlowNext){
// [3e1cf113-6ed1-40e3-9e52-ca066b8fc454_018526] Rule Call Start [장기_보험종기계산] 
_GET_GLOBAL('__hrs_flowNode_logger').push('3e1cf113-6ed1-40e3-9e52-ca066b8fc454_018526');
 var _002_기준일자 = 기준일자 
var _002_만기 = 만기 
var _002_만기구분코드 = 만기구분코드 
var _002_연령 = 연령 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_보험종기계산', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_002_기준일자,_002_만기구분코드,_002_만기,_002_연령", "return "+ __RULE_CALL_ID__ + "(_002_기준일자,_002_만기구분코드,_002_만기,_002_연령)"); 
var _002_rule_output = _f(_002_기준일자,_002_만기구분코드,_002_만기,_002_연령);
if( IS_EMPTY(_002_rule_output)){ _002_rule_output= { 보험기간 : null,보험종기 : null,보험종료일자 : null }  } 
if(!IS_EMPTY(_002_rule_output.보험기간)){ 보험기간 = _002_rule_output.보험기간 }  
if(!IS_EMPTY(_002_rule_output.보험종기)){ 보험종기 = _002_rule_output.보험종기 }  
if(!IS_EMPTY(_002_rule_output.보험종료일자)){ 보험종료일자 = _002_rule_output.보험종료일자 }  
// [3e1cf113-6ed1-40e3-9e52-ca066b8fc454_018526] Rule Call End [장기_보험종기계산] 
}
__hpasRuleResult.보험기간  = 보험기간
__hpasRuleResult.보험종기  = 보험종기
__hpasRuleResult.보험종료일자  = 보험종료일자
return RESULT( __hpasRuleResult); 
}