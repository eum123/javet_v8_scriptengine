function(벽코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_건물급수_구조구분조회_벽__001',ruleName:'일반_건물급수_구조구분조회(벽)',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'벽코드:'+JSON.stringify(벽코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'벽코드' , 'value':JSON.stringify(벽코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 13:47:06
    if(((벽코드 == "01"/* 치장벽돌 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:0});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "02"/* 시멘트벽돌 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:1});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "03"/* 샌드위치판넬 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:2});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "04"/* 시멘트블록 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:3});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "05"/* 시멘트몰탈 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:4});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "06"/* 칼라피복철판 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:5});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "07"/* 화강석및외장타일 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:6});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "08"/* 콘크리트벽 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:7});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "09"/* 프리캐스트판넬 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:8});
     __hpasRuleResult = {
'벽구조구분' : "내화"
}

    }
    else if(((벽코드 == "10"/* 블록벽 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:9});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "11"/* 유리 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:10});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "12"/* 금속판 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:11});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "13"/* 흙벽 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:12});
     __hpasRuleResult = {
'벽구조구분' : "불연"
}

    }
    else if(((벽코드 == "14"/* 목구조 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:13});
     __hpasRuleResult = {
'벽구조구분' : "가연"
}

    }
    else if(((벽코드 == "15"/* 천막구조 */))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_건물급수_구조구분조회_벽__001' , row:14});
     __hpasRuleResult = {
'벽구조구분' : "가연"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};