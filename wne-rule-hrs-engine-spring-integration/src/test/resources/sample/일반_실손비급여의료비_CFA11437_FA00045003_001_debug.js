function(성별코드,담보코드,보험연령 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001',ruleName:'일반_실손비급여의료비_CFA11437_FA00045003',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
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


    // Compiler Version 1 , Created : 2023-08-24 18:02:06
    if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:0});
     __hpasRuleResult = {
'영업요율' : 25410
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:1});
     __hpasRuleResult = {
'영업요율' : 22605
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:2});
     __hpasRuleResult = {
'영업요율' : 14790
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:3});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:4});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:5});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:6});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:7});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:8});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:9});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:10});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:11});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:12});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:13});
     __hpasRuleResult = {
'영업요율' : 16293
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:14});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:15});
     __hpasRuleResult = {
'영업요율' : 17263
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:16});
     __hpasRuleResult = {
'영업요율' : 18127
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:17});
     __hpasRuleResult = {
'영업요율' : 18829
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:18});
     __hpasRuleResult = {
'영업요율' : 19434
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:19});
     __hpasRuleResult = {
'영업요율' : 20010
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:20});
     __hpasRuleResult = {
'영업요율' : 19819
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:21});
     __hpasRuleResult = {
'영업요율' : 19632
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:22});
     __hpasRuleResult = {
'영업요율' : 19405
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:23});
     __hpasRuleResult = {
'영업요율' : 21897
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:24});
     __hpasRuleResult = {
'영업요율' : 19088
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:25});
     __hpasRuleResult = {
'영업요율' : 18700
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:26});
     __hpasRuleResult = {
'영업요율' : 18436
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:27});
     __hpasRuleResult = {
'영업요율' : 18783
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:28});
     __hpasRuleResult = {
'영업요율' : 20005
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:29});
     __hpasRuleResult = {
'영업요율' : 22129
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:30});
     __hpasRuleResult = {
'영업요율' : 24402
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:31});
     __hpasRuleResult = {
'영업요율' : 26466
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:32});
     __hpasRuleResult = {
'영업요율' : 28029
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:33});
     __hpasRuleResult = {
'영업요율' : 29212
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:34});
     __hpasRuleResult = {
'영업요율' : 21656
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:35});
     __hpasRuleResult = {
'영업요율' : 30046
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:36});
     __hpasRuleResult = {
'영업요율' : 30683
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:37});
     __hpasRuleResult = {
'영업요율' : 31158
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:38});
     __hpasRuleResult = {
'영업요율' : 31683
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:39});
     __hpasRuleResult = {
'영업요율' : 32066
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:40});
     __hpasRuleResult = {
'영업요율' : 32312
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:41});
     __hpasRuleResult = {
'영업요율' : 32363
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:42});
     __hpasRuleResult = {
'영업요율' : 32380
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:43});
     __hpasRuleResult = {
'영업요율' : 32329
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:44});
     __hpasRuleResult = {
'영업요율' : 32287
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:45});
     __hpasRuleResult = {
'영업요율' : 21273
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:46});
     __hpasRuleResult = {
'영업요율' : 32214
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:47});
     __hpasRuleResult = {
'영업요율' : 32129
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:48});
     __hpasRuleResult = {
'영업요율' : 32175
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:49});
     __hpasRuleResult = {
'영업요율' : 32434
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:50});
     __hpasRuleResult = {
'영업요율' : 32907
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:51});
     __hpasRuleResult = {
'영업요율' : 33561
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:52});
     __hpasRuleResult = {
'영업요율' : 34356
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:53});
     __hpasRuleResult = {
'영업요율' : 35378
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:54});
     __hpasRuleResult = {
'영업요율' : 36873
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:55});
     __hpasRuleResult = {
'영업요율' : 38256
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:56});
     __hpasRuleResult = {
'영업요율' : 19524
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:57});
     __hpasRuleResult = {
'영업요율' : 39609
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:58});
     __hpasRuleResult = {
'영업요율' : 41026
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:59});
     __hpasRuleResult = {
'영업요율' : 42590
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:60});
     __hpasRuleResult = {
'영업요율' : 44200
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:61});
     __hpasRuleResult = {
'영업요율' : 45658
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:62});
     __hpasRuleResult = {
'영업요율' : 46851
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:63});
     __hpasRuleResult = {
'영업요율' : 47834
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:64});
     __hpasRuleResult = {
'영업요율' : 48839
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:65});
     __hpasRuleResult = {
'영업요율' : 49853
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:66});
     __hpasRuleResult = {
'영업요율' : 50790
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:67});
     __hpasRuleResult = {
'영업요율' : 16812
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:68});
     __hpasRuleResult = {
'영업요율' : 51687
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:69});
     __hpasRuleResult = {
'영업요율' : 52685
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:70});
     __hpasRuleResult = {
'영업요율' : 53992
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:71});
     __hpasRuleResult = {
'영업요율' : 55638
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:72});
     __hpasRuleResult = {
'영업요율' : 56999
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:73});
     __hpasRuleResult = {
'영업요율' : 58580
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:74});
     __hpasRuleResult = {
'영업요율' : 60638
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:75});
     __hpasRuleResult = {
'영업요율' : 62736
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:76});
     __hpasRuleResult = {
'영업요율' : 63458
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:77});
     __hpasRuleResult = {
'영업요율' : 64221
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:78});
     __hpasRuleResult = {
'영업요율' : 14244
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:79});
     __hpasRuleResult = {
'영업요율' : 65021
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:80});
     __hpasRuleResult = {
'영업요율' : 65831
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:81});
     __hpasRuleResult = {
'영업요율' : 66653
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:82});
     __hpasRuleResult = {
'영업요율' : 67336
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:83});
     __hpasRuleResult = {
'영업요율' : 68033
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:84});
     __hpasRuleResult = {
'영업요율' : 68741
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:85});
     __hpasRuleResult = {
'영업요율' : 69451
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:86});
     __hpasRuleResult = {
'영업요율' : 70172
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:87});
     __hpasRuleResult = {
'영업요율' : 70977
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:88});
     __hpasRuleResult = {
'영업요율' : 71807
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:89});
     __hpasRuleResult = {
'영업요율' : 13334
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:90});
     __hpasRuleResult = {
'영업요율' : 72663
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:91});
     __hpasRuleResult = {
'영업요율' : 73360
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:92});
     __hpasRuleResult = {
'영업요율' : 74658
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:93});
     __hpasRuleResult = {
'영업요율' : 76194
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:94});
     __hpasRuleResult = {
'영업요율' : 77631
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:95});
     __hpasRuleResult = {
'영업요율' : 78772
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:96});
     __hpasRuleResult = {
'영업요율' : 79509
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:97});
     __hpasRuleResult = {
'영업요율' : 79848
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:98});
     __hpasRuleResult = {
'영업요율' : 80267
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:99});
     __hpasRuleResult = {
'영업요율' : 80767
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:100});
     __hpasRuleResult = {
'영업요율' : 13632
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:101});
     __hpasRuleResult = {
'영업요율' : 81265
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:102});
     __hpasRuleResult = {
'영업요율' : 81772
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:103});
     __hpasRuleResult = {
'영업요율' : 82287
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:104});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:105});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:106});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:107});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:108});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:109});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '01'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:110});
     __hpasRuleResult = {
'영업요율' : 82289
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 0))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:111});
     __hpasRuleResult = {
'영업요율' : 22510
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 1))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:112});
     __hpasRuleResult = {
'영업요율' : 18910
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 10))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:113});
     __hpasRuleResult = {
'영업요율' : 16546
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 100))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:114});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 101))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:115});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 102))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:116});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 103))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:117});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 104))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:118});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 105))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:119});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 106))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:120});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 107))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:121});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 108))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:122});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 109))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:123});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 11))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:124});
     __hpasRuleResult = {
'영업요율' : 15239
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 110))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:125});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 12))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:126});
     __hpasRuleResult = {
'영업요율' : 13983
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 13))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:127});
     __hpasRuleResult = {
'영업요율' : 13405
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 14))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:128});
     __hpasRuleResult = {
'영업요율' : 13285
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 15))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:129});
     __hpasRuleResult = {
'영업요율' : 13541
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 16))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:130});
     __hpasRuleResult = {
'영업요율' : 14080
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 17))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:131});
     __hpasRuleResult = {
'영업요율' : 14822
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 18))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:132});
     __hpasRuleResult = {
'영업요율' : 16168
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 19))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:133});
     __hpasRuleResult = {
'영업요율' : 18063
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 2))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:134});
     __hpasRuleResult = {
'영업요율' : 16414
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 20))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:135});
     __hpasRuleResult = {
'영업요율' : 20410
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 21))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:136});
     __hpasRuleResult = {
'영업요율' : 22261
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 22))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:137});
     __hpasRuleResult = {
'영업요율' : 23505
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 23))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:138});
     __hpasRuleResult = {
'영업요율' : 24468
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 24))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:139});
     __hpasRuleResult = {
'영업요율' : 25395
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 25))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:140});
     __hpasRuleResult = {
'영업요율' : 26297
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 26))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:141});
     __hpasRuleResult = {
'영업요율' : 27192
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 27))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:142});
     __hpasRuleResult = {
'영업요율' : 28078
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 28))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:143});
     __hpasRuleResult = {
'영업요율' : 28868
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 29))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:144});
     __hpasRuleResult = {
'영업요율' : 29656
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 3))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:145});
     __hpasRuleResult = {
'영업요율' : 15351
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 30))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:146});
     __hpasRuleResult = {
'영업요율' : 30444
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 31))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:147});
     __hpasRuleResult = {
'영업요율' : 31236
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 32))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:148});
     __hpasRuleResult = {
'영업요율' : 32027
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 33))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:149});
     __hpasRuleResult = {
'영업요율' : 33348
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 34))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:150});
     __hpasRuleResult = {
'영업요율' : 34670
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 35))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:151});
     __hpasRuleResult = {
'영업요율' : 36036
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 36))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:152});
     __hpasRuleResult = {
'영업요율' : 37451
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 37))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:153});
     __hpasRuleResult = {
'영업요율' : 38751
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 38))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:154});
     __hpasRuleResult = {
'영업요율' : 41068
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 39))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:155});
     __hpasRuleResult = {
'영업요율' : 42639
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 4))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:156});
     __hpasRuleResult = {
'영업요율' : 16495
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 40))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:157});
     __hpasRuleResult = {
'영업요율' : 43990
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 41))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:158});
     __hpasRuleResult = {
'영업요율' : 45536
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 42))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:159});
     __hpasRuleResult = {
'영업요율' : 47358
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 43))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:160});
     __hpasRuleResult = {
'영업요율' : 49495
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 44))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:161});
     __hpasRuleResult = {
'영업요율' : 52004
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 45))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:162});
     __hpasRuleResult = {
'영업요율' : 54858
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 46))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:163});
     __hpasRuleResult = {
'영업요율' : 57899
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 47))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:164});
     __hpasRuleResult = {
'영업요율' : 60851
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 48))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:165});
     __hpasRuleResult = {
'영업요율' : 63704
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 49))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:166});
     __hpasRuleResult = {
'영업요율' : 66358
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 5))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:167});
     __hpasRuleResult = {
'영업요율' : 18061
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 50))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:168});
     __hpasRuleResult = {
'영업요율' : 68824
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 51))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:169});
     __hpasRuleResult = {
'영업요율' : 71070
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 52))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:170});
     __hpasRuleResult = {
'영업요율' : 72982
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 53))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:171});
     __hpasRuleResult = {
'영업요율' : 74238
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 54))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:172});
     __hpasRuleResult = {
'영업요율' : 74324
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 55))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:173});
     __hpasRuleResult = {
'영업요율' : 73207
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 56))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:174});
     __hpasRuleResult = {
'영업요율' : 71443
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 57))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:175});
     __hpasRuleResult = {
'영업요율' : 69841
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 58))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:176});
     __hpasRuleResult = {
'영업요율' : 68890
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 59))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:177});
     __hpasRuleResult = {
'영업요율' : 68260
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 6))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:178});
     __hpasRuleResult = {
'영업요율' : 19395
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 60))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:179});
     __hpasRuleResult = {
'영업요율' : 67868
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 61))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:180});
     __hpasRuleResult = {
'영업요율' : 67814
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 62))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:181});
     __hpasRuleResult = {
'영업요율' : 68226
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 63))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:182});
     __hpasRuleResult = {
'영업요율' : 67833
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 64))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:183});
     __hpasRuleResult = {
'영업요율' : 65036
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 65))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:184});
     __hpasRuleResult = {
'영업요율' : 63575
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 66))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:185});
     __hpasRuleResult = {
'영업요율' : 64473
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 67))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:186});
     __hpasRuleResult = {
'영업요율' : 66443
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 68))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:187});
     __hpasRuleResult = {
'영업요율' : 66526
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 69))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:188});
     __hpasRuleResult = {
'영업요율' : 66704
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 7))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:189});
     __hpasRuleResult = {
'영업요율' : 19832
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 70))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:190});
     __hpasRuleResult = {
'영업요율' : 66943
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 71))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:191});
     __hpasRuleResult = {
'영업요율' : 67212
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 72))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:192});
     __hpasRuleResult = {
'영업요율' : 67487
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 73))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:193});
     __hpasRuleResult = {
'영업요율' : 67792
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 74))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:194});
     __hpasRuleResult = {
'영업요율' : 68409
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 75))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:195});
     __hpasRuleResult = {
'영업요율' : 69065
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 76))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:196});
     __hpasRuleResult = {
'영업요율' : 69736
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 77))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:197});
     __hpasRuleResult = {
'영업요율' : 70397
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 78))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:198});
     __hpasRuleResult = {
'영업요율' : 71148
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 79))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:199});
     __hpasRuleResult = {
'영업요율' : 71953
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 8))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:200});
     __hpasRuleResult = {
'영업요율' : 19334
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 80))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:201});
     __hpasRuleResult = {
'영업요율' : 72933
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 81))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:202});
     __hpasRuleResult = {
'영업요율' : 74599
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 82))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:203});
     __hpasRuleResult = {
'영업요율' : 76753
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 83))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:204});
     __hpasRuleResult = {
'영업요율' : 79153
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 84))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:205});
     __hpasRuleResult = {
'영업요율' : 81475
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 85))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:206});
     __hpasRuleResult = {
'영업요율' : 83360
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 86))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:207});
     __hpasRuleResult = {
'영업요율' : 84577
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 87))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:208});
     __hpasRuleResult = {
'영업요율' : 85131
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 88))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:209});
     __hpasRuleResult = {
'영업요율' : 85216
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 89))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:210});
     __hpasRuleResult = {
'영업요율' : 85094
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 9))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:211});
     __hpasRuleResult = {
'영업요율' : 18005
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 90))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:212});
     __hpasRuleResult = {
'영업요율' : 84960
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 91))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:213});
     __hpasRuleResult = {
'영업요율' : 84892
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 92))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:214});
     __hpasRuleResult = {
'영업요율' : 84877
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 93))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:215});
     __hpasRuleResult = {
'영업요율' : 84887
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 94))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:216});
     __hpasRuleResult = {
'영업요율' : 84892
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 95))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:217});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 96))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:218});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 97))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:219});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 98))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:220});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }
    else if(((성별코드 == '02'))
    && ((담보코드 == "CFA11437"))
    && ((보험연령 == 99))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_실손비급여의료비_CFA11437_FA00045003_001' , row:221});
     __hpasRuleResult = {
'영업요율' : 84894
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};