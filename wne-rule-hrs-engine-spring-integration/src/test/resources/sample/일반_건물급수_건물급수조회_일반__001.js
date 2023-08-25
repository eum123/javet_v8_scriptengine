var 일반_건물급수_건물급수조회_일반__001 = function (기둥코드,벽코드,업종코드,목적물유형분류코드,지붕코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 건물급수코드 : null }
var __TARGET_DATE__ = null
var 건물급수코드 = null
var 기둥구조구분 = null
var 기둥코드  = 기둥코드
var 목적물유형분류코드  = 목적물유형분류코드
var 벽구조구분 = null
var 벽코드  = 벽코드
var 업종코드  = 업종코드
var 지붕구조구분 = null
var 지붕코드  = 지붕코드
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [f6f211ce-0aee-4fe1-aa35-0836146d8875_014921] Rule Call Start [일반_건물급수_구조구분조회(기둥)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('f6f211ce-0aee-4fe1-aa35-0836146d8875_014921');
 var _012_기둥코드 = 기둥코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_구조구분조회(기둥)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_012_기둥코드", "return "+ __RULE_CALL_ID__ + "(_012_기둥코드)"); 
var _012_rule_output = _f(_012_기둥코드);
if( IS_EMPTY(_012_rule_output)){ _012_rule_output= { 기둥구조구분 : null }  } 
if(!IS_EMPTY(_012_rule_output.기둥구조구분)){ 기둥구조구분 = _012_rule_output.기둥구조구분 }  
// [f6f211ce-0aee-4fe1-aa35-0836146d8875_014921] Rule Call End [일반_건물급수_구조구분조회(기둥)] 
}
// join 대상변수 초기화  
var __join_012 = canFlowNext
if(canFlowNext){
// [c3b61be3-45f8-4512-9235-e4f0ffd7ec16_014920] Rule Call Start [일반_건물급수_구조구분조회(벽)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('c3b61be3-45f8-4512-9235-e4f0ffd7ec16_014920');
 var _011_벽코드 = 벽코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_구조구분조회(벽)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_011_벽코드", "return "+ __RULE_CALL_ID__ + "(_011_벽코드)"); 
var _011_rule_output = _f(_011_벽코드);
if( IS_EMPTY(_011_rule_output)){ _011_rule_output= { 벽구조구분 : null }  } 
if(!IS_EMPTY(_011_rule_output.벽구조구분)){ 벽구조구분 = _011_rule_output.벽구조구분 }  
// [c3b61be3-45f8-4512-9235-e4f0ffd7ec16_014920] Rule Call End [일반_건물급수_구조구분조회(벽)] 
}
// join 대상변수 초기화  
var __join_011 = canFlowNext
if(canFlowNext){
// [247b462e-8406-4979-88ca-c05a5b220340_014910] Rule Call Start [일반_건물급수_구조구분조회(지붕)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('247b462e-8406-4979-88ca-c05a5b220340_014910');
 var _001_지붕코드 = 지붕코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_구조구분조회(지붕)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_지붕코드", "return "+ __RULE_CALL_ID__ + "(_001_지붕코드)"); 
var _001_rule_output = _f(_001_지붕코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 지붕구조구분 : null }  } 
if(!IS_EMPTY(_001_rule_output.지붕구조구분)){ 지붕구조구분 = _001_rule_output.지붕구조구분 }  
// [247b462e-8406-4979-88ca-c05a5b220340_014910] Rule Call End [일반_건물급수_구조구분조회(지붕)] 
}
// join 대상변수 초기화  
var __join_001 = canFlowNext
// 조건분기 변수 초기화 
var __cond_002 = 목적물유형분류코드 != "02"
// 조건분기 변수 초기화 
var __cond_004 = !( 목적물유형분류코드 != "02" ) && 목적물유형분류코드 == "02"
// join 후 진행조건 값 할당 
canFlowNext = ( __join_012 ) || ( __join_011 ) || ( __join_001 )
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('87ab944b-89ab-42bf-86ba-000a4ef572a1_014915');
 }
// 조건분기 값 할당 
canFlowNext = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_002
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('4e933b43-ecf7-4a71-aada-b3b64e5a6c54_014912');
 }
