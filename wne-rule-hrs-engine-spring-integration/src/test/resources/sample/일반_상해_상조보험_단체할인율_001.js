var 일반_상해_상조보험_단체할인율_001 = function(상품코드,피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:11:44
    if(((상품코드 == 'FA00121001'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00121001'))
    && ((피보험자수 >= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00121001'))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00121001'))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00121002'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((상품코드 == 'FA00121002'))
    && ((피보험자수 >= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0.05
}

    }
    else if(((상품코드 == 'FA00121002'))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0.1
}

    }
    else if(((상품코드 == 'FA00121002'))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'단체할인율' : 0.18
}

    }

    return RESULT(__hpasRuleResult);
};