var 일반_상해_스포츠_AP입력값변환_001 = function(운동위험할증요율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 운동위험할증요율 = 운동위험할증요율;

    // Compiler Version 1 , Created : 2023-08-23 17:02:30
    if(운동위험할증요율 > 0
){
        운동위험할증요율=(AMT(운동위험할증요율)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)

    }
    __hpasRuleResult = {
        운동위험할증요율 : 운동위험할증요율
    }

    return RESULT(__hpasRuleResult);
};