var 손사_후유장해_좌우구분_001 = function(좌우구분,좌해당여부,우해당여부,IDX,IDXP,구구장해율,구장해율,신장해율,장해기간,장해년수,장해코드,구구장해대상장해율,구장해대상장해율,신장해대상장해율,BIT_B,BIT_C ){
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
    var 구구장해대상장해율 = 구구장해대상장해율;
    var 구장해대상장해율 = 구장해대상장해율;
    var 신장해대상장해율 = 신장해대상장해율;
    var BIT_B = BIT_B;
    var BIT_C = BIT_C;

    // Compiler Version 1 , Created : 2023-08-21 18:32:10
    if(true){
        BIT_B = 0
BIT_C = 0

    }

    if(//장해코드[IDX] == "AA001"  ||  장해코드[IDX] == "BA001"  ||  장해코드[IDX] == "BA007"

장해코드[IDX] == "AA001"  ||  장해코드[IDX] == "BA001"  ||  장해코드[IDX] == "BA007"  ||  장해코드[IDX] == "HA001"  ||  장해코드[IDX] == "HA003"  ||  장해코드[IDX] == "IA001"   ||  장해코드[IDX] == "IA003"   ||  장해코드[IDX] == "JA001"){
        BIT_C = 1

    }

    if(좌해당여부[IDX] == "1"  &&  우해당여부[IDX] != "1"){
        좌우구분[IDX] = "L"

    }

    if(좌해당여부[IDX] != "1"  &&  우해당여부[IDX] == "1"){
        좌우구분[IDX] = "R"

    }

    if(좌해당여부[IDX] == "1"  &&  우해당여부[IDX] == "1"  &&  BIT_C != 1){
        BIT_B = 1

    }

    if(좌해당여부[IDX] == "1"  &&  우해당여부[IDX] == "1"  &&  BIT_C == 1){
        좌우구분[IDX] = "L"

    }

    if(좌해당여부[IDX] != "1"  &&  우해당여부[IDX] != "1"){
        좌우구분[IDX] = "L"

    }

    if(BIT_B == 1){
        구구장해율[IDXP] = 구구장해율[IDX]
구장해율[IDXP] = 구장해율[IDX]
신장해율[IDXP] = 신장해율[IDX]
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
        IDX : IDX , 우해당여부 : 우해당여부 , 좌우구분 : 좌우구분 , 좌해당여부 : 좌해당여부 , IDXP : IDXP , 구구장해율 : 구구장해율 , 구장해율 : 구장해율 , 신장해율 : 신장해율 , 장해기간 : 장해기간 , 장해년수 : 장해년수 , 장해코드 : 장해코드 , 구구장해대상장해율 : 구구장해대상장해율 , 구장해대상장해율 : 구장해대상장해율 , 신장해대상장해율 : 신장해대상장해율 , BIT_B : BIT_B , BIT_C : BIT_C
    }

    return RESULT(__hpasRuleResult);
};