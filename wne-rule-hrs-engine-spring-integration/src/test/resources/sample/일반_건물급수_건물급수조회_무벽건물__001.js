var 일반_건물급수_건물급수조회_무벽건물__001 = function(기둥구조구분,지붕구조구분,벽구조구분 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-21 17:54:57
    if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "내화"))){
        __hpasRuleResult = {
'건물급수코드' : "1"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "불연"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "내화"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "내화"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "내화"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "내화"))
    && ((벽구조구분 == "불연"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "내화"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "불연"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == "불연"))
    && ((지붕구조구분 == "불연"))
    && ((벽구조구분 == "불연"))){
        __hpasRuleResult = {
'건물급수코드' : "2"
}

    }
    else if(((기둥구조구분 == '기둥구조구분'))
    && ((지붕구조구분 == '지붕구조구분'))
    && ((벽구조구분 == '벽구조구분'))){
        __hpasRuleResult = {
'건물급수코드' : "4"
}

    }

    return RESULT(__hpasRuleResult);
};