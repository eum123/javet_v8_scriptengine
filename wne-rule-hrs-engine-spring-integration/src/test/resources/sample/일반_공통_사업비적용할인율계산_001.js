var 일반_공통_사업비적용할인율계산_001 = function(계속계약할인율_PCT,고액계약할인율_PCT,단체할인율_PCT,부부가족할인율_PCT,세대수할인율_PCT,부보대수할인율_PCT,패키지할인율_PCT,예정사업비율,CM할인율_PCT ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 사업비합계할인율 = null;
    var 사업비최대할인율 
var 사업비적용율 


    // Compiler Version 1 , Created : 2023-08-23 17:19:27
    if(true
){
        사업비최대할인율=(AMT(예정사업비율)).multiply(AMT(0.6))

    }

    if(true
){
        사업비적용율 = 100

    }

    if(계속계약할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(계속계약할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(고액계약할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(고액계약할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(단체할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(단체할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(부부가족할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(부부가족할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(세대수할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(세대수할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(부보대수할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(부보대수할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(패키지할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(패키지할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(CM할인율_PCT > 0
){
        사업비적용율=(AMT(사업비적용율)).multiply(AMT(1).subtract((AMT(CM할인율_PCT)).divide(AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(true
){
        사업비적용율 = 100 - 사업비적용율

    }

    if(사업비최대할인율 > 사업비적용율
){
        사업비합계할인율 = 사업비적용율

    }

    if(사업비최대할인율 <= 사업비적용율
){
        사업비합계할인율 = 사업비최대할인율

    }
    __hpasRuleResult = {
        사업비합계할인율 : 사업비합계할인율
    }

    return RESULT(__hpasRuleResult);
};