var 일반_종합_골프_출력값형식처리_001 = function(단기요율,단체할인율,부부가족적용요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 단기요율 = 단기요율;
    var 단체할인율 = 단체할인율;
    var 부부가족적용요율 = 부부가족적용요율;

    // Compiler Version 1 , Created : 2023-08-23 17:03:53
    if(true
){
        단기요율=ROUND((AMT(단기요율)).multiply(AMT(100)),1)

    }

    if(true
){
        단체할인율=ROUND((AMT(단체할인율)).multiply(AMT(100)),1)

    }

    if(true
){
        부부가족적용요율=ROUND((AMT(부부가족적용요율)).multiply(AMT(100)),1)

    }
    __hpasRuleResult = {
        단기요율 : 단기요율 , 단체할인율 : 단체할인율 , 부부가족적용요율 : 부부가족적용요율
    }

    return RESULT(__hpasRuleResult);
};