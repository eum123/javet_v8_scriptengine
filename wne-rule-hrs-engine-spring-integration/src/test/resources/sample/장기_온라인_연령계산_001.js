var 장기_온라인_연령계산_001 = function(기준일자,주민등록번호,연령산출기준구분코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 만연령 = null;
    var 보험연령 = null;
    var 생일 = null;
    var 연령 = null;
    var 성별구분 = null;

    // Compiler Version 1 , Created : 2023-08-21 18:19:03
    if(true){
        성별구분 = "1"

    }

    if(LEN(주민등록번호) <= 6){
        만연령 = 0
보험연령 = 0
생일 = "19000101"

    }

    if(LEN(주민등록번호) > 6){
        성별구분 = MID(주민등록번호, 7, 1)

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "1") || (성별구분 == "2") || (성별구분 == "5") || (성별구분 == "6"))){
        생일 = "19" + LEFT(주민등록번호,6)

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "3") || (성별구분 == "4") || (성별구분 == "7") || (성별구분 == "8"))){
        생일 = "20" + LEFT(주민등록번호,6)

    }

    if(주민등록번호 == "4608077129457"){
        생일 = "19" + LEFT(주민등록번호,6)

    }

    if(LEN(주민등록번호) > 6 && LEN(주민등록번호) != 10){
        var 룰유틸;
CONTEXT.getLogger("생일:{}, 기준일자:{}", 생일, 기준일자);
만연령 = LEGAL_AGE(생일, 기준일자)
보험연령 = INSURANCE_AGE(생일, 기준일자)

    }

    if(연령산출기준구분코드 == '01'){
        연령 = 만연령

    }

    if(연령산출기준구분코드 == '02'){
        연령 = 보험연령

    }

    if(연령산출기준구분코드 != '01' && 연령산출기준구분코드 != '02'){
        연령 = 0

    }

    if(LEN(주민등록번호) == 10){
        만연령 = 0
보험연령 = 0
생일 = "19000101"

    }

    if(연령 < 0){
        연령 = 0

    }
    __hpasRuleResult = {
        만연령 : 만연령 , 보험연령 : 보험연령 , 생일 : 생일 , 연령 : 연령
    }

    return RESULT(__hpasRuleResult);
};