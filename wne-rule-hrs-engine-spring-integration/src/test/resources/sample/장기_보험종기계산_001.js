var 장기_보험종기계산_001 = function(기준일자,만기구분코드,만기,연령 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 보험기간 = null;
    var 보험종기 = null;
    var 보험종료일자 = null;
    // Compiler Version 1 , Created : 2023-08-21 18:45:57
    if(true){
        보험기간 = GET_MATURITY_MONTHS(연령, 만기구분코드, 만기)

    }
    if(true){

        보험종기 = GET_NEW_DATE(GET_AFTER_DATE(기준일자, 0, 보험기간, 0))
보험종료일자 = GET_AFTER_DATE(기준일자, 0,보험기간, 0)
    }
    var 룰유틸

    __hpasRuleResult = {
        보험기간 : 보험기간 , 보험종기 : 보험종기 , 보험종료일자 : 보험종료일자
    }

    return RESULT(__hpasRuleResult);
};