var 일반_상해수술비용담보요율_001 = function(담보코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 10:54:02
    if(((담보코드 == "CFA10505")||(담보코드 == "CFA11649"))){
        __hpasRuleResult = {
'순요율' : 70.7
}

    }

    return RESULT(__hpasRuleResult);
};