var 일반_상해_해외의료비상해자기부담금할인율조회_001 = function(해외의료비상해자기부담금비율코드,해외의료비상해자기부담금특약가입여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    해외의료비상해자기부담금할인율 = 0


    // Compiler Version 1 , Created : 2023-08-24 12:08:04
    if(((해외의료비상해자기부담금비율코드 == "01"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 1
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "02"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 2
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "03"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 3
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "05"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 5
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "07"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 7
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "10"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 10
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "12"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 12
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "15"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 15
}

    }
    else if(((해외의료비상해자기부담금비율코드 == "20"))
    && ((해외의료비상해자기부담금특약가입여부 == "1"))){
        __hpasRuleResult = {
'해외의료비상해자기부담금할인율' : 20
}

    }

    return RESULT(__hpasRuleResult);
};