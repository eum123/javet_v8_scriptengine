var 손사_후유장해_신장해동일계열구분_001 = function(CNT1,IDX,IDXP,신장해동일계열여부,장해코드,좌우구분,신장해대상장해율,신장해율,신장해동일계열갯수,BIT_A,BIT_Y,BIT_U,BIT_V,BIT_W,BIT_Z,신장해율_신경계 ){
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
    var BIT_A = BIT_A;
    var BIT_Y = BIT_Y;
    var BIT_U = BIT_U;
    var BIT_V = BIT_V;
    var BIT_W = BIT_W;
    var BIT_Z = BIT_Z;
    var 신장해율_신경계 = 신장해율_신경계;

    // Compiler Version 1 , Created : 2023-08-21 18:29:22
    if(IDX == 0){
        // 신장해 :  눈 A, 귀 B, 팔 H, 다리 I, 손가락 J, 발가락 K

CNT1 = 0
신장해대상장해율[IDXP] = 신장해율[IDXP]
신장해동일계열여부[IDXP] = "0"
신장해동일계열갯수[IDXP] = 0
BIT_A = 0
BIT_U = 0
BIT_V = 0
BIT_W = 0
BIT_Y = 0
BIT_Z = 0
신장해율_신경계 = 0

    }

    if(장해코드[IDX] == "HA016"  ||  장해코드[IDX] == "HA017"  ||  장해코드[IDX] == "HA018"  ||  장해코드[IDX] == "HA019"  ||  장해코드[IDX] == "HA020"  ||  장해코드[IDX] == "HA021"  ||  장해코드[IDX] == "HA022"  ||  장해코드[IDX] == "HA023"  ||  장해코드[IDX] == "HA024"  ||  장해코드[IDX] == "HA025"  ||  장해코드[IDX] == "HA026"  ||  장해코드[IDX] == "HA027"  ||  장해코드[IDX] == "IA019"  ||  장해코드[IDX] == "IA020"  ||  장해코드[IDX] == "IA021"  ||  장해코드[IDX] == "IA022"  ||  장해코드[IDX] == "IA023"  ||  장해코드[IDX] == "IA024"  ||  장해코드[IDX] == "IA025"  ||  장해코드[IDX] == "IA026"  ||  장해코드[IDX] == "IA027"  ||  장해코드[IDX] == "IA028"  ||  장해코드[IDX] == "IA029"  ||  장해코드[IDX] == "IA030"  ||  장해코드[IDX] == "JA009"  ||  장해코드[IDX] == "JA010"  ||  장해코드[IDX] == "JA011"  ||  장해코드[IDX] == "JA012"  ||  장해코드[IDX] == "JA013"  ||  장해코드[IDX] == "JA014"  ||  장해코드[IDX] == "JA015"  ||  장해코드[IDX] == "JA016"  ||  장해코드[IDX] == "JA017"  ||  장해코드[IDX] == "JA018"  ||  장해코드[IDX] == "KA008"  ||  장해코드[IDX] == "KA009"  ||  장해코드[IDX] == "KA010"  ||  장해코드[IDX] == "KA011"  ||  장해코드[IDX] == "KA012"  ||  장해코드[IDX] == "KA013"  ||  장해코드[IDX] == "KA014"  ||  장해코드[IDX] == "KA015"  ||  장해코드[IDX] == "KA016"  ||  장해코드[IDX] == "KA017"){
        BIT_A = 1

    }

    if(장해코드[IDXP] == "MA012"  ||  장해코드[IDXP] == "MA013"  ||  장해코드[IDXP] == "MA014"  ||  장해코드[IDXP] == "MA015"){
        BIT_U = 1

    }

    if(장해코드[IDXP] == "MA016"  ||  장해코드[IDXP] == "MA017"  ||  장해코드[IDXP] == "MA018"  ||  장해코드[IDXP] == "MA019"){
        BIT_V = 1

    }

    if(장해코드[IDXP] == "MA020"  ||  장해코드[IDXP] == "MA021"  ||  장해코드[IDXP] == "MA022"  ||  장해코드[IDXP] == "MA023"){
        BIT_W = 1

    }

    if(장해코드[IDXP] == "MA024"  ||  장해코드[IDXP] == "MA025"  ||  장해코드[IDXP] == "MA026"){
        BIT_Y = 1

    }

    if(장해코드[IDXP] == "MA027"  ||  장해코드[IDXP] == "MA028"  ||  장해코드[IDXP] == "MA029"){
        BIT_Z = 1

    }

    if(LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&    BIT_A != 1  &&  BIT_Y != 1 &&  BIT_V != 1 && BIT_U != 1 &&  BIT_W != 1 &&  BIT_Z != 1 &&  좌우구분[IDXP] == 좌우구분[IDX] &&  장해코드[IDX] != "MA012"  &&  장해코드[IDX] != "MA013"  &&  장해코드[IDX] != "MA014"  &&  장해코드[IDX] != "MA015" &&  장해코드[IDX] != "MA016"  &&  장해코드[IDX] != "MA017"  &&  장해코드[IDX] != "MA018"  &&  장해코드[IDX] != "MA019" &&  장해코드[IDX] != "MA020"  &&  장해코드[IDX] != "MA021"  &&  장해코드[IDX] != "MA022"  &&  장해코드[IDX] != "MA023" &&  장해코드[IDX] != "MA024"  &&  장해코드[IDX] != "MA025"  &&  장해코드[IDX] != "MA026"   &&  장해코드[IDX] != "MA027"  &&  장해코드[IDX] != "MA028"  &&  장해코드[IDX] != "MA029"){
        CNT1 = CNT1 + 1

    }

    if((장해코드[IDX] == "MA012"  ||  장해코드[IDX] == "MA013"  ||  장해코드[IDX] == "MA014"  ||  장해코드[IDX] == "MA015") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  BIT_A != 1  &&  BIT_U == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT1 = CNT1 + 1

    }

    if((장해코드[IDX] == "MA016"  ||  장해코드[IDX] == "MA017"  ||  장해코드[IDX] == "MA018"  ||  장해코드[IDX] == "MA019") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  BIT_A != 1  &&  BIT_V == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT1 = CNT1 + 1

    }

    if((장해코드[IDX] == "MA020"  ||  장해코드[IDX] == "MA021"  ||  장해코드[IDX] == "MA022"  ||  장해코드[IDX] == "MA023") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  BIT_A != 1  &&  BIT_W == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT1 = CNT1 + 1

    }

    if((장해코드[IDX] == "MA024"  ||  장해코드[IDX] == "MA025"  ||  장해코드[IDX] == "MA026")  && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  BIT_A != 1  &&  BIT_Y == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT1 = CNT1 + 1

    }

    if((장해코드[IDX] == "MA027"  ||  장해코드[IDX] == "MA028"  ||  장해코드[IDX] == "MA029")  && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  BIT_A != 1  &&  BIT_Z == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        CNT1 = CNT1 + 1

    }

    if(LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_Y != 1 &&  BIT_V != 1 && BIT_U != 1 &&  BIT_W != 1 &&  BIT_Z != 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if((장해코드[IDX] == "MA012"  ||  장해코드[IDX] == "MA013"  ||  장해코드[IDX] == "MA014"  ||  장해코드[IDX] == "MA015") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_U == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if((장해코드[IDX] == "MA016"  ||  장해코드[IDX] == "MA017"  ||  장해코드[IDX] == "MA018"  ||  장해코드[IDX] == "MA019") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_V == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if((장해코드[IDX] == "MA020"  ||  장해코드[IDX] == "MA021"  ||  장해코드[IDX] == "MA022"  ||  장해코드[IDX] == "MA023") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_W == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if((장해코드[IDX] == "MA024"  ||  장해코드[IDX] == "MA025"  ||  장해코드[IDX] == "MA026") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_Y == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
        신장해대상장해율[IDXP] = 신장해율[IDX]

    }

    if((장해코드[IDX] == "MA027"  ||  장해코드[IDX] == "MA028"  ||  장해코드[IDX] == "MA029") && LEFT(장해코드[IDXP],1) == LEFT(장해코드[IDX],1)  &&  신장해대상장해율[IDXP] < 신장해율[IDX]  &&  BIT_A != 1  &&  BIT_Z == 1 &&  좌우구분[IDXP] == 좌우구분[IDX]){
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
        CNT1 : CNT1 , IDX : IDX , IDXP : IDXP , 신장해동일계열여부 : 신장해동일계열여부 , 장해코드 : 장해코드 , 신장해대상장해율 : 신장해대상장해율 , 신장해율 : 신장해율 , 신장해동일계열갯수 : 신장해동일계열갯수 , BIT_A : BIT_A , BIT_Y : BIT_Y , BIT_U : BIT_U , BIT_V : BIT_V , BIT_W : BIT_W , BIT_Z : BIT_Z , 신장해율_신경계 : 신장해율_신경계
    }

    return RESULT(__hpasRuleResult);
};