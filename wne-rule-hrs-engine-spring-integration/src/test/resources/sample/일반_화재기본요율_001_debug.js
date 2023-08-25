function (건물급수코드,업종코드,물건구분코드,목적물유형코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 순요율 : null,순요율 : null,특정물건여부 : null,특정물건여부 : null }
var 건물급수코드  = 건물급수코드
var 목적물유형코드  = 목적물유형코드
var 물건구분코드  = 물건구분코드
var 순요율 = null
var 업종코드  = 업종코드
var 특정물건여부 = null
// flow진행변수 초기화 
var canFlowNext = true 

_GET_GLOBAL('__hrs_flowNode_logger').push('4b0c7db3-e46a-4398-813e-127f7443002b_011044');
 // 조건분기 변수 초기화 
var __cond_005 = 물건구분코드 == '1'
// 조건분기 변수 초기화 
var __cond_010 = !( 물건구분코드 == '1' ) && 물건구분코드 == '2'
// 조건분기 변수 초기화 
var __cond_001 = !( 물건구분코드 == '1' ) && !( 물건구분코드 == '2' ) && 물건구분코드 == '3'
// 조건분기 값 할당 
canFlowNext = __cond_005
if(canFlowNext){
// [36249e38-7896-4d10-a7b0-acb6934e79a7_011043] Rule Call Start [일반_화재주택물건기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('36249e38-7896-4d10-a7b0-acb6934e79a7_011043');
 var _005_건물급수코드 = 건물급수코드 
var _005_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재주택물건기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_005_건물급수코드,_005_업종코드", "return "+ __RULE_CALL_ID__ + "(_005_건물급수코드,_005_업종코드)"); 
var _005_rule_output = _f(_005_건물급수코드,_005_업종코드);
if( IS_EMPTY(_005_rule_output)){ _005_rule_output= { 순요율 : null }  } 
if(!IS_EMPTY(_005_rule_output.순요율)){ 순요율 = _005_rule_output.순요율 }  
// [36249e38-7896-4d10-a7b0-acb6934e79a7_011043] Rule Call End [일반_화재주택물건기본요율] 
}
if(canFlowNext){
// [57abe3dc-e69c-4a22-b8b4-62cd06838338_011046] Rule Call Start [일반_화재주택물건(특정물건)기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('57abe3dc-e69c-4a22-b8b4-62cd06838338_011046');
 var _008_건물급수코드 = 건물급수코드 
var _008_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재주택물건(특정물건)기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_008_업종코드,_008_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_008_업종코드,_008_건물급수코드)"); 
var _008_rule_output = _f(_008_업종코드,_008_건물급수코드);
if( IS_EMPTY(_008_rule_output)){ _008_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_008_rule_output.순요율)){ 순요율 = _008_rule_output.순요율 }  
if(!IS_EMPTY(_008_rule_output.특정물건여부)){ 특정물건여부 = _008_rule_output.특정물건여부 }  
// [57abe3dc-e69c-4a22-b8b4-62cd06838338_011046] Rule Call End [일반_화재주택물건(특정물건)기본요율] 
}
_GET_GLOBAL('__hrs_flowNode_logger').push('4fb6f699-89d4-4ec9-a48e-8efad62ebae9_011045');
 // join 대상변수 초기화  
var __join_008 = canFlowNext
_GET_GLOBAL('__hrs_flowNode_logger').push('6b926da7-6017-44bd-80bd-400a4162762a_011048');
 // 조건분기 변수 초기화 
