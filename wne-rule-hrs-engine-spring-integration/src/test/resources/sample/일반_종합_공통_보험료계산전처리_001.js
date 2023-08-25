var 일반_종합_공통_보험료계산전처리_001 = function(예정손해율,순요율,자리수,담보코드,상해급수할인할증율,영업요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 기본요율 = null;
    var LCM계수 

if(
IS_EMPTY(상해급수할인할증율)==true
){
상해급수할인할증율=1
}


    // Compiler Version 1 , Created : 2023-08-23 16:17:32
    if(true
){
        LCM계수=ROUND((AMT(1)).divide(AMT(예정손해율), 20, BigDecimal.ROUND_DOWN),5)

    }

    if(true
){
        기본요율=(AMT(순요율)).multiply(AMT(LCM계수))

    }

    if(담보코드 == "CFA10946" || 담보코드 == "CFA10952" || 담보코드 == "CFA10960" || 담보코드 == "CFA10947" || 담보코드 == "CFA10953" || 담보코드 == "CFA10961" || 담보코드 == "CFA10948" || 담보코드 == "CFA10954" || 담보코드 == "CFA10962" || 담보코드 == "CFA10949" || 담보코드 == "CFA10956" || 담보코드 == "CFA10964" || 담보코드 == "CFA10950" || 담보코드 == "CFA10957" || 담보코드 == "CFA10965" || 담보코드 == "CFA10951" || 담보코드 == "CFA10958" || 담보코드 == "CFA10966"
){
        기본요율=ROUND(AMT(영업요율),1)

    }

    if(true
){
        기본요율=ROUND(AMT(기본요율),자리수)

    }
    __hpasRuleResult = {
        기본요율 : 기본요율
    }

    return RESULT(__hpasRuleResult);
};