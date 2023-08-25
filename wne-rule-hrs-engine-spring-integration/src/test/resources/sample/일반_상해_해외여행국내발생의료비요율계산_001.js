var 일반_상해_해외여행국내발생의료비요율계산_001 = function(여행중상해합계보험료,여행중상해전환율,여행중질병합계보험료,여행중질병전환율,연수생상해합계보험료,연수생상해전환율,연수생질병합계보험료,연수생질병전환율 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 여행중상해국내보험료 = null;
    var 여행중질병국내보험료 = null;
    var 연수생상해국내보험료 = null;
    var 연수생질병국내보험료 = null;
    if(
IS_EMPTY(여행중상해국내보험료)==true
){
여행중상해국내보험료=0
}

if(
IS_EMPTY(여행중질병국내보험료)==true
){
여행중질병국내보험료=0
}

if(
IS_EMPTY(연수생상해국내보험료)==true
){
연수생상해국내보험료=0
}

if(
IS_EMPTY(연수생질병국내보험료)==true
){
연수생질병국내보험료=0
}


    // Compiler Version 1 , Created : 2023-08-23 15:36:29
    if(true
){
        여행중상해국내보험료=ROUNDDOWN(((AMT(여행중상해합계보험료)).multiply(AMT(여행중상해전환율))).divide(AMT(100), 20, BigDecimal.ROUND_DOWN),1)

    }

    if(true
){
        여행중질병국내보험료=ROUNDDOWN(((AMT(여행중질병합계보험료)).multiply(AMT(여행중질병전환율))).divide(AMT(100), 20, BigDecimal.ROUND_DOWN),1)

    }

    if(true
){
        연수생상해국내보험료=ROUNDDOWN(((AMT(연수생상해합계보험료)).multiply(AMT(연수생상해전환율))).divide(AMT(100), 20, BigDecimal.ROUND_DOWN),1)

    }

    if(true
){
        연수생질병국내보험료=ROUNDDOWN(((AMT(연수생질병합계보험료)).multiply(AMT(연수생질병전환율))).divide(AMT(100), 20, BigDecimal.ROUND_DOWN),1)

    }
    __hpasRuleResult = {
        여행중상해국내보험료 : 여행중상해국내보험료 , 여행중질병국내보험료 : 여행중질병국내보험료 , 연수생상해국내보험료 : 연수생상해국내보험료 , 연수생질병국내보험료 : 연수생질병국내보험료
    }

    return RESULT(__hpasRuleResult);
};