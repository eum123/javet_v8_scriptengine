function(상품분류코드,보종코드,상품코드,설계일자_S,계약시작일자_S,부서코드,영문설계여부,약관언어구분코드,계약유형코드,인수형태코드,주민번호존재여부,마케팅활용동의여부,사망수익자여부,전문금융소비자여부,고객유형코드,질권채권유무,구득여부,설계구분코드,설계상태코드,원계약설계상태코드,구득심사결과코드,구득결재상태코드 ){var start = new Date().getTime();
var __hrs_logger_content = [];
var __hrs_logger_input = [];
var __hrs_logger_output = {};
var __hrs_logger_object = {executionTime: 0,ruleId:'일반_공통_출력물_대상출력물조회_001',ruleName:'일반_공통_출력물_대상출력물조회',ruleType:'SPREAD',content:__hrs_logger_content,input:__hrs_logger_input,output:__hrs_logger_output,};
_GET_GLOBAL('__hrs_logger').push(__hrs_logger_object);
var DEBUG = function(content) {try{if(!__hrs_logger_object || !SERVER_DEBUG){return;}}catch(e){return;};var str = '['+TODAY_FORMAT(new Date().getTime())+'][UserDebug]['+__hrs_logger_object.ruleId+'] ' + content;if(__hrs_logger_object.content){__hrs_logger_object.content.push(str);}if(SERVER_DEBUG){__hrs_logger_object?SERVER_DEBUG(str, __hrs_logger_object.ruleId):SERVER_DEBUG(str);}}
var RESULT = function(result) {try{if(!__hrs_logger_object){return result;}}catch(e){return result;};if(__hrs_logger_object.output){__hrs_logger_object.output.value = JSON.stringify(result);}
if(__hrs_logger_object.ruleType == 'SCRIPT'){
__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+__hrs_logger_object.output.value); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) };}
return result;}


__hrs_logger_object.level = 0;

