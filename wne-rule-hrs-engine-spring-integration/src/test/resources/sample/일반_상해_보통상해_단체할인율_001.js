var 일반_상해_보통상해_단체할인율_001 = function(상품코드,피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 13:14:22
    if(((상품코드 == 'FA00030001'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((피보험자수 <= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0.05
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((피보험자수 <= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0.1
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((피보험자수 >= 1000)&&(피보험자수 < 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.15
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((피보험자수 >= 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.2
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((피보험자수 <= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0.05
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((피보험자수 <= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0.1
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((피보험자수 >= 1000)&&(피보험자수 < 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.11
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((피보험자수 >= 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.11
}

    }
    else if(((상품코드 == 'FA00030003'))
    && ((피보험자수 < 20))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00030003'))
    && ((피보험자수 <= 20)&&(피보험자수 < 50))){
        __hpasRuleResult = {
'단체할인율' : 0.05
}

    }
    else if(((상품코드 == 'FA00030003'))
    && ((피보험자수 <= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0.07
}

    }
    else if(((상품코드 == 'FA00030003'))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'단체할인율' : 0.09
}

    }
    else if(((상품코드 == 'FA00030003'))
    && ((피보험자수 >= 200))){
        __hpasRuleResult = {
'단체할인율' : 0.09
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((피보험자수 <= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0.05
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((피보험자수 <= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0.1
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((피보험자수 >= 1000)&&(피보험자수 < 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.15
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((피보험자수 >= 2000))){
        __hpasRuleResult = {
'단체할인율' : 0.2
}

    }

    return RESULT(__hpasRuleResult);
};