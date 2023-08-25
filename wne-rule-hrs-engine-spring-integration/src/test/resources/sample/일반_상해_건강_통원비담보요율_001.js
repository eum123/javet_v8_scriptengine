var 일반_상해_건강_통원비담보요율_001 = function(담보코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 순요율 = null;

    // Compiler Version 1 , Created : 2023-08-23 16:19:23
    if(담보코드 == "CFA10567"
){
        순요율 = 25947

    }
    __hpasRuleResult = {
        순요율 : 순요율
    }

    return RESULT(__hpasRuleResult);
};