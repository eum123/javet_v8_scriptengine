var 일반_상해_공통_해외상해의료비가입금액계수조회_001 = function(원화환산가입금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 12:23:24
    if(((원화환산가입금액 == 10000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1
}

    }
    else if(((원화환산가입금액 == 20000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.13
}

    }
    else if(((원화환산가입금액 == 30000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.2
}

    }
    else if(((원화환산가입금액 == 40000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.25
}

    }
    else if(((원화환산가입금액 == 50000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.29
}

    }
    else if(((원화환산가입금액 == 60000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.35
}

    }
    else if(((원화환산가입금액 == 70000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.4
}

    }
    else if(((원화환산가입금액 == 80000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.44
}

    }
    else if(((원화환산가입금액 == 90000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.48
}

    }
    else if(((원화환산가입금액 == 100000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.5
}

    }
    else if(((원화환산가입금액 == 150000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.63
}

    }
    else if(((원화환산가입금액 == 200000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.73
}

    }
    else if(((원화환산가입금액 == 300000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 1.86
}

    }
    else if(((원화환산가입금액 == 500000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 2.06
}

    }
    else if(((원화환산가입금액 == 750000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 2.24
}

    }
    else if(((원화환산가입금액 == 1000000000))){
        __hpasRuleResult = {
'해외상해의료비가입금액계수' : 2.38
}

    }

    return RESULT(__hpasRuleResult);
};