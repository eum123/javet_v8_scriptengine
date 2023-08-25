var 일반_화재기본담보요율계산_영업요율__001 = function(순요율,예정손해율,업종코드,물건구분코드,카네이션보험전환계수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 영업요율 = null;

    // Compiler Version 1 , Created : 2023-08-21 18:34:58
    if(true){
        LCM계수=ROUND((AMT(1)).divide(AMT(예정손해율), 20, BigDecimal.ROUND_DOWN),5)

    }

    if(물건구분코드 != '01' || (물건구분코드 == '01' && 업종코드 == "E18")){
        영업요율=(ROUND((AMT(순요율)).multiply(AMT(LCM계수)),4)).multiply(AMT(카네이션보험전환계수))

    }

    if(물건구분코드 == '01' && 업종코드 !="E18"){
        영업요율=(ROUND((AMT(순요율)).multiply(AMT(LCM계수)),5)).multiply(AMT(카네이션보험전환계수))

    }
    var LCM계수 
if(
IS_EMPTY(순요율)==true
){
순요율=0
}

    __hpasRuleResult = {
        영업요율 : 영업요율
    }

    return RESULT(__hpasRuleResult);
};