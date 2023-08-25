var 일반_공통_입력요율범위체크_LOOP_001 = function (진동담보할인여부,소재지구분코드,운송중파손담보물건코드,요율,품목담보위험급수,추가속성코드,담보코드,상품코드,기계적사고담보품목코드,담보명_Out,요율_Out,요율속성명_Out,최대_Out,최저_Out,전체일부목적물구분코드,여행목적코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 담보명_Out : [],요율_Out : [],요율속성명_Out : [],최대_Out : [],최저_Out : [] }
var _진동담보할인여부  = IS_EMPTY(진동담보할인여부) ? [] : JSON.parse(JSON.stringify(진동담보할인여부)) 
var _소재지구분코드  = IS_EMPTY(소재지구분코드) ? [] : JSON.parse(JSON.stringify(소재지구분코드)) 
var _운송중파손담보물건코드  = IS_EMPTY(운송중파손담보물건코드) ? [] : JSON.parse(JSON.stringify(운송중파손담보물건코드)) 
var _요율  = IS_EMPTY(요율) ? [] : JSON.parse(JSON.stringify(요율)) 
var _품목담보위험급수  = IS_EMPTY(품목담보위험급수) ? [] : JSON.parse(JSON.stringify(품목담보위험급수)) 
var _추가속성코드  = IS_EMPTY(추가속성코드) ? [] : JSON.parse(JSON.stringify(추가속성코드)) 
var _담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드)) 
var _상품코드  = 상품코드 
var _기계적사고담보품목코드  = IS_EMPTY(기계적사고담보품목코드) ? [] : JSON.parse(JSON.stringify(기계적사고담보품목코드)) 
var _담보명_Out  = IS_EMPTY(담보명_Out) ? [] : JSON.parse(JSON.stringify(담보명_Out)) 
var _요율_Out  = IS_EMPTY(요율_Out) ? [] : JSON.parse(JSON.stringify(요율_Out)) 
var _요율속성명_Out  = IS_EMPTY(요율속성명_Out) ? [] : JSON.parse(JSON.stringify(요율속성명_Out)) 
var _최대_Out  = IS_EMPTY(최대_Out) ? [] : JSON.parse(JSON.stringify(최대_Out)) 
var _최저_Out  = IS_EMPTY(최저_Out) ? [] : JSON.parse(JSON.stringify(최저_Out)) 
var _전체일부목적물구분코드  = IS_EMPTY(전체일부목적물구분코드) ? [] : JSON.parse(JSON.stringify(전체일부목적물구분코드)) 
var _여행목적코드  = 여행목적코드 

