var 일반_상해_국내여행_순요율조회_001 = function(담보코드,운동구분코드,피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 13:17:09
    if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 < 5))){
        __hpasRuleResult = {
'순요율' : 0
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 5)&&(피보험자수 < 20))){
        __hpasRuleResult = {
'순요율' : 0.00042
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 20)&&(피보험자수 < 50))){
        __hpasRuleResult = {
'순요율' : 0.00042
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : 0.00042
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : 0.00041
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : 0.00039
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : 0.00037
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : 0.00032
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 5)&&(피보험자수 < 20))){
        __hpasRuleResult = {
'순요율' : 0.00031
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 20)&&(피보험자수 < 50))){
        __hpasRuleResult = {
'순요율' : 0.00031
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : 0.0003
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : 0.00029
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : 0.00027
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : 0.00026
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : 0.0002
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 5)&&(피보험자수 < 20))){
        __hpasRuleResult = {
'순요율' : 0.00015
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 20)&&(피보험자수 < 50))){
        __hpasRuleResult = {
'순요율' : 0.00015
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : 0.00014
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : 0.00014
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : 0.00014
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : 0.00012
}

    }
    else if(((담보코드 == "CFA10588"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : 0.0001
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "1"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "2"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 50)&&(피보험자수 < 100))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 100)&&(피보험자수 < 200))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 200)&&(피보험자수 < 500))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 500)&&(피보험자수 < 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10589"))
    && ((운동구분코드 == "3"))
    && ((피보험자수 >= 1000))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10586"))){
        __hpasRuleResult = {
'순요율' : 0.001
}

    }
    else if(((담보코드 == "CFA10587"))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10590"))){
        __hpasRuleResult = {
'순요율' : null
}

    }
    else if(((담보코드 == "CFA10591"))){
        __hpasRuleResult = {
'순요율' : 0.0029
}

    }
    else if(((담보코드 == "CFA10592"))){
        __hpasRuleResult = {
'순요율' : 29
}

    }
    else if(((담보코드 == "CFA10593"))){
        __hpasRuleResult = {
'순요율' : 0.99
}

    }

    return RESULT(__hpasRuleResult);
};