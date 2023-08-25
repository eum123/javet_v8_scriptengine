var 일반_공통_성별코드구분_001 = function(주민등록번호 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 성별코드 = null;
    var 성별구분 


    // Compiler Version 1 , Created : 2023-08-23 16:09:45
    if(true
){
        성별구분 = "1"

    }

    if(LEN(주민등록번호) <= 6
){
        성별코드 = '01'

    }

    if(LEN(주민등록번호) > 6
){
        성별구분 = MID(주민등록번호, 7, 1)

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "1") || (성별구분 == "3") || (성별구분 == "5") || (성별구분 == "7"))
){
        성별코드 = '01'

    }

    if(LEN(주민등록번호) > 6 && ((성별구분 == "2") || (성별구분 == "4") || (성별구분 == "6") || (성별구분 == "8"))
){
        성별코드 = '02'

    }
    __hpasRuleResult = {
        성별코드 : 성별코드
    }

    return RESULT(__hpasRuleResult);
};