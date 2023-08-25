var 일반_건물급수_영업요율계산_001 = function (건물급수코드,목적물유형코드,업종코드,물건구분코드,상품코드,재산종합복합구조여부){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 특정물건여부 : null,영업요율 : [],카네이션보험전환계수 : null }
var 건물급수코드  = IS_EMPTY(건물급수코드) ? [] : JSON.parse(JSON.stringify(건물급수코드))
var 목적물유형코드  = 목적물유형코드
var 물건구분코드  = 물건구분코드
var 상품코드  = 상품코드
var 업종코드  = 업종코드
var 영업요율 = []
var 재산종합복합구조여부  = 재산종합복합구조여부
var 카네이션보험전환계수 = null
var 특정물건여부 = null
var 룰상품코드 = null
var 순요율 = null
var 임차자화재적용요율 = null
var 예정손해율 = null
var __TARGET_DATE__ = null
var 카네이션보험여부 = null
// flow진행변수 초기화 
var canFlowNext = true 

// 조건분기 변수 초기화 
var __cond_001 = 물건구분코드 == '01'
// 조건분기 변수 초기화 
var __cond_005 = !( 물건구분코드 == '01' ) && 물건구분코드 == '02'
// 조건분기 변수 초기화 
var __cond_002 = !( 물건구분코드 == '01' ) && !( 물건구분코드 == '02' ) && 물건구분코드 == '03'
// 조건분기 값 할당 
canFlowNext = __cond_001
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('a61ecbfa-bd49-4ba8-8869-61b0414a35da_016104');
 }
if(canFlowNext){
// [620e02cf-5497-4910-94ae-ed66962f0b35_016101] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('620e02cf-5497-4910-94ae-ed66962f0b35_016101');
 룰상품코드 = 'FA00003001'

}
// join 대상변수 초기화  
var __join_001 = __cond_001
// 조건분기 값 할당 
canFlowNext = __cond_005
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('a61ecbfa-bd49-4ba8-8869-61b0414a35da_016104');
 }
if(canFlowNext){
// [bbe27f4a-f792-4306-8bcc-33865d3b7ebd_016105] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('bbe27f4a-f792-4306-8bcc-33865d3b7ebd_016105');
 룰상품코드 = 'FA00004001'

}
// join 대상변수 초기화  
var __join_005 = __cond_005
// 조건분기 값 할당 
canFlowNext = __cond_002
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('a61ecbfa-bd49-4ba8-8869-61b0414a35da_016104');
 }
if(canFlowNext){
// [6c558f3c-d5fe-4d53-a163-bd11fb787856_016102] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('6c558f3c-d5fe-4d53-a163-bd11fb787856_016102');
 룰상품코드 = 'FA00005001'

}
// join 대상변수 초기화  
var __join_002 = __cond_002
// join 후 진행조건 값 할당 
canFlowNext = ( __join_001 ) || ( __join_005 ) || ( __join_002 )
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('caec08dd-ab17-43a8-a2a1-37bf98d9f31e_016106');
 }
