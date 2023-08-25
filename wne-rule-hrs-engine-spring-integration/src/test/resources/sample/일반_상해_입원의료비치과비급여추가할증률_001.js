var 일반_상해_입원의료비치과비급여추가할증률_001 = function(담보코드,담보세부구분코드,입원의료비치과추가담보할증여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    입원의료비치과비급여추가할증률 = 0


    // Compiler Version 1 , Created : 2023-08-24 12:59:02
    if(((담보코드 == "CFA11802")||(담보코드 == "CFA11803"))
    && ((담보세부구분코드 == "00000"))
    && ((입원의료비치과추가담보할증여부 == "1"))){
        __hpasRuleResult = {
'입원의료비치과비급여추가할증률' : 0.06
}

    }
    else if(((담보코드 == "CFA11802")||(담보코드 == "CFA11803"))
    && (!(담보세부구분코드 == "00000"))
    && ((입원의료비치과추가담보할증여부 == "1"))){
        __hpasRuleResult = {
'입원의료비치과비급여추가할증률' : 0.04
}

    }
    else if(((담보코드 == "CFA11804")||(담보코드 == "CFA11805")||(담보코드 == "CFA11806"))
    && ((입원의료비치과추가담보할증여부 == "1"))){
        __hpasRuleResult = {
'입원의료비치과비급여추가할증률' : 0.02
}

    }

    return RESULT(__hpasRuleResult);
};