var 일반_공통_직선보간법구간찾기_001 = function(보상한도금액,보상한도금액_Out ){
var __TARGET_DATE__;
var BigDecimal = Java.type('java.math.BigDecimal');
var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
var __hpasRuleResult = {보상한도액_계수표 : []};

var IDX
var IDX2 = 0
var X = 0
var 임시 = 0

for (IDX = 0; IDX < 보상한도금액_Out.length; IDX = IDX + 1) {
	if(보상한도금액 - 보상한도금액_Out[IDX] < 0) { /*입력한 보상한도금액이 구간 사이 값일 때 */
		__hpasRuleResult.보상한도액_계수표[X] = 임시
		__hpasRuleResult.보상한도액_계수표[X + 1] = 보상한도금액_Out[IDX]
		break;
	} else if(보상한도금액 - 보상한도금액_Out[IDX] == 0) {  /*입력한 보상한도금액이 구간 금액과 같을 때 */
		if(IDX2 < 보상한도금액_Out.Size - 1 && 보상한도금액_Out[IDX2 + 1] != 0) { /*구간 제일 끝의 값이 구간 중간 값일 때..*/
			__hpasRuleResult.보상한도액_계수표[X] = 보상한도금액_Out[IDX2]
			__hpasRuleResult.보상한도액_계수표[X + 1] = 보상한도금액_Out[IDX2 + 1]
		} else if((IDX2 == 보상한도금액_Out.Size - 1) || (보상한도금액_Out[IDX2 + 1] == 0)) {  //AND (IDX2 + 1 == 보상한도금액_Out.Size - 1)) /*1.구간 제일 끝의 값 이면서 제일 끝 번지일 때 , 2. 구간 제일 끝의 값이지만 제일 끝 번지는 아닐 때 (끝 번지가 0..x축 y축 의 수가 달라서)*/
			__hpasRuleResult.보상한도액_계수표[X] = 보상한도금액_Out[IDX2 - 1]
			__hpasRuleResult.보상한도액_계수표[X + 1] = 보상한도금액_Out[IDX2]
		}
		break;
	}
	임시 = 보상한도금액_Out[IDX]	
	IDX2 = IDX2 + 1
}

return RESULT(__hpasRuleResult);
};
