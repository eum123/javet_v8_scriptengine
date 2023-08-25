var 일반_건물급수_열급바닥할증계수조회_001 = function(열급바닥면적비율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:55:58
    if(((열급바닥면적비율 <= 10))){
        __hpasRuleResult = {
'열급바닥할증계수' : 1.1
}

    }
    else if(((열급바닥면적비율 > 10)&&(열급바닥면적비율 <= 20))){
        __hpasRuleResult = {
'열급바닥할증계수' : 1.2
}

    }
    else if(((열급바닥면적비율 > 20)&&(열급바닥면적비율 <= 30))){
        __hpasRuleResult = {
'열급바닥할증계수' : 1.3
}

    }
    열급바닥면적비율=(AMT(열급바닥면적비율)).multiply(AMT(100))


    return RESULT(__hpasRuleResult);
};