var 일반_상해_출력값형식처리_001 = function(장기일시납요율,단기요율,단체할인율,분납할증율,계속계약할인율,다수구매자할인율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 장기일시납요율 = 장기일시납요율;
    var 단기요율 = 단기요율;
    var 단체할인율 = 단체할인율;
    var 분납할증율 = 분납할증율;
    var 계속계약할인율 = 계속계약할인율;
    var 다수구매자할인율 = 다수구매자할인율;

    // Compiler Version 1 , Created : 2023-08-23 16:33:00
    if(IS_EMPTY(장기일시납요율) == false
){
        장기일시납요율=ROUNDDOWN((AMT(장기일시납요율)).multiply(AMT(100)),1)

    }

    if(IS_EMPTY(단기요율) == false
){
        단기요율=ROUNDDOWN((AMT(단기요율)).multiply(AMT(100)),1)

    }

    if(IS_EMPTY(단체할인율) == false
){
        단체할인율=ROUNDDOWN((AMT(단체할인율)).multiply(AMT(100)),1)

    }

    if(IS_EMPTY(분납할증율) == false
){
        분납할증율=ROUNDDOWN((AMT(분납할증율)).multiply(AMT(100)),3)

    }

    if(IS_EMPTY(계속계약할인율) == false
){
        계속계약할인율=ROUNDDOWN((AMT(계속계약할인율)).multiply(AMT(100)),1)

    }

    if(IS_EMPTY(다수구매자할인율) == false
){
        다수구매자할인율=ROUNDDOWN((AMT(다수구매자할인율)).multiply(AMT(100)),1)

    }
    __hpasRuleResult = {
        장기일시납요율 : 장기일시납요율 , 단기요율 : 단기요율 , 단체할인율 : 단체할인율 , 분납할증율 : 분납할증율 , 계속계약할인율 : 계속계약할인율 , 다수구매자할인율 : 다수구매자할인율
    }

    return RESULT(__hpasRuleResult);
};