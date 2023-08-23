package wne.rule.hrs.engine.spring.integration.custom;

import jdk.nashorn.internal.runtime.Undefined;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.script.SimpleBindings;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.*;

public class RuleFunction {
	
	//서버용 로거
	private static final Logger LOGGER = LoggerFactory.getLogger(RuleFunction.class);
	//서버용 로거 스위치
	public static int DEBUG_MODE = 1;
	

	
	//======================
	// 숫자
	//======================
	//BigDecimal 리턴
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
	
	//날짜의 년도를 숫자로 변환
	public static int YEAR(String date) {
		return Integer.parseInt(date.substring(0, 4));
	}
	
	//두 날짜사이의 월수 계산
	public static int MONTHS_BETWEEN(String date1, String date2) {
		return difference(date1, date2, Calendar.MONTH);
	}
	
	//두 날짜사이의 일수 계산
	public static int DAYS(String date1, String date2) {
		return difference(date1, date2, Calendar.DATE);
	}
	
	//요일 구하기
	public static int WEEK_DAY(String dateString) {
		return TO_DATE(dateString).get(Calendar.DAY_OF_WEEK);
	}
	
	//요일 텍스트 구하기
	private static String[] WEEK_DAY_TEXT_ARRAY = new String[] {"","일","월","화","수","목","금","토"};
	public static String WEEK_DAY_TEXT(String dateString) {
		return WEEK_DAY_TEXT_ARRAY[WEEK_DAY(dateString)];
	}
	
	//만나이 계산
	public static int LEGAL_AGE(String birthDate, String baseDate) {
		birthDate = birthDate.replaceAll("-", "");
		baseDate = baseDate.replaceAll("-", "");
		
		int a = Integer.parseInt(birthDate.substring(0, 4));
		int b = Integer.parseInt(baseDate.substring(0, 4));
		int age = b - a;
		
		if(birthDate.substring(4, 8).compareTo(baseDate.substring(4, 8)) > 0) {
			age = age - 1;
		}
		
		return age;
	}
	
	//보험연령 계산
	public static int INSURANCE_AGE(String birthDate, String baseDate) {
		birthDate = birthDate.replaceAll("-", "");
		baseDate = baseDate.replaceAll("-", "");
		
		int birthYear = Integer.parseInt(birthDate.substring(0, 4));
		int baseYear = Integer.parseInt(baseDate.substring(0, 4));
		int birthMonth = Integer.parseInt(birthDate.substring(4, 6));
		int baseMonth = Integer.parseInt(baseDate.substring(4, 6));
		int birthDay = Integer.parseInt(birthDate.substring(6, 8));
		int baseDay = Integer.parseInt(baseDate.substring(6, 8));
		
		int age = baseYear - birthYear;
		
		int diff = 0;
		int ageFix = 0;
		
		if(birthMonth <= baseMonth) {
			diff = baseMonth - birthMonth;
		}
		
		if(diff == 6 && baseDay < birthDay) {
			diff = diff - 1;
		}
		
		if(diff >= 6) {
			ageFix = 1;
		}
		
		return age + ageFix;
	}
	
	private static Calendar TO_DATE(String dateString) {
		String str = dateString.replaceAll("-", "");
		if(str.length() != 8) {
			throw new RuntimeException("8자리 날짜만 입력 가능합니다.");
		}
		Calendar c = Calendar.getInstance();
		int y = Integer.parseInt(str.substring(0, 4));
		int m = Integer.parseInt(str.substring(4, 6)) - 1;
		int d = Integer.parseInt(str.substring(6, 8));
		
		c.set(y, m, d);
		return c;
	}
	
	//======================
	// 리스트
	//======================
	public static boolean EXIST(List<Map<Object,Object>> list, String...conditions) {
		return FILTER(list, conditions).size() > 0;
	}
	public static int COUNT(List<Map<Object,Object>> list, String...conditions) {
		return FILTER(list, conditions).size();
	}
	public static List<Map<Object,Object>> FILTER(List<Map<Object,Object>> list, String...conditions) {
		
		List<Map<Object,Object>> outList = new ArrayList<>();
		
		if(list == null || list.isEmpty()) {
			return outList;
		}
		
		boolean result = true;
		for(Map<Object,Object> map : list) {
			
			result = true;
			
			for(String condition : conditions) {
				
				if(!checkCondition(map, condition)) {
					result = false;
					break;
				}
				
			}
			
			if(result) {
				outList.add(map);
			}
			
		}
		
		return outList;
	}
	
