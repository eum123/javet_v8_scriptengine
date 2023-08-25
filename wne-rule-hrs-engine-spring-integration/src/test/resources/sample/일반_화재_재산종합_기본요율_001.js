var 일반_화재_재산종합_기본요율_001 = function (건물급수코드,업종코드,물건구분코드,목적물유형코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 순요율 : null,순요율 : null,특정물건여부 : null,특정물건여부 : null }
var 순요율 = null
var 건물급수코드  = 건물급수코드
var 목적물유형코드  = 목적물유형코드
var 물건구분코드  = 물건구분코드
var 업종코드  = 업종코드
var 특정물건여부 = null
// flow진행변수 초기화 
var canFlowNext = true 

// 조건분기 변수 초기화 
var __cond_003 = 물건구분코드 == '02'
// 조건분기 변수 초기화 
var __cond_007 = !( 물건구분코드 == '02' ) && 물건구분코드 == '03'
// 조건분기 변수 초기화 
var __cond_006 = 목적물유형코드 != "MFA10160"
// 조건분기 변수 초기화 
var __cond_009 = !( 목적물유형코드 != "MFA10160" ) && 목적물유형코드 == "MFA10160"
// 조건분기 값 할당 
canFlowNext = __cond_003
// 조건분기 값 할당 
canFlowNext = __cond_003 && __cond_006
if(canFlowNext){
// [8a64fc5d-1f88-4d52-9a8a-7d2ca3d531cc_010180] Rule Call Start [일반_화재_재산종합_일반물건기본요율] 
var _006_건물급수코드 = 건물급수코드 
var _006_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_일반물건기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_006_건물급수코드,_006_업종코드", "return "+ __RULE_CALL_ID__ + "(_006_건물급수코드,_006_업종코드)"); 
var _006_rule_output = _f(_006_건물급수코드,_006_업종코드);
if( IS_EMPTY(_006_rule_output)){ _006_rule_output= { 순요율 : null }  } 
if(!IS_EMPTY(_006_rule_output.순요율)){ 순요율 = _006_rule_output.순요율 }  
// [8a64fc5d-1f88-4d52-9a8a-7d2ca3d531cc_010180] Rule Call End [일반_화재_재산종합_일반물건기본요율] 
}
if(canFlowNext){
// [fb45b83c-e60e-4bac-842e-d4e24b5fe78e_010185] Rule Call Start [일반_화재_재산종합_일반물건(특정물건)기본요율] 
var _011_건물급수코드 = 건물급수코드 
var _011_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_일반물건(특정물건)기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_011_업종코드,_011_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_011_업종코드,_011_건물급수코드)"); 
var _011_rule_output = _f(_011_업종코드,_011_건물급수코드);
if( IS_EMPTY(_011_rule_output)){ _011_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_011_rule_output.순요율)){ 순요율 = _011_rule_output.순요율 }  
if(!IS_EMPTY(_011_rule_output.특정물건여부)){ 특정물건여부 = _011_rule_output.특정물건여부 }  
// [fb45b83c-e60e-4bac-842e-d4e24b5fe78e_010185] Rule Call End [일반_화재_재산종합_일반물건(특정물건)기본요율] 
}
// join 대상변수 초기화  
var __join_011 = __cond_003 && __cond_006
// 조건분기 값 할당 
canFlowNext = __cond_003 && __cond_009
if(canFlowNext){
// [efd47e68-b8b5-4626-8a57-50c325716be4_010183] Rule Call Start [일반_화재_재산종합_무벽건물동산요율] 
var _009_목적물유형코드 = 목적물유형코드 
var _009_물건구분코드 = 물건구분코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_무벽건물동산요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_009_목적물유형코드,_009_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_009_목적물유형코드,_009_물건구분코드)"); 
var _009_rule_output = _f(_009_목적물유형코드,_009_물건구분코드);
if( IS_EMPTY(_009_rule_output)){ _009_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_009_rule_output.순요율)){ 순요율 = _009_rule_output.순요율 }  
if(!IS_EMPTY(_009_rule_output.특정물건여부)){ 특정물건여부 = _009_rule_output.특정물건여부 }  
// [efd47e68-b8b5-4626-8a57-50c325716be4_010183] Rule Call End [일반_화재_재산종합_무벽건물동산요율] 
}
// join 대상변수 초기화  
var __join_009 = __cond_003 && __cond_009
// join 후 진행조건 값 할당 
canFlowNext = ( __join_011 ) || ( __join_009 )
// join 대상변수 초기화  
var __join_004 = (( __join_011 ) || ( __join_009 ))
// 조건분기 변수 초기화 
var __cond_000 = 목적물유형코드 != "MFA10160"
// 조건분기 변수 초기화 
var __cond_001 = !( 목적물유형코드 != "MFA10160" ) && 목적물유형코드 == "MFA10160"
// 조건분기 값 할당 
canFlowNext = __cond_007
// 조건분기 값 할당 
canFlowNext = __cond_007 && __cond_000
if(canFlowNext){
// [4f033241-ecfd-4c71-875b-524cf15cc174_010174] Rule Call Start [일반_화재_재산종합_공장물건기본요율] 
var _000_건물급수코드 = 건물급수코드 
var _000_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_공장물건기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_건물급수코드,_000_업종코드", "return "+ __RULE_CALL_ID__ + "(_000_건물급수코드,_000_업종코드)"); 
var _000_rule_output = _f(_000_건물급수코드,_000_업종코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 순요율 : null }  } 
if(!IS_EMPTY(_000_rule_output.순요율)){ 순요율 = _000_rule_output.순요율 }  
// [4f033241-ecfd-4c71-875b-524cf15cc174_010174] Rule Call End [일반_화재_재산종합_공장물건기본요율] 
}
if(canFlowNext){
// [b5e432ce-cfe9-4efe-9a8f-6aaff15857b4_010182] Rule Call Start [일반_화재_재산종합_공장물건(특정물건)기본요율] 
var _008_건물급수코드 = 건물급수코드 
var _008_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_공장물건(특정물건)기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_008_업종코드,_008_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_008_업종코드,_008_건물급수코드)"); 
var _008_rule_output = _f(_008_업종코드,_008_건물급수코드);
if( IS_EMPTY(_008_rule_output)){ _008_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_008_rule_output.순요율)){ 순요율 = _008_rule_output.순요율 }  
if(!IS_EMPTY(_008_rule_output.특정물건여부)){ 특정물건여부 = _008_rule_output.특정물건여부 }  
// [b5e432ce-cfe9-4efe-9a8f-6aaff15857b4_010182] Rule Call End [일반_화재_재산종합_공장물건(특정물건)기본요율] 
}
// join 대상변수 초기화  
var __join_008 = __cond_007 && __cond_000
// 조건분기 값 할당 
canFlowNext = __cond_007 && __cond_001
if(canFlowNext){
// [57bdc1a8-67e3-4d67-b385-40043eee522f_010175] Rule Call Start [일반_화재_재산종합_무벽건물동산요율] 
var _001_목적물유형코드 = 목적물유형코드 
var _001_물건구분코드 = 물건구분코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재_재산종합_무벽건물동산요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_목적물유형코드,_001_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_001_목적물유형코드,_001_물건구분코드)"); 
var _001_rule_output = _f(_001_목적물유형코드,_001_물건구분코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_001_rule_output.순요율)){ 순요율 = _001_rule_output.순요율 }  
if(!IS_EMPTY(_001_rule_output.특정물건여부)){ 특정물건여부 = _001_rule_output.특정물건여부 }  
// [57bdc1a8-67e3-4d67-b385-40043eee522f_010175] Rule Call End [일반_화재_재산종합_무벽건물동산요율] 
}
// join 대상변수 초기화  
var __join_001 = __cond_007 && __cond_001
// join 후 진행조건 값 할당 
canFlowNext = ( __join_008 ) || ( __join_001 )
// join 대상변수 초기화  
var __join_010 = (( __join_008 ) || ( __join_001 ))
__hpasRuleResult.순요율  = 순요율
__hpasRuleResult.특정물건여부  = 특정물건여부
return RESULT( __hpasRuleResult); 
}