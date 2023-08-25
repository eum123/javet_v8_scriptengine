var 일반_상해_스포츠_의료실비자기부담금액조정계수_001 = function(자기부담금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    자기부담금조정계수 = 0


    // Compiler Version 1 , Created : 2023-08-24 12:13:21
    if(((자기부담금액 == 50000))){
        __hpasRuleResult = {
'자기부담금조정계수' : 0.15
}

    }
    else if(((자기부담금액 == 100000))){
        __hpasRuleResult = {
'자기부담금조정계수' : 0.28
}

    }
    else if(((자기부담금액 == 150000))){
        __hpasRuleResult = {
'자기부담금조정계수' : 0.40
}

    }
    else if(((자기부담금액 == 200000))){
        __hpasRuleResult = {
'자기부담금조정계수' : 0.51
}

    }

    return RESULT(__hpasRuleResult);
};