	//======================
	// 문자
	//======================
	//여러 문자를 하나로 합함
	public static String CONCATENATE(String... strs) {
		String s = "";
		for(String str : strs) {
			s += str;
		}
		return s;
	}
	
	//특정 문자를 취함
	public static String SUBSTR(String str, int start, int end) {
		return str.substring(start, end);
	}
	
	//문자의 자릿수를 리턴
	public static int LENGTH(String str) {
		return str.length();
	}
	
	//대상 문자에서 특정 문자의 인덱스를 리턴
	public static int INDEXOF(String str, String find) {
		return str.indexOf(find);
	}
	
	//문자를 대문자로 변환
	public static String UPPER(String str) {
		return str.toUpperCase();
	}
	
	//문자를 소문자로 변환
	public static String LOWER(String str) {
		return str.toLowerCase();
	}
	
	//======================
	// 사칙연산에서 사용.
	//======================
	public static BigDecimal ROUND(BigDecimal arg, int scale) {
		
		if (arg != null && scale != 0) {
			return arg.setScale(scale, BigDecimal.ROUND_HALF_UP);
		}
		
		return new BigDecimal(0);
	}
	
	public static BigDecimal ROUNDDOWN(BigDecimal arg, int scale) {
		
		if (arg != null && scale != 0) {
			return arg.setScale(scale, BigDecimal.ROUND_DOWN);
		}
		
		return new BigDecimal(0);
	}
	
	public static BigDecimal ROUNDUP(BigDecimal arg, int scale) {
		
		if (arg != null && scale != 0) {
			return arg.setScale(scale, BigDecimal.ROUND_UP);
		}
		
		return new BigDecimal(0);
	}
	
	public static BigDecimal PARSEINT(BigDecimal arg) {
		
		if (arg != null) {
			return new BigDecimal(arg.intValue());
		}
		
		return new BigDecimal(0);
	}
	
	public static BigDecimal PARSEFLOAT(BigDecimal arg) {
		
		if (arg != null) {
			return new BigDecimal(arg.floatValue());
		}
		
		return new BigDecimal(0);
	}
	
	public static BigDecimal PARSEDOUBLE(BigDecimal arg) {
		
		if (arg != null) {
			return new BigDecimal(arg.doubleValue());
		}
		
		return new BigDecimal(0);
	} 
	
	public static BigDecimal PARSELONG(BigDecimal arg) {
		
		if (arg != null) {
			return new BigDecimal(arg.longValue());
		}
		
		return new BigDecimal(0);
	} 
	
	public static BigDecimal PARSEBIGDECIMAL(BigDecimal arg) {
		if (arg != null) {
			return arg;
		}
		return new BigDecimal(0);
	}
	


	
	//======================
	// 기준정보 인터페이스
	//======================
	public static Object externalRatingService;
	public static Method ratingExecMethod;
	private static String ATTR_RPRS_SERVICE_ID = "PIMRAA0001";
	private static String ATTR_ISRN_SERVICE_ID = "PIMRAA0002";
	private static String ATTR_PROD_SERVICE_ID = "PIMRAA0003";
	

	
	private static void print(Exception e) {
		if(e.getStackTrace() == null) {
			return;
		}
		for(StackTraceElement s : e.getStackTrace()) {
			LOGGER.error(s.getFileName()+"."+s.getMethodName()+":"+s.getLineNumber()+" ");
		}
	}


	//======================
	// 디버그
	//======================
	
	//서버용 디버그

	
	//서버용 결과
	public static Object RESULT(Object object) {
		return object;
	}
	

	//======================
	// 글로벌 변수
	//======================
	private static final ThreadLocal<SimpleBindings> THREAD_LOCAL_MAP = new ThreadLocal<>();

	public static Object _GET_GLOBAL(String key) {
		return getGlobalBindings().get(key);
	}
	public static void _SET_GLOBAL(String key, Object object) {
		getGlobalBindings().put(key, object);
	}
	
