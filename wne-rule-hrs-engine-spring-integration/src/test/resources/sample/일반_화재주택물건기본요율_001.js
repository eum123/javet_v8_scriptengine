var 일반_화재주택물건기본요율_001 = function(건물급수코드,업종코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 17:41:31
    if(((건물급수코드 == "1"))
    && ((업종코드 == "15010"))){
        __hpasRuleResult = {
'순요율' : 0.0134
}

    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15020"))){
        __hpasRuleResult = {
'순요율' : 0.004
}

    }
    else if(((건물급수코드 == "1"))
    && ((업종코드 == "15030"))){
        __hpasRuleResult = {
'순요율' : 0.0052
}

    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15010"))){
        __hpasRuleResult = {
'순요율' : 0.0243
}

    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15020"))){
        __hpasRuleResult = {
'순요율' : 0.0066
}

    }
    else if(((건물급수코드 == "2"))
    && ((업종코드 == "15030"))){
        __hpasRuleResult = {
'순요율' : 0.0093
}

    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15010"))){
        __hpasRuleResult = {
'순요율' : 0.0373
}

    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15020"))){
        __hpasRuleResult = {
'순요율' : 0.011
}

    }
    else if(((건물급수코드 == "3"))
    && ((업종코드 == "15030"))){
        __hpasRuleResult = {
'순요율' : 0.0155
}

    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15010"))){
        __hpasRuleResult = {
'순요율' : 0.058
}

    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15020"))){
        __hpasRuleResult = {
'순요율' : 0.017
}

    }
    else if(((건물급수코드 == "4"))
    && ((업종코드 == "15030"))){
        __hpasRuleResult = {
'순요율' : 0.0241
}

    }

    return RESULT(__hpasRuleResult);
};