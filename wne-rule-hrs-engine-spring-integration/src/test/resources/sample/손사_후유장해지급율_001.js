var 손사_후유장해지급율_001 = function (장해코드,구구장해율,구장해율,신장해율,장해기간,장해년수,좌해당여부,우해당여부,신장해율_신경계,신장해율_일상생활){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 구구장해율_출력 : null,구장해율_출력 : null,신장해율_출력 : null }
var 구구장해율  = IS_EMPTY(구구장해율) ? [] : JSON.parse(JSON.stringify(구구장해율))
var 구구장해율_출력 = null
var 구장해율  = IS_EMPTY(구장해율) ? [] : JSON.parse(JSON.stringify(구장해율))
var 구장해율_출력 = null
var 신장해율  = IS_EMPTY(신장해율) ? [] : JSON.parse(JSON.stringify(신장해율))
var 신장해율_신경계  = 신장해율_신경계
var 신장해율_출력 = null
var 우해당여부  = IS_EMPTY(우해당여부) ? [] : JSON.parse(JSON.stringify(우해당여부))
var 장해기간  = IS_EMPTY(장해기간) ? [] : JSON.parse(JSON.stringify(장해기간))
var 장해년수  = IS_EMPTY(장해년수) ? [] : JSON.parse(JSON.stringify(장해년수))
var 장해코드  = IS_EMPTY(장해코드) ? [] : JSON.parse(JSON.stringify(장해코드))
var 좌해당여부  = IS_EMPTY(좌해당여부) ? [] : JSON.parse(JSON.stringify(좌해당여부))
var 신장해감액대상비율 = null
var 신장해좌우개별부위여부 = null
var BIT_A = null
var 일상지지급율합_오른쪽 = null
var IDXP = null
var 구장해감액대상비율 = null
var 구장해동일계열갯수 = []
var 구장해좌우개별부위여부 = null
var 일상지지급율합_왼쪽 = null
var 구장해대상장해율 = []
var 일하지지급율합_왼쪽 = null
var CNT1 = null
var BIT_C = null
var BIT_B = null
var CNT2 = null
var CNT3 = null
var BIT_D = null
var __TARGET_DATE__ = null
var 구구장해대상장해율 = []
var 구구장해동일계열갯수 = []
var 대상장해율 = []
var 좌우구분 = []
var 일하지지급율합_오른쪽 = null
var 신장해대상장해율 = []
var 신장해동일계열여부 = []
var IDX = null
var 구구장해동일계열여부 = []
var 구장해동일계열여부 = []
var CNT = null
var 구구장해감액대상비율 = null
var 신장해동일계열갯수 = []
var 신장해율_일상생활  = 신장해율_일상생활
var BIT_U = null
var BIT_V = null
var BIT_W = null
var BIT_Y = null
var BIT_Z = null
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [18535925-e32e-4474-8a82-571411829cc9_010233] Rule Call Start [손사_후유장해_(구)구장해동일계열구분] 
_GET_GLOBAL('__hrs_flowNode_logger').push('18535925-e32e-4474-8a82-571411829cc9_010233');
 var _001_CNT2 = CNT2 
