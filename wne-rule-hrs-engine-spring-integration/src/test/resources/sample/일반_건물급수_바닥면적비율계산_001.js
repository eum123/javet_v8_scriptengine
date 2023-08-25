var 일반_건물급수_바닥면적비율계산_001 = function(__LIDX,영업요율,평균요율,건물급수코드,바닥면적,바닥면적합계,우급바닥면적비율,열급바닥면적비율,__LSIZE ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 평균요율 = 평균요율;
    var 대표건물급수코드 = null;
    var 바닥면적비율 = null;
    var 우급바닥면적비율 = 우급바닥면적비율;
    var 열급바닥면적비율 = 열급바닥면적비율;

    // Compiler Version 1 , Created : 2023-08-21 18:33:00
    if(__LIDX == 0){
        평균요율 = 0
우급바닥면적비율 = 0
열급바닥면적비율 = 0
대표건물급수코드 = ""

    }

    if(true){
        바닥면적비율=(AMT(바닥면적)).divide(AMT(바닥면적합계), 20, BigDecimal.ROUND_DOWN)

    }

    if(true){
        평균요율=AMT(평균요율).add((AMT(영업요율)).multiply(AMT(바닥면적비율)))

    }

    if(true){
        CNT = 0

    }

    if(우급바닥면적비율 < 0.7 && __LSIZE - 1 > __LIDX){
        우급바닥면적비율 = 우급바닥면적비율 + 바닥면적비율
CNT = 1

    }

    if(우급바닥면적비율 >= 0.7 && CNT == 0){
        열급바닥면적비율 = 열급바닥면적비율 + 바닥면적비율

    }

    if(우급바닥면적비율 >= 0.7 && CNT == 1){
        대표건물급수코드 = 건물급수코드

    }
    var CNT 

    __hpasRuleResult = {
        평균요율 : 평균요율 , 대표건물급수코드 : 대표건물급수코드 , 바닥면적비율 : 바닥면적비율 , 우급바닥면적비율 : 우급바닥면적비율 , 열급바닥면적비율 : 열급바닥면적비율
    }

    return RESULT(__hpasRuleResult);
};