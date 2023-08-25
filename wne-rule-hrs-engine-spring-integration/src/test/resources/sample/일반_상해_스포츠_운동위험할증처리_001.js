var 일반_상해_스포츠_운동위험할증처리_001 = function(운동위험할증요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 운동위험할증요율 = 운동위험할증요율;

    // Compiler Version 1 , Created : 2023-08-23 16:15:07
    if(운동위험할증요율 < 0
){
        운동위험할증요율 = 0

    }
    __hpasRuleResult = {
        운동위험할증요율 : 운동위험할증요율
    }

    return RESULT(__hpasRuleResult);
};