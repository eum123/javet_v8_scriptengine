var 일반_상해_직업위험할증요율처리_001 = function(여행중상해사망후유장해직업담보할증율,여행중상해의료실비직업담보할증율,담보코드,여행중특별비용직업담보할증율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 직업위험할증요율 = null;

    // Compiler Version 1 , Created : 2023-08-23 13:17:48
    if(true
){
        직업위험할증요율 = 0

    }

    if(담보코드 == "CFA10622"
){
        직업위험할증요율 = 여행중상해사망후유장해직업담보할증율

    }

    if(담보코드 == "CFA10623"
){
        직업위험할증요율 = 여행중상해의료실비직업담보할증율

    }

    if(담보코드 == "CFA10624"
){
        직업위험할증요율 = 여행중특별비용직업담보할증율

    }
    __hpasRuleResult = {
        직업위험할증요율 : 직업위험할증요율
    }

    return RESULT(__hpasRuleResult);
};