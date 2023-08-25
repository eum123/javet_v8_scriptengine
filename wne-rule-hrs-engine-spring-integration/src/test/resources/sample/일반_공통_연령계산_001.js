var 일반_공통_연령계산_001 = function(기준일자,주민등록번호 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 만연령 = null;
    var 보험연령 = null;
    var 생일 = null;
    var 성별구분 


    // Compiler Version 1 , Created : 2023-08-23 16:31:34
    if(true
){
        성별구분 = "1"

    }

    if(LEN(주민등록번호) <= 6
){
        만연령 = 0
보험연령 = 0
생일 = "19000101"

    }

    if(LEN(주민등록번호) > 6
){
        성별구분 = MID(주민등록번호, 7, 1)

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "1") || (성별구분 == "2") || (성별구분 == "5") || (성별구분 == "6"))
){
        생일 = "19" + LEFT(주민등록번호,6)

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "3") || (성별구분 == "4") || (성별구분 == "7") || (성별구분 == "8"))
){
        생일 = "20" + LEFT(주민등록번호,6)

    }

    if(LEN(주민등록번호) > 6
){
        만연령 = LEGAL_AGE(생일, 기준일자)
보험연령 = INSURANCE_AGE(생일, 기준일자)

    }

    if(만연령 < 0
){
        만연령 = 0

    }

    if(보험연령 < 0
){
        보험연령 = 0

    }
    __hpasRuleResult = {
        만연령 : 만연령 , 보험연령 : 보험연령 , 생일 : 생일
    }

    return RESULT(__hpasRuleResult);
};