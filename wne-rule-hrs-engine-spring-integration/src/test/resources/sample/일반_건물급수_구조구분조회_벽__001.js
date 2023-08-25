var 일반_건물급수_구조구분조회_벽__001 = function(벽코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:47:06
    if(((벽코드 == "01"/* 치장벽돌 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "02"/* 시멘트벽돌 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "03"/* 샌드위치판넬 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "04"/* 시멘트블록 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "05"/* 시멘트몰탈 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "06"/* 칼라피복철판 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "07"/* 화강석및외장타일 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "08"/* 콘크리트벽 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "09"/* 프리캐스트판넬 */))){
        __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "10"/* 블록벽 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "11"/* 유리 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "12"/* 금속판 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "13"/* 흙벽 */))){
        __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "14"/* 목구조 */))){
        __hpasRuleResult = {
'벽구조구분' : "가연"
}

    }
    else if(((벽코드 == "15"/* 천막구조 */))){
        __hpasRuleResult = {
'벽구조구분' : "가연"
}

    }

    return RESULT(__hpasRuleResult);
};