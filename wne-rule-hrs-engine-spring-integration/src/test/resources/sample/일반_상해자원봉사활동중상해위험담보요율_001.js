var 일반_상해자원봉사활동중상해위험담보요율_001 = function(담보코드,자원봉사활동담보구분코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 10:24:34
    if(((담보코드 == "CFA10473"))
    && ((자원봉사활동담보구분코드 == '01'))){
        __hpasRuleResult = {
'순요율' : 0.00062
}

    }
    else if(((담보코드 == "CFA10474"))
    && ((자원봉사활동담보구분코드 == '01'))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10473"))
    && ((자원봉사활동담보구분코드 == '02'))){
        __hpasRuleResult = {
'순요율' : 0.00504
}

    }
    else if(((담보코드 == "CFA10474"))
    && ((자원봉사활동담보구분코드 == '02'))){
        __hpasRuleResult = {
'순요율' : null
}

    }

    return RESULT(__hpasRuleResult);
};