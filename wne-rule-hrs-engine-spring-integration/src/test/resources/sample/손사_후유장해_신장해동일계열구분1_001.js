var 손사_후유장해_신장해동일계열구분1_001 = function(CNT1,IDX,IDXP,신장해동일계열여부,장해코드,신장해좌우개별부위여부,좌우구분,신장해대상장해율,신장해율,신장해동일계열갯수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var CNT1 = CNT1;
    var IDX = IDX;
    var IDXP = IDXP;
    var 신장해동일계열여부 = 신장해동일계열여부;
    var 장해코드 = 장해코드;
    var 신장해대상장해율 = 신장해대상장해율;
    var 신장해율 = 신장해율;
    var 신장해동일계열갯수 = 신장해동일계열갯수;

    // Compiler Version 1 , Created : 2023-08-21 18:29:33
    if(IDX == 0){
        CNT1 = 0
신장해대상장해율[IDXP] = 신장해율[IDXP]
신장해동일계열여부[IDXP] = "0"
신장해동일계열갯수[IDXP] = 0
신장해좌우개별부위여부 = "0"

    }

    if(LEFT(장해코드[IDXP],1) == "A"  ||   LEFT(장해코드[IDXP],1) == "B"  || LEFT(장해코드[IDXP],1) == "H"  ||  LEFT(장해코드[IDXP],1) == "I"   ||  LEFT(장해코드[IDXP],1) == "J"  || LEFT(장해코드[IDXP],1) == "K"){
        // 신장해 :  눈 A, 귀 B, 팔 H, 다리 I, 손가락 J, 발가락 K

신장해좌우개별부위여부 = "1"

    }

    if((신장해좌우개별부위여부 != "1"  &&  LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  장해코드[IDXP] != 장해코드[IDX])  ||  (신장해좌우개별부위여부 == "1"  && 좌우구분[IDXP] == 좌우구분[IDX]  &&  LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  장해코드[IDXP] != 장해코드[IDX])){
        CNT1 = CNT1 + 1

    }

    if(((신장해좌우개별부위여부 != "1"  &&  LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  장해코드[IDXP] != 장해코드[IDX])  ||  (신장해좌우개별부위여부 == "1"  && 좌우구분[IDXP] == 좌우구분[IDX]  &&  LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  장해코드[IDXP] != 장해코드[IDX]))  &&  신장해대상장해율[IDXP] < 신장해율[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if(IDX == 장해코드.length - 1  &&  CNT1 > 0){
        신장해동일계열여부[IDXP] = "1"
신장해동일계열갯수[IDXP] = CNT1

    }

    if(IDX == 장해코드.length - 1  &&  CNT1 > 0  &&  신장해동일계열갯수[IDXP] != 0){
        신장해대상장해율[IDXP]=(AMT(신장해대상장해율[IDXP])).divide(AMT(신장해동일계열갯수[IDXP]), 20, BigDecimal.ROUND_DOWN)

    }
    __hpasRuleResult = {
        CNT1 : CNT1 , IDX : IDX , IDXP : IDXP , 신장해동일계열여부 : 신장해동일계열여부 , 장해코드 : 장해코드 , 신장해대상장해율 : 신장해대상장해율 , 신장해율 : 신장해율 , 신장해동일계열갯수 : 신장해동일계열갯수
    }

    return RESULT(__hpasRuleResult);
};