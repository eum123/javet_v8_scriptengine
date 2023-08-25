var 일반_상해_자유설계_단체할인율_001 = function(계약유형코드,피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:18:44
    if(((계약유형코드 == '02')||(계약유형코드 == '03'))
    && ((피보험자수 < 100))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '02')||(계약유형코드 == '03'))
    && ((피보험자수 <= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '02')||(계약유형코드 == '03'))
    && ((피보험자수 <= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '02')||(계약유형코드 == '03'))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '04')||(계약유형코드 == '05'))
    && ((피보험자수 <= 100)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '04')||(계약유형코드 == '05'))
    && ((피보험자수 <= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '04')||(계약유형코드 == '05'))
    && ((피보험자수 <= 1000)&&(피보험자수 < 2000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }
    else if(((계약유형코드 == '04')||(계약유형코드 == '05'))
    && ((피보험자수 >= 2000))){
        __hpasRuleResult = {
'단체할인율' : 0
}

    }

    return RESULT(__hpasRuleResult);
};