var 일반_상해_스포츠_건강보험비가입자의료실비할증_001 = function(건강보험가입여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 건강보험비가입자할증율 = null;
    건강보험비가입자할증율 = 0


    // Compiler Version 1 , Created : 2023-08-23 14:50:45
    if(건강보험가입여부 == "0"
){
        건강보험비가입자할증율 = 1.567

    }
    __hpasRuleResult = {
        건강보험비가입자할증율 : 건강보험비가입자할증율
    }

    return RESULT(__hpasRuleResult);
};