var 일반_상해전화금융사기_보이스피싱_담보요율_001 = function(담보코드,가입금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:40:32
    if(((담보코드 == "CFA11124"))
    && ((가입금액 == 1000000))){
        __hpasRuleResult = {
'순요율' : 176
}

    }
    else if(((담보코드 == "CFA11124"))
    && ((가입금액 == 2000000))){
        __hpasRuleResult = {
'순요율' : 337
}

    }
    else if(((담보코드 == "CFA11124"))
    && ((가입금액 == 3000000))){
        __hpasRuleResult = {
'순요율' : 471
}

    }
    else if(((담보코드 == "CFA11124"))
    && ((가입금액 == 5000000))){
        __hpasRuleResult = {
'순요율' : 671
}

    }
    else if(((담보코드 == "CFA11124"))
    && ((가입금액 == 10000000))){
        __hpasRuleResult = {
'순요율' : 940
}

    }

    return RESULT(__hpasRuleResult);
};