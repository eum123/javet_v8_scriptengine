var 일반_공통_입력금액적합성체크_001 = function (보상한도금액단위코드,배상구분코드,업종2레벨코드,화폐코드,가입금액,업종1레벨코드,자기부담금액,담보코드,위험유형코드,상품코드,계약시작일자,계약종료일자){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 자기부담금액_Out : [],화폐코드_Out : [],배상구분코드_Out : [],가입금액_Out : [],담보코드_Out : [],보상한도금액단위코드_Out : [],구분코드_Out : [] }
var 업종2레벨코드  = 업종2레벨코드
var 계약시작일자  = 계약시작일자
var 화폐코드  = IS_EMPTY(화폐코드) ? [] : JSON.parse(JSON.stringify(화폐코드))
var 가입금액  = IS_EMPTY(가입금액) ? [] : JSON.parse(JSON.stringify(가입금액))
var 보상한도금액단위코드  = IS_EMPTY(보상한도금액단위코드) ? [] : JSON.parse(JSON.stringify(보상한도금액단위코드))
var 업종1레벨코드  = 업종1레벨코드
var 자기부담금액  = IS_EMPTY(자기부담금액) ? [] : JSON.parse(JSON.stringify(자기부담금액))
var 계약종료일자  = 계약종료일자
var 배상구분코드  = IS_EMPTY(배상구분코드) ? [] : JSON.parse(JSON.stringify(배상구분코드))
var 담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드))
var 위험유형코드  = 위험유형코드
var 상품코드  = 상품코드
var 자기부담금액_Out = []
var 화폐코드_Out = []
var 배상구분코드_Out = []
var 가입금액_Out = []
var 담보코드_Out = []
var 보상한도금액단위코드_Out = []
var __TARGET_DATE__ = null
var 구분코드_Out = []
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [70bb4e22-b255-43fa-937b-3a407ee938a0_010911] Expression 
__TARGET_DATE__ = GET_DATE_STR_FORMAT(계약시작일자)

}
if(canFlowNext){
// [dc03d6b5-970e-40d9-abfc-06c669b4e2d8_010912] Rule Call Start [일반_공통_입력금액적합성체크_LOOP] 
var _001_가입금액 = IS_EMPTY(가입금액) ? [] :JSON.parse(JSON.stringify(가입금액)) 
var _001_가입금액_Out = IS_EMPTY(가입금액_Out) ? [] :JSON.parse(JSON.stringify(가입금액_Out)) 
var _001_담보코드 = IS_EMPTY(담보코드) ? [] :JSON.parse(JSON.stringify(담보코드)) 
var _001_담보코드_Out = IS_EMPTY(담보코드_Out) ? [] :JSON.parse(JSON.stringify(담보코드_Out)) 
var _001_배상구분코드 = IS_EMPTY(배상구분코드) ? [] :JSON.parse(JSON.stringify(배상구분코드)) 
var _001_배상구분코드_Out = IS_EMPTY(배상구분코드_Out) ? [] :JSON.parse(JSON.stringify(배상구분코드_Out)) 
var _001_보상한도금액단위코드 = IS_EMPTY(보상한도금액단위코드) ? [] :JSON.parse(JSON.stringify(보상한도금액단위코드)) 
var _001_보상한도금액단위코드_Out = IS_EMPTY(보상한도금액단위코드_Out) ? [] :JSON.parse(JSON.stringify(보상한도금액단위코드_Out)) 
var _001_상품코드 = 상품코드 
var _001_업종1레벨코드 = 업종1레벨코드 
var _001_업종2레벨코드 = 업종2레벨코드 
var _001_위험유형코드 = 위험유형코드 
var _001_자기부담금액 = IS_EMPTY(자기부담금액) ? [] :JSON.parse(JSON.stringify(자기부담금액)) 
var _001_자기부담금액_Out = IS_EMPTY(자기부담금액_Out) ? [] :JSON.parse(JSON.stringify(자기부담금액_Out)) 
var _001_화폐코드 = IS_EMPTY(화폐코드) ? [] :JSON.parse(JSON.stringify(화폐코드)) 
var _001_화폐코드_Out = IS_EMPTY(화폐코드_Out) ? [] :JSON.parse(JSON.stringify(화폐코드_Out)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_입력금액적합성체크_LOOP', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_보상한도금액단위코드,_001_가입금액_Out,_001_담보코드_Out,_001_배상구분코드,_001_자기부담금액_Out,_001_업종2레벨코드,_001_화폐코드_Out,_001_화폐코드,_001_가입금액,_001_업종1레벨코드,_001_배상구분코드_Out,_001_자기부담금액,_001_담보코드,_001_보상한도금액단위코드_Out,_001_위험유형코드,_001_상품코드", "return "+ __RULE_CALL_ID__ + "(_001_보상한도금액단위코드,_001_가입금액_Out,_001_담보코드_Out,_001_배상구분코드,_001_자기부담금액_Out,_001_업종2레벨코드,_001_화폐코드_Out,_001_화폐코드,_001_가입금액,_001_업종1레벨코드,_001_배상구분코드_Out,_001_자기부담금액,_001_담보코드,_001_보상한도금액단위코드_Out,_001_위험유형코드,_001_상품코드)"); 
var _001_rule_output = _f(_001_보상한도금액단위코드,_001_가입금액_Out,_001_담보코드_Out,_001_배상구분코드,_001_자기부담금액_Out,_001_업종2레벨코드,_001_화폐코드_Out,_001_화폐코드,_001_가입금액,_001_업종1레벨코드,_001_배상구분코드_Out,_001_자기부담금액,_001_담보코드,_001_보상한도금액단위코드_Out,_001_위험유형코드,_001_상품코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 가입금액_Out : [],구분코드_Out : [],담보코드_Out : [],배상구분코드_Out : [],보상한도금액단위코드_Out : [],자기부담금액_Out : [],화폐코드_Out : [] }  } 
if(!IS_EMPTY(_001_rule_output.가입금액_Out)){ 가입금액_Out = IS_EMPTY(_001_rule_output.가입금액_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.가입금액_Out)) }  
if(!IS_EMPTY(_001_rule_output.구분코드_Out)){ 구분코드_Out = IS_EMPTY(_001_rule_output.구분코드_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.구분코드_Out)) }  
if(!IS_EMPTY(_001_rule_output.담보코드_Out)){ 담보코드_Out = IS_EMPTY(_001_rule_output.담보코드_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.담보코드_Out)) }  
if(!IS_EMPTY(_001_rule_output.배상구분코드_Out)){ 배상구분코드_Out = IS_EMPTY(_001_rule_output.배상구분코드_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.배상구분코드_Out)) }  
if(!IS_EMPTY(_001_rule_output.보상한도금액단위코드_Out)){ 보상한도금액단위코드_Out = IS_EMPTY(_001_rule_output.보상한도금액단위코드_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.보상한도금액단위코드_Out)) }  
if(!IS_EMPTY(_001_rule_output.자기부담금액_Out)){ 자기부담금액_Out = IS_EMPTY(_001_rule_output.자기부담금액_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.자기부담금액_Out)) }  
if(!IS_EMPTY(_001_rule_output.화폐코드_Out)){ 화폐코드_Out = IS_EMPTY(_001_rule_output.화폐코드_Out) ? [] : JSON.parse(JSON.stringify(_001_rule_output.화폐코드_Out)) }  
// [dc03d6b5-970e-40d9-abfc-06c669b4e2d8_010912] Rule Call End [일반_공통_입력금액적합성체크_LOOP] 
}
__hpasRuleResult.구분코드_Out  = IS_EMPTY(구분코드_Out) ? [] : JSON.parse(JSON.stringify(구분코드_Out))
__hpasRuleResult.담보코드_Out  = IS_EMPTY(담보코드_Out) ? [] : JSON.parse(JSON.stringify(담보코드_Out))
__hpasRuleResult.배상구분코드_Out  = IS_EMPTY(배상구분코드_Out) ? [] : JSON.parse(JSON.stringify(배상구분코드_Out))
__hpasRuleResult.가입금액_Out  = IS_EMPTY(가입금액_Out) ? [] : JSON.parse(JSON.stringify(가입금액_Out))
__hpasRuleResult.보상한도금액단위코드_Out  = IS_EMPTY(보상한도금액단위코드_Out) ? [] : JSON.parse(JSON.stringify(보상한도금액단위코드_Out))
__hpasRuleResult.자기부담금액_Out  = IS_EMPTY(자기부담금액_Out) ? [] : JSON.parse(JSON.stringify(자기부담금액_Out))
__hpasRuleResult.화폐코드_Out  = IS_EMPTY(화폐코드_Out) ? [] : JSON.parse(JSON.stringify(화폐코드_Out))
return RESULT( __hpasRuleResult); 
}