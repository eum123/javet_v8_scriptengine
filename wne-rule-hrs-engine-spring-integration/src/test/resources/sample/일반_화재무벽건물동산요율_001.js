var 일반_화재무벽건물동산요율_001 = function(목적물유형코드,물건구분코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 17:39:48
    if(((목적물유형코드 == "MFA10160"/*무벽건물동산*/))
    && ((물건구분코드 == '2'))){
        __hpasRuleResult = {
'순요율' : 0.185 , '특정물건여부' : "1"
}

    }
    else if(((목적물유형코드 == "MFA10160"/*무벽건물동산*/))
    && ((물건구분코드 == '3'))){
        __hpasRuleResult = {
'순요율' : 0.231 , '특정물건여부' : "1"
}

    }

    return RESULT(__hpasRuleResult);
};