var 일반_상해_의료실비외할증계수조정계수처리_001 = function(담보코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 가입금액할증계수 = null;
    var 자기부담금조정계수 = null;

    // Compiler Version 1 , Created : 2023-08-23 16:21:33
    if(담보코드 != "CFA10410" && 담보코드 != "CFA10413" && 담보코드 != "CFA10415" && 담보코드 != "CFA10417" && 담보코드 != "CFA10422" && 담보코드 != "CFA10424" && 담보코드 != "CFA10426" && 담보코드 != "CFA10428" && 담보코드 != "CFA10456" && 담보코드 != "CFA10460" && 담보코드 != "CFA10462" && 담보코드 != "CFA10464" && 담보코드 != "CFA10472" && 담보코드 != "CFA10474" && 담보코드 != "CFA10479" && 담보코드 != "CFA10481" && 담보코드 != "CFA10483" && 담보코드 != "CFA10485" && 담보코드 != "CFA10487" && 담보코드 != "CFA10489" && 담보코드 != "CFA10491" && 담보코드 != "CFA10493" && 담보코드 != "CFA10495" && 담보코드 != "CFA10497" && 담보코드 != "CFA10499" && 담보코드 != "CFA10656" && 담보코드 != "CFA10885"
){
        가입금액할증계수 = 0
자기부담금조정계수 = 0

    }
    __hpasRuleResult = {
        가입금액할증계수 : 가입금액할증계수 , 자기부담금조정계수 : 자기부담금조정계수
    }

    return RESULT(__hpasRuleResult);
};