if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품분류코드:'+JSON.stringify(상품분류코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품분류코드' , 'value':JSON.stringify(상품분류코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'보종코드:'+JSON.stringify(보종코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'보종코드' , 'value':JSON.stringify(보종코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'상품코드:'+JSON.stringify(상품코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'상품코드' , 'value':JSON.stringify(상품코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'설계일자_S:'+JSON.stringify(설계일자_S)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'설계일자_S' , 'value':JSON.stringify(설계일자_S) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'계약시작일자_S:'+JSON.stringify(계약시작일자_S)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'계약시작일자_S' , 'value':JSON.stringify(계약시작일자_S) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'부서코드:'+JSON.stringify(부서코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'부서코드' , 'value':JSON.stringify(부서코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'영문설계여부:'+JSON.stringify(영문설계여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'영문설계여부' , 'value':JSON.stringify(영문설계여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'약관언어구분코드:'+JSON.stringify(약관언어구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'약관언어구분코드' , 'value':JSON.stringify(약관언어구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'계약유형코드:'+JSON.stringify(계약유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'계약유형코드' , 'value':JSON.stringify(계약유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'인수형태코드:'+JSON.stringify(인수형태코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'인수형태코드' , 'value':JSON.stringify(인수형태코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'주민번호존재여부:'+JSON.stringify(주민번호존재여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'주민번호존재여부' , 'value':JSON.stringify(주민번호존재여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'마케팅활용동의여부:'+JSON.stringify(마케팅활용동의여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'마케팅활용동의여부' , 'value':JSON.stringify(마케팅활용동의여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'사망수익자여부:'+JSON.stringify(사망수익자여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'사망수익자여부' , 'value':JSON.stringify(사망수익자여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'전문금융소비자여부:'+JSON.stringify(전문금융소비자여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'전문금융소비자여부' , 'value':JSON.stringify(전문금융소비자여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'고객유형코드:'+JSON.stringify(고객유형코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'고객유형코드' , 'value':JSON.stringify(고객유형코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'질권채권유무:'+JSON.stringify(질권채권유무)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'질권채권유무' , 'value':JSON.stringify(질권채권유무) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'구득여부:'+JSON.stringify(구득여부)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'구득여부' , 'value':JSON.stringify(구득여부) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'설계구분코드:'+JSON.stringify(설계구분코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'설계구분코드' , 'value':JSON.stringify(설계구분코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'설계상태코드:'+JSON.stringify(설계상태코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'설계상태코드' , 'value':JSON.stringify(설계상태코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'원계약설계상태코드:'+JSON.stringify(원계약설계상태코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'원계약설계상태코드' , 'value':JSON.stringify(원계약설계상태코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'구득심사결과코드:'+JSON.stringify(구득심사결과코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'구득심사결과코드' , 'value':JSON.stringify(구득심사결과코드) } );}
if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][INPUT] '+'구득결재상태코드:'+JSON.stringify(구득결재상태코드)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.input ){__hrs_logger_object.input.push( { 'name':'구득결재상태코드' , 'value':JSON.stringify(구득결재상태코드) } );}

    var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = [];


    // Compiler Version 1 , Created : 2023-08-18 17:17:39

    if((!(구득여부 == "1"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:0});
     __hpasRuleResult.push({
'출력물ID' : "FIRB501" , '문서분류코드' : null , '출력물품목코드' : "12030040013" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "05" , '출력구분' : "가입안내문_표지" , '출력물종류' : "가입안내문_표지" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH081" , '심의필번호' : null
})

    }

    if(((구득여부 == "1"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((구득심사결과코드 == "03"))
    && ((구득결재상태코드 == "02")||(구득결재상태코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:1});
     __hpasRuleResult.push({
'출력물ID' : "FIRB502" , '문서분류코드' : null , '출력물품목코드' : "12030040014" , '선행출력물ID' : null , '출력물TAB구분' : "1|2" , '구분' : "대고객" , '출력물구분코드' : "05" , '출력구분' : "가입안내문" , '출력물종류' : "가입안내문" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH081" , '심의필번호' : "확인필-제2022-300056-전사(2022.06.21~2023.06.20)"
})

    }

    if(((구득여부 == "1"))
    && ((설계구분코드 == "02"))
    && ((구득심사결과코드 == "03"))
    && ((구득결재상태코드 == "02")||(구득결재상태코드 == "03"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:2});
     __hpasRuleResult.push({
'출력물ID' : "FIRB502" , '문서분류코드' : null , '출력물품목코드' : "12030040014" , '선행출력물ID' : null , '출력물TAB구분' : "1|2" , '구분' : "대고객" , '출력물구분코드' : "06" , '출력구분' : "배서안내문" , '출력물종류' : "배서안내문" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH081" , '심의필번호' : "확인필-제2022-300056-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00050"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:3});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00145"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:4});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00051"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:5});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00098001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:6});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00052"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:7});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00018001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:8});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00020002"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:9});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00016001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:10});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00016021"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:11});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00016020"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:12});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00066001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:13});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00003001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:14});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00011"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:15});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00021001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:16});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00131"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:17});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023005"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:18});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023006"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:19});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00004001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:20});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:21});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023027"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:22});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023029"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:23});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023031"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:24});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00014001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:25});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00097001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:26});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00147001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:27});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00149001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:28});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00020001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:29});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00022001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:30});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00022005"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:31});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00022006"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:32});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00049"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:33});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00016019"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:34});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00012"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:35});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00079001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:36});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00025"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:37});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00057001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:38});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00005001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:39});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00059001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:40});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00010"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:41});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00148"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:42});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00017001"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:43});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00023003"))
    && ((설계일자_S >= "20191216"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "01")||(설계상태코드 == "02")||(설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "10")||(설계상태코드 == "11")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:44});
     __hpasRuleResult.push({
'출력물ID' : "FIRH072" , '문서분류코드' : null , '출력물품목코드' : "12030080022" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품안내서" , '출력물종류' : "상품안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRH072 01" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00142"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:45});
     __hpasRuleResult.push({
'출력물ID' : "FIRA890" , '문서분류코드' : null , '출력물품목코드' : "12030240015" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "자동차성능.상태점검책임보험 안내서" , '출력물종류' : "자동차성능.상태점검책임보험 안내서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300039-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00030"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:46});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00034"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:47});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00043"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:48});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00044"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:49});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:50});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|5" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00046"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:51});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:52});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00096"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:53});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00101"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:54});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00103"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:55});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00120"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:56});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00121"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:57});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00155"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:58});
     __hpasRuleResult.push({
'출력물ID' : "FIRA502" , '문서분류코드' : null , '출력물품목코드' : "12030040011" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300061-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00030")&&!(보종코드 == "FA00034")&&!(보종코드 == "FA00043")&&!(보종코드 == "FA00044")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00046")&&!(보종코드 == "FA00059")&&!(보종코드 == "FA00096")&&!(보종코드 == "FA00101")&&!(보종코드 == "FA00103")&&!(보종코드 == "FA00120")&&!(보종코드 == "FA00121")&&!(보종코드 == "FA00155"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:59});
     __hpasRuleResult.push({
'출력물ID' : "FIRA501" , '문서분류코드' : null , '출력물품목코드' : "12030040012" , '선행출력물ID' : null , '출력물TAB구분' : "2|3" , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서" , '출력물종류' : "가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300046-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:60});
     __hpasRuleResult.push({
'출력물ID' : "FIRA050" , '문서분류코드' : null , '출력물품목코드' : "12030040002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서(구버전)" , '출력물종류' : "상해패턴가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:61});
     __hpasRuleResult.push({
'출력물ID' : "FIRA050" , '문서분류코드' : null , '출력물품목코드' : "12030040002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서(구버전)" , '출력물종류' : "상해패턴가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00060"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:62});
     __hpasRuleResult.push({
'출력물ID' : "FIRA050" , '문서분류코드' : null , '출력물품목코드' : "12030040002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서(구버전)" , '출력물종류' : "상해패턴가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00089"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:63});
     __hpasRuleResult.push({
'출력물ID' : "FIRA050" , '문서분류코드' : null , '출력물품목코드' : "12030040002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서(구버전)" , '출력물종류' : "상해패턴가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00125"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:64});
     __hpasRuleResult.push({
'출력물ID' : "FIRA050" , '문서분류코드' : null , '출력물품목코드' : "12030040002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "가입설계서(구버전)" , '출력물종류' : "상해패턴가입설계서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00108"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:65});
     __hpasRuleResult.push({
'출력물ID' : "FIRA280" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080008" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(차량가액보장보험)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00106"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:66});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00002"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:67});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00009"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:68});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00015"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:69});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00024"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:70});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00073"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:71});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00047"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:72});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00099"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:73});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00029"))
    && (!(상품코드 == "FA00044001")&&!(상품코드 == "FA00044002")&&!(상품코드 == "FA00045001")&&!(상품코드 == "FA00045002")&&!(상품코드 == "FA00045003")&&!(상품코드 == "FA00045004")&&!(상품코드 == "FA00045005")&&!(상품코드 == "FA00045006")&&!(상품코드 == "FA00045007")&&!(상품코드 == "FA00045008")&&!(상품코드 == "FA00045009")&&!(상품코드 == "FA00045010")&&!(상품코드 == "FA00046001")&&!(상품코드 == "FA00030004"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:74});
     __hpasRuleResult.push({
'출력물ID' : "FIRA340" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080013" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(상해군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH012" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((상품코드 == "FA00030004"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:75});
     __hpasRuleResult.push({
'출력물ID' : "FIRA340" , '문서분류코드' : "FI0301016F" , '출력물품목코드' : "12030080013" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(상해군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH012" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00057"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:76});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00061"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:77});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00067"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:78});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00060"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:79});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00115"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:80});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00059"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:81});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00090"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:82});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00062"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:83});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00066"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:84});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00109"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:85});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00125"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:86});
     __hpasRuleResult.push({
'출력물ID' : "FIRA350" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(종합군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH013" , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00056"))
    && (!(보종코드 == "FA00057")&&!(보종코드 == "FA00061")&&!(보종코드 == "FA00067")&&!(보종코드 == "FA00060")&&!(보종코드 == "FA00115")&&!(보종코드 == "FA00059")&&!(보종코드 == "FA00090")&&!(보종코드 == "FA00062")&&!(보종코드 == "FA00066")&&!(보종코드 == "FA00109")&&!(보종코드 == "FA00125"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:87});
     __hpasRuleResult.push({
'출력물ID' : "FIRA330" , '문서분류코드' : "FI0301010F" , '출력물품목코드' : "12030080012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "01" , '출력구분' : "상품설명서" , '출력물종류' : "상품설명서(배상군+재물군)" , '출력옵션' : "00:전체;01:회사용" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%gdcd%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((계약유형코드 == "02")||(계약유형코드 == "03")||(계약유형코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:88});
     __hpasRuleResult.push({
'출력물ID' : "FIRA505" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240017" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항(해외여행보험용)" , '출력물종류' : "계약전알릴사항(해외여행보험용)" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300048-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00030"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:89});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300135-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00044"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:90});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300135-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00046"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:91});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300135-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00096"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:92});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300049-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00103"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:93});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300135-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00120"))
    && ((계약시작일자_S >= "20210801"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:94});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300135-전사(2022.12.28~2023.12.27)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((계약시작일자_S < "20210801"))
    && ((설계상태코드 == "13")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:95});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301037G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300049-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품코드 == "FA00136001"))
    && ((계약시작일자_S < "20210801"))
    && ((설계상태코드 == "13")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:96});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301045G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300049-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품코드 == "FA00136001"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계상태코드 == "13")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:97});
     __hpasRuleResult.push({
'출력물ID' : "FIRA071" , '문서분류코드' : "FI0301045G" , '출력물품목코드' : "12030240006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약전알릴사항" , '출력물종류' : "계약전알릴사항" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300049-전사(2022.06.17~2023.06.16)"
})

    }

    if(((주민번호존재여부 == "1"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:98});
     __hpasRuleResult.push({
'출력물ID' : "FIRA315" , '문서분류코드' : "FI0301048F" , '출력물품목코드' : "12030050007" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약체결이행동의서" , '출력물종류' : "계약체결이행동의서" , '출력옵션' : "03:요약;04:상세" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%insImnm%> <%dhStfno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((마케팅활용동의여부 == "0"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:99});
     __hpasRuleResult.push({
'출력물ID' : "CUSZ099" , '문서분류코드' : "CU0401001A" , '출력물품목코드' : "12030050006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "마케팅활용동의서" , '출력물종류' : "마케팅활용동의서" , '출력옵션' : "03:요약;04:상세" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00004001")||(상품코드 == "FA00005001")||(상품코드 == "FA00051002")||(상품코드 == "FA00051003")||(상품코드 == "FA00052011")||(상품코드 == "FA00052012")||(상품코드 == "FA00145002"))
    && ((설계상태코드 == "13")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:100});
     __hpasRuleResult.push({
'출력물ID' : "FIRA882" , '문서분류코드' : "FI0301044G" , '출력물품목코드' : "12030290007" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "재물보험 질문서" , '출력물종류' : "재물보험 질문서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300054-전사(2022.06.21~2023.06.20)"
})

    }

    if(((계약시작일자_S <= "20220715"))
    && ((사망수익자여부 == "1"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:101});
     __hpasRuleResult.push({
'출력물ID' : "FIRA850" , '문서분류코드' : "FI0301036G" , '출력물품목코드' : "12030080018" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금수익자변경 계약자안내문" , '출력물종류' : "사망보험금수익자변경 계약자안내문" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:102});
     __hpasRuleResult.push({
'출력물ID' : "FIRA860" , '문서분류코드' : "FI0301038G" , '출력물품목코드' : "12030070003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "지정대리 청구인 신청서" , '출력물종류' : "지정대리 청구인 신청서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00034"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:103});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00034"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:104});
     __hpasRuleResult.push({
'출력물ID' : "FIRA889" , '문서분류코드' : "FI0301056F" , '출력물품목코드' : "12030290008" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "단체실손의료보험 계약 중지 신청서" , '출력물종류' : "단체실손의료보험 계약 중지 신청서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00101"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:105});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00043"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:106});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00104"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:107});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00111"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:108});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00056"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:109});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00029"))
    && (!(보종코드 == "FA00034")&&!(보종코드 == "FA00032")&&!(보종코드 == "FA00101")&&!(보종코드 == "FA00043")&&!(보종코드 == "FA00104")&&!(보종코드 == "FA00111"))
    && ((고객유형코드 == "03")||(고객유형코드 == "04")||(고객유형코드 == "05")||(고객유형코드 == "06"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:110});
     __hpasRuleResult.push({
'출력물ID' : "FIRA370" , '문서분류코드' : "FI0301018F,FI0301017A" , '출력물품목코드' : "12030050003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사망보험금 수익자 피보험자 동의서" , '출력물종류' : "사망보험금 수익자 피보험자 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00034"))
    && (!(상품코드 == "FA00034004")&&!(상품코드 == "FA00034006"))
    && ((계약시작일자_S < "20210801"))
    && ((계약유형코드 == "02"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:111});
     __hpasRuleResult.push({
'출력물ID' : "FIRA870" , '문서분류코드' : "FI0301043G" , '출력물품목코드' : "12030080020" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "단체피보험자 지위유지 특별약관 계약자 안내문" , '출력물종류' : "단체피보험자 지위유지 특별약관 계약자 안내문" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((상품분류코드 == "FA00073"))
    && ((상품코드 == "FA00136001"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:112});
     __hpasRuleResult.push({
'출력물ID' : "FIRA092" , '문서분류코드' : "FI0301040F" , '출력물품목코드' : "12030290006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "기타 실손 보험계약 중복가입 확인서" , '출력물종류' : "기타 실손 보험계약 중복가입확인서(일반보험)" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA092 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300043-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:113});
     __hpasRuleResult.push({
'출력물ID' : "FIRA092" , '문서분류코드' : "FI0301040F" , '출력물품목코드' : "12030290006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "기타 실손 보험계약 중복가입 확인서" , '출력물종류' : "기타 실손 보험계약 중복가입확인서(일반보험)" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA092 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : "확인필-제2022-300043-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00056"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:114});
     __hpasRuleResult.push({
'출력물ID' : "FIRA092" , '문서분류코드' : "FI0301040F" , '출력물품목코드' : "12030290006" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "기타 실손 보험계약 중복가입 확인서" , '출력물종류' : "기타 실손 보험계약 중복가입확인서(일반보험)" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA092 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : "확인필-제2022-300043-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:115});
     __hpasRuleResult.push({
'출력물ID' : "FIRA820" , '문서분류코드' : "FI0301019F,FI0301020F" , '출력물품목코드' : "12030050004" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사전중복조회결과 및 중복가입동의서" , '출력물종류' : "사전중복조회결과 및 중복가입동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA820 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300042-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00056"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:116});
     __hpasRuleResult.push({
'출력물ID' : "FIRA820" , '문서분류코드' : "FI0301019F,FI0301020F" , '출력물품목코드' : "12030050004" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "사전중복조회결과 및 중복가입동의서" , '출력물종류' : "사전중복조회결과 및 중복가입동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA820 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300042-전사(2022.06.17~2023.06.16)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:117});
     __hpasRuleResult.push({
'출력물ID' : "FIRA091" , '문서분류코드' : "FI0301007F" , '출력물품목코드' : "12030290002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "실손 보험계약 중복가입 확인서" , '출력물종류' : "실손 보험계약 중복가입확인서(일반보험)" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA091 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : "확인필-제2022-300055-전사(2022.06.21~2023.06.20)"
})

    }

    if(((상품분류코드 == "FA00056"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:118});
     __hpasRuleResult.push({
'출력물ID' : "FIRA091" , '문서분류코드' : "FI0301007F" , '출력물품목코드' : "12030290002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "실손 보험계약 중복가입 확인서" , '출력물종류' : "실손 보험계약 중복가입확인서(일반보험)" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA091 03 <%plyno%>" , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : "확인필-제2022-300055-전사(2022.06.21~2023.06.20)"
})

    }

    if(((전문금융소비자여부 == "Y"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:119});
     __hpasRuleResult.push({
'출력물ID' : "FIRA883" , '문서분류코드' : "FI0301047G" , '출력물품목코드' : "12030290009" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "전문금융소비자 여부 확인서" , '출력물종류' : "전문금융소비자 여부 확인서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA883 03" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300040-전사(2022.06.17~2023.06.16)"
})

    }

    if(((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:120});
     __hpasRuleResult.push({
'출력물ID' : "FIRA885" , '문서분류코드' : null , '출력물품목코드' : "12030300004" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "고령금융소비자를 위한 상품요약서" , '출력물종류' : "고령금융소비자를 위한 상품요약서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA885 03" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300050-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00034"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:121});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 상해보험단체 피보험자명세" , '출력물종류' : "설계 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00043"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:122});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 상해보험단체 피보험자명세" , '출력물종류' : "설계 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00101"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:123});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 상해보험단체 피보험자명세" , '출력물종류' : "설계 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00121"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:124});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 상해보험단체 피보험자명세" , '출력물종류' : "설계 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00155"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:125});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 상해보험단체 피보험자명세" , '출력물종류' : "설계 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00034"))
    && ((계약시작일자_S >= "20210801"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:126});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 상해보험단체 피보험자명세" , '출력물종류' : "계약 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00043"))
    && ((계약시작일자_S >= "20210801"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:127});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 상해보험단체 피보험자명세" , '출력물종류' : "계약 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00101"))
    && ((계약시작일자_S >= "20210801"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:128});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 상해보험단체 피보험자명세" , '출력물종류' : "계약 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00121"))
    && ((계약시작일자_S >= "20210801"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:129});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 상해보험단체 피보험자명세" , '출력물종류' : "계약 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00155"))
    && ((계약시작일자_S >= "20210801"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:130});
     __hpasRuleResult.push({
'출력물ID' : "FIRA503" , '문서분류코드' : null , '출력물품목코드' : "12030020002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 상해보험단체 피보험자명세" , '출력물종류' : "계약 상해보험단체 피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((계약유형코드 == "02")||(계약유형코드 == "03")||(계약유형코드 == "04")||(계약유형코드 == "05")||(계약유형코드 == "07"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:131});
     __hpasRuleResult.push({
'출력물ID' : "FIRA504" , '문서분류코드' : null , '출력물품목코드' : "12030020003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "설계 해외여행보험피보험자명세" , '출력물종류' : "설계 해외여행보험피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((계약유형코드 == "02")||(계약유형코드 == "03")||(계약유형코드 == "04")||(계약유형코드 == "05")||(계약유형코드 == "07"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:132});
     __hpasRuleResult.push({
'출력물ID' : "FIRA504" , '문서분류코드' : null , '출력물품목코드' : "12030020003" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "계약 해외여행보험피보험자명세" , '출력물종류' : "계약 해외여행보험피보험자명세" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00030"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:133});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00034"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:134});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|7|8|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00043"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:135});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|7|8|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00044"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:136});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301039F" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "2|3|4|6|10|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:137});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301039F" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "1|3|5|6|10|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00046"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:138});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:139});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00096"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:140});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00101"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:141});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|7|8|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00103"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:142});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00120"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:143});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|4|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00121"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:144});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|7|8|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((보종코드 == "FA00155"))
    && ((계약시작일자_S >= "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:145});
     __hpasRuleResult.push({
'출력물ID' : "FIRA512" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240016" , '선행출력물ID' : null , '출력물TAB구분' : "3|7|8|9|11" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if((!(보종코드 == "FA00030")&&!(보종코드 == "FA00034")&&!(보종코드 == "FA00043")&&!(보종코드 == "FA00044")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00046")&&!(보종코드 == "FA00059")&&!(보종코드 == "FA00096")&&!(보종코드 == "FA00101")&&!(보종코드 == "FA00103")&&!(보종코드 == "FA00120")&&!(보종코드 == "FA00121")&&!(보종코드 == "FA00155"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:146});
     __hpasRuleResult.push({
'출력물ID' : "FIRA521" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240018" , '선행출력물ID' : null , '출력물TAB구분' : "2|3|4|5" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300134-전사(2022.12.28~2023.12.27)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:147});
     __hpasRuleResult.push({
'출력물ID' : "FIRA090" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "상해패턴청약서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:148});
     __hpasRuleResult.push({
'출력물ID' : "FIRA090" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "상해패턴청약서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00060"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:149});
     __hpasRuleResult.push({
'출력물ID' : "FIRA090" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "상해패턴청약서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00089"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:150});
     __hpasRuleResult.push({
'출력물ID' : "FIRA090" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "상해패턴청약서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00125"))
    && ((계약시작일자_S < "20210801"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:151});
     __hpasRuleResult.push({
'출력물ID' : "FIRA090" , '문서분류코드' : "FI0301001A" , '출력물품목코드' : "12030240002" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "청약서" , '출력물종류' : "상해패턴청약서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if((!(보종코드 == "FA00010")&&!(보종코드 == "FA00011")&&!(보종코드 == "FA00012")&&!(보종코드 == "FA00013")&&!(보종코드 == "FA00014"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:152});
     __hpasRuleResult.push({
'출력물ID' : "FIRE501" , '문서분류코드' : "FI0302002A,FI0302015A" , '출력물품목코드' : "12030240019" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "배서청약서" , '출력물종류' : "배서청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH083" , '심의필번호' : "확인필-제2022-300053-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00010")||(보종코드 == "FA00011")||(보종코드 == "FA00012")||(보종코드 == "FA00013")||(보종코드 == "FA00014"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:153});
     __hpasRuleResult.push({
'출력물ID' : "FIRE501" , '문서분류코드' : "FI0302002A,FI0302015A" , '출력물품목코드' : "12030240019" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3" , '구분' : "대고객" , '출력물구분코드' : "03" , '출력구분' : "배서청약서" , '출력물종류' : "배서청약서" , '출력옵션' : "00:전체" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH083" , '심의필번호' : "확인필-제2022-300053-전사(2022.06.17~2023.06.16)"
})

    }

    if(((주민번호존재여부 == "1"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:154});
     __hpasRuleResult.push({
'출력물ID' : "FIRA365" , '문서분류코드' : "FI0301024F" , '출력물품목코드' : "12030050008" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약체결이행동의서(배서)" , '출력물종류' : "계약체결이행동의서(배서)" , '출력옵션' : "03:요약;04:상세" , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> <%insImnm%> <%dhStfno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : null
})

    }

    if(((약관언어구분코드 == "01"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:155});
     __hpasRuleResult.push({
'출력물ID' : "FIRE511" , '문서분류코드' : null , '출력물품목코드' : "12030160019" , '선행출력물ID' : null , '출력물TAB구분' : "1" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "배서내역서" , '출력물종류' : "배서내역서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH083" , '심의필번호' : "확인필-제2022-300052-전사(2022.06.17~2023.06.16)"
})

    }

    if((!(약관언어구분코드 == "01"))
    && ((설계구분코드 == "02"))
    && ((설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:156});
     __hpasRuleResult.push({
'출력물ID' : "FIRE503" , '문서분류코드' : null , '출력물품목코드' : "12030160019" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "배서내역서" , '출력물종류' : "배서내역서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH083" , '심의필번호' : null
})

    }

    if(((설계구분코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:157});
     __hpasRuleResult.push({
'출력물ID' : "FIRA880" , '문서분류코드' : "FI0302016A" , '출력물품목코드' : "12030240014" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "계약관계자 변경 동의서" , '출력물종류' : "계약관계자 변경 동의서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300041-전사(2022.06.17~2023.06.16)"
})

    }

    if(((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:158});
     __hpasRuleResult.push({
'출력물ID' : "FIRA516" , '문서분류코드' : null , '출력물품목코드' : "12030160017" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "증권표지" , '출력물종류' : "증권표지" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((상품코드 == "FA00066003"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:159});
     __hpasRuleResult.push({
'출력물ID' : "FIRA516" , '문서분류코드' : null , '출력물품목코드' : "12030160017" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "증권표지" , '출력물종류' : "증권표지" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00030"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:160});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00034"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:161});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00043"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:162});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00044"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:163});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00045"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:164});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|5" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00046"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:165});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:166});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00096"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:167});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00101"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:168});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00103"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:169});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00120"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:170});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|4" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00121"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:171});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00155"))
    && ((계약시작일자_S >= "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:172});
     __hpasRuleResult.push({
'출력물ID' : "FIRA522" , '문서분류코드' : null , '출력물품목코드' : "12030160015" , '선행출력물ID' : null , '출력물TAB구분' : "3|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300060-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00030")&&!(보종코드 == "FA00034")&&!(보종코드 == "FA00043")&&!(보종코드 == "FA00044")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00046")&&!(보종코드 == "FA00059")&&!(보종코드 == "FA00096")&&!(보종코드 == "FA00101")&&!(보종코드 == "FA00103")&&!(보종코드 == "FA00120")&&!(보종코드 == "FA00121")&&!(보종코드 == "FA00155"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:173});
     __hpasRuleResult.push({
'출력물ID' : "FIRA531" , '문서분류코드' : null , '출력물품목코드' : "12030160016" , '선행출력물ID' : null , '출력물TAB구분' : "2|3" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300063-전사(2022.06.21~2023.06.20)"
})

    }

    if(((상품코드 == "FA00066003"))
    && (!(약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:174});
     __hpasRuleResult.push({
'출력물ID' : "FIRA531" , '문서분류코드' : null , '출력물품목코드' : "12030160016" , '선행출력물ID' : null , '출력물TAB구분' : "2|3" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "증권" , '출력옵션' : "00:양식미포함;01:양식포함" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300063-전사(2022.06.21~2023.06.20)"
})

    }

    if(((상품분류코드 == "FA00029"))
    && ((계약시작일자_S < "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:175});
     __hpasRuleResult.push({
'출력물ID' : "FIRA061" , '문서분류코드' : null , '출력물품목코드' : "12030160012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "상해패턴증권" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00059"))
    && ((계약시작일자_S < "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:176});
     __hpasRuleResult.push({
'출력물ID' : "FIRA061" , '문서분류코드' : null , '출력물품목코드' : "12030160012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "상해패턴증권" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00060"))
    && ((계약시작일자_S < "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:177});
     __hpasRuleResult.push({
'출력물ID' : "FIRA061" , '문서분류코드' : null , '출력물품목코드' : "12030160012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "상해패턴증권" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00089"))
    && ((계약시작일자_S < "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:178});
     __hpasRuleResult.push({
'출력물ID' : "FIRA061" , '문서분류코드' : null , '출력물품목코드' : "12030160012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "상해패턴증권" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((보종코드 == "FA00125"))
    && ((계약시작일자_S < "20210801"))
    && ((약관언어구분코드 == "01"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:179});
     __hpasRuleResult.push({
'출력물ID' : "FIRA061" , '문서분류코드' : null , '출력물품목코드' : "12030160012" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권" , '출력물종류' : "상해패턴증권" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH010" , '심의필번호' : null
})

    }

    if(((설계상태코드 == "03")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:180});
     __hpasRuleResult.push({
'출력물ID' : "FIRE060" , '문서분류코드' : null , '출력물품목코드' : "12030230001" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "보험료청구서(Invoice)" , '출력물종류' : "보험료청구서(Invoice)" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> 0000 FIRE060" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300038-전사(2022.06.17~2023.06.16)"
})

    }

    if(((설계구분코드 == "01")||(설계구분코드 == "04"))
    && ((설계상태코드 == "03")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:181});
     __hpasRuleResult.push({
'출력물ID' : "FIRA884" , '문서분류코드' : "FI0301053G" , '출력물품목코드' : "12030290010" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "보험계약서류 제공ㆍ수령확인서" , '출력물종류' : "보험계약서류 제공 수령 확인서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%> FIRA884 03" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300051-전사(2022.06.17~2023.06.16)"
})

    }

    if(((보종코드 == "FA00016")||(보종코드 == "FA00022")||(보종코드 == "FA00023"))
    && (!(약관언어구분코드 == "01"))
    && (!(인수형태코드 == "02"))
    && (!(질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:182});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3|4|5" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00016")||(보종코드 == "FA00022")||(보종코드 == "FA00023"))
    && (!(약관언어구분코드 == "01"))
    && ((인수형태코드 == "02"))
    && (!(질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:183});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3|4|5|6" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00016")||(보종코드 == "FA00022")||(보종코드 == "FA00023"))
    && (!(약관언어구분코드 == "01"))
    && (!(인수형태코드 == "02"))
    && ((질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:184});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3|4|5|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if(((보종코드 == "FA00016")||(보종코드 == "FA00022")||(보종코드 == "FA00023"))
    && (!(약관언어구분코드 == "01"))
    && ((인수형태코드 == "02"))
    && ((질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:185});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|2|3|4|5|6|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00016")&&!(보종코드 == "FA00022")&&!(보종코드 == "FA00023"))
    && (!(상품코드 == "FA00066003"))
    && (!(약관언어구분코드 == "01"))
    && (!(인수형태코드 == "02"))
    && (!(질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:186});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|3|4|5" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00016")&&!(보종코드 == "FA00022")&&!(보종코드 == "FA00023"))
    && (!(상품코드 == "FA00066003"))
    && (!(약관언어구분코드 == "01"))
    && ((인수형태코드 == "02"))
    && (!(질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:187});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|3|4|5|6" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00016")&&!(보종코드 == "FA00022")&&!(보종코드 == "FA00023"))
    && (!(상품코드 == "FA00066003"))
    && (!(약관언어구분코드 == "01"))
    && (!(인수형태코드 == "02"))
    && ((질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:188});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|3|4|5|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if((!(보종코드 == "FA00016")&&!(보종코드 == "FA00022")&&!(보종코드 == "FA00023"))
    && (!(상품코드 == "FA00066003"))
    && (!(약관언어구분코드 == "01"))
    && ((인수형태코드 == "02"))
    && ((질권채권유무 == "1"))
    && ((원계약설계상태코드 == "09"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:189});
     __hpasRuleResult.push({
'출력물ID' : "FIRA517" , '문서분류코드' : null , '출력물품목코드' : "12030160018" , '선행출력물ID' : null , '출력물TAB구분' : "1|3|4|5|6|7" , '구분' : "대고객" , '출력물구분코드' : "02" , '출력구분' : "증권(영문)" , '출력물종류' : "증권(영문)" , '출력옵션' : "00:전체;02:영문만" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "0" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : "확인필-제2022-300057-전사(2022.06.21~2023.06.20)"
})

    }

    if(((설계구분코드 == "01")||(설계구분코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:190});
     __hpasRuleResult.push({
'출력물ID' : "FIRA891" , '문서분류코드' : "FI0301054G" , '출력물품목코드' : "12030290013" , '선행출력물ID' : null , '출력물TAB구분' : null , '구분' : "대고객" , '출력물구분코드' : null , '출력구분' : "기여행위 확인서" , '출력물종류' : "기여행위 확인서" , '출력옵션' : null , '스캔대상여부' : "1" , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : "<%plno%>" , '이미지저장여부' : null , '출력물IO' : null , '심의필번호' : "확인필-제2022-300133-자체(2022.12.28~2023.12.27)"
})

    }

    if(((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))
    && ((구득여부 == "1"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:191});
     __hpasRuleResult.push({
'출력물ID' : "FIRB504" , '문서분류코드' : "FI0101006G" , '출력물품목코드' : "12030040016" , '선행출력물ID' : "FI0101006G" , '출력물TAB구분' : null , '구분' : "업무" , '출력물구분코드' : "05" , '출력구분' : "RQ" , '출력물종류' : "RQ" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : "1" , '출력물IO' : "ioFirH081" , '심의필번호' : null
})

    }

    if(((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))
    && ((구득여부 == "1"))
    && ((설계구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:192});
     __hpasRuleResult.push({
'출력물ID' : "FIRB504" , '문서분류코드' : "FI0101007G" , '출력물품목코드' : "12030040016" , '선행출력물ID' : "FI0101007G" , '출력물TAB구분' : null , '구분' : "업무" , '출력물구분코드' : "06" , '출력구분' : "RQ(Alteration)" , '출력물종류' : "RQ" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : "1" , '출력물IO' : "ioFirH081" , '심의필번호' : null
})

    }

    if(((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))
    && ((설계구분코드 == "01")||(설계구분코드 == "04"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:193});
     __hpasRuleResult.push({
'출력물ID' : "FIRB506" , '문서분류코드' : "FI0307021G" , '출력물품목코드' : "12030040017" , '선행출력물ID' : "FI0307021G" , '출력물TAB구분' : null , '구분' : "업무" , '출력물구분코드' : "05" , '출력구분' : "RI Application" , '출력물종류' : "RI Application" , '출력옵션' : "00:Provisional;02:Firm Order;03:Closing" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : "1" , '출력물IO' : "ioFirH081" , '심의필번호' : null
})

    }

    if(((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))
    && ((설계구분코드 == "02"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:194});
     __hpasRuleResult.push({
'출력물ID' : "FIRB506" , '문서분류코드' : "FI0307022G" , '출력물품목코드' : "12030040017" , '선행출력물ID' : "FI0307022G" , '출력물TAB구분' : null , '구분' : "업무" , '출력물구분코드' : "06" , '출력구분' : "RI Application(Alteration)" , '출력물종류' : "RI Application" , '출력옵션' : "00:Provisional;02:Firm Order;03:Closing" , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : "1" , '출력물IO' : "ioFirH081" , '심의필번호' : null
})

    }

    if((!(보종코드 == "FA00030")&&!(보종코드 == "FA00034")&&!(보종코드 == "FA00043")&&!(보종코드 == "FA00044")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00045")&&!(보종코드 == "FA00046")&&!(보종코드 == "FA00059")&&!(보종코드 == "FA00096")&&!(보종코드 == "FA00101")&&!(보종코드 == "FA00103")&&!(보종코드 == "FA00120")&&!(보종코드 == "FA00121")&&!(보종코드 == "FA00155"))
    && ((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))
    && ((인수형태코드 == "02"))
    && ((설계상태코드 == "03")||(설계상태코드 == "04")||(설계상태코드 == "05")||(설계상태코드 == "06")||(설계상태코드 == "07")||(설계상태코드 == "08")||(설계상태코드 == "09")||(설계상태코드 == "13")||(설계상태코드 == "19"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:195});
     __hpasRuleResult.push({
'출력물ID' : "FIRA541" , '문서분류코드' : "FI0309007G" , '출력물품목코드' : "12030040015" , '선행출력물ID' : "FI0309007G" , '출력물TAB구분' : "1|2|3" , '구분' : "업무" , '출력물구분코드' : "04" , '출력구분' : "보유결정요청서" , '출력물종류' : "보유결정요청서" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH080" , '심의필번호' : null
})

    }

    if(((부서코드 == "1301759")||(부서코드 == "1301359")||(부서코드 == "1301304")||(부서코드 == "1301034")||(부서코드 == "1301230"))){
    _GET_GLOBAL('__hrs_logic_logger').push({ruleId:'일반_공통_출력물_대상출력물조회_001' , row:196});
     __hpasRuleResult.push({
'출력물ID' : "FIRA511" , '문서분류코드' : "FI0307023G" , '출력물품목코드' : "12030020004" , '선행출력물ID' : "FI0307023G" , '출력물TAB구분' : null , '구분' : "업무" , '출력물구분코드' : null , '출력구분' : "Digest" , '출력물종류' : "Digest" , '출력옵션' : null , '스캔대상여부' : null , '이메일가능여부' : "1" , '팩스가능여부' : "1" , '출력물조회KEY' : null , '이미지저장여부' : null , '출력물IO' : "ioFirH082" , '심의필번호' : null
})

    }

    if( __hrs_logger_object.content ){__hrs_logger_object.content.push('['+TODAY_FORMAT(new Date().getTime())+'][OUTPUT] '+JSON.stringify(__hpasRuleResult)); if(SERVER_DEBUG){ SERVER_DEBUG(__hrs_logger_object.content[__hrs_logger_object.content.length - 1], __hrs_logger_object.ruleId) }; }
if( __hrs_logger_object.output && __hpasRuleResult){__hrs_logger_object.output.value = JSON.stringify(__hpasRuleResult);}
return RESULT(__hpasRuleResult);
};