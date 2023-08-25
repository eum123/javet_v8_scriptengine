var 일반_상해_건강_단체할인율_001 = function(피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 단체할인율 = null;
    단체할인율 = 0


    // Compiler Version 1 , Created : 2023-08-23 16:29:52
    if(피보험자수 >= 20 && 피보험자수 < 100
){
        단체할인율 = 0.05

    }

    if(피보험자수 >= 100 && 피보험자수 < 500
){
        단체할인율 = 0.1

    }

    if(피보험자수 >= 500 && 피보험자수 < 1000
){
        단체할인율 = 0.15

    }

    if(피보험자수 >= 1000
){
        단체할인율 = 0.20

    }
    __hpasRuleResult = {
        단체할인율 : 단체할인율
    }

    return RESULT(__hpasRuleResult);
};