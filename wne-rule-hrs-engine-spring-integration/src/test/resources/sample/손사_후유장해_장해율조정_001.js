var 손사_후유장해_장해율조정_001 = function(IDX,일상지지급율합_오른쪽,일상지지급율합_왼쪽,일하지지급율합_오른쪽,일하지지급율합_왼쪽,장해코드,좌우구분,신장해대상장해율,신장해감액대상비율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var IDX = IDX;
    var 신장해감액대상비율 = 신장해감액대상비율;
    var 신장해대상장해율 = 신장해대상장해율;
    var 일상지지급율합_오른쪽 = 일상지지급율합_오른쪽;
    var 일상지지급율합_왼쪽 = 일상지지급율합_왼쪽;
    var 일하지지급율합_오른쪽 = 일하지지급율합_오른쪽;
    var 일하지지급율합_왼쪽 = 일하지지급율합_왼쪽;
    var 장해코드 = 장해코드;
    var 좌우구분 = 좌우구분;

    // Compiler Version 1 , Created : 2023-08-21 18:30:52
    if(IDX == 0){
        // 신장해 :  눈 A, 귀 B, 팔 H, 다리 I, 손가락 J, 발가락 K

일상지지급율합_왼쪽 = 0
일상지지급율합_오른쪽 = 0
일하지지급율합_왼쪽 = 0
일하지지급율합_오른쪽 = 0
신장해감액대상비율 = 0
//구장해감액대상비율 = 0
//구구장해감액대상비율 = 0

    }

    if((LEFT(장해코드[IDX],1) == "H"  ||  LEFT(장해코드[IDX],1) == "J")  &&  좌우구분[IDX] == "L"){
        일상지지급율합_왼쪽 = 일상지지급율합_왼쪽 + 신장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],1) == "H"  ||  LEFT(장해코드[IDX],1) == "J")  &&  좌우구분[IDX] == "R"){
        일상지지급율합_오른쪽 = 일상지지급율합_오른쪽 + 신장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],2) == "I"  ||  LEFT(장해코드[IDX],2) == "K")  &&  좌우구분[IDX] == "L"){
        일하지지급율합_왼쪽 = 일상지지급율합_왼쪽 + 신장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],2) == "I"  ||  LEFT(장해코드[IDX],2) == "K")  &&  좌우구분[IDX] == "R"){
        일하지지급율합_오른쪽 = 일상지지급율합_오른쪽 + 신장해대상장해율[IDX]

    }

    if(IDX == 신장해대상장해율.length - 1  &&  일상지지급율합_왼쪽 > 60){
        신장해감액대상비율 = 신장해감액대상비율 + 일상지지급율합_왼쪽 - 60

    }

    if(IDX == 신장해대상장해율.length - 1  &&  일상지지급율합_오른쪽 > 60){
        신장해감액대상비율 = 신장해감액대상비율 + 일상지지급율합_오른쪽 - 60

    }
    __hpasRuleResult = {
        IDX : IDX , 신장해감액대상비율 : 신장해감액대상비율 , 신장해대상장해율 : 신장해대상장해율 , 일상지지급율합_오른쪽 : 일상지지급율합_오른쪽 , 일상지지급율합_왼쪽 : 일상지지급율합_왼쪽 , 일하지지급율합_오른쪽 : 일하지지급율합_오른쪽 , 일하지지급율합_왼쪽 : 일하지지급율합_왼쪽 , 장해코드 : 장해코드 , 좌우구분 : 좌우구분
    }

    return RESULT(__hpasRuleResult);
};