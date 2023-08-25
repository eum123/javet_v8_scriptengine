var 손사_후유장해_구_구장해동일계열구분_001 = function(CNT2,IDX,IDXP,구장해동일계열여부,장해코드,구구장해동일계열여부,좌우구분,구장해동일계열갯수,구구장해동일계열갯수,구구장해대상장해율,구장해대상장해율,구장해율,구구장해율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var CNT2 = CNT2;
    var IDX = IDX;
    var IDXP = IDXP;
    var 구장해동일계열여부 = 구장해동일계열여부;
    var 장해코드 = 장해코드;
    var 구구장해동일계열여부 = 구구장해동일계열여부;
    var 좌우구분 = 좌우구분;
    var 구구장해동일계열갯수 = 구구장해동일계열갯수;
    var 구장해동일계열갯수 = 구장해동일계열갯수;
    var 구구장해대상장해율 = 구구장해대상장해율;
    var 구장해대상장해율 = 구장해대상장해율;
    var 구구장해율 = 구구장해율;
    var 구장해율 = 구장해율;

    // Compiler Version 1 , Created : 2023-08-21 18:28:23
    if(IDX == 0){
        // (구)구장해 : 눈 AA AB AC, 귀 BA, 팔 HA, 다리 IA, 손가락 JA, 발가락 KA

CNT2 = 0

구장해대상장해율[IDXP] = 구장해율[IDXP]
구구장해대상장해율[IDXP] = 구구장해율[IDXP]
구장해동일계열여부[IDXP] = "0"
구장해동일계열갯수[IDXP] = 0
구구장해동일계열여부[IDXP] = "0"
구구장해동일계열갯수[IDXP] = 0

    }

    if(LEFT(장해코드[IDXP],2) == LEFT(장해코드[IDX],2)  &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT2 = CNT2 + 1

    }

    if(LEFT(장해코드[IDXP],2) == LEFT(장해코드[IDX],2)  &&  구장해대상장해율[IDXP] < 구장해율[IDX]  &&  좌우구분[IDXP] == 좌우구분[IDX]){
        구장해대상장해율[IDXP] = 구장해율[IDX]

    }

    if(LEFT(장해코드[IDXP],2) == LEFT(장해코드[IDX],2)  &&  구구장해대상장해율[IDXP] < 구구장해율[IDX]  &&  좌우구분[IDXP] == 좌우구분[IDX]){
        구구장해대상장해율[IDXP] = 구구장해율[IDX]

    }

    if(IDX == 장해코드.length - 1  &&  CNT2 > 0){
        구장해동일계열여부[IDXP] = "1"
구장해동일계열갯수[IDXP] = CNT2
구구장해동일계열여부[IDXP] = "1"
구구장해동일계열갯수[IDXP] = CNT2

    }

    if(IDX == 장해코드.length - 1  &&  CNT2 > 0  &&  구장해동일계열갯수[IDXP] != 0){
        구장해대상장해율[IDXP]=(AMT(구장해대상장해율[IDXP])).divide(AMT(구장해동일계열갯수[IDXP]), 20, BigDecimal.ROUND_DOWN)

    }

    if(IDX == 장해코드.length - 1  &&  CNT2 > 0  &&  구구장해동일계열갯수[IDXP] != 0){
        구구장해대상장해율[IDXP]=(AMT(구구장해대상장해율[IDXP])).divide(AMT(구구장해동일계열갯수[IDXP]), 20, BigDecimal.ROUND_DOWN)

    }
    __hpasRuleResult = {
        CNT2 : CNT2 , IDX : IDX , IDXP : IDXP , 구장해동일계열여부 : 구장해동일계열여부 , 장해코드 : 장해코드 , 구구장해동일계열여부 : 구구장해동일계열여부 , 좌우구분 : 좌우구분 , 구구장해동일계열갯수 : 구구장해동일계열갯수 , 구장해동일계열갯수 : 구장해동일계열갯수 , 구구장해대상장해율 : 구구장해대상장해율 , 구장해대상장해율 : 구장해대상장해율 , 구구장해율 : 구구장해율 , 구장해율 : 구장해율
    }

    return RESULT(__hpasRuleResult);
};