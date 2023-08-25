var 손사_후유장해_예외코드구분_001 = function(BIT_D,IDX,장해코드,좌해당여부,우해당여부,IDXP ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var BIT_D = BIT_D;
    var IDX = IDX;
    var 장해코드 = 장해코드;
    var 좌해당여부 = 좌해당여부;
    var 우해당여부 = 우해당여부;
    var IDXP = IDXP;

    // Compiler Version 1 , Created : 2023-08-21 18:30:01
    if(true){
        BIT_D = 0

    }

    if((장해코드[IDX] == "HA001"  ||  장해코드[IDX] == "HA003"  ||  장해코드[IDX] == "IA001"   ||  장해코드[IDX] == "IA003"   ||  장해코드[IDX] == "JA001")  &&  (좌해당여부[IDX] == "1"  &&  우해당여부[IDX] == "1" )){
        BIT_D = 1

    }

    if(IDX == 0){
        IDXP = 좌해당여부.length

    }
    __hpasRuleResult = {
        BIT_D : BIT_D , IDX : IDX , 장해코드 : 장해코드 , 좌해당여부 : 좌해당여부 , 우해당여부 : 우해당여부 , IDXP : IDXP
    }

    return RESULT(__hpasRuleResult);
};