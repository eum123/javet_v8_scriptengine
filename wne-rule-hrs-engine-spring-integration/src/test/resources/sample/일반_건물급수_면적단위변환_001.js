var 일반_건물급수_면적단위변환_001 = function(__LIDX,바닥면적,면적단위코드,바닥면적합계 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 바닥면적 = 바닥면적;
    var 면적단위코드 = 면적단위코드;
    var 바닥면적합계 = 바닥면적합계;

    // Compiler Version 1 , Created : 2023-08-21 18:32:48
    if(__LIDX == 0){
        바닥면적합계 = 0

    }

    if(면적단위코드 == "02"){
        바닥면적=(AMT(바닥면적)).multiply(AMT(3.3))
면적단위코드 = "01"

    }

    if(true){
        바닥면적합계 = 바닥면적합계 + 바닥면적

    }
    __hpasRuleResult = {
        바닥면적 : 바닥면적 , 면적단위코드 : 면적단위코드 , 바닥면적합계 : 바닥면적합계
    }

    return RESULT(__hpasRuleResult);
};