var 일반_상해의료실비가입금액합계_001 = function(가입금액,의료실비가입금액합계,담보코드,의료실비여부,입통원의료비여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 의료실비가입금액합계 = 의료실비가입금액합계;
    if(
IS_EMPTY(의료실비가입금액합계)==true
){
의료실비가입금액합계=0
}


    // Compiler Version 1 , Created : 2023-08-23 16:20:02
    if(의료실비여부 == "1" && 입통원의료비여부 == "0"
){
        의료실비가입금액합계 = 의료실비가입금액합계 + 가입금액

    }
    __hpasRuleResult = {
        의료실비가입금액합계 : 의료실비가입금액합계
    }

    return RESULT(__hpasRuleResult);
};