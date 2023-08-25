var 일반_건물급수_복합구조요율적용_001 = function(열급바닥할증계수,평균요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 복합구조적용요율 = null;

    // Compiler Version 1 , Created : 2023-08-21 18:33:12
    if(true){
        복합구조적용요율=ROUND((AMT(평균요율)).multiply(AMT(열급바닥할증계수)),5)

    }
    if(
IS_EMPTY(복합구조적용요율)==true
){
복합구조적용요율=0
}

    __hpasRuleResult = {
        복합구조적용요율 : 복합구조적용요율
    }

    return RESULT(__hpasRuleResult);
};