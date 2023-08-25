var 일반_공통_입력금액적합성체크_LOOP_001 = function (보상한도금액단위코드,가입금액_Out,담보코드_Out,배상구분코드,자기부담금액_Out,업종2레벨코드,화폐코드_Out,화폐코드,가입금액,업종1레벨코드,배상구분코드_Out,자기부담금액,담보코드,보상한도금액단위코드_Out,위험유형코드,상품코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 자기부담금액_Out : [],화폐코드_Out : [],배상구분코드_Out : [],가입금액_Out : [],담보코드_Out : [],보상한도금액단위코드_Out : [],구분코드_Out : [] }
var _보상한도금액단위코드  = IS_EMPTY(보상한도금액단위코드) ? [] : JSON.parse(JSON.stringify(보상한도금액단위코드)) 
var _가입금액_Out  = IS_EMPTY(가입금액_Out) ? [] : JSON.parse(JSON.stringify(가입금액_Out)) 
var _담보코드_Out  = IS_EMPTY(담보코드_Out) ? [] : JSON.parse(JSON.stringify(담보코드_Out)) 
var _배상구분코드  = IS_EMPTY(배상구분코드) ? [] : JSON.parse(JSON.stringify(배상구분코드)) 
var _자기부담금액_Out  = IS_EMPTY(자기부담금액_Out) ? [] : JSON.parse(JSON.stringify(자기부담금액_Out)) 
var _업종2레벨코드  = 업종2레벨코드 
var _화폐코드_Out  = IS_EMPTY(화폐코드_Out) ? [] : JSON.parse(JSON.stringify(화폐코드_Out)) 
var _화폐코드  = IS_EMPTY(화폐코드) ? [] : JSON.parse(JSON.stringify(화폐코드)) 
var _가입금액  = IS_EMPTY(가입금액) ? [] : JSON.parse(JSON.stringify(가입금액)) 
var _업종1레벨코드  = 업종1레벨코드 
var _배상구분코드_Out  = IS_EMPTY(배상구분코드_Out) ? [] : JSON.parse(JSON.stringify(배상구분코드_Out)) 
var _자기부담금액  = IS_EMPTY(자기부담금액) ? [] : JSON.parse(JSON.stringify(자기부담금액)) 
var _담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드)) 
var _보상한도금액단위코드_Out  = IS_EMPTY(보상한도금액단위코드_Out) ? [] : JSON.parse(JSON.stringify(보상한도금액단위코드_Out)) 
var _위험유형코드  = 위험유형코드 
var _상품코드  = 상품코드 

