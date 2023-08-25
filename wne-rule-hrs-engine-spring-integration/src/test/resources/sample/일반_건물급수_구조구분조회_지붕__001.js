var 일반_건물급수_구조구분조회_지붕__001 = function(지붕코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 18:06:02
    if(((지붕코드 == "01"/* 슬라브즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "02"/* 슬라브위아스팔트슁글즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "03"/* 슬라브위기와즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "내화"
}

    }
    else if(((지붕코드 == "04"/* 철골지붕틀칼라피복철판즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "05"/* 슬레이트즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "06"/* 목조지붕틀기와즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "준가연"
}

    }
    else if(((지붕코드 == "07"/* 철골철판즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "08"/* 동슁글즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "09"/* 샌드위치판넬즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "10"/* 한식기와즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }
    else if(((지붕코드 == "11"/* 철골지붕틀슬레이트즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "12"/* 목조지붕틀슬레이트즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "준가연"
}

    }
    else if(((지붕코드 == "13"/* 아스팔트슁글즙 */))){
        __hpasRuleResult = {
'지붕구조구분' : "불연"
}

    }
    else if(((지붕코드 == "14"/* 목조지붕틀천막잇기 */))){
        __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }
    else if(((지붕코드 == "15"/* 철골지붕틀천막잇기 */))){
        __hpasRuleResult = {
'지붕구조구분' : "가연"
}

    }

    return RESULT(__hpasRuleResult);
};