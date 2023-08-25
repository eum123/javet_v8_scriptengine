var 일반_공통_순요율검증_001 = function(순요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 메시지 = null;
    if(
IS_EMPTY(메시지)==true
){
메시지=""
}


    // Compiler Version 1 , Created : 2023-08-23 15:35:12
    if(순요율 <= 0
){
        메시지 = "FIRE0198"

    }
    __hpasRuleResult = {
        메시지 : 메시지
    }

    return RESULT(__hpasRuleResult);
};