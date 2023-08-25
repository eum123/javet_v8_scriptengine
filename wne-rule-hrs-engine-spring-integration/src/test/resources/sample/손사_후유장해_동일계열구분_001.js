var 손사_후유장해_동일계열구분_001 = function(CNT1,CNT2,CNT3,IDX,IDXP,구구장해동일계열갯수,구구장해동일계열여부,구장해동일계열갯수,구장해동일계열여부,신장해동일계열갯수,신장해동일계열여부,장해코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var CNT1 = CNT1;
    var CNT2 = CNT2;
    var CNT3 = CNT3;
    var IDX = IDX;
    var IDXP = IDXP;
    var 구구장해동일계열갯수 = 구구장해동일계열갯수;
    var 구구장해동일계열여부 = 구구장해동일계열여부;
    var 구장해동일계열갯수 = 구장해동일계열갯수;
    var 구장해동일계열여부 = 구장해동일계열여부;
    var 신장해동일계열갯수 = 신장해동일계열갯수;
    var 신장해동일계열여부 = 신장해동일계열여부;
    var 장해코드 = 장해코드;

    // Compiler Version 1 , Created : 2023-08-21 18:29:08
    if(true){
        // 신장해 :  눈 A, 귀 B, 팔 H, 다리 I, 손가락 J, 발가락 K
// (구)구장해 : 눈 AA AB AC, 귀 BA, 팔 H, 다리 IA, 손가락 JA, 발가락 KA

    }

    if(IDX == 0){
        CNT1 = 0
CNT2 = 0
CNT3 = 0
신장해동일계열여부[IDXP] = "1"
구장해동일계열여부[IDXP] = "1"
구구장해동일계열여부[IDXP] = "1"
신장해동일계열갯수[IDXP] = 0
구장해동일계열갯수[IDXP] = 0
구구장해동일계열갯수[IDXP] = 0

    }

    if(LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  장해코드[IDXP] != 장해코드[IDX]){
        CNT1 = CNT1 + 1

    }

    if(MID(장해코드[IDXP],2,2) == MID(장해코드[IDX],2,2)  &&  장해코드[IDXP] != 장해코드[IDX]){
        CNT2 = CNT2 + 1
CNT3 = CNT3 + 1

    }

    if(IDX == 장해코드.length - 1  &&  CNT1 > 0){
        신장해동일계열여부[IDXP] = "0"
신장해동일계열갯수[IDXP] = CNT1

    }

    if(IDX == 장해코드.length - 1  &&  CNT2 > 0){
        구장해동일계열여부[IDXP] = "0"
구장해동일계열갯수[IDXP] = CNT2

    }

    if(IDX == 장해코드.length - 1  &&  CNT3 > 0){
        구구장해동일계열여부[IDXP] = "0"
구구장해동일계열갯수[IDXP] = CNT3

    }
    __hpasRuleResult = {
        CNT1 : CNT1 , CNT2 : CNT2 , CNT3 : CNT3 , IDX : IDX , IDXP : IDXP , 구구장해동일계열갯수 : 구구장해동일계열갯수 , 구구장해동일계열여부 : 구구장해동일계열여부 , 구장해동일계열갯수 : 구장해동일계열갯수 , 구장해동일계열여부 : 구장해동일계열여부 , 신장해동일계열갯수 : 신장해동일계열갯수 , 신장해동일계열여부 : 신장해동일계열여부 , 장해코드 : 장해코드
    }

    return RESULT(__hpasRuleResult);
};