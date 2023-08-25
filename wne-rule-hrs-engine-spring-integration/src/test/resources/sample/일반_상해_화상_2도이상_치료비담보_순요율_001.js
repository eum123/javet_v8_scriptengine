var 일반_상해_화상_2도이상_치료비담보_순요율_001 = function(담보코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:16:49
    if(((담보코드 == "CFA11865"))){
        __hpasRuleResult = {
'순요율' : 0.005752
}

    }

    return RESULT(__hpasRuleResult);
};