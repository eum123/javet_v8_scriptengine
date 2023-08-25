var 일반_상해_남북한_북한주민할인_001 = function(북한주민여부 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 북한주민할인율_임시 = null;
    북한주민할인율_임시 = 0


    // Compiler Version 1 , Created : 2023-08-23 16:42:00
    if(북한주민여부 == "1"
){
        북한주민할인율_임시 = 0.05

    }
    __hpasRuleResult = {
        북한주민할인율_임시 : 북한주민할인율_임시
    }

    return RESULT(__hpasRuleResult);
};