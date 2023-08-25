var 일반_종합_골프장VIP_순요율조회_001 = function(담보코드,가입금액 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 순요율 = null;

    // Compiler Version 1 , Created : 2023-08-23 15:24:51
    if(담보코드 == "CFA10613"
){
        순요율 = 0.00023

    }

    if(담보코드 == "CFA10614"
){
        
    }

    if(담보코드 == "CFA10073" && 가입금액 == 1000000
){
        순요율 = 304

    }

    if(담보코드 == "CFA10073" && 가입금액 == 2000000
){
        순요율 = 349

    }

    if(담보코드 == "CFA10073" && 가입금액 == 3000000
){
        순요율 = 380

    }

    if(담보코드 == "CFA10073" && 가입금액 == 5000000
){
        순요율 = 415

    }

    if(담보코드 == "CFA10073" && 가입금액 == 10000000
){
        순요율 = 465

    }

    if(담보코드 == "CFA10073" && 가입금액 == 15000000
){
        순요율 = 492

    }

    if(담보코드 == "CFA10073" && 가입금액 == 20000000
){
        순요율 = 512

    }

    if(담보코드 == "CFA10619"
){
        
    }

    if(담보코드 == "CFA10840"
){
        
    }
    __hpasRuleResult = {
        순요율 : 순요율
    }

    return RESULT(__hpasRuleResult);
};