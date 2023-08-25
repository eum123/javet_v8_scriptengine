var 일반_상해_해외여행_보험가입금액수정계수_001 = function(가입금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    가입금액수정계수 = -1


    // Compiler Version 1 , Created : 2023-08-24 11:07:19
    if(((가입금액 == 100000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.49
}

    }
    else if(((가입금액 == 150000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.42
}

    }
    else if(((가입금액 == 200000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.29
}

    }
    else if(((가입금액 == 250000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.16
}

    }
    else if(((가입금액 == 300000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1
}

    }
    else if(((가입금액 == 350000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1
}

    }
    else if(((가입금액 == 400000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.01
}

    }
    else if(((가입금액 == 500000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.02
}

    }
    else if(((가입금액 == 600000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.02
}

    }
    else if(((가입금액 >= 700000))){
        __hpasRuleResult = {
'가입금액수정계수' : 1.03
}

    }

    return RESULT(__hpasRuleResult);
};