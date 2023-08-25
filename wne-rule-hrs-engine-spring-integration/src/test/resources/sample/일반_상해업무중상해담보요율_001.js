var 일반_상해업무중상해담보요율_001 = function(담보코드,단일요율적용여부,상해급수코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:33:15
    if(((담보코드 == "CFA10412"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "1"))){
        __hpasRuleResult = {
'순요율' : 0.009
}

    }
    else if(((담보코드 == "CFA10412"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "2"))){
        __hpasRuleResult = {
'순요율' : 0.027
}

    }
    else if(((담보코드 == "CFA10412"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "3"))){
        __hpasRuleResult = {
'순요율' : 0.071
}

    }
    else if(((담보코드 == "CFA10412"))
    && ((단일요율적용여부 == '1'))){
        __hpasRuleResult = {
'순요율' : 0.012
}

    }

    return RESULT(__hpasRuleResult);
};