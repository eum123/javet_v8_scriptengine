var 일반_상해_공통_부부및가족적용요율_001 = function(계약형태코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 부부가족적용요율 = null;
    부부가족적용요율 = 1


    // Compiler Version 1 , Created : 2023-08-23 16:00:13
    if(계약형태코드 == '05' || 계약형태코드 == '06'
){
        부부가족적용요율 = 0.9

    }
    __hpasRuleResult = {
        부부가족적용요율 : 부부가족적용요율
    }

    return RESULT(__hpasRuleResult);
};