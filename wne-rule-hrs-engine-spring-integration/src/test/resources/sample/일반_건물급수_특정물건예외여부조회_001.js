var 일반_건물급수_특정물건예외여부조회_001 = function(목적물유형분류코드,업종코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:57:12
    if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E021"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E022"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E031"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E032"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "08120"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "08210"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "02211"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    else if(((목적물유형분류코드 == "04"))
    && ((업종코드 == "E1713"))){
        __hpasRuleResult = {
'특정물건예외여부' : "1"
}

    }
    특정물건예외여부 = "0"


    return RESULT(__hpasRuleResult);
};