var 일반_상해_여행자보험할증율합_001 = function(전쟁위험담보할증율,여행중사망후유장해1의운동담보할증율,여행중상해사망후유장해직업담보할증율,여행중사망후유장해2의운동담보할증율,여행중상해의료실비직업담보할증율,여행중의료실비1의운동담보할증율,여행중의료실비2의운동담보할증율,여행중특별비용2의운동담보할증율,여행중특별비용직업담보할증율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 사망후유장해할증율합 = null;
    var 의료실비할증율합 = null;
    var 특별비용할증율합 = null;

    // Compiler Version 1 , Created : 2023-08-23 16:47:44
    if(여행중상해사망후유장해직업담보할증율 < 0
){
        여행중상해사망후유장해직업담보할증율 = 0

    }

    if(여행중상해의료실비직업담보할증율 < 0
){
        여행중상해의료실비직업담보할증율 = 0

    }

    if(여행중특별비용직업담보할증율 < 0
){
        여행중특별비용직업담보할증율 = 0

    }

    if(여행중사망후유장해1의운동담보할증율 < 0
){
        여행중사망후유장해1의운동담보할증율 = 0

    }

    if(여행중의료실비1의운동담보할증율 < 0
){
        여행중의료실비1의운동담보할증율 = 0

    }

    if(여행중사망후유장해2의운동담보할증율 < 0
){
        여행중사망후유장해2의운동담보할증율 = 0

    }

    if(여행중의료실비2의운동담보할증율 < 0
){
        여행중의료실비2의운동담보할증율 = 0

    }

    if(여행중특별비용2의운동담보할증율 < 0
){
        여행중특별비용2의운동담보할증율 = 0

    }

    if(전쟁위험담보할증율 < 0
){
        전쟁위험담보할증율 = 0

    }

    if(true
){
        사망후유장해할증율합 = 여행중상해사망후유장해직업담보할증율 + 여행중사망후유장해1의운동담보할증율 + 여행중사망후유장해2의운동담보할증율 + 전쟁위험담보할증율

    }

    if(true
){
        의료실비할증율합=AMT(여행중상해의료실비직업담보할증율).add(AMT(여행중의료실비1의운동담보할증율)).add((AMT(여행중의료실비2의운동담보할증율)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN))

    }

    if(true
){
        특별비용할증율합 = 여행중특별비용직업담보할증율 + 여행중특별비용2의운동담보할증율

    }
    __hpasRuleResult = {
        사망후유장해할증율합 : 사망후유장해할증율합 , 의료실비할증율합 : 의료실비할증율합 , 특별비용할증율합 : 특별비용할증율합
    }

    return RESULT(__hpasRuleResult);
};