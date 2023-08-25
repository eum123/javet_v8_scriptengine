var 일반_공통_보상한도금액사이값입력불가금액리스트생성_001 = function(담보코드,담보코드_Out,보상한도금액단위코드,보상한도금액단위코드_Out,배상구분코드,배상구분코드_Out,가입금액,가입금액_Out,자기부담금액_Out,화폐코드,화폐코드_Out,자기부담금액,보상한도금액적합성여부,자기부담금액적합성여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 담보코드_Out = 담보코드_Out;
    var 배상구분코드_Out = 배상구분코드_Out;
    var 보상한도금액단위코드_Out = 보상한도금액단위코드_Out;
    var 자기부담금액_Out = 자기부담금액_Out;
    var 화폐코드_Out = 화폐코드_Out;
    var 가입금액_Out = 가입금액_Out;
    var 구분코드_Out = [];

    // Compiler Version 1 , Created : 2023-08-21 18:33:39
    if(보상한도금액적합성여부 == "0" || 자기부담금액적합성여부 == "0"){
        담보코드_Out[담보코드_Out.length] = 담보코드
보상한도금액단위코드_Out[보상한도금액단위코드_Out.length] = 보상한도금액단위코드
배상구분코드_Out[배상구분코드_Out.length] = 배상구분코드

    }

    if(자기부담금액적합성여부 == "0"){
        가입금액_Out[가입금액_Out.length] = 0
화폐코드_Out[화폐코드_Out.length] = ""
자기부담금액_Out[자기부담금액_Out.length] = 자기부담금액
구분코드_Out[구분코드_Out.length] = "02"

    }

    if(보상한도금액적합성여부 == "0"){
        가입금액_Out[가입금액_Out.length] = 가입금액
화폐코드_Out[화폐코드_Out.length] = 화폐코드
자기부담금액_Out[자기부담금액_Out.length] = 0
구분코드_Out[구분코드_Out.length] = "01"

    }
    __hpasRuleResult = {
        담보코드_Out : 담보코드_Out , 배상구분코드_Out : 배상구분코드_Out , 보상한도금액단위코드_Out : 보상한도금액단위코드_Out , 자기부담금액_Out : 자기부담금액_Out , 화폐코드_Out : 화폐코드_Out , 가입금액_Out : 가입금액_Out , 구분코드_Out : 구분코드_Out
    }

    return RESULT(__hpasRuleResult);
};