var _LOOP_SIZE = Math.max( 1 , Array.isArray(_진동담보할인여부) ? _진동담보할인여부.length  : 0 , Array.isArray(_소재지구분코드) ? _소재지구분코드.length  : 0 , Array.isArray(_운송중파손담보물건코드) ? _운송중파손담보물건코드.length  : 0 , Array.isArray(_요율) ? _요율.length  : 0 , Array.isArray(_품목담보위험급수) ? _품목담보위험급수.length  : 0 , Array.isArray(_추가속성코드) ? _추가속성코드.length  : 0 , Array.isArray(_담보코드) ? _담보코드.length  : 0 , Array.isArray(_기계적사고담보품목코드) ? _기계적사고담보품목코드.length  : 0 , Array.isArray(_담보명_Out) ? _담보명_Out.length  : 0 , Array.isArray(_요율_Out) ? _요율_Out.length  : 0 , Array.isArray(_요율속성명_Out) ? _요율속성명_Out.length  : 0 , Array.isArray(_최대_Out) ? _최대_Out.length  : 0 , Array.isArray(_최저_Out) ? _최저_Out.length  : 0 , Array.isArray(_전체일부목적물구분코드) ? _전체일부목적물구분코드.length  : 0 ) 
var 기계적사고담보품목코드 = null
var 담보명_Out = []
var 담보코드 = null
var 상품코드 = null
var 소재지구분코드 = null
var 여행목적코드 = null
var 요율 = null
var 요율_Out = []
var 요율속성명_Out = []
var 운송중파손담보물건코드 = null
var 전체일부목적물구분코드 = null
var 진동담보할인여부 = null
var 최대_Out = []
var 최저_Out = []
var 추가속성코드 = null
var 품목담보위험급수 = null
var 대상여부 = null
var 임시_요율속성명_Out = null
var __TARGET_DATE__ = null
var __LIDX = null
var 임시_요율_Out = null
var 임시_최대_Out = null
var 임시_최저_Out = null
var 임시_담보명_Out = null
var __LSIZE = null
var __Incrementor
for (__Incrementor= 0; __Incrementor < _LOOP_SIZE; __Incrementor++){ 
기계적사고담보품목코드 = Array.isArray(_기계적사고담보품목코드) ? _기계적사고담보품목코드[__Incrementor] : _기계적사고담보품목코드
if( Array.isArray(_담보명_Out)) { 담보명_Out= [_담보명_Out[__Incrementor]] } else { 담보명_Out = [_담보명_Out] }
담보코드 = Array.isArray(_담보코드) ? _담보코드[__Incrementor] : _담보코드
상품코드 = Array.isArray(_상품코드) ? _상품코드[__Incrementor] : _상품코드
소재지구분코드 = Array.isArray(_소재지구분코드) ? _소재지구분코드[__Incrementor] : _소재지구분코드
여행목적코드 = Array.isArray(_여행목적코드) ? _여행목적코드[__Incrementor] : _여행목적코드
요율 = Array.isArray(_요율) ? _요율[__Incrementor] : _요율
if( Array.isArray(_요율_Out)) { 요율_Out= [_요율_Out[__Incrementor]] } else { 요율_Out = [_요율_Out] }
if( Array.isArray(_요율속성명_Out)) { 요율속성명_Out= [_요율속성명_Out[__Incrementor]] } else { 요율속성명_Out = [_요율속성명_Out] }
운송중파손담보물건코드 = Array.isArray(_운송중파손담보물건코드) ? _운송중파손담보물건코드[__Incrementor] : _운송중파손담보물건코드
전체일부목적물구분코드 = Array.isArray(_전체일부목적물구분코드) ? _전체일부목적물구분코드[__Incrementor] : _전체일부목적물구분코드
진동담보할인여부 = Array.isArray(_진동담보할인여부) ? _진동담보할인여부[__Incrementor] : _진동담보할인여부
if( Array.isArray(_최대_Out)) { 최대_Out= [_최대_Out[__Incrementor]] } else { 최대_Out = [_최대_Out] }
if( Array.isArray(_최저_Out)) { 최저_Out= [_최저_Out[__Incrementor]] } else { 최저_Out = [_최저_Out] }
추가속성코드 = Array.isArray(_추가속성코드) ? _추가속성코드[__Incrementor] : _추가속성코드
품목담보위험급수 = Array.isArray(_품목담보위험급수) ? _품목담보위험급수[__Incrementor] : _품목담보위험급수
if( Array.isArray(담보명_Out)) { __hpasRuleResult.담보명_Out = JSON.parse(JSON.stringify(담보명_Out))} else { __hpasRuleResult.담보명_Out[__Incrementor] = 담보명_Out } 
if( Array.isArray(요율_Out)) { __hpasRuleResult.요율_Out = JSON.parse(JSON.stringify(요율_Out))} else { __hpasRuleResult.요율_Out[__Incrementor] = 요율_Out } 
if( Array.isArray(요율속성명_Out)) { __hpasRuleResult.요율속성명_Out = JSON.parse(JSON.stringify(요율속성명_Out))} else { __hpasRuleResult.요율속성명_Out[__Incrementor] = 요율속성명_Out } 
if( Array.isArray(최대_Out)) { __hpasRuleResult.최대_Out = JSON.parse(JSON.stringify(최대_Out))} else { __hpasRuleResult.최대_Out[__Incrementor] = 최대_Out } 
if( Array.isArray(최저_Out)) { __hpasRuleResult.최저_Out = JSON.parse(JSON.stringify(최저_Out))} else { __hpasRuleResult.최저_Out[__Incrementor] = 최저_Out } 
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [f2f53bad-b08a-4bb3-a36f-8f5ab370d7fd_011523] Expression 
임시_담보명_Out = ""
임시_요율속성명_Out = ""
임시_요율_Out = 0.0
임시_최저_Out = 0.0
임시_최대_Out = 0.0

}
if(canFlowNext){
// [7906d896-6bc9-4f46-992c-a6c98e1ded6b_011516] Rule Call Start [일반_공통_입력요율범위체크대상여부조회] 
var _002_담보코드 = 담보코드 
var _002_상품코드 = 상품코드 
var _002_추가속성코드 = 추가속성코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_입력요율범위체크대상여부조회', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_002_상품코드,_002_담보코드,_002_추가속성코드", "return "+ __RULE_CALL_ID__ + "(_002_상품코드,_002_담보코드,_002_추가속성코드)"); 
var _002_rule_output = _f(_002_상품코드,_002_담보코드,_002_추가속성코드);
if( IS_EMPTY(_002_rule_output)){ _002_rule_output= { 대상여부 : null }  } 
if(!IS_EMPTY(_002_rule_output.대상여부)){ 대상여부 = _002_rule_output.대상여부 }  
// [7906d896-6bc9-4f46-992c-a6c98e1ded6b_011516] Rule Call End [일반_공통_입력요율범위체크대상여부조회] 
}
// 조건분기 변수 초기화 
var __cond_004 = 대상여부 == "1"
// 조건분기 변수 초기화 
var __cond_005 = !( 대상여부 == "1" ) && true
// 조건분기 값 할당 
canFlowNext = __cond_004
if(canFlowNext){
// [c09dc9c5-d93b-472b-b05d-b7e85f2d35aa_011518] Rule Call Start [일반_공통_입력요율범위체크표] 
var _004_기계적사고담보품목코드 = 기계적사고담보품목코드 
var _004_담보코드 = 담보코드 
var _004_상품코드 = 상품코드 
var _004_소재지구분코드 = 소재지구분코드 
var _004_여행목적코드 = 여행목적코드 
var _004_요율 = 요율 
var _004_운송중파손담보물건코드 = 운송중파손담보물건코드 
var _004_전체일부목적물구분코드 = 전체일부목적물구분코드 
var _004_진동담보할인여부 = 진동담보할인여부 
var _004_추가속성코드 = 추가속성코드 
var _004_품목담보위험급수 = 품목담보위험급수 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_입력요율범위체크표', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_004_상품코드,_004_담보코드,_004_추가속성코드,_004_소재지구분코드,_004_품목담보위험급수,_004_운송중파손담보물건코드,_004_기계적사고담보품목코드,_004_전체일부목적물구분코드,_004_진동담보할인여부,_004_여행목적코드,_004_요율", "return "+ __RULE_CALL_ID__ + "(_004_상품코드,_004_담보코드,_004_추가속성코드,_004_소재지구분코드,_004_품목담보위험급수,_004_운송중파손담보물건코드,_004_기계적사고담보품목코드,_004_전체일부목적물구분코드,_004_진동담보할인여부,_004_여행목적코드,_004_요율)"); 
var _004_rule_output = _f(_004_상품코드,_004_담보코드,_004_추가속성코드,_004_소재지구분코드,_004_품목담보위험급수,_004_운송중파손담보물건코드,_004_기계적사고담보품목코드,_004_전체일부목적물구분코드,_004_진동담보할인여부,_004_여행목적코드,_004_요율);
if( IS_EMPTY(_004_rule_output)){ _004_rule_output= { 임시_담보명_Out : null,임시_요율_Out : null,임시_요율속성명_Out : null,임시_최대_Out : null,임시_최저_Out : null }  } 
if(!IS_EMPTY(_004_rule_output.임시_담보명_Out)){ 임시_담보명_Out = _004_rule_output.임시_담보명_Out }  
if(!IS_EMPTY(_004_rule_output.임시_요율_Out)){ 임시_요율_Out = _004_rule_output.임시_요율_Out }  
if(!IS_EMPTY(_004_rule_output.임시_요율속성명_Out)){ 임시_요율속성명_Out = _004_rule_output.임시_요율속성명_Out }  
if(!IS_EMPTY(_004_rule_output.임시_최대_Out)){ 임시_최대_Out = _004_rule_output.임시_최대_Out }  
if(!IS_EMPTY(_004_rule_output.임시_최저_Out)){ 임시_최저_Out = _004_rule_output.임시_최저_Out }  
// [c09dc9c5-d93b-472b-b05d-b7e85f2d35aa_011518] Rule Call End [일반_공통_입력요율범위체크표] 
}
// join 대상변수 초기화  
var __join_004 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_005
if(canFlowNext){
// [cd5d34aa-034c-4c15-b728-c58ac7fdbdcb_011519] Expression 
null
}
// join 대상변수 초기화  
var __join_005 = canFlowNext
// 조건분기 변수 초기화 
var __cond_003 = LEN(임시_요율속성명_Out) > 0 && 임시_요율속성명_Out != "NULL"
// 조건분기 변수 초기화 
var __cond_000 = !( LEN(임시_요율속성명_Out) > 0 && 임시_요율속성명_Out != "NULL" ) && LEN(임시_요율속성명_Out) <= 0 || 임시_요율속성명_Out == "NULL"
// join 후 진행조건 값 할당 
canFlowNext = ( __join_004 ) || ( __join_005 )
// 조건분기 값 할당 
canFlowNext = __cond_003
if(canFlowNext){
// [ac1b53f5-b50f-40bd-a8ea-f1045d9bfd51_011517] Expression 
담보명_Out[담보명_Out.length] = 임시_담보명_Out
요율속성명_Out[요율속성명_Out.length] = 임시_요율속성명_Out
요율_Out[요율_Out.length] = 임시_요율_Out
최저_Out[최저_Out.length] = 임시_최저_Out
최대_Out[최대_Out.length] = 임시_최대_Out

}
// join 대상변수 초기화  
var __join_003 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_000
if(canFlowNext){
// [278e96af-bd0f-45e5-9d89-cd914a292ede_011514] Expression 
null
}
// join 대상변수 초기화  
var __join_000 = canFlowNext
if( Array.isArray(담보명_Out)) { __hpasRuleResult.담보명_Out = JSON.parse(JSON.stringify(담보명_Out))} else { __hpasRuleResult.담보명_Out[__Incrementor] = 담보명_Out } 
if( Array.isArray(요율_Out)) { __hpasRuleResult.요율_Out = JSON.parse(JSON.stringify(요율_Out))} else { __hpasRuleResult.요율_Out[__Incrementor] = 요율_Out } 
if( Array.isArray(요율속성명_Out)) { __hpasRuleResult.요율속성명_Out = JSON.parse(JSON.stringify(요율속성명_Out))} else { __hpasRuleResult.요율속성명_Out[__Incrementor] = 요율속성명_Out } 
if( Array.isArray(최대_Out)) { __hpasRuleResult.최대_Out = JSON.parse(JSON.stringify(최대_Out))} else { __hpasRuleResult.최대_Out[__Incrementor] = 최대_Out } 
if( Array.isArray(최저_Out)) { __hpasRuleResult.최저_Out = JSON.parse(JSON.stringify(최저_Out))} else { __hpasRuleResult.최저_Out[__Incrementor] = 최저_Out } 
} 
return RESULT( __hpasRuleResult); 
}