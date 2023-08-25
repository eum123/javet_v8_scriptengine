function(콤포넌트아이디 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_화면_콤포넌트_001',ruleName:'일반_공통_화면_콤포넌트',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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


    // Compiler Version 1 , Created : 2023-08-18 17:36:09
    var canSheetNext = true
    if(canSheetNext) {

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:0});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "목적물명" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:1});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:2});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "적용업종" , '적용항목' : "적용업종" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:3});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "영위업종코드" , '적용항목' : "rtApcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:4});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 19 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "적용업종" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:5});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "movFIRA023" , '적용항목' : "movFIRA023" , '적용코드' : "업종조회" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:6});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물유형" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:7});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "목적물유형" , '적용항목' : "ojTpCsfcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:8});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "목적물명" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:9});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:10});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "적용업종" , '적용항목' : "적용업종" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:11});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "영위업종코드" , '적용항목' : "rtApcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:12});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 24 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "bnnm" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:13});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "movFIRA023" , '적용항목' : "movFIRA023" , '적용코드' : "업종조회" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:14});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "건물구조/급수" , '적용항목' : "건물구조/급수" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:15});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "기둥(조)" , '적용항목' : "plecd" , '적용코드' : "00156" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:16});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "지붕(즙)" , '적용항목' : "rofcd" , '적용코드' : "00653" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:17});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "외벽" , '적용항목' : "wllcd" , '적용코드' : "00273" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:18});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "급수" , '적용항목' : "comBldRnkcd" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:19});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "급" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:20});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "movFIRA118" , '적용항목' : "movFIRA118" , '적용코드' : "검색" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:21});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 2 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "담보내용" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:22});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 58 , '행높이' : 2 , '화면표시구성요소구분코드' : "04" , '적용항목명' : "담보내용" , '적용항목' : "cvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:23});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "titleCvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:24});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 25 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보내용" , '적용항목' : "cvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:25});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 24 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:26});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "약정복구기간" , '적용항목' : "titleAgrRestTrm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:27});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "약정복구기간" , '적용항목' : "agrRestTrmcd" , '적용코드' : "@:선택^01492" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:28});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "titleCvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:29});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 25 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "cvrCn" , '적용항목' : "cvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:30});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 24 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:31});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "약정복구기간" , '적용항목' : "titleAgrRestTrm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:32});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "약정복구기간" , '적용항목' : "agrRestTrmcd" , '적용코드' : "@:선택^01492" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:33});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "부보비율" , '적용항목' : "titleInrt" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:34});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "부보비율" , '적용항목' : "inrt" , '적용코드' : "0:선택;100:100%;90:90%;80:80%;70:70%;60:60%;50:50%" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:35});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 258 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:36});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "면책기간" , '적용항목' : "titleImuTrmDays" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:37});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "면책기간" , '적용항목' : "imuTrmDays" , '적용코드' : "@:선택^01493" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:38});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "부보비율" , '적용항목' : "titleInrt" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:39});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "부보비율" , '적용항목' : "inrt" , '적용코드' : "0:선택;100:100%;90:90%;80:80%;70:70%;60:60%;50:50%" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:40});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 258 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:41});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "면책기간" , '적용항목' : "titleImuTrmDays" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:42});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "면책기간" , '적용항목' : "imuTrmDays" , '적용코드' : "@:선택^01493" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:43});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "장비분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:44});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "적용업종" , '적용항목' : "rtApcd" , '적용코드' : "01478" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:45});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "건설기계구분코드 추가속성코드" , '적용항목' : "MA00049" , '적용코드' : "02201" , '속성코드' : "MA00049" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:46});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "장비명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:47});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "장비명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:48});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 24 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:49});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "장비등록번호" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:50});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "장비등록번호" , '적용항목' : "MA00010" , '적용코드' : "type:'han'" , '속성코드' : "MA00010" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:51});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "장비대수" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:52});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "장비대수 산출기초" , '적용항목' : "eqmtCtCcBavl" , '적용코드' : "type:'num''" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:53});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "건설기계명세" , '적용항목' : "movFIRA212" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:54});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 122 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:55});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "중장비여부" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:56});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "준설선/선상내(해상/수상작업)" , '적용항목' : "MA00161" , '적용코드' : "" , '속성코드' : "MA00161" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:57});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물유형" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:58});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "목적물유형" , '적용항목' : "ojTpCsfcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:59});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 180 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:60});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:61});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:62});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "적용업종" , '적용항목' : "적용업종" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:63});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 19 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "적용업종" , '적용항목' : "rtApnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:64});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "적용업종조회" , '적용항목' : "movFIRA023_1" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:65});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 40 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:66});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "실제영위직종" , '적용항목' : "titleOjTp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "C000010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:67});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "실제영위직종" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:68});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물유형" , '적용항목' : "목적물유형" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:69});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "목적물유형" , '적용항목' : "ojTpCsfcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:70});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "목적물유형" , '적용항목' : "ojTpcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:71});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "적용업종" , '적용항목' : "적용업종" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:72});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 19 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "rtApnm" , '적용항목' : "rtApnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:73});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "적용업종조회" , '적용항목' : "movFIRA023_1" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:74});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "titleStock" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:75});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:76});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "품목분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:77});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 19 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "품목분류" , '적용항목' : "mngmBtpnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:78});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "품목분류조회" , '적용항목' : "movFIRA023_2" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:79});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "실제영위직종" , '적용항목' : "titleOjTp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:80});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "실제영위직종" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:81});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "할인할증" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:82});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "고층건물할증" , '적용항목' : "MA00087" , '적용코드' : "" , '속성코드' : "MA00087" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:83});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "공지할인" , '적용항목' : "MA00005" , '적용코드' : "" , '속성코드' : "MA00005" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:84});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "공지할인율" , '적용항목' : "MA00091" , '적용코드' : "" , '속성코드' : "MA00091" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:85});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "공지할인조회" , '적용항목' : "movFIRA109" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:86});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "소화설비할인" , '적용항목' : "MA00003" , '적용코드' : "" , '속성코드' : "MA00003" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:87});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "소화설비종류코드" , '적용항목' : "MA00102" , '적용코드' : "" , '속성코드' : "MA00102" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:88});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 8 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "소화설비할인율" , '적용항목' : "MA00090" , '적용코드' : "" , '속성코드' : "MA00090" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:89});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 9 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "소화설비할인조회" , '적용항목' : "movFIRA110" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:90});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 10 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "불연내장재할인" , '적용항목' : "MA00006" , '적용코드' : "" , '속성코드' : "MA00006" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:91});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 11 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "재고자산할증" , '적용항목' : "MA00007" , '적용코드' : "" , '속성코드' : "MA00007" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:92});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 12 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "특수건물할인" , '적용항목' : "MA00008" , '적용코드' : "" , '속성코드' : "MA00008" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:93});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 13 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "특수건물할인율" , '적용항목' : "MA00089" , '적용코드' : "" , '속성코드' : "MA00089" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:94});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 14 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "우량할인" , '적용항목' : "MA00004" , '적용코드' : "" , '속성코드' : "MA00004" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "MVPR004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:95});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 15 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "우량물건할인율" , '적용항목' : "MA00092" , '적용코드' : "" , '속성코드' : "MA00092" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:96});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물찾기" , '적용항목' : "titOjOjHelp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:97});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "영위업종코드" , '적용항목' : "rtApcd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:98});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물상세내용" , '적용항목' : "pprBnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:99});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "한글목적물명" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:100});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:101});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "수리위험여부(Wet Risk)" , '적용항목' : "MA00086" , '적용코드' : "" , '속성코드' : "MA00086" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:102});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물찾기" , '적용항목' : "titOjOjHelp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:103});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "영위업종코드" , '적용항목' : "rtApcd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:104});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물상세내용" , '적용항목' : "pprBnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:105});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "한글목적물명" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:106});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:107});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "거룻배, 짐배에 설치" , '적용항목' : "MA00035" , '적용코드' : "" , '속성코드' : "MA00035" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:108});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물찾기" , '적용항목' : "titOjOjHelp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:109});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "영위업종코드" , '적용항목' : "rtApcd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:110});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물상세내용" , '적용항목' : "pprBnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:111});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "한글목적물명" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:112});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:113});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물상세명" , '적용항목' : "titOjDtCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:114});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 25 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물상세명" , '적용항목' : "ojDtCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:115});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "공사기간" , '적용항목' : "titBzStDt" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:116});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공사기간(from)" , '적용항목' : "bzStDt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:117});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "~" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:118});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공사기간(to)" , '적용항목' : "bzClsDt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:119});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "(" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:120});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 8 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공사개월수" , '적용항목' : "wrkMntct" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:121});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 9 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "개월)" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:122});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "titCvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:123});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 25 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보내용" , '적용항목' : "cvrCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:124});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "시운전기간" , '적용항목' : "titTrrunMntct" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:125});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "시운전기간" , '적용항목' : "trrunMntct" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:126});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "개월" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:127});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명세" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:128});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "유무" , '적용항목' : "plojListItemYn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:129});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 2 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "목적물명세" , '적용항목' : "movFIRA603" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:130});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 212 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:131});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "해체위험여부" , '적용항목' : "tdOjDsmntRkYnHelp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:132});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : ":" , '적용항목' : "dsmntRkYn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:133});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "해체위험할증율" , '적용항목' : "MA00088" , '적용코드' : "type:'num', mask:'#,###.00'" , '속성코드' : "MA00088" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:134});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 8 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "%" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:135});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "이익상실/비용" , '적용항목' : "titPftLosCost" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:136});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "보상기간 :" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:137});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상기간" , '적용항목' : "cmpTrm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:138});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "보상기간구분코드" , '적용항목' : "cmpTrmFlgCd" , '적용코드' : "06:개월;07:일" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:139});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:140});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "공제기간 :" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:141});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공제기간" , '적용항목' : "dcTrm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:142});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 8 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "공제기간구분코드" , '적용항목' : "dcTrmFlgCd" , '적용코드' : "06:개월;07:일" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:143});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 9 , '길이' : 14 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:144});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 10 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명세" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:145});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 11 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "유무" , '적용항목' : "plojListItemYn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:146});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 12 , '길이' : 2 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "목적물명세" , '적용항목' : "movFIRA603" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:147});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 13 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "해체위험여부" , '적용항목' : "tdOjDsmntRkYnHelp" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:148});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 14 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : ":" , '적용항목' : "dsmntRkYn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:149});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 15 , '길이' : 4 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "해체위험할증율" , '적용항목' : "MA00088" , '적용코드' : "type:'num', mask:'#,###.00'" , '속성코드' : "MA00088" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "0"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:150});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 16 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "%" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:151});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:152});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:153});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보대회명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:154});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보대회명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:155});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "대회장소명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:156});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "대회장소명" , '적용항목' : "MA00258" , '적용코드' : "type:'han'" , '속성코드' : "MA00258" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:157});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "지정코스홀" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:158});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "지정코스홀" , '적용항목' : "MA00016" , '적용코드' : "type:'han'" , '속성코드' : "MA00016" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:159});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "참가인원" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:160});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "임직원수" , '적용항목' : "MA00256" , '적용코드' : "type:'num'" , '속성코드' : "MA00256" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:161});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:162});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 24 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "참가인원세부내역" , '적용항목' : "MA00257" , '적용코드' : "type:'han'" , '속성코드' : "MA00257" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:163});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "라운드수" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:164});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "라운드수" , '적용항목' : "MA00017" , '적용코드' : "type:'num'" , '속성코드' : "MA00017" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:165});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "라운드" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:166});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "동물종류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:167});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "동물종류" , '적용항목' : "rtApcd" , '적용코드' : "70501:말;70502:수달;70503:애완견;70504:호랑이;70591:(임시)기타동물" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:168});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "피보험자업종" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:169});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "피보험자업종" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:170});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "생년월일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:171});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "생년월일" , '적용항목' : "MA00013" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "MA00013" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:172});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "나이 :" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : null , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:173});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "년" , '적용항목' : "MA00014" , '적용코드' : "type:'num'" , '속성코드' : "MA00014" , '수정상태코드' : "x" , '필수입력여부' : null , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:174});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "년" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : null , '화면CLASS정보' : null , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:175});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "구입(수입)일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "GR00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:176});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "구입(수입)일자" , '적용항목' : "MA00015" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "MA00015" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:177});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "물건구분" , '적용항목' : "물건구분" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:178});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "objflgcd" , '적용항목' : "objflgcd" , '적용코드' : "01:주택;02:일반;03:공장" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:179});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소화설비할인" , '적용항목' : "소화설비할인" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:180});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "dccd" , '적용항목' : "dccd" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "03" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:181});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "btnCSearch" , '적용항목' : "btnCSearch" , '적용코드' : "할인율조회" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:182});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소재지누적" , '적용항목' : "소재지누적" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:183});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "lctcd" , '적용항목' : "lctcd" , '적용코드' : "00983" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:184});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "lctcd1" , '적용항목' : "lctcd1" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-alert" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:185});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "-" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:186});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 3 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "lctcd2" , '적용항목' : "lctcd2" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "Y" , '화면CLASS정보' : "state-highlight" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:187});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "상세주소" , '적용항목' : "상세주소" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "X000002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:188});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 30 , '행높이' : 2 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "address" , '적용항목' : "address" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:189});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업종분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:190});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 14 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:191});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "업종분류" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:192});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:193});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00002"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:194});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:195});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:196});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보내용" , '적용항목' : "cvrCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:197});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:198});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "01:손해사고기준;02:배상청구기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "02"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:199});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:200});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "통지기간연장담보" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:201});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "통지기간연장담보" , '적용항목' : "ntTrmXtCvrdy" , '적용코드' : "type:'num',maxlength:11" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:202});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:203});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:204});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00004"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:205});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:206});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00005"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:207});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "01:손해사고기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:208});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:209});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "02:배상청구기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:210});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:211});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "통지기간연장담보" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:212});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "통지기간연장담보" , '적용항목' : "ntTrmXtCvrdy" , '적용코드' : "type:'num',maxlength:11" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:213});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:214});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:215});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00009"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:216});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:217});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "행사여부" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00006"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:218});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "행사여부" , '적용항목' : "MA00166" , '적용코드' : "" , '속성코드' : "MA00166" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:219});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "도급업무명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00007"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:220});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "도급업무명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:221});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "계약가입형태" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:222});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "계약가입형태" , '적용항목' : "is_Tpcd" , '적용코드' : ":선택;00:개별공사계약;02:연간포괄계약" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:223});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:224});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "피보험자구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00008"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:225});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 12 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "피보험자구분" , '적용항목' : "wrkEntpFlgcd" , '적용코드' : ":선택;01:원청자(원도급업자);02:하청자(하도급업자);03:발주자" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:226});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "생산물분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:227});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 14 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "상위생산물분류명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:228});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 17 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "생산물분류" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00010"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:229});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:230});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "생산물명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00011"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:231});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "생산물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:232});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업태구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:233});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "제조업" , '적용항목' : "MA00053" , '적용코드' : "" , '속성코드' : "MA00053" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:234});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "판매업" , '적용항목' : "MA00054" , '적용코드' : "" , '속성코드' : "MA00054" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:235});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "수입판매업" , '적용항목' : "MA00055" , '적용코드' : "" , '속성코드' : "MA00055" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:236});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "설치,해체업" , '적용항목' : "MA00056" , '적용코드' : "" , '속성코드' : "MA00056" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00012"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:237});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "유지보수업" , '적용항목' : "MA00057" , '적용코드' : "" , '속성코드' : "MA00057" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:238});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:239});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "01:손해사고기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00013"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:240});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "판매업자명세" , '적용항목' : "movFIRA215" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:241});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보지역" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:242});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 9 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보지역" , '적용항목' : "cvrArecd" , '적용코드' : "00185" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00014"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:243});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 26 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보지역내용" , '적용항목' : "cvrAreAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:244});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "제품군" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:245});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "제품군" , '적용항목' : "MG00324" , '적용코드' : "type:'han'" , '속성코드' : "MG00324" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:246});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "제품명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00015"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:247});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "제품명" , '적용항목' : "MG00325" , '적용코드' : "type:'han'" , '속성코드' : "MG00325" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:248});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:249});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00016"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:250});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:251});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보지역" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00017"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:252});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보지역내용" , '적용항목' : "cvrAreAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:253});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보상특수조건" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:254});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상특수조건값" , '적용항목' : "cmpSpclCndvl" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00018"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:255});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "보상특수조건코드" , '적용항목' : "cmpSpclCndcd" , '적용코드' : "01:손해율한도" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:256});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보상기간" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:257});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상기간" , '적용항목' : "cmpTrm" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:258});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "일자구분" , '적용항목' : "cmpTrmCd" , '적용코드' : ":;06:개월;07:일" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:259});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:260});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "면책기간" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:261});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "면책기간" , '적용항목' : "imuTrm" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00019"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:262});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "일자구분" , '적용항목' : "imuTrmCd" , '적용코드' : ":;06:개월;07:일" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:263});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보상비율" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:264});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상비율" , '적용항목' : "cmpRt" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:265});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "%" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:266});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 63 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:267});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보상특수조건" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:268});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "보상특수조건코드" , '적용항목' : "cmpSpclCndcd" , '적용코드' : "01:손해율한도" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00020"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:269});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상특수조건값" , '적용항목' : "cmpSpclCndvl" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:270});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업종분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:271});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:272});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 11 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "업종분류" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:273});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:274});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "목적물명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:275});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 12 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:276});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 3 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보내용" , '적용항목' : "담보내용" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00022"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:277});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 3 , '화면표시구성요소구분코드' : "04" , '적용항목명' : "담보내용" , '적용항목' : "cvrCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:278});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업종분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:279});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:280});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "업종분류" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:281});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:282});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 14 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:283});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "제조" , '적용항목' : "MA00037" , '적용코드' : "" , '속성코드' : "MA00037" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:284});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 7 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "판매" , '적용항목' : "MA00038" , '적용코드' : "" , '속성코드' : "MA00038" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:285});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 8 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "금융" , '적용항목' : "MA00039" , '적용코드' : "" , '속성코드' : "MA00039" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00023"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:286});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 9 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "서비스" , '적용항목' : "MA00040" , '적용코드' : "" , '속성코드' : "MA00040" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:287});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보지역" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:288});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보지역" , '적용항목' : "cvrArecd" , '적용코드' : "01:대한민국;99:전세계" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00024"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:289});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보지역내용" , '적용항목' : "cvrAreAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00025"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:290});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00025"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:291});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00025"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:292});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:293});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "총자산" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:294});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "총자산화폐" , '적용항목' : "tAsamtMncd" , '적용코드' : "WON:WON" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:295});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "총자산금액" , '적용항목' : "tAsamt" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:296});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "임직원현황" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:297});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "임직원수" , '적용항목' : "xstfPsct" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00026"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:298});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:299});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "공제금액 추가조건" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {

    if(((콤포넌트아이디 == "LB00027"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:300});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "07" , '적용항목명' : "해당 담보 공제금액 우선 적용" , '적용항목' : "selfChamtPrapYn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:301});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:302});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "02:배상청구기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:303});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "판매업자명세" , '적용항목' : "movFIRA215" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:304});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "통지기간연장담보" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:305});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "통지기간연장담보" , '적용항목' : "ntTrmXtCvrdy" , '적용코드' : "type:'num',maxlength:11" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:306});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:307});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:308});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00028"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:309});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:310});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "기본담보" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:311});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:312});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "업종분류" , '적용항목' : "bnnm" , '적용코드' : "Premises:Premises;Transit:Transit" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:313});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "목적물명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:314});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "시설관리전문업체" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00030"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:315});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "06" , '적용항목명' : "시설관리전문업체 여부" , '적용항목' : "MA00192" , '적용코드' : "1:예;0:아니오" , '속성코드' : "MA00192" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:316});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "발렛파킹" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00031"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:317});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "06" , '적용항목명' : "발렛파킹 유무" , '적용항목' : "MA00193" , '적용코드' : "0:없음;1:있음" , '속성코드' : "MA00193" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:318});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보기준" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:319});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "담보기준" , '적용항목' : "lbRpblCvrStncd" , '적용코드' : "01:손해사고기준;02:배상청구기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:320});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "판매업자명세" , '적용항목' : "movFIRA215" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "dolink" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:321});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "통지기간연장담보" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:322});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "통지기간연장담보" , '적용항목' : "ntTrmXtCvrdy" , '적용코드' : "type:'num',maxlength:11" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:323});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:324});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:325});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00032"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:326});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 3 , '길이' : 28 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보추가사항" , '적용항목' : "retrCvrdtAdCnd" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:327});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "담보위험명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00033"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:328});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "담보위험명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:329});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "사업내용" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00034"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:330});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 35 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "사업내용" , '적용항목' : "cvrCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:331});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보상비율" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:332});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 7 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보상비율" , '적용항목' : "cmpRt" , '적용코드' : "type:'num'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:333});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "%" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:334});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 56 , '행높이' : 1 , '화면표시구성요소구분코드' : "12" , '적용항목명' : "" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:335});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "자회사담보여부" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00035"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:336});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "06" , '적용항목명' : "자회사담보여부 여부" , '적용항목' : "MA00066" , '적용코드' : "1:예;0:아니오" , '속성코드' : "MA00066" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00036"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:337});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "전문직업명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00036"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:338});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "전문직업명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00037"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:339});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업무명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00037"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:340});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "업무명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:341});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "계약금액" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:342});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "계약금액" , '적용항목' : "ojDtCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:343});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "공사기간" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:344});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공사시기" , '적용항목' : "bzStdt" , '적용코드' : "type:'date'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:345});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "~" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00038"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:346});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 6 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "공사종기" , '적용항목' : "bzClsdt" , '적용코드' : "type:'date'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:347});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "발주자명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00039"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:348});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "발주자명" , '적용항목' : "MG00326" , '적용코드' : "type:'han'" , '속성코드' : "MG00326" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:349});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "기초담보내역" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:350});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "기초담보내역" , '적용항목' : "MA00067" , '적용코드' : "00161" , '속성코드' : "MA00067" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00040"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:351});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 25 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "기초담보내역" , '적용항목' : "MA00068" , '적용코드' : "type:'han'" , '속성코드' : "MA00068" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:352});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "건설기계유형" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:353});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:354});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "업종분류" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00041"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:355});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "Y" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:356});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "건설기계구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00042"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:357});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 12 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "건설기계구분" , '적용항목' : "MA00049" , '적용코드' : "01:무한궤도식 건설기계;02:타이어식 건설기계" , '속성코드' : "MA00049" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:358});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "건설기계명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00043"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:359});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "건설기계명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:360});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "건설기계설명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00044"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:361});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "건설기계설명" , '적용항목' : "ojDtCn" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:362});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "업종분류" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00029"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:363});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "11" , '적용항목명' : "상위업종명" , '적용항목' : "pprBnnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:364});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 20 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "상위업종명" , '적용항목' : "bnnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "x" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00045"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:365});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 1 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "업종조회" , '적용항목' : "movFIRA023" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "icon-search" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:366});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "임상시험명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00046"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:367});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "임상시험명" , '적용항목' : "hnglOjnm" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:368});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "소급담보일자" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:369});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 6 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "소급담보일자" , '적용항목' : "retrCvrdt" , '적용코드' : "type:'date',calendar:true" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:370});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "통지기간연장" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:371});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 5 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "통지기간연장" , '적용항목' : "ntTrmXtCvrdy" , '적용코드' : "type:'num',maxlength:11" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00047"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:372});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 5 , '길이' : 0 , '행높이' : 1 , '화면표시구성요소구분코드' : "02" , '적용항목명' : "일" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:373});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "의약품명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:374});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "의약품명" , '적용항목' : "MA00051" , '적용코드' : "type:'han'" , '속성코드' : "MA00051" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:375});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "임상시험기관" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "LB00048"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:376});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 4 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "임상시험기관" , '적용항목' : "MA00052" , '적용코드' : "type:'han'" , '속성코드' : "MA00052" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : null
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:377});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 4 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "텍스트에리어테스트" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:378});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 30 , '행높이' : 4 , '화면표시구성요소구분코드' : "04" , '적용항목명' : "텍스트에리어테스트" , '적용항목' : "test1" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:379});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "길이테스트길이테스트길이테스트길이테스트길이테스트" , '적용항목' : null , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:380});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "길이테스트길이테스트길이테스트길이테스트길이테스트" , '적용항목' : "test2" , '적용코드' : "type:'han'" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:381});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "05" , '적용항목명' : "길이테스트길이테스트길이테스트길이테스트길이테스트" , '적용항목' : "test3" , '적용코드' : "0:없음;1:있음" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:382});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 4 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "08" , '적용항목명' : "큰버튼" , '적용항목' : "test3" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "Y" , '화면CLASS정보' : "dolink" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:383});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "테스트테스트" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:384});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 2 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "10" , '적용항목명' : "테스트테스트" , '적용항목' : "test4" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:385});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 3 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "2coltest" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "TEST01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:386});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 3 , '길이' : 10 , '행높이' : 1 , '화면표시구성요소구분코드' : "06" , '적용항목명' : "라디오" , '적용항목' : "test5" , '적용코드' : "01:손해사고기준;02:배상청구기준" , '속성코드' : "" , '수정상태코드' : "01|02|13" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:387});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "설계번호" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:388});
     __hpasRuleResult.push({
'행순번' : 1 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "설계번호" , '적용항목' : "inqPlno" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "FA201230250916"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:389});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출력물id" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:390});
     __hpasRuleResult.push({
'행순번' : 2 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출력물id" , '적용항목' : "inqVrId" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : "FIRA803"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:391});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출력구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "state-required" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:392});
     __hpasRuleResult.push({
'행순번' : 3 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출력구분" , '적용항목' : "inqVrGubun" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "Y" , '화면CLASS정보' : "" , '기본값S' : "01"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:393});
     __hpasRuleResult.push({
'행순번' : 4 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "증권번호" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:394});
     __hpasRuleResult.push({
'행순번' : 4 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "증권번호" , '적용항목' : "inqPlyno" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : "FA20071621022000"
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:395});
     __hpasRuleResult.push({
'행순번' : 6 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "조회구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:396});
     __hpasRuleResult.push({
'행순번' : 6 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "조회구분" , '적용항목' : "inq_gb" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:397});
     __hpasRuleResult.push({
'행순번' : 7 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "취급직원번호" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:398});
     __hpasRuleResult.push({
'행순번' : 7 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "취급직원번호" , '적용항목' : "inqDhStfno" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:399});
     __hpasRuleResult.push({
'행순번' : 8 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "이메일보안인증번호" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:400});
     __hpasRuleResult.push({
'행순번' : 8 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "이메일보안인증번호" , '적용항목' : "inqEmailSecuPw" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:401});
     __hpasRuleResult.push({
'행순번' : 9 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "상품코드" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:402});
     __hpasRuleResult.push({
'행순번' : 9 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "상품코드" , '적용항목' : "inqGdcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:403});
     __hpasRuleResult.push({
'행순번' : 10 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "보험종목명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:404});
     __hpasRuleResult.push({
'행순번' : 10 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "보험종목명" , '적용항목' : "inqInsItmcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:405});
     __hpasRuleResult.push({
'행순번' : 11 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출력옵션" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:406});
     __hpasRuleResult.push({
'행순번' : 11 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출력옵션" , '적용항목' : "inqOutUseFlgcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:407});
     __hpasRuleResult.push({
'행순번' : 12 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출력물TAB구분" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:408});
     __hpasRuleResult.push({
'행순번' : 12 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출력물TAB구분" , '적용항목' : "inqPrnotDomnFlg" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:409});
     __hpasRuleResult.push({
'행순번' : 13 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출력물부분출력구분코드" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:410});
     __hpasRuleResult.push({
'행순번' : 13 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출력물부분출력구분코드" , '적용항목' : "inqPrnotPartOutFlgcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:411});
     __hpasRuleResult.push({
'행순번' : 14 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "문서분류코드" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:412});
     __hpasRuleResult.push({
'행순번' : 14 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "문서분류코드" , '적용항목' : "inqDcuCsfcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:413});
     __hpasRuleResult.push({
'행순번' : 15 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "부서코드" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:414});
     __hpasRuleResult.push({
'행순번' : 15 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "부서코드" , '적용항목' : "inqDepCd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:415});
     __hpasRuleResult.push({
'행순번' : 16 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "거래처명" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:416});
     __hpasRuleResult.push({
'행순번' : 16 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "거래처명" , '적용항목' : "inqDlpnm" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:417});
     __hpasRuleResult.push({
'행순번' : 17 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "출재내용" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:418});
     __hpasRuleResult.push({
'행순번' : 17 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "출재내용" , '적용항목' : "inqReCn" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:419});
     __hpasRuleResult.push({
'행순번' : 18 , '열순번' : 1 , '길이' : 8 , '행높이' : 1 , '화면표시구성요소구분코드' : "01" , '적용항목명' : "위험유형" , '적용항목' : "" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }

    if(((콤포넌트아이디 == "PRNOT001"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_화면_콤포넌트_001' , row:420});
     __hpasRuleResult.push({
'행순번' : 18 , '열순번' : 2 , '길이' : 15 , '행높이' : 1 , '화면표시구성요소구분코드' : "03" , '적용항목명' : "위험유형" , '적용항목' : "inqRkTpcd" , '적용코드' : "" , '속성코드' : "" , '수정상태코드' : "" , '필수입력여부' : "" , '화면CLASS정보' : "" , '기본값S' : ""
})
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};