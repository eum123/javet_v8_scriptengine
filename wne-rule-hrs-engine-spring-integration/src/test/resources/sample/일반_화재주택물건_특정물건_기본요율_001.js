var 일반_화재주택물건_특정물건_기본요율_001 = function(업종코드,건물급수코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-21 17:55:32
    if(((업종코드 == "E18"))
    && ((건물급수코드 == "1"))){
        __hpasRuleResult = {
'순요율' : 0.008 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "2"))){
        __hpasRuleResult = {
'순요율' : 0.01 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "3"))){
        __hpasRuleResult = {
'순요율' : 0.015 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E18"))
    && ((건물급수코드 == "4"))){
        __hpasRuleResult = {
'순요율' : 0.025 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "1"))){
        __hpasRuleResult = {
'순요율' : 0.008 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "2"))){
        __hpasRuleResult = {
'순요율' : 0.01 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "3"))){
        __hpasRuleResult = {
'순요율' : 0.015 , '특정물건여부' : "1"
}

    }
    else if(((업종코드 == "E181"))
    && ((건물급수코드 == "4"))){
        __hpasRuleResult = {
'순요율' : 0.025 , '특정물건여부' : "1"
}

    }

    return RESULT(__hpasRuleResult);
};