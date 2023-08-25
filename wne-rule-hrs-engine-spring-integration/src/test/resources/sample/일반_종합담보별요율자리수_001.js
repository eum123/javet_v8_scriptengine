var 일반_종합담보별요율자리수_001 = function(담보코드,상품코드,상해수상레저장비구분코드,피보험자수 ){
    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-23 18:38:51
    if(((담보코드 == "CFA00000"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10001"))
    && ((상품코드 == 'FA00115001')||(상품코드 == 'FA00115002'))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10001"))
    && (!(상품코드 == 'FA00115001')||!(상품코드 == 'FA00115002'))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10002"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10003"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10004"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10005"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10006"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10008"))
    && ((상품코드 == 'FA00115001')||(상품코드 == 'FA00115002'))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10008"))
    && (!(상품코드 == 'FA00115001')||!(상품코드 == 'FA00115002'))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10024"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10073"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10083"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10136"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10409"))
    && (!(상품코드 == 'FA00064001'))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10409"))
    && ((상품코드 == 'FA00064001'))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10410"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10411"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10436"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10437"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10438"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10439"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10440"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10490"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10491"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10492"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10493"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10494"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10495"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10528"))){
        __hpasRuleResult = {
'자리수' : 2
}

    }
    else if(((담보코드 == "CFA10529"))){
        __hpasRuleResult = {
'자리수' : 2
}

    }
    else if(((담보코드 == "CFA10530"))){
        __hpasRuleResult = {
'자리수' : 2
}

    }
    else if(((담보코드 == "CFA10531"))){
        __hpasRuleResult = {
'자리수' : 2
}

    }
    else if(((담보코드 == "CFA10606"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10607"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10608"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10609"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10613"))
    && ((상품코드 == 'FA00059001'))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10613"))
    && ((상품코드 == 'FA00089001')||(상품코드 == 'FA00089002'))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10614"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10615"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10616"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10617"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10618"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10619"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10620"))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10621"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10630"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10631"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10632"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10633"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10634"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10635"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10636"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10637"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10638"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10639"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10641"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10642"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10643"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10644"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10657"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10658"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10675"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10676"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10677"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10678"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10679"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10688"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10689"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10690"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10836"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10840"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10844"))
    && ((상해수상레저장비구분코드 == "02"))
    && ((피보험자수 >= 50))){
        __hpasRuleResult = {
'자리수' : 6
}

    }
    else if(((담보코드 == "CFA10844"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10845"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10841"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10843"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10507"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10936"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10939"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10940"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10941"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10946"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10947"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10948"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA10982"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10983"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA10984"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA10412"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA11053"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11054"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11055"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11056"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11057"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11058"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11121"))){
        __hpasRuleResult = {
'자리수' : 3
}

    }
    else if(((담보코드 == "CFA10436"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11002"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11184"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11185"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11152"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11155"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11157"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA11158"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA11159"))){
        __hpasRuleResult = {
'자리수' : 5
}

    }
    else if(((담보코드 == "CFA11160"))){
        __hpasRuleResult = {
'자리수' : 4
}

    }
    else if(((담보코드 == "CFA11237"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11244"))){
        __hpasRuleResult = {
'자리수' : 7
}

    }
    else if(((담보코드 == "CFA11245"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA11246"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA11248"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA11249"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA11404"))){
        __hpasRuleResult = {
'자리수' : 1
}

    }
    else if(((담보코드 == "CFA11898"))){
        __hpasRuleResult = {
'자리수' : 2
}

    }

    return RESULT(__hpasRuleResult);
};