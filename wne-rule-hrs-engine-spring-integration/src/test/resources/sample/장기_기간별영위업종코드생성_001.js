var 장기_기간별영위업종코드생성_001 = function(영위업종코드,적용기준일자 ){
var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
var __hpasRuleResult = {};

// Compiler Version 1 , Created : 2023-08-21 11:10:14
if ((LEN(영위업종코드) > 0 && 영위업종코드 != "*")
	 && ((적용기준일자 <= "2005-04-30") && (적용기준일자 >= "1900-01-01"))) {
	__hpasRuleResult = {
		'영위업종코드': ("A" + 영위업종코드)
	}

} else if ((LEN(영위업종코드) > 0 && 영위업종코드 != "*")
	 && ((적용기준일자 <= "9999-12-31") && (적용기준일자 >= "2005-05-01"))) {
	__hpasRuleResult = {
		'영위업종코드': ("B" + 영위업종코드)
	}

} else if ((LEN(영위업종코드) > 0)) {
	__hpasRuleResult = {
		'영위업종코드': (영위업종코드)
	}

}

return RESULT(__hpasRuleResult);
};