var _001_IDX = IDX 
var _001_IDXP = IDXP 
var _001_구구장해대상장해율 = IS_EMPTY(구구장해대상장해율) ? [] :JSON.parse(JSON.stringify(구구장해대상장해율)) 
var _001_구구장해동일계열갯수 = IS_EMPTY(구구장해동일계열갯수) ? [] :JSON.parse(JSON.stringify(구구장해동일계열갯수)) 
var _001_구구장해동일계열여부 = IS_EMPTY(구구장해동일계열여부) ? [] :JSON.parse(JSON.stringify(구구장해동일계열여부)) 
var _001_구구장해율 = IS_EMPTY(구구장해율) ? [] :JSON.parse(JSON.stringify(구구장해율)) 
var _001_구장해대상장해율 = IS_EMPTY(구장해대상장해율) ? [] :JSON.parse(JSON.stringify(구장해대상장해율)) 
var _001_구장해동일계열갯수 = IS_EMPTY(구장해동일계열갯수) ? [] :JSON.parse(JSON.stringify(구장해동일계열갯수)) 
var _001_구장해동일계열여부 = IS_EMPTY(구장해동일계열여부) ? [] :JSON.parse(JSON.stringify(구장해동일계열여부)) 
var _001_구장해율 = IS_EMPTY(구장해율) ? [] :JSON.parse(JSON.stringify(구장해율)) 
var _001_장해코드 = IS_EMPTY(장해코드) ? [] :JSON.parse(JSON.stringify(장해코드)) 
var _001_좌우구분 = IS_EMPTY(좌우구분) ? [] :JSON.parse(JSON.stringify(좌우구분)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('손사_후유장해_(구)구장해동일계열구분', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_CNT2,_001_IDX,_001_IDXP,_001_구장해동일계열여부,_001_장해코드,_001_구구장해동일계열여부,_001_좌우구분,_001_구장해동일계열갯수,_001_구구장해동일계열갯수,_001_구구장해대상장해율,_001_구장해대상장해율,_001_구장해율,_001_구구장해율", "return "+ __RULE_CALL_ID__ + "(_001_CNT2,_001_IDX,_001_IDXP,_001_구장해동일계열여부,_001_장해코드,_001_구구장해동일계열여부,_001_좌우구분,_001_구장해동일계열갯수,_001_구구장해동일계열갯수,_001_구구장해대상장해율,_001_구장해대상장해율,_001_구장해율,_001_구구장해율)"); 
var _001_rule_output = _f(_001_CNT2,_001_IDX,_001_IDXP,_001_구장해동일계열여부,_001_장해코드,_001_구구장해동일계열여부,_001_좌우구분,_001_구장해동일계열갯수,_001_구구장해동일계열갯수,_001_구구장해대상장해율,_001_구장해대상장해율,_001_구장해율,_001_구구장해율);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { CNT2 : null,IDX : null,IDXP : null,구구장해대상장해율 : [],구구장해동일계열갯수 : [],구구장해동일계열여부 : [],구구장해율 : [],구장해대상장해율 : [],구장해동일계열갯수 : [],구장해동일계열여부 : [],구장해율 : [],장해코드 : [],좌우구분 : [] }  } 
if(!IS_EMPTY(_001_rule_output.CNT2)){ CNT2 = _001_rule_output.CNT2 }  
if(!IS_EMPTY(_001_rule_output.IDX)){ IDX = _001_rule_output.IDX }  
if(!IS_EMPTY(_001_rule_output.IDXP)){ IDXP = _001_rule_output.IDXP }  
if(!IS_EMPTY(_001_rule_output.구구장해대상장해율)){ 구구장해대상장해율 = IS_EMPTY(_001_rule_output.구구장해대상장해율) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구구장해대상장해율)) }  
if(!IS_EMPTY(_001_rule_output.구구장해동일계열갯수)){ 구구장해동일계열갯수 = IS_EMPTY(_001_rule_output.구구장해동일계열갯수) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구구장해동일계열갯수)) }  
if(!IS_EMPTY(_001_rule_output.구구장해동일계열여부)){ 구구장해동일계열여부 = IS_EMPTY(_001_rule_output.구구장해동일계열여부) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구구장해동일계열여부)) }  
if(!IS_EMPTY(_001_rule_output.구구장해율)){ 구구장해율 = IS_EMPTY(_001_rule_output.구구장해율) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구구장해율)) }  
if(!IS_EMPTY(_001_rule_output.구장해대상장해율)){ 구장해대상장해율 = IS_EMPTY(_001_rule_output.구장해대상장해율) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구장해대상장해율)) }  
if(!IS_EMPTY(_001_rule_output.구장해동일계열갯수)){ 구장해동일계열갯수 = IS_EMPTY(_001_rule_output.구장해동일계열갯수) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구장해동일계열갯수)) }  
if(!IS_EMPTY(_001_rule_output.구장해동일계열여부)){ 구장해동일계열여부 = IS_EMPTY(_001_rule_output.구장해동일계열여부) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구장해동일계열여부)) }  
if(!IS_EMPTY(_001_rule_output.구장해율)){ 구장해율 = IS_EMPTY(_001_rule_output.구장해율) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구장해율)) }  
if(!IS_EMPTY(_001_rule_output.장해코드)){ 장해코드 = IS_EMPTY(_001_rule_output.장해코드) ? [] : JSON.parse(JSON.stringify(_001_rule_output.장해코드)) }  
if(!IS_EMPTY(_001_rule_output.좌우구분)){ 좌우구분 = IS_EMPTY(_001_rule_output.좌우구분) ? [] : JSON.parse(JSON.stringify(_001_rule_output.좌우구분)) }  
// [18535925-e32e-4474-8a82-571411829cc9_010233] Rule Call End [손사_후유장해_(구)구장해동일계열구분] 
}
__hpasRuleResult.구구장해율_출력  = 구구장해율_출력
__hpasRuleResult.구장해율_출력  = 구장해율_출력
__hpasRuleResult.신장해율_출력  = 신장해율_출력
return RESULT( __hpasRuleResult); 
}