var 가입금액 = null
var 가입금액_Out = []
var 구분코드_Out = []
var 담보코드 = null
var 담보코드_Out = []
var 배상구분코드 = null
var 배상구분코드_Out = []
var 보상한도금액단위코드 = null
var 보상한도금액단위코드_Out = []
var 상품코드 = null
var 업종1레벨코드 = null
var 업종2레벨코드 = null
var 위험유형코드 = null
var 자기부담금액 = null
var 자기부담금액_Out = []
var 화폐코드 = null
var 화폐코드_Out = []
var 보상한도금액체크여부 = null
var __TARGET_DATE__ = null
var 자기부담금액체크여부 = null
var __LIDX = null
var 보상한도금액적합성여부 = null
var 자기부담금액적합성여부 = null
var __LSIZE = null
__LSIZE = Math.max( 1 , Array.isArray(_보상한도금액단위코드) ? _보상한도금액단위코드.length  : 0 , Array.isArray(_가입금액_Out) ? _가입금액_Out.length  : 0 , Array.isArray(_담보코드_Out) ? _담보코드_Out.length  : 0 , Array.isArray(_배상구분코드) ? _배상구분코드.length  : 0 , Array.isArray(_자기부담금액_Out) ? _자기부담금액_Out.length  : 0 , Array.isArray(_화폐코드_Out) ? _화폐코드_Out.length  : 0 , Array.isArray(_화폐코드) ? _화폐코드.length  : 0 , Array.isArray(_가입금액) ? _가입금액.length  : 0 , Array.isArray(_배상구분코드_Out) ? _배상구분코드_Out.length  : 0 , Array.isArray(_자기부담금액) ? _자기부담금액.length  : 0 , Array.isArray(_담보코드) ? _담보코드.length  : 0 , Array.isArray(_보상한도금액단위코드_Out) ? _보상한도금액단위코드_Out.length  : 0 ) 
for (__LIDX= 0; __LIDX < __LSIZE; __LIDX++){ 
가입금액 = Array.isArray(_가입금액) ? _가입금액[__LIDX] : _가입금액
if( Array.isArray(_가입금액_Out)) { 가입금액_Out= [_가입금액_Out[__LIDX]] } else { 가입금액_Out = [_가입금액_Out] }
담보코드 = Array.isArray(_담보코드) ? _담보코드[__LIDX] : _담보코드
if( Array.isArray(_담보코드_Out)) { 담보코드_Out= [_담보코드_Out[__LIDX]] } else { 담보코드_Out = [_담보코드_Out] }
배상구분코드 = Array.isArray(_배상구분코드) ? _배상구분코드[__LIDX] : _배상구분코드
if( Array.isArray(_배상구분코드_Out)) { 배상구분코드_Out= [_배상구분코드_Out[__LIDX]] } else { 배상구분코드_Out = [_배상구분코드_Out] }
보상한도금액단위코드 = Array.isArray(_보상한도금액단위코드) ? _보상한도금액단위코드[__LIDX] : _보상한도금액단위코드
if( Array.isArray(_보상한도금액단위코드_Out)) { 보상한도금액단위코드_Out= [_보상한도금액단위코드_Out[__LIDX]] } else { 보상한도금액단위코드_Out = [_보상한도금액단위코드_Out] }
상품코드 = Array.isArray(_상품코드) ? _상품코드[__LIDX] : _상품코드
업종1레벨코드 = Array.isArray(_업종1레벨코드) ? _업종1레벨코드[__LIDX] : _업종1레벨코드
업종2레벨코드 = Array.isArray(_업종2레벨코드) ? _업종2레벨코드[__LIDX] : _업종2레벨코드
위험유형코드 = Array.isArray(_위험유형코드) ? _위험유형코드[__LIDX] : _위험유형코드
자기부담금액 = Array.isArray(_자기부담금액) ? _자기부담금액[__LIDX] : _자기부담금액
if( Array.isArray(_자기부담금액_Out)) { 자기부담금액_Out= [_자기부담금액_Out[__LIDX]] } else { 자기부담금액_Out = [_자기부담금액_Out] }
화폐코드 = Array.isArray(_화폐코드) ? _화폐코드[__LIDX] : _화폐코드
if( Array.isArray(_화폐코드_Out)) { 화폐코드_Out= [_화폐코드_Out[__LIDX]] } else { 화폐코드_Out = [_화폐코드_Out] }
if( Array.isArray(가입금액_Out)) { __hpasRuleResult.가입금액_Out = JSON.parse(JSON.stringify(가입금액_Out))} else { __hpasRuleResult.가입금액_Out[__LIDX] = 가입금액_Out } 
if( Array.isArray(담보코드_Out)) { __hpasRuleResult.담보코드_Out = JSON.parse(JSON.stringify(담보코드_Out))} else { __hpasRuleResult.담보코드_Out[__LIDX] = 담보코드_Out } 
if( Array.isArray(배상구분코드_Out)) { __hpasRuleResult.배상구분코드_Out = JSON.parse(JSON.stringify(배상구분코드_Out))} else { __hpasRuleResult.배상구분코드_Out[__LIDX] = 배상구분코드_Out } 
if( Array.isArray(보상한도금액단위코드_Out)) { __hpasRuleResult.보상한도금액단위코드_Out = JSON.parse(JSON.stringify(보상한도금액단위코드_Out))} else { __hpasRuleResult.보상한도금액단위코드_Out[__LIDX] = 보상한도금액단위코드_Out } 
if( Array.isArray(자기부담금액_Out)) { __hpasRuleResult.자기부담금액_Out = JSON.parse(JSON.stringify(자기부담금액_Out))} else { __hpasRuleResult.자기부담금액_Out[__LIDX] = 자기부담금액_Out } 
if( Array.isArray(화폐코드_Out)) { __hpasRuleResult.화폐코드_Out = JSON.parse(JSON.stringify(화폐코드_Out))} else { __hpasRuleResult.화폐코드_Out[__LIDX] = 화폐코드_Out } 
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [3df1d8db-ad9d-4fd9-8b3f-07d83535124b_010962] Expression 
보상한도금액체크여부 = "0"
자기부담금액체크여부 = "0"
보상한도금액적합성여부 = "1"
자기부담금액적합성여부 = "1"

}
if(canFlowNext){
// [f744db51-5054-4a59-b6ac-b49b3933d23c_010972] Rule Call Start [일반_공통_보상한도금액사이값입력체크여부조회] 
var _012_담보코드 = 담보코드 
var _012_배상구분코드 = 배상구분코드 
var _012_보상한도금액단위코드 = 보상한도금액단위코드 
var _012_상품코드 = 상품코드 
var _012_업종1레벨코드 = 업종1레벨코드 
var _012_업종2레벨코드 = 업종2레벨코드 
var _012_위험유형코드 = 위험유형코드 
var _012_화폐코드 = 화폐코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_보상한도금액사이값입력체크여부조회', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_012_상품코드,_012_위험유형코드,_012_업종1레벨코드,_012_업종2레벨코드,_012_담보코드,_012_보상한도금액단위코드,_012_배상구분코드,_012_화폐코드", "return "+ __RULE_CALL_ID__ + "(_012_상품코드,_012_위험유형코드,_012_업종1레벨코드,_012_업종2레벨코드,_012_담보코드,_012_보상한도금액단위코드,_012_배상구분코드,_012_화폐코드)"); 
var _012_rule_output = _f(_012_상품코드,_012_위험유형코드,_012_업종1레벨코드,_012_업종2레벨코드,_012_담보코드,_012_보상한도금액단위코드,_012_배상구분코드,_012_화폐코드);
if( IS_EMPTY(_012_rule_output)){ _012_rule_output= { 보상한도금액체크여부 : null }  } 
if(!IS_EMPTY(_012_rule_output.보상한도금액체크여부)){ 보상한도금액체크여부 = _012_rule_output.보상한도금액체크여부 }  
// [f744db51-5054-4a59-b6ac-b49b3933d23c_010972] Rule Call End [일반_공통_보상한도금액사이값입력체크여부조회] 
}
// join 대상변수 초기화  
var __join_012 = canFlowNext
if(canFlowNext){
// [2bd2eaab-8b27-4a20-8757-2d2208ff044a_010961] Rule Call Start [일반_공통_자기부담금액사이값입력체크여부조회] 
var _001_담보코드 = 담보코드 
var _001_배상구분코드 = 배상구분코드 
var _001_보상한도금액단위코드 = 보상한도금액단위코드 
var _001_상품코드 = 상품코드 
var _001_업종1레벨코드 = 업종1레벨코드 
var _001_업종2레벨코드 = 업종2레벨코드 
var _001_위험유형코드 = 위험유형코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_자기부담금액사이값입력체크여부조회', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_상품코드,_001_위험유형코드,_001_업종1레벨코드,_001_업종2레벨코드,_001_담보코드,_001_보상한도금액단위코드,_001_배상구분코드", "return "+ __RULE_CALL_ID__ + "(_001_상품코드,_001_위험유형코드,_001_업종1레벨코드,_001_업종2레벨코드,_001_담보코드,_001_보상한도금액단위코드,_001_배상구분코드)"); 
var _001_rule_output = _f(_001_상품코드,_001_위험유형코드,_001_업종1레벨코드,_001_업종2레벨코드,_001_담보코드,_001_보상한도금액단위코드,_001_배상구분코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 자기부담금액체크여부 : null }  } 
if(!IS_EMPTY(_001_rule_output.자기부담금액체크여부)){ 자기부담금액체크여부 = _001_rule_output.자기부담금액체크여부 }  
// [2bd2eaab-8b27-4a20-8757-2d2208ff044a_010961] Rule Call End [일반_공통_자기부담금액사이값입력체크여부조회] 
}
// join 대상변수 초기화  
var __join_001 = canFlowNext
// 조건분기 변수 초기화 
var __cond_000 = 보상한도금액체크여부 == "1"
// 조건분기 변수 초기화 
var __cond_005 = 자기부담금액체크여부 == "1"
// 조건분기 변수 초기화 
var __cond_008 = 보상한도금액체크여부 == "0" && 자기부담금액체크여부 == "0"
// join 후 진행조건 값 할당 
canFlowNext = ( __join_012 ) || ( __join_001 )
// 조건분기 값 할당 
canFlowNext = __cond_000
if(canFlowNext){
// [04011c83-b33c-4ff7-a0d3-cef2bc454519_010960] Rule Call Start [일반_공통_보상한도금액사이값입력가능금액기준표] 
var _000_가입금액 = 가입금액 
var _000_담보코드 = 담보코드 
var _000_배상구분코드 = 배상구분코드 
var _000_보상한도금액단위코드 = 보상한도금액단위코드 
var _000_상품코드 = 상품코드 
var _000_업종1레벨코드 = 업종1레벨코드 
var _000_업종2레벨코드 = 업종2레벨코드 
var _000_위험유형코드 = 위험유형코드 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_보상한도금액사이값입력가능금액기준표', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_000_상품코드,_000_위험유형코드,_000_업종1레벨코드,_000_업종2레벨코드,_000_담보코드,_000_보상한도금액단위코드,_000_배상구분코드,_000_가입금액", "return "+ __RULE_CALL_ID__ + "(_000_상품코드,_000_위험유형코드,_000_업종1레벨코드,_000_업종2레벨코드,_000_담보코드,_000_보상한도금액단위코드,_000_배상구분코드,_000_가입금액)"); 
var _000_rule_output = _f(_000_상품코드,_000_위험유형코드,_000_업종1레벨코드,_000_업종2레벨코드,_000_담보코드,_000_보상한도금액단위코드,_000_배상구분코드,_000_가입금액);
if( IS_EMPTY(_000_rule_output)){ _000_rule_output= { 보상한도금액적합성여부 : null }  } 
if(!IS_EMPTY(_000_rule_output.보상한도금액적합성여부)){ 보상한도금액적합성여부 = _000_rule_output.보상한도금액적합성여부 }  
// [04011c83-b33c-4ff7-a0d3-cef2bc454519_010960] Rule Call End [일반_공통_보상한도금액사이값입력가능금액기준표] 
}
// join 대상변수 초기화  
var __join_000 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_005
if(canFlowNext){
// [6f106435-722a-491e-a073-0be42eed2edd_010965] Rule Call Start [일반_공통_자기부담금액사이값입력가능금액기준표] 
var _005_담보코드 = 담보코드 
var _005_배상구분코드 = 배상구분코드 
var _005_보상한도금액단위코드 = 보상한도금액단위코드 
var _005_상품코드 = 상품코드 
var _005_업종1레벨코드 = 업종1레벨코드 
var _005_업종2레벨코드 = 업종2레벨코드 
var _005_위험유형코드 = 위험유형코드 
var _005_자기부담금액 = 자기부담금액 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_자기부담금액사이값입력가능금액기준표', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_005_상품코드,_005_위험유형코드,_005_업종1레벨코드,_005_업종2레벨코드,_005_담보코드,_005_보상한도금액단위코드,_005_배상구분코드,_005_자기부담금액", "return "+ __RULE_CALL_ID__ + "(_005_상품코드,_005_위험유형코드,_005_업종1레벨코드,_005_업종2레벨코드,_005_담보코드,_005_보상한도금액단위코드,_005_배상구분코드,_005_자기부담금액)"); 
var _005_rule_output = _f(_005_상품코드,_005_위험유형코드,_005_업종1레벨코드,_005_업종2레벨코드,_005_담보코드,_005_보상한도금액단위코드,_005_배상구분코드,_005_자기부담금액);
if( IS_EMPTY(_005_rule_output)){ _005_rule_output= { 자기부담금액적합성여부 : null }  } 
if(!IS_EMPTY(_005_rule_output.자기부담금액적합성여부)){ 자기부담금액적합성여부 = _005_rule_output.자기부담금액적합성여부 }  
// [6f106435-722a-491e-a073-0be42eed2edd_010965] Rule Call End [일반_공통_자기부담금액사이값입력가능금액기준표] 
}
// join 대상변수 초기화  
var __join_005 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_008
if(canFlowNext){
// [97aa2f1f-594c-4c90-8ba3-5f673bb5605c_010968] Expression 
보상한도금액적합성여부 = "1"
자기부담금액적합성여부 = "1"

}
// join 대상변수 초기화  
var __join_008 = canFlowNext
// 조건분기 변수 초기화 
var __cond_007 = 보상한도금액적합성여부 == "0" || 자기부담금액적합성여부 == "0"
// 조건분기 변수 초기화 
var __cond_013 = !( 보상한도금액적합성여부 == "0" || 자기부담금액적합성여부 == "0" ) && 보상한도금액적합성여부 == "1" && 자기부담금액적합성여부 == "1"
// join 후 진행조건 값 할당 
canFlowNext = ( __join_000 ) || ( __join_005 ) || ( __join_008 )
// 조건분기 값 할당 
canFlowNext = __cond_007
if(canFlowNext){
// [8af7c0d4-d9a8-4ff9-8192-aa26d3d36482_010967] Rule Call Start [일반_공통_보상한도금액사이값입력불가금액리스트생성] 
var _007_가입금액 = 가입금액 
var _007_가입금액_Out = IS_EMPTY(가입금액_Out) ? [] :JSON.parse(JSON.stringify(가입금액_Out)) 
var _007_담보코드 = 담보코드 
var _007_담보코드_Out = IS_EMPTY(담보코드_Out) ? [] :JSON.parse(JSON.stringify(담보코드_Out)) 
var _007_배상구분코드 = 배상구분코드 
var _007_배상구분코드_Out = IS_EMPTY(배상구분코드_Out) ? [] :JSON.parse(JSON.stringify(배상구분코드_Out)) 
var _007_보상한도금액단위코드 = 보상한도금액단위코드 
var _007_보상한도금액단위코드_Out = IS_EMPTY(보상한도금액단위코드_Out) ? [] :JSON.parse(JSON.stringify(보상한도금액단위코드_Out)) 
var _007_보상한도금액적합성여부 = 보상한도금액적합성여부 
var _007_자기부담금액 = 자기부담금액 
var _007_자기부담금액_Out = IS_EMPTY(자기부담금액_Out) ? [] :JSON.parse(JSON.stringify(자기부담금액_Out)) 
var _007_자기부담금액적합성여부 = 자기부담금액적합성여부 
var _007_화폐코드 = 화폐코드 
var _007_화폐코드_Out = IS_EMPTY(화폐코드_Out) ? [] :JSON.parse(JSON.stringify(화폐코드_Out)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('일반_공통_보상한도금액사이값입력불가금액리스트생성', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_007_담보코드,_007_담보코드_Out,_007_보상한도금액단위코드,_007_보상한도금액단위코드_Out,_007_배상구분코드,_007_배상구분코드_Out,_007_가입금액,_007_가입금액_Out,_007_자기부담금액_Out,_007_화폐코드,_007_화폐코드_Out,_007_자기부담금액,_007_보상한도금액적합성여부,_007_자기부담금액적합성여부", "return "+ __RULE_CALL_ID__ + "(_007_담보코드,_007_담보코드_Out,_007_보상한도금액단위코드,_007_보상한도금액단위코드_Out,_007_배상구분코드,_007_배상구분코드_Out,_007_가입금액,_007_가입금액_Out,_007_자기부담금액_Out,_007_화폐코드,_007_화폐코드_Out,_007_자기부담금액,_007_보상한도금액적합성여부,_007_자기부담금액적합성여부)"); 
var _007_rule_output = _f(_007_담보코드,_007_담보코드_Out,_007_보상한도금액단위코드,_007_보상한도금액단위코드_Out,_007_배상구분코드,_007_배상구분코드_Out,_007_가입금액,_007_가입금액_Out,_007_자기부담금액_Out,_007_화폐코드,_007_화폐코드_Out,_007_자기부담금액,_007_보상한도금액적합성여부,_007_자기부담금액적합성여부);
if( IS_EMPTY(_007_rule_output)){ _007_rule_output= { 가입금액_Out : [],구분코드_Out : [],담보코드_Out : [],배상구분코드_Out : [],보상한도금액단위코드_Out : [],자기부담금액_Out : [],화폐코드_Out : [] }  } 
if(!IS_EMPTY(_007_rule_output.가입금액_Out)){ 가입금액_Out = IS_EMPTY(_007_rule_output.가입금액_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.가입금액_Out)) }  
if(!IS_EMPTY(_007_rule_output.구분코드_Out)){ 구분코드_Out = IS_EMPTY(_007_rule_output.구분코드_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.구분코드_Out)) }  
if(!IS_EMPTY(_007_rule_output.담보코드_Out)){ 담보코드_Out = IS_EMPTY(_007_rule_output.담보코드_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.담보코드_Out)) }  
if(!IS_EMPTY(_007_rule_output.배상구분코드_Out)){ 배상구분코드_Out = IS_EMPTY(_007_rule_output.배상구분코드_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.배상구분코드_Out)) }  
if(!IS_EMPTY(_007_rule_output.보상한도금액단위코드_Out)){ 보상한도금액단위코드_Out = IS_EMPTY(_007_rule_output.보상한도금액단위코드_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.보상한도금액단위코드_Out)) }  
if(!IS_EMPTY(_007_rule_output.자기부담금액_Out)){ 자기부담금액_Out = IS_EMPTY(_007_rule_output.자기부담금액_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.자기부담금액_Out)) }  
if(!IS_EMPTY(_007_rule_output.화폐코드_Out)){ 화폐코드_Out = IS_EMPTY(_007_rule_output.화폐코드_Out) ? [] : JSON.parse(JSON.stringify(_007_rule_output.화폐코드_Out)) }  
// [8af7c0d4-d9a8-4ff9-8192-aa26d3d36482_010967] Rule Call End [일반_공통_보상한도금액사이값입력불가금액리스트생성] 
}
// join 대상변수 초기화  
var __join_007 = canFlowNext
// 조건분기 값 할당 
canFlowNext = __cond_013
if(canFlowNext){
// [ffc87c64-22d6-4b93-be0f-b45957a14087_010973] Expression 
null
}
// join 대상변수 초기화  
var __join_013 = canFlowNext
if( Array.isArray(가입금액_Out)) { __hpasRuleResult.가입금액_Out = JSON.parse(JSON.stringify(가입금액_Out))} else { __hpasRuleResult.가입금액_Out[__LIDX] = 가입금액_Out } 
if( Array.isArray(구분코드_Out)) { __hpasRuleResult.구분코드_Out = JSON.parse(JSON.stringify(구분코드_Out))} else { __hpasRuleResult.구분코드_Out[__LIDX] = 구분코드_Out } 
if( Array.isArray(담보코드_Out)) { __hpasRuleResult.담보코드_Out = JSON.parse(JSON.stringify(담보코드_Out))} else { __hpasRuleResult.담보코드_Out[__LIDX] = 담보코드_Out } 
if( Array.isArray(배상구분코드_Out)) { __hpasRuleResult.배상구분코드_Out = JSON.parse(JSON.stringify(배상구분코드_Out))} else { __hpasRuleResult.배상구분코드_Out[__LIDX] = 배상구분코드_Out } 
if( Array.isArray(보상한도금액단위코드_Out)) { __hpasRuleResult.보상한도금액단위코드_Out = JSON.parse(JSON.stringify(보상한도금액단위코드_Out))} else { __hpasRuleResult.보상한도금액단위코드_Out[__LIDX] = 보상한도금액단위코드_Out } 
if( Array.isArray(자기부담금액_Out)) { __hpasRuleResult.자기부담금액_Out = JSON.parse(JSON.stringify(자기부담금액_Out))} else { __hpasRuleResult.자기부담금액_Out[__LIDX] = 자기부담금액_Out } 
if( Array.isArray(화폐코드_Out)) { __hpasRuleResult.화폐코드_Out = JSON.parse(JSON.stringify(화폐코드_Out))} else { __hpasRuleResult.화폐코드_Out[__LIDX] = 화폐코드_Out } 
} 
return RESULT( __hpasRuleResult); 
}