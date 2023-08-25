function(단일요율적용여부,상해급수코드,가입금액,성별코드,담보코드,보험연령 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001',ruleName:'일반_상해_특약형_실손의료비(3대비급여)_CFA11806_FA00034003_개인',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'단일요율적용여부:'+JSON.stringify(단일요율적용여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'단일요율적용여부' , 'value':JSON.stringify(단일요율적용여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상해급수코드:'+JSON.stringify(상해급수코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상해급수코드' , 'value':JSON.stringify(상해급수코드) } );}
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


    // Compiler Version 1 , Created : 2023-08-24 18:09:09
    var canSheetNext = true
    if(canSheetNext) {
    if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:0});
     __hpasRuleResult = {
'영업요율' : 18477
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:1});
     __hpasRuleResult = {
'영업요율' : 13176
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:2});
     __hpasRuleResult = {
'영업요율' : 6253
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:3});
     __hpasRuleResult = {
'영업요율' : 56240
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:4});
     __hpasRuleResult = {
'영업요율' : 56324
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:5});
     __hpasRuleResult = {
'영업요율' : 56405
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:6});
     __hpasRuleResult = {
'영업요율' : 56483
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:7});
     __hpasRuleResult = {
'영업요율' : 56561
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:8});
     __hpasRuleResult = {
'영업요율' : 56636
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:9});
     __hpasRuleResult = {
'영업요율' : 56708
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:10});
     __hpasRuleResult = {
'영업요율' : 56779
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:11});
     __hpasRuleResult = {
'영업요율' : 56850
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:12});
     __hpasRuleResult = {
'영업요율' : 56917
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:13});
     __hpasRuleResult = {
'영업요율' : 6199
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:14});
     __hpasRuleResult = {
'영업요율' : 56986
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:15});
     __hpasRuleResult = {
'영업요율' : 6215
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:16});
     __hpasRuleResult = {
'영업요율' : 6417
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:17});
     __hpasRuleResult = {
'영업요율' : 6730
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:18});
     __hpasRuleResult = {
'영업요율' : 7143
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:19});
     __hpasRuleResult = {
'영업요율' : 7598
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:20});
     __hpasRuleResult = {
'영업요율' : 8075
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:21});
     __hpasRuleResult = {
'영업요율' : 8425
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:22});
     __hpasRuleResult = {
'영업요율' : 8643
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:23});
     __hpasRuleResult = {
'영업요율' : 9355
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:24});
     __hpasRuleResult = {
'영업요율' : 8784
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:25});
     __hpasRuleResult = {
'영업요율' : 8913
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:26});
     __hpasRuleResult = {
'영업요율' : 9078
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:27});
     __hpasRuleResult = {
'영업요율' : 9294
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:28});
     __hpasRuleResult = {
'영업요율' : 9515
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:29});
     __hpasRuleResult = {
'영업요율' : 9724
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:30});
     __hpasRuleResult = {
'영업요율' : 9931
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:31});
     __hpasRuleResult = {
'영업요율' : 10134
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:32});
     __hpasRuleResult = {
'영업요율' : 10420
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:33});
     __hpasRuleResult = {
'영업요율' : 10758
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:34});
     __hpasRuleResult = {
'영업요율' : 6657
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:35});
     __hpasRuleResult = {
'영업요율' : 11140
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:36});
     __hpasRuleResult = {
'영업요율' : 11535
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:37});
     __hpasRuleResult = {
'영업요율' : 11923
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:38});
     __hpasRuleResult = {
'영업요율' : 12318
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:39});
     __hpasRuleResult = {
'영업요율' : 12692
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:40});
     __hpasRuleResult = {
'영업요율' : 13068
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:41});
     __hpasRuleResult = {
'영업요율' : 13454
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:42});
     __hpasRuleResult = {
'영업요율' : 13825
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:43});
     __hpasRuleResult = {
'영업요율' : 14119
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:44});
     __hpasRuleResult = {
'영업요율' : 14396
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:45});
     __hpasRuleResult = {
'영업요율' : 6128
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:46});
     __hpasRuleResult = {
'영업요율' : 14688
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:47});
     __hpasRuleResult = {
'영업요율' : 15038
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:48});
     __hpasRuleResult = {
'영업요율' : 15484
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:49});
     __hpasRuleResult = {
'영업요율' : 16055
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:50});
     __hpasRuleResult = {
'영업요율' : 16755
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:51});
     __hpasRuleResult = {
'영업요율' : 17558
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:52});
     __hpasRuleResult = {
'영업요율' : 18416
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:53});
     __hpasRuleResult = {
'영업요율' : 19281
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:54});
     __hpasRuleResult = {
'영업요율' : 20123
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:55});
     __hpasRuleResult = {
'영업요율' : 21033
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:56});
     __hpasRuleResult = {
'영업요율' : 5435
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:57});
     __hpasRuleResult = {
'영업요율' : 22039
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:58});
     __hpasRuleResult = {
'영업요율' : 23142
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:59});
     __hpasRuleResult = {
'영업요율' : 24310
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:60});
     __hpasRuleResult = {
'영업요율' : 25525
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:61});
     __hpasRuleResult = {
'영업요율' : 26793
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:62});
     __hpasRuleResult = {
'영업요율' : 28118
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:63});
     __hpasRuleResult = {
'영업요율' : 29477
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:64});
     __hpasRuleResult = {
'영업요율' : 30780
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:65});
     __hpasRuleResult = {
'영업요율' : 31989
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:66});
     __hpasRuleResult = {
'영업요율' : 33121
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:67});
     __hpasRuleResult = {
'영업요율' : 5463
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:68});
     __hpasRuleResult = {
'영업요율' : 34230
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:69});
     __hpasRuleResult = {
'영업요율' : 35377
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:70});
     __hpasRuleResult = {
'영업요율' : 36573
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:71});
     __hpasRuleResult = {
'영업요율' : 37705
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:72});
     __hpasRuleResult = {
'영업요율' : 37916
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:73});
     __hpasRuleResult = {
'영업요율' : 38512
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:74});
     __hpasRuleResult = {
'영업요율' : 40187
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:75});
     __hpasRuleResult = {
'영업요율' : 41897
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:76});
     __hpasRuleResult = {
'영업요율' : 42966
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:77});
     __hpasRuleResult = {
'영업요율' : 44078
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:78});
     __hpasRuleResult = {
'영업요율' : 5855
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:79});
     __hpasRuleResult = {
'영업요율' : 45219
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:80});
     __hpasRuleResult = {
'영업요율' : 46376
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:81});
     __hpasRuleResult = {
'영업요율' : 47475
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:82});
     __hpasRuleResult = {
'영업요율' : 47977
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:83});
     __hpasRuleResult = {
'영업요율' : 48428
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:84});
     __hpasRuleResult = {
'영업요율' : 48867
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:85});
     __hpasRuleResult = {
'영업요율' : 49298
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:86});
     __hpasRuleResult = {
'영업요율' : 49714
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:87});
     __hpasRuleResult = {
'영업요율' : 50112
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:88});
     __hpasRuleResult = {
'영업요율' : 50491
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:89});
     __hpasRuleResult = {
'영업요율' : 6182
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:90});
     __hpasRuleResult = {
'영업요율' : 50855
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:91});
     __hpasRuleResult = {
'영업요율' : 51239
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:92});
     __hpasRuleResult = {
'영업요율' : 51858
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:93});
     __hpasRuleResult = {
'영업요율' : 52506
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:94});
     __hpasRuleResult = {
'영업요율' : 53087
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:95});
     __hpasRuleResult = {
'영업요율' : 53554
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:96});
     __hpasRuleResult = {
'영업요율' : 53887
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:97});
     __hpasRuleResult = {
'영업요율' : 54107
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:98});
     __hpasRuleResult = {
'영업요율' : 54367
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:99});
     __hpasRuleResult = {
'영업요율' : 54656
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:100});
     __hpasRuleResult = {
'영업요율' : 6288
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:101});
     __hpasRuleResult = {
'영업요율' : 54935
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:102});
     __hpasRuleResult = {
'영업요율' : 55207
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:103});
     __hpasRuleResult = {
'영업요율' : 55471
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:104});
     __hpasRuleResult = {
'영업요율' : 55579
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:105});
     __hpasRuleResult = {
'영업요율' : 55684
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:106});
     __hpasRuleResult = {
'영업요율' : 55783
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:107});
     __hpasRuleResult = {
'영업요율' : 55880
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:108});
     __hpasRuleResult = {
'영업요율' : 55975
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:109});
     __hpasRuleResult = {
'영업요율' : 56066
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:110});
     __hpasRuleResult = {
'영업요율' : 56155
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:111});
     __hpasRuleResult = {
'영업요율' : 16926
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:112});
     __hpasRuleResult = {
'영업요율' : 11756
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:113});
     __hpasRuleResult = {
'영업요율' : 5107
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:114});
     __hpasRuleResult = {
'영업요율' : 68202
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:115});
     __hpasRuleResult = {
'영업요율' : 68311
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:116});
     __hpasRuleResult = {
'영업요율' : 68415
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:117});
     __hpasRuleResult = {
'영업요율' : 68519
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:118});
     __hpasRuleResult = {
'영업요율' : 68617
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:119});
     __hpasRuleResult = {
'영업요율' : 68713
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:120});
     __hpasRuleResult = {
'영업요율' : 68807
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:121});
     __hpasRuleResult = {
'영업요율' : 68900
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:122});
     __hpasRuleResult = {
'영업요율' : 68990
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:123});
     __hpasRuleResult = {
'영업요율' : 69077
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:124});
     __hpasRuleResult = {
'영업요율' : 4924
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:125});
     __hpasRuleResult = {
'영업요율' : 69167
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:126});
     __hpasRuleResult = {
'영업요율' : 4840
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:127});
     __hpasRuleResult = {
'영업요율' : 4902
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:128});
     __hpasRuleResult = {
'영업요율' : 5055
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:129});
     __hpasRuleResult = {
'영업요율' : 5296
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:130});
     __hpasRuleResult = {
'영업요율' : 5618
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:131});
     __hpasRuleResult = {
'영업요율' : 6026
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:132});
     __hpasRuleResult = {
'영업요율' : 6481
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:133});
     __hpasRuleResult = {
'영업요율' : 6973
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:134});
     __hpasRuleResult = {
'영업요율' : 7286
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:135});
     __hpasRuleResult = {
'영업요율' : 7491
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:136});
     __hpasRuleResult = {
'영업요율' : 8084
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:137});
     __hpasRuleResult = {
'영업요율' : 8729
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:138});
     __hpasRuleResult = {
'영업요율' : 9375
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:139});
     __hpasRuleResult = {
'영업요율' : 9963
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:140});
     __hpasRuleResult = {
'영업요율' : 10510
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:141});
     __hpasRuleResult = {
'영업요율' : 11034
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:142});
     __hpasRuleResult = {
'영업요율' : 11534
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:143});
     __hpasRuleResult = {
'영업요율' : 11876
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:144});
     __hpasRuleResult = {
'영업요율' : 12184
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:145});
     __hpasRuleResult = {
'영업요율' : 5423
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:146});
     __hpasRuleResult = {
'영업요율' : 12459
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:147});
     __hpasRuleResult = {
'영업요율' : 12719
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:148});
     __hpasRuleResult = {
'영업요율' : 12983
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:149});
     __hpasRuleResult = {
'영업요율' : 13414
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:150});
     __hpasRuleResult = {
'영업요율' : 13878
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:151});
     __hpasRuleResult = {
'영업요율' : 14389
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:152});
     __hpasRuleResult = {
'영업요율' : 14953
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:153});
     __hpasRuleResult = {
'영업요율' : 15555
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:154});
     __hpasRuleResult = {
'영업요율' : 16235
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:155});
     __hpasRuleResult = {
'영업요율' : 16981
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:156});
     __hpasRuleResult = {
'영업요율' : 4968
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:157});
     __hpasRuleResult = {
'영업요율' : 17770
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:158});
     __hpasRuleResult = {
'영업요율' : 18616
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:159});
     __hpasRuleResult = {
'영업요율' : 19563
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:160});
     __hpasRuleResult = {
'영업요율' : 20637
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:161});
     __hpasRuleResult = {
'영업요율' : 21872
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:162});
     __hpasRuleResult = {
'영업요율' : 23268
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:163});
     __hpasRuleResult = {
'영업요율' : 24754
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:164});
     __hpasRuleResult = {
'영업요율' : 26214
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:165});
     __hpasRuleResult = {
'영업요율' : 27633
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:166});
     __hpasRuleResult = {
'영업요율' : 29008
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:167});
     __hpasRuleResult = {
'영업요율' : 4824
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:168});
     __hpasRuleResult = {
'영업요율' : 30354
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:169});
     __hpasRuleResult = {
'영업요율' : 31641
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:170});
     __hpasRuleResult = {
'영업요율' : 32809
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:171});
     __hpasRuleResult = {
'영업요율' : 33855
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:172});
     __hpasRuleResult = {
'영업요율' : 34856
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:173});
     __hpasRuleResult = {
'영업요율' : 35895
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:174});
     __hpasRuleResult = {
'영업요율' : 36972
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:175});
     __hpasRuleResult = {
'영업요율' : 37959
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:176});
     __hpasRuleResult = {
'영업요율' : 38797
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:177});
     __hpasRuleResult = {
'영업요율' : 39459
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:178});
     __hpasRuleResult = {
'영업요율' : 4865
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:179});
     __hpasRuleResult = {
'영업요율' : 39790
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:180});
     __hpasRuleResult = {
'영업요율' : 40191
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:181});
     __hpasRuleResult = {
'영업요율' : 40906
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:182});
     __hpasRuleResult = {
'영업요율' : 41185
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:183});
     __hpasRuleResult = {
'영업요율' : 40127
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:184});
     __hpasRuleResult = {
'영업요율' : 38660
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:185});
     __hpasRuleResult = {
'영업요율' : 38003
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:186});
     __hpasRuleResult = {
'영업요율' : 39725
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:187});
     __hpasRuleResult = {
'영업요율' : 40462
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:188});
     __hpasRuleResult = {
'영업요율' : 41267
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:189});
     __hpasRuleResult = {
'영업요율' : 5082
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:190});
     __hpasRuleResult = {
'영업요율' : 42123
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:191});
     __hpasRuleResult = {
'영업요율' : 43008
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:192});
     __hpasRuleResult = {
'영업요율' : 43914
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:193});
     __hpasRuleResult = {
'영업요율' : 45086
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:194});
     __hpasRuleResult = {
'영업요율' : 46979
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:195});
     __hpasRuleResult = {
'영업요율' : 48957
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:196});
     __hpasRuleResult = {
'영업요율' : 50975
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:197});
     __hpasRuleResult = {
'영업요율' : 53003
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:198});
     __hpasRuleResult = {
'영업요율' : 55068
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:199});
     __hpasRuleResult = {
'영업요율' : 57264
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:200});
     __hpasRuleResult = {
'영업요율' : 5266
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:201});
     __hpasRuleResult = {
'영업요율' : 59802
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:202});
     __hpasRuleResult = {
'영업요율' : 62744
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:203});
     __hpasRuleResult = {
'영업요율' : 63585
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:204});
     __hpasRuleResult = {
'영업요율' : 64414
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:205});
     __hpasRuleResult = {
'영업요율' : 65158
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:206});
     __hpasRuleResult = {
'영업요율' : 65756
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:207});
     __hpasRuleResult = {
'영업요율' : 66188
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:208});
     __hpasRuleResult = {
'영업요율' : 66475
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:209});
     __hpasRuleResult = {
'영업요율' : 66660
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:210});
     __hpasRuleResult = {
'영업요율' : 66799
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:211});
     __hpasRuleResult = {
'영업요율' : 5261
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:212});
     __hpasRuleResult = {
'영업요율' : 66929
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:213});
     __hpasRuleResult = {
'영업요율' : 67066
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:214});
     __hpasRuleResult = {
'영업요율' : 67208
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:215});
     __hpasRuleResult = {
'영업요율' : 67348
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:216});
     __hpasRuleResult = {
'영업요율' : 67483
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:217});
     __hpasRuleResult = {
'영업요율' : 67614
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:218});
     __hpasRuleResult = {
'영업요율' : 67739
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:219});
     __hpasRuleResult = {
'영업요율' : 67861
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:220});
     __hpasRuleResult = {
'영업요율' : 67977
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '1'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:221});
     __hpasRuleResult = {
'영업요율' : 68092
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:222});
     __hpasRuleResult = {
'영업요율' : 18522
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:223});
     __hpasRuleResult = {
'영업요율' : 13278
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:224});
     __hpasRuleResult = {
'영업요율' : 6597
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:225});
     __hpasRuleResult = {
'영업요율' : 57376
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:226});
     __hpasRuleResult = {
'영업요율' : 57461
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:227});
     __hpasRuleResult = {
'영업요율' : 57545
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:228});
     __hpasRuleResult = {
'영업요율' : 57626
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:229});
     __hpasRuleResult = {
'영업요율' : 57706
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:230});
     __hpasRuleResult = {
'영업요율' : 57783
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:231});
     __hpasRuleResult = {
'영업요율' : 57857
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:232});
     __hpasRuleResult = {
'영업요율' : 57931
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:233});
     __hpasRuleResult = {
'영업요율' : 58004
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:234});
     __hpasRuleResult = {
'영업요율' : 58075
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:235});
     __hpasRuleResult = {
'영업요율' : 6581
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:236});
     __hpasRuleResult = {
'영업요율' : 58145
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:237});
     __hpasRuleResult = {
'영업요율' : 6627
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:238});
     __hpasRuleResult = {
'영업요율' : 6864
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:239});
     __hpasRuleResult = {
'영업요율' : 7210
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:240});
     __hpasRuleResult = {
'영업요율' : 7650
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:241});
     __hpasRuleResult = {
'영업요율' : 8134
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:242});
     __hpasRuleResult = {
'영업요율' : 8636
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:243});
     __hpasRuleResult = {
'영업요율' : 9002
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:244});
     __hpasRuleResult = {
'영업요율' : 9228
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:245});
     __hpasRuleResult = {
'영업요율' : 9488
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:246});
     __hpasRuleResult = {
'영업요율' : 9373
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:247});
     __hpasRuleResult = {
'영업요율' : 9506
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:248});
     __hpasRuleResult = {
'영업요율' : 9674
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:249});
     __hpasRuleResult = {
'영업요율' : 9895
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:250});
     __hpasRuleResult = {
'영업요율' : 10116
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:251});
     __hpasRuleResult = {
'영업요율' : 10321
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:252});
     __hpasRuleResult = {
'영업요율' : 10518
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:253});
     __hpasRuleResult = {
'영업요율' : 10711
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:254});
     __hpasRuleResult = {
'영업요율' : 10992
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:255});
     __hpasRuleResult = {
'영업요율' : 11322
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:256});
     __hpasRuleResult = {
'영업요율' : 6811
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:257});
     __hpasRuleResult = {
'영업요율' : 11697
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:258});
     __hpasRuleResult = {
'영업요율' : 12088
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:259});
     __hpasRuleResult = {
'영업요율' : 12471
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:260});
     __hpasRuleResult = {
'영업요율' : 12865
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:261});
     __hpasRuleResult = {
'영업요율' : 13239
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:262});
     __hpasRuleResult = {
'영업요율' : 13619
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:263});
     __hpasRuleResult = {
'영업요율' : 14009
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:264});
     __hpasRuleResult = {
'영업요율' : 14384
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:265});
     __hpasRuleResult = {
'영업요율' : 14680
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:266});
     __hpasRuleResult = {
'영업요율' : 14955
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:267});
     __hpasRuleResult = {
'영업요율' : 6285
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:268});
     __hpasRuleResult = {
'영업요율' : 15246
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:269});
     __hpasRuleResult = {
'영업요율' : 15594
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:270});
     __hpasRuleResult = {
'영업요율' : 16040
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:271});
     __hpasRuleResult = {
'영업요율' : 16617
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:272});
     __hpasRuleResult = {
'영업요율' : 17325
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:273});
     __hpasRuleResult = {
'영업요율' : 18137
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:274});
     __hpasRuleResult = {
'영업요율' : 19006
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:275});
     __hpasRuleResult = {
'영업요율' : 19880
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:276});
     __hpasRuleResult = {
'영업요율' : 20723
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:277});
     __hpasRuleResult = {
'영업요율' : 21637
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:278});
     __hpasRuleResult = {
'영업요율' : 5592
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:279});
     __hpasRuleResult = {
'영업요율' : 22648
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:280});
     __hpasRuleResult = {
'영업요율' : 23756
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:281});
     __hpasRuleResult = {
'영업요율' : 24929
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:282});
     __hpasRuleResult = {
'영업요율' : 26148
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:283});
     __hpasRuleResult = {
'영업요율' : 27423
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:284});
     __hpasRuleResult = {
'영업요율' : 28754
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:285});
     __hpasRuleResult = {
'영업요율' : 30116
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:286});
     __hpasRuleResult = {
'영업요율' : 31419
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:287});
     __hpasRuleResult = {
'영업요율' : 32625
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:288});
     __hpasRuleResult = {
'영업요율' : 33756
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:289});
     __hpasRuleResult = {
'영업요율' : 5689
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:290});
     __hpasRuleResult = {
'영업요율' : 34867
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:291});
     __hpasRuleResult = {
'영업요율' : 36022
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:292});
     __hpasRuleResult = {
'영업요율' : 37231
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:293});
     __hpasRuleResult = {
'영업요율' : 38384
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:294});
     __hpasRuleResult = {
'영업요율' : 38629
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:295});
     __hpasRuleResult = {
'영업요율' : 39221
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:296});
     __hpasRuleResult = {
'영업요율' : 40895
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:297});
     __hpasRuleResult = {
'영업요율' : 42607
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:298});
     __hpasRuleResult = {
'영업요율' : 43687
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:299});
     __hpasRuleResult = {
'영업요율' : 44816
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:300});
     __hpasRuleResult = {
'영업요율' : 6115
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:301});
     __hpasRuleResult = {
'영업요율' : 45980
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:302});
     __hpasRuleResult = {
'영업요율' : 47159
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:303});
     __hpasRuleResult = {
'영업요율' : 48357
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:304});
     __hpasRuleResult = {
'영업요율' : 48922
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:305});
     __hpasRuleResult = {
'영업요율' : 49385
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:306});
     __hpasRuleResult = {
'영업요율' : 49836
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:307});
     __hpasRuleResult = {
'영업요율' : 50283
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:308});
     __hpasRuleResult = {
'영업요율' : 50709
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:309});
     __hpasRuleResult = {
'영업요율' : 51120
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:310});
     __hpasRuleResult = {
'영업요율' : 51511
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:311});
     __hpasRuleResult = {
'영업요율' : 6463
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:312});
     __hpasRuleResult = {
'영업요율' : 51886
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:313});
     __hpasRuleResult = {
'영업요율' : 52283
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:314});
     __hpasRuleResult = {
'영업요율' : 52911
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:315});
     __hpasRuleResult = {
'영업요율' : 53572
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:316});
     __hpasRuleResult = {
'영업요율' : 54160
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:317});
     __hpasRuleResult = {
'영업요율' : 54635
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:318});
     __hpasRuleResult = {
'영업요율' : 54975
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:319});
     __hpasRuleResult = {
'영업요율' : 55199
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:320});
     __hpasRuleResult = {
'영업요율' : 55464
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:321});
     __hpasRuleResult = {
'영업요율' : 55757
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:322});
     __hpasRuleResult = {
'영업요율' : 6596
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:323});
     __hpasRuleResult = {
'영업요율' : 56039
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:324});
     __hpasRuleResult = {
'영업요율' : 56315
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:325});
     __hpasRuleResult = {
'영업요율' : 56583
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:326});
     __hpasRuleResult = {
'영업요율' : 56696
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:327});
     __hpasRuleResult = {
'영업요율' : 56802
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:328});
     __hpasRuleResult = {
'영업요율' : 56905
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:329});
     __hpasRuleResult = {
'영업요율' : 57005
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:330});
     __hpasRuleResult = {
'영업요율' : 57102
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:331});
     __hpasRuleResult = {
'영업요율' : 57197
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:332});
     __hpasRuleResult = {
'영업요율' : 57286
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:333});
     __hpasRuleResult = {
'영업요율' : 16981
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:334});
     __hpasRuleResult = {
'영업요율' : 11887
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:335});
     __hpasRuleResult = {
'영업요율' : 5411
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:336});
     __hpasRuleResult = {
'영업요율' : 70723
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:337});
     __hpasRuleResult = {
'영업요율' : 70838
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:338});
     __hpasRuleResult = {
'영업요율' : 70947
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:339});
     __hpasRuleResult = {
'영업요율' : 71054
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:340});
     __hpasRuleResult = {
'영업요율' : 71159
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:341});
     __hpasRuleResult = {
'영업요율' : 71260
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:342});
     __hpasRuleResult = {
'영업요율' : 71359
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:343});
     __hpasRuleResult = {
'영업요율' : 71456
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:344});
     __hpasRuleResult = {
'영업요율' : 71550
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:345});
     __hpasRuleResult = {
'영업요율' : 71643
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:346});
     __hpasRuleResult = {
'영업요율' : 5230
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:347});
     __hpasRuleResult = {
'영업요율' : 71736
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:348});
     __hpasRuleResult = {
'영업요율' : 5152
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:349});
     __hpasRuleResult = {
'영업요율' : 5226
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:350});
     __hpasRuleResult = {
'영업요율' : 5391
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:351});
     __hpasRuleResult = {
'영업요율' : 5644
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:352});
     __hpasRuleResult = {
'영업요율' : 5978
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:353});
     __hpasRuleResult = {
'영업요율' : 6397
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:354});
     __hpasRuleResult = {
'영업요율' : 6860
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:355});
     __hpasRuleResult = {
'영업요율' : 7355
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:356});
     __hpasRuleResult = {
'영업요율' : 7439
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:357});
     __hpasRuleResult = {
'영업요율' : 7877
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:358});
     __hpasRuleResult = {
'영업요율' : 8472
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:359});
     __hpasRuleResult = {
'영업요율' : 9122
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:360});
     __hpasRuleResult = {
'영업요율' : 9771
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:361});
     __hpasRuleResult = {
'영업요율' : 10359
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:362});
     __hpasRuleResult = {
'영업요율' : 10909
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:363});
     __hpasRuleResult = {
'영업요율' : 11436
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:364});
     __hpasRuleResult = {
'영업요율' : 11938
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:365});
     __hpasRuleResult = {
'영업요율' : 12280
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:366});
     __hpasRuleResult = {
'영업요율' : 12583
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:367});
     __hpasRuleResult = {
'영업요율' : 5587
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:368});
     __hpasRuleResult = {
'영업요율' : 12856
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:369});
     __hpasRuleResult = {
'영업요율' : 13112
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:370});
     __hpasRuleResult = {
'영업요율' : 13375
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:371});
     __hpasRuleResult = {
'영업요율' : 13809
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:372});
     __hpasRuleResult = {
'영업요율' : 14276
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:373});
     __hpasRuleResult = {
'영업요율' : 14796
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:374});
     __hpasRuleResult = {
'영업요율' : 15372
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:375});
     __hpasRuleResult = {
'영업요율' : 15989
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:376});
     __hpasRuleResult = {
'영업요율' : 16687
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:377});
     __hpasRuleResult = {
'영업요율' : 17450
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:378});
     __hpasRuleResult = {
'영업요율' : 5166
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:379});
     __hpasRuleResult = {
'영업요율' : 18257
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:380});
     __hpasRuleResult = {
'영업요율' : 19120
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:381});
     __hpasRuleResult = {
'영업요율' : 20087
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:382});
     __hpasRuleResult = {
'영업요율' : 21186
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:383});
     __hpasRuleResult = {
'영업요율' : 22449
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:384});
     __hpasRuleResult = {
'영업요율' : 23883
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:385});
     __hpasRuleResult = {
'영업요율' : 25413
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:386});
     __hpasRuleResult = {
'영업요율' : 26929
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:387});
     __hpasRuleResult = {
'영업요율' : 28410
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:388});
     __hpasRuleResult = {
'영업요율' : 29856
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:389});
     __hpasRuleResult = {
'영업요율' : 5012
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:390});
     __hpasRuleResult = {
'영업요율' : 31269
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:391});
     __hpasRuleResult = {
'영업요율' : 32615
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:392});
     __hpasRuleResult = {
'영업요율' : 33836
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:393});
     __hpasRuleResult = {
'영업요율' : 34924
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:394});
     __hpasRuleResult = {
'영업요율' : 35957
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:395});
     __hpasRuleResult = {
'영업요율' : 37029
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:396});
     __hpasRuleResult = {
'영업요율' : 38143
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:397});
     __hpasRuleResult = {
'영업요율' : 39171
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:398});
     __hpasRuleResult = {
'영업요율' : 40059
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:399});
     __hpasRuleResult = {
'영업요율' : 40766
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:400});
     __hpasRuleResult = {
'영업요율' : 5115
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:401});
     __hpasRuleResult = {
'영업요율' : 41241
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:402});
     __hpasRuleResult = {
'영업요율' : 41665
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:403});
     __hpasRuleResult = {
'영업요율' : 42409
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:404});
     __hpasRuleResult = {
'영업요율' : 42721
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:405});
     __hpasRuleResult = {
'영업요율' : 41694
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:406});
     __hpasRuleResult = {
'영업요율' : 40258
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:407});
     __hpasRuleResult = {
'영업요율' : 39642
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:408});
     __hpasRuleResult = {
'영업요율' : 41419
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:409});
     __hpasRuleResult = {
'영업요율' : 42235
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:410});
     __hpasRuleResult = {
'영업요율' : 43139
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:411});
     __hpasRuleResult = {
'영업요율' : 5362
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:412});
     __hpasRuleResult = {
'영업요율' : 44109
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:413});
     __hpasRuleResult = {
'영업요율' : 45116
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:414});
     __hpasRuleResult = {
'영업요율' : 46153
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:415});
     __hpasRuleResult = {
'영업요율' : 47462
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:416});
     __hpasRuleResult = {
'영업요율' : 49497
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:417});
     __hpasRuleResult = {
'영업요율' : 51625
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:418});
     __hpasRuleResult = {
'영업요율' : 53792
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:419});
     __hpasRuleResult = {
'영업요율' : 55968
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:420});
     __hpasRuleResult = {
'영업요율' : 58185
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:421});
     __hpasRuleResult = {
'영업요율' : 60534
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:422});
     __hpasRuleResult = {
'영업요율' : 5554
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:423});
     __hpasRuleResult = {
'영업요율' : 63251
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:424});
     __hpasRuleResult = {
'영업요율' : 65102
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:425});
     __hpasRuleResult = {
'영업요율' : 65959
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:426});
     __hpasRuleResult = {
'영업요율' : 66804
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:427});
     __hpasRuleResult = {
'영업요율' : 67558
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:428});
     __hpasRuleResult = {
'영업요율' : 68168
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:429});
     __hpasRuleResult = {
'영업요율' : 68609
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:430});
     __hpasRuleResult = {
'영업요율' : 68905
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:431});
     __hpasRuleResult = {
'영업요율' : 69101
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:432});
     __hpasRuleResult = {
'영업요율' : 69247
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:433});
     __hpasRuleResult = {
'영업요율' : 5555
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:434});
     __hpasRuleResult = {
'영업요율' : 69386
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:435});
     __hpasRuleResult = {
'영업요율' : 69530
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:436});
     __hpasRuleResult = {
'영업요율' : 69678
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:437});
     __hpasRuleResult = {
'영업요율' : 69826
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:438});
     __hpasRuleResult = {
'영업요율' : 69969
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:439});
     __hpasRuleResult = {
'영업요율' : 70105
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:440});
     __hpasRuleResult = {
'영업요율' : 70237
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:441});
     __hpasRuleResult = {
'영업요율' : 70363
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:442});
     __hpasRuleResult = {
'영업요율' : 70487
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '2'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:443});
     __hpasRuleResult = {
'영업요율' : 70607
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:444});
     __hpasRuleResult = {
'영업요율' : 18556
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:445});
     __hpasRuleResult = {
'영업요율' : 13362
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:446});
     __hpasRuleResult = {
'영업요율' : 6864
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:447});
     __hpasRuleResult = {
'영업요율' : 58249
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:448});
     __hpasRuleResult = {
'영업요율' : 58336
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:449});
     __hpasRuleResult = {
'영업요율' : 58423
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:450});
     __hpasRuleResult = {
'영업요율' : 58506
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:451});
     __hpasRuleResult = {
'영업요율' : 58587
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:452});
     __hpasRuleResult = {
'영업요율' : 58665
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:453});
     __hpasRuleResult = {
'영업요율' : 58743
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:454});
     __hpasRuleResult = {
'영업요율' : 58818
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:455});
     __hpasRuleResult = {
'영업요율' : 58891
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:456});
     __hpasRuleResult = {
'영업요율' : 58963
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:457});
     __hpasRuleResult = {
'영업요율' : 6876
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:458});
     __hpasRuleResult = {
'영업요율' : 59034
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:459});
     __hpasRuleResult = {
'영업요율' : 6946
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:460});
     __hpasRuleResult = {
'영업요율' : 7210
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:461});
     __hpasRuleResult = {
'영업요율' : 7578
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:462});
     __hpasRuleResult = {
'영업요율' : 8041
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:463});
     __hpasRuleResult = {
'영업요율' : 8544
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:464});
     __hpasRuleResult = {
'영업요율' : 9070
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:465});
     __hpasRuleResult = {
'영업요율' : 9448
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:466});
     __hpasRuleResult = {
'영업요율' : 9681
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:467});
     __hpasRuleResult = {
'영업요율' : 9595
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:468});
     __hpasRuleResult = {
'영업요율' : 9828
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:469});
     __hpasRuleResult = {
'영업요율' : 9964
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:470});
     __hpasRuleResult = {
'영업요율' : 10135
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:471});
     __hpasRuleResult = {
'영업요율' : 10358
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:472});
     __hpasRuleResult = {
'영업요율' : 10582
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:473});
     __hpasRuleResult = {
'영업요율' : 10782
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:474});
     __hpasRuleResult = {
'영업요율' : 10972
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:475});
     __hpasRuleResult = {
'영업요율' : 11158
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:476});
     __hpasRuleResult = {
'영업요율' : 11433
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:477});
     __hpasRuleResult = {
'영업요율' : 11759
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:478});
     __hpasRuleResult = {
'영업요율' : 6929
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:479});
     __hpasRuleResult = {
'영업요율' : 12129
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:480});
     __hpasRuleResult = {
'영업요율' : 12515
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:481});
     __hpasRuleResult = {
'영업요율' : 12895
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:482});
     __hpasRuleResult = {
'영업요율' : 13286
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:483});
     __hpasRuleResult = {
'영업요율' : 13663
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:484});
     __hpasRuleResult = {
'영업요율' : 14044
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:485});
     __hpasRuleResult = {
'영업요율' : 14438
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:486});
     __hpasRuleResult = {
'영업요율' : 14815
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:487});
     __hpasRuleResult = {
'영업요율' : 15111
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:488});
     __hpasRuleResult = {
'영업요율' : 15386
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:489});
     __hpasRuleResult = {
'영업요율' : 6407
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:490});
     __hpasRuleResult = {
'영업요율' : 15678
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:491});
     __hpasRuleResult = {
'영업요율' : 16026
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:492});
     __hpasRuleResult = {
'영업요율' : 16471
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:493});
     __hpasRuleResult = {
'영업요율' : 17051
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:494});
     __hpasRuleResult = {
'영업요율' : 17763
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:495});
     __hpasRuleResult = {
'영업요율' : 18584
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:496});
     __hpasRuleResult = {
'영업요율' : 19460
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:497});
     __hpasRuleResult = {
'영업요율' : 20342
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:498});
     __hpasRuleResult = {
'영업요율' : 21186
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:499});
     __hpasRuleResult = {
'영업요율' : 22102
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:500});
     __hpasRuleResult = {
'영업요율' : 5714
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:501});
     __hpasRuleResult = {
'영업요율' : 23116
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:502});
     __hpasRuleResult = {
'영업요율' : 24227
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:503});
     __hpasRuleResult = {
'영업요율' : 25402
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:504});
     __hpasRuleResult = {
'영업요율' : 26629
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:505});
     __hpasRuleResult = {
'영업요율' : 27907
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:506});
     __hpasRuleResult = {
'영업요율' : 29242
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:507});
     __hpasRuleResult = {
'영업요율' : 30605
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:508});
     __hpasRuleResult = {
'영업요율' : 31910
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:509});
     __hpasRuleResult = {
'영업요율' : 33115
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:510});
     __hpasRuleResult = {
'영업요율' : 34245
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:511});
     __hpasRuleResult = {
'영업요율' : 5868
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:512});
     __hpasRuleResult = {
'영업요율' : 35356
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:513});
     __hpasRuleResult = {
'영업요율' : 36516
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:514});
     __hpasRuleResult = {
'영업요율' : 37737
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:515});
     __hpasRuleResult = {
'영업요율' : 38902
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:516});
     __hpasRuleResult = {
'영업요율' : 39175
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:517});
     __hpasRuleResult = {
'영업요율' : 39767
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:518});
     __hpasRuleResult = {
'영업요율' : 41440
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:519});
     __hpasRuleResult = {
'영업요율' : 43155
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:520});
     __hpasRuleResult = {
'영업요율' : 44242
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:521});
     __hpasRuleResult = {
'영업요율' : 45385
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:522});
     __hpasRuleResult = {
'영업요율' : 6316
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:523});
     __hpasRuleResult = {
'영업요율' : 46563
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:524});
     __hpasRuleResult = {
'영업요율' : 47760
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:525});
     __hpasRuleResult = {
'영업요율' : 48978
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:526});
     __hpasRuleResult = {
'영업요율' : 49652
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:527});
     __hpasRuleResult = {
'영업요율' : 50122
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:528});
     __hpasRuleResult = {
'영업요율' : 50584
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:529});
     __hpasRuleResult = {
'영업요율' : 51040
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:530});
     __hpasRuleResult = {
'영업요율' : 51477
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:531});
     __hpasRuleResult = {
'영업요율' : 51896
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:532});
     __hpasRuleResult = {
'영업요율' : 52296
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:533});
     __hpasRuleResult = {
'영업요율' : 6681
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:534});
     __hpasRuleResult = {
'영업요율' : 52681
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:535});
     __hpasRuleResult = {
'영업요율' : 53085
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:536});
     __hpasRuleResult = {
'영업요율' : 53724
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:537});
     __hpasRuleResult = {
'영업요율' : 54391
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:538});
     __hpasRuleResult = {
'영업요율' : 54988
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:539});
     __hpasRuleResult = {
'영업요율' : 55467
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:540});
     __hpasRuleResult = {
'영업요율' : 55811
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:541});
     __hpasRuleResult = {
'영업요율' : 56038
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:542});
     __hpasRuleResult = {
'영업요율' : 56307
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:543});
     __hpasRuleResult = {
'영업요율' : 56603
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:544});
     __hpasRuleResult = {
'영업요율' : 6836
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:545});
     __hpasRuleResult = {
'영업요율' : 56889
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:546});
     __hpasRuleResult = {
'영업요율' : 57170
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:547});
     __hpasRuleResult = {
'영업요율' : 57439
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:548});
     __hpasRuleResult = {
'영업요율' : 57553
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:549});
     __hpasRuleResult = {
'영업요율' : 57662
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:550});
     __hpasRuleResult = {
'영업요율' : 57769
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:551});
     __hpasRuleResult = {
'영업요율' : 57871
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:552});
     __hpasRuleResult = {
'영업요율' : 57970
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:553});
     __hpasRuleResult = {
'영업요율' : 58065
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:554});
     __hpasRuleResult = {
'영업요율' : 58158
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:555});
     __hpasRuleResult = {
'영업요율' : 17048
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:556});
     __hpasRuleResult = {
'영업요율' : 12047
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:557});
     __hpasRuleResult = {
'영업요율' : 5777
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:558});
     __hpasRuleResult = {
'영업요율' : 73787
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:559});
     __hpasRuleResult = {
'영업요율' : 73908
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:560});
     __hpasRuleResult = {
'영업요율' : 74023
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:561});
     __hpasRuleResult = {
'영업요율' : 74138
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:562});
     __hpasRuleResult = {
'영업요율' : 74248
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:563});
     __hpasRuleResult = {
'영업요율' : 74356
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:564});
     __hpasRuleResult = {
'영업요율' : 74460
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:565});
     __hpasRuleResult = {
'영업요율' : 74562
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:566});
     __hpasRuleResult = {
'영업요율' : 74662
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:567});
     __hpasRuleResult = {
'영업요율' : 74761
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:568});
     __hpasRuleResult = {
'영업요율' : 5603
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:569});
     __hpasRuleResult = {
'영업요율' : 74859
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:570});
     __hpasRuleResult = {
'영업요율' : 5531
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:571});
     __hpasRuleResult = {
'영업요율' : 5618
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:572});
     __hpasRuleResult = {
'영업요율' : 5799
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:573});
     __hpasRuleResult = {
'영업요율' : 6067
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:574});
     __hpasRuleResult = {
'영업요율' : 6417
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:575});
     __hpasRuleResult = {
'영업요율' : 6849
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:576});
     __hpasRuleResult = {
'영업요율' : 7319
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:577});
     __hpasRuleResult = {
'영업요율' : 7821
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:578});
     __hpasRuleResult = {
'영업요율' : 7627
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:579});
     __hpasRuleResult = {
'영업요율' : 8346
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:580});
     __hpasRuleResult = {
'영업요율' : 8945
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:581});
     __hpasRuleResult = {
'영업요율' : 9598
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:582});
     __hpasRuleResult = {
'영업요율' : 10250
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:583});
     __hpasRuleResult = {
'영업요율' : 10842
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:584});
     __hpasRuleResult = {
'영업요율' : 11394
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:585});
     __hpasRuleResult = {
'영업요율' : 11924
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:586});
     __hpasRuleResult = {
'영업요율' : 12431
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:587});
     __hpasRuleResult = {
'영업요율' : 12768
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:588});
     __hpasRuleResult = {
'영업요율' : 13069
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:589});
     __hpasRuleResult = {
'영업요율' : 5786
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:590});
     __hpasRuleResult = {
'영업요율' : 13338
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:591});
     __hpasRuleResult = {
'영업요율' : 13591
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:592});
     __hpasRuleResult = {
'영업요율' : 13851
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:593});
     __hpasRuleResult = {
'영업요율' : 14288
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:594});
     __hpasRuleResult = {
'영업요율' : 14764
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:595});
     __hpasRuleResult = {
'영업요율' : 15294
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:596});
     __hpasRuleResult = {
'영업요율' : 15882
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:597});
     __hpasRuleResult = {
'영업요율' : 16518
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:598});
     __hpasRuleResult = {
'영업요율' : 17238
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:599});
     __hpasRuleResult = {
'영업요율' : 18021
}
    canSheetNext = false
    }
    }

    var canSheetNext = true
    if(canSheetNext) {
    if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:600});
     __hpasRuleResult = {
'영업요율' : 5404
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:601});
     __hpasRuleResult = {
'영업요율' : 18850
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:602});
     __hpasRuleResult = {
'영업요율' : 19734
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:603});
     __hpasRuleResult = {
'영업요율' : 20725
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:604});
     __hpasRuleResult = {
'영업요율' : 21851
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:605});
     __hpasRuleResult = {
'영업요율' : 23151
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:606});
     __hpasRuleResult = {
'영업요율' : 24630
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:607});
     __hpasRuleResult = {
'영업요율' : 26219
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:608});
     __hpasRuleResult = {
'영업요율' : 27797
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:609});
     __hpasRuleResult = {
'영업요율' : 29356
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:610});
     __hpasRuleResult = {
'영업요율' : 30884
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:611});
     __hpasRuleResult = {
'영업요율' : 5290
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:612});
     __hpasRuleResult = {
'영업요율' : 32380
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:613});
     __hpasRuleResult = {
'영업요율' : 33801
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:614});
     __hpasRuleResult = {
'영업요율' : 35084
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:615});
     __hpasRuleResult = {
'영업요율' : 36222
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:616});
     __hpasRuleResult = {
'영업요율' : 37297
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:617});
     __hpasRuleResult = {
'영업요율' : 38410
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:618});
     __hpasRuleResult = {
'영업요율' : 39566
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:619});
     __hpasRuleResult = {
'영업요율' : 40644
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:620});
     __hpasRuleResult = {
'영업요율' : 41591
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:621});
     __hpasRuleResult = {
'영업요율' : 42353
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:622});
     __hpasRuleResult = {
'영업요율' : 5426
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:623});
     __hpasRuleResult = {
'영업요율' : 43002
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:624});
     __hpasRuleResult = {
'영업요율' : 43456
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:625});
     __hpasRuleResult = {
'영업요율' : 44235
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:626});
     __hpasRuleResult = {
'영업요율' : 44585
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:627});
     __hpasRuleResult = {
'영업요율' : 43596
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:628});
     __hpasRuleResult = {
'영업요율' : 42196
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:629});
     __hpasRuleResult = {
'영업요율' : 41625
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:630});
     __hpasRuleResult = {
'영업요율' : 43472
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:631});
     __hpasRuleResult = {
'영업요율' : 44383
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:632});
     __hpasRuleResult = {
'영업요율' : 45409
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:633});
     __hpasRuleResult = {
'영업요율' : 5698
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:634});
     __hpasRuleResult = {
'영업요율' : 46516
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:635});
     __hpasRuleResult = {
'영업요율' : 47674
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:636});
     __hpasRuleResult = {
'영업요율' : 48867
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:637});
     __hpasRuleResult = {
'영업요율' : 50344
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:638});
     __hpasRuleResult = {
'영업요율' : 52552
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:639});
     __hpasRuleResult = {
'영업요율' : 54860
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:640});
     __hpasRuleResult = {
'영업요율' : 57209
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:641});
     __hpasRuleResult = {
'영업요율' : 59565
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:642});
     __hpasRuleResult = {
'영업요율' : 61961
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:643});
     __hpasRuleResult = {
'영업요율' : 64502
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:644});
     __hpasRuleResult = {
'영업요율' : 5906
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:645});
     __hpasRuleResult = {
'영업요율' : 67089
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:646});
     __hpasRuleResult = {
'영업요율' : 67962
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:647});
     __hpasRuleResult = {
'영업요율' : 68841
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:648});
     __hpasRuleResult = {
'영업요율' : 69703
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:649});
     __hpasRuleResult = {
'영업요율' : 70473
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:650});
     __hpasRuleResult = {
'영업요율' : 71097
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:651});
     __hpasRuleResult = {
'영업요율' : 71551
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:652});
     __hpasRuleResult = {
'영업요율' : 71858
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:653});
     __hpasRuleResult = {
'영업요율' : 72064
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:654});
     __hpasRuleResult = {
'영업요율' : 72221
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:655});
     __hpasRuleResult = {
'영업요율' : 5916
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:656});
     __hpasRuleResult = {
'영업요율' : 72368
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:657});
     __hpasRuleResult = {
'영업요율' : 72522
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:658});
     __hpasRuleResult = {
'영업요율' : 72679
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:659});
     __hpasRuleResult = {
'영업요율' : 72837
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:660});
     __hpasRuleResult = {
'영업요율' : 72987
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:661});
     __hpasRuleResult = {
'영업요율' : 73132
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:662});
     __hpasRuleResult = {
'영업요율' : 73271
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:663});
     __hpasRuleResult = {
'영업요율' : 73407
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:664});
     __hpasRuleResult = {
'영업요율' : 73538
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "0")||(단일요율적용여부 == ""))
    && ((상해급수코드 == '3'))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:665});
     __hpasRuleResult = {
'영업요율' : 73664
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:666});
     __hpasRuleResult = {
'영업요율' : 18500
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:667});
     __hpasRuleResult = {
'영업요율' : 13226
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:668});
     __hpasRuleResult = {
'영업요율' : 6420
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:669});
     __hpasRuleResult = {
'영업요율' : 56796
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:670});
     __hpasRuleResult = {
'영업요율' : 56880
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:671});
     __hpasRuleResult = {
'영업요율' : 56963
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:672});
     __hpasRuleResult = {
'영업요율' : 57042
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:673});
     __hpasRuleResult = {
'영업요율' : 57120
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:674});
     __hpasRuleResult = {
'영업요율' : 57197
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:675});
     __hpasRuleResult = {
'영업요율' : 57271
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:676});
     __hpasRuleResult = {
'영업요율' : 57342
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:677});
     __hpasRuleResult = {
'영업요율' : 57413
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:678});
     __hpasRuleResult = {
'영업요율' : 57483
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:679});
     __hpasRuleResult = {
'영업요율' : 6386
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:680});
     __hpasRuleResult = {
'영업요율' : 57552
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:681});
     __hpasRuleResult = {
'영업요율' : 6417
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:682});
     __hpasRuleResult = {
'영업요율' : 6637
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:683});
     __hpasRuleResult = {
'영업요율' : 6964
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:684});
     __hpasRuleResult = {
'영업요율' : 7390
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:685});
     __hpasRuleResult = {
'영업요율' : 7860
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:686});
     __hpasRuleResult = {
'영업요율' : 8350
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:687});
     __hpasRuleResult = {
'영업요율' : 8707
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:688});
     __hpasRuleResult = {
'영업요율' : 8930
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:689});
     __hpasRuleResult = {
'영업요율' : 9421
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:690});
     __hpasRuleResult = {
'영업요율' : 9072
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:691});
     __hpasRuleResult = {
'영업요율' : 9203
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:692});
     __hpasRuleResult = {
'영업요율' : 9370
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:693});
     __hpasRuleResult = {
'영업요율' : 9587
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:694});
     __hpasRuleResult = {
'영업요율' : 9809
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:695});
     __hpasRuleResult = {
'영업요율' : 10016
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:696});
     __hpasRuleResult = {
'영업요율' : 10218
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:697});
     __hpasRuleResult = {
'영업요율' : 10415
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:698});
     __hpasRuleResult = {
'영업요율' : 10698
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:699});
     __hpasRuleResult = {
'영업요율' : 11034
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:700});
     __hpasRuleResult = {
'영업요율' : 6731
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:701});
     __hpasRuleResult = {
'영업요율' : 11413
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:702});
     __hpasRuleResult = {
'영업요율' : 11805
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:703});
     __hpasRuleResult = {
'영업요율' : 12192
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:704});
     __hpasRuleResult = {
'영업요율' : 12586
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:705});
     __hpasRuleResult = {
'영업요율' : 12960
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:706});
     __hpasRuleResult = {
'영업요율' : 13338
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:707});
     __hpasRuleResult = {
'영업요율' : 13725
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:708});
     __hpasRuleResult = {
'영업요율' : 14098
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:709});
     __hpasRuleResult = {
'영업요율' : 14392
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:710});
     __hpasRuleResult = {
'영업요율' : 14670
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:711});
     __hpasRuleResult = {
'영업요율' : 6204
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:712});
     __hpasRuleResult = {
'영업요율' : 14960
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:713});
     __hpasRuleResult = {
'영업요율' : 15310
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:714});
     __hpasRuleResult = {
'영업요율' : 15757
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:715});
     __hpasRuleResult = {
'영업요율' : 16329
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:716});
     __hpasRuleResult = {
'영업요율' : 17033
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:717});
     __hpasRuleResult = {
'영업요율' : 17840
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:718});
     __hpasRuleResult = {
'영업요율' : 18705
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:719});
     __hpasRuleResult = {
'영업요율' : 19574
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:720});
     __hpasRuleResult = {
'영업요율' : 20415
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:721});
     __hpasRuleResult = {
'영업요율' : 21328
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:722});
     __hpasRuleResult = {
'영업요율' : 5512
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:723});
     __hpasRuleResult = {
'영업요율' : 22337
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:724});
     __hpasRuleResult = {
'영업요율' : 23441
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:725});
     __hpasRuleResult = {
'영업요율' : 24611
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:726});
     __hpasRuleResult = {
'영업요율' : 25830
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:727});
     __hpasRuleResult = {
'영업요율' : 27100
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:728});
     __hpasRuleResult = {
'영업요율' : 28429
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:729});
     __hpasRuleResult = {
'영업요율' : 29789
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:730});
     __hpasRuleResult = {
'영업요율' : 31093
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:731});
     __hpasRuleResult = {
'영업요율' : 32300
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:732});
     __hpasRuleResult = {
'영업요율' : 33432
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:733});
     __hpasRuleResult = {
'영업요율' : 5573
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:734});
     __hpasRuleResult = {
'영업요율' : 34541
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:735});
     __hpasRuleResult = {
'영업요율' : 35692
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:736});
     __hpasRuleResult = {
'영업요율' : 36894
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:737});
     __hpasRuleResult = {
'영업요율' : 38037
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:738});
     __hpasRuleResult = {
'영업요율' : 38264
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:739});
     __hpasRuleResult = {
'영업요율' : 38859
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:740});
     __hpasRuleResult = {
'영업요율' : 40534
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:741});
     __hpasRuleResult = {
'영업요율' : 42243
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:742});
     __hpasRuleResult = {
'영업요율' : 43319
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:743});
     __hpasRuleResult = {
'영업요율' : 44438
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:744});
     __hpasRuleResult = {
'영업요율' : 5981
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:745});
     __hpasRuleResult = {
'영업요율' : 45590
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:746});
     __hpasRuleResult = {
'영업요율' : 46758
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:747});
     __hpasRuleResult = {
'영업요율' : 47930
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:748});
     __hpasRuleResult = {
'영업요율' : 48440
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:749});
     __hpasRuleResult = {
'영업요율' : 48895
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:750});
     __hpasRuleResult = {
'영업요율' : 49342
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:751});
     __hpasRuleResult = {
'영업요율' : 49781
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:752});
     __hpasRuleResult = {
'영업요율' : 50201
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:753});
     __hpasRuleResult = {
'영업요율' : 50604
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:754});
     __hpasRuleResult = {
'영업요율' : 50990
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:755});
     __hpasRuleResult = {
'영업요율' : 6319
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:756});
     __hpasRuleResult = {
'영업요율' : 51359
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:757});
     __hpasRuleResult = {
'영업요율' : 51750
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:758});
     __hpasRuleResult = {
'영업요율' : 52373
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:759});
     __hpasRuleResult = {
'영업요율' : 53028
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:760});
     __hpasRuleResult = {
'영업요율' : 53612
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:761});
     __hpasRuleResult = {
'영업요율' : 54083
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:762});
     __hpasRuleResult = {
'영업요율' : 54419
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:763});
     __hpasRuleResult = {
'영업요율' : 54639
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:764});
     __hpasRuleResult = {
'영업요율' : 54904
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:765});
     __hpasRuleResult = {
'영업요율' : 55194
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:766});
     __hpasRuleResult = {
'영업요율' : 6439
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:767});
     __hpasRuleResult = {
'영업요율' : 55476
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:768});
     __hpasRuleResult = {
'영업요율' : 55749
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:769});
     __hpasRuleResult = {
'영업요율' : 56015
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:770});
     __hpasRuleResult = {
'영업요율' : 56126
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:771});
     __hpasRuleResult = {
'영업요율' : 56230
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:772});
     __hpasRuleResult = {
'영업요율' : 56332
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:773});
     __hpasRuleResult = {
'영업요율' : 56430
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:774});
     __hpasRuleResult = {
'영업요율' : 56526
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:775});
     __hpasRuleResult = {
'영업요율' : 56618
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '01'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:776});
     __hpasRuleResult = {
'영업요율' : 56708
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:777});
     __hpasRuleResult = {
'영업요율' : 16934
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:778});
     __hpasRuleResult = {
'영업요율' : 11774
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:779});
     __hpasRuleResult = {
'영업요율' : 5150
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:780});
     __hpasRuleResult = {
'영업요율' : 68557
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:781});
     __hpasRuleResult = {
'영업요율' : 68666
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:782});
     __hpasRuleResult = {
'영업요율' : 68772
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:783});
     __hpasRuleResult = {
'영업요율' : 68875
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:784});
     __hpasRuleResult = {
'영업요율' : 68974
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:785});
     __hpasRuleResult = {
'영업요율' : 69072
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:786});
     __hpasRuleResult = {
'영업요율' : 69167
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:787});
     __hpasRuleResult = {
'영업요율' : 69260
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:788});
     __hpasRuleResult = {
'영업요율' : 69349
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:789});
     __hpasRuleResult = {
'영업요율' : 69439
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:790});
     __hpasRuleResult = {
'영업요율' : 4968
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:791});
     __hpasRuleResult = {
'영업요율' : 69528
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:792});
     __hpasRuleResult = {
'영업요율' : 4883
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:793});
     __hpasRuleResult = {
'영업요율' : 4948
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:794});
     __hpasRuleResult = {
'영업요율' : 5103
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:795});
     __hpasRuleResult = {
'영업요율' : 5344
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:796});
     __hpasRuleResult = {
'영업요율' : 5669
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:797});
     __hpasRuleResult = {
'영업요율' : 6079
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:798});
     __hpasRuleResult = {
'영업요율' : 6536
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:799});
     __hpasRuleResult = {
'영업요율' : 7025
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:800});
     __hpasRuleResult = {
'영업요율' : 7309
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:801});
     __hpasRuleResult = {
'영업요율' : 7546
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:802});
     __hpasRuleResult = {
'영업요율' : 8137
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:803});
     __hpasRuleResult = {
'영업요율' : 8784
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:804});
     __hpasRuleResult = {
'영업요율' : 9432
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:805});
     __hpasRuleResult = {
'영업요율' : 10018
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:806});
     __hpasRuleResult = {
'영업요율' : 10565
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:807});
     __hpasRuleResult = {
'영업요율' : 11090
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:808});
     __hpasRuleResult = {
'영업요율' : 11592
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:809});
     __hpasRuleResult = {
'영업요율' : 11934
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:810});
     __hpasRuleResult = {
'영업요율' : 12240
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:811});
     __hpasRuleResult = {
'영업요율' : 5446
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:812});
     __hpasRuleResult = {
'영업요율' : 12516
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:813});
     __hpasRuleResult = {
'영업요율' : 12774
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:814});
     __hpasRuleResult = {
'영업요율' : 13039
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:815});
     __hpasRuleResult = {
'영업요율' : 13470
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:816});
     __hpasRuleResult = {
'영업요율' : 13935
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:817});
     __hpasRuleResult = {
'영업요율' : 14446
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:818});
     __hpasRuleResult = {
'영업요율' : 15013
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:819});
     __hpasRuleResult = {
'영업요율' : 15616
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:820});
     __hpasRuleResult = {
'영업요율' : 16298
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:821});
     __hpasRuleResult = {
'영업요율' : 17045
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:822});
     __hpasRuleResult = {
'영업요율' : 4996
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:823});
     __hpasRuleResult = {
'영업요율' : 17838
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:824});
     __hpasRuleResult = {
'영업요율' : 18687
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:825});
     __hpasRuleResult = {
'영업요율' : 19639
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:826});
     __hpasRuleResult = {
'영업요율' : 20716
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:827});
     __hpasRuleResult = {
'영업요율' : 21952
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:828});
     __hpasRuleResult = {
'영업요율' : 23355
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:829});
     __hpasRuleResult = {
'영업요율' : 24847
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:830});
     __hpasRuleResult = {
'영업요율' : 26314
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:831});
     __hpasRuleResult = {
'영업요율' : 27742
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:832});
     __hpasRuleResult = {
'영업요율' : 29129
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:833});
     __hpasRuleResult = {
'영업요율' : 4846
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:834});
     __hpasRuleResult = {
'영업요율' : 30483
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:835});
     __hpasRuleResult = {
'영업요율' : 31778
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:836});
     __hpasRuleResult = {
'영업요율' : 32954
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:837});
     __hpasRuleResult = {
'영업요율' : 34006
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:838});
     __hpasRuleResult = {
'영업요율' : 35012
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:839});
     __hpasRuleResult = {
'영업요율' : 36056
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:840});
     __hpasRuleResult = {
'영업요율' : 37136
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:841});
     __hpasRuleResult = {
'영업요율' : 38129
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:842});
     __hpasRuleResult = {
'영업요율' : 38974
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:843});
     __hpasRuleResult = {
'영업요율' : 39642
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:844});
     __hpasRuleResult = {
'영업요율' : 4894
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:845});
     __hpasRuleResult = {
'영업요율' : 39994
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:846});
     __hpasRuleResult = {
'영업요율' : 40399
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:847});
     __hpasRuleResult = {
'영업요율' : 41116
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:848});
     __hpasRuleResult = {
'영업요율' : 41400
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:849});
     __hpasRuleResult = {
'영업요율' : 40348
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:850});
     __hpasRuleResult = {
'영업요율' : 38885
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:851});
     __hpasRuleResult = {
'영업요율' : 38234
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:852});
     __hpasRuleResult = {
'영업요율' : 39965
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:853});
     __hpasRuleResult = {
'영업요율' : 40711
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:854});
     __hpasRuleResult = {
'영업요율' : 41532
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:855});
     __hpasRuleResult = {
'영업요율' : 5121
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:856});
     __hpasRuleResult = {
'영업요율' : 42402
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:857});
     __hpasRuleResult = {
'영업요율' : 43305
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:858});
     __hpasRuleResult = {
'영업요율' : 44230
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:859});
     __hpasRuleResult = {
'영업요율' : 45421
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:860});
     __hpasRuleResult = {
'영업요율' : 47334
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:861});
     __hpasRuleResult = {
'영업요율' : 49333
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:862});
     __hpasRuleResult = {
'영업요율' : 51372
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:863});
     __hpasRuleResult = {
'영업요율' : 53419
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:864});
     __hpasRuleResult = {
'영업요율' : 55508
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:865});
     __hpasRuleResult = {
'영업요율' : 57724
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:866});
     __hpasRuleResult = {
'영업요율' : 5307
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:867});
     __hpasRuleResult = {
'영업요율' : 60289
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:868});
     __hpasRuleResult = {
'영업요율' : 63078
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:869});
     __hpasRuleResult = {
'영업요율' : 63921
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:870});
     __hpasRuleResult = {
'영업요율' : 64750
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:871});
     __hpasRuleResult = {
'영업요율' : 65497
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:872});
     __hpasRuleResult = {
'영업요율' : 66095
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:873});
     __hpasRuleResult = {
'영업요율' : 66529
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:874});
     __hpasRuleResult = {
'영업요율' : 66816
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:875});
     __hpasRuleResult = {
'영업요율' : 67004
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:876});
     __hpasRuleResult = {
'영업요율' : 67145
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:877});
     __hpasRuleResult = {
'영업요율' : 5301
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:878});
     __hpasRuleResult = {
'영업요율' : 67276
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:879});
     __hpasRuleResult = {
'영업요율' : 67414
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:880});
     __hpasRuleResult = {
'영업요율' : 67556
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:881});
     __hpasRuleResult = {
'영업요율' : 67696
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:882});
     __hpasRuleResult = {
'영업요율' : 67833
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:883});
     __hpasRuleResult = {
'영업요율' : 67965
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:884});
     __hpasRuleResult = {
'영업요율' : 68092
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:885});
     __hpasRuleResult = {
'영업요율' : 68213
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:886});
     __hpasRuleResult = {
'영업요율' : 68331
}
    canSheetNext = false
    }
    else if(((단일요율적용여부 == "1"))
    && ((가입금액 == 3000000))
    && ((성별코드 == '02'))
    && ((담보코드 == "CFA11806"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_특약형_실손의료비_3대비급여__CFA11806_FA00034003_개인_001' , row:887});
     __hpasRuleResult = {
'영업요율' : 68445
}
    canSheetNext = false
    }
    }


    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};