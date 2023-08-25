function(기관코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_제휴사코드조회_기관코드기준__001',ruleName:'일반_공통_제휴사코드조회(기관코드기준)',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'기관코드:'+JSON.stringify(기관코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'기관코드' , 'value':JSON.stringify(기관코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:30:31
    if(((기관코드 == "021"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:0});
     __hpasRuleResult = {
'제휴사코드' : "4A082" , '제휴사명' : "한화증권" , 'TO_BE코드' : "3080082"
}

    }
    else if(((기관코드 == "049"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:1});
     __hpasRuleResult = {
'제휴사코드' : "4A479" , '제휴사명' : "미래에셋" , 'TO_BE코드' : "3080479"
}

    }
    else if(((기관코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:2});
     __hpasRuleResult = {
'제휴사코드' : "4A530" , '제휴사명' : "산업은행" , 'TO_BE코드' : "3080530"
}

    }
    else if(((기관코드 == "23"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:3});
     __hpasRuleResult = {
'제휴사코드' : "4A547" , '제휴사명' : "제일은행" , 'TO_BE코드' : "3080547"
}

    }
    else if(((기관코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:4});
     __hpasRuleResult = {
'제휴사코드' : "4A549" , '제휴사명' : "기업은행" , 'TO_BE코드' : "3080549"
}

    }
    else if(((기관코드 == "37"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:5});
     __hpasRuleResult = {
'제휴사코드' : "4A650" , '제휴사명' : "전북은행" , 'TO_BE코드' : "3080650"
}

    }
    else if(((기관코드 == "AA"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:6});
     __hpasRuleResult = {
'제휴사코드' : "4A664" , '제휴사명' : "현대홈쇼핑" , 'TO_BE코드' : "3080664"
}

    }
    else if(((기관코드 == "003"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:7});
     __hpasRuleResult = {
'제휴사코드' : "4A665" , '제휴사명' : "CJMALL" , 'TO_BE코드' : "3080665"
}

    }
    else if(((기관코드 == "999"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:8});
     __hpasRuleResult = {
'제휴사코드' : "4A666" , '제휴사명' : "대리점" , 'TO_BE코드' : "3080666"
}

    }
    else if(((기관코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:9});
     __hpasRuleResult = {
'제휴사코드' : "4A667" , '제휴사명' : "국민은행" , 'TO_BE코드' : "3080667"
}

    }
    else if(((기관코드 == "81"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:10});
     __hpasRuleResult = {
'제휴사코드' : "4A668" , '제휴사명' : "하나은행" , 'TO_BE코드' : "3080668"
}

    }
    else if(((기관코드 == "21"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:11});
     __hpasRuleResult = {
'제휴사코드' : "4A670" , '제휴사명' : "조흥은행" , 'TO_BE코드' : "3080670"
}

    }
    else if(((기관코드 == "31"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:12});
     __hpasRuleResult = {
'제휴사코드' : "4A689" , '제휴사명' : "대구은행" , 'TO_BE코드' : "3080689"
}

    }
    else if(((기관코드 == "05"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:13});
     __hpasRuleResult = {
'제휴사코드' : "4A690" , '제휴사명' : "외환은행" , 'TO_BE코드' : "3080690"
}

    }
    else if(((기관코드 == "20"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:14});
     __hpasRuleResult = {
'제휴사코드' : "4A763" , '제휴사명' : "우리은행" , 'TO_BE코드' : "3080763"
}

    }
    else if(((기관코드 == "26"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:15});
     __hpasRuleResult = {
'제휴사코드' : "4A904" , '제휴사명' : "신한은행" , 'TO_BE코드' : "3080904"
}

    }
    else if(((기관코드 == "BB"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:16});
     __hpasRuleResult = {
'제휴사코드' : "4A941" , '제휴사명' : "CJ홈쇼핑" , 'TO_BE코드' : "3080941"
}

    }
    else if(((기관코드 == "35"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:17});
     __hpasRuleResult = {
'제휴사코드' : "4B052" , '제휴사명' : "제주은행" , 'TO_BE코드' : "3081052"
}

    }
    else if(((기관코드 == "88"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:18});
     __hpasRuleResult = {
'제휴사코드' : "4A904" , '제휴사명' : "통합신한" , 'TO_BE코드' : "3080904"
}

    }
    else if(((기관코드 == "50"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:19});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "솔로몬저축은행" , 'TO_BE코드' : "3100577"
}

    }
    else if(((기관코드 == "278"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:20});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "신한증권" , 'TO_BE코드' : "3103434"
}

    }
    else if(((기관코드 == "39"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:21});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "경남은행" , 'TO_BE코드' : "3107208"
}

    }
    else if(((기관코드 == "34"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:22});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "광주은행" , 'TO_BE코드' : "3112328"
}

    }
    else if(((기관코드 == "32"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:23});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "부산은행" , 'TO_BE코드' : "3123082"
}

    }
    else if(((기관코드 == "501"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:24});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스저축은행" , 'TO_BE코드' : "3302240"
}

    }
    else if(((기관코드 == "A01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:25});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스저축은행" , 'TO_BE코드' : "3302240"
}

    }
    else if(((기관코드 == "502"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:26});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스이상호저축은행" , 'TO_BE코드' : "3302243"
}

    }
    else if(((기관코드 == "A02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:27});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스이상호저축은행" , 'TO_BE코드' : "3302243"
}

    }
    else if(((기관코드 == "503"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:28});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스삼상호저축은행" , 'TO_BE코드' : "3302251"
}

    }
    else if(((기관코드 == "A03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:29});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스삼상호저축은행" , 'TO_BE코드' : "3302251"
}

    }
    else if(((기관코드 == "A04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:30});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "현대스위스사상호저축은행" , 'TO_BE코드' : "3338086"
}

    }
    else if(((기관코드 == "27"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:31});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "씨티은행" , 'TO_BE코드' : "3301771"
}

    }
    else if(((기관코드 == "247"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:32});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "우리투자증권" , 'TO_BE코드' : "3253876"
}

    }
    else if(((기관코드 == "11"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:33});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "농협은행" , 'TO_BE코드' : "3336715"
}

    }
    else if(((기관코드 == "B01"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:34});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "스마트저축은행" , 'TO_BE코드' : "3384999"
}

    }
    else if(((기관코드 == "B02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_제휴사코드조회_기관코드기준__001' , row:35});
     __hpasRuleResult = {
'제휴사코드' : "" , '제휴사명' : "한화저축은행" , 'TO_BE코드' : "3389385"
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};