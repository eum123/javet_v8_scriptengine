var 손사_후유장해_장해율조정_구구장해_001 = function(IDX,일상지지급율합_오른쪽,일상지지급율합_왼쪽,일하지지급율합_오른쪽,일하지지급율합_왼쪽,장해코드,좌우구분,구구장해감액대상비율,구구장해대상장해율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var IDX = IDX;
    var 일상지지급율합_오른쪽 = 일상지지급율합_오른쪽;
    var 일상지지급율합_왼쪽 = 일상지지급율합_왼쪽;
    var 일하지지급율합_오른쪽 = 일하지지급율합_오른쪽;
    var 일하지지급율합_왼쪽 = 일하지지급율합_왼쪽;
    var 장해코드 = 장해코드;
    var 좌우구분 = 좌우구분;
    var 구구장해감액대상비율 = 구구장해감액대상비율;
    var 구구장해대상장해율 = 구구장해대상장해율;

    // Compiler Version 1 , Created : 2023-08-21 18:31:05
    if(IDX == 0){
        // (구)구장해 : 눈 AA AB AC, 귀 BA, 팔 HA, 다리 IA, 손가락 JA, 발가락 KA

일상지지급율합_왼쪽 = 0
일상지지급율합_오른쪽 = 0
일하지지급율합_왼쪽 = 0
일하지지급율합_오른쪽 = 0
//신장해감액대상비율 = 0
//구장해감액대상비율 = 0
구구장해감액대상비율 = 0

    }

    if((LEFT(장해코드[IDX],2) == "HA"  ||  LEFT(장해코드[IDX],2) == "JA")  &&  좌우구분[IDX] == "L"){
        일상지지급율합_왼쪽 = 일상지지급율합_왼쪽 + 구구장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],2) == "HA"  ||  LEFT(장해코드[IDX],2) == "JA")  &&  좌우구분[IDX] == "R"){
        일상지지급율합_오른쪽 = 일상지지급율합_오른쪽 + 구구장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],2) == "IA"  ||  LEFT(장해코드[IDX],2) == "KA")  &&  좌우구분[IDX] == "L"){
        일하지지급율합_왼쪽 = 일상지지급율합_왼쪽 + 구구장해대상장해율[IDX]

    }

    if((LEFT(장해코드[IDX],2) == "IA"  ||  LEFT(장해코드[IDX],2) == "KA")  &&  좌우구분[IDX] == "R"){
        일하지지급율합_오른쪽 = 일상지지급율합_오른쪽 + 구구장해대상장해율[IDX]

    }

    if(IDX == 구구장해대상장해율.length - 1  &&  일상지지급율합_왼쪽 > 60){
        구구장해감액대상비율 = 구구장해감액대상비율 + 일상지지급율합_왼쪽 - 60

    }

    if(IDX == 구구장해대상장해율.length - 1  &&  일상지지급율합_오른쪽 > 60){
        구구장해감액대상비율 = 구구장해감액대상비율 + 일상지지급율합_오른쪽 - 60

    }

    if(IDX == 구구장해대상장해율.length - 1  &&  일하지지급율합_왼쪽 > 60){
        구구장해감액대상비율 = 구구장해감액대상비율 + 일하지지급율합_왼쪽 - 60

    }

    if(IDX == 구구장해대상장해율.length - 1  &&  일하지지급율합_왼쪽 > 60){
        구구장해감액대상비율 = 구구장해감액대상비율 + 일하지지급율합_오른쪽 - 60

    }
    __hpasRuleResult = {
        IDX : IDX , 일상지지급율합_오른쪽 : 일상지지급율합_오른쪽 , 일상지지급율합_왼쪽 : 일상지지급율합_왼쪽 , 일하지지급율합_오른쪽 : 일하지지급율합_오른쪽 , 일하지지급율합_왼쪽 : 일하지지급율합_왼쪽 , 장해코드 : 장해코드 , 좌우구분 : 좌우구분 , 구구장해감액대상비율 : 구구장해감액대상비율 , 구구장해대상장해율 : 구구장해대상장해율
    }

    return RESULT(__hpasRuleResult);
};