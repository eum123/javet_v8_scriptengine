var 손사_후유장해_예외코드처리_001 = function(좌우구분,좌해당여부,우해당여부,IDX,IDXP,구구장해율,구장해율,신장해율,장해기간,장해년수,장해코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var IDX = IDX;
    var 우해당여부 = 우해당여부;
    var 좌우구분 = 좌우구분;
    var 좌해당여부 = 좌해당여부;
    var IDXP = IDXP;
    var 구구장해율 = 구구장해율;
    var 구장해율 = 구장해율;
    var 신장해율 = 신장해율;
    var 장해기간 = 장해기간;
    var 장해년수 = 장해년수;
    var 장해코드 = 장해코드;

    // Compiler Version 1 , Created : 2023-08-21 18:30:25
    if(true){
        구구장해율[IDXP]=(AMT(구구장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)
구장해율[IDXP]=(AMT(구장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)
신장해율[IDXP]=(AMT(신장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)

구구장해율[IDX]=(AMT(구구장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)
구장해율[IDX]=(AMT(구장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)
신장해율[IDX]=(AMT(신장해율[IDX])).divide(AMT(2), 20, BigDecimal.ROUND_DOWN)

좌해당여부[IDXP] = ""
우해당여부[IDXP] = ""
장해기간[IDXP] = 장해기간[IDX]
장해년수[IDXP] = 장해년수[IDX]
장해코드[IDXP] = 장해코드[IDX] + "_R"
장해코드[IDX] = 장해코드[IDX] + "_L"
좌우구분[IDXP] = "R"
좌우구분[IDX] = "L"

IDXP = IDXP + 1

    }
    __hpasRuleResult = {
        IDX : IDX , 우해당여부 : 우해당여부 , 좌우구분 : 좌우구분 , 좌해당여부 : 좌해당여부 , IDXP : IDXP , 구구장해율 : 구구장해율 , 구장해율 : 구장해율 , 신장해율 : 신장해율 , 장해기간 : 장해기간 , 장해년수 : 장해년수 , 장해코드 : 장해코드
    }

    return RESULT(__hpasRuleResult);
};