if(canFlowNext){
// [73f52143-e595-48a6-a331-e128a0dd3258_016103] Rule Call Start [일반_종합_카네이션보험전환계수조회] 
_GET_GLOBAL('__hrs_flowNode_logger').push('73f52143-e595-48a6-a331-e128a0dd3258_016103');
 var _003_룰상품코드 = 룰상품코드 
var _003_목적물유형코드 = 목적물유형코드 
var _003_상품코드 = 상품코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_종합_카네이션보험전환계수조회', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_003_목적물유형코드,_003_상품코드,_003_룰상품코드", "return "+ __RULE_CALL_ID__ + "(_003_목적물유형코드,_003_상품코드,_003_룰상품코드)"); 
var _003_rule_output = _f(_003_목적물유형코드,_003_상품코드,_003_룰상품코드);
if( IS_EMPTY(_003_rule_output)){ _003_rule_output= { 상품코드 : null,카네이션보험여부 : null,카네이션보험전환계수 : null }  } 
if(!IS_EMPTY(_003_rule_output.상품코드)){ 상품코드 = _003_rule_output.상품코드 }  
if(!IS_EMPTY(_003_rule_output.카네이션보험여부)){ 카네이션보험여부 = _003_rule_output.카네이션보험여부 }  
if(!IS_EMPTY(_003_rule_output.카네이션보험전환계수)){ 카네이션보험전환계수 = _003_rule_output.카네이션보험전환계수 }  
// [73f52143-e595-48a6-a331-e128a0dd3258_016103] Rule Call End [일반_종합_카네이션보험전환계수조회] 
}
if(canFlowNext){
// [d2dc81fb-0a3a-47c3-b5c6-5dfed31faadf_016107] Rule Call Start [일반_공통_타군화재보험사용시변수세팅] 
_GET_GLOBAL('__hrs_flowNode_logger').push('d2dc81fb-0a3a-47c3-b5c6-5dfed31faadf_016107');
 var _007_물건구분코드 = 물건구분코드 
var _007_상품코드 = 상품코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_타군화재보험사용시변수세팅', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_007_상품코드,_007_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_007_상품코드,_007_물건구분코드)"); 
var _007_rule_output = _f(_007_상품코드,_007_물건구분코드);
if( IS_EMPTY(_007_rule_output)){ _007_rule_output= { 상품코드 : null,임차자화재적용요율 : null }  } 
if(!IS_EMPTY(_007_rule_output.상품코드)){ 상품코드 = _007_rule_output.상품코드 }  
if(!IS_EMPTY(_007_rule_output.임차자화재적용요율)){ 임차자화재적용요율 = _007_rule_output.임차자화재적용요율 }  
// [d2dc81fb-0a3a-47c3-b5c6-5dfed31faadf_016107] Rule Call End [일반_공통_타군화재보험사용시변수세팅] 
}
if(canFlowNext){
// [29013e0a-a682-425e-8558-304744ecbc3b_016100] Rule Call Start [일반_공통_상품별예정손해율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('29013e0a-a682-425e-8558-304744ecbc3b_016100');
 var _000_상품코드 = 상품코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_상품별예정손해율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_상품코드", "return "+ __RULE_CALL_ID__ + "(_000_상품코드)"); 
var _000_rule_output = _f(_000_상품코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 예정손해율 : null }  } 
if(!IS_EMPTY(_000_rule_output.예정손해율)){ 예정손해율 = _000_rule_output.예정손해율 }  
// [29013e0a-a682-425e-8558-304744ecbc3b_016100] Rule Call End [일반_공통_상품별예정손해율] 
}
if(canFlowNext){
// [eeaf568f-a735-434a-a9b4-6fd59540dfea_016108] Rule Call Start [일반_건물급수_영업요율계산_LOOP] 
_GET_GLOBAL('__hrs_flowNode_logger').push('eeaf568f-a735-434a-a9b4-6fd59540dfea_016108');
 var _008_건물급수코드 = IS_EMPTY(건물급수코드) ? [] :JSON.parse(JSON.stringify(건물급수코드)) 
var _008_목적물유형코드 = 목적물유형코드 
var _008_물건구분코드 = 물건구분코드 
var _008_상품코드 = 상품코드 
var _008_업종코드 = 업종코드 
var _008_예정손해율 = 예정손해율 
var _008_재산종합복합구조여부 = 재산종합복합구조여부 
var _008_카네이션보험전환계수 = 카네이션보험전환계수 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_영업요율계산_LOOP', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_008_예정손해율,_008_목적물유형코드,_008_건물급수코드,_008_업종코드,_008_물건구분코드,_008_카네이션보험전환계수,_008_상품코드,_008_재산종합복합구조여부", "return "+ __RULE_CALL_ID__ + "(_008_예정손해율,_008_목적물유형코드,_008_건물급수코드,_008_업종코드,_008_물건구분코드,_008_카네이션보험전환계수,_008_상품코드,_008_재산종합복합구조여부)"); 
var _008_rule_output = _f(_008_예정손해율,_008_목적물유형코드,_008_건물급수코드,_008_업종코드,_008_물건구분코드,_008_카네이션보험전환계수,_008_상품코드,_008_재산종합복합구조여부);
if( IS_EMPTY(_008_rule_output)){ _008_rule_output= { 영업요율 : [],특정물건여부 : null }  } 
if(!IS_EMPTY(_008_rule_output.영업요율)){ 영업요율 = IS_EMPTY(_008_rule_output.영업요율) ? [] : JSON.parse(JSON.stringify(_008_rule_output.영업요율)) }  
if(!IS_EMPTY(_008_rule_output.특정물건여부)){ 특정물건여부 = _008_rule_output.특정물건여부 }  
// [eeaf568f-a735-434a-a9b4-6fd59540dfea_016108] Rule Call End [일반_건물급수_영업요율계산_LOOP] 
}
__hpasRuleResult.특정물건여부  = 특정물건여부
__hpasRuleResult.영업요율  = IS_EMPTY(영업요율) ? [] : JSON.parse(JSON.stringify(영업요율))
__hpasRuleResult.카네이션보험전환계수  = 카네이션보험전환계수
return RESULT( __hpasRuleResult); 
}