var __cond_003 = 목적물유형코드 != "MFA10160"
// 조건분기 변수 초기화 
var __cond_000 = !( 목적물유형코드 != "MFA10160" ) && 목적물유형코드 == "MFA10160"
// 조건분기 값 할당 
canFlowNext = __cond_010
// 조건분기 값 할당 
canFlowNext = __cond_003
if(canFlowNext){
// [254258bd-77f3-489e-ae2c-3c55b54c96a4_011041] Rule Call Start [일반_화재일반물건기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('254258bd-77f3-489e-ae2c-3c55b54c96a4_011041');
 var _003_건물급수코드 = 건물급수코드 
var _003_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재일반물건기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_003_건물급수코드,_003_업종코드", "return "+ __RULE_CALL_ID__ + "(_003_건물급수코드,_003_업종코드)"); 
var _003_rule_output = _f(_003_건물급수코드,_003_업종코드);
if( IS_EMPTY(_003_rule_output)){ _003_rule_output= { 순요율 : null }  } 
if(!IS_EMPTY(_003_rule_output.순요율)){ 순요율 = _003_rule_output.순요율 }  
// [254258bd-77f3-489e-ae2c-3c55b54c96a4_011041] Rule Call End [일반_화재일반물건기본요율] 
}
if(canFlowNext){
// [7ea8bcb9-6dcf-445f-a532-76e53c3107dd_011049] Rule Call Start [일반_화재일반물건(특정물건)기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('7ea8bcb9-6dcf-445f-a532-76e53c3107dd_011049');
 var _011_건물급수코드 = 건물급수코드 
var _011_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재일반물건(특정물건)기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_011_업종코드,_011_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_011_업종코드,_011_건물급수코드)"); 
var _011_rule_output = _f(_011_업종코드,_011_건물급수코드);
if( IS_EMPTY(_011_rule_output)){ _011_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_011_rule_output.순요율)){ 순요율 = _011_rule_output.순요율 }  
if(!IS_EMPTY(_011_rule_output.특정물건여부)){ 특정물건여부 = _011_rule_output.특정물건여부 }  
// [7ea8bcb9-6dcf-445f-a532-76e53c3107dd_011049] Rule Call End [일반_화재일반물건(특정물건)기본요율] 
}
_GET_GLOBAL('__hrs_flowNode_logger').push('22e20b7f-ba27-482c-9974-362d2a131981_011040');
 // join 대상변수 초기화  
var __join_011 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_000
if(canFlowNext){
// [00ec9fca-9857-4f42-93de-02bd9f58f3bc_011038] Rule Call Start [일반_화재무벽건물동산요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('00ec9fca-9857-4f42-93de-02bd9f58f3bc_011038');
 var _000_목적물유형코드 = 목적물유형코드 
var _000_물건구분코드 = 물건구분코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재무벽건물동산요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_목적물유형코드,_000_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_000_목적물유형코드,_000_물건구분코드)"); 
var _000_rule_output = _f(_000_목적물유형코드,_000_물건구분코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_000_rule_output.순요율)){ 순요율 = _000_rule_output.순요율 }  
if(!IS_EMPTY(_000_rule_output.특정물건여부)){ 특정물건여부 = _000_rule_output.특정물건여부 }  
// [00ec9fca-9857-4f42-93de-02bd9f58f3bc_011038] Rule Call End [일반_화재무벽건물동산요율] 
}
_GET_GLOBAL('__hrs_flowNode_logger').push('22e20b7f-ba27-482c-9974-362d2a131981_011040');
 // join 대상변수 초기화  
var __join_000 = canFlowNext
_GET_GLOBAL('__hrs_flowNode_logger').push('4fb6f699-89d4-4ec9-a48e-8efad62ebae9_011045');
 // join 후 진행조건 값 할당 
canFlowNext = ( __join_011 ) || ( __join_000 )
// join 대상변수 초기화  
var __join_002 = canFlowNext
_GET_GLOBAL('__hrs_flowNode_logger').push('0eaeb465-2849-4108-a696-00cf34a1c7c9_011039');
 // 조건분기 변수 초기화 
var __cond_009 = 목적물유형코드 != "MFA10160"
// 조건분기 변수 초기화 
var __cond_004 = !( 목적물유형코드 != "MFA10160" ) && 목적물유형코드 == "MFA10160"
// 조건분기 값 할당 
canFlowNext = __cond_001
// 조건분기 값 할당 
canFlowNext = __cond_009
if(canFlowNext){
// [60971770-6cf9-4185-9d20-12304faf3211_011047] Rule Call Start [일반_화재공장물건기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('60971770-6cf9-4185-9d20-12304faf3211_011047');
 var _009_건물급수코드 = 건물급수코드 
var _009_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재공장물건기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_009_건물급수코드,_009_업종코드", "return "+ __RULE_CALL_ID__ + "(_009_건물급수코드,_009_업종코드)"); 
var _009_rule_output = _f(_009_건물급수코드,_009_업종코드);
if( IS_EMPTY(_009_rule_output)){ _009_rule_output= { 순요율 : null }  } 
if(!IS_EMPTY(_009_rule_output.순요율)){ 순요율 = _009_rule_output.순요율 }  
// [60971770-6cf9-4185-9d20-12304faf3211_011047] Rule Call End [일반_화재공장물건기본요율] 
}
if(canFlowNext){
// [f51f49e4-6f40-4bc5-bbd4-39303e4bea37_011051] Rule Call Start [일반_화재공장물건(특정물건)기본요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('f51f49e4-6f40-4bc5-bbd4-39303e4bea37_011051');
 var _013_건물급수코드 = 건물급수코드 
var _013_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재공장물건(특정물건)기본요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_013_업종코드,_013_건물급수코드", "return "+ __RULE_CALL_ID__ + "(_013_업종코드,_013_건물급수코드)"); 
var _013_rule_output = _f(_013_업종코드,_013_건물급수코드);
if( IS_EMPTY(_013_rule_output)){ _013_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_013_rule_output.순요율)){ 순요율 = _013_rule_output.순요율 }  
if(!IS_EMPTY(_013_rule_output.특정물건여부)){ 특정물건여부 = _013_rule_output.특정물건여부 }  
// [f51f49e4-6f40-4bc5-bbd4-39303e4bea37_011051] Rule Call End [일반_화재공장물건(특정물건)기본요율] 
}
_GET_GLOBAL('__hrs_flowNode_logger').push('b7b18b60-5c98-4d79-9d91-1fe06c8e5bbe_011050');
 // join 대상변수 초기화  
var __join_013 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_004
if(canFlowNext){
// [31770e43-4a2b-4454-9287-99728820c83b_011042] Rule Call Start [일반_화재무벽건물동산요율] 
_GET_GLOBAL('__hrs_flowNode_logger').push('31770e43-4a2b-4454-9287-99728820c83b_011042');
 var _004_목적물유형코드 = 목적물유형코드 
var _004_물건구분코드 = 물건구분코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_화재무벽건물동산요율', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_004_목적물유형코드,_004_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_004_목적물유형코드,_004_물건구분코드)"); 
var _004_rule_output = _f(_004_목적물유형코드,_004_물건구분코드);
if( IS_EMPTY(_004_rule_output)){ _004_rule_output= { 순요율 : null,특정물건여부 : null }  } 
if(!IS_EMPTY(_004_rule_output.순요율)){ 순요율 = _004_rule_output.순요율 }  
if(!IS_EMPTY(_004_rule_output.특정물건여부)){ 특정물건여부 = _004_rule_output.특정물건여부 }  
// [31770e43-4a2b-4454-9287-99728820c83b_011042] Rule Call End [일반_화재무벽건물동산요율] 
}
_GET_GLOBAL('__hrs_flowNode_logger').push('b7b18b60-5c98-4d79-9d91-1fe06c8e5bbe_011050');
 // join 대상변수 초기화  
var __join_004 = canFlowNext
_GET_GLOBAL('__hrs_flowNode_logger').push('4fb6f699-89d4-4ec9-a48e-8efad62ebae9_011045');
 // join 후 진행조건 값 할당 
canFlowNext = ( __join_013 ) || ( __join_004 )
// join 대상변수 초기화  
var __join_012 = canFlowNext
__hpasRuleResult.순요율  = 순요율
__hpasRuleResult.특정물건여부  = 특정물건여부
return RESULT( __hpasRuleResult); 
}