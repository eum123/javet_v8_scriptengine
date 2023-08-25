var 일반_상해_국내여행_실손의료비요율조정_001 = function(순요율,담보코드 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 순요율 = 순요율;

    // Compiler Version 1 , Created : 2023-08-23 15:31:16
    if(담보코드 == "CFA10946" || 담보코드 == "CFA11412"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA10947" || 담보코드 == "CFA11413"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA10948" || 담보코드 == "CFA11414"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA10949" || 담보코드 == "CFA11415"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA10950" || 담보코드 == "CFA11416"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA10951" || 담보코드 == "CFA11417"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA11026"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA11027"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }

    if(담보코드 == "CFA11028"
){
        순요율=ROUND((AMT(순요율)).multiply(AMT(1)),1)

    }
    __hpasRuleResult = {
        순요율 : 순요율
    }

    return RESULT(__hpasRuleResult);
};