var 일반_공통_해외여행보험료산출검증_001 = function(보험료관리여부,최종보험료,메시지,담보코드,화폐코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 메시지 = 메시지;
    if(
IS_EMPTY(메시지)==true
){
메시지=""
}


    // Compiler Version 1 , Created : 2023-08-23 16:07:17
    if(보험료관리여부 == "1" && 최종보험료 < 0 && 메시지 == ""
){
        메시지 = "FIRE0063"

    }
    __hpasRuleResult = {
        메시지 : 메시지
    }

    return RESULT(__hpasRuleResult);
};