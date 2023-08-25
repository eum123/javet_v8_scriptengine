var 일반_공통_직선보간법계산_001 = function(X1,X2,Y1,Y2,COLUMN변수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 인상계수 = null;
    if(
IS_EMPTY(Y1)==true
){
Y1=1
}

if(
IS_EMPTY(Y2)==true
){
Y2=1
}


    // Compiler Version 1 , Created : 2023-08-23 16:43:36
    if(true
){
        인상계수=AMT(Y1).add(((AMT(Y2).subtract(AMT(Y1))).multiply(AMT(COLUMN변수).subtract(AMT(X1)))).divide(AMT(X2).subtract(AMT(X1)), 20, BigDecimal.ROUND_DOWN))

    }
    if(
IS_EMPTY(인상계수)==true
){
인상계수=0
}

    __hpasRuleResult = {
        인상계수 : 인상계수
    }

    return RESULT(__hpasRuleResult);
};