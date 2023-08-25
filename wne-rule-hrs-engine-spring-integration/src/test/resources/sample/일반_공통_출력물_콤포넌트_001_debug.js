function(콤포넌트아이디 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_출력물_콤포넌트_001',ruleName:'일반_공통_출력물_콤포넌트',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'콤포넌트아이디:'+JSON.stringify(콤포넌트아이디)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'콤포넌트아이디' , 'value':JSON.stringify(콤포넌트아이디) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = [];


    // Compiler Version 1 , Created : 2023-08-18 17:20:54
    var canSheetNext = true
    if(canSheetNext) {

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:0});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:1});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "명기물건내역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:2});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:3});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "수량" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:4});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "개당가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:5});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "합계가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:6});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:7});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:8});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:9});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%qant%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:10});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%pieprIsamt%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:11});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:12});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:13});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "품목명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:14});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "수량" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:15});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:16});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:17});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:18});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:19});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%qant%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:20});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "SO00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:21});
     __hpasRuleResult.push({
'적용영역' : "명기물건" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%isamt%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:22});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "보상기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:23});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%pftLosCmpTrm%>까지" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:24});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "공제기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:25});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%pftLosDcTrm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:26});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10008" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "기본위험담보에 포함" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:27});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "보상기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:28});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%agrRestTrmcd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:29});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "공제기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:30});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%imuTrmcd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:31});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00110" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "물건구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:32});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00110" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%objFlgnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:33});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00110" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "특수건물" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:34});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00110" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%spclBldObjno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010321"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:35});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00103" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "보상기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010321"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:36});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00103" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%pftLosCmpTrm%>까지" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010321"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:37});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00103" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "공제기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010321"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:38});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00103" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%pftLosDcTrm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:39});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00027" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:40});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00027" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%mncd%> <%isamt%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:41});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00027" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "보험료" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:42});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00027" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%mncd%> <%apPrm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:43});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10028" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "공제비율:<%CG00045/2%>%" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:44});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10007" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "종업원산재보험가입여부:<%CA00128/2@1;Y|0;N%>, 시설면적:<%CA00246/2@frmtCommaPoint%>㎡" , '적용조건' : "<%CA00128/2%>!=null && <%CA00246/2%>!=null"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:45});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10007" , '행순번' : 2 , '열순번' : 1 , '적용항목' : "종업원산재보험가입여부:<%CA00128/2@1;Y|0;N%>" , '적용조건' : "<%CA00128/2%>!=null && <%CA00246/2%>==null"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:46});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10007" , '행순번' : 3 , '열순번' : 1 , '적용항목' : "시설면적:<%CA00246/2@frmtCommaPoint%>㎡" , '적용조건' : "<%CA00128/2%>==null && <%CA00246/2%>!=null"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0002701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:47});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10029" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "풍수재위험등지:<%CA00133/2%>급" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:48});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:49});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "판매업자명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:50});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "주소" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:51});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:52});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%slTrdrNm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005311"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:53});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%adr%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:54});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:55});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "건설기계명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:56});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "건설기계등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:57});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "연식" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:58});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:59});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:60});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:61});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:62});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%cstMchRgtno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:63});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%purYymm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:64});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%spcftMncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:65});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%spcftIsamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:66});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:67});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "승강기번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:68});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "세부사항" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:69});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:70});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%cstMchRgtno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028511"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:71});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%adr%>, <%prdCmpnm%>, <%spcftItmMdnm%>, <%slTrdrNm%>, <%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:72});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:73});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "목적물명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:74});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "단가" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:75});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "수량" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:76});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:77});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:78});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:79});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:80});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%pieprIsamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:81});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%qant@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:82});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:83});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:84});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:85});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "목적물명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:86});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "단가" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:87});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "수량" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:88});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:89});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:90});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:91});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:92});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%pieprIsamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:93});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%qant@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:94});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:95});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:96});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:97});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "건설기계명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:98});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "건설기계등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:99});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "연식" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:100});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:101});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:102});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:103});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:104});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%cstMchRgtno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:105});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%purYymm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:106});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003911"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:107});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:108});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:109});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "건설기계명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:110});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "건설기계등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:111});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "연식" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:112});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:113});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:114});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:115});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:116});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%cstMchRgtno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:117});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%purYymm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:118});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015711"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:119});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:120});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "순번" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:121});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "건설기계명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:122});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "건설기계등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:123});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "연식" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:124});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 5 , '적용항목' : "화폐" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:125});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 6 , '적용항목' : "가입금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:126});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<%seqno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:127});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%spcftItmnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:128});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "<%cstMchRgtno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:129});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%purYymm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:130});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 5 , '적용항목' : "<%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011411"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:131});
     __hpasRuleResult.push({
'적용영역' : "목적물명세" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 2 , '열순번' : 6 , '적용항목' : "<%isamt@frmtComma%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0005301"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:132});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "RC3113" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0003901"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:133});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00039" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C6122113" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:134});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C3127" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:135});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C6132112" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:136});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C6132112" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0015701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:137});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C6132112" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:138});
     __hpasRuleResult.push({
'적용영역' : "목적물명세타입" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "C6132112" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:139});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "<DIV>* 목적물사항에 명기되지 아니한 야적된 동산 및 천막건물(동산포함)은 담보하지 않습니다.</DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:140});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 폐플라스틱 재생 작업이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00159/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:141});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 폐플라스틱 재생 작업이 포함 되어있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00159/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:142});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 3 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 도장 작업이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00194/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:143});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 4 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 도장 작업이 포함 되어있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00194/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:144});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 5 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 텐터 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00196/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:145});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 6 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 텐터 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00196/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:146});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 7 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 그라비아 인쇄 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00197/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:147});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 8 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 (일부 또는 전체) 중 그라비아 인쇄 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00197/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:148});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 9 , '열순번' : 1 , '적용항목' : "<DIV>* 위험품(인화점100℃미만) 사용 공정이 없는 것으로 고지된 물건입니다. </DIV>" , '적용조건' : "<%MA00230/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:149});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 10 , '열순번' : 1 , '적용항목' : "<DIV>* 위험품(인화점100℃미만) 사용 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00230/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:150});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 11 , '열순번' : 1 , '적용항목' : "<DIV>* 플라스틱 또는 플라스틱 필름에 인쇄하는 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00231/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:151});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 12 , '열순번' : 1 , '적용항목' : "<DIV>* 플라스틱 또는 플라스틱 필름에 인쇄하는 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00231/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:152});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 13 , '열순번' : 1 , '적용항목' : "<DIV>* 가죽원단을 제조하는 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00232/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:153});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 14 , '열순번' : 1 , '적용항목' : "<DIV>* 가죽원단을 제조하는 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00232/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:154});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 15 , '열순번' : 1 , '적용항목' : "<DIV>* 판금, 도장, 엔진 또는 미션수리 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00233/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:155});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 16 , '열순번' : 1 , '적용항목' : "<DIV>* 판금, 도장, 엔진 또는 미션수리 공정이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00233/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:156});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 17 , '열순번' : 1 , '적용항목' : "<DIV>* 의약품 원료 제조공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00234/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:157});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 18 , '열순번' : 1 , '적용항목' : "<DIV>* 의약품 원료 제조공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00234/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:158});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 19 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 용해 작업이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00235/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:159});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 20 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 용해 작업이 있는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00235/atrvl%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:160});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 21 , '열순번' : 1 , '적용항목' : "<DIV>* 원재료 중 액상,분말은 포함되지 않음으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00267/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:161});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 22 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중 압출, 사출, 캘린더 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00268/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:162});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 23 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중 코팅, 도장, 핫멜트, 인쇄 등 유사한 가공 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00269/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:163});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 24 , '열순번' : 1 , '적용항목' : "<DIV>* 원재료가 합성사만 사용하는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "'<%MA00270/atrvl%>'=='07180B'"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:164});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 25 , '열순번' : 1 , '적용항목' : "<DIV>* 직조 방식이 워터제트 공정이며, 그 외 방식은 사용하지 않는 물건입니다.</DIV>" , '적용조건' : "'<%MA00271/atrvl%>'=='07180E'"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:165});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 26 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중 텐터공정, 기모공정, 모소공정 등 유사한 가공 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00273/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:166});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 27 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중 벽지 제조 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00274/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:167});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 28 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중  인쇄/코팅 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00275/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:168});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 29 , '열순번' : 1 , '적용항목' : "<DIV>* 공정(일부 또는 전체) 중 골판지 원지 제조 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00276/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:169});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 30 , '열순번' : 1 , '적용항목' : "<DIV>* 원단/원지 생산 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00280/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:170});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 31 , '열순번' : 1 , '적용항목' : "<DIV>* 도금방식이 전기도금, 화학도금, 화학증착을 제외한 그외 방식으로 고지된 물건입니다.</DIV>" , '적용조건' : "'<%MA00277/atrvl%>'=='12620C'"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:171});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 32 , '열순번' : 1 , '적용항목' : "<DIV>* 도금조 재질이 금속재질만 사용하는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "'<%MA00278/atrvl%>'==='12620D'"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:172});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 33 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 열원이 전기를 제외한 그외 열원을 사용하는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "'<%MA00279/atrvl%>'==='12620G'"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:173});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 34 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 도장 작업이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00282/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:174});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 35 , '열순번' : 1 , '적용항목' : "<DIV>* 공정 중 열처리 공정이 없는 것으로 고지된 물건입니다.</DIV>" , '적용조건' : "<%MA00283/atrvl%>==0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:175});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 36 , '열순번' : 1 , '적용항목' : "<DIV>* 공장물건에 생긴 손해에 대하여 지급할 보험금은 보험가입금액이 보험가액과 같거나 클 때는 보험가입금액을 한도로 아래와 같이 계산되며, 보험가입금액이 보험가액보다 작은 일부 보험인 경우, 비례보상 됩니다.</DIV><DIV> - 공장 화재 지급보험금 예: 손해액 1억x(보험가입금액 2억/보험가액 4억)=지급보험금 5천만원</DIV>" , '적용조건' : "<%facObjyn%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:176});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "<DIV> * 구내 ESS(Energy Storage System) 설비를 비롯하여 사전 고지되지 않은 목적물 및 그로 인한 사고는 담보하지 않습니다.</DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:177});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "<DIV>* 본 보험설계서는 인수지침이 반영되지 않았으며, 인수승인 후 가입하실 수 있습니다.</DIV>" , '적용조건' : "<%vrGubun%>==01"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:178});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "<DIV>* 발렛파킹으로 인한 사고는 담보하지 않습니다.</DIV><DIV>&nbsp;&nbsp; 발렛파킹은 금전을 징수하는 대리 주차 행위와 금전을 징수하지 않는 단순 차량 이동 행위를 모두 포함합니다.</DIV>" , '적용조건' : "<%agPkYnMon%>==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:179});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "<DIV>* 상기에 기재된 보험료 산출기초(가입면적, 매출액, 좌석수 등)가 실제와 다른경우 즉시 보험회사 영업담당자에게 통보하시어 변경조치를 취하시기 바랍니다. </DIV><DIV>&nbsp;&nbsp; 만약 보험료 산출기초 등 계약상의 중요한 사항에 대하여 고의 또는 중대한 과실로 사실과 다르게 알린 경우, 보장내용이 제한될 수 있습니다.</DIV>" , '적용조건' : "<%vrGubun%>==03"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:180});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : null , '열순번' : null , '적용항목' : "<DIV>* 사전 고지 되지 않은 목적물 구내 ESS(Energy Storage System) 설비 및 이로 인한 사고는 담보하지 않습니다.</DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:181});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : null , '열순번' : null , '적용항목' : "<DIV>* 본문의 국문표기는 계약자의 이해를 돕기 위한 것이며, 모든 보상은 해당 보험약관의 원문(영문)에 따라 결정됨을 알려드립니다. </DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:182});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : null , '열순번' : null , '적용항목' : "<DIV>* 온실의 단순피복재(비닐 등) 파열의 손해발생으로 인해 단순피복재의 복구가 필요한 온실에 대하여 단순 비닐파손 특별약관이 첨부된 경우 각 동의 보험가입금액의 10%한도로 지급합니다. </DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "NTC0000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:183});
     __hpasRuleResult.push({
'적용영역' : "안내사항" , '위험유형코드' : null , '담보코드' : null , '행순번' : null , '열순번' : null , '적용항목' : "<DIV>* 목적물사항에 명기된 가입용도(단독/견인)외 사용 중 발생한 사고는 보상하지 않습니다. </DIV>" , '적용조건' : "1==1"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:184});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:185});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTp%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:186});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "근로자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:187});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%plnBzccpFlg%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:188});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "담보구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:189});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%hnglRelnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:190});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0009801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:191});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00098,RFA00099" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:192});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00116,RFA00132" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "동산수용장소" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:193});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00116,RFA00132" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%accptPlcFlgcd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:194});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00116,RFA00132" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "영업소내 상시거주" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:195});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00116,RFA00132" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%bzpInOdtmRsdYn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:196});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10723" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "수탁업자배상책임할증율 : <%CA00251/2@frmtCommaPoint%>%" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00116001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:197});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : null , '담보코드' : "CFA10148" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "가입" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00117001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:198});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00117" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "기관구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00117001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:199});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00117" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%fnOrgYnNm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00117001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:200});
     __hpasRuleResult.push({
'적용영역' : "담보" , '위험유형코드' : "RFA00117" , '담보코드' : "CFA10703" , '행순번' : 1 , '열순번' : 1 , '적용항목' : "호위(경비)인 : <%esrct%>명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00030001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:201});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00030" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "시설관리전문업체여부" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00030001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:202});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00030" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00192/2@Y;예|N;아니오%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00030001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:203});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00030" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00030001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:204});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00030" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:205});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "계약가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:206});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:207});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "담보구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:208});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%scntrPscvrYn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:209});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "공사원청자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:210});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%fcnrtNm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:211});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:212});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:213});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "계약가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:214});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:215});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00031002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:216});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00031" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%wrkEntpFlgnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00034001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:217});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00034" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "학교구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00034001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:218});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00034" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00034001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:219});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00034" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00034001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:220});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00034" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00035001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:221});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00035" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "발렛파킹유무" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00035001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:222});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00035" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00193/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00035001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:223});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00035" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00035001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:224});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00035" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00040001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:225});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00040" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "선박종류" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00040001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:226});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00040" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00101/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00040001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:227});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00040" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "선박수리시설" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00040001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:228});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00040" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%ojDtCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00041001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:229});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00041" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "하역작업시설" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00041001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:230});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00041" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%ojDtCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:231});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "보관화물명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:232});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%ojDtCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:233});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "월평균재고" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:234});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%mnthAvgStockVlamt@frmtComma%> <%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:235});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "창고면적" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:236});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%MA00097/2@frmtComma%> <%MA00098/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:237});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "야적장면적" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00042001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:238});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00042,RFA00043" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%MA00099/2@frmtComma%> <%MA00100/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00044001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:239});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00044,RFA00045" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "경비구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00044001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:240});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00044,RFA00045" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00043/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00046001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:241});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00046" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "하청계약형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00046001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:242});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00046" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00046001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:243});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00046" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "임가공물가액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00046001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:244});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00046" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%fprbjVlamt@frmtComma%> <%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:245});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:246});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:247});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:248});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:249});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "도급금액" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:250});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%utamt@frmtComma%> <%mncd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:251});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "하도급인담보" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:252});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%scntrPscvrYn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:253});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 3 , '열순번' : 1 , '적용항목' : "공사원청자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00047001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:254});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00047" , '담보코드' : null , '행순번' : 3 , '열순번' : 2 , '적용항목' : "<%fcnrtNm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00050001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:255});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00050" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "운항지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00050001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:256});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00050" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%slngAre%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:257});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00052" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "운송구간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:258});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00052" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00018/2%> ~ <%MA00019/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:259});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00052" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "운송차량" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00052001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:260});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00052" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%carno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:261});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:262});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:263});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "소급담보일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:264});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:265});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:266});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053,RFA00188" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:267});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "옥외광고물배상책임 가입" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00053001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:268});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00053" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%oudrAdGdLbtrs%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00056001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:269});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00056,RFA00057" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "배상기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00056001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:270});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00056,RFA00057" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00056001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:271});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00056,RFA00057" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00056001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:272});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00056,RFA00057" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:273});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "기초담보내역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:274});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00067/2%> / <%MA00068/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:275});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:276});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:277});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "소급담보일자 " , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00058001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:278});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00058" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00068001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:279});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00060,RFA00061,RFA00062,RFA00063,RFA00064,RFA00065,RFA00066,RFA00067,RFA00068,RFA00069,RFA00070" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "업종구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00068001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:280});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00060,RFA00061,RFA00062,RFA00063,RFA00064,RFA00065,RFA00066,RFA00067,RFA00068,RFA00069,RFA00070" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%pprbnnm%> <%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00068001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:281});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00060,RFA00061,RFA00062,RFA00063,RFA00064,RFA00065,RFA00066,RFA00067,RFA00068,RFA00069,RFA00070" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "가스종류" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00068001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:282});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00060,RFA00061,RFA00062,RFA00063,RFA00064,RFA00065,RFA00066,RFA00067,RFA00068,RFA00069,RFA00070" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%gasKndcd%> <%MA00069/1%>  <%MA00069/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00071001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:283});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00071" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00071001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:284});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00071" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:285});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:286});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:287});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "통지기간연장담보" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:288});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%ntTrmXtCvrdy%>일" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:289});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "소급담보일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:290});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:291});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 3 , '열순번' : 1 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:292});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00053,RFA00215" , '담보코드' : null , '행순번' : 3 , '열순번' : 2 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:293});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:294});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:295});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "통지기간연장담보" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:296});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%ntTrmXtCvrdy%>일" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:297});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "소급담보일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:298});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:299});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {

    if(((콤포넌트아이디 == "RFA00075002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:300});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00075,RFA00158,RFA00181,RFA00226,RFA00307,RFA00030,RFA00035,RFA00215" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00076001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:301});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00076" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00076001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:302});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00076" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00076001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:303});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00076" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00076001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:304});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00076" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00077001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:305});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00077" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00077001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:306});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00077" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00077001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:307});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00077" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00077001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:308});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00077" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:309});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:310});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:311});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "소급담보일자 " , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:312});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:313});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00079001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:314});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00079" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:315});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:316});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:317});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "통지기간연장담보" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:318});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%ntTrmXtCvrdy%>일" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:319});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "소급담보일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:320});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:321});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:322});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:323});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 3 , '열순번' : 1 , '적용항목' : "보상비율" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:324});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 3 , '열순번' : 2 , '적용항목' : "<%cmpRt%>%" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:325});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 3 , '열순번' : 3 , '적용항목' : "자회사 담보여부" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00086001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:326});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00086" , '담보코드' : null , '행순번' : 3 , '열순번' : 4 , '적용항목' : "<%MA00066/2@Y;예|N;아니오%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00155001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:327});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00155,RFA00156" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "수상레저기구" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00155001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:328});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00155,RFA00156" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00155001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:329});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00155,RFA00156" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "견인동력기구" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00155001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:330});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00155,RFA00156" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00112/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00166001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:331});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00166" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00166001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:332});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00166" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:333});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "선박국적" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:334});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%ntlcd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:335});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "운항지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:336});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%slngAre%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:337});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "총톤수" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:338});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%tonno%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:339});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "선령" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00187001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:340});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00187" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%vag%>년" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:341});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "의사면허" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:342});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MG00294/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:343});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "진료과목" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:344});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:345});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "소급일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:346});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:347});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "통지기간연장담보" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0021101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:348});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00211" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%ntTrmXtCvrdy%>일" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00215001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:349});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "업종" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00215001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:350});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00215" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00224001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:351});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00224" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "일련번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00224001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:352});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00224" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "MU-<%MG00302/2%>-<%MG00303/2%>-<%MG00304/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00224001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:353});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00224" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "의무가입대상여부" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00224001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:354});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00224" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00151/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:355});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "기초담보내역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:356});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00067/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:357});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "담보기준" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:358});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%lbRpblCvrStnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:359});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 2 , '열순번' : 3 , '적용항목' : "소급담보일자 " , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00238001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:360});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00238" , '담보코드' : null , '행순번' : 2 , '열순번' : 4 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00260001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:361});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00260" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "수상레저기구" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00260001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:362});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00260" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00278001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:363});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00278" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "계약가입형태" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00278001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:364});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00278" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%isTpnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00303001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:365});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00303" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "피보험자구분" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00303001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:366});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00303" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00029/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00127001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:367});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00127" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보지역" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00127001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:368});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00127" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%cvrAreAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00127001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:369});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00127" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "소급담보일자" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00127001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:370});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00127" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%retrCvrdtAdCnd%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00222001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:371});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00165,RFA00178,RFA00179,RFA00184,RFA00185,RFA00204,RFA00205,RFA00222,RFA00236,RFA00237,RFA00248,RFA00251,RFA00270,RFA00271,RFA00273,RFA00274,RFA00275,RFA00281,RFA00283,RFA00284,RFA00287,RFA00295,RFA00300,RFA00305,RFA00306,RFA00310,RFA00311" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "보상특수조건" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00222001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:372});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00165,RFA00178,RFA00179,RFA00184,RFA00185,RFA00204,RFA00205,RFA00222,RFA00236,RFA00237,RFA00248,RFA00251,RFA00270,RFA00271,RFA00273,RFA00274,RFA00275,RFA00281,RFA00283,RFA00284,RFA00287,RFA00295,RFA00300,RFA00305,RFA00306,RFA00310,RFA00311" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%cmpSpclCndnm%> : <%cmpSpclCndvl%>%" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:373});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "승강기번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:374});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00224/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:375});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "승강기종류" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:376});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:377});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "설치층수" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0028501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:378});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00285" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%MA00226/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:379});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:380});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00100" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:381});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00148" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "업종" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:382});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00148" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:383});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00148" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:384});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00148" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:385});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00107" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010701"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:386});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00107" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:387});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "담보내용" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:388});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00102" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%cvrCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0026101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:389});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00261" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "업종" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0026101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:390});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00261" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:391});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028,RFA00101,RFA00103,RFA00108" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "이익상실" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0010101"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:392});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00028,RFA00101,RFA00103,RFA00108" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "보상기간: <%pftLosCmpTrm%> 공제기간: <%pftLosDcTrm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:393});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "장비등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:394});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00010/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:395});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "장비대수" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011401"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:396});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00114" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%mchCt%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0018301"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:397});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00183" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "업종" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0018301"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:398});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00183" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:399});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00115" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "세부공사명" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:400});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00115" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%ojDtCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:401});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00115" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "담보내용" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:402});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00115" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%cvrCn%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014901"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:403});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00149" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "공사기간" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0014901"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:404});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00149" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bzStdt@frmtDate%> ~ <%bzClsdt@frmtDate%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:405});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00112" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "품목분류" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA0011201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:406});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00112" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%vBnnm%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00152001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:407});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00152" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "건물구조" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00152001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:408});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00152" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%bldStrRnk%>급" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00157001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:409});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "장비분류" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00157001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:410});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00049/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00157001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:411});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "장비등록번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00157001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:412});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00157" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00010/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00245001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:413});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00245" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "가입관리번호" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00245001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:414});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00245" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00185/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00308001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:415});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00308" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "산출기초" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00308001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:416});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00308" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%ojCcBa%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00308001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:417});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00308" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "보험가입금액비율" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00308001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:418});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00308" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00248/2%>%" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:419});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 1 , '열순번' : 1 , '적용항목' : "참가인원" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:420});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 1 , '열순번' : 2 , '적용항목' : "<%MA00256/2%>명 <%MA00257/2%>" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:421});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 1 , '열순번' : 3 , '적용항목' : "라운드수" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:422});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 1 , '열순번' : 4 , '적용항목' : "<%MA00017/2%>라운드" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:423});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 2 , '열순번' : 1 , '적용항목' : "지정코스홀" , '적용조건' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "RFA00136001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_콤포넌트_001' , row:424});
     __hpasRuleResult.push({
'적용영역' : "목적물" , '위험유형코드' : "RFA00136" , '담보코드' : null , '행순번' : 2 , '열순번' : 2 , '적용항목' : "<%MA00016/2%>" , '적용조건' : null
})
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};