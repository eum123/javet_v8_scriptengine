function(상품코드,담보코드,추가속성코드,소재지구분코드,품목담보위험급수,운송중파손담보물건코드,기계적사고담보품목코드,전체일부목적물구분코드,진동담보할인여부,여행목적코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_입력요율범위조회표_001',ruleName:'일반_공통_입력요율범위조회표',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'추가속성코드:'+JSON.stringify(추가속성코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'추가속성코드' , 'value':JSON.stringify(추가속성코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'소재지구분코드:'+JSON.stringify(소재지구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'소재지구분코드' , 'value':JSON.stringify(소재지구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'품목담보위험급수:'+JSON.stringify(품목담보위험급수)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'품목담보위험급수' , 'value':JSON.stringify(품목담보위험급수) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'운송중파손담보물건코드:'+JSON.stringify(운송중파손담보물건코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'운송중파손담보물건코드' , 'value':JSON.stringify(운송중파손담보물건코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기계적사고담보품목코드:'+JSON.stringify(기계적사고담보품목코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기계적사고담보품목코드' , 'value':JSON.stringify(기계적사고담보품목코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'전체일부목적물구분코드:'+JSON.stringify(전체일부목적물구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'전체일부목적물구분코드' , 'value':JSON.stringify(전체일부목적물구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'진동담보할인여부:'+JSON.stringify(진동담보할인여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'진동담보할인여부' , 'value':JSON.stringify(진동담보할인여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'여행목적코드:'+JSON.stringify(여행목적코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'여행목적코드' , 'value':JSON.stringify(여행목적코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:20:09
    if(((상품코드 == 'FA00030001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:0});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00030002'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:1});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00031001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:2});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00032001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:3});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034001'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:4});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034002'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:5});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034003'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:6});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00030004'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:7});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034009'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:8});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034012'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:9});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:10});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:11});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:12});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:13});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:14});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:15});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:16});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:17});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:18});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:19});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0047 , '최대_Out' : 0.0157
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:20});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0157 , '최대_Out' : 0.0204
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:21});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0204 , '최대_Out' : 0.0375
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:22});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0625 , '최대_Out' : 0.0798
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:23});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1219 , '최대_Out' : 0.1642
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:24});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2674 , '최대_Out' : 0.3409
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:25});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4051 , '최대_Out' : 0.6096
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:26});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0094 , '최대_Out' : 0.0471
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:27});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0314 , '최대_Out' : 0.0612
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:28});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0408 , '최대_Out' : 0.1125
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:29});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.125 , '최대_Out' : 0.2394
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:30});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2438 , '최대_Out' : 0.4926
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:31});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.5348 , '최대_Out' : 1.0227
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:32});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.8102 , '최대_Out' : 1.8288
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:33});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0047 , '최대_Out' : 0.0157
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:34});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0157 , '최대_Out' : 0.0204
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:35});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0204 , '최대_Out' : 0.0375
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:36});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0625 , '최대_Out' : 0.0798
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:37});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1219 , '최대_Out' : 0.1642
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:38});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2674 , '최대_Out' : 0.3409
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:39});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4051 , '최대_Out' : 0.6096
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:40});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0094 , '최대_Out' : 0.0471
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:41});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0314 , '최대_Out' : 0.0612
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:42});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0408 , '최대_Out' : 0.1125
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:43});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.125 , '최대_Out' : 0.2394
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:44});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2438 , '최대_Out' : 0.4926
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:45});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.5348 , '최대_Out' : 1.0227
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:46});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.8102 , '최대_Out' : 1.8288
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:47});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0042 , '최대_Out' : 0.0139
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:48});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0139 , '최대_Out' : 0.018
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:49});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.018 , '최대_Out' : 0.0331
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:50});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0552 , '최대_Out' : 0.0705
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:51});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1077 , '최대_Out' : 0.145
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:52});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2362 , '최대_Out' : 0.3011
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:53});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.3578 , '최대_Out' : 0.5385
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:54});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0083 , '최대_Out' : 0.0416
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:55});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0277 , '최대_Out' : 0.0541
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:56});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.036 , '최대_Out' : 0.0994
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:57});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1104 , '최대_Out' : 0.2115
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:58});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2154 , '최대_Out' : 0.4351
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:59});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4724 , '최대_Out' : 0.9034
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:60});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.7157 , '최대_Out' : 1.6154
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:61});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.053 , '최대_Out' : 0.1
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:62});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.1 , '최대_Out' : 0.151
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:63});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.287 , '최대_Out' : 0.321
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:64});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.053 , '최대_Out' : 0.1
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:65});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.1 , '최대_Out' : 0.151
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:66});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.287 , '최대_Out' : 0.321
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:67});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.0468 , '최대_Out' : 0.0883
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:68});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.0883 , '최대_Out' : 0.1334
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:69});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.2535 , '최대_Out' : 0.2836
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:70});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.049 , '최대_Out' : 0.187
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:71});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.049 , '최대_Out' : 0.187
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:72});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.0433 , '최대_Out' : 0.1652
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:73});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.034 , '최대_Out' : 0.087
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:74});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:75});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 31
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:76});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.085 , '최대_Out' : 0.168
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:77});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.174 , '최대_Out' : 0.23
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:78});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.345 , '최대_Out' : 0.457
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:79});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.513 , '최대_Out' : 0.689
}

    }
    else if(((상품코드 == 'FA00049001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:80});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.689 , '최대_Out' : 0.917
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:81});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.034 , '최대_Out' : 0.087
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:82});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:83});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 31
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:84});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.085 , '최대_Out' : 0.168
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:85});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.174 , '최대_Out' : 0.23
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:86});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.345 , '최대_Out' : 0.457
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:87});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.513 , '최대_Out' : 0.689
}

    }
    else if(((상품코드 == 'FA00049002'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:88});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.689 , '최대_Out' : 0.917
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:89});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.03 , '최대_Out' : 0.0769
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:90});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:91});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 31
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:92});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0751 , '최대_Out' : 0.1484
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:93});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1537 , '최대_Out' : 0.2032
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:94});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.3048 , '최대_Out' : 0.4037
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:95});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4532 , '최대_Out' : 0.6086
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:96});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.6086 , '최대_Out' : 0.81
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10578"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:97});
     __hpasRuleResult = {
'담보명_Out' : "스포츠단체(프로,아마추어)위로금담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10579"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:98});
     __hpasRuleResult = {
'담보명_Out' : "프로,아마추어상해사망·후유장해" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00043001'))
    && ((담보코드 == "CFA10580"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:99});
     __hpasRuleResult = {
'담보명_Out' : "프로,아마추어상해의료실비" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10578"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:100});
     __hpasRuleResult = {
'담보명_Out' : "스포츠단체(프로,아마추어)위로금담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10579"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:101});
     __hpasRuleResult = {
'담보명_Out' : "프로,아마추어상해사망·후유장해" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00123001'))
    && ((담보코드 == "CFA10580"))
    && ((추가속성코드 == "CA00231"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:102});
     __hpasRuleResult = {
'담보명_Out' : "프로,아마추어상해의료실비" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 9
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10602"))
    && ((추가속성코드 == "CA00203"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:103});
     __hpasRuleResult = {
'담보명_Out' : "인질구조비용및석방보석금담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(1,000원기준)" , '최저_Out' : 0.12 , '최대_Out' : 0.27
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10603"))
    && ((추가속성코드 == "CA00204"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:104});
     __hpasRuleResult = {
'담보명_Out' : "인질위로금담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(1,000원기준)" , '최저_Out' : 0.2 , '최대_Out' : 0.38
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00227"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:105});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "수리위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2316 , '최대_Out' : 0.4546
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00227"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:106});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "수리위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1776 , '최대_Out' : 0.3486
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))
    && ((전체일부목적물구분코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:107});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 2.0592 , '최대_Out' : 4.1141
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))
    && ((전체일부목적물구분코드 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:108});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 1.5787 , '최대_Out' : 3.1541
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))
    && ((전체일부목적물구분코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:109});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 1.0296 , '최대_Out' : 2.0571
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))
    && ((전체일부목적물구분코드 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:110});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.7894 , '최대_Out' : 1.5771
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:111});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.5828 , '최대_Out' : 0.7761
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:112});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4468 , '최대_Out' : 0.595
}

    }
    else if(((상품코드 == 'FA00066001'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:113});
     __hpasRuleResult = {
'담보명_Out' : "" , '요율속성명_Out' : "해체위험할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10 , '최대_Out' : 30
}

    }
    else if(((상품코드 == 'FA00066004'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:114});
     __hpasRuleResult = {
'담보명_Out' : "" , '요율속성명_Out' : "해체위험할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10 , '최대_Out' : 30
}

    }
    else if(((상품코드 == 'FA00011001'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:115});
     __hpasRuleResult = {
'담보명_Out' : "" , '요율속성명_Out' : "해체위험할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10 , '최대_Out' : 30
}

    }
    else if(((상품코드 == 'FA00011002'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:116});
     __hpasRuleResult = {
'담보명_Out' : "" , '요율속성명_Out' : "해체위험할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10 , '최대_Out' : 30
}

    }
    else if(((상품코드 == 'FA00011003'))
    && ((추가속성코드 == "MA00088"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:117});
     __hpasRuleResult = {
'담보명_Out' : "" , '요율속성명_Out' : "해체위험할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10 , '최대_Out' : 30
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:118});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:119});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:120});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010001'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:121});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:122});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:123});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:124});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010002'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:125});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:126});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10076"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:127});
     __hpasRuleResult = {
'담보명_Out' : "진동,지지대철거 및 약화에 관한 특약담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "0"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:128});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 100 , '최대_Out' : 400
}

    }
    else if(((상품코드 == 'FA00010003'))
    && ((담보코드 == "CFA10075"))
    && ((추가속성코드 == "CA00181"))
    && ((진동담보할인여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:129});
     __hpasRuleResult = {
'담보명_Out' : "주위재산담보" , '요율속성명_Out' : "진동담보적용할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 50 , '최대_Out' : 300
}

    }
    else if(((상품코드 == 'FA00044001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:130});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.028 , '최대_Out' : 0.037
}

    }
    else if(((상품코드 == 'FA00045001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:131});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.224 , '최대_Out' : 0.307
}

    }
    else if(((상품코드 == 'FA00045003'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:132});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.224 , '최대_Out' : 0.307
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:133});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.139 , '최대_Out' : 0.191
}

    }
    else if(((상품코드 == 'FA00044001'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:134});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00045001'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:135});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00045003'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:136});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00045005'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:137});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00045006'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:138});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:139});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00046001'))
    && ((담보코드 == "CFA10598"))
    && ((추가속성코드 == "CA00205"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:140});
     __hpasRuleResult = {
'담보명_Out' : "전쟁위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.191 , '최대_Out' : 0.479
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10636"))
    && ((추가속성코드 == "CA00244"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:141});
     __hpasRuleResult = {
'담보명_Out' : "행사중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.15 , '최대_Out' : 0.203
}

    }
    else if(((상품코드 == 'FA00061001'))
    && ((담보코드 == "CFA10637"))
    && ((추가속성코드 == "CA00245"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:142});
     __hpasRuleResult = {
'담보명_Out' : "행사중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00032001'))
    && ((담보코드 == "CFA10478"))
    && ((추가속성코드 == "CA00187"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:143});
     __hpasRuleResult = {
'담보명_Out' : "천재상해사망·후유장해" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00016003'))
    && ((추가속성코드 == "MA00103"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:144});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "선박할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 5 , '최대_Out' : 10
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((추가속성코드 == "MA00095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:145});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "비금융기관할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00074002'))
    && ((추가속성코드 == "MA00095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:146});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "비금융기관할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((추가속성코드 == "MA00093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:147});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "수용장소할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 20 , '최대_Out' : 100
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((추가속성코드 == "MA00114"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:148});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "패키지할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 10
}

    }
    else if(((상품코드 == 'FA00090001'))
    && ((추가속성코드 == "MA00113"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:149});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "자기부담금할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 20
}

    }
    else if(((상품코드 == 'FA00074001'))
    && ((담보코드 == "CFA10723"))
    && ((추가속성코드 == "CA00251"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:150});
     __hpasRuleResult = {
'담보명_Out' : "수탁물 배상책임 담보" , '요율속성명_Out' : "수탁업자배상책임할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 10
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((추가속성코드 == "MA00095"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:151});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "비금윰기관할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((추가속성코드 == "MA00093"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:152});
     __hpasRuleResult = {
'담보명_Out' : null , '요율속성명_Out' : "수용장소할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 20 , '최대_Out' : 100
}

    }
    else if(((상품코드 == 'FA00093001'))
    && ((담보코드 == "CFA10723"))
    && ((추가속성코드 == "CA00251"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:153});
     __hpasRuleResult = {
'담보명_Out' : "수탁물 배상책임 담보" , '요율속성명_Out' : "수탁업자배상책임할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 10
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:154});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:155});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:156});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:157});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0028 , '최대_Out' : 0.0092
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:158});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0092 , '최대_Out' : 0.012
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:159});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.012 , '최대_Out' : 0.0221
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:160});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0368 , '최대_Out' : 0.047
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:161});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0718 , '최대_Out' : 0.0967
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:162});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1574 , '최대_Out' : 0.2008
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:163});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2386 , '최대_Out' : 0.359
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:164});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0056 , '최대_Out' : 0.0276
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:165});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0184 , '최대_Out' : 0.036
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:166});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.024 , '최대_Out' : 0.0663
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:167});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0736 , '최대_Out' : 0.141
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:168});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1436 , '최대_Out' : 0.2901
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:169});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.3148 , '최대_Out' : 0.6024
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:170});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.4772 , '최대_Out' : 1.077
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:171});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.031 , '최대_Out' : 0.059
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:172});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.059 , '최대_Out' : 0.089
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:173});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.169 , '최대_Out' : 0.189
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:174});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.029 , '최대_Out' : 0.11
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:175});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.02 , '최대_Out' : 0.051
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:176});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:177});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 31
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:178});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.05 , '최대_Out' : 0.099
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:179});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.102 , '최대_Out' : 0.136
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:180});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.203 , '최대_Out' : 0.269
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:181});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.302 , '최대_Out' : 0.406
}

    }
    else if(((상품코드 == 'FA00049004'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:182});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.406 , '최대_Out' : 0.54
}

    }
    else if(((상품코드 == 'FA00111001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))
    && ((여행목적코드 == "15"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:183});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00111001'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))
    && ((여행목적코드 == "16"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:184});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : null , '최대_Out' : null
}

    }
    else if(((상품코드 == 'FA00034004'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:185});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0137 , '최대_Out' : 0.0186
}

    }
    else if(((상품코드 == 'FA00034006'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:186});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0137 , '최대_Out' : 0.0186
}

    }
    else if(((상품코드 == 'FA00034002'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:187});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0137 , '최대_Out' : 0.0186
}

    }
    else if(((상품코드 == 'FA00034003'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:188});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0128 , '최대_Out' : 0.0174
}

    }
    else if(((상품코드 == 'FA00034013'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:189});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0128 , '최대_Out' : 0.0174
}

    }
    else if(((상품코드 == 'FA00034014'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:190});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0128 , '최대_Out' : 0.0174
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:191});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0256 , '최대_Out' : 0.0348
}

    }
    else if(((상품코드 == 'FA00030001'))
    && ((담보코드 == "CFA11292"))
    && ((추가속성코드 == "CA00337"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:192});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중실손의료비담보" , '요율속성명_Out' : "특수운전중실손의료비할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 11 , '최대_Out' : 40
}

    }
    else if(((상품코드 == 'FA00034012'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:193});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0173 , '최대_Out' : 0.0235
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:194});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:195});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:196});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:197});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0032 , '최대_Out' : 0.0108
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:198});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0108 , '최대_Out' : 0.014
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:199});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.014 , '최대_Out' : 0.0258
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:200});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0428 , '최대_Out' : 0.0547
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:201});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0836 , '최대_Out' : 0.1124
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:202});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1832 , '최대_Out' : 0.2336
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:203});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2776 , '최대_Out' : 0.4178
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:204});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0064 , '최대_Out' : 0.0324
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:205});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0216 , '최대_Out' : 0.042
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:206});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.028 , '최대_Out' : 0.0774
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:207});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0856 , '최대_Out' : 0.1641
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:208});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1672 , '최대_Out' : 0.3372
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:209});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.3664 , '최대_Out' : 0.7008
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:210});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.5552 , '최대_Out' : 1.2534
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:211});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.036 , '최대_Out' : 0.068
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:212});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.068 , '최대_Out' : 0.104
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:213});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.196 , '최대_Out' : 0.221
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:214});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.033 , '최대_Out' : 0.128
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:215});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.024 , '최대_Out' : 0.062
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:216});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:217});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 34
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:218});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.064 , '최대_Out' : 0.128
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:219});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.159 , '최대_Out' : 0.209
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:220});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.314 , '최대_Out' : 0.417
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:221});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.469 , '최대_Out' : 0.628
}

    }
    else if(((상품코드 == 'FA00114001'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:222});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.628 , '최대_Out' : 0.838
}

    }
    else if(((상품코드 == 'FA00045002'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:223});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.098 , '최대_Out' : 0.134
}

    }
    else if(((상품코드 == 'FA00045009'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:224});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.156 , '최대_Out' : 0.214
}

    }
    else if(((상품코드 == 'FA00045002'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:225});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00045009'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:226});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == '{해외여행보험CM}'))
    && ((담보코드 == "CFA10627"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:227});
     __hpasRuleResult = {
'담보명_Out' : "여행중사망·후유장해 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(%)" , '최저_Out' : 0.174 , '최대_Out' : 0.238
}

    }
    else if(((상품코드 == '{해외여행보험CM}'))
    && ((담보코드 == "CFA10628"))
    && ((추가속성코드 == "CA00202"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:228});
     __hpasRuleResult = {
'담보명_Out' : "여행중의료실비 2의운동담보" , '요율속성명_Out' : "운동위험할증요율" , '요율구분_Out' : "할증요율(1,000원기준)" , '최저_Out' : 1.07 , '최대_Out' : 1.61
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10001"))
    && ((추가속성코드 == "CA00215"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:229});
     __hpasRuleResult = {
'담보명_Out' : "화재위험담보" , '요율속성명_Out' : "위험도적용할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50.0000
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10002"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:230});
     __hpasRuleResult = {
'담보명_Out' : "도난위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00216"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:231});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "품목요율할인할증율" , '요율구분_Out' : "할인할증율(%)" , '최저_Out' : -50.0000 , '최대_Out' : 100.0000
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:232});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0033 , '최대_Out' : 0.0111
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:233});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0111 , '최대_Out' : 0.0143
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:234});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0143 , '최대_Out' : 0.0264
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:235});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0439 , '최대_Out' : 0.0562
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:236});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0858 , '최대_Out' : 0.1154
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:237});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.188 , '최대_Out' : 0.2397
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '1')||(소재지구분코드 == '2'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:238});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.2849 , '최대_Out' : 0.4288
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:239});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0066 , '최대_Out' : 0.0333
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "2"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:240});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0222 , '최대_Out' : 0.0429
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "3"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:241});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0286 , '최대_Out' : 0.0792
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "4"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:242});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.0878 , '최대_Out' : 0.1686
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "5"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:243});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.1716 , '최대_Out' : 0.3462
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "6"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:244});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.376 , '최대_Out' : 0.7191
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00217"))
    && ((소재지구분코드 == '3')||(소재지구분코드 == '4'))
    && ((품목담보위험급수 == "7"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:245});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "파손위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.5698 , '최대_Out' : 1.2864
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:246});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.037 , '최대_Out' : 0.07
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:247});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.07 , '최대_Out' : 0.107
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00218"))
    && ((운송중파손담보물건코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:248});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "운송중파손담보요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.201 , '최대_Out' : 0.226
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10666"))
    && ((추가속성코드 == "CA00219"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:249});
     __hpasRuleResult = {
'담보명_Out' : "파손위험담보" , '요율속성명_Out' : "전시장실연가산요율" , '요율구분_Out' : "가산요율(%)" , '최저_Out' : 0.034 , '최대_Out' : 0.132
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00220"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:250});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "항공기탑재위험담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.025 , '최대_Out' : 0.063
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10669"))
    && ((추가속성코드 == "CA00221"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:251});
     __hpasRuleResult = {
'담보명_Out' : "항공기탑재위험담보" , '요율속성명_Out' : "여객운송용항공기탑재할인율" , '요율구분_Out' : "할인율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 50
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10651"))
    && ((추가속성코드 == "CA00222"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:252});
     __hpasRuleResult = {
'담보명_Out' : "수리위험담보" , '요율속성명_Out' : "파손담보불특정요율적용율" , '요율구분_Out' : "적용율(%)" , '최저_Out' : 0.0001 , '최대_Out' : 34
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10652"))
    && ((추가속성코드 == "CA00223"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:253});
     __hpasRuleResult = {
'담보명_Out' : "전기적사고담보" , '요율속성명_Out' : "전기적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.079 , '최대_Out' : 0.157
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:254});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.163 , '최대_Out' : 0.214
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:255});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.322 , '최대_Out' : 0.428
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:256});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.482 , '최대_Out' : 0.645
}

    }
    else if(((상품코드 == 'FA00049005'))
    && ((담보코드 == "CFA10653"))
    && ((추가속성코드 == "CA00225"))
    && ((기계적사고담보품목코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:257});
     __hpasRuleResult = {
'담보명_Out' : "기계적사고담보" , '요율속성명_Out' : "기계적사고담보요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.645 , '최대_Out' : 0.861
}

    }
    else if(((상품코드 == 'FA00034015'))
    && ((담보코드 == "CFA10450"))
    && ((추가속성코드 == "CA00196"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:258});
     __hpasRuleResult = {
'담보명_Out' : "상해3급 할증담보" , '요율속성명_Out' : "상해3급할증율" , '요율구분_Out' : "할증율(%)" , '최저_Out' : 10.0000 , '최대_Out' : 20.0000
}

    }
    else if(((상품코드 == 'FA00034015'))
    && ((담보코드 == "CFA10981"))
    && ((추가속성코드 == "CA00201"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_입력요율범위조회표_001' , row:259});
     __hpasRuleResult = {
'담보명_Out' : "특수운전중상해위험담보" , '요율속성명_Out' : "기본요율" , '요율구분_Out' : "기본요율(%)" , '최저_Out' : 0.023 , '최대_Out' : 0.0314
}

    }
    담보명_Out = ""
요율구분_Out = ""
요율속성명_Out = ""
최대_Out = 0
최저_Out = 0


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};