if(canFlowNext){
// [49e6828d-5bbd-404b-a865-e2a31acf2e9e_014911] Rule Call Start [일반_건물급수_건물급수조회(일반형태건물)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('49e6828d-5bbd-404b-a865-e2a31acf2e9e_014911');
 var _002_기둥구조구분 = 기둥구조구분 
var _002_벽구조구분 = 벽구조구분 
var _002_지붕구조구분 = 지붕구조구분 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(일반형태건물)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_002_기둥구조구분,_002_지붕구조구분,_002_벽구조구분", "return "+ __RULE_CALL_ID__ + "(_002_기둥구조구분,_002_지붕구조구분,_002_벽구조구분)"); 
var _002_rule_output = _f(_002_기둥구조구분,_002_지붕구조구분,_002_벽구조구분);
if( IS_EMPTY(_002_rule_output)){ _002_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_002_rule_output.건물급수코드)){ 건물급수코드 = _002_rule_output.건물급수코드 }  
// [49e6828d-5bbd-404b-a865-e2a31acf2e9e_014911] Rule Call End [일반_건물급수_건물급수조회(일반형태건물)] 
}
// 조건분기 변수 초기화 
var __cond_005 = 목적물유형분류코드 == "08"
// 조건분기 변수 초기화 
var __cond_007 = !( 목적물유형분류코드 == "08" ) && 목적물유형분류코드 != "08"
// 조건분기 값 할당 
canFlowNext = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_002 && __cond_005
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('8ef02b67-e01e-4ff7-8822-5df8c6c928d9_014917');
 }
if(canFlowNext){
// [7f78bf25-d666-42a2-8d09-81524cefcaa2_014914] Rule Call Start [일반_건물급수_건물급수조회(건축중인건물)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('7f78bf25-d666-42a2-8d09-81524cefcaa2_014914');
 var _005_건물급수코드 = 건물급수코드 
var _005_목적물유형분류코드 = 목적물유형분류코드 
var _005_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(건축중인건물)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_005_목적물유형분류코드,_005_업종코드,_005_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_005_목적물유형분류코드,_005_업종코드,_005_건물급수코드)"); 
var _005_rule_output = _f(_005_목적물유형분류코드,_005_업종코드,_005_건물급수코드);
if( IS_EMPTY(_005_rule_output)){ _005_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_005_rule_output.건물급수코드)){ 건물급수코드 = _005_rule_output.건물급수코드 }  
// [7f78bf25-d666-42a2-8d09-81524cefcaa2_014914] Rule Call End [일반_건물급수_건물급수조회(건축중인건물)] 
}
// join 대상변수 초기화  
var __join_005 = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_002 && __cond_005
// 조건분기 값 할당 
canFlowNext = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_002 && __cond_007
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('8ef02b67-e01e-4ff7-8822-5df8c6c928d9_014917');
 }
if(canFlowNext){
// [8c45b580-71fd-4460-b054-cb12ee2688e3_014916] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('8c45b580-71fd-4460-b054-cb12ee2688e3_014916');
 
}
// join 대상변수 초기화  
var __join_007 = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_002 && __cond_007
// join 후 진행조건 값 할당 
canFlowNext = ( __join_005 ) || ( __join_007 )
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('b182d17c-46c4-47e3-b9e8-0bdd1b0f6285_014918');
 }
// join 대상변수 초기화  
var __join_009 = (( __join_005 ) || ( __join_007 ))
// 조건분기 값 할당 
canFlowNext = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_004
 if(canFlowNext){_GET_GLOBAL('__hrs_flowNode_logger').push('4e933b43-ecf7-4a71-aada-b3b64e5a6c54_014912');
 }
if(canFlowNext){
// [55cbe3a5-e8fa-4004-a2a5-c5429b80761d_014913] Rule Call Start [일반_건물급수_건물급수조회(무벽건물)] 
_GET_GLOBAL('__hrs_flowNode_logger').push('55cbe3a5-e8fa-4004-a2a5-c5429b80761d_014913');
 var _004_기둥구조구분 = 기둥구조구분 
var _004_벽구조구분 = 벽구조구분 
var _004_지붕구조구분 = 지붕구조구분 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(무벽건물)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_004_기둥구조구분,_004_지붕구조구분,_004_벽구조구분", "return "+ __RULE_CALL_ID__ + "(_004_기둥구조구분,_004_지붕구조구분,_004_벽구조구분)"); 
var _004_rule_output = _f(_004_기둥구조구분,_004_지붕구조구분,_004_벽구조구분);
if( IS_EMPTY(_004_rule_output)){ _004_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_004_rule_output.건물급수코드)){ 건물급수코드 = _004_rule_output.건물급수코드 }  
// [55cbe3a5-e8fa-4004-a2a5-c5429b80761d_014913] Rule Call End [일반_건물급수_건물급수조회(무벽건물)] 
}
// join 대상변수 초기화  
var __join_004 = (( __join_012 ) || ( __join_011 ) || ( __join_001 )) && __cond_004
__hpasRuleResult.건물급수코드  = 건물급수코드
return RESULT( __hpasRuleResult); 
}