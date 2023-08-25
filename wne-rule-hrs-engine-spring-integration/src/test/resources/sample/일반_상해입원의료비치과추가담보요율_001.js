var 일반_상해입원의료비치과추가담보요율_001 = function(담보코드,담보세부구분코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    입원의료비치과추가담보할증율 = 0


    // Compiler Version 1 , Created : 2023-08-24 11:02:23
    if(((담보코드 == "CFA10549")||(담보코드 == "CFA10553"))
    && ((담보세부구분코드 == '12'))){
        __hpasRuleResult = {
'입원의료비치과추가담보할증율' : 0.0002
}

    }
    else if(((담보코드 == "CFA10549")||(담보코드 == "CFA10553"))
    && ((담보세부구분코드 == '13'))){
        __hpasRuleResult = {
'입원의료비치과추가담보할증율' : 0.0005
}

    }
    else if(((담보코드 == "CFA10549")||(담보코드 == "CFA10553"))
    && ((담보세부구분코드 == '14'))){
        __hpasRuleResult = {
'입원의료비치과추가담보할증율' : 0.0005
}

    }
    else if(((담보코드 == "CFA10549")||(담보코드 == "CFA10553"))
    && ((담보세부구분코드 == '15'))){
        __hpasRuleResult = {
'입원의료비치과추가담보할증율' : 0.0005
}

    }
    else if(((담보코드 == "CFA10549")||(담보코드 == "CFA10553"))
    && ((담보세부구분코드 == '16'))){
        __hpasRuleResult = {
'입원의료비치과추가담보할증율' : 0.0005
}

    }

    return RESULT(__hpasRuleResult);
};