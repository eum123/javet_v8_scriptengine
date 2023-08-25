var 일반_종합_학생실습_출력값형식처리_001 = function(단기요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 단기요율 = 단기요율;

    // Compiler Version 1 , Created : 2023-08-23 17:20:27
    if(true
){
        단기요율=ROUND((AMT(단기요율)).multiply(AMT(100)),1)

    }
    __hpasRuleResult = {
        단기요율 : 단기요율
    }

    return RESULT(__hpasRuleResult);
};