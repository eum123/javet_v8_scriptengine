var 일반_상해_모바일레포츠_요율조회_001 = function(담보코드,상해급수코드,할인할증구분코드,전쟁위험담보구분코드,여행중사망후유장해2의운동담보할증율,여행중의료실비2의운동담보할증율,가입금액,여행목적코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 순요율 = null;
    var 여행중특별비용직업담보할증율 = null;
    var 여행중특별비용2의운동담보할증율 = null;
    var 여행중의료실비2의운동담보할증율 = 여행중의료실비2의운동담보할증율;
    var 여행중의료실비1의운동담보할증율 = null;
    var 여행중상해의료실비직업담보할증율 = null;
    var 여행중상해사망후유장해직업담보할증율 = null;
    var 여행중사망후유장해2의운동담보할증율 = 여행중사망후유장해2의운동담보할증율;
    var 여행중사망후유장해1의운동담보할증율 = null;
    var 전쟁위험담보할증율 = null;
    순요율 = 0


    // Compiler Version 1 , Created : 2023-08-23 16:45:32
    if(담보코드 == "CFA10586" && 여행목적코드 == "15"
){
        순요율 = 0.0086

    }

    if(담보코드 == "CFA10586" && 여행목적코드 == "16"
){
        순요율 = 0.0129

    }

    if(담보코드 == "CFA10592" && 여행목적코드 == "15"
){
        순요율 = 171

    }

    if(담보코드 == "CFA10592" && 여행목적코드 == "16"
){
        순요율 = 65

    }

    if(담보코드 == "CFA10593" && 여행목적코드 == "15"
){
        순요율 = 3.54

    }

    if(담보코드 == "CFA10593" && 여행목적코드 == "16"
){
        순요율 = 10.23

    }

    if(담보코드 == "CFA10598" && 전쟁위험담보구분코드 == "01"
){
        전쟁위험담보할증율 = 0.176

    }

    if(담보코드 == "CFA10598" && 전쟁위험담보구분코드 == "02"
){
        전쟁위험담보할증율 = 0.694

    }

    if(담보코드 == "CFA10622" && 상해급수코드 == "3"
){
        여행중상해사망후유장해직업담보할증율 = 0.084

    }

    if(담보코드 == "CFA10622" && 할인할증구분코드 == "02"
){
        여행중상해사망후유장해직업담보할증율 = 0.139

    }

    if(담보코드 == "CFA10980" && 여행목적코드 == "15"
){
        여행중사망후유장해1의운동담보할증율 = 0.335

    }

    if(담보코드 == "CFA10980" && 여행목적코드 == "16"
){
        여행중사망후유장해1의운동담보할증율 = 0.141

    }

    if(담보코드 == "CFA10981"
){
        여행중사망후유장해2의운동담보할증율 = 여행중사망후유장해2의운동담보할증율

    }
    __hpasRuleResult = {
        순요율 : 순요율 , 여행중특별비용직업담보할증율 : 여행중특별비용직업담보할증율 , 여행중특별비용2의운동담보할증율 : 여행중특별비용2의운동담보할증율 , 여행중의료실비2의운동담보할증율 : 여행중의료실비2의운동담보할증율 , 여행중의료실비1의운동담보할증율 : 여행중의료실비1의운동담보할증율 , 여행중상해의료실비직업담보할증율 : 여행중상해의료실비직업담보할증율 , 여행중상해사망후유장해직업담보할증율 : 여행중상해사망후유장해직업담보할증율 , 여행중사망후유장해2의운동담보할증율 : 여행중사망후유장해2의운동담보할증율 , 여행중사망후유장해1의운동담보할증율 : 여행중사망후유장해1의운동담보할증율 , 전쟁위험담보할증율 : 전쟁위험담보할증율
    }

    return RESULT(__hpasRuleResult);
};