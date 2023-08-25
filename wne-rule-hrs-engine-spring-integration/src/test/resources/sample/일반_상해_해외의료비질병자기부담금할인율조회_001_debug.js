function(해외의료비질병가입금액,해외의료비질병자기부담금비율코드,해외의료비질병자기부담금특약가입여부 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001',ruleName:'일반_상해_해외의료비질병자기부담금할인율조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'해외의료비질병가입금액:'+JSON.stringify(해외의료비질병가입금액)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'해외의료비질병가입금액' , 'value':JSON.stringify(해외의료비질병가입금액) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'해외의료비질병자기부담금비율코드:'+JSON.stringify(해외의료비질병자기부담금비율코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'해외의료비질병자기부담금비율코드' , 'value':JSON.stringify(해외의료비질병자기부담금비율코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'해외의료비질병자기부담금특약가입여부:'+JSON.stringify(해외의료비질병자기부담금특약가입여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'해외의료비질병자기부담금특약가입여부' , 'value':JSON.stringify(해외의료비질병자기부담금특약가입여부) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    해외의료비질병자기부담금할인율 = 0


    // Compiler Version 1 , Created : 2023-08-24 12:07:28
    if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:0});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 0.72
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:1});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1.44
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:2});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2.15
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:3});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 3.59
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:4});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 5.03
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:5});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 7.18
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:6});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 8.8
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:7});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 11.9
}

    }
    else if(((해외의료비질병가입금액 < 10000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:8});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 17.09
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:9});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 0.95
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:10});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1.89
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:11});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2.84
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:12});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 4.73
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:13});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 6.62
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:14});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 9.45
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:15});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 11.34
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:16});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 14.34
}

    }
    else if(((해외의료비질병가입금액 >= 10000000)&&(해외의료비질병가입금액 < 20000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:17});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 19.38
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "01"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:18});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 1
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "02"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:19});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 2
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "03"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:20});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 3
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "05"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:21});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 5
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "07"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:22});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 7
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "10"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:23});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 10
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "12"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:24});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 12
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "15"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:25});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 15
}

    }
    else if(((해외의료비질병가입금액 >= 20000000))
    && ((해외의료비질병자기부담금비율코드 == "20"))
    && ((해외의료비질병자기부담금특약가입여부 == "1"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_상해_해외의료비질병자기부담금할인율조회_001' , row:26});
     __hpasRuleResult = {
'해외의료비질병자기부담금할인율' : 20
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};