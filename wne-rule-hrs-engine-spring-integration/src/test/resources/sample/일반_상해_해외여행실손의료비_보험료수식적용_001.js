var 일반_상해_해외여행실손의료비_보험료수식적용_001 = function(가입금액,담보코드,화폐코드,순요율,예정손해율,영업요율,전년도영업요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 기본요율 = null;
    var 기본보험료 = null;
    if(
기본요율<0
){
기본요율=0
}


if(
기본보험료<0
){
기본보험료=0
}


    // Compiler Version 1 , Created : 2023-08-23 10:29:37
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
        기본요율 = 영업요율

    }

    if(담보코드 == "CFA11412" || 담보코드 == "CFA11413" || 담보코드 == "CFA11414" || 담보코드 == "CFA11415" || 담보코드 == "CFA11416" || 담보코드 == "CFA11417" || 담보코드 == "CFA11418" || 담보코드 == "CFA11419" || 담보코드 == "CFA11420" || 담보코드 == "CFA11421" || 담보코드 == "CFA11422" || 담보코드 == "CFA11423" || 담보코드 == "CFA11424" || 담보코드 == "CFA11425" || 담보코드 == "CFA11426" || 담보코드 == "CFA11434" || 담보코드 == "CFA11435" || 담보코드 == "CFA11436" || 담보코드 == "CFA11427" || 담보코드 == "CFA11428" || 담보코드 == "CFA11429" || 담보코드 == "CFA11430" || 담보코드 == "CFA11431" || 담보코드 == "CFA11432" || 담보코드 == "CFA11437" || 담보코드 == "CFA11438" || 담보코드 == "CFA11439"
){
        기본요율=ROUND(AMT(영업요율),1)

    }

    if(true
){
        기본요율=ROUND(AMT(기본요율),1)
기본보험료=ROUNDDOWN(AMT(기본요율),1)

    }

    if(담보코드 == "CFA10955" || 담보코드 == "CFA10959" || 담보코드 == "CFA10963" || 담보코드 == "CFA10967"
){
        기본요율=ROUND(AMT(기본요율),3)
기본보험료=ROUNDDOWN(((AMT(기본요율)).multiply(AMT(가입금액))).divide(AMT(1000), 20, BigDecimal.ROUND_DOWN),1)

    }

    if(화폐코드 == "WON"
){
        기본보험료=ROUNDDOWN(AMT(기본보험료),1)

    }

    if(화폐코드 != "WON"
){
        기본보험료=ROUNDDOWN(AMT(기본보험료),3)

    }
    var LCM계수 
var 프린트값 
var 룰유틸

if(
IS_EMPTY(전년도영업요율)==true
){
전년도영업요율=0
}

    __hpasRuleResult = {
        기본요율 : 기본요율 , 기본보험료 : 기본보험료
    }

    return RESULT(__hpasRuleResult);
};