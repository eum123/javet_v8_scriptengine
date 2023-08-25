var 일반_상해_공통_상해3급할증율처리_001 = function(할인할증구분코드,상해급수코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 상해3급할증율 = null;

    // Compiler Version 1 , Created : 2023-08-23 16:26:22
    if(상해급수코드 != "3" || 할인할증구분코드 != "02"
){
        상해3급할증율 = 0

    }
    __hpasRuleResult = {
        상해3급할증율 : 상해3급할증율
    }

    return RESULT(__hpasRuleResult);
};