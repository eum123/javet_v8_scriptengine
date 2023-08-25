function(상품코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_상품별예정손해율_001',ruleName:'일반_공통_상품별예정손해율',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};


    // Compiler Version 1 , Created : 2023-08-18 16:18:56
    if(((상품코드 == 'FA00003001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:0});
     __hpasRuleResult = {
'예정손해율' : 0.43
}

    }
    else if(((상품코드 == 'FA00004001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:1});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00004002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:2});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00005001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:3});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00005002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:4});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00008001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:5});
     __hpasRuleResult = {
'예정손해율' : 0.47
}

    }
    else if(((상품코드 == 'FA00051004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:6});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00010001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:7});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00010002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:8});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00010003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:9});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00010004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:10});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00010005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:11});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00010006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:12});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00011001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:13});
     __hpasRuleResult = {
'예정손해율' : 0.65
}

    }
    else if(((상품코드 == 'FA00011002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:14});
     __hpasRuleResult = {
'예정손해율' : 0.65
}

    }
    else if(((상품코드 == 'FA00011003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:15});
     __hpasRuleResult = {
'예정손해율' : 0.65
}

    }
    else if(((상품코드 == 'FA00012001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:16});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00012002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:17});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00012003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:18});
     __hpasRuleResult = {
'예정손해율' : 0.79
}

    }
    else if(((상품코드 == 'FA00013001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:19});
     __hpasRuleResult = {
'예정손해율' : 0.68
}

    }
    else if(((상품코드 == 'FA00013002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:20});
     __hpasRuleResult = {
'예정손해율' : 0.68
}

    }
    else if(((상품코드 == 'FA00014001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:21});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00016001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:22});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00016020'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:23});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00016002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:24});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:25});
     __hpasRuleResult = {
'예정손해율' : 0.8
}

    }
    else if(((상품코드 == 'FA00016005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:26});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:27});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016008'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:28});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:29});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:30});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:31});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016012'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:32});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016013'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:33});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016014'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:34});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016015'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:35});
     __hpasRuleResult = {
'예정손해율' : 0.93
}

    }
    else if(((상품코드 == 'FA00016016'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:36});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016017'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:37});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00016018'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:38});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00017001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:39});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00018001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:40});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00019001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:41});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00019002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:42});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00020001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:43});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00020002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:44});
     __hpasRuleResult = {
'예정손해율' : 0.8
}

    }
    else if(((상품코드 == 'FA00021001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:45});
     __hpasRuleResult = {
'예정손해율' : 0.88
}

    }
    else if(((상품코드 == 'FA00022001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:46});
     __hpasRuleResult = {
'예정손해율' : 0.72
}

    }
    else if(((상품코드 == 'FA00022011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:47});
     __hpasRuleResult = {
'예정손해율' : 0.72
}

    }
    else if(((상품코드 == 'FA00022003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:48});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00022004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:49});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00022005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:50});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00022006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:51});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00022007'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:52});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00022008'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:53});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:54});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:55});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:56});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:57});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:58});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:59});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023007'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:60});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023008'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:61});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:62});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:63});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:64});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023012'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:65});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023013'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:66});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023014'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:67});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023015'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:68});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023016'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:69});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023017'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:70});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023018'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:71});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023019'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:72});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023020'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:73});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023021'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:74});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023022'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:75});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023023'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:76});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023024'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:77});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00025001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:78});
     __hpasRuleResult = {
'예정손해율' : 0.79
}

    }
    else if(((상품코드 == 'FA00025002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:79});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00025003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:80});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00026001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:81});
     __hpasRuleResult = {
'예정손해율' : 0.79
}

    }
    else if(((상품코드 == 'FA00027001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:82});
     __hpasRuleResult = {
'예정손해율' : 0.79
}

    }
    else if(((상품코드 == 'FA00028001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:83});
     __hpasRuleResult = {
'예정손해율' : 0.81
}

    }
    else if(((상품코드 == 'FA00030001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:84});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00030002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:85});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00030003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:86});
     __hpasRuleResult = {
'예정손해율' : 0.8
}

    }
    else if(((상품코드 == 'FA00032002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:87});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00034002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:88});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:89});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:90});
     __hpasRuleResult = {
'예정손해율' : 0.96
}

    }
    else if(((상품코드 == 'FA00034004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:91});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:92});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:93});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034007'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:94});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00043001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:95});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00044001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:96});
     __hpasRuleResult = {
'예정손해율' : 0.67
}

    }
    else if(((상품코드 == 'FA00045001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:97});
     __hpasRuleResult = {
'예정손해율' : 0.41
}

    }
    else if(((상품코드 == 'FA00045002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:98});
     __hpasRuleResult = {
'예정손해율' : 0.94
}

    }
    else if(((상품코드 == 'FA00045003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:99});
     __hpasRuleResult = {
'예정손해율' : 0.41
}

    }
    else if(((상품코드 == 'FA00046001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:100});
     __hpasRuleResult = {
'예정손해율' : 0.66
}

    }
    else if(((상품코드 == 'FA00048001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:101});
     __hpasRuleResult = {
'예정손해율' : 0.54
}

    }
    else if(((상품코드 == 'FA00049001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:102});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00049002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:103});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00049003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:104});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00049004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:105});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00050002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:106});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00050003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:107});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00051001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:108});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00051002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:109});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00051003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:110});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00052001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:111});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00052002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:112});
     __hpasRuleResult = {
'예정손해율' : 0.79
}

    }
    else if(((상품코드 == 'FA00052007'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:113});
     __hpasRuleResult = {
'예정손해율' : 0.73
}

    }
    else if(((상품코드 == 'FA00052008'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:114});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00052009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:115});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00053001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:116});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00054001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:117});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00055001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:118});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00055002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:119});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00057001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:120});
     __hpasRuleResult = {
'예정손해율' : 0.58
}

    }
    else if(((상품코드 == 'FA00059001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:121});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00166001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:122});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00060001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:123});
     __hpasRuleResult = {
'예정손해율' : 0.77
}

    }
    else if(((상품코드 == 'FA00061001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:124});
     __hpasRuleResult = {
'예정손해율' : 0.6
}

    }
    else if(((상품코드 == 'FA00062001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:125});
     __hpasRuleResult = {
'예정손해율' : 0.83
}

    }
    else if(((상품코드 == 'FA00066001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:126});
     __hpasRuleResult = {
'예정손해율' : 0.69
}

    }
    else if(((상품코드 == 'FA00066004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:127});
     __hpasRuleResult = {
'예정손해율' : 0.90
}

    }
    else if(((상품코드 == 'FA00066002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:128});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00066003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:129});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00067001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:130});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00068001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:131});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00069001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:132});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00071001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:133});
     __hpasRuleResult = {
'예정손해율' : 0.63
}

    }
    else if(((상품코드 == 'FA00072001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:134});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00074001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:135});
     __hpasRuleResult = {
'예정손해율' : 0.43
}

    }
    else if(((상품코드 == 'FA00074002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:136});
     __hpasRuleResult = {
'예정손해율' : 0.43
}

    }
    else if(((상품코드 == 'FA00075001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:137});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00076001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:138});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00076002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:139});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00077001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:140});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00077002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:141});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00077003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:142});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00077004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:143});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00078001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:144});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00079001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:145});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00080001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:146});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00081001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:147});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00081002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:148});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00081003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:149});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00083001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:150});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00084001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:151});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00085001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:152});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00087'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:153});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00088001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:154});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00090001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:155});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00091001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:156});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00092001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:157});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00094001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:158});
     __hpasRuleResult = {
'예정손해율' : 0.69
}

    }
    else if(((상품코드 == 'FA00095001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:159});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00095002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:160});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00095003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:161});
     __hpasRuleResult = {
'예정손해율' : 0.65
}

    }
    else if(((상품코드 == 'FA00096001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:162});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00096002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:163});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00097001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:164});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00098001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:165});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00100001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:166});
     __hpasRuleResult = {
'예정손해율' : 0.08
}

    }
    else if(((상품코드 == 'FA00101001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:167});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00102001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:168});
     __hpasRuleResult = {
'예정손해율' : 0.54
}

    }
    else if(((상품코드 == 'FA00103001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:169});
     __hpasRuleResult = {
'예정손해율' : 0.66
}

    }
    else if(((상품코드 == 'FA00103002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:170});
     __hpasRuleResult = {
'예정손해율' : 0.66
}

    }
    else if(((상품코드 == 'FA00103003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:171});
     __hpasRuleResult = {
'예정손해율' : 0.50
}

    }
    else if(((상품코드 == 'FA00104001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:172});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00106001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:173});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00107001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:174});
     __hpasRuleResult = {
'예정손해율' : 0.97
}

    }
    else if(((상품코드 == 'FA00107002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:175});
     __hpasRuleResult = {
'예정손해율' : 0.97
}

    }
    else if(((상품코드 == 'FA00107003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:176});
     __hpasRuleResult = {
'예정손해율' : 0.97
}

    }
    else if(((상품코드 == 'FA00108001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:177});
     __hpasRuleResult = {
'예정손해율' : 0.47
}

    }
    else if(((상품코드 == 'FA00108002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:178});
     __hpasRuleResult = {
'예정손해율' : 0.67
}

    }
    else if(((상품코드 == 'FA00109001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:179});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00110001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:180});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00111001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:181});
     __hpasRuleResult = {
'예정손해율' : 0.51
}

    }
    else if(((상품코드 == 'FA00112001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:182});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }
    else if(((상품코드 == 'FA00113001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:183});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00113002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:184});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00114001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:185});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00115001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:186});
     __hpasRuleResult = {
'예정손해율' : 0.52
}

    }
    else if(((상품코드 == 'FA00117001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:187});
     __hpasRuleResult = {
'예정손해율' : 0.08
}

    }
    else if(((상품코드 == 'FA00120002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:188});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00121001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:189});
     __hpasRuleResult = {
'예정손해율' : 0.76
}

    }
    else if(((상품코드 == 'FA00121002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:190});
     __hpasRuleResult = {
'예정손해율' : 0.6
}

    }
    else if(((상품코드 == 'FA00045004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:191});
     __hpasRuleResult = {
'예정손해율' : 0.41
}

    }
    else if(((상품코드 == 'FA00122001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:192});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00122002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:193});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00030004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:194});
     __hpasRuleResult = {
'예정손해율' : 0.58
}

    }
    else if(((상품코드 == 'FA00034009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:195});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00044002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:196});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00045005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:197});
     __hpasRuleResult = {
'예정손해율' : 0.41
}

    }
    else if(((상품코드 == 'FA00045006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:198});
     __hpasRuleResult = {
'예정손해율' : 0.51
}

    }
    else if(((상품코드 == 'FA00016019'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:199});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00034011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:200});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00123001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:201});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00004003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:202});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00005003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:203});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00016021'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:204});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00023026'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:205});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023027'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:206});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00023028'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:207});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00080002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:208});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00092002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:209});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00020003'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:210});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00125001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:211});
     __hpasRuleResult = {
'예정손해율' : 0.65
}

    }
    else if(((상품코드 == 'FA00052010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:212});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00052011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:213});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00052012'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:214});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00016023'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:215});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00016024'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:216});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00127001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:217});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00025004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:218});
     __hpasRuleResult = {
'예정손해율' : 0.94
}

    }
    else if(((상품코드 == 'FA00115002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:219});
     __hpasRuleResult = {
'예정손해율' : 0.52
}

    }
    else if(((상품코드 == 'FA00016027'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:220});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00045007'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:221});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00129001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:222});
     __hpasRuleResult = {
'예정손해율' : 0.8
}

    }
    else if(((상품코드 == 'FA00131001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:223});
     __hpasRuleResult = {
'예정손해율' : 0.74
}

    }
    else if(((상품코드 == 'FA00131002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:224});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034012'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:225});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00023031'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:226});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00052015'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:227});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00134001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:228});
     __hpasRuleResult = {
'예정손해율' : 0.48
}

    }
    else if(((상품코드 == 'FA00136001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:229});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00022009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:230});
     __hpasRuleResult = {
'예정손해율' : 0.90
}

    }
    else if(((상품코드 == 'FA00142001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:231});
     __hpasRuleResult = {
'예정손해율' : 0.7
}

    }
    else if(((상품코드 == 'FA00146001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:232});
     __hpasRuleResult = {
'예정손해율' : 0.55
}

    }
    else if(((상품코드 == 'FA00142002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:233});
     __hpasRuleResult = {
'예정손해율' : 0.90
}

    }
    else if(((상품코드 == 'FA00145001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:234});
     __hpasRuleResult = {
'예정손해율' : 0.78
}

    }
    else if(((상품코드 == 'FA00145002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:235});
     __hpasRuleResult = {
'예정손해율' : 0.84
}

    }
    else if(((상품코드 == 'FA00148001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:236});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00148002'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:237});
     __hpasRuleResult = {
'예정손해율' : 0.90
}

    }
    else if(((상품코드 == 'FA00010009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:238});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == 'FA00149001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:239});
     __hpasRuleResult = {
'예정손해율' : 0.82
}

    }
    else if(((상품코드 == 'FA00034013'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:240});
     __hpasRuleResult = {
'예정손해율' : 0.96
}

    }
    else if(((상품코드 == 'FA00034014'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:241});
     __hpasRuleResult = {
'예정손해율' : 0.96
}

    }
    else if(((상품코드 == 'FA00045009'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:242});
     __hpasRuleResult = {
'예정손해율' : 0.59
}

    }
    else if(((상품코드 == 'FA00004004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:243});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00005004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:244});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00010010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:245});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00010011'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:246});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00010012'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:247});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00011004'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:248});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00011005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:249});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00011006'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:250});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00049005'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:251});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00052017'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:252});
     __hpasRuleResult = {
'예정손해율' : 0.9
}

    }
    else if(((상품코드 == 'FA00034015'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:253});
     __hpasRuleResult = {
'예정손해율' : 0.71
}

    }
    else if(((상품코드 == 'FA00045010'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:254});
     __hpasRuleResult = {
'예정손해율' : 0.41
}

    }
    else if(((상품코드 == 'FA00163001'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:255});
     __hpasRuleResult = {
'예정손해율' : 0.75
}

    }
    else if(((상품코드 == '{해외여행보험CM}'))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_상품별예정손해율_001' , row:256});
     __hpasRuleResult = {
'예정손해율' : 0.53
}

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};