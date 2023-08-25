function(실손의료비보험가입유형,가입금액,성별코드,담보코드,보험연령 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001',ruleName:'일반_상해해외여행기본실손의료비(상해통원_외래)_CFA11422_FA00045009',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'실손의료비보험가입유형:'+JSON.stringify(실손의료비보험가입유형)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'실손의료비보험가입유형' , 'value':JSON.stringify(실손의료비보험가입유형) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'가입금액:'+JSON.stringify(가입금액)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'가입금액' , 'value':JSON.stringify(가입금액) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'성별코드:'+JSON.stringify(성별코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'성별코드' , 'value':JSON.stringify(성별코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보험연령:'+JSON.stringify(보험연령)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보험연령' , 'value':JSON.stringify(보험연령) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 18:12:00
    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:0});
     __hpasRuleResult = {
'영업요율' : 1061
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1});
     __hpasRuleResult = {
'영업요율' : 2154
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2});
     __hpasRuleResult = {
'영업요율' : 4483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:3});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:4});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:5});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:6});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:7});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:8});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:9});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:10});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:11});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:12});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:13});
     __hpasRuleResult = {
'영업요율' : 4732
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:14});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:15});
     __hpasRuleResult = {
'영업요율' : 4890
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:16});
     __hpasRuleResult = {
'영업요율' : 5044
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:17});
     __hpasRuleResult = {
'영업요율' : 5202
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:18});
     __hpasRuleResult = {
'영업요율' : 5344
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:19});
     __hpasRuleResult = {
'영업요율' : 5468
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:20});
     __hpasRuleResult = {
'영업요율' : 5091
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:21});
     __hpasRuleResult = {
'영업요율' : 4808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:22});
     __hpasRuleResult = {
'영업요율' : 4591
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:23});
     __hpasRuleResult = {
'영업요율' : 3246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:24});
     __hpasRuleResult = {
'영업요율' : 4386
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:25});
     __hpasRuleResult = {
'영업요율' : 4166
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:26});
     __hpasRuleResult = {
'영업요율' : 3958
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:27});
     __hpasRuleResult = {
'영업요율' : 3864
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:28});
     __hpasRuleResult = {
'영업요율' : 3978
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:29});
     __hpasRuleResult = {
'영업요율' : 4308
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:30});
     __hpasRuleResult = {
'영업요율' : 4747
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:31});
     __hpasRuleResult = {
'영업요율' : 5051
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:32});
     __hpasRuleResult = {
'영업요율' : 5069
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:33});
     __hpasRuleResult = {
'영업요율' : 5073
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:34});
     __hpasRuleResult = {
'영업요율' : 3871
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:35});
     __hpasRuleResult = {
'영업요율' : 5059
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:36});
     __hpasRuleResult = {
'영업요율' : 5030
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:37});
     __hpasRuleResult = {
'영업요율' : 4986
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:38});
     __hpasRuleResult = {
'영업요율' : 4995
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:39});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:40});
     __hpasRuleResult = {
'영업요율' : 4808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:41});
     __hpasRuleResult = {
'영업요율' : 4698
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:42});
     __hpasRuleResult = {
'영업요율' : 4590
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:43});
     __hpasRuleResult = {
'영업요율' : 4498
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:44});
     __hpasRuleResult = {
'영업요율' : 4434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:45});
     __hpasRuleResult = {
'영업요율' : 3971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:46});
     __hpasRuleResult = {
'영업요율' : 4393
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:47});
     __hpasRuleResult = {
'영업요율' : 4373
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:48});
     __hpasRuleResult = {
'영업요율' : 4356
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:49});
     __hpasRuleResult = {
'영업요율' : 4327
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:50});
     __hpasRuleResult = {
'영업요율' : 4276
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:51});
     __hpasRuleResult = {
'영업요율' : 4205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:52});
     __hpasRuleResult = {
'영업요율' : 4120
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:53});
     __hpasRuleResult = {
'영업요율' : 4056
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:54});
     __hpasRuleResult = {
'영업요율' : 4276
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:55});
     __hpasRuleResult = {
'영업요율' : 4347
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:56});
     __hpasRuleResult = {
'영업요율' : 3988
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:57});
     __hpasRuleResult = {
'영업요율' : 4375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:58});
     __hpasRuleResult = {
'영업요율' : 4419
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:59});
     __hpasRuleResult = {
'영업요율' : 4473
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:60});
     __hpasRuleResult = {
'영업요율' : 4530
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:61});
     __hpasRuleResult = {
'영업요율' : 4586
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:62});
     __hpasRuleResult = {
'영업요율' : 4639
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:63});
     __hpasRuleResult = {
'영업요율' : 4680
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:64});
     __hpasRuleResult = {
'영업요율' : 4698
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:65});
     __hpasRuleResult = {
'영업요율' : 4680
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:66});
     __hpasRuleResult = {
'영업요율' : 4620
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:67});
     __hpasRuleResult = {
'영업요율' : 3719
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:68});
     __hpasRuleResult = {
'영업요율' : 4520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:69});
     __hpasRuleResult = {
'영업요율' : 4398
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:70});
     __hpasRuleResult = {
'영업요율' : 4283
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:71});
     __hpasRuleResult = {
'영업요율' : 4195
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:72});
     __hpasRuleResult = {
'영업요율' : 4142
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:73});
     __hpasRuleResult = {
'영업요율' : 4107
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:74});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:75});
     __hpasRuleResult = {
'영업요율' : 4069
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:76});
     __hpasRuleResult = {
'영업요율' : 4059
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:77});
     __hpasRuleResult = {
'영업요율' : 4049
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:78});
     __hpasRuleResult = {
'영업요율' : 3383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:79});
     __hpasRuleResult = {
'영업요율' : 4047
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:80});
     __hpasRuleResult = {
'영업요율' : 4044
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:81});
     __hpasRuleResult = {
'영업요율' : 4041
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:82});
     __hpasRuleResult = {
'영업요율' : 4037
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:83});
     __hpasRuleResult = {
'영업요율' : 4032
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:84});
     __hpasRuleResult = {
'영업요율' : 4025
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:85});
     __hpasRuleResult = {
'영업요율' : 4015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:86});
     __hpasRuleResult = {
'영업요율' : 4003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:87});
     __hpasRuleResult = {
'영업요율' : 3990
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:88});
     __hpasRuleResult = {
'영업요율' : 3973
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:89});
     __hpasRuleResult = {
'영업요율' : 3737
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:90});
     __hpasRuleResult = {
'영업요율' : 3954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:91});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:92});
     __hpasRuleResult = {
'영업요율' : 3917
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:93});
     __hpasRuleResult = {
'영업요율' : 3939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:94});
     __hpasRuleResult = {
'영업요율' : 3958
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:95});
     __hpasRuleResult = {
'영업요율' : 3983
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:96});
     __hpasRuleResult = {
'영업요율' : 4003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:97});
     __hpasRuleResult = {
'영업요율' : 4027
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:98});
     __hpasRuleResult = {
'영업요율' : 4037
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:99});
     __hpasRuleResult = {
'영업요율' : 4049
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:100});
     __hpasRuleResult = {
'영업요율' : 4151
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:101});
     __hpasRuleResult = {
'영업요율' : 4061
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:102});
     __hpasRuleResult = {
'영업요율' : 4071
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:103});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:104});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:105});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:106});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:107});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:108});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:109});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:110});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:111});
     __hpasRuleResult = {
'영업요율' : 773
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:112});
     __hpasRuleResult = {
'영업요율' : 1349
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:113});
     __hpasRuleResult = {
'영업요율' : 1961
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:114});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:115});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:116});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:117});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:118});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:119});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:120});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:121});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:122});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:123});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:124});
     __hpasRuleResult = {
'영업요율' : 1902
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:125});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:126});
     __hpasRuleResult = {
'영업요율' : 1793
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:127});
     __hpasRuleResult = {
'영업요율' : 1808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:128});
     __hpasRuleResult = {
'영업요율' : 1824
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:129});
     __hpasRuleResult = {
'영업요율' : 1827
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:130});
     __hpasRuleResult = {
'영업요율' : 1825
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:131});
     __hpasRuleResult = {
'영업요율' : 1824
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:132});
     __hpasRuleResult = {
'영업요율' : 1890
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:133});
     __hpasRuleResult = {
'영업요율' : 1953
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:134});
     __hpasRuleResult = {
'영업요율' : 1963
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:135});
     __hpasRuleResult = {
'영업요율' : 2007
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:136});
     __hpasRuleResult = {
'영업요율' : 2053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:137});
     __hpasRuleResult = {
'영업요율' : 2088
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:138});
     __hpasRuleResult = {
'영업요율' : 2095
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:139});
     __hpasRuleResult = {
'영업요율' : 2097
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:140});
     __hpasRuleResult = {
'영업요율' : 2090
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:141});
     __hpasRuleResult = {
'영업요율' : 2068
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:142});
     __hpasRuleResult = {
'영업요율' : 2042
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:143});
     __hpasRuleResult = {
'영업요율' : 2081
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:144});
     __hpasRuleResult = {
'영업요율' : 2119
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:145});
     __hpasRuleResult = {
'영업요율' : 2259
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:146});
     __hpasRuleResult = {
'영업요율' : 2153
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:147});
     __hpasRuleResult = {
'영업요율' : 2185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:148});
     __hpasRuleResult = {
'영업요율' : 2217
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:149});
     __hpasRuleResult = {
'영업요율' : 2353
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:150});
     __hpasRuleResult = {
'영업요율' : 2490
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:151});
     __hpasRuleResult = {
'영업요율' : 2644
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:152});
     __hpasRuleResult = {
'영업요율' : 2817
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:153});
     __hpasRuleResult = {
'영업요율' : 2895
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:154});
     __hpasRuleResult = {
'영업요율' : 2925
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:155});
     __hpasRuleResult = {
'영업요율' : 2988
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:156});
     __hpasRuleResult = {
'영업요율' : 2190
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:157});
     __hpasRuleResult = {
'영업요율' : 3078
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:158});
     __hpasRuleResult = {
'영업요율' : 3186
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:159});
     __hpasRuleResult = {
'영업요율' : 3315
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:160});
     __hpasRuleResult = {
'영업요율' : 3451
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:161});
     __hpasRuleResult = {
'영업요율' : 3585
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:162});
     __hpasRuleResult = {
'영업요율' : 3707
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:163});
     __hpasRuleResult = {
'영업요율' : 3832
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:164});
     __hpasRuleResult = {
'영업요율' : 3971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:165});
     __hpasRuleResult = {
'영업요율' : 4158
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:166});
     __hpasRuleResult = {
'영업요율' : 4430
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:167});
     __hpasRuleResult = {
'영업요율' : 2092
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:168});
     __hpasRuleResult = {
'영업요율' : 4776
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:169});
     __hpasRuleResult = {
'영업요율' : 5144
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:170});
     __hpasRuleResult = {
'영업요율' : 5402
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:171});
     __hpasRuleResult = {
'영업요율' : 5597
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:172});
     __hpasRuleResult = {
'영업요율' : 5664
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:173});
     __hpasRuleResult = {
'영업요율' : 5576
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:174});
     __hpasRuleResult = {
'영업요율' : 5386
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:175});
     __hpasRuleResult = {
'영업요율' : 5212
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:176});
     __hpasRuleResult = {
'영업요율' : 5115
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:177});
     __hpasRuleResult = {
'영업요율' : 5085
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:178});
     __hpasRuleResult = {
'영업요율' : 2007
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:179});
     __hpasRuleResult = {
'영업요율' : 5080
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:180});
     __hpasRuleResult = {
'영업요율' : 5075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:181});
     __hpasRuleResult = {
'영업요율' : 5063
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:182});
     __hpasRuleResult = {
'영업요율' : 5039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:183});
     __hpasRuleResult = {
'영업요율' : 4991
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:184});
     __hpasRuleResult = {
'영업요율' : 4910
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:185});
     __hpasRuleResult = {
'영업요율' : 4803
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:186});
     __hpasRuleResult = {
'영업요율' : 4712
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:187});
     __hpasRuleResult = {
'영업요율' : 4661
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:188});
     __hpasRuleResult = {
'영업요율' : 4639
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:189});
     __hpasRuleResult = {
'영업요율' : 1888
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:190});
     __hpasRuleResult = {
'영업요율' : 4634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:191});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:192});
     __hpasRuleResult = {
'영업요율' : 4602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:193});
     __hpasRuleResult = {
'영업요율' : 4566
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:194});
     __hpasRuleResult = {
'영업요율' : 4520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:195});
     __hpasRuleResult = {
'영업요율' : 4466
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:196});
     __hpasRuleResult = {
'영업요율' : 4403
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:197});
     __hpasRuleResult = {
'영업요율' : 4332
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:198});
     __hpasRuleResult = {
'영업요율' : 4258
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:199});
     __hpasRuleResult = {
'영업요율' : 4173
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:200});
     __hpasRuleResult = {
'영업요율' : 1956
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:201});
     __hpasRuleResult = {
'영업요율' : 4075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:202});
     __hpasRuleResult = {
'영업요율' : 3953
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:203});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:204});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:205});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:206});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:207});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:208});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:209});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:210});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:211});
     __hpasRuleResult = {
'영업요율' : 1980
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:212});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:213});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:214});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:215});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:216});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:217});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:218});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:219});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:220});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:221});
     __hpasRuleResult = {
'영업요율' : 3936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:222});
     __hpasRuleResult = {
'영업요율' : 1202
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:223});
     __hpasRuleResult = {
'영업요율' : 2441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:224});
     __hpasRuleResult = {
'영업요율' : 5076
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:225});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:226});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:227});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:228});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:229});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:230});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:231});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:232});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:233});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:234});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:235});
     __hpasRuleResult = {
'영업요율' : 5358
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:236});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:237});
     __hpasRuleResult = {
'영업요율' : 5537
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:238});
     __hpasRuleResult = {
'영업요율' : 5710
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:239});
     __hpasRuleResult = {
'영업요율' : 5890
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:240});
     __hpasRuleResult = {
'영업요율' : 6051
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:241});
     __hpasRuleResult = {
'영업요율' : 6190
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:242});
     __hpasRuleResult = {
'영업요율' : 5768
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:243});
     __hpasRuleResult = {
'영업요율' : 5446
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:244});
     __hpasRuleResult = {
'영업요율' : 5200
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:245});
     __hpasRuleResult = {
'영업요율' : 3676
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:246});
     __hpasRuleResult = {
'영업요율' : 4966
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:247});
     __hpasRuleResult = {
'영업요율' : 4719
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:248});
     __hpasRuleResult = {
'영업요율' : 4483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:249});
     __hpasRuleResult = {
'영업요율' : 4375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:250});
     __hpasRuleResult = {
'영업요율' : 4503
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:251});
     __hpasRuleResult = {
'영업요율' : 4878
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:252});
     __hpasRuleResult = {
'영업요율' : 5375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:253});
     __hpasRuleResult = {
'영업요율' : 5720
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:254});
     __hpasRuleResult = {
'영업요율' : 5741
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:255});
     __hpasRuleResult = {
'영업요율' : 5744
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:256});
     __hpasRuleResult = {
'영업요율' : 4383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:257});
     __hpasRuleResult = {
'영업요율' : 5729
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:258});
     __hpasRuleResult = {
'영업요율' : 5697
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:259});
     __hpasRuleResult = {
'영업요율' : 5646
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:260});
     __hpasRuleResult = {
'영업요율' : 5656
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:261});
     __hpasRuleResult = {
'영업요율' : 5556
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:262});
     __hpasRuleResult = {
'영업요율' : 5446
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:263});
     __hpasRuleResult = {
'영업요율' : 5319
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:264});
     __hpasRuleResult = {
'영업요율' : 5198
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:265});
     __hpasRuleResult = {
'영업요율' : 5095
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:266});
     __hpasRuleResult = {
'영업요율' : 5022
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:267});
     __hpasRuleResult = {
'영업요율' : 4497
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:268});
     __hpasRuleResult = {
'영업요율' : 4976
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:269});
     __hpasRuleResult = {
'영업요율' : 4952
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:270});
     __hpasRuleResult = {
'영업요율' : 4930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:271});
     __hpasRuleResult = {
'영업요율' : 4900
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:272});
     __hpasRuleResult = {
'영업요율' : 4844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:273});
     __hpasRuleResult = {
'영업요율' : 4761
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:274});
     __hpasRuleResult = {
'영업요율' : 4666
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:275});
     __hpasRuleResult = {
'영업요율' : 4593
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:276});
     __hpasRuleResult = {
'영업요율' : 4842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:277});
     __hpasRuleResult = {
'영업요율' : 4922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:278});
     __hpasRuleResult = {
'영업요율' : 4517
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:279});
     __hpasRuleResult = {
'영업요율' : 4954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:280});
     __hpasRuleResult = {
'영업요율' : 5005
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:281});
     __hpasRuleResult = {
'영업요율' : 5066
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:282});
     __hpasRuleResult = {
'영업요율' : 5130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:283});
     __hpasRuleResult = {
'영업요율' : 5193
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:284});
     __hpasRuleResult = {
'영업요율' : 5252
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:285});
     __hpasRuleResult = {
'영업요율' : 5298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:286});
     __hpasRuleResult = {
'영업요율' : 5319
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:287});
     __hpasRuleResult = {
'영업요율' : 5298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:288});
     __hpasRuleResult = {
'영업요율' : 5230
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:289});
     __hpasRuleResult = {
'영업요율' : 4210
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:290});
     __hpasRuleResult = {
'영업요율' : 5119
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:291});
     __hpasRuleResult = {
'영업요율' : 4981
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:292});
     __hpasRuleResult = {
'영업요율' : 4851
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:293});
     __hpasRuleResult = {
'영업요율' : 4749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:294});
     __hpasRuleResult = {
'영업요율' : 4690
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:295});
     __hpasRuleResult = {
'영업요율' : 4651
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:296});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:297});
     __hpasRuleResult = {
'영업요율' : 4608
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:298});
     __hpasRuleResult = {
'영업요율' : 4597
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:299});
     __hpasRuleResult = {
'영업요율' : 4586
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:300});
     __hpasRuleResult = {
'영업요율' : 3829
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:301});
     __hpasRuleResult = {
'영업요율' : 4583
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:302});
     __hpasRuleResult = {
'영업요율' : 4580
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:303});
     __hpasRuleResult = {
'영업요율' : 4575
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:304});
     __hpasRuleResult = {
'영업요율' : 4573
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:305});
     __hpasRuleResult = {
'영업요율' : 4566
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:306});
     __hpasRuleResult = {
'영업요율' : 4556
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:307});
     __hpasRuleResult = {
'영업요율' : 4547
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:308});
     __hpasRuleResult = {
'영업요율' : 4534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:309});
     __hpasRuleResult = {
'영업요율' : 4519
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:310});
     __hpasRuleResult = {
'영업요율' : 4498
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:311});
     __hpasRuleResult = {
'영업요율' : 4232
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:312});
     __hpasRuleResult = {
'영업요율' : 4478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:313});
     __hpasRuleResult = {
'영업요율' : 4458
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:314});
     __hpasRuleResult = {
'영업요율' : 4436
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:315});
     __hpasRuleResult = {
'영업요율' : 4461
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:316});
     __hpasRuleResult = {
'영업요율' : 4483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:317});
     __hpasRuleResult = {
'영업요율' : 4508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:318});
     __hpasRuleResult = {
'영업요율' : 4534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:319});
     __hpasRuleResult = {
'영업요율' : 4558
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:320});
     __hpasRuleResult = {
'영업요율' : 4573
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:321});
     __hpasRuleResult = {
'영업요율' : 4586
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:322});
     __hpasRuleResult = {
'영업요율' : 4700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:323});
     __hpasRuleResult = {
'영업요율' : 4598
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:324});
     __hpasRuleResult = {
'영업요율' : 4610
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:325});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:326});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:327});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:328});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:329});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:330});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:331});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:332});
     __hpasRuleResult = {
'영업요율' : 4627
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:333});
     __hpasRuleResult = {
'영업요율' : 871
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:334});
     __hpasRuleResult = {
'영업요율' : 1524
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:335});
     __hpasRuleResult = {
'영업요율' : 2212
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:336});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:337});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:338});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:339});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:340});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:341});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:342});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:343});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:344});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:345});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:346});
     __hpasRuleResult = {
'영업요율' : 2144
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:347});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:348});
     __hpasRuleResult = {
'영업요율' : 2022
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:349});
     __hpasRuleResult = {
'영업요율' : 2039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:350});
     __hpasRuleResult = {
'영업요율' : 2059
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:351});
     __hpasRuleResult = {
'영업요율' : 2064
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:352});
     __hpasRuleResult = {
'영업요율' : 2061
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:353});
     __hpasRuleResult = {
'영업요율' : 2059
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:354});
     __hpasRuleResult = {
'영업요율' : 2132
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:355});
     __hpasRuleResult = {
'영업요율' : 2203
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:356});
     __hpasRuleResult = {
'영업요율' : 2215
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:357});
     __hpasRuleResult = {
'영업요율' : 2263
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:358});
     __hpasRuleResult = {
'영업요율' : 2314
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:359});
     __hpasRuleResult = {
'영업요율' : 2356
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:360});
     __hpasRuleResult = {
'영업요율' : 2364
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:361});
     __hpasRuleResult = {
'영업요율' : 2366
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:362});
     __hpasRuleResult = {
'영업요율' : 2358
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:363});
     __hpasRuleResult = {
'영업요율' : 2332
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:364});
     __hpasRuleResult = {
'영업요율' : 2307
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:365});
     __hpasRuleResult = {
'영업요율' : 2349
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:366});
     __hpasRuleResult = {
'영업요율' : 2392
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:367});
     __hpasRuleResult = {
'영업요율' : 2551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:368});
     __hpasRuleResult = {
'영업요율' : 2429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:369});
     __hpasRuleResult = {
'영업요율' : 2464
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:370});
     __hpasRuleResult = {
'영업요율' : 2502
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:371});
     __hpasRuleResult = {
'영업요율' : 2654
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:372});
     __hpasRuleResult = {
'영업요율' : 2808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:373});
     __hpasRuleResult = {
'영업요율' : 2985
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:374});
     __hpasRuleResult = {
'영업요율' : 3178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:375});
     __hpasRuleResult = {
'영업요율' : 3266
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:376});
     __hpasRuleResult = {
'영업요율' : 3300
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:377});
     __hpasRuleResult = {
'영업요율' : 3371
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:378});
     __hpasRuleResult = {
'영업요율' : 2471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:379});
     __hpasRuleResult = {
'영업요율' : 3475
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:380});
     __hpasRuleResult = {
'영업요율' : 3598
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:381});
     __hpasRuleResult = {
'영업요율' : 3741
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:382});
     __hpasRuleResult = {
'영업요율' : 3895
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:383});
     __hpasRuleResult = {
'영업요율' : 4044
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:384});
     __hpasRuleResult = {
'영업요율' : 4185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:385});
     __hpasRuleResult = {
'영업요율' : 4325
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:386});
     __hpasRuleResult = {
'영업요율' : 4481
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:387});
     __hpasRuleResult = {
'영업요율' : 4693
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:388});
     __hpasRuleResult = {
'영업요율' : 4998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:389});
     __hpasRuleResult = {
'영업요율' : 2359
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:390});
     __hpasRuleResult = {
'영업요율' : 5391
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:391});
     __hpasRuleResult = {
'영업요율' : 5805
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:392});
     __hpasRuleResult = {
'영업요율' : 6097
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:393});
     __hpasRuleResult = {
'영업요율' : 6317
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:394});
     __hpasRuleResult = {
'영업요율' : 6391
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:395});
     __hpasRuleResult = {
'영업요율' : 6293
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:396});
     __hpasRuleResult = {
'영업요율' : 6078
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:397});
     __hpasRuleResult = {
'영업요율' : 5883
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:398});
     __hpasRuleResult = {
'영업요율' : 5773
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:399});
     __hpasRuleResult = {
'영업요율' : 5737
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:400});
     __hpasRuleResult = {
'영업요율' : 2263
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:401});
     __hpasRuleResult = {
'영업요율' : 5732
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:402});
     __hpasRuleResult = {
'영업요율' : 5727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:403});
     __hpasRuleResult = {
'영업요율' : 5714
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:404});
     __hpasRuleResult = {
'영업요율' : 5686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:405});
     __hpasRuleResult = {
'영업요율' : 5634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:406});
     __hpasRuleResult = {
'영업요율' : 5541
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:407});
     __hpasRuleResult = {
'영업요율' : 5420
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:408});
     __hpasRuleResult = {
'영업요율' : 5317
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:409});
     __hpasRuleResult = {
'영업요율' : 5261
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:410});
     __hpasRuleResult = {
'영업요율' : 5236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:411});
     __hpasRuleResult = {
'영업요율' : 2130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:412});
     __hpasRuleResult = {
'영업요율' : 5229
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:413});
     __hpasRuleResult = {
'영업요율' : 5222
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:414});
     __hpasRuleResult = {
'영업요율' : 5193
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:415});
     __hpasRuleResult = {
'영업요율' : 5152
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:416});
     __hpasRuleResult = {
'영업요율' : 5100
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:417});
     __hpasRuleResult = {
'영업요율' : 5039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:418});
     __hpasRuleResult = {
'영업요율' : 4969
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:419});
     __hpasRuleResult = {
'영업요율' : 4890
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:420});
     __hpasRuleResult = {
'영업요율' : 4805
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:421});
     __hpasRuleResult = {
'영업요율' : 4708
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:422});
     __hpasRuleResult = {
'영업요율' : 2207
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:423});
     __hpasRuleResult = {
'영업요율' : 4597
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:424});
     __hpasRuleResult = {
'영업요율' : 4461
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:425});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:426});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:427});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:428});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:429});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:430});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:431});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:432});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:433});
     __hpasRuleResult = {
'영업요율' : 2236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:434});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:435});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:436});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:437});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:438});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:439});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:440});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:441});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:442});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:443});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:444});
     __hpasRuleResult = {
'영업요율' : 1264
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:445});
     __hpasRuleResult = {
'영업요율' : 2569
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:446});
     __hpasRuleResult = {
'영업요율' : 5347
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:447});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:448});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:449});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:450});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:451});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:452});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:453});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:454});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:455});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:456});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:457});
     __hpasRuleResult = {
'영업요율' : 5642
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:458});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:459});
     __hpasRuleResult = {
'영업요율' : 5834
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:460});
     __hpasRuleResult = {
'영업요율' : 6015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:461});
     __hpasRuleResult = {
'영업요율' : 6202
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:462});
     __hpasRuleResult = {
'영업요율' : 6373
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:463});
     __hpasRuleResult = {
'영업요율' : 6520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:464});
     __hpasRuleResult = {
'영업요율' : 6073
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:465});
     __hpasRuleResult = {
'영업요율' : 5734
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:466});
     __hpasRuleResult = {
'영업요율' : 5476
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:467});
     __hpasRuleResult = {
'영업요율' : 3871
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:468});
     __hpasRuleResult = {
'영업요율' : 5232
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:469});
     __hpasRuleResult = {
'영업요율' : 4969
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:470});
     __hpasRuleResult = {
'영업요율' : 4720
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:471});
     __hpasRuleResult = {
'영업요율' : 4608
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:472});
     __hpasRuleResult = {
'영업요율' : 4744
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:473});
     __hpasRuleResult = {
'영업요율' : 5139
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:474});
     __hpasRuleResult = {
'영업요율' : 5661
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:475});
     __hpasRuleResult = {
'영업요율' : 6024
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:476});
     __hpasRuleResult = {
'영업요율' : 6047
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:477});
     __hpasRuleResult = {
'영업요율' : 6051
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:478});
     __hpasRuleResult = {
'영업요율' : 4615
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:479});
     __hpasRuleResult = {
'영업요율' : 6032
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:480});
     __hpasRuleResult = {
'영업요율' : 6000
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:481});
     __hpasRuleResult = {
'영업요율' : 5947
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:482});
     __hpasRuleResult = {
'영업요율' : 5958
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:483});
     __hpasRuleResult = {
'영업요율' : 5851
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:484});
     __hpasRuleResult = {
'영업요율' : 5734
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:485});
     __hpasRuleResult = {
'영업요율' : 5602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:486});
     __hpasRuleResult = {
'영업요율' : 5475
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:487});
     __hpasRuleResult = {
'영업요율' : 5366
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:488});
     __hpasRuleResult = {
'영업요율' : 5290
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:489});
     __hpasRuleResult = {
'영업요율' : 4737
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:490});
     __hpasRuleResult = {
'영업요율' : 5241
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:491});
     __hpasRuleResult = {
'영업요율' : 5215
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:492});
     __hpasRuleResult = {
'영업요율' : 5193
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:493});
     __hpasRuleResult = {
'영업요율' : 5161
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:494});
     __hpasRuleResult = {
'영업요율' : 5100
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:495});
     __hpasRuleResult = {
'영업요율' : 5015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:496});
     __hpasRuleResult = {
'영업요율' : 4915
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:497});
     __hpasRuleResult = {
'영업요율' : 4836
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:498});
     __hpasRuleResult = {
'영업요율' : 5098
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:499});
     __hpasRuleResult = {
'영업요율' : 5185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:500});
     __hpasRuleResult = {
'영업요율' : 4756
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:501});
     __hpasRuleResult = {
'영업요율' : 5217
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:502});
     __hpasRuleResult = {
'영업요율' : 5269
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:503});
     __hpasRuleResult = {
'영업요율' : 5336
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:504});
     __hpasRuleResult = {
'영업요율' : 5403
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:505});
     __hpasRuleResult = {
'영업요율' : 5469
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:506});
     __hpasRuleResult = {
'영업요율' : 5532
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:507});
     __hpasRuleResult = {
'영업요율' : 5580
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:508});
     __hpasRuleResult = {
'영업요율' : 5602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:509});
     __hpasRuleResult = {
'영업요율' : 5580
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:510});
     __hpasRuleResult = {
'영업요율' : 5508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:511});
     __hpasRuleResult = {
'영업요율' : 4434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:512});
     __hpasRuleResult = {
'영업요율' : 5391
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:513});
     __hpasRuleResult = {
'영업요율' : 5246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:514});
     __hpasRuleResult = {
'영업요율' : 5107
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:515});
     __hpasRuleResult = {
'영업요율' : 5003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:516});
     __hpasRuleResult = {
'영업요율' : 4939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:517});
     __hpasRuleResult = {
'영업요율' : 4898
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:518});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:519});
     __hpasRuleResult = {
'영업요율' : 4854
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:520});
     __hpasRuleResult = {
'영업요율' : 4842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:521});
     __hpasRuleResult = {
'영업요율' : 4829
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:522});
     __hpasRuleResult = {
'영업요율' : 4034
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:523});
     __hpasRuleResult = {
'영업요율' : 4825
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:524});
     __hpasRuleResult = {
'영업요율' : 4822
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:525});
     __hpasRuleResult = {
'영업요율' : 4819
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:526});
     __hpasRuleResult = {
'영업요율' : 4815
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:527});
     __hpasRuleResult = {
'영업요율' : 4808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:528});
     __hpasRuleResult = {
'영업요율' : 4800
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:529});
     __hpasRuleResult = {
'영업요율' : 4790
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:530});
     __hpasRuleResult = {
'영업요율' : 4775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:531});
     __hpasRuleResult = {
'영업요율' : 4758
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:532});
     __hpasRuleResult = {
'영업요율' : 4739
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:533});
     __hpasRuleResult = {
'영업요율' : 4459
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:534});
     __hpasRuleResult = {
'영업요율' : 4715
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:535});
     __hpasRuleResult = {
'영업요율' : 4693
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:536});
     __hpasRuleResult = {
'영업요율' : 4671
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:537});
     __hpasRuleResult = {
'영업요율' : 4697
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:538});
     __hpasRuleResult = {
'영업요율' : 4720
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:539});
     __hpasRuleResult = {
'영업요율' : 4751
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:540});
     __hpasRuleResult = {
'영업요율' : 4775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:541});
     __hpasRuleResult = {
'영업요율' : 4802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:542});
     __hpasRuleResult = {
'영업요율' : 4815
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:543});
     __hpasRuleResult = {
'영업요율' : 4829
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:544});
     __hpasRuleResult = {
'영업요율' : 4951
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:545});
     __hpasRuleResult = {
'영업요율' : 4844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:546});
     __hpasRuleResult = {
'영업요율' : 4856
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:547});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:548});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:549});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:550});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:551});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:552});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:553});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:554});
     __hpasRuleResult = {
'영업요율' : 4873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:555});
     __hpasRuleResult = {
'영업요율' : 915
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:556});
     __hpasRuleResult = {
'영업요율' : 1598
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:557});
     __hpasRuleResult = {
'영업요율' : 2322
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:558});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:559});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:560});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:561});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:562});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:563});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:564});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:565});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:566});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:567});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:568});
     __hpasRuleResult = {
'영업요율' : 2251
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:569});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:570});
     __hpasRuleResult = {
'영업요율' : 2122
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:571});
     __hpasRuleResult = {
'영업요율' : 2141
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:572});
     __hpasRuleResult = {
'영업요율' : 2161
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:573});
     __hpasRuleResult = {
'영업요율' : 2166
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:574});
     __hpasRuleResult = {
'영업요율' : 2163
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:575});
     __hpasRuleResult = {
'영업요율' : 2161
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:576});
     __hpasRuleResult = {
'영업요율' : 2237
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:577});
     __hpasRuleResult = {
'영업요율' : 2312
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:578});
     __hpasRuleResult = {
'영업요율' : 2325
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:579});
     __hpasRuleResult = {
'영업요율' : 2375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:580});
     __hpasRuleResult = {
'영업요율' : 2429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:581});
     __hpasRuleResult = {
'영업요율' : 2473
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:582});
     __hpasRuleResult = {
'영업요율' : 2481
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:583});
     __hpasRuleResult = {
'영업요율' : 2483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:584});
     __hpasRuleResult = {
'영업요율' : 2475
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:585});
     __hpasRuleResult = {
'영업요율' : 2447
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:586});
     __hpasRuleResult = {
'영업요율' : 2420
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:587});
     __hpasRuleResult = {
'영업요율' : 2464
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:588});
     __hpasRuleResult = {
'영업요율' : 2510
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:589});
     __hpasRuleResult = {
'영업요율' : 2676
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:590});
     __hpasRuleResult = {
'영업요율' : 2551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:591});
     __hpasRuleResult = {
'영업요율' : 2586
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:592});
     __hpasRuleResult = {
'영업요율' : 2624
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:593});
     __hpasRuleResult = {
'영업요율' : 2785
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:594});
     __hpasRuleResult = {
'영업요율' : 2947
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:595});
     __hpasRuleResult = {
'영업요율' : 3130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:596});
     __hpasRuleResult = {
'영업요율' : 3336
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:597});
     __hpasRuleResult = {
'영업요율' : 3427
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:598});
     __hpasRuleResult = {
'영업요율' : 3463
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:599});
     __hpasRuleResult = {
'영업요율' : 3537
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:600});
     __hpasRuleResult = {
'영업요율' : 2593
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:601});
     __hpasRuleResult = {
'영업요율' : 3646
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:602});
     __hpasRuleResult = {
'영업요율' : 3775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:603});
     __hpasRuleResult = {
'영업요율' : 3925
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:604});
     __hpasRuleResult = {
'영업요율' : 4086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:605});
     __hpasRuleResult = {
'영업요율' : 4244
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:606});
     __hpasRuleResult = {
'영업요율' : 4390
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:607});
     __hpasRuleResult = {
'영업요율' : 4539
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:608});
     __hpasRuleResult = {
'영업요율' : 4702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:609});
     __hpasRuleResult = {
'영업요율' : 4924
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:610});
     __hpasRuleResult = {
'영업요율' : 5246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:611});
     __hpasRuleResult = {
'영업요율' : 2476
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:612});
     __hpasRuleResult = {
'영업요율' : 5656
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:613});
     __hpasRuleResult = {
'영업요율' : 6091
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:614});
     __hpasRuleResult = {
'영업요율' : 6397
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:615});
     __hpasRuleResult = {
'영업요율' : 6629
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:616});
     __hpasRuleResult = {
'영업요율' : 6708
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:617});
     __hpasRuleResult = {
'영업요율' : 6605
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:618});
     __hpasRuleResult = {
'영업요율' : 6380
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:619});
     __hpasRuleResult = {
'영업요율' : 6173
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:620});
     __hpasRuleResult = {
'영업요율' : 6056
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:621});
     __hpasRuleResult = {
'영업요율' : 6020
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:622});
     __hpasRuleResult = {
'영업요율' : 2375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:623});
     __hpasRuleResult = {
'영업요율' : 6015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:624});
     __hpasRuleResult = {
'영업요율' : 6008
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:625});
     __hpasRuleResult = {
'영업요율' : 5995
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:626});
     __hpasRuleResult = {
'영업요율' : 5968
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:627});
     __hpasRuleResult = {
'영업요율' : 5912
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:628});
     __hpasRuleResult = {
'영업요율' : 5814
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:629});
     __hpasRuleResult = {
'영업요율' : 5688
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:630});
     __hpasRuleResult = {
'영업요율' : 5580
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:631});
     __hpasRuleResult = {
'영업요율' : 5520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:632});
     __hpasRuleResult = {
'영업요율' : 5491
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:633});
     __hpasRuleResult = {
'영업요율' : 2236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:634});
     __hpasRuleResult = {
'영업요율' : 5485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:635});
     __hpasRuleResult = {
'영업요율' : 5478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:636});
     __hpasRuleResult = {
'영업요율' : 5451
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:637});
     __hpasRuleResult = {
'영업요율' : 5407
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:638});
     __hpasRuleResult = {
'영업요율' : 5352
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:639});
     __hpasRuleResult = {
'영업요율' : 5288
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:640});
     __hpasRuleResult = {
'영업요율' : 5214
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:641});
     __hpasRuleResult = {
'영업요율' : 5132
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:642});
     __hpasRuleResult = {
'영업요율' : 5042
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:643});
     __hpasRuleResult = {
'영업요율' : 4941
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:644});
     __hpasRuleResult = {
'영업요율' : 2315
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:645});
     __hpasRuleResult = {
'영업요율' : 4822
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:646});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:647});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:648});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:649});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:650});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:651});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:652});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:653});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:654});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:655});
     __hpasRuleResult = {
'영업요율' : 2346
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:656});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:657});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:658});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:659});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:660});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:661});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:662});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:663});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:664});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:665});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:666});
     __hpasRuleResult = {
'영업요율' : 1298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:667});
     __hpasRuleResult = {
'영업요율' : 2636
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:668});
     __hpasRuleResult = {
'영업요율' : 5483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:669});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:670});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:671});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:672});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:673});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:674});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:675});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:676});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:677});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:678});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:679});
     __hpasRuleResult = {
'영업요율' : 5788
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:680});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:681});
     __hpasRuleResult = {
'영업요율' : 5981
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:682});
     __hpasRuleResult = {
'영업요율' : 6169
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:683});
     __hpasRuleResult = {
'영업요율' : 6361
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:684});
     __hpasRuleResult = {
'영업요율' : 6536
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:685});
     __hpasRuleResult = {
'영업요율' : 6686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:686});
     __hpasRuleResult = {
'영업요율' : 6229
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:687});
     __hpasRuleResult = {
'영업요율' : 5881
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:688});
     __hpasRuleResult = {
'영업요율' : 5617
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:689});
     __hpasRuleResult = {
'영업요율' : 3971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:690});
     __hpasRuleResult = {
'영업요율' : 5364
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:691});
     __hpasRuleResult = {
'영업요율' : 5097
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:692});
     __hpasRuleResult = {
'영업요율' : 4842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:693});
     __hpasRuleResult = {
'영업요율' : 4725
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:694});
     __hpasRuleResult = {
'영업요율' : 4864
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:695});
     __hpasRuleResult = {
'영업요율' : 5269
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:696});
     __hpasRuleResult = {
'영업요율' : 5805
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:697});
     __hpasRuleResult = {
'영업요율' : 6178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:698});
     __hpasRuleResult = {
'영업요율' : 6200
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:699});
     __hpasRuleResult = {
'영업요율' : 6205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:700});
     __hpasRuleResult = {
'영업요율' : 4736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:701});
     __hpasRuleResult = {
'영업요율' : 6186
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:702});
     __hpasRuleResult = {
'영업요율' : 6154
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:703});
     __hpasRuleResult = {
'영업요율' : 6100
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:704});
     __hpasRuleResult = {
'영업요율' : 6110
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:705});
     __hpasRuleResult = {
'영업요율' : 6002
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:706});
     __hpasRuleResult = {
'영업요율' : 5881
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:707});
     __hpasRuleResult = {
'영업요율' : 5746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:708});
     __hpasRuleResult = {
'영업요율' : 5615
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:709});
     __hpasRuleResult = {
'영업요율' : 5503
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:710});
     __hpasRuleResult = {
'영업요율' : 5424
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:711});
     __hpasRuleResult = {
'영업요율' : 4858
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:712});
     __hpasRuleResult = {
'영업요율' : 5375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:713});
     __hpasRuleResult = {
'영업요율' : 5349
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:714});
     __hpasRuleResult = {
'영업요율' : 5325
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:715});
     __hpasRuleResult = {
'영업요율' : 5293
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:716});
     __hpasRuleResult = {
'영업요율' : 5232
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:717});
     __hpasRuleResult = {
'영업요율' : 5142
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:718});
     __hpasRuleResult = {
'영업요율' : 5041
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:719});
     __hpasRuleResult = {
'영업요율' : 4961
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:720});
     __hpasRuleResult = {
'영업요율' : 5230
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:721});
     __hpasRuleResult = {
'영업요율' : 5317
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:722});
     __hpasRuleResult = {
'영업요율' : 4878
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:723});
     __hpasRuleResult = {
'영업요율' : 5351
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:724});
     __hpasRuleResult = {
'영업요율' : 5405
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:725});
     __hpasRuleResult = {
'영업요율' : 5471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:726});
     __hpasRuleResult = {
'영업요율' : 5541
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:727});
     __hpasRuleResult = {
'영업요율' : 5610
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:728});
     __hpasRuleResult = {
'영업요율' : 5675
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:729});
     __hpasRuleResult = {
'영업요율' : 5724
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:730});
     __hpasRuleResult = {
'영업요율' : 5746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:731});
     __hpasRuleResult = {
'영업요율' : 5724
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:732});
     __hpasRuleResult = {
'영업요율' : 5649
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:733});
     __hpasRuleResult = {
'영업요율' : 4547
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:734});
     __hpasRuleResult = {
'영업요율' : 5529
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:735});
     __hpasRuleResult = {
'영업요율' : 5380
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:736});
     __hpasRuleResult = {
'영업요율' : 5239
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:737});
     __hpasRuleResult = {
'영업요율' : 5130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:738});
     __hpasRuleResult = {
'영업요율' : 5066
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:739});
     __hpasRuleResult = {
'영업요율' : 5024
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:740});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:741});
     __hpasRuleResult = {
'영업요율' : 4978
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:742});
     __hpasRuleResult = {
'영업요율' : 4966
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:743});
     __hpasRuleResult = {
'영업요율' : 4954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:744});
     __hpasRuleResult = {
'영업요율' : 4137
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:745});
     __hpasRuleResult = {
'영업요율' : 4951
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:746});
     __hpasRuleResult = {
'영업요율' : 4946
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:747});
     __hpasRuleResult = {
'영업요율' : 4941
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:748});
     __hpasRuleResult = {
'영업요율' : 4937
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:749});
     __hpasRuleResult = {
'영업요율' : 4930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:750});
     __hpasRuleResult = {
'영업요율' : 4922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:751});
     __hpasRuleResult = {
'영업요율' : 4912
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:752});
     __hpasRuleResult = {
'영업요율' : 4898
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:753});
     __hpasRuleResult = {
'영업요율' : 4880
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:754});
     __hpasRuleResult = {
'영업요율' : 4859
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:755});
     __hpasRuleResult = {
'영업요율' : 4573
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:756});
     __hpasRuleResult = {
'영업요율' : 4836
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:757});
     __hpasRuleResult = {
'영업요율' : 4814
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:758});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:759});
     __hpasRuleResult = {
'영업요율' : 4817
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:760});
     __hpasRuleResult = {
'영업요율' : 4842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:761});
     __hpasRuleResult = {
'영업요율' : 4871
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:762});
     __hpasRuleResult = {
'영업요율' : 4898
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:763});
     __hpasRuleResult = {
'영업요율' : 4924
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:764});
     __hpasRuleResult = {
'영업요율' : 4937
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:765});
     __hpasRuleResult = {
'영업요율' : 4954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:766});
     __hpasRuleResult = {
'영업요율' : 5076
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:767});
     __hpasRuleResult = {
'영업요율' : 4968
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:768});
     __hpasRuleResult = {
'영업요율' : 4980
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:769});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:770});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:771});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:772});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:773});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:774});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:775});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:776});
     __hpasRuleResult = {
'영업요율' : 4997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:777});
     __hpasRuleResult = {
'영업요율' : 934
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:778});
     __hpasRuleResult = {
'영업요율' : 1632
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:779});
     __hpasRuleResult = {
'영업요율' : 2371
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:780});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:781});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:782});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:783});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:784});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:785});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:786});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:787});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:788});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:789});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:790});
     __hpasRuleResult = {
'영업요율' : 2298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:791});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:792});
     __hpasRuleResult = {
'영업요율' : 2168
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:793});
     __hpasRuleResult = {
'영업요율' : 2186
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:794});
     __hpasRuleResult = {
'영업요율' : 2205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:795});
     __hpasRuleResult = {
'영업요율' : 2210
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:796});
     __hpasRuleResult = {
'영업요율' : 2207
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:797});
     __hpasRuleResult = {
'영업요율' : 2205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:798});
     __hpasRuleResult = {
'영업요율' : 2285
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:799});
     __hpasRuleResult = {
'영업요율' : 2361
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:800});
     __hpasRuleResult = {
'영업요율' : 2373
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:801});
     __hpasRuleResult = {
'영업요율' : 2425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:802});
     __hpasRuleResult = {
'영업요율' : 2480
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:803});
     __hpasRuleResult = {
'영업요율' : 2525
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:804});
     __hpasRuleResult = {
'영업요율' : 2534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:805});
     __hpasRuleResult = {
'영업요율' : 2536
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:806});
     __hpasRuleResult = {
'영업요율' : 2527
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:807});
     __hpasRuleResult = {
'영업요율' : 2500
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:808});
     __hpasRuleResult = {
'영업요율' : 2471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:809});
     __hpasRuleResult = {
'영업요율' : 2517
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:810});
     __hpasRuleResult = {
'영업요율' : 2563
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:811});
     __hpasRuleResult = {
'영업요율' : 2732
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:812});
     __hpasRuleResult = {
'영업요율' : 2605
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:813});
     __hpasRuleResult = {
'영업요율' : 2641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:814});
     __hpasRuleResult = {
'영업요율' : 2680
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:815});
     __hpasRuleResult = {
'영업요율' : 2844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:816});
     __hpasRuleResult = {
'영업요율' : 3010
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:817});
     __hpasRuleResult = {
'영업요율' : 3197
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:818});
     __hpasRuleResult = {
'영업요율' : 3405
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:819});
     __hpasRuleResult = {
'영업요율' : 3500
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:820});
     __hpasRuleResult = {
'영업요율' : 3537
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:821});
     __hpasRuleResult = {
'영업요율' : 3612
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:822});
     __hpasRuleResult = {
'영업요율' : 2647
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:823});
     __hpasRuleResult = {
'영업요율' : 3722
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:824});
     __hpasRuleResult = {
'영업요율' : 3856
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:825});
     __hpasRuleResult = {
'영업요율' : 4008
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:826});
     __hpasRuleResult = {
'영업요율' : 4173
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:827});
     __hpasRuleResult = {
'영업요율' : 4334
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:828});
     __hpasRuleResult = {
'영업요율' : 4483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:829});
     __hpasRuleResult = {
'영업요율' : 4636
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:830});
     __hpasRuleResult = {
'영업요율' : 4802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:831});
     __hpasRuleResult = {
'영업요율' : 5029
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:832});
     __hpasRuleResult = {
'영업요율' : 5358
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:833});
     __hpasRuleResult = {
'영업요율' : 2529
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:834});
     __hpasRuleResult = {
'영업요율' : 5778
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:835});
     __hpasRuleResult = {
'영업요율' : 6222
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:836});
     __hpasRuleResult = {
'영업요율' : 6534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:837});
     __hpasRuleResult = {
'영업요율' : 6769
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:838});
     __hpasRuleResult = {
'영업요율' : 6849
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:839});
     __hpasRuleResult = {
'영업요율' : 6744
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:840});
     __hpasRuleResult = {
'영업요율' : 6514
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:841});
     __hpasRuleResult = {
'영업요율' : 6303
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:842});
     __hpasRuleResult = {
'영업요율' : 6185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:843});
     __hpasRuleResult = {
'영업요율' : 6147
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:844});
     __hpasRuleResult = {
'영업요율' : 2425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:845});
     __hpasRuleResult = {
'영업요율' : 6142
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:846});
     __hpasRuleResult = {
'영업요율' : 6136
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:847});
     __hpasRuleResult = {
'영업요율' : 6122
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:848});
     __hpasRuleResult = {
'영업요율' : 6093
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:849});
     __hpasRuleResult = {
'영업요율' : 6037
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:850});
     __hpasRuleResult = {
'영업요율' : 5939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:851});
     __hpasRuleResult = {
'영업요율' : 5808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:852});
     __hpasRuleResult = {
'영업요율' : 5698
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:853});
     __hpasRuleResult = {
'영업요율' : 5637
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:854});
     __hpasRuleResult = {
'영업요율' : 5610
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:855});
     __hpasRuleResult = {
'영업요율' : 2283
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:856});
     __hpasRuleResult = {
'영업요율' : 5602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:857});
     __hpasRuleResult = {
'영업요율' : 5595
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:858});
     __hpasRuleResult = {
'영업요율' : 5566
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:859});
     __hpasRuleResult = {
'영업요율' : 5522
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:860});
     __hpasRuleResult = {
'영업요율' : 5466
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:861});
     __hpasRuleResult = {
'영업요율' : 5400
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:862});
     __hpasRuleResult = {
'영업요율' : 5324
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:863});
     __hpasRuleResult = {
'영업요율' : 5241
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:864});
     __hpasRuleResult = {
'영업요율' : 5149
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:865});
     __hpasRuleResult = {
'영업요율' : 5046
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:866});
     __hpasRuleResult = {
'영업요율' : 2364
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:867});
     __hpasRuleResult = {
'영업요율' : 4925
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:868});
     __hpasRuleResult = {
'영업요율' : 4780
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:869});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:870});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:871});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:872});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:873});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:874});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:875});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:876});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:877});
     __hpasRuleResult = {
'영업요율' : 2395
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:878});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:879});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:880});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:881});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:882});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:883});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:884});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:885});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:886});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:887});
     __hpasRuleResult = {
'영업요율' : 4759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:888});
     __hpasRuleResult = {
'영업요율' : 727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:889});
     __hpasRuleResult = {
'영업요율' : 1478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:890});
     __hpasRuleResult = {
'영업요율' : 3075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:891});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:892});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:893});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:894});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:895});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:896});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:897});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:898});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:899});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:900});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:901});
     __hpasRuleResult = {
'영업요율' : 3244
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:902});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:903});
     __hpasRuleResult = {
'영업요율' : 3353
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:904});
     __hpasRuleResult = {
'영업요율' : 3458
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:905});
     __hpasRuleResult = {
'영업요율' : 3566
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:906});
     __hpasRuleResult = {
'영업요율' : 3664
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:907});
     __hpasRuleResult = {
'영업요율' : 3749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:908});
     __hpasRuleResult = {
'영업요율' : 3493
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:909});
     __hpasRuleResult = {
'영업요율' : 3297
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:910});
     __hpasRuleResult = {
'영업요율' : 3149
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:911});
     __hpasRuleResult = {
'영업요율' : 2227
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:912});
     __hpasRuleResult = {
'영업요율' : 3008
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:913});
     __hpasRuleResult = {
'영업요율' : 2858
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:914});
     __hpasRuleResult = {
'영업요율' : 2715
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:915});
     __hpasRuleResult = {
'영업요율' : 2649
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:916});
     __hpasRuleResult = {
'영업요율' : 2727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:917});
     __hpasRuleResult = {
'영업요율' : 2954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:918});
     __hpasRuleResult = {
'영업요율' : 3256
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:919});
     __hpasRuleResult = {
'영업요율' : 3463
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:920});
     __hpasRuleResult = {
'영업요율' : 3478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:921});
     __hpasRuleResult = {
'영업요율' : 3480
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:922});
     __hpasRuleResult = {
'영업요율' : 2656
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:923});
     __hpasRuleResult = {
'영업요율' : 3468
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:924});
     __hpasRuleResult = {
'영업요율' : 3449
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:925});
     __hpasRuleResult = {
'영업요율' : 3420
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:926});
     __hpasRuleResult = {
'영업요율' : 3425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:927});
     __hpasRuleResult = {
'영업요율' : 3366
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:928});
     __hpasRuleResult = {
'영업요율' : 3297
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:929});
     __hpasRuleResult = {
'영업요율' : 3222
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:930});
     __hpasRuleResult = {
'영업요율' : 3149
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:931});
     __hpasRuleResult = {
'영업요율' : 3085
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:932});
     __hpasRuleResult = {
'영업요율' : 3042
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:933});
     __hpasRuleResult = {
'영업요율' : 2724
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:934});
     __hpasRuleResult = {
'영업요율' : 3014
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:935});
     __hpasRuleResult = {
'영업요율' : 3000
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:936});
     __hpasRuleResult = {
'영업요율' : 2986
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:937});
     __hpasRuleResult = {
'영업요율' : 2968
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:938});
     __hpasRuleResult = {
'영업요율' : 2934
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:939});
     __hpasRuleResult = {
'영업요율' : 2883
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:940});
     __hpasRuleResult = {
'영업요율' : 2827
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:941});
     __hpasRuleResult = {
'영업요율' : 2781
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:942});
     __hpasRuleResult = {
'영업요율' : 2932
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:943});
     __hpasRuleResult = {
'영업요율' : 2981
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:944});
     __hpasRuleResult = {
'영업요율' : 2736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:945});
     __hpasRuleResult = {
'영업요율' : 3000
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:946});
     __hpasRuleResult = {
'영업요율' : 3029
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:947});
     __hpasRuleResult = {
'영업요율' : 3068
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:948});
     __hpasRuleResult = {
'영업요율' : 3107
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:949});
     __hpasRuleResult = {
'영업요율' : 3146
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:950});
     __hpasRuleResult = {
'영업요율' : 3181
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:951});
     __hpasRuleResult = {
'영업요율' : 3210
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:952});
     __hpasRuleResult = {
'영업요율' : 3222
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:953});
     __hpasRuleResult = {
'영업요율' : 3210
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:954});
     __hpasRuleResult = {
'영업요율' : 3168
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:955});
     __hpasRuleResult = {
'영업요율' : 2551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:956});
     __hpasRuleResult = {
'영업요율' : 3100
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:957});
     __hpasRuleResult = {
'영업요율' : 3017
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:958});
     __hpasRuleResult = {
'영업요율' : 2937
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:959});
     __hpasRuleResult = {
'영업요율' : 2876
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:960});
     __hpasRuleResult = {
'영업요율' : 2841
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:961});
     __hpasRuleResult = {
'영업요율' : 2817
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:962});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:963});
     __hpasRuleResult = {
'영업요율' : 2792
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:964});
     __hpasRuleResult = {
'영업요율' : 2785
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:965});
     __hpasRuleResult = {
'영업요율' : 2778
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:966});
     __hpasRuleResult = {
'영업요율' : 2319
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:967});
     __hpasRuleResult = {
'영업요율' : 2776
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:968});
     __hpasRuleResult = {
'영업요율' : 2775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:969});
     __hpasRuleResult = {
'영업요율' : 2771
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:970});
     __hpasRuleResult = {
'영업요율' : 2769
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:971});
     __hpasRuleResult = {
'영업요율' : 2766
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:972});
     __hpasRuleResult = {
'영업요율' : 2759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:973});
     __hpasRuleResult = {
'영업요율' : 2753
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:974});
     __hpasRuleResult = {
'영업요율' : 2746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:975});
     __hpasRuleResult = {
'영업요율' : 2736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:976});
     __hpasRuleResult = {
'영업요율' : 2725
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:977});
     __hpasRuleResult = {
'영업요율' : 2564
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:978});
     __hpasRuleResult = {
'영업요율' : 2712
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:979});
     __hpasRuleResult = {
'영업요율' : 2698
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:980});
     __hpasRuleResult = {
'영업요율' : 2686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:981});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:982});
     __hpasRuleResult = {
'영업요율' : 2715
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:983});
     __hpasRuleResult = {
'영업요율' : 2730
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:984});
     __hpasRuleResult = {
'영업요율' : 2746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:985});
     __hpasRuleResult = {
'영업요율' : 2759
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:986});
     __hpasRuleResult = {
'영업요율' : 2769
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:987});
     __hpasRuleResult = {
'영업요율' : 2778
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:988});
     __hpasRuleResult = {
'영업요율' : 2846
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:989});
     __hpasRuleResult = {
'영업요율' : 2785
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:990});
     __hpasRuleResult = {
'영업요율' : 2792
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:991});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:992});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:993});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:994});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:995});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:996});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:997});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:998});
     __hpasRuleResult = {
'영업요율' : 2802
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:999});
     __hpasRuleResult = {
'영업요율' : 531
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1000});
     __hpasRuleResult = {
'영업요율' : 927
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1001});
     __hpasRuleResult = {
'영업요율' : 1347
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1002});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1003});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1004});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1005});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1006});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1007});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1008});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1009});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1010});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1011});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1012});
     __hpasRuleResult = {
'영업요율' : 1305
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1013});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1014});
     __hpasRuleResult = {
'영업요율' : 1232
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1015});
     __hpasRuleResult = {
'영업요율' : 1242
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1016});
     __hpasRuleResult = {
'영업요율' : 1253
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1017});
     __hpasRuleResult = {
'영업요율' : 1256
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1018});
     __hpasRuleResult = {
'영업요율' : 1254
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1019});
     __hpasRuleResult = {
'영업요율' : 1253
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1020});
     __hpasRuleResult = {
'영업요율' : 1298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1021});
     __hpasRuleResult = {
'영업요율' : 1342
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1022});
     __hpasRuleResult = {
'영업요율' : 1349
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1023});
     __hpasRuleResult = {
'영업요율' : 1378
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1024});
     __hpasRuleResult = {
'영업요율' : 1408
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1025});
     __hpasRuleResult = {
'영업요율' : 1434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1026});
     __hpasRuleResult = {
'영업요율' : 1439
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1027});
     __hpasRuleResult = {
'영업요율' : 1439
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1028});
     __hpasRuleResult = {
'영업요율' : 1434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1029});
     __hpasRuleResult = {
'영업요율' : 1419
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1030});
     __hpasRuleResult = {
'영업요율' : 1403
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1031});
     __hpasRuleResult = {
'영업요율' : 1429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1032});
     __hpasRuleResult = {
'영업요율' : 1456
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1033});
     __hpasRuleResult = {
'영업요율' : 1551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1034});
     __hpasRuleResult = {
'영업요율' : 1478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1035});
     __hpasRuleResult = {
'영업요율' : 1498
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1036});
     __hpasRuleResult = {
'영업요율' : 1522
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1037});
     __hpasRuleResult = {
'영업요율' : 1615
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1038});
     __hpasRuleResult = {
'영업요율' : 1708
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1039});
     __hpasRuleResult = {
'영업요율' : 1815
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1040});
     __hpasRuleResult = {
'영업요율' : 1934
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1041});
     __hpasRuleResult = {
'영업요율' : 1986
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1042});
     __hpasRuleResult = {
'영업요율' : 2008
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1043});
     __hpasRuleResult = {
'영업요율' : 2053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1044});
     __hpasRuleResult = {
'영업요율' : 1505
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1045});
     __hpasRuleResult = {
'영업요율' : 2114
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1046});
     __hpasRuleResult = {
'영업요율' : 2188
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1047});
     __hpasRuleResult = {
'영업요율' : 2276
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1048});
     __hpasRuleResult = {
'영업요율' : 2369
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1049});
     __hpasRuleResult = {
'영업요율' : 2461
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1050});
     __hpasRuleResult = {
'영업요율' : 2546
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1051});
     __hpasRuleResult = {
'영업요율' : 2632
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1052});
     __hpasRuleResult = {
'영업요율' : 2727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1053});
     __hpasRuleResult = {
'영업요율' : 2854
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1054});
     __hpasRuleResult = {
'영업요율' : 3042
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1055});
     __hpasRuleResult = {
'영업요율' : 1436
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1056});
     __hpasRuleResult = {
'영업요율' : 3280
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1057});
     __hpasRuleResult = {
'영업요율' : 3534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1058});
     __hpasRuleResult = {
'영업요율' : 3710
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1059});
     __hpasRuleResult = {
'영업요율' : 3842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1060});
     __hpasRuleResult = {
'영업요율' : 3890
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1061});
     __hpasRuleResult = {
'영업요율' : 3829
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1062});
     __hpasRuleResult = {
'영업요율' : 3700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1063});
     __hpasRuleResult = {
'영업요율' : 3578
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1064});
     __hpasRuleResult = {
'영업요율' : 3512
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1065});
     __hpasRuleResult = {
'영업요율' : 3491
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1066});
     __hpasRuleResult = {
'영업요율' : 1378
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1067});
     __hpasRuleResult = {
'영업요율' : 3488
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1068});
     __hpasRuleResult = {
'영업요율' : 3485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1069});
     __hpasRuleResult = {
'영업요율' : 3476
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1070});
     __hpasRuleResult = {
'영업요율' : 3459
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1071});
     __hpasRuleResult = {
'영업요율' : 3429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1072});
     __hpasRuleResult = {
'영업요율' : 3373
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1073});
     __hpasRuleResult = {
'영업요율' : 3298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1074});
     __hpasRuleResult = {
'영업요율' : 3236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1075});
     __hpasRuleResult = {
'영업요율' : 3202
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1076});
     __hpasRuleResult = {
'영업요율' : 3185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1077});
     __hpasRuleResult = {
'영업요율' : 1297
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1078});
     __hpasRuleResult = {
'영업요율' : 3181
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1079});
     __hpasRuleResult = {
'영업요율' : 3176
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1080});
     __hpasRuleResult = {
'영업요율' : 3161
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1081});
     __hpasRuleResult = {
'영업요율' : 3136
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1082});
     __hpasRuleResult = {
'영업요율' : 3103
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1083});
     __hpasRuleResult = {
'영업요율' : 3066
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1084});
     __hpasRuleResult = {
'영업요율' : 3022
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1085});
     __hpasRuleResult = {
'영업요율' : 2975
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1086});
     __hpasRuleResult = {
'영업요율' : 2925
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1087});
     __hpasRuleResult = {
'영업요율' : 2864
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1088});
     __hpasRuleResult = {
'영업요율' : 1344
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1089});
     __hpasRuleResult = {
'영업요율' : 2797
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1090});
     __hpasRuleResult = {
'영업요율' : 2715
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1091});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1092});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1093});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1094});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1095});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1096});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1097});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1098});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1099});
     __hpasRuleResult = {
'영업요율' : 1359
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1100});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1101});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1102});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1103});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1104});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1105});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1106});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1107});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1108});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '06'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1109});
     __hpasRuleResult = {
'영업요율' : 2702
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1110});
     __hpasRuleResult = {
'영업요율' : 1053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1111});
     __hpasRuleResult = {
'영업요율' : 2137
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1112});
     __hpasRuleResult = {
'영업요율' : 4446
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1113});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1114});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1115});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1116});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1117});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1118});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1119});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1120});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1121});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1122});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1123});
     __hpasRuleResult = {
'영업요율' : 4693
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1124});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1125});
     __hpasRuleResult = {
'영업요율' : 4851
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1126});
     __hpasRuleResult = {
'영업요율' : 5003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1127});
     __hpasRuleResult = {
'영업요율' : 5158
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1128});
     __hpasRuleResult = {
'영업요율' : 5298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1129});
     __hpasRuleResult = {
'영업요율' : 5422
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1130});
     __hpasRuleResult = {
'영업요율' : 5051
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1131});
     __hpasRuleResult = {
'영업요율' : 4768
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1132});
     __hpasRuleResult = {
'영업요율' : 4554
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1133});
     __hpasRuleResult = {
'영업요율' : 3220
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1134});
     __hpasRuleResult = {
'영업요율' : 4351
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1135});
     __hpasRuleResult = {
'영업요율' : 4134
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1136});
     __hpasRuleResult = {
'영업요율' : 3927
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1137});
     __hpasRuleResult = {
'영업요율' : 3832
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1138});
     __hpasRuleResult = {
'영업요율' : 3944
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1139});
     __hpasRuleResult = {
'영업요율' : 4273
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1140});
     __hpasRuleResult = {
'영업요율' : 4707
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1141});
     __hpasRuleResult = {
'영업요율' : 5010
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1142});
     __hpasRuleResult = {
'영업요율' : 5029
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1143});
     __hpasRuleResult = {
'영업요율' : 5030
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1144});
     __hpasRuleResult = {
'영업요율' : 3839
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1145});
     __hpasRuleResult = {
'영업요율' : 5017
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1146});
     __hpasRuleResult = {
'영업요율' : 4990
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1147});
     __hpasRuleResult = {
'영업요율' : 4946
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1148});
     __hpasRuleResult = {
'영업요율' : 4954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1149});
     __hpasRuleResult = {
'영업요율' : 4866
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1150});
     __hpasRuleResult = {
'영업요율' : 4768
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1151});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1152});
     __hpasRuleResult = {
'영업요율' : 4553
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1153});
     __hpasRuleResult = {
'영업요율' : 4463
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1154});
     __hpasRuleResult = {
'영업요율' : 4398
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1155});
     __hpasRuleResult = {
'영업요율' : 3939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1156});
     __hpasRuleResult = {
'영업요율' : 4359
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1157});
     __hpasRuleResult = {
'영업요율' : 4337
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1158});
     __hpasRuleResult = {
'영업요율' : 4319
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1159});
     __hpasRuleResult = {
'영업요율' : 4293
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1160});
     __hpasRuleResult = {
'영업요율' : 4242
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1161});
     __hpasRuleResult = {
'영업요율' : 4169
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1162});
     __hpasRuleResult = {
'영업요율' : 4088
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1163});
     __hpasRuleResult = {
'영업요율' : 4024
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1164});
     __hpasRuleResult = {
'영업요율' : 4242
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1165});
     __hpasRuleResult = {
'영업요율' : 4312
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1166});
     __hpasRuleResult = {
'영업요율' : 3956
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1167});
     __hpasRuleResult = {
'영업요율' : 4339
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1168});
     __hpasRuleResult = {
'영업요율' : 4383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1169});
     __hpasRuleResult = {
'영업요율' : 4436
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1170});
     __hpasRuleResult = {
'영업요율' : 4493
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1171});
     __hpasRuleResult = {
'영업요율' : 4549
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1172});
     __hpasRuleResult = {
'영업요율' : 4602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1173});
     __hpasRuleResult = {
'영업요율' : 4641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1174});
     __hpasRuleResult = {
'영업요율' : 4659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1175});
     __hpasRuleResult = {
'영업요율' : 4641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1176});
     __hpasRuleResult = {
'영업요율' : 4581
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1177});
     __hpasRuleResult = {
'영업요율' : 3686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1178});
     __hpasRuleResult = {
'영업요율' : 4483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1179});
     __hpasRuleResult = {
'영업요율' : 4363
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1180});
     __hpasRuleResult = {
'영업요율' : 4249
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1181});
     __hpasRuleResult = {
'영업요율' : 4159
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1182});
     __hpasRuleResult = {
'영업요율' : 4107
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1183});
     __hpasRuleResult = {
'영업요율' : 4075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1184});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1185});
     __hpasRuleResult = {
'영업요율' : 4037
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1186});
     __hpasRuleResult = {
'영업요율' : 4027
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1187});
     __hpasRuleResult = {
'영업요율' : 4015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1188});
     __hpasRuleResult = {
'영업요율' : 3354
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1189});
     __hpasRuleResult = {
'영업요율' : 4014
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1190});
     __hpasRuleResult = {
'영업요율' : 4010
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1191});
     __hpasRuleResult = {
'영업요율' : 4007
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1192});
     __hpasRuleResult = {
'영업요율' : 4003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1193});
     __hpasRuleResult = {
'영업요율' : 3998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1194});
     __hpasRuleResult = {
'영업요율' : 3991
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1195});
     __hpasRuleResult = {
'영업요율' : 3983
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1196});
     __hpasRuleResult = {
'영업요율' : 3971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1197});
     __hpasRuleResult = {
'영업요율' : 3956
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1198});
     __hpasRuleResult = {
'영업요율' : 3941
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1199});
     __hpasRuleResult = {
'영업요율' : 3708
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1200});
     __hpasRuleResult = {
'영업요율' : 3922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1201});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1202});
     __hpasRuleResult = {
'영업요율' : 3885
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1203});
     __hpasRuleResult = {
'영업요율' : 3905
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1204});
     __hpasRuleResult = {
'영업요율' : 3927
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1205});
     __hpasRuleResult = {
'영업요율' : 3949
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1206});
     __hpasRuleResult = {
'영업요율' : 3971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1207});
     __hpasRuleResult = {
'영업요율' : 3993
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1208});
     __hpasRuleResult = {
'영업요율' : 4003
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1209});
     __hpasRuleResult = {
'영업요율' : 4015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1210});
     __hpasRuleResult = {
'영업요율' : 4115
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1211});
     __hpasRuleResult = {
'영업요율' : 4029
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1212});
     __hpasRuleResult = {
'영업요율' : 4039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1213});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1214});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1215});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1216});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1217});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1218});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1219});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1220});
     __hpasRuleResult = {
'영업요율' : 4053
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1221});
     __hpasRuleResult = {
'영업요율' : 766
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1222});
     __hpasRuleResult = {
'영업요율' : 1337
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1223});
     __hpasRuleResult = {
'영업요율' : 1946
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1224});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1225});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1226});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1227});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1228});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1229});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1230});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1231});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1232});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1233});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1234});
     __hpasRuleResult = {
'영업요율' : 1885
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1235});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1236});
     __hpasRuleResult = {
'영업요율' : 1780
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1237});
     __hpasRuleResult = {
'영업요율' : 1795
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1238});
     __hpasRuleResult = {
'영업요율' : 1810
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1239});
     __hpasRuleResult = {
'영업요율' : 1814
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1240});
     __hpasRuleResult = {
'영업요율' : 1810
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1241});
     __hpasRuleResult = {
'영업요율' : 1810
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1242});
     __hpasRuleResult = {
'영업요율' : 1873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1243});
     __hpasRuleResult = {
'영업요율' : 1937
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1244});
     __hpasRuleResult = {
'영업요율' : 1947
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1245});
     __hpasRuleResult = {
'영업요율' : 1990
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1246});
     __hpasRuleResult = {
'영업요율' : 2034
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1247});
     __hpasRuleResult = {
'영업요율' : 2073
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1248});
     __hpasRuleResult = {
'영업요율' : 2080
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1249});
     __hpasRuleResult = {
'영업요율' : 2081
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1250});
     __hpasRuleResult = {
'영업요율' : 2075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1251});
     __hpasRuleResult = {
'영업요율' : 2051
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1252});
     __hpasRuleResult = {
'영업요율' : 2027
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1253});
     __hpasRuleResult = {
'영업요율' : 2066
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1254});
     __hpasRuleResult = {
'영업요율' : 2102
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1255});
     __hpasRuleResult = {
'영업요율' : 2241
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1256});
     __hpasRuleResult = {
'영업요율' : 2137
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1257});
     __hpasRuleResult = {
'영업요율' : 2168
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1258});
     __hpasRuleResult = {
'영업요율' : 2198
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1259});
     __hpasRuleResult = {
'영업요율' : 2334
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1260});
     __hpasRuleResult = {
'영업요율' : 2469
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1261});
     __hpasRuleResult = {
'영업요율' : 2624
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1262});
     __hpasRuleResult = {
'영업요율' : 2793
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1263});
     __hpasRuleResult = {
'영업요율' : 2873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1264});
     __hpasRuleResult = {
'영업요율' : 2902
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1265});
     __hpasRuleResult = {
'영업요율' : 2963
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1266});
     __hpasRuleResult = {
'영업요율' : 2173
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1267});
     __hpasRuleResult = {
'영업요율' : 3054
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1268});
     __hpasRuleResult = {
'영업요율' : 3163
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1269});
     __hpasRuleResult = {
'영업요율' : 3288
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1270});
     __hpasRuleResult = {
'영업요율' : 3425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1271});
     __hpasRuleResult = {
'영업요율' : 3556
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1272});
     __hpasRuleResult = {
'영업요율' : 3678
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1273});
     __hpasRuleResult = {
'영업요율' : 3803
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1274});
     __hpasRuleResult = {
'영업요율' : 3939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1275});
     __hpasRuleResult = {
'영업요율' : 4125
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1276});
     __hpasRuleResult = {
'영업요율' : 4395
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1277});
     __hpasRuleResult = {
'영업요율' : 2075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1278});
     __hpasRuleResult = {
'영업요율' : 4741
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1279});
     __hpasRuleResult = {
'영업요율' : 5103
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1280});
     __hpasRuleResult = {
'영업요율' : 5359
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1281});
     __hpasRuleResult = {
'영업요율' : 5554
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1282});
     __hpasRuleResult = {
'영업요율' : 5620
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1283});
     __hpasRuleResult = {
'영업요율' : 5534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1284});
     __hpasRuleResult = {
'영업요율' : 5344
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1285});
     __hpasRuleResult = {
'영업요율' : 5173
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1286});
     __hpasRuleResult = {
'영업요율' : 5075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1287});
     __hpasRuleResult = {
'영업요율' : 5044
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1288});
     __hpasRuleResult = {
'영업요율' : 1990
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1289});
     __hpasRuleResult = {
'영업요율' : 5039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1290});
     __hpasRuleResult = {
'영업요율' : 5034
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1291});
     __hpasRuleResult = {
'영업요율' : 5022
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1292});
     __hpasRuleResult = {
'영업요율' : 4998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1293});
     __hpasRuleResult = {
'영업요율' : 4954
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1294});
     __hpasRuleResult = {
'영업요율' : 4871
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1295});
     __hpasRuleResult = {
'영업요율' : 4766
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1296});
     __hpasRuleResult = {
'영업요율' : 4676
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1297});
     __hpasRuleResult = {
'영업요율' : 4625
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1298});
     __hpasRuleResult = {
'영업요율' : 4602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1299});
     __hpasRuleResult = {
'영업요율' : 1873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1300});
     __hpasRuleResult = {
'영업요율' : 4597
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1301});
     __hpasRuleResult = {
'영업요율' : 4591
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1302});
     __hpasRuleResult = {
'영업요율' : 4568
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1303});
     __hpasRuleResult = {
'영업요율' : 4530
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1304});
     __hpasRuleResult = {
'영업요율' : 4485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1305});
     __hpasRuleResult = {
'영업요율' : 4430
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1306});
     __hpasRuleResult = {
'영업요율' : 4368
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1307});
     __hpasRuleResult = {
'영업요율' : 4300
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1308});
     __hpasRuleResult = {
'영업요율' : 4224
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1309});
     __hpasRuleResult = {
'영업요율' : 4141
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1310});
     __hpasRuleResult = {
'영업요율' : 1939
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1311});
     __hpasRuleResult = {
'영업요율' : 4041
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1312});
     __hpasRuleResult = {
'영업요율' : 3922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1313});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1314});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1315});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1316});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1317});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1318});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1319});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1320});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1321});
     __hpasRuleResult = {
'영업요율' : 1964
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1322});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1323});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1324});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1325});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1326});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1327});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1328});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1329});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1330});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 100000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1331});
     __hpasRuleResult = {
'영업요율' : 3903
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1332});
     __hpasRuleResult = {
'영업요율' : 1185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1333});
     __hpasRuleResult = {
'영업요율' : 2407
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1334});
     __hpasRuleResult = {
'영업요율' : 5007
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1335});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1336});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1337});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1338});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1339});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1340});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1341});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1342});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1343});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1344});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1345});
     __hpasRuleResult = {
'영업요율' : 5285
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1346});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1347});
     __hpasRuleResult = {
'영업요율' : 5461
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1348});
     __hpasRuleResult = {
'영업요율' : 5632
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1349});
     __hpasRuleResult = {
'영업요율' : 5807
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1350});
     __hpasRuleResult = {
'영업요율' : 5966
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1351});
     __hpasRuleResult = {
'영업요율' : 6105
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1352});
     __hpasRuleResult = {
'영업요율' : 5686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1353});
     __hpasRuleResult = {
'영업요율' : 5368
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1354});
     __hpasRuleResult = {
'영업요율' : 5129
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1355});
     __hpasRuleResult = {
'영업요율' : 3624
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1356});
     __hpasRuleResult = {
'영업요율' : 4898
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1357});
     __hpasRuleResult = {
'영업요율' : 4653
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1358});
     __hpasRuleResult = {
'영업요율' : 4420
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1359});
     __hpasRuleResult = {
'영업요율' : 4315
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1360});
     __hpasRuleResult = {
'영업요율' : 4441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1361});
     __hpasRuleResult = {
'영업요율' : 4812
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1362});
     __hpasRuleResult = {
'영업요율' : 5300
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1363});
     __hpasRuleResult = {
'영업요율' : 5641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1364});
     __hpasRuleResult = {
'영업요율' : 5661
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1365});
     __hpasRuleResult = {
'영업요율' : 5664
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1366});
     __hpasRuleResult = {
'영업요율' : 4322
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1367});
     __hpasRuleResult = {
'영업요율' : 5647
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1368});
     __hpasRuleResult = {
'영업요율' : 5619
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1369});
     __hpasRuleResult = {
'영업요율' : 5569
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1370});
     __hpasRuleResult = {
'영업요율' : 5578
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1371});
     __hpasRuleResult = {
'영업요율' : 5478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1372});
     __hpasRuleResult = {
'영업요율' : 5368
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1373});
     __hpasRuleResult = {
'영업요율' : 5246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1374});
     __hpasRuleResult = {
'영업요율' : 5127
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1375});
     __hpasRuleResult = {
'영업요율' : 5024
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1376});
     __hpasRuleResult = {
'영업요율' : 4952
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1377});
     __hpasRuleResult = {
'영업요율' : 4434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1378});
     __hpasRuleResult = {
'영업요율' : 4908
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1379});
     __hpasRuleResult = {
'영업요율' : 4883
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1380});
     __hpasRuleResult = {
'영업요율' : 4863
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1381});
     __hpasRuleResult = {
'영업요율' : 4832
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1382});
     __hpasRuleResult = {
'영업요율' : 4776
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1383});
     __hpasRuleResult = {
'영업요율' : 4695
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1384});
     __hpasRuleResult = {
'영업요율' : 4602
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1385});
     __hpasRuleResult = {
'영업요율' : 4529
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1386});
     __hpasRuleResult = {
'영업요율' : 4775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1387});
     __hpasRuleResult = {
'영업요율' : 4854
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1388});
     __hpasRuleResult = {
'영업요율' : 4453
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1389});
     __hpasRuleResult = {
'영업요율' : 4885
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1390});
     __hpasRuleResult = {
'영업요율' : 4934
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1391});
     __hpasRuleResult = {
'영업요율' : 4995
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1392});
     __hpasRuleResult = {
'영업요율' : 5059
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1393});
     __hpasRuleResult = {
'영업요율' : 5122
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1394});
     __hpasRuleResult = {
'영업요율' : 5181
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1395});
     __hpasRuleResult = {
'영업요율' : 5225
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1396});
     __hpasRuleResult = {
'영업요율' : 5246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1397});
     __hpasRuleResult = {
'영업요율' : 5225
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1398});
     __hpasRuleResult = {
'영업요율' : 5158
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1399});
     __hpasRuleResult = {
'영업요율' : 4153
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1400});
     __hpasRuleResult = {
'영업요율' : 5047
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1401});
     __hpasRuleResult = {
'영업요율' : 4912
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1402});
     __hpasRuleResult = {
'영업요율' : 4781
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1403});
     __hpasRuleResult = {
'영업요율' : 4685
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1404});
     __hpasRuleResult = {
'영업요율' : 4625
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1405});
     __hpasRuleResult = {
'영업요율' : 4586
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1406});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1407});
     __hpasRuleResult = {
'영업요율' : 4544
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1408});
     __hpasRuleResult = {
'영업요율' : 4534
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1409});
     __hpasRuleResult = {
'영업요율' : 4524
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1410});
     __hpasRuleResult = {
'영업요율' : 3776
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1411});
     __hpasRuleResult = {
'영업요율' : 4520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1412});
     __hpasRuleResult = {
'영업요율' : 4517
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1413});
     __hpasRuleResult = {
'영업요율' : 4512
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1414});
     __hpasRuleResult = {
'영업요율' : 4507
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1415});
     __hpasRuleResult = {
'영업요율' : 4502
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1416});
     __hpasRuleResult = {
'영업요율' : 4493
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1417});
     __hpasRuleResult = {
'영업요율' : 4485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1418});
     __hpasRuleResult = {
'영업요율' : 4471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1419});
     __hpasRuleResult = {
'영업요율' : 4456
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1420});
     __hpasRuleResult = {
'영업요율' : 4436
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1421});
     __hpasRuleResult = {
'영업요율' : 4175
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1422});
     __hpasRuleResult = {
'영업요율' : 4415
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1423});
     __hpasRuleResult = {
'영업요율' : 4393
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1424});
     __hpasRuleResult = {
'영업요율' : 4375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1425});
     __hpasRuleResult = {
'영업요율' : 4397
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1426});
     __hpasRuleResult = {
'영업요율' : 4420
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1427});
     __hpasRuleResult = {
'영업요율' : 4447
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1428});
     __hpasRuleResult = {
'영업요율' : 4471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1429});
     __hpasRuleResult = {
'영업요율' : 4495
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1430});
     __hpasRuleResult = {
'영업요율' : 4507
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1431});
     __hpasRuleResult = {
'영업요율' : 4524
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1432});
     __hpasRuleResult = {
'영업요율' : 4634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1433});
     __hpasRuleResult = {
'영업요율' : 4536
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1434});
     __hpasRuleResult = {
'영업요율' : 4546
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1435});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1436});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1437});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1438});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1439});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1440});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1441});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1442});
     __hpasRuleResult = {
'영업요율' : 4561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1443});
     __hpasRuleResult = {
'영업요율' : 861
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1444});
     __hpasRuleResult = {
'영업요율' : 1502
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1445});
     __hpasRuleResult = {
'영업요율' : 2185
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1446});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1447});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1448});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1449});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1450});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1451});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1452});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1453});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1454});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1455});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1456});
     __hpasRuleResult = {
'영업요율' : 2117
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1457});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1458});
     __hpasRuleResult = {
'영업요율' : 1997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1459});
     __hpasRuleResult = {
'영업요율' : 2015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1460});
     __hpasRuleResult = {
'영업요율' : 2032
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1461});
     __hpasRuleResult = {
'영업요율' : 2036
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1462});
     __hpasRuleResult = {
'영업요율' : 2034
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1463});
     __hpasRuleResult = {
'영업요율' : 2032
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1464});
     __hpasRuleResult = {
'영업요율' : 2103
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1465});
     __hpasRuleResult = {
'영업요율' : 2176
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1466});
     __hpasRuleResult = {
'영업요율' : 2186
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1467});
     __hpasRuleResult = {
'영업요율' : 2236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1468});
     __hpasRuleResult = {
'영업요율' : 2285
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1469});
     __hpasRuleResult = {
'영업요율' : 2327
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1470});
     __hpasRuleResult = {
'영업요율' : 2336
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1471});
     __hpasRuleResult = {
'영업요율' : 2337
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1472});
     __hpasRuleResult = {
'영업요율' : 2329
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1473});
     __hpasRuleResult = {
'영업요율' : 2302
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1474});
     __hpasRuleResult = {
'영업요율' : 2278
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1475});
     __hpasRuleResult = {
'영업요율' : 2319
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1476});
     __hpasRuleResult = {
'영업요율' : 2361
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1477});
     __hpasRuleResult = {
'영업요율' : 2517
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1478});
     __hpasRuleResult = {
'영업요율' : 2400
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1479});
     __hpasRuleResult = {
'영업요율' : 2434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1480});
     __hpasRuleResult = {
'영업요율' : 2468
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1481});
     __hpasRuleResult = {
'영업요율' : 2620
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1482});
     __hpasRuleResult = {
'영업요율' : 2773
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1483});
     __hpasRuleResult = {
'영업요율' : 2946
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1484});
     __hpasRuleResult = {
'영업요율' : 3137
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1485});
     __hpasRuleResult = {
'영업요율' : 3224
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1486});
     __hpasRuleResult = {
'영업요율' : 3259
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1487});
     __hpasRuleResult = {
'영업요율' : 3327
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1488});
     __hpasRuleResult = {
'영업요율' : 2441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1489});
     __hpasRuleResult = {
'영업요율' : 3429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1490});
     __hpasRuleResult = {
'영업요율' : 3551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1491});
     __hpasRuleResult = {
'영업요율' : 3693
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1492});
     __hpasRuleResult = {
'영업요율' : 3844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1493});
     __hpasRuleResult = {
'영업요율' : 3993
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1494});
     __hpasRuleResult = {
'영업요율' : 4130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1495});
     __hpasRuleResult = {
'영업요율' : 4269
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1496});
     __hpasRuleResult = {
'영업요율' : 4424
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1497});
     __hpasRuleResult = {
'영업요율' : 4634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1498});
     __hpasRuleResult = {
'영업요율' : 4936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1499});
     __hpasRuleResult = {
'영업요율' : 2330
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1500});
     __hpasRuleResult = {
'영업요율' : 5322
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1501});
     __hpasRuleResult = {
'영업요율' : 5732
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1502});
     __hpasRuleResult = {
'영업요율' : 6019
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1503});
     __hpasRuleResult = {
'영업요율' : 6236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1504});
     __hpasRuleResult = {
'영업요율' : 6308
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1505});
     __hpasRuleResult = {
'영업요율' : 6214
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1506});
     __hpasRuleResult = {
'영업요율' : 6002
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1507});
     __hpasRuleResult = {
'영업요율' : 5807
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1508});
     __hpasRuleResult = {
'영업요율' : 5697
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1509});
     __hpasRuleResult = {
'영업요율' : 5664
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1510});
     __hpasRuleResult = {
'영업요율' : 2236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1511});
     __hpasRuleResult = {
'영업요율' : 5659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1512});
     __hpasRuleResult = {
'영업요율' : 5652
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1513});
     __hpasRuleResult = {
'영업요율' : 5639
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1514});
     __hpasRuleResult = {
'영업요율' : 5615
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1515});
     __hpasRuleResult = {
'영업요율' : 5563
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1516});
     __hpasRuleResult = {
'영업요율' : 5471
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1517});
     __hpasRuleResult = {
'영업요율' : 5351
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1518});
     __hpasRuleResult = {
'영업요율' : 5249
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1519});
     __hpasRuleResult = {
'영업요율' : 5193
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1520});
     __hpasRuleResult = {
'영업요율' : 5168
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1521});
     __hpasRuleResult = {
'영업요율' : 2102
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1522});
     __hpasRuleResult = {
'영업요율' : 5161
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1523});
     __hpasRuleResult = {
'영업요율' : 5154
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1524});
     __hpasRuleResult = {
'영업요율' : 5127
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1525});
     __hpasRuleResult = {
'영업요율' : 5086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1526});
     __hpasRuleResult = {
'영업요율' : 5036
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1527});
     __hpasRuleResult = {
'영업요율' : 4975
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1528});
     __hpasRuleResult = {
'영업요율' : 4905
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1529});
     __hpasRuleResult = {
'영업요율' : 4827
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1530});
     __hpasRuleResult = {
'영업요율' : 4744
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1531});
     __hpasRuleResult = {
'영업요율' : 4649
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1532});
     __hpasRuleResult = {
'영업요율' : 2178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1533});
     __hpasRuleResult = {
'영업요율' : 4537
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1534});
     __hpasRuleResult = {
'영업요율' : 4405
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1535});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1536});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1537});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1538});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1539});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1540});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1541});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1542});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1543});
     __hpasRuleResult = {
'영업요율' : 2205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1544});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1545});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1546});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1547});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1548});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1549});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1550});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1551});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1552});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 150000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1553});
     __hpasRuleResult = {
'영업요율' : 4385
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1554});
     __hpasRuleResult = {
'영업요율' : 1244
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1555});
     __hpasRuleResult = {
'영업요율' : 2527
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1556});
     __hpasRuleResult = {
'영업요율' : 5258
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1557});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1558});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1559});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1560});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1561});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1562});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1563});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1564});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1565});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1566});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1567});
     __hpasRuleResult = {
'영업요율' : 5549
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1568});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1569});
     __hpasRuleResult = {
'영업요율' : 5736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1570});
     __hpasRuleResult = {
'영업요율' : 5914
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1571});
     __hpasRuleResult = {
'영업요율' : 6100
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1572});
     __hpasRuleResult = {
'영업요율' : 6266
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1573});
     __hpasRuleResult = {
'영업요율' : 6410
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1574});
     __hpasRuleResult = {
'영업요율' : 5971
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1575});
     __hpasRuleResult = {
'영업요율' : 5637
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1576});
     __hpasRuleResult = {
'영업요율' : 5386
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1577});
     __hpasRuleResult = {
'영업요율' : 3807
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1578});
     __hpasRuleResult = {
'영업요율' : 5142
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1579});
     __hpasRuleResult = {
'영업요율' : 4886
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1580});
     __hpasRuleResult = {
'영업요율' : 4642
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1581});
     __hpasRuleResult = {
'영업요율' : 4532
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1582});
     __hpasRuleResult = {
'영업요율' : 4663
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1583});
     __hpasRuleResult = {
'영업요율' : 5052
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1584});
     __hpasRuleResult = {
'영업요율' : 5566
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1585});
     __hpasRuleResult = {
'영업요율' : 5922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1586});
     __hpasRuleResult = {
'영업요율' : 5946
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1587});
     __hpasRuleResult = {
'영업요율' : 5949
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1588});
     __hpasRuleResult = {
'영업요율' : 4539
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1589});
     __hpasRuleResult = {
'영업요율' : 5932
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1590});
     __hpasRuleResult = {
'영업요율' : 5900
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1591});
     __hpasRuleResult = {
'영업요율' : 5847
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1592});
     __hpasRuleResult = {
'영업요율' : 5858
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1593});
     __hpasRuleResult = {
'영업요율' : 5752
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1594});
     __hpasRuleResult = {
'영업요율' : 5637
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1595});
     __hpasRuleResult = {
'영업요율' : 5508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1596});
     __hpasRuleResult = {
'영업요율' : 5383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1597});
     __hpasRuleResult = {
'영업요율' : 5276
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1598});
     __hpasRuleResult = {
'영업요율' : 5200
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1599});
     __hpasRuleResult = {
'영업요율' : 4656
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1600});
     __hpasRuleResult = {
'영업요율' : 5152
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1601});
     __hpasRuleResult = {
'영업요율' : 5129
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1602});
     __hpasRuleResult = {
'영업요율' : 5105
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1603});
     __hpasRuleResult = {
'영업요율' : 5075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1604});
     __hpasRuleResult = {
'영업요율' : 5017
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1605});
     __hpasRuleResult = {
'영업요율' : 4930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1606});
     __hpasRuleResult = {
'영업요율' : 4832
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1607});
     __hpasRuleResult = {
'영업요율' : 4756
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1608});
     __hpasRuleResult = {
'영업요율' : 5015
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1609});
     __hpasRuleResult = {
'영업요율' : 5098
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1610});
     __hpasRuleResult = {
'영업요율' : 4678
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1611});
     __hpasRuleResult = {
'영업요율' : 5130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1612});
     __hpasRuleResult = {
'영업요율' : 5183
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1613});
     __hpasRuleResult = {
'영업요율' : 5246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1614});
     __hpasRuleResult = {
'영업요율' : 5312
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1615});
     __hpasRuleResult = {
'영업요율' : 5378
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1616});
     __hpasRuleResult = {
'영업요율' : 5441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1617});
     __hpasRuleResult = {
'영업요율' : 5486
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1618});
     __hpasRuleResult = {
'영업요율' : 5508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1619});
     __hpasRuleResult = {
'영업요율' : 5486
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1620});
     __hpasRuleResult = {
'영업요율' : 5417
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1621});
     __hpasRuleResult = {
'영업요율' : 4361
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1622});
     __hpasRuleResult = {
'영업요율' : 5302
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1623});
     __hpasRuleResult = {
'영업요율' : 5158
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1624});
     __hpasRuleResult = {
'영업요율' : 5022
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1625});
     __hpasRuleResult = {
'영업요율' : 4919
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1626});
     __hpasRuleResult = {
'영업요율' : 4858
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1627});
     __hpasRuleResult = {
'영업요율' : 4817
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1628});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1629});
     __hpasRuleResult = {
'영업요율' : 4773
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1630});
     __hpasRuleResult = {
'영업요율' : 4761
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1631});
     __hpasRuleResult = {
'영업요율' : 4749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1632});
     __hpasRuleResult = {
'영업요율' : 3966
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1633});
     __hpasRuleResult = {
'영업요율' : 4746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1634});
     __hpasRuleResult = {
'영업요율' : 4742
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1635});
     __hpasRuleResult = {
'영업요율' : 4737
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1636});
     __hpasRuleResult = {
'영업요율' : 4736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1637});
     __hpasRuleResult = {
'영업요율' : 4727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1638});
     __hpasRuleResult = {
'영업요율' : 4719
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1639});
     __hpasRuleResult = {
'영업요율' : 4708
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1640});
     __hpasRuleResult = {
'영업요율' : 4695
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1641});
     __hpasRuleResult = {
'영업요율' : 4680
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1642});
     __hpasRuleResult = {
'영업요율' : 4658
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1643});
     __hpasRuleResult = {
'영업요율' : 4383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1644});
     __hpasRuleResult = {
'영업요율' : 4637
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1645});
     __hpasRuleResult = {
'영업요율' : 4614
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1646});
     __hpasRuleResult = {
'영업요율' : 4593
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1647});
     __hpasRuleResult = {
'영업요율' : 4617
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1648});
     __hpasRuleResult = {
'영업요율' : 4642
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1649});
     __hpasRuleResult = {
'영업요율' : 4669
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1650});
     __hpasRuleResult = {
'영업요율' : 4695
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1651});
     __hpasRuleResult = {
'영업요율' : 4720
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1652});
     __hpasRuleResult = {
'영업요율' : 4736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1653});
     __hpasRuleResult = {
'영업요율' : 4749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1654});
     __hpasRuleResult = {
'영업요율' : 4866
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1655});
     __hpasRuleResult = {
'영업요율' : 4763
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1656});
     __hpasRuleResult = {
'영업요율' : 4775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1657});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1658});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1659});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1660});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1661});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1662});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1663});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1664});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1665});
     __hpasRuleResult = {
'영업요율' : 900
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1666});
     __hpasRuleResult = {
'영업요율' : 1575
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1667});
     __hpasRuleResult = {
'영업요율' : 2286
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1668});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1669});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1670});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1671});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1672});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1673});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1674});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1675});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1676});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1677});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1678});
     __hpasRuleResult = {
'영업요율' : 2217
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1679});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1680});
     __hpasRuleResult = {
'영업요율' : 2090
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1681});
     __hpasRuleResult = {
'영업요율' : 2108
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1682});
     __hpasRuleResult = {
'영업요율' : 2127
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1683});
     __hpasRuleResult = {
'영업요율' : 2132
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1684});
     __hpasRuleResult = {
'영업요율' : 2129
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1685});
     __hpasRuleResult = {
'영업요율' : 2127
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1686});
     __hpasRuleResult = {
'영업요율' : 2202
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1687});
     __hpasRuleResult = {
'영업요율' : 2278
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1688});
     __hpasRuleResult = {
'영업요율' : 2288
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1689});
     __hpasRuleResult = {
'영업요율' : 2339
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1690});
     __hpasRuleResult = {
'영업요율' : 2392
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1691});
     __hpasRuleResult = {
'영업요율' : 2436
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1692});
     __hpasRuleResult = {
'영업요율' : 2444
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1693});
     __hpasRuleResult = {
'영업요율' : 2446
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1694});
     __hpasRuleResult = {
'영업요율' : 2437
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1695});
     __hpasRuleResult = {
'영업요율' : 2410
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1696});
     __hpasRuleResult = {
'영업요율' : 2383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1697});
     __hpasRuleResult = {
'영업요율' : 2425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1698});
     __hpasRuleResult = {
'영업요율' : 2469
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1699});
     __hpasRuleResult = {
'영업요율' : 2634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1700});
     __hpasRuleResult = {
'영업요율' : 2512
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1701});
     __hpasRuleResult = {
'영업요율' : 2547
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1702});
     __hpasRuleResult = {
'영업요율' : 2583
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1703});
     __hpasRuleResult = {
'영업요율' : 2742
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1704});
     __hpasRuleResult = {
'영업요율' : 2902
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1705});
     __hpasRuleResult = {
'영업요율' : 3081
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1706});
     __hpasRuleResult = {
'영업요율' : 3283
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1707});
     __hpasRuleResult = {
'영업요율' : 3375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1708});
     __hpasRuleResult = {
'영업요율' : 3408
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1709});
     __hpasRuleResult = {
'영업요율' : 3483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1710});
     __hpasRuleResult = {
'영업요율' : 2554
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1711});
     __hpasRuleResult = {
'영업요율' : 3590
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1712});
     __hpasRuleResult = {
'영업요율' : 3717
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1713});
     __hpasRuleResult = {
'영업요율' : 3866
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1714});
     __hpasRuleResult = {
'영업요율' : 4024
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1715});
     __hpasRuleResult = {
'영업요율' : 4178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1716});
     __hpasRuleResult = {
'영업요율' : 4322
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1717});
     __hpasRuleResult = {
'영업요율' : 4469
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1718});
     __hpasRuleResult = {
'영업요율' : 4630
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1719});
     __hpasRuleResult = {
'영업요율' : 4849
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1720});
     __hpasRuleResult = {
'영업요율' : 5164
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1721});
     __hpasRuleResult = {
'영업요율' : 2439
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1722});
     __hpasRuleResult = {
'영업요율' : 5571
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1723});
     __hpasRuleResult = {
'영업요율' : 5998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1724});
     __hpasRuleResult = {
'영업요율' : 6298
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1725});
     __hpasRuleResult = {
'영업요율' : 6525
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1726});
     __hpasRuleResult = {
'영업요율' : 6605
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1727});
     __hpasRuleResult = {
'영업요율' : 6503
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1728});
     __hpasRuleResult = {
'영업요율' : 6280
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1729});
     __hpasRuleResult = {
'영업요율' : 6078
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1730});
     __hpasRuleResult = {
'영업요율' : 5963
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1731});
     __hpasRuleResult = {
'영업요율' : 5927
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1732});
     __hpasRuleResult = {
'영업요율' : 2339
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1733});
     __hpasRuleResult = {
'영업요율' : 5922
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1734});
     __hpasRuleResult = {
'영업요율' : 5915
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1735});
     __hpasRuleResult = {
'영업요율' : 5902
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1736});
     __hpasRuleResult = {
'영업요율' : 5875
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1737});
     __hpasRuleResult = {
'영업요율' : 5820
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1738});
     __hpasRuleResult = {
'영업요율' : 5725
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1739});
     __hpasRuleResult = {
'영업요율' : 5600
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1740});
     __hpasRuleResult = {
'영업요율' : 5495
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1741});
     __hpasRuleResult = {
'영업요율' : 5434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1742});
     __hpasRuleResult = {
'영업요율' : 5408
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1743});
     __hpasRuleResult = {
'영업요율' : 2200
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1744});
     __hpasRuleResult = {
'영업요율' : 5402
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1745});
     __hpasRuleResult = {
'영업요율' : 5395
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1746});
     __hpasRuleResult = {
'영업요율' : 5366
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1747});
     __hpasRuleResult = {
'영업요율' : 5324
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1748});
     __hpasRuleResult = {
'영업요율' : 5269
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1749});
     __hpasRuleResult = {
'영업요율' : 5205
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1750});
     __hpasRuleResult = {
'영업요율' : 5134
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1751});
     __hpasRuleResult = {
'영업요율' : 5052
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1752});
     __hpasRuleResult = {
'영업요율' : 4964
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1753});
     __hpasRuleResult = {
'영업요율' : 4866
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1754});
     __hpasRuleResult = {
'영업요율' : 2281
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1755});
     __hpasRuleResult = {
'영업요율' : 4749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1756});
     __hpasRuleResult = {
'영업요율' : 4608
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1757});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1758});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1759});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1760});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1761});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1762});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1763});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1764});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1765});
     __hpasRuleResult = {
'영업요율' : 2308
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1766});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1767});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1768});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1769});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1770});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1771});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1772});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1773});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1774});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 200000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1775});
     __hpasRuleResult = {
'영업요율' : 4588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1776});
     __hpasRuleResult = {
'영업요율' : 1273
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1777});
     __hpasRuleResult = {
'영업요율' : 2588
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1778});
     __hpasRuleResult = {
'영업요율' : 5383
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1779});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1780});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1781});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1782});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1783});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1784});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1785});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1786});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1787});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1788});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1789});
     __hpasRuleResult = {
'영업요율' : 5683
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1790});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1791});
     __hpasRuleResult = {
'영업요율' : 5873
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1792});
     __hpasRuleResult = {
'영업요율' : 6058
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1793});
     __hpasRuleResult = {
'영업요율' : 6246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1794});
     __hpasRuleResult = {
'영업요율' : 6415
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1795});
     __hpasRuleResult = {
'영업요율' : 6564
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1796});
     __hpasRuleResult = {
'영업요율' : 6115
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1797});
     __hpasRuleResult = {
'영업요율' : 5775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1798});
     __hpasRuleResult = {
'영업요율' : 5515
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1799});
     __hpasRuleResult = {
'영업요율' : 3898
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1800});
     __hpasRuleResult = {
'영업요율' : 5266
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1801});
     __hpasRuleResult = {
'영업요율' : 5005
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1802});
     __hpasRuleResult = {
'영업요율' : 4754
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1803});
     __hpasRuleResult = {
'영업요율' : 4641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1804});
     __hpasRuleResult = {
'영업요율' : 4775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1805});
     __hpasRuleResult = {
'영업요율' : 5175
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1806});
     __hpasRuleResult = {
'영업요율' : 5700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1807});
     __hpasRuleResult = {
'영업요율' : 6066
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1808});
     __hpasRuleResult = {
'영업요율' : 6086
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1809});
     __hpasRuleResult = {
'영업요율' : 6090
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1810});
     __hpasRuleResult = {
'영업요율' : 4649
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1811});
     __hpasRuleResult = {
'영업요율' : 6075
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1812});
     __hpasRuleResult = {
'영업요율' : 6042
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1813});
     __hpasRuleResult = {
'영업요율' : 5990
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1814});
     __hpasRuleResult = {
'영업요율' : 5998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1815});
     __hpasRuleResult = {
'영업요율' : 5893
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1816});
     __hpasRuleResult = {
'영업요율' : 5775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1817});
     __hpasRuleResult = {
'영업요율' : 5641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1818});
     __hpasRuleResult = {
'영업요율' : 5514
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1819});
     __hpasRuleResult = {
'영업요율' : 5403
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1820});
     __hpasRuleResult = {
'영업요율' : 5325
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1821});
     __hpasRuleResult = {
'영업요율' : 4768
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1822});
     __hpasRuleResult = {
'영업요율' : 5278
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1823});
     __hpasRuleResult = {
'영업요율' : 5251
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1824});
     __hpasRuleResult = {
'영업요율' : 5230
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1825});
     __hpasRuleResult = {
'영업요율' : 5197
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1826});
     __hpasRuleResult = {
'영업요율' : 5137
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1827});
     __hpasRuleResult = {
'영업요율' : 5047
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1828});
     __hpasRuleResult = {
'영업요율' : 4951
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1829});
     __hpasRuleResult = {
'영업요율' : 4869
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1830});
     __hpasRuleResult = {
'영업요율' : 5136
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1831});
     __hpasRuleResult = {
'영업요율' : 5222
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1832});
     __hpasRuleResult = {
'영업요율' : 4790
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1833});
     __hpasRuleResult = {
'영업요율' : 5252
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1834});
     __hpasRuleResult = {
'영업요율' : 5307
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1835});
     __hpasRuleResult = {
'영업요율' : 5371
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1836});
     __hpasRuleResult = {
'영업요율' : 5441
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1837});
     __hpasRuleResult = {
'영업요율' : 5508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1838});
     __hpasRuleResult = {
'영업요율' : 5571
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1839});
     __hpasRuleResult = {
'영업요율' : 5619
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1840});
     __hpasRuleResult = {
'영업요율' : 5641
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1841});
     __hpasRuleResult = {
'영업요율' : 5619
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1842});
     __hpasRuleResult = {
'영업요율' : 5546
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1843});
     __hpasRuleResult = {
'영업요율' : 4466
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1844});
     __hpasRuleResult = {
'영업요율' : 5427
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1845});
     __hpasRuleResult = {
'영업요율' : 5283
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1846});
     __hpasRuleResult = {
'영업요율' : 5142
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1847});
     __hpasRuleResult = {
'영업요율' : 5037
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1848});
     __hpasRuleResult = {
'영업요율' : 4973
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1849});
     __hpasRuleResult = {
'영업요율' : 4932
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1850});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1851});
     __hpasRuleResult = {
'영업요율' : 4886
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1852});
     __hpasRuleResult = {
'영업요율' : 4875
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1853});
     __hpasRuleResult = {
'영업요율' : 4863
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1854});
     __hpasRuleResult = {
'영업요율' : 4061
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1855});
     __hpasRuleResult = {
'영업요율' : 4859
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1856});
     __hpasRuleResult = {
'영업요율' : 4858
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1857});
     __hpasRuleResult = {
'영업요율' : 4852
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1858});
     __hpasRuleResult = {
'영업요율' : 4849
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1859});
     __hpasRuleResult = {
'영업요율' : 4842
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1860});
     __hpasRuleResult = {
'영업요율' : 4832
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1861});
     __hpasRuleResult = {
'영업요율' : 4822
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1862});
     __hpasRuleResult = {
'영업요율' : 4808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1863});
     __hpasRuleResult = {
'영업요율' : 4791
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1864});
     __hpasRuleResult = {
'영업요율' : 4769
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1865});
     __hpasRuleResult = {
'영업요율' : 4488
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1866});
     __hpasRuleResult = {
'영업요율' : 4749
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1867});
     __hpasRuleResult = {
'영업요율' : 4725
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1868});
     __hpasRuleResult = {
'영업요율' : 4703
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1869});
     __hpasRuleResult = {
'영업요율' : 4730
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1870});
     __hpasRuleResult = {
'영업요율' : 4754
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1871});
     __hpasRuleResult = {
'영업요율' : 4781
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1872});
     __hpasRuleResult = {
'영업요율' : 4808
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1873});
     __hpasRuleResult = {
'영업요율' : 4834
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1874});
     __hpasRuleResult = {
'영업요율' : 4849
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1875});
     __hpasRuleResult = {
'영업요율' : 4863
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1876});
     __hpasRuleResult = {
'영업요율' : 4983
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1877});
     __hpasRuleResult = {
'영업요율' : 4876
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1878});
     __hpasRuleResult = {
'영업요율' : 4888
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1879});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1880});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1881});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1882});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1883});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1884});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1885});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1886});
     __hpasRuleResult = {
'영업요율' : 4907
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1887});
     __hpasRuleResult = {
'영업요율' : 919
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1888});
     __hpasRuleResult = {
'영업요율' : 1603
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1889});
     __hpasRuleResult = {
'영업요율' : 2332
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1890});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1891});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1892});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1893});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1894});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1895});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1896});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1897});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1898});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1899});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1900});
     __hpasRuleResult = {
'영업요율' : 2259
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1901});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1902});
     __hpasRuleResult = {
'영업요율' : 2130
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1903});
     __hpasRuleResult = {
'영업요율' : 2149
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1904});
     __hpasRuleResult = {
'영업요율' : 2169
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1905});
     __hpasRuleResult = {
'영업요율' : 2175
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1906});
     __hpasRuleResult = {
'영업요율' : 2171
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1907});
     __hpasRuleResult = {
'영업요율' : 2169
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1908});
     __hpasRuleResult = {
'영업요율' : 2246
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1909});
     __hpasRuleResult = {
'영업요율' : 2320
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1910});
     __hpasRuleResult = {
'영업요율' : 2334
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1911});
     __hpasRuleResult = {
'영업요율' : 2386
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1912});
     __hpasRuleResult = {
'영업요율' : 2439
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1913});
     __hpasRuleResult = {
'영업요율' : 2483
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1914});
     __hpasRuleResult = {
'영업요율' : 2493
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1915});
     __hpasRuleResult = {
'영업요율' : 2495
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1916});
     __hpasRuleResult = {
'영업요율' : 2485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1917});
     __hpasRuleResult = {
'영업요율' : 2458
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1918});
     __hpasRuleResult = {
'영업요율' : 2429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1919});
     __hpasRuleResult = {
'영업요율' : 2475
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1920});
     __hpasRuleResult = {
'영업요율' : 2520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1921});
     __hpasRuleResult = {
'영업요율' : 2686
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1922});
     __hpasRuleResult = {
'영업요율' : 2561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1923});
     __hpasRuleResult = {
'영업요율' : 2598
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1924});
     __hpasRuleResult = {
'영업요율' : 2634
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1925});
     __hpasRuleResult = {
'영업요율' : 2797
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1926});
     __hpasRuleResult = {
'영업요율' : 2959
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1927});
     __hpasRuleResult = {
'영업요율' : 3144
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1928});
     __hpasRuleResult = {
'영업요율' : 3347
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1929});
     __hpasRuleResult = {
'영업요율' : 3442
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1930});
     __hpasRuleResult = {
'영업요율' : 3478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1931});
     __hpasRuleResult = {
'영업요율' : 3551
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1932});
     __hpasRuleResult = {
'영업요율' : 2605
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1933});
     __hpasRuleResult = {
'영업요율' : 3659
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1934});
     __hpasRuleResult = {
'영업요율' : 3790
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1935});
     __hpasRuleResult = {
'영업요율' : 3942
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1936});
     __hpasRuleResult = {
'영업요율' : 4103
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1937});
     __hpasRuleResult = {
'영업요율' : 4263
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1938});
     __hpasRuleResult = {
'영업요율' : 4408
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1939});
     __hpasRuleResult = {
'영업요율' : 4558
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1940});
     __hpasRuleResult = {
'영업요율' : 4720
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1941});
     __hpasRuleResult = {
'영업요율' : 4944
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1942});
     __hpasRuleResult = {
'영업요율' : 5268
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1943});
     __hpasRuleResult = {
'영업요율' : 2488
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1944});
     __hpasRuleResult = {
'영업요율' : 5681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1945});
     __hpasRuleResult = {
'영업요율' : 6119
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1946});
     __hpasRuleResult = {
'영업요율' : 6425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1947});
     __hpasRuleResult = {
'영업요율' : 6656
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1948});
     __hpasRuleResult = {
'영업요율' : 6736
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1949});
     __hpasRuleResult = {
'영업요율' : 6632
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1950});
     __hpasRuleResult = {
'영업요율' : 6405
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1951});
     __hpasRuleResult = {
'영업요율' : 6198
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1952});
     __hpasRuleResult = {
'영업요율' : 6081
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1953});
     __hpasRuleResult = {
'영업요율' : 6046
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1954});
     __hpasRuleResult = {
'영업요율' : 2386
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1955});
     __hpasRuleResult = {
'영업요율' : 6039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1956});
     __hpasRuleResult = {
'영업요율' : 6032
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1957});
     __hpasRuleResult = {
'영업요율' : 6020
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1958});
     __hpasRuleResult = {
'영업요율' : 5993
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1959});
     __hpasRuleResult = {
'영업요율' : 5937
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1960});
     __hpasRuleResult = {
'영업요율' : 5839
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1961});
     __hpasRuleResult = {
'영업요율' : 5714
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1962});
     __hpasRuleResult = {
'영업요율' : 5605
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1963});
     __hpasRuleResult = {
'영업요율' : 5542
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1964});
     __hpasRuleResult = {
'영업요율' : 5515
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1965});
     __hpasRuleResult = {
'영업요율' : 2244
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1966});
     __hpasRuleResult = {
'영업요율' : 5508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1967});
     __hpasRuleResult = {
'영업요율' : 5503
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1968});
     __hpasRuleResult = {
'영업요율' : 5473
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1969});
     __hpasRuleResult = {
'영업요율' : 5429
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1970});
     __hpasRuleResult = {
'영업요율' : 5375
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1971});
     __hpasRuleResult = {
'영업요율' : 5308
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1972});
     __hpasRuleResult = {
'영업요율' : 5236
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1973});
     __hpasRuleResult = {
'영업요율' : 5152
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1974});
     __hpasRuleResult = {
'영업요율' : 5064
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1975});
     __hpasRuleResult = {
'영업요율' : 4963
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1976});
     __hpasRuleResult = {
'영업요율' : 2325
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1977});
     __hpasRuleResult = {
'영업요율' : 4844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1978});
     __hpasRuleResult = {
'영업요율' : 4700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1979});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1980});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1981});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1982});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1983});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1984});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1985});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1986});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1987});
     __hpasRuleResult = {
'영업요율' : 2354
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1988});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1989});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1990});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1991});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1992});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1993});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1994});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1995});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1996});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 250000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1997});
     __hpasRuleResult = {
'영업요율' : 4681
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1998});
     __hpasRuleResult = {
'영업요율' : 727
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:1999});
     __hpasRuleResult = {
'영업요율' : 1476
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2000});
     __hpasRuleResult = {
'영업요율' : 3071
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2001});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2002});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2003});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2004});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2005});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2006});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2007});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2008});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2009});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2010});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2011});
     __hpasRuleResult = {
'영업요율' : 3242
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2012});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2013});
     __hpasRuleResult = {
'영업요율' : 3351
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2014});
     __hpasRuleResult = {
'영업요율' : 3456
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2015});
     __hpasRuleResult = {
'영업요율' : 3563
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2016});
     __hpasRuleResult = {
'영업요율' : 3661
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2017});
     __hpasRuleResult = {
'영업요율' : 3746
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2018});
     __hpasRuleResult = {
'영업요율' : 3490
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2019});
     __hpasRuleResult = {
'영업요율' : 3293
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2020});
     __hpasRuleResult = {
'영업요율' : 3147
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2021});
     __hpasRuleResult = {
'영업요율' : 2225
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2022});
     __hpasRuleResult = {
'영업요율' : 3005
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2023});
     __hpasRuleResult = {
'영업요율' : 2854
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2024});
     __hpasRuleResult = {
'영업요율' : 2714
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2025});
     __hpasRuleResult = {
'영업요율' : 2647
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2026});
     __hpasRuleResult = {
'영업요율' : 2725
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2027});
     __hpasRuleResult = {
'영업요율' : 2953
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2028});
     __hpasRuleResult = {
'영업요율' : 3251
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2029});
     __hpasRuleResult = {
'영업요율' : 3459
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2030});
     __hpasRuleResult = {
'영업요율' : 3475
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2031});
     __hpasRuleResult = {
'영업요율' : 3476
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2032});
     __hpasRuleResult = {
'영업요율' : 2653
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2033});
     __hpasRuleResult = {
'영업요율' : 3464
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2034});
     __hpasRuleResult = {
'영업요율' : 3447
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2035});
     __hpasRuleResult = {
'영업요율' : 3415
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2036});
     __hpasRuleResult = {
'영업요율' : 3424
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2037});
     __hpasRuleResult = {
'영업요율' : 3363
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2038});
     __hpasRuleResult = {
'영업요율' : 3293
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2039});
     __hpasRuleResult = {
'영업요율' : 3219
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2040});
     __hpasRuleResult = {
'영업요율' : 3146
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2041});
     __hpasRuleResult = {
'영업요율' : 3081
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2042});
     __hpasRuleResult = {
'영업요율' : 3039
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2043});
     __hpasRuleResult = {
'영업요율' : 2722
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2044});
     __hpasRuleResult = {
'영업요율' : 3010
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2045});
     __hpasRuleResult = {
'영업요율' : 2997
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2046});
     __hpasRuleResult = {
'영업요율' : 2985
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2047});
     __hpasRuleResult = {
'영업요율' : 2964
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2048});
     __hpasRuleResult = {
'영업요율' : 2930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2049});
     __hpasRuleResult = {
'영업요율' : 2881
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2050});
     __hpasRuleResult = {
'영업요율' : 2824
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2051});
     __hpasRuleResult = {
'영업요율' : 2780
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2052});
     __hpasRuleResult = {
'영업요율' : 2930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2053});
     __hpasRuleResult = {
'영업요율' : 2978
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2054});
     __hpasRuleResult = {
'영업요율' : 2732
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2055});
     __hpasRuleResult = {
'영업요율' : 2998
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2056});
     __hpasRuleResult = {
'영업요율' : 3027
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2057});
     __hpasRuleResult = {
'영업요율' : 3064
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2058});
     __hpasRuleResult = {
'영업요율' : 3105
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2059});
     __hpasRuleResult = {
'영업요율' : 3141
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2060});
     __hpasRuleResult = {
'영업요율' : 3178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2061});
     __hpasRuleResult = {
'영업요율' : 3207
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2062});
     __hpasRuleResult = {
'영업요율' : 3219
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2063});
     __hpasRuleResult = {
'영업요율' : 3207
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2064});
     __hpasRuleResult = {
'영업요율' : 3164
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2065});
     __hpasRuleResult = {
'영업요율' : 2547
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2066});
     __hpasRuleResult = {
'영업요율' : 3098
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2067});
     __hpasRuleResult = {
'영업요율' : 3014
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2068});
     __hpasRuleResult = {
'영업요율' : 2936
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2069});
     __hpasRuleResult = {
'영업요율' : 2875
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2070});
     __hpasRuleResult = {
'영업요율' : 2837
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2071});
     __hpasRuleResult = {
'영업요율' : 2814
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2072});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2073});
     __hpasRuleResult = {
'영업요율' : 2788
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2074});
     __hpasRuleResult = {
'영업요율' : 2781
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2075});
     __hpasRuleResult = {
'영업요율' : 2775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2076});
     __hpasRuleResult = {
'영업요율' : 2317
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2077});
     __hpasRuleResult = {
'영업요율' : 2773
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2078});
     __hpasRuleResult = {
'영업요율' : 2771
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2079});
     __hpasRuleResult = {
'영업요율' : 2768
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2080});
     __hpasRuleResult = {
'영업요율' : 2766
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2081});
     __hpasRuleResult = {
'영업요율' : 2763
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2082});
     __hpasRuleResult = {
'영업요율' : 2756
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2083});
     __hpasRuleResult = {
'영업요율' : 2751
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2084});
     __hpasRuleResult = {
'영업요율' : 2742
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2085});
     __hpasRuleResult = {
'영업요율' : 2734
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2086});
     __hpasRuleResult = {
'영업요율' : 2722
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2087});
     __hpasRuleResult = {
'영업요율' : 2561
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2088});
     __hpasRuleResult = {
'영업요율' : 2710
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2089});
     __hpasRuleResult = {
'영업요율' : 2697
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2090});
     __hpasRuleResult = {
'영업요율' : 2683
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2091});
     __hpasRuleResult = {
'영업요율' : 2698
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2092});
     __hpasRuleResult = {
'영업요율' : 2714
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2093});
     __hpasRuleResult = {
'영업요율' : 2729
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2094});
     __hpasRuleResult = {
'영업요율' : 2742
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2095});
     __hpasRuleResult = {
'영업요율' : 2758
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2096});
     __hpasRuleResult = {
'영업요율' : 2766
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2097});
     __hpasRuleResult = {
'영업요율' : 2775
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2098});
     __hpasRuleResult = {
'영업요율' : 2844
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2099});
     __hpasRuleResult = {
'영업요율' : 2783
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2100});
     __hpasRuleResult = {
'영업요율' : 2790
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2101});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2102});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2103});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2104});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2105});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2106});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2107});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2108});
     __hpasRuleResult = {
'영업요율' : 2798
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2109});
     __hpasRuleResult = {
'영업요율' : 531
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2110});
     __hpasRuleResult = {
'영업요율' : 925
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2111});
     __hpasRuleResult = {
'영업요율' : 1346
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2112});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2113});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2114});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2115});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2116});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2117});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2118});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2119});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2120});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2121});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2122});
     __hpasRuleResult = {
'영업요율' : 1303
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2123});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2124});
     __hpasRuleResult = {
'영업요율' : 1229
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2125});
     __hpasRuleResult = {
'영업요율' : 1241
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2126});
     __hpasRuleResult = {
'영업요율' : 1251
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2127});
     __hpasRuleResult = {
'영업요율' : 1254
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2128});
     __hpasRuleResult = {
'영업요율' : 1253
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2129});
     __hpasRuleResult = {
'영업요율' : 1251
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2130});
     __hpasRuleResult = {
'영업요율' : 1297
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2131});
     __hpasRuleResult = {
'영업요율' : 1341
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2132});
     __hpasRuleResult = {
'영업요율' : 1347
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2133});
     __hpasRuleResult = {
'영업요율' : 1376
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2134});
     __hpasRuleResult = {
'영업요율' : 1407
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2135});
     __hpasRuleResult = {
'영업요율' : 1432
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2136});
     __hpasRuleResult = {
'영업요율' : 1437
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2137});
     __hpasRuleResult = {
'영업요율' : 1439
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2138});
     __hpasRuleResult = {
'영업요율' : 1434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2139});
     __hpasRuleResult = {
'영업요율' : 1419
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2140});
     __hpasRuleResult = {
'영업요율' : 1403
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2141});
     __hpasRuleResult = {
'영업요율' : 1427
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2142});
     __hpasRuleResult = {
'영업요율' : 1454
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2143});
     __hpasRuleResult = {
'영업요율' : 1549
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2144});
     __hpasRuleResult = {
'영업요율' : 1478
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2145});
     __hpasRuleResult = {
'영업요율' : 1498
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2146});
     __hpasRuleResult = {
'영업요율' : 1520
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2147});
     __hpasRuleResult = {
'영업요율' : 1614
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2148});
     __hpasRuleResult = {
'영업요율' : 1707
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2149});
     __hpasRuleResult = {
'영업요율' : 1814
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2150});
     __hpasRuleResult = {
'영업요율' : 1930
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2151});
     __hpasRuleResult = {
'영업요율' : 1985
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2152});
     __hpasRuleResult = {
'영업요율' : 2007
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2153});
     __hpasRuleResult = {
'영업요율' : 2047
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2154});
     __hpasRuleResult = {
'영업요율' : 1502
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2155});
     __hpasRuleResult = {
'영업요율' : 2112
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2156});
     __hpasRuleResult = {
'영업요율' : 2186
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2157});
     __hpasRuleResult = {
'영업요율' : 2275
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2158});
     __hpasRuleResult = {
'영업요율' : 2366
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2159});
     __hpasRuleResult = {
'영업요율' : 2459
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2160});
     __hpasRuleResult = {
'영업요율' : 2544
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2161});
     __hpasRuleResult = {
'영업요율' : 2629
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2162});
     __hpasRuleResult = {
'영업요율' : 2724
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2163});
     __hpasRuleResult = {
'영업요율' : 2853
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2164});
     __hpasRuleResult = {
'영업요율' : 3041
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2165});
     __hpasRuleResult = {
'영업요율' : 1434
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2166});
     __hpasRuleResult = {
'영업요율' : 3278
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2167});
     __hpasRuleResult = {
'영업요율' : 3530
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2168});
     __hpasRuleResult = {
'영업요율' : 3707
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2169});
     __hpasRuleResult = {
'영업요율' : 3839
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2170});
     __hpasRuleResult = {
'영업요율' : 3885
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2171});
     __hpasRuleResult = {
'영업요율' : 3825
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2172});
     __hpasRuleResult = {
'영업요율' : 3695
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2173});
     __hpasRuleResult = {
'영업요율' : 3575
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2174});
     __hpasRuleResult = {
'영업요율' : 3508
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2175});
     __hpasRuleResult = {
'영업요율' : 3488
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2176});
     __hpasRuleResult = {
'영업요율' : 1376
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2177});
     __hpasRuleResult = {
'영업요율' : 3485
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2178});
     __hpasRuleResult = {
'영업요율' : 3481
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2179});
     __hpasRuleResult = {
'영업요율' : 3473
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2180});
     __hpasRuleResult = {
'영업요율' : 3456
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2181});
     __hpasRuleResult = {
'영업요율' : 3425
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2182});
     __hpasRuleResult = {
'영업요율' : 3369
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2183});
     __hpasRuleResult = {
'영업요율' : 3295
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2184});
     __hpasRuleResult = {
'영업요율' : 3232
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2185});
     __hpasRuleResult = {
'영업요율' : 3197
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2186});
     __hpasRuleResult = {
'영업요율' : 3181
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2187});
     __hpasRuleResult = {
'영업요율' : 1295
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2188});
     __hpasRuleResult = {
'영업요율' : 3178
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2189});
     __hpasRuleResult = {
'영업요율' : 3175
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2190});
     __hpasRuleResult = {
'영업요율' : 3158
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2191});
     __hpasRuleResult = {
'영업요율' : 3132
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2192});
     __hpasRuleResult = {
'영업요율' : 3102
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2193});
     __hpasRuleResult = {
'영업요율' : 3063
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2194});
     __hpasRuleResult = {
'영업요율' : 3020
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2195});
     __hpasRuleResult = {
'영업요율' : 2973
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2196});
     __hpasRuleResult = {
'영업요율' : 2920
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2197});
     __hpasRuleResult = {
'영업요율' : 2863
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2198});
     __hpasRuleResult = {
'영업요율' : 1342
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2199});
     __hpasRuleResult = {
'영업요율' : 2793
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2200});
     __hpasRuleResult = {
'영업요율' : 2712
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2201});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2202});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2203});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2204});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2205});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2206});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2207});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2208});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2209});
     __hpasRuleResult = {
'영업요율' : 1359
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2210});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2211});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2212});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2213});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2214});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2215});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2216});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2217});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2218});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    else if(((실손의료비보험가입유형 == '02'))
    && ((가입금액 == 50000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11422"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해해외여행기본실손의료비_상해통원_외래__CFA11422_FA00045009_001' , row:2219});
     __hpasRuleResult = {
'영업요율' : 2700
}
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};