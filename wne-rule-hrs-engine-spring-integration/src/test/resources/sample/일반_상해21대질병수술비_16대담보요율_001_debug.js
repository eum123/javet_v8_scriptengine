function(성별코드,담보코드,보험연령 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해21대질병수술비_16대담보요율_001',ruleName:'일반_상해21대질병수술비_16대담보요율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

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


    // Compiler Version 1 , Created : 2023-08-25 13:00:59
    if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:0});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:1});
     __hpasRuleResult = {
'순요율' : 0.001363
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:2});
     __hpasRuleResult = {
'순요율' : 0.001205
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:3});
     __hpasRuleResult = {
'순요율' : 0.001107
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:4});
     __hpasRuleResult = {
'순요율' : 0.001077
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:5});
     __hpasRuleResult = {
'순요율' : 0.00111
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:6});
     __hpasRuleResult = {
'순요율' : 0.001181
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:7});
     __hpasRuleResult = {
'순요율' : 0.001275
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:8});
     __hpasRuleResult = {
'순요율' : 0.001377
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:9});
     __hpasRuleResult = {
'순요율' : 0.001476
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:10});
     __hpasRuleResult = {
'순요율' : 0.001577
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:11});
     __hpasRuleResult = {
'순요율' : 0.001685
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:12});
     __hpasRuleResult = {
'순요율' : 0.001797
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:13});
     __hpasRuleResult = {
'순요율' : 0.001931
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:14});
     __hpasRuleResult = {
'순요율' : 0.002094
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:15});
     __hpasRuleResult = {
'순요율' : 0.00229
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:16});
     __hpasRuleResult = {
'순요율' : 0.002512
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:17});
     __hpasRuleResult = {
'순요율' : 0.002736
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:18});
     __hpasRuleResult = {
'순요율' : 0.002943
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:19});
     __hpasRuleResult = {
'순요율' : 0.003132
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:20});
     __hpasRuleResult = {
'순요율' : 0.003292
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:21});
     __hpasRuleResult = {
'순요율' : 0.003441
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:22});
     __hpasRuleResult = {
'순요율' : 0.00356
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:23});
     __hpasRuleResult = {
'순요율' : 0.003734
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:24});
     __hpasRuleResult = {
'순요율' : 0.004079
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:25});
     __hpasRuleResult = {
'순요율' : 0.004657
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:26});
     __hpasRuleResult = {
'순요율' : 0.005388
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:27});
     __hpasRuleResult = {
'순요율' : 0.006145
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:28});
     __hpasRuleResult = {
'순요율' : 0.006801
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:29});
     __hpasRuleResult = {
'순요율' : 0.007341
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:30});
     __hpasRuleResult = {
'순요율' : 0.007819
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:31});
     __hpasRuleResult = {
'순요율' : 0.008298
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:32});
     __hpasRuleResult = {
'순요율' : 0.008767
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:33});
     __hpasRuleResult = {
'순요율' : 0.009305
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:34});
     __hpasRuleResult = {
'순요율' : 0.009994
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:35});
     __hpasRuleResult = {
'순요율' : 0.010896
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:36});
     __hpasRuleResult = {
'순요율' : 0.011966
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:37});
     __hpasRuleResult = {
'순요율' : 0.013112
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:38});
     __hpasRuleResult = {
'순요율' : 0.014226
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:39});
     __hpasRuleResult = {
'순요율' : 0.015277
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:40});
     __hpasRuleResult = {
'순요율' : 0.016309
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:41});
     __hpasRuleResult = {
'순요율' : 0.017366
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:42});
     __hpasRuleResult = {
'순요율' : 0.018355
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:43});
     __hpasRuleResult = {
'순요율' : 0.019241
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:44});
     __hpasRuleResult = {
'순요율' : 0.020097
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:45});
     __hpasRuleResult = {
'순요율' : 0.021099
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:46});
     __hpasRuleResult = {
'순요율' : 0.022412
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:47});
     __hpasRuleResult = {
'순요율' : 0.024093
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:48});
     __hpasRuleResult = {
'순요율' : 0.026055
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:49});
     __hpasRuleResult = {
'순요율' : 0.028177
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:50});
     __hpasRuleResult = {
'순요율' : 0.030384
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:51});
     __hpasRuleResult = {
'순요율' : 0.032672
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:52});
     __hpasRuleResult = {
'순요율' : 0.034992
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:53});
     __hpasRuleResult = {
'순요율' : 0.037322
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:54});
     __hpasRuleResult = {
'순요율' : 0.039659
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:55});
     __hpasRuleResult = {
'순요율' : 0.042012
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:56});
     __hpasRuleResult = {
'순요율' : 0.044358
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:57});
     __hpasRuleResult = {
'순요율' : 0.046674
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:58});
     __hpasRuleResult = {
'순요율' : 0.048926
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:59});
     __hpasRuleResult = {
'순요율' : 0.051114
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:60});
     __hpasRuleResult = {
'순요율' : 0.053257
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:61});
     __hpasRuleResult = {
'순요율' : 0.055327
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:62});
     __hpasRuleResult = {
'순요율' : 0.057273
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:63});
     __hpasRuleResult = {
'순요율' : 0.059036
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:64});
     __hpasRuleResult = {
'순요율' : 0.060612
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:65});
     __hpasRuleResult = {
'순요율' : 0.062014
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:66});
     __hpasRuleResult = {
'순요율' : 0.063259
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:67});
     __hpasRuleResult = {
'순요율' : 0.064257
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:68});
     __hpasRuleResult = {
'순요율' : 0.06492
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:69});
     __hpasRuleResult = {
'순요율' : 0.065194
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:70});
     __hpasRuleResult = {
'순요율' : 0.065157
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:71});
     __hpasRuleResult = {
'순요율' : 0.064979
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:72});
     __hpasRuleResult = {
'순요율' : 0.064817
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:73});
     __hpasRuleResult = {
'순요율' : 0.064739
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:74});
     __hpasRuleResult = {
'순요율' : 0.064732
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:75});
     __hpasRuleResult = {
'순요율' : 0.064747
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:76});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:77});
     __hpasRuleResult = {
'순요율' : 0.064758
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:78});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:79});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:80});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:81});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:82});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:83});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:84});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:85});
     __hpasRuleResult = {
'순요율' : 0.064757
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:86});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:87});
     __hpasRuleResult = {
'순요율' : 0.002385
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:88});
     __hpasRuleResult = {
'순요율' : 0.002166
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:89});
     __hpasRuleResult = {
'순요율' : 0.002132
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:90});
     __hpasRuleResult = {
'순요율' : 0.002282
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:91});
     __hpasRuleResult = {
'순요율' : 0.002592
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:92});
     __hpasRuleResult = {
'순요율' : 0.002992
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:93});
     __hpasRuleResult = {
'순요율' : 0.003395
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:94});
     __hpasRuleResult = {
'순요율' : 0.003746
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:95});
     __hpasRuleResult = {
'순요율' : 0.004012
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:96});
     __hpasRuleResult = {
'순요율' : 0.004214
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:97});
     __hpasRuleResult = {
'순요율' : 0.004376
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:98});
     __hpasRuleResult = {
'순요율' : 0.004492
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:99});
     __hpasRuleResult = {
'순요율' : 0.004632
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:100});
     __hpasRuleResult = {
'순요율' : 0.004845
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:101});
     __hpasRuleResult = {
'순요율' : 0.005134
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:102});
     __hpasRuleResult = {
'순요율' : 0.005432
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:103});
     __hpasRuleResult = {
'순요율' : 0.00565
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:104});
     __hpasRuleResult = {
'순요율' : 0.005736
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:105});
     __hpasRuleResult = {
'순요율' : 0.005704
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:106});
     __hpasRuleResult = {
'순요율' : 0.005635
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:107});
     __hpasRuleResult = {
'순요율' : 0.005582
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:108});
     __hpasRuleResult = {
'순요율' : 0.005541
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:109});
     __hpasRuleResult = {
'순요율' : 0.005534
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:110});
     __hpasRuleResult = {
'순요율' : 0.00561
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:111});
     __hpasRuleResult = {
'순요율' : 0.005824
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:112});
     __hpasRuleResult = {
'순요율' : 0.006191
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:113});
     __hpasRuleResult = {
'순요율' : 0.006689
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:114});
     __hpasRuleResult = {
'순요율' : 0.007283
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:115});
     __hpasRuleResult = {
'순요율' : 0.007911
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:116});
     __hpasRuleResult = {
'순요율' : 0.008524
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:117});
     __hpasRuleResult = {
'순요율' : 0.009116
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:118});
     __hpasRuleResult = {
'순요율' : 0.009692
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:119});
     __hpasRuleResult = {
'순요율' : 0.010295
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:120});
     __hpasRuleResult = {
'순요율' : 0.010955
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:121});
     __hpasRuleResult = {
'순요율' : 0.011716
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:122});
     __hpasRuleResult = {
'순요율' : 0.012589
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:123});
     __hpasRuleResult = {
'순요율' : 0.013565
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:124});
     __hpasRuleResult = {
'순요율' : 0.014591
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:125});
     __hpasRuleResult = {
'순요율' : 0.015649
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:126});
     __hpasRuleResult = {
'순요율' : 0.016677
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:127});
     __hpasRuleResult = {
'순요율' : 0.017684
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:128});
     __hpasRuleResult = {
'순요율' : 0.018646
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:129});
     __hpasRuleResult = {
'순요율' : 0.019671
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:130});
     __hpasRuleResult = {
'순요율' : 0.020918
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:131});
     __hpasRuleResult = {
'순요율' : 0.022516
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:132});
     __hpasRuleResult = {
'순요율' : 0.024509
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:133});
     __hpasRuleResult = {
'순요율' : 0.026827
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:134});
     __hpasRuleResult = {
'순요율' : 0.029395
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:135});
     __hpasRuleResult = {
'순요율' : 0.032135
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:136});
     __hpasRuleResult = {
'순요율' : 0.035009
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:137});
     __hpasRuleResult = {
'순요율' : 0.037935
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:138});
     __hpasRuleResult = {
'순요율' : 0.040751
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:139});
     __hpasRuleResult = {
'순요율' : 0.043311
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:140});
     __hpasRuleResult = {
'순요율' : 0.045597
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:141});
     __hpasRuleResult = {
'순요율' : 0.047651
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:142});
     __hpasRuleResult = {
'순요율' : 0.049518
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:143});
     __hpasRuleResult = {
'순요율' : 0.051142
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:144});
     __hpasRuleResult = {
'순요율' : 0.052454
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:145});
     __hpasRuleResult = {
'순요율' : 0.053409
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:146});
     __hpasRuleResult = {
'순요율' : 0.054062
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:147});
     __hpasRuleResult = {
'순요율' : 0.054452
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:148});
     __hpasRuleResult = {
'순요율' : 0.054564
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:149});
     __hpasRuleResult = {
'순요율' : 0.054365
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:150});
     __hpasRuleResult = {
'순요율' : 0.05386
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:151});
     __hpasRuleResult = {
'순요율' : 0.053081
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:152});
     __hpasRuleResult = {
'순요율' : 0.051863
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:153});
     __hpasRuleResult = {
'순요율' : 0.049839
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:154});
     __hpasRuleResult = {
'순요율' : 0.046678
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:155});
     __hpasRuleResult = {
'순요율' : 0.042472
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:156});
     __hpasRuleResult = {
'순요율' : 0.037982
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:157});
     __hpasRuleResult = {
'순요율' : 0.034251
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:158});
     __hpasRuleResult = {
'순요율' : 0.031975
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:159});
     __hpasRuleResult = {
'순요율' : 0.03115
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:160});
     __hpasRuleResult = {
'순요율' : 0.031203
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:161});
     __hpasRuleResult = {
'순요율' : 0.031493
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:162});
     __hpasRuleResult = {
'순요율' : 0.03168
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:163});
     __hpasRuleResult = {
'순요율' : 0.031717
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:164});
     __hpasRuleResult = {
'순요율' : 0.031703
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:165});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:166});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:167});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:168});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:169});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:170});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11614"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해21대질병수술비_16대담보요율_001' , row:171});
     __hpasRuleResult = {
'순요율' : 0.031696
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};