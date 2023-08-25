function (장해코드,구구장해율,구장해율,신장해율,장해기간,장해년수,좌해당여부,우해당여부,신장해율_신경계,신장해율_일상생활){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 구구장해율_출력 : null,구구장해율_출력 : null,구장해율_출력 : null,구장해율_출력 : null,신장해율_출력 : null,신장해율_출력 : null }
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
// [a0f7a778-868f-471b-8db2-db0ae52bef25_010249] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('a0f7a778-868f-471b-8db2-db0ae52bef25_010249');
 CNT = 장해코드.length

}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
if(canFlowNext){
}
__hpasRuleResult.구구장해율_출력  = 구구장해율_출력
__hpasRuleResult.구장해율_출력  = 구장해율_출력
__hpasRuleResult.신장해율_출력  = 신장해율_출력
return RESULT( __hpasRuleResult); 
}