	private static final String CURR_LOGGER_PREFIX = "_curr_";
	private static SimpleBindings getGlobalBindings() {
		SimpleBindings simpleBindings = THREAD_LOCAL_MAP.get();
		if(simpleBindings == null) {
			simpleBindings = new SimpleBindings();
			THREAD_LOCAL_MAP.set(simpleBindings);
		}
		return simpleBindings;
	}
	
	//==================================================================================================
	
	private static boolean checkCondition(Map<Object,Object> map, String str) {
		
		String key = null;
		String value = null;
		String op = null;
		int idx = -1;
		
		if((idx = str.indexOf('>')) >= 0) {
			
			if(str.indexOf('=') >= 0) {
				key = str.substring(0, idx);
				value = str.substring(idx + 2, str.length());
				op = ">=";
			}else {
				key = str.substring(0, idx);
				value = str.substring(idx + 1, str.length());
				op = ">";
			}
			
		}else if((idx = str.indexOf('<')) >= 0) {
			
			if(str.indexOf('=') >= 0) {
				key = str.substring(0, idx);
				value = str.substring(idx + 2, str.length());
				op = "<=";
			}else {
				key = str.substring(0, idx);
				value = str.substring(idx + 1, str.length());
				op = "<";
			}
			
		}else if((idx = str.indexOf('!')) >= 0 && str.indexOf('=') >= 0) {
			
			key = str.substring(0, idx);
			value = str.substring(idx + 2, str.length());
			op = "!=";
			
		}else if((idx = str.indexOf('=')) >= 0) {
			
			key = str.substring(0, idx);
			value = str.substring(idx + 1, str.length());
			op = "=";
			
		}
		
		if(op == null) {
			return false;
		}
		
		String mapValue = String.valueOf(map.get(key));
		if(mapValue != null) {
			mapValue = mapValue.trim();
		}
		if(value != null) {
			value = value.trim();
		}
		
		if("=".equals(op) 
		&& (
			   (value == mapValue)
		    || (value != null && mapValue != null && value.compareTo(mapValue) == 0)
		   )
		) {
			return true;
		}else if("!=".equals(op) 
		&& (
				(value == null && mapValue != null)
		|| (value != null && mapValue == null)
		|| (value.compareTo(mapValue) != 0)
		)
		) {
			
			return true;
			
		}else if(value != null && mapValue != null ) {
			
			if(">".equals(op) && mapValue.compareTo(value) > 0) {
				return true;
			}else if("<".equals(op) && mapValue.compareTo(value) < 0) {
				return true;
			}else if("<=".equals(op) && mapValue.compareTo(value) <= 0) {
				return true;
			}else if(">=".equals(op) && mapValue.compareTo(value) >= 0) {
				return true;
			}
			
		}
		
		
		return false;
	}
	
	private static int difference(String date1, String date2, int type) {
		Calendar cal = toCalendar(date1);
		GregorianCalendar gregDate1 = new GregorianCalendar(cal.get(1), cal.get(2), cal.get(5));
		Calendar cal2 = toCalendar(date2);
		GregorianCalendar gregDate2 = new GregorianCalendar(cal2.get(1), cal2.get(2), cal2.get(5));
		return difference(gregDate1, gregDate2, type);
	}
	
	private static Calendar toCalendar(String date) {
		date = date.replaceAll("-", "");
		Calendar cal = Calendar.getInstance();
		cal.set(Integer.parseInt(date.substring(0, 4)), Integer.parseInt(date.substring(4, 6)), Integer.parseInt(date.substring(6, 8)));
		return cal;
	}
	
	private static int difference(GregorianCalendar startDate, GregorianCalendar endDate, int type) {
		GregorianCalendar gregCal2;
		GregorianCalendar gregCal1;
		int elapsed = 0;
		if (endDate.after(startDate)) {
			gregCal2 = (GregorianCalendar) endDate.clone();
			gregCal1 = (GregorianCalendar) startDate.clone();
		} else {
			gregCal2 = (GregorianCalendar) startDate.clone();
			gregCal1 = (GregorianCalendar) endDate.clone();
		}
		if (type == 2 || type == 1) {
			gregCal1.clear(5);
			gregCal2.clear(5);
		}
		if (type == 1) {
			gregCal1.clear(2);
			gregCal2.clear(2);
		}
		while (gregCal1.before(gregCal2)) {
			gregCal1.add(type, 1);
			++elapsed;
		}
		return elapsed;
	}



	
}
