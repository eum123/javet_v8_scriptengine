var 일반_상해_해외의료비질병자기부담금할인율조회_001 = function(해외의료비질병가입금액,해외의료비질병자기부담금비율코드,해외의료비질병자기부담금특약가입여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    해외의료비질병자기부담금할인율 = 0


    // Compiler Version 1 , Created : 2023-08-24 12:07:28
    if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 0.72
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1.44
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2.15
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 3.59
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 5.03
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 7.18
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 8.8
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 11.9
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 17.09
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 0.95
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1.89
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2.84
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 4.73
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 6.62
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 9.45
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 11.34
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 14.34
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 19.38
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 3
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 5
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 7
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 10
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 12
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 15
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 20
}

    }

    return RESULT(__hpasRuleResult);
};