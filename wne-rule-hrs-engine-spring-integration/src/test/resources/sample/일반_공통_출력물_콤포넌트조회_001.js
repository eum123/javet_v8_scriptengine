var 일반_공통_출력물_콤포넌트조회_001 = function (계약시작일자,출력물ID,상품분류코드,보종코드,상품코드,약관언어구분코드){
var __TARGET_DATE__; 
var BigDecimal = Java.type('java.math.BigDecimal');
var __hpasRuleResult = { 콤포넌트아이디 : [],적용영역 : [],위험유형코드 : [],담보코드 : [],행순번 : [],열순번 : [],적용항목 : [],적용조건 : [] }
var 계약시작일자  = 계약시작일자
var 담보코드 = []
var 보종코드  = 보종코드
var 상품분류코드  = 상품분류코드
var 상품코드  = 상품코드
var 약관언어구분코드  = 약관언어구분코드
var 열순번 = []
var 위험유형코드 = []
var 적용영역 = []
var 적용조건 = []
var 적용항목 = []
var 출력물ID  = 출력물ID
var 콤포넌트아이디 = []
var 행순번 = []
var 콤포넌트순번 = []
var 적용항목명 = []
var 상태코드 = null
var 상위위험유형코드 = null
var 수정상태코드 = []
var 필수입력여부 = []
var 기본값S = []
var 행높이 = []
var 속성코드 = []
var 적용코드 = []
var 화면CLASS정보 = []
var 길이 = []
var 화면표시구성요소구분코드 = []
var 임시_길이 = []
var 임시_행높이 = []
var 임시_화면표시구성요소구분코드 = []
var 임시_수정상태코드 = []
var 임시_콤포넌트아이디 = []
var 임시_행순번 = []
var 임시_화면CLASS정보 = []
var 임시_콤포넌트아이디_조회 = null
var 임시_속성코드 = []
var 임시_적용코드 = []
var __TARGET_DATE__ = null
var 기준일자 = null
var 임시_콤포넌트순번 = []
var 임시_적용항목 = []
var 임시_필수입력여부 = []
var TEMP_IDX = null
var IDX1 = null
var IDX2 = null
var IDX3 = null
var IDX4 = null
var 임시_열순번 = []
var 임시_적용항목명 = []
var 임시_담보코드 = []
var 임시_위험유형코드 = []
var 임시_적용영역 = []
var 임시_적용조건 = []
// flow진행변수 초기화 
var canFlowNext = true 

if(canFlowNext){
// [9b55ce38_30ed_4f8e_8455_0d7a13a27c05_014847] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('9b55ce38_30ed_4f8e_8455_0d7a13a27c05_014847');
 IDX3 = IDX4 + IDX2

}
if(canFlowNext){
// [3f0c0b69_0fed_4b12_9aa5_49d62c23353b_014845] Expression 
_GET_GLOBAL('__hrs_flowNode_logger').push('3f0c0b69_0fed_4b12_9aa5_49d62c23353b_014845');
 콤포넌트아이디[IDX3] = 임시_콤포넌트아이디[IDX1]
적용영역[IDX3] = 임시_적용영역[IDX2]
위험유형코드[IDX3] = 임시_위험유형코드[IDX2]
담보코드[IDX3] = 임시_담보코드[IDX2]
행순번[IDX3] = 임시_행순번[IDX2]
열순번[IDX3] = 임시_열순번[IDX2]
적용항목[IDX3] = 임시_적용항목[IDX2]
적용조건[IDX3] = 임시_적용조건[IDX2]

}
__hpasRuleResult.콤포넌트아이디  = IS_EMPTY(콤포넌트아이디) ? [] : JSON.parse(JSON.stringify(콤포넌트아이디))
__hpasRuleResult.적용영역  = IS_EMPTY(적용영역) ? [] : JSON.parse(JSON.stringify(적용영역))
__hpasRuleResult.위험유형코드  = IS_EMPTY(위험유형코드) ? [] : JSON.parse(JSON.stringify(위험유형코드))
__hpasRuleResult.담보코드  = IS_EMPTY(담보코드) ? [] : JSON.parse(JSON.stringify(담보코드))
__hpasRuleResult.행순번  = IS_EMPTY(행순번) ? [] : JSON.parse(JSON.stringify(행순번))
__hpasRuleResult.열순번  = IS_EMPTY(열순번) ? [] : JSON.parse(JSON.stringify(열순번))
__hpasRuleResult.적용항목  = IS_EMPTY(적용항목) ? [] : JSON.parse(JSON.stringify(적용항목))
__hpasRuleResult.적용조건  = IS_EMPTY(적용조건) ? [] : JSON.parse(JSON.stringify(적용조건))
return RESULT( __hpasRuleResult); 
}