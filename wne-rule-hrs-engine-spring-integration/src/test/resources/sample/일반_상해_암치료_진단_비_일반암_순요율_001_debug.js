function(담보코드,성별코드,보험연령 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001',ruleName:'일반_상해_암치료(진단)비_일반암_순요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'담보코드:'+JSON.stringify(담보코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'담보코드' , 'value':JSON.stringify(담보코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'성별코드:'+JSON.stringify(성별코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'성별코드' , 'value':JSON.stringify(성별코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보험연령:'+JSON.stringify(보험연령)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보험연령' , 'value':JSON.stringify(보험연령) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-24 18:06:07
    if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 275
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 248
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 222
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 196
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 173
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 153
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 135
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 124
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 115
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 108
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 104
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 103
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 105
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 109
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 116
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 121
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 126
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 133
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 140
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 150
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 161
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 174
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 189
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 203
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 222
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 245
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 272
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 307
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 347
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 393
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 447
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 508
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 580
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 667
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 769
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 883
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 1007
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 1125
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 1228
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 1316
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 1404
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 1515
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 1667
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 1869
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:44});
     __hpasRuleResult = {
'순요율' : 2118
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:45});
     __hpasRuleResult = {
'순요율' : 2397
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:46});
     __hpasRuleResult = {
'순요율' : 2684
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:47});
     __hpasRuleResult = {
'순요율' : 2954
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:48});
     __hpasRuleResult = {
'순요율' : 3193
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:49});
     __hpasRuleResult = {
'순요율' : 3408
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:50});
     __hpasRuleResult = {
'순요율' : 3620
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:51});
     __hpasRuleResult = {
'순요율' : 3856
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:52});
     __hpasRuleResult = {
'순요율' : 4136
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:53});
     __hpasRuleResult = {
'순요율' : 4463
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:54});
     __hpasRuleResult = {
'순요율' : 4825
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:55});
     __hpasRuleResult = {
'순요율' : 5200
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:56});
     __hpasRuleResult = {
'순요율' : 5571
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:57});
     __hpasRuleResult = {
'순요율' : 5943
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:58});
     __hpasRuleResult = {
'순요율' : 6352
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:59});
     __hpasRuleResult = {
'순요율' : 6824
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:60});
     __hpasRuleResult = {
'순요율' : 7377
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:61});
     __hpasRuleResult = {
'순요율' : 8005
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:62});
     __hpasRuleResult = {
'순요율' : 8695
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:63});
     __hpasRuleResult = {
'순요율' : 9430
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:64});
     __hpasRuleResult = {
'순요율' : 10194
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:65});
     __hpasRuleResult = {
'순요율' : 10974
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:66});
     __hpasRuleResult = {
'순요율' : 11763
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:67});
     __hpasRuleResult = {
'순요율' : 12563
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:68});
     __hpasRuleResult = {
'순요율' : 13386
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:69});
     __hpasRuleResult = {
'순요율' : 14234
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:70});
     __hpasRuleResult = {
'순요율' : 15093
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:71});
     __hpasRuleResult = {
'순요율' : 15932
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:72});
     __hpasRuleResult = {
'순요율' : 16723
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:73});
     __hpasRuleResult = {
'순요율' : 17455
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:74});
     __hpasRuleResult = {
'순요율' : 18157
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:75});
     __hpasRuleResult = {
'순요율' : 18840
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:76});
     __hpasRuleResult = {
'순요율' : 19490
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:77});
     __hpasRuleResult = {
'순요율' : 20070
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:78});
     __hpasRuleResult = {
'순요율' : 20551
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:79});
     __hpasRuleResult = {
'순요율' : 20962
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:80});
     __hpasRuleResult = {
'순요율' : 21341
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:81});
     __hpasRuleResult = {
'순요율' : 21701
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:82});
     __hpasRuleResult = {
'순요율' : 22025
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:83});
     __hpasRuleResult = {
'순요율' : 22283
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:84});
     __hpasRuleResult = {
'순요율' : 22486
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:85});
     __hpasRuleResult = {
'순요율' : 22654
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:86});
     __hpasRuleResult = {
'순요율' : 22814
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:87});
     __hpasRuleResult = {
'순요율' : 22971
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:88});
     __hpasRuleResult = {
'순요율' : 23120
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:89});
     __hpasRuleResult = {
'순요율' : 23260
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:90});
     __hpasRuleResult = {
'순요율' : 23394
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:91});
     __hpasRuleResult = {
'순요율' : 23521
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:92});
     __hpasRuleResult = {
'순요율' : 23643
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:93});
     __hpasRuleResult = {
'순요율' : 23760
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:94});
     __hpasRuleResult = {
'순요율' : 23871
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:95});
     __hpasRuleResult = {
'순요율' : 23980
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:96});
     __hpasRuleResult = {
'순요율' : 24083
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:97});
     __hpasRuleResult = {
'순요율' : 24183
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:98});
     __hpasRuleResult = {
'순요율' : 24280
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:99});
     __hpasRuleResult = {
'순요율' : 24372
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '01'))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:100});
     __hpasRuleResult = {
'순요율' : 24461
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:101});
     __hpasRuleResult = {
'순요율' : 283
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:102});
     __hpasRuleResult = {
'순요율' : 256
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:103});
     __hpasRuleResult = {
'순요율' : 230
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:104});
     __hpasRuleResult = {
'순요율' : 205
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:105});
     __hpasRuleResult = {
'순요율' : 183
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:106});
     __hpasRuleResult = {
'순요율' : 164
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:107});
     __hpasRuleResult = {
'순요율' : 149
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:108});
     __hpasRuleResult = {
'순요율' : 135
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:109});
     __hpasRuleResult = {
'순요율' : 126
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:110});
     __hpasRuleResult = {
'순요율' : 117
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:111});
     __hpasRuleResult = {
'순요율' : 110
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:112});
     __hpasRuleResult = {
'순요율' : 105
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:113});
     __hpasRuleResult = {
'순요율' : 103
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:114});
     __hpasRuleResult = {
'순요율' : 103
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:115});
     __hpasRuleResult = {
'순요율' : 103
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:116});
     __hpasRuleResult = {
'순요율' : 103
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:117});
     __hpasRuleResult = {
'순요율' : 104
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:118});
     __hpasRuleResult = {
'순요율' : 111
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:119});
     __hpasRuleResult = {
'순요율' : 126
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:120});
     __hpasRuleResult = {
'순요율' : 149
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:121});
     __hpasRuleResult = {
'순요율' : 178
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:122});
     __hpasRuleResult = {
'순요율' : 204
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:123});
     __hpasRuleResult = {
'순요율' : 234
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:124});
     __hpasRuleResult = {
'순요율' : 265
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:125});
     __hpasRuleResult = {
'순요율' : 303
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:126});
     __hpasRuleResult = {
'순요율' : 354
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:127});
     __hpasRuleResult = {
'순요율' : 420
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:128});
     __hpasRuleResult = {
'순요율' : 503
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:129});
     __hpasRuleResult = {
'순요율' : 607
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:130});
     __hpasRuleResult = {
'순요율' : 731
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:131});
     __hpasRuleResult = {
'순요율' : 874
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:132});
     __hpasRuleResult = {
'순요율' : 1030
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:133});
     __hpasRuleResult = {
'순요율' : 1195
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:134});
     __hpasRuleResult = {
'순요율' : 1364
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:135});
     __hpasRuleResult = {
'순요율' : 1538
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:136});
     __hpasRuleResult = {
'순요율' : 1714
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:137});
     __hpasRuleResult = {
'순요율' : 1899
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:138});
     __hpasRuleResult = {
'순요율' : 2098
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:139});
     __hpasRuleResult = {
'순요율' : 2320
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:140});
     __hpasRuleResult = {
'순요율' : 2567
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:141});
     __hpasRuleResult = {
'순요율' : 2830
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:142});
     __hpasRuleResult = {
'순요율' : 3090
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:143});
     __hpasRuleResult = {
'순요율' : 3325
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:144});
     __hpasRuleResult = {
'순요율' : 3516
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:145});
     __hpasRuleResult = {
'순요율' : 3649
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:146});
     __hpasRuleResult = {
'순요율' : 3729
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:147});
     __hpasRuleResult = {
'순요율' : 3770
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:148});
     __hpasRuleResult = {
'순요율' : 3796
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:149});
     __hpasRuleResult = {
'순요율' : 3831
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:150});
     __hpasRuleResult = {
'순요율' : 3880
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:151});
     __hpasRuleResult = {
'순요율' : 3942
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:152});
     __hpasRuleResult = {
'순요율' : 4002
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:153});
     __hpasRuleResult = {
'순요율' : 4053
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:154});
     __hpasRuleResult = {
'순요율' : 4106
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:155});
     __hpasRuleResult = {
'순요율' : 4179
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:156});
     __hpasRuleResult = {
'순요율' : 4279
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:157});
     __hpasRuleResult = {
'순요율' : 4400
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:158});
     __hpasRuleResult = {
'순요율' : 4526
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:159});
     __hpasRuleResult = {
'순요율' : 4649
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:160});
     __hpasRuleResult = {
'순요율' : 4771
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:161});
     __hpasRuleResult = {
'순요율' : 4900
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:162});
     __hpasRuleResult = {
'순요율' : 5043
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:163});
     __hpasRuleResult = {
'순요율' : 5201
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:164});
     __hpasRuleResult = {
'순요율' : 5373
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:165});
     __hpasRuleResult = {
'순요율' : 5549
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:166});
     __hpasRuleResult = {
'순요율' : 5730
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:167});
     __hpasRuleResult = {
'순요율' : 5916
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:168});
     __hpasRuleResult = {
'순요율' : 6124
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:169});
     __hpasRuleResult = {
'순요율' : 6355
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:170});
     __hpasRuleResult = {
'순요율' : 6607
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:171});
     __hpasRuleResult = {
'순요율' : 6869
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:172});
     __hpasRuleResult = {
'순요율' : 7124
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:173});
     __hpasRuleResult = {
'순요율' : 7364
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:174});
     __hpasRuleResult = {
'순요율' : 7590
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:175});
     __hpasRuleResult = {
'순요율' : 7804
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:176});
     __hpasRuleResult = {
'순요율' : 8011
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:177});
     __hpasRuleResult = {
'순요율' : 8224
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:178});
     __hpasRuleResult = {
'순요율' : 8442
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:179});
     __hpasRuleResult = {
'순요율' : 8670
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:180});
     __hpasRuleResult = {
'순요율' : 8906
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:181});
     __hpasRuleResult = {
'순요율' : 9149
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:182});
     __hpasRuleResult = {
'순요율' : 9377
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:183});
     __hpasRuleResult = {
'순요율' : 9571
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:184});
     __hpasRuleResult = {
'순요율' : 9722
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:185});
     __hpasRuleResult = {
'순요율' : 9836
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:186});
     __hpasRuleResult = {
'순요율' : 9930
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:187});
     __hpasRuleResult = {
'순요율' : 10018
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:188});
     __hpasRuleResult = {
'순요율' : 10105
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:189});
     __hpasRuleResult = {
'순요율' : 10188
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:190});
     __hpasRuleResult = {
'순요율' : 10266
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:191});
     __hpasRuleResult = {
'순요율' : 10341
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:192});
     __hpasRuleResult = {
'순요율' : 10413
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:193});
     __hpasRuleResult = {
'순요율' : 10481
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:194});
     __hpasRuleResult = {
'순요율' : 10546
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:195});
     __hpasRuleResult = {
'순요율' : 10608
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:196});
     __hpasRuleResult = {
'순요율' : 10668
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:197});
     __hpasRuleResult = {
'순요율' : 10727
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:198});
     __hpasRuleResult = {
'순요율' : 10782
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:199});
     __hpasRuleResult = {
'순요율' : 10835
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:200});
     __hpasRuleResult = {
'순요율' : 10888
}

    }
    else if(((담보코드 == "CFA11690"))
    && ((성별코드 == '02'))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_암치료_진단_비_일반암_순요율_001' , row:201});
     __hpasRuleResult = {
'순요율' : 10937
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};