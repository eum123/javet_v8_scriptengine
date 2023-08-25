var 일반_종합_공통_보험료최종처리_001 = function(화폐코드,보험료관리여부,기본보험료,최종보험료 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 기본보험료 = 기본보험료;
    var 최종보험료 = 최종보험료;

    // Compiler Version 1 , Created : 2023-08-24 10:27:45
    if(화폐코드 == "WON"
){
        기본보험료=ROUNDDOWN(AMT(기본보험료),1)
최종보험료=ROUNDDOWN(AMT(최종보험료),1)

    }

    if(화폐코드 != "WON"
){
        기본보험료=ROUNDDOWN(AMT(기본보험료),3)
최종보험료=ROUNDDOWN(AMT(최종보험료),3)

    }

    if(보험료관리여부 == "0"
){
        기본보험료 = 0
최종보험료 = 0

    }
    __hpasRuleResult = {
        기본보험료 : 기본보험료 , 최종보험료 : 최종보험료
    }

    return RESULT(__hpasRuleResult);
};