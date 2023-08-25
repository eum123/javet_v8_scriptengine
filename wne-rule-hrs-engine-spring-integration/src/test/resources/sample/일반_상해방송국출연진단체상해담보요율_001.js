var 일반_상해방송국출연진단체상해담보요율_001 = function(담보코드,단일요율적용여부,상해급수코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 10:51:40
    if(((담보코드 == "CFA10486"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "1"))){
        __hpasRuleResult = {
'순요율' : 0.006
}

    }
    else if(((담보코드 == "CFA10486"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "2"))){
        __hpasRuleResult = {
'순요율' : 0.015
}

    }
    else if(((담보코드 == "CFA10486"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "3"))){
        __hpasRuleResult = {
'순요율' : 0.042
}

    }
    else if(((담보코드 == "CFA10486"))
    && ((단일요율적용여부 == '1'))){
        __hpasRuleResult = {
'순요율' : 0.008
}

    }
    else if(((담보코드 == "CFA10487"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "1"))){
        __hpasRuleResult = {
'순요율' : 7300
}

    }
    else if(((담보코드 == "CFA10487"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "2"))){
        __hpasRuleResult = {
'순요율' : 16984
}

    }
    else if(((담보코드 == "CFA10487"))
    && (!(단일요율적용여부 == '1'))
    && ((상해급수코드 == "3"))){
        __hpasRuleResult = {
'순요율' : 50676
}

    }
    else if(((담보코드 == "CFA10487"))
    && ((단일요율적용여부 == '1'))){
        __hpasRuleResult = {
'순요율' : 9284
}

    }

    return RESULT(__hpasRuleResult);
};