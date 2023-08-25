var 장기_이미지심사_001 = function (결혼여부,단체계약구분코드,만연령,문서인식여부,버전정보,보험시기_S,보험종목코드,부실관리대상계약여부,부코드,분류번호,사망담보가입여부,사망이외보험금수익자관계코드,상품분류코드,선후스캔구분,설계구분코드,설계심사종결여부,수동스캔여부,스캔작업직원구분코드,알릴사항인정시작일자,알릴사항인정종료일자,알릴사항작성일자,위배대상구분코드_S,의료비담보건수,의료비조회계약건수,의료비조회대상여부,의료비조회여부,의료비조회출력여부,이미지내용,이미지내용한글명,이미지심사종결여부,임신경과주,청약_이미지동일여부,청약내용,청약내용한글명,출력물품목코드,출력물한글명,페이지순번,고객식별번호구분코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 장기인수지침위배코드 : [],메시지_코드 : [],위배대상구분코드 : [],메시지 : [] }
var 버전정보  = IS_EMPTY(버전정보) ? [] : JSON.parse(JSON.stringify(버전정보))
var 결혼여부  = IS_EMPTY(결혼여부) ? [] : JSON.parse(JSON.stringify(결혼여부))
var 고객식별번호구분코드  = IS_EMPTY(고객식별번호구분코드) ? [] : JSON.parse(JSON.stringify(고객식별번호구분코드))
var 단체계약구분코드  = 단체계약구분코드
var 만연령  = IS_EMPTY(만연령) ? [] : JSON.parse(JSON.stringify(만연령))
var 메시지 = []
var 메시지_코드 = []
var 문서인식여부  = IS_EMPTY(문서인식여부) ? [] : JSON.parse(JSON.stringify(문서인식여부))
var 보험시기_S  = IS_EMPTY(보험시기_S) ? [] : JSON.parse(JSON.stringify(보험시기_S))
var 보험종목코드  = 보험종목코드
var 부실관리대상계약여부  = 부실관리대상계약여부
var 부코드  = IS_EMPTY(부코드) ? [] : JSON.parse(JSON.stringify(부코드))
var 분류번호  = IS_EMPTY(분류번호) ? [] : JSON.parse(JSON.stringify(분류번호))
var 사망담보가입여부  = 사망담보가입여부
var 사망이외보험금수익자관계코드  = 사망이외보험금수익자관계코드
var 상품분류코드  = 상품분류코드
var 선후스캔구분  = IS_EMPTY(선후스캔구분) ? [] : JSON.parse(JSON.stringify(선후스캔구분))
var 설계구분코드  = 설계구분코드
var 설계심사종결여부  = 설계심사종결여부
var 수동스캔여부  = IS_EMPTY(수동스캔여부) ? [] : JSON.parse(JSON.stringify(수동스캔여부))
var 스캔작업직원구분코드  = IS_EMPTY(스캔작업직원구분코드) ? [] : JSON.parse(JSON.stringify(스캔작업직원구분코드))
var 알릴사항인정시작일자  = 알릴사항인정시작일자
var 알릴사항인정종료일자  = 알릴사항인정종료일자
var 알릴사항작성일자  = 알릴사항작성일자
var 위배대상구분코드 = []
var 위배대상구분코드_S  = IS_EMPTY(위배대상구분코드_S) ? [] : JSON.parse(JSON.stringify(위배대상구분코드_S))
var 의료비담보건수  = 의료비담보건수
var 의료비조회계약건수  = 의료비조회계약건수
var 의료비조회대상여부  = 의료비조회대상여부
var 의료비조회여부  = 의료비조회여부
var 의료비조회출력여부  = 의료비조회출력여부
var 이미지내용  = IS_EMPTY(이미지내용) ? [] : JSON.parse(JSON.stringify(이미지내용))
var 이미지내용한글명  = IS_EMPTY(이미지내용한글명) ? [] : JSON.parse(JSON.stringify(이미지내용한글명))
var 이미지심사종결여부  = 이미지심사종결여부
var 임신경과주  = IS_EMPTY(임신경과주) ? [] : JSON.parse(JSON.stringify(임신경과주))
var 장기인수지침위배코드 = []
var 청약_이미지동일여부  = IS_EMPTY(청약_이미지동일여부) ? [] : JSON.parse(JSON.stringify(청약_이미지동일여부))
var 청약내용  = IS_EMPTY(청약내용) ? [] : JSON.parse(JSON.stringify(청약내용))
var 청약내용한글명  = IS_EMPTY(청약내용한글명) ? [] : JSON.parse(JSON.stringify(청약내용한글명))
var 출력물품목코드  = IS_EMPTY(출력물품목코드) ? [] : JSON.parse(JSON.stringify(출력물품목코드))
var 출력물한글명  = IS_EMPTY(출력물한글명) ? [] : JSON.parse(JSON.stringify(출력물한글명))
var 페이지순번  = IS_EMPTY(페이지순번) ? [] : JSON.parse(JSON.stringify(페이지순번))
var __LIDX = null
var __LSIZE = null
var __TARGET_DATE__ = null
var 메시지_임시 = []
var 메시지_코드_임시 = []
var 위배대상구분코드_임시 = []
var 장기인수지침위배코드_임시 = []
var 출력_원수분해세부구분코드_임시 = []
// flow진행변수 초기화 
var canFlowNext = true 

// 조건분기 변수 초기화 
var __cond_005 = true
// 조건분기 변수 초기화 
var __cond_002 = !( true ) && 알릴사항인정시작일자 == "*" || 알릴사항인정종료일자 == "*" || 알릴사항작성일자 == "*"
// 조건분기 값 할당 
canFlowNext = __cond_005
if(canFlowNext){
// [b5fc5cf0-a38f-4be5-a208-727d298c37f3_012085] Rule Call Start [장기_인수지침_이미지심사_가상] 
var _005_단체계약구분코드 = 단체계약구분코드 
var _005_보험시기_S = IS_EMPTY(보험시기_S) ? [] :JSON.parse(JSON.stringify(보험시기_S)) 
var _005_설계구분코드 = 설계구분코드 
var _005_알릴사항인정시작일자 = 알릴사항인정시작일자 
var _005_알릴사항인정종료일자 = 알릴사항인정종료일자 
var _005_알릴사항작성일자 = 알릴사항작성일자 
var _005_의료비조회계약건수 = 의료비조회계약건수 
var _005_의료비조회대상여부 = 의료비조회대상여부 
var _005_의료비조회여부 = 의료비조회여부 
var _005_출력물한글명 = IS_EMPTY(출력물한글명) ? [] :JSON.parse(JSON.stringify(출력물한글명)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_인수지침_이미지심사_가상', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_005_단체계약구분코드,_005_보험시기_S,_005_설계구분코드,_005_알릴사항인정시작일자,_005_알릴사항인정종료일자,_005_알릴사항작성일자,_005_의료비조회계약건수,_005_의료비조회대상여부,_005_의료비조회여부,_005_출력물한글명", "return "+ __RULE_CALL_ID__ + "(_005_단체계약구분코드,_005_보험시기_S,_005_설계구분코드,_005_알릴사항인정시작일자,_005_알릴사항인정종료일자,_005_알릴사항작성일자,_005_의료비조회계약건수,_005_의료비조회대상여부,_005_의료비조회여부,_005_출력물한글명)"); 
var _005_rule_output = _f(_005_단체계약구분코드,_005_보험시기_S,_005_설계구분코드,_005_알릴사항인정시작일자,_005_알릴사항인정종료일자,_005_알릴사항작성일자,_005_의료비조회계약건수,_005_의료비조회대상여부,_005_의료비조회여부,_005_출력물한글명);
if( IS_EMPTY(_005_rule_output)){ _005_rule_output= { 메시지 : [],메시지_코드 : [],위배대상구분코드 : [],장기인수지침위배코드 : [] }  } 
if(!IS_EMPTY(_005_rule_output.메시지)){ 메시지 = IS_EMPTY(_005_rule_output.메시지) ? [] : JSON.parse(JSON.stringify(_005_rule_output.메시지)) }  
if(!IS_EMPTY(_005_rule_output.메시지_코드)){ 메시지_코드 = IS_EMPTY(_005_rule_output.메시지_코드) ? [] : JSON.parse(JSON.stringify(_005_rule_output.메시지_코드)) }  
if(!IS_EMPTY(_005_rule_output.위배대상구분코드)){ 위배대상구분코드 = IS_EMPTY(_005_rule_output.위배대상구분코드) ? [] : JSON.parse(JSON.stringify(_005_rule_output.위배대상구분코드)) }  
if(!IS_EMPTY(_005_rule_output.장기인수지침위배코드)){ 장기인수지침위배코드 = IS_EMPTY(_005_rule_output.장기인수지침위배코드) ? [] : JSON.parse(JSON.stringify(_005_rule_output.장기인수지침위배코드)) }  
// [b5fc5cf0-a38f-4be5-a208-727d298c37f3_012085] Rule Call End [장기_인수지침_이미지심사_가상] 
}
// join 대상변수 초기화  
var __join_005 = __cond_005
// 조건분기 값 할당 
canFlowNext = __cond_002
if(canFlowNext){
// [5798de9f-18bd-46a9-b4fa-0eeca882953f_012082] Expression 
null
}
// join 대상변수 초기화  
var __join_002 = __cond_002
// join 후 진행조건 값 할당 
canFlowNext = ( __join_005 ) || ( __join_002 )
if(canFlowNext){
// [18102011-6b91-4b27-8419-77bb76e05c1d_012081] Rule Call Start [장기_인수지침_이미지심사_LOOP] 
var _001_결혼여부 = IS_EMPTY(결혼여부) ? [] :JSON.parse(JSON.stringify(결혼여부)) 
var _001_고객식별번호구분코드 = IS_EMPTY(고객식별번호구분코드) ? [] :JSON.parse(JSON.stringify(고객식별번호구분코드)) 
var _001_만연령 = IS_EMPTY(만연령) ? [] :JSON.parse(JSON.stringify(만연령)) 
var _001_문서인식여부 = IS_EMPTY(문서인식여부) ? [] :JSON.parse(JSON.stringify(문서인식여부)) 
var _001_버전정보 = IS_EMPTY(버전정보) ? [] :JSON.parse(JSON.stringify(버전정보)) 
var _001_보험시기_S = IS_EMPTY(보험시기_S) ? [] :JSON.parse(JSON.stringify(보험시기_S)) 
var _001_보험종목코드 = 보험종목코드 
var _001_부실관리대상계약여부 = 부실관리대상계약여부 
var _001_부코드 = IS_EMPTY(부코드) ? [] :JSON.parse(JSON.stringify(부코드)) 
var _001_분류번호 = IS_EMPTY(분류번호) ? [] :JSON.parse(JSON.stringify(분류번호)) 
var _001_사망담보가입여부 = 사망담보가입여부 
var _001_사망이외보험금수익자관계코드 = 사망이외보험금수익자관계코드 
var _001_상품분류코드 = 상품분류코드 
var _001_선후스캔구분 = IS_EMPTY(선후스캔구분) ? [] :JSON.parse(JSON.stringify(선후스캔구분)) 
var _001_설계심사종결여부 = 설계심사종결여부 
var _001_수동스캔여부 = IS_EMPTY(수동스캔여부) ? [] :JSON.parse(JSON.stringify(수동스캔여부)) 
var _001_스캔작업직원구분코드 = IS_EMPTY(스캔작업직원구분코드) ? [] :JSON.parse(JSON.stringify(스캔작업직원구분코드)) 
var _001_위배대상구분코드_S = IS_EMPTY(위배대상구분코드_S) ? [] :JSON.parse(JSON.stringify(위배대상구분코드_S)) 
var _001_의료비담보건수 = 의료비담보건수 
var _001_이미지내용 = IS_EMPTY(이미지내용) ? [] :JSON.parse(JSON.stringify(이미지내용)) 
var _001_이미지내용한글명 = IS_EMPTY(이미지내용한글명) ? [] :JSON.parse(JSON.stringify(이미지내용한글명)) 
var _001_이미지심사종결여부 = 이미지심사종결여부 
var _001_임신경과주 = IS_EMPTY(임신경과주) ? [] :JSON.parse(JSON.stringify(임신경과주)) 
var _001_청약_이미지동일여부 = IS_EMPTY(청약_이미지동일여부) ? [] :JSON.parse(JSON.stringify(청약_이미지동일여부)) 
var _001_청약내용 = IS_EMPTY(청약내용) ? [] :JSON.parse(JSON.stringify(청약내용)) 
var _001_청약내용한글명 = IS_EMPTY(청약내용한글명) ? [] :JSON.parse(JSON.stringify(청약내용한글명)) 
var _001_출력물품목코드 = IS_EMPTY(출력물품목코드) ? [] :JSON.parse(JSON.stringify(출력물품목코드)) 
var _001_출력물한글명 = IS_EMPTY(출력물한글명) ? [] :JSON.parse(JSON.stringify(출력물한글명)) 
var _001_페이지순번 = IS_EMPTY(페이지순번) ? [] :JSON.parse(JSON.stringify(페이지순번)) 
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__; 
var __RULE_CALL_ID__ = RULESEARCH('장기_인수지침_이미지심사_LOOP', __RULE_INQUIRY_BASE_DATE__); 
var _f = new Function("_001_결혼여부,_001_만연령,_001_문서인식여부,_001_버전정보,_001_보험시기_S,_001_보험종목코드,_001_부실관리대상계약여부,_001_부코드,_001_분류번호,_001_사망담보가입여부,_001_사망이외보험금수익자관계코드,_001_상품분류코드,_001_선후스캔구분,_001_설계심사종결여부,_001_수동스캔여부,_001_스캔작업직원구분코드,_001_위배대상구분코드_S,_001_의료비담보건수,_001_이미지내용,_001_이미지내용한글명,_001_이미지심사종결여부,_001_임신경과주,_001_청약_이미지동일여부,_001_청약내용,_001_청약내용한글명,_001_출력물품목코드,_001_출력물한글명,_001_페이지순번,_001_고객식별번호구분코드", "return "+ __RULE_CALL_ID__ + "(_001_결혼여부,_001_만연령,_001_문서인식여부,_001_버전정보,_001_보험시기_S,_001_보험종목코드,_001_부실관리대상계약여부,_001_부코드,_001_분류번호,_001_사망담보가입여부,_001_사망이외보험금수익자관계코드,_001_상품분류코드,_001_선후스캔구분,_001_설계심사종결여부,_001_수동스캔여부,_001_스캔작업직원구분코드,_001_위배대상구분코드_S,_001_의료비담보건수,_001_이미지내용,_001_이미지내용한글명,_001_이미지심사종결여부,_001_임신경과주,_001_청약_이미지동일여부,_001_청약내용,_001_청약내용한글명,_001_출력물품목코드,_001_출력물한글명,_001_페이지순번,_001_고객식별번호구분코드)"); 
var _001_rule_output = _f(_001_결혼여부,_001_만연령,_001_문서인식여부,_001_버전정보,_001_보험시기_S,_001_보험종목코드,_001_부실관리대상계약여부,_001_부코드,_001_분류번호,_001_사망담보가입여부,_001_사망이외보험금수익자관계코드,_001_상품분류코드,_001_선후스캔구분,_001_설계심사종결여부,_001_수동스캔여부,_001_스캔작업직원구분코드,_001_위배대상구분코드_S,_001_의료비담보건수,_001_이미지내용,_001_이미지내용한글명,_001_이미지심사종결여부,_001_임신경과주,_001_청약_이미지동일여부,_001_청약내용,_001_청약내용한글명,_001_출력물품목코드,_001_출력물한글명,_001_페이지순번,_001_고객식별번호구분코드);
if( IS_EMPTY(_001_rule_output)){ _001_rule_output= { 메시지_임시 : [],메시지_코드_임시 : [],위배대상구분코드_임시 : [],장기인수지침위배코드_임시 : [] }  } 
if(!IS_EMPTY(_001_rule_output.메시지_임시)){ 메시지_임시 = IS_EMPTY(_001_rule_output.메시지_임시) ? [] : JSON.parse(JSON.stringify(_001_rule_output.메시지_임시)) }  
if(!IS_EMPTY(_001_rule_output.메시지_코드_임시)){ 메시지_코드_임시 = IS_EMPTY(_001_rule_output.메시지_코드_임시) ? [] : JSON.parse(JSON.stringify(_001_rule_output.메시지_코드_임시)) }  
if(!IS_EMPTY(_001_rule_output.위배대상구분코드_임시)){ 위배대상구분코드_임시 = IS_EMPTY(_001_rule_output.위배대상구분코드_임시) ? [] : JSON.parse(JSON.stringify(_001_rule_output.위배대상구분코드_임시)) }  
if(!IS_EMPTY(_001_rule_output.장기인수지침위배코드_임시)){ 장기인수지침위배코드_임시 = IS_EMPTY(_001_rule_output.장기인수지침위배코드_임시) ? [] : JSON.parse(JSON.stringify(_001_rule_output.장기인수지침위배코드_임시)) }  
// [18102011-6b91-4b27-8419-77bb76e05c1d_012081] Rule Call End [장기_인수지침_이미지심사_LOOP] 
}
if(canFlowNext){
// [10d9dd80-9659-41e6-8f24-fa87877e439a_012080] Expression 
if(
메시지_코드_임시.length>0
){
CONCAT_ARRAY(메시지,메시지_임시)
CONCAT_ARRAY(메시지_코드,메시지_코드_임시)
CONCAT_ARRAY(장기인수지침위배코드,장기인수지침위배코드_임시)
CONCAT_ARRAY(위배대상구분코드,위배대상구분코드_임시)
}

}
__hpasRuleResult.메시지  = IS_EMPTY(메시지) ? [] : JSON.parse(JSON.stringify(메시지))
__hpasRuleResult.메시지_코드  = IS_EMPTY(메시지_코드) ? [] : JSON.parse(JSON.stringify(메시지_코드))
__hpasRuleResult.위배대상구분코드  = IS_EMPTY(위배대상구분코드) ? [] : JSON.parse(JSON.stringify(위배대상구분코드))
__hpasRuleResult.장기인수지침위배코드  = IS_EMPTY(장기인수지침위배코드) ? [] : JSON.parse(JSON.stringify(장기인수지침위배코드))
return RESULT( __hpasRuleResult); 
}