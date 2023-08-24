package wne.rule.hrs.engine.spring.integration.custom;

import com.caoccao.javet.annotations.V8Function;
import jdk.nashorn.internal.runtime.Undefined;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.script.SimpleBindings;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.*;

public class RuleFunctionTest {
	
	//서버용 로거
	private static final Logger LOGGER = LoggerFactory.getLogger(RuleFunctionTest.class);
	//서버용 로거 스위치
	public static int DEBUG_MODE = 1;
	

	
	//======================
	// 숫자
	//======================
	//BigDecimal 리턴
	@V8Function(name="amt")
	public static BigDecimal AMT(Object val) {
		if (val instanceof Undefined) {
			throw new RuntimeException("RuleFunction AMT : 전달받은 Value는 undefined 입니다.");
		}
		if (val != null) {
			return new BigDecimal(String.valueOf(val));
		}
		return new BigDecimal(0);
	}
	
	//======================
	// 날짜
	//======================
	
	//오늘일자
	public static String TODAY() {
		Calendar c = Calendar.getInstance();
		int y = c.get(Calendar.YEAR);
		int m = c.get(Calendar.MONTH) + 1;
		int d = c.get(Calendar.DATE);
		return y+(m<10?"0"+m:m+"")+(d<10?"0"+d:d+"");
	}

	//오늘일자
	public static String today() {
		Calendar c = Calendar.getInstance();
		int y = c.get(Calendar.YEAR);
		int m = c.get(Calendar.MONTH) + 1;
		int d = c.get(Calendar.DATE);
		return y+(m<10?"0"+m:m+"")+(d<10?"0"+d:d+"");
	}
}
