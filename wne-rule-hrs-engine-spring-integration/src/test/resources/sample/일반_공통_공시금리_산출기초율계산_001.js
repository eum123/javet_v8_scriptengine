var 일반_공통_공시금리_산출기초율계산_001 = function( ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 분납할증산출기초율 = null;

    // Compiler Version 1 , Created : 2023-08-21 18:33:24
    if(true){
        개발원공시금리=0.024

    }

    if(true){
        분납할증산출기초율=(AMT(1)).divide(AMT(1).add(AMT(개발원공시금리)), 20, BigDecimal.ROUND_DOWN)

    }
    var 룰유틸
var 개발원공시금리 

    __hpasRuleResult = {
        분납할증산출기초율 : 분납할증산출기초율
    }

    return RESULT(__hpasRuleResult);
};