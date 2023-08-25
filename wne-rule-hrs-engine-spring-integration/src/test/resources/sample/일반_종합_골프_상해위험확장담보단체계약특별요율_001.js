var 일반_종합_골프_상해위험확장담보단체계약특별요율_001 = function(담보코드,계약유형코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 단체계약적용요율 = null;
    단체계약적용요율 = 1


    // Compiler Version 1 , Created : 2023-08-23 16:11:47
    if((계약유형코드 == "02" || 계약유형코드 == "03" || 계약유형코드 == "04") && (담보코드 == "CFA10616" || 담보코드 == "CFA10617")
){
        단체계약적용요율 = 1

    }
    __hpasRuleResult = {
        단체계약적용요율 : 단체계약적용요율
    }

    return RESULT(__hpasRuleResult);
};