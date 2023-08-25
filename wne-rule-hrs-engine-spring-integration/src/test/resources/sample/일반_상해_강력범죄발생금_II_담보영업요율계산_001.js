var 일반_상해_강력범죄발생금_II_담보영업요율계산_001 = function(순요율,예정손해율,임시_영업요율1차 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 영업요율 = null;
    var 임시_영업요율1차 = 임시_영업요율1차;
    var LCM계수 


    // Compiler Version 1 , Created : 2023-08-23 16:05:15
    if(true
){
        LCM계수=ROUND((AMT(1)).divide(AMT(예정손해율), 20, BigDecimal.ROUND_DOWN),5)

    }

    if(true
){
        영업요율=ROUND((AMT(순요율)).multiply(AMT(LCM계수)),5)

    }

    if(true
){
        임시_영업요율1차 = 임시_영업요율1차 + 영업요율

    }
    __hpasRuleResult = {
        영업요율 : 영업요율 , 임시_영업요율1차 : 임시_영업요율1차
    }

    return RESULT(__hpasRuleResult);
};