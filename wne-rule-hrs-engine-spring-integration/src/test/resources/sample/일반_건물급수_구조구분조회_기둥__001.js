var 일반_건물급수_구조구분조회_기둥__001 = function(기둥코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:46:35
    if(((기둥코드 == "01"/* 철골철근콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "02"/* 철근콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "03"/* 벽돌조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "04"/* 철골조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "불연"
}

    }
    else if(((기둥코드 == "05"/* 콘크리트블록조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "06"/* 목조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "가연"
}

    }
    else if(((기둥코드 == "07"/* 치장벽돌조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "08"/* 철파이프조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "불연"
}

    }
    else if(((기둥코드 == "09"/* 철골콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "10"/* 무근콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "11"/* 프리스트레스트콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "12"/* 프리캐스트콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "13"/* 경량콘크리트조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "14"/* 조적조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "15"/* 라멘조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "16"/* 내화피복철골조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "내화"
}

    }
    else if(((기둥코드 == "17"/* 경량철골조 */))){
        __hpasRuleResult = {
'기둥구조구분' : "불연"
}

    }

    return RESULT(__hpasRuleResult);
};