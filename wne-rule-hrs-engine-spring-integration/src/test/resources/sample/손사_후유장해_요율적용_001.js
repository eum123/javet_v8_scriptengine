var 손사_후유장해_요율적용_001 = function(IDX,구장해율,신장해율,장해기간,장해년수,구구장해율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var IDX = IDX;
    var 구구장해율 = 구구장해율;
    var 구장해율 = 구장해율;
    var 신장해율 = 신장해율;
    var 장해기간 = 장해기간;
    var 장해년수 = 장해년수;

    // Compiler Version 1 , Created : 2023-08-21 18:30:40
    if(장해기간[IDX] == "한시"  &&  장해년수[IDX] < 5){
        신장해율[IDX] = 0
구장해율[IDX] = 0
구구장해율[IDX] = 0

    }

    if(장해기간[IDX] == "한시"  &&  장해년수[IDX] >= 5){
        신장해율[IDX]=(AMT(신장해율[IDX])).multiply(AMT(0.2))
구장해율[IDX] = 0
구구장해율[IDX] = 0

    }
    __hpasRuleResult = {
        IDX : IDX , 구구장해율 : 구구장해율 , 구장해율 : 구장해율 , 신장해율 : 신장해율 , 장해기간 : 장해기간 , 장해년수 : 장해년수
    }

    return RESULT(__hpasRuleResult);
};