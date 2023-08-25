var 일반_상해_해외여행_보상한도액인상계수_001 = function(가입금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    보상한도액인상계수 = 0


    // Compiler Version 1 , Created : 2023-08-23 18:41:55
    if(((가입금액 == 2000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.15
}

    }
    else if(((가입금액 == 2500000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.2
}

    }
    else if(((가입금액 == 5000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.35
}

    }
    else if(((가입금액 == 10000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.5
}

    }
    else if(((가입금액 == 20000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.65
}

    }
    else if(((가입금액 == 30000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.74
}

    }
    else if(((가입금액 == 40000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.8
}

    }
    else if(((가입금액 == 50000000))){
        __hpasRuleResult = {
'보상한도액인상계수' : 0.85
}

    }

    return RESULT(__hpasRuleResult);
};