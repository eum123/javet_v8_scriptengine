var 일반_상해자원봉사활동중질병입원일당담보요율_001 = function(담보코드,자원봉사활동담보구분코드,보험연령 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:51:37
    if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '01'))
    && ((보험연령 <= 15)&&(보험연령 <= 18))){
        __hpasRuleResult = {
'순요율' : 2
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '01'))
    && ((보험연령 <= 19)&&(보험연령 <= 39))){
        __hpasRuleResult = {
'순요율' : 10
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '01'))
    && ((보험연령 <= 40)&&(보험연령 <= 49))){
        __hpasRuleResult = {
'순요율' : 18
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '01'))
    && ((보험연령 <= 50)&&(보험연령 <= 59))){
        __hpasRuleResult = {
'순요율' : 21
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '01'))
    && ((보험연령 <= 60)&&(보험연령 <= 69))){
        __hpasRuleResult = {
'순요율' : 27
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '02'))
    && ((보험연령 <= 15)&&(보험연령 <= 18))){
        __hpasRuleResult = {
'순요율' : 26
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '02'))
    && ((보험연령 <= 19)&&(보험연령 <= 39))){
        __hpasRuleResult = {
'순요율' : 108
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '02'))
    && ((보험연령 <= 40)&&(보험연령 <= 49))){
        __hpasRuleResult = {
'순요율' : 179
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '02'))
    && ((보험연령 <= 50)&&(보험연령 <= 59))){
        __hpasRuleResult = {
'순요율' : 219
}

    }
    else if(((담보코드 == "CFA10476"))
    && ((자원봉사활동담보구분코드 == '02'))
    && ((보험연령 <= 60)&&(보험연령 <= 69))){
        __hpasRuleResult = {
'순요율' : 280
}

    }

    return RESULT(__hpasRuleResult);
};