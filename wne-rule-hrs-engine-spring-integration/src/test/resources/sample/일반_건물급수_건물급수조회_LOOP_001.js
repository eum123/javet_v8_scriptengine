var 일반_건물급수_건물급수조회_LOOP_001 = function (기둥코드,벽코드,업종코드,목적물유형분류코드,지붕코드,물건구분코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 건물급수코드 : [] }
var _기둥코드  = IS_EMPTY(기둥코드) ? [] : JSON.parse(JSON.stringify(기둥코드)) 
var _벽코드  = IS_EMPTY(벽코드) ? [] : JSON.parse(JSON.stringify(벽코드)) 
var _업종코드  = 업종코드 
var _목적물유형분류코드  = 목적물유형분류코드 
var _지붕코드  = IS_EMPTY(지붕코드) ? [] : JSON.parse(JSON.stringify(지붕코드)) 
var _물건구분코드  = 물건구분코드 

var _LOOP_SIZE = Math.max( 1 , Array.isArray(_기둥코드) ? _기둥코드.length  : 0 , Array.isArray(_벽코드) ? _벽코드.length  : 0 , Array.isArray(_지붕코드) ? _지붕코드.length  : 0 ) 
var __LIDX = null
var __LSIZE = null
var __TARGET_DATE__ = null
var 건물급수코드 = null
var 기둥구조구분 = null
var 기둥코드 = null
var 목적물유형분류코드 = null
var 물건구분코드 = null
var 벽구조구분 = null
var 벽코드 = null
var 업종코드 = null
var 지붕구조구분 = null
var 지붕코드 = null
var 특정물건예외여부 = null
var __Incrementor
for (__Incrementor= 0; __Incrementor < _LOOP_SIZE; __Incrementor++){ 
기둥코드 = Array.isArray(_기둥코드) ? _기둥코드[__Incrementor] : _기둥코드
목적물유형분류코드 = Array.isArray(_목적물유형분류코드) ? _목적물유형분류코드[__Incrementor] : _목적물유형분류코드
물건구분코드 = Array.isArray(_물건구분코드) ? _물건구분코드[__Incrementor] : _물건구분코드
벽코드 = Array.isArray(_벽코드) ? _벽코드[__Incrementor] : _벽코드
업종코드 = Array.isArray(_업종코드) ? _업종코드[__Incrementor] : _업종코드
지붕코드 = Array.isArray(_지붕코드) ? _지붕코드[__Incrementor] : _지붕코드
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [f7439aa2-2ac1-44f4-a34d-932e4c94aadf_014908] Rule Call Start [일반_건물급수_특정물건예외여부조회] 
var _004_목적물유형분류코드 = 목적물유형분류코드 
var _004_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_특정물건예외여부조회', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_004_목적물유형분류코드,_004_업종코드", "return "+ __RULE_CALL_ID__ + "(_004_목적물유형분류코드,_004_업종코드)"); 
var _004_rule_output = _f(_004_목적물유형분류코드,_004_업종코드);
if( IS_EMPTY(_004_rule_output)){ _004_rule_output= { 특정물건예외여부 : null }  } 
if(!IS_EMPTY(_004_rule_output.특정물건예외여부)){ 특정물건예외여부 = _004_rule_output.특정물건예외여부 }  
// [f7439aa2-2ac1-44f4-a34d-932e4c94aadf_014908] Rule Call End [일반_건물급수_특정물건예외여부조회] 
}
// 조건분기 변수 초기화 
var __cond_002 = 목적물유형분류코드 != "04" || (목적물유형분류코드 == "04" && 특정물건예외여부 == "1")
// 조건분기 변수 초기화 
var __cond_000 = !( 목적물유형분류코드 != "04" || (목적물유형분류코드 == "04" && 특정물건예외여부 == "1") ) && 목적물유형분류코드 == "04" && 특정물건예외여부 == "0"
// 조건분기 값 할당 
canFlowNext = __cond_002
if(canFlowNext){
// [8a5af03a-b298-4da9-b50d-06e773a68115_014906] Rule Call Start [일반_건물급수_건물급수조회(일반)] 
var _002_기둥코드 = 기둥코드 
var _002_목적물유형분류코드 = 목적물유형분류코드 
var _002_벽코드 = 벽코드 
var _002_업종코드 = 업종코드 
var _002_지붕코드 = 지붕코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(일반)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_002_기둥코드,_002_벽코드,_002_업종코드,_002_목적물유형분류코드,_002_지붕코드", "return "+ __RULE_CALL_ID__ + "(_002_기둥코드,_002_벽코드,_002_업종코드,_002_목적물유형분류코드,_002_지붕코드)"); 
var _002_rule_output = _f(_002_기둥코드,_002_벽코드,_002_업종코드,_002_목적물유형분류코드,_002_지붕코드);
if( IS_EMPTY(_002_rule_output)){ _002_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_002_rule_output.건물급수코드)){ 건물급수코드 = _002_rule_output.건물급수코드 }  
// [8a5af03a-b298-4da9-b50d-06e773a68115_014906] Rule Call End [일반_건물급수_건물급수조회(일반)] 
}
// join 대상변수 초기화  
var __join_002 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_000
if(canFlowNext){
// [083274c0-46c1-4082-91b9-1473708858ca_014904] Rule Call Start [일반_건물급수_건물급수조회(특정물건)] 
var _000_목적물유형분류코드 = 목적물유형분류코드 
var _000_물건구분코드 = 물건구분코드 
var _000_업종코드 = 업종코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_건물급수_건물급수조회(특정물건)', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_목적물유형분류코드,_000_업종코드,_000_물건구분코드", "return "+ __RULE_CALL_ID__ + "(_000_목적물유형분류코드,_000_업종코드,_000_물건구분코드)"); 
var _000_rule_output = _f(_000_목적물유형분류코드,_000_업종코드,_000_물건구분코드);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 건물급수코드 : null }  } 
if(!IS_EMPTY(_000_rule_output.건물급수코드)){ 건물급수코드 = _000_rule_output.건물급수코드 }  
// [083274c0-46c1-4082-91b9-1473708858ca_014904] Rule Call End [일반_건물급수_건물급수조회(특정물건)] 
}
// join 대상변수 초기화  
var __join_000 = canFlowNext
__hpasRuleResult.건물급수코드[__Incrementor] = 건물급수코드
} 
return RESULT( __hpasRuleResult); 
}