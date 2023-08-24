package wne.rule.hrs.engine.spring.integration.custom;

import com.caoccao.javet.annotations.V8Function;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class RuleExternalFunction {
	
	private static int year = Calendar.YEAR;
	private static int month = Calendar.MONTH;
	private static int date = Calendar.DATE;
	private static int hour = Calendar.HOUR;
	private static int minute = Calendar.MINUTE;
	private static int second = Calendar.SECOND;

    
    //TODO 삭제 예정 - proRule
//			    public static final int FULL_TYPE = 0;
//			    public static final int MIN_TYPE = 1;
//			    public static final int HOUR_TYPE = 2;
//			    public static final int AMPM_TYPE = 3;
//			    public static final int AM_MIN_TYPE = 4;
//			    public static final int AMHOUR_TYPE = 5;
//			    public static final int NOCOLON_TYPE = 6;
    
    private static Map<Integer, String> datePatternMapping = new HashMap<Integer, String>(){{
	    put(2, "Normal"); //"yyyyMMdd" //EMPTY_TYPE
	    put(0, "Dash"); //"yyyy-MM-dd" //DASH_TYPE
	    put(1, "Slash"); // "yyyy/MM/dd" //SLASH_TYPE
	    put(3, "Kor"); // "yyyy\uB144 MM\uC6D4 dd\uC77C", //KOR_TYPE
	    put(4, "Dot"); // "yyyy.MM.dd" //DOT_TYPE
	    put(5, "Blank"); //"yyyy MM dd" //BLANK_TYPE
	}};
	
	private static Map<String, String> datePattern = new HashMap<String, String>(){{
	    put("Normal", "yyyyMMdd");
	    put("Dash", "yyyy-MM-dd");
	    put("Slash", "yyyy/MM/dd");
	    put("Kor", "yyyy\uB144 MM\uC6D4 dd\uC77C");
	    put("Dot", "yyyy.MM.dd");
	    put("Blank", "yyyy MM dd");
	    
	    put("NormalTime", "yyyyMMdd HH:mm:ss");
	    put("DashTime", "yyyy-MM-dd HH:mm:ss");
	}};
	//TODO 삭제 예정 -> proRule
//	public static String formatListDate[] = {
//        "yyyy-MM-dd", "yyyy/MM/dd", "yyyyMMdd", "yyyy\uB144 MM\uC6D4 dd\uC77C", "yyyy.MM.dd", "yyyy MM dd"
//    };
//    public static String formatListTime[] = {
//        "HH:mm:ss", "HH:mm", "HH", "a hh:mm:ss", "a hh:mm", "a hh", "HHmmss"
//    };
//    private static String formatDelimiter[] = {
//        "-", "/", "", "\uB144 |\uC6D4 |\uC77C", ".", " "
//    };  
	
	public static String[] FUNC_LIST = new String[] { 
			//DATE
			 "COUNTLEAPMONTS"
			,"GET_AFTER_DATE"
			,"GET_AFTER_MONTHS"
			,"GET_BEFORE_ONE_MONTH"
			,"GET_DATE_STR"
			,"GET_YEAR"
			,"GET_MONTH"
			,"GET_DAY"
			,"GET_DAYS_BETWEEN"
			,"GET_DAYS_BETWEEN_ROUND_UP"
			,"lZeroPad"
			,"GET_CURRNET_DATE"
			,"GET_LAST_DAY_OF_MONTH"
			,"GET_MONTHS_BETWEEN"
			,"GET_MONTHS_BETWEEN_ROUND_UP"
			,"GET_MONTHS_BETWEEN_3"
			,"GET_TRM_YEARS"
			,"GET_TRM_MONTHS"
			,"GET_TRM_DAYS"
			,"CAL_INSURANCE_AGE"
			,"GET_MATURITY_YEARS"
			,"GET_MATURITY_MONTHS"
			,"CAL_WORK_DAY_AFTER_DAYS"
			,"CAL_WORK_DAY_AFTER_MONTHS"
			,"IS_VALID_DATE"
			,"CAL_REAL_AGE"
			
			//
			,"GET_ASCII"
			,"CONVER_BIGDECIMAL"
			,"CONVER_BIGDECIMAL_TO_LONG"
			,"CONVER_BIGDECIMAL_TO_INT"
			,"GET_LIST"
			,"COPY_LIST"
			,"CAL_LOG"
			,"REPLACE_CHAR"
			,"SPLIT_STRING"
			,"IS_VALID_RESIDENT_NUM"
			,"GET_LIST_IN_LIST"
			,"CAL_MIN"
			,"CAL_POW"
			,"TO_STRING"
			,"TO_BIGDECIMAL"
			,"FIND_CHAR"
	};
	
	/**
	 * 
	 * 두 달 사이에 윤달이 몇번 포함되어 있는지 센다.
	 * 시작일과 종료일도 계산에 포함한다. 단 종료일이 시작일보다 이르면 0을 리턴한다.
	 * 
	 * @param startDate
	 * @param endDate
	 * 
	 * @return 윤달 수
	 */
	@V8Function(name = "CAL_LEAP_MONTS")
	public static int CAL_LEAP_MONTS(Date startDate, Date endDate) {
		GregorianCalendar startCal = convertGregorianCalendar(startDate);
		GregorianCalendar endCal = convertGregorianCalendar(endDate);
		
		int startYear = startCal.get(year);
		int endYear = endCal.get(year);
		int leapCnt = 0;

		// 시작년도와 종료년도를 제외하여 윤년 갯수를 센다.
		for (int i = (startYear + 1); i <= (endYear - 1); i++) {
			if (isLeapYear(i))
				leapCnt++;
		}
		if (startYear != endYear) {
			// 시작일자에 윤달 포함여부 체크
			if (isLeapYear(startYear)) {
				int startMonthAndDate = (startCal.get(month) + 1) * 100 + startCal.get(date);
				if (startMonthAndDate <= 229)
					leapCnt++;
			}
			// 종료일자에 윤달 포함여부 체크
			if (isLeapYear(endYear)) {
				int endMonthAndDate = (endCal.get(month) + 1) * 100 + endCal.get(date);
				if (endMonthAndDate >= 229)
					leapCnt++;
			}
		} else {
			if (isLeapYear(startYear)) {
				int startMonthAndDate = (startCal.get(month) + 1) * 100 + startCal.get(date);
				int endMonthAndDate = (endCal.get(month) + 1) * 100 + endCal.get(date);
				if (startMonthAndDate <= 229 && endMonthAndDate >= 229) {
					leapCnt++;
				}
			}
		}
		return leapCnt;
	}
	
    /**
     * 입력된 연도가 윤년인지를 판단함.
     *
     * @param strYear 판단할 연도, 4자리 String (예: "2000")
     * @return 윤년일 경우 <code>true</code>
     */
    public static boolean isLeapYear(String strYear) {
        int year = Integer.parseInt(strYear);
        return isLeapYear(year);
    }

    /**
     * 입력된 연도가 윤년인지를 판단함.
     *
     * @param year 판단할 연도, int 값 (예: 2000)
     * @return 윤년일 경우 <code>true</code>
     */
    public static boolean isLeapYear(int year) {
        return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
    }
    
    /**
	 * 입력일자에 년, 월, 일 더하기
	 * @param baseDate
	 * @param year
	 * @param month
	 * @param day
	 * @return YYYY-MM-DD 형식의 날짜
	 */

	public static String GET_AFTER_DATE(String baseDate, int year, int month, int day) {
		GregorianCalendar baseGreCalendar = convertGregorianCalendar(baseDate);
		Date resultDate = calAfterDate(baseGreCalendar, year, month, day, 0, 0, 0);
		
		return toDateFormatString(resultDate, datePattern.get("Dash"));
	}
	
   /**
     * 날짜에 년,월,일을 더하기
     * @param baseDate
     * @param year
     * @param month
     * @param day
     * @return 날짜
     */
    public static Date GET_AFTER_DATE_FORMAT(Date baseDate, int year, int month, int day) {
		GregorianCalendar baseGreCalendar = convertGregorianCalendar(baseDate);
		Date resultDate = calAfterDate(baseGreCalendar, year, month, day, 0, 0, 0);

        return resultDate;
    }
	
    /**
     * 입력 년, 월, 일, 시, 분, 초 이후의 날짜를 가져옴.
     * @param year 년수
     * @param month 개월수
     * @param day 일수
     * @param hour 시간
     * @param min 분
     * @param sec 초
     * @return 입력 년, 월, 일, 시, 분, 초가 더해진 날짜
     */
    public static Date calAfterDate(GregorianCalendar baseGreCalendar, int year, int month, int day, int hour, int min, int sec) {
    	baseGreCalendar.add(Calendar.YEAR, year);
    	baseGreCalendar.add(Calendar.MONTH, month);
    	baseGreCalendar.add(Calendar.DATE, day);
    	baseGreCalendar.add(Calendar.HOUR_OF_DAY, hour);
    	baseGreCalendar.add(Calendar.MINUTE, min);
    	baseGreCalendar.add(Calendar.SECOND, sec);

        return new Date(baseGreCalendar.getTimeInMillis());
    }
    
    /**
     * 날짜 문자열을 캘린더 타입으로 변환한다.
     * @param baseDate yyyyMMdd 또는 yyyyMMddHHmmss 형식의 문자열, 구분자가 있어도 상관없음.
     * @return GregorianCalendar
     */
    private static GregorianCalendar convertGregorianCalendar(String baseDate) {
        if (baseDate == null)
            baseDate = "";

        //숫자를 제외한 모든 문자를 제거한다.
        baseDate = baseDate.replaceAll("\\D", "");

        int len = baseDate.length();

        int yy = 0;
        int mm = 0;
        int dd = 0;
        int hh = 0;
        int mi = 0;
        int ss = 0;
        
        if ( len > 3 ) yy = Integer.parseInt(baseDate.substring(0, 4));
        if ( len > 5 ) mm = Integer.parseInt(baseDate.substring(4, 6)) - 1;
        if ( len > 7 ) dd = Integer.parseInt(baseDate.substring(6, 8));
        if ( len > 9 ) hh = Integer.parseInt(baseDate.substring(8, 10));
        if ( len > 11 ) mi = Integer.parseInt(baseDate.substring(10, 12));
        if ( len > 13 ) ss = Integer.parseInt(baseDate.substring(12, 14));
        
        return new GregorianCalendar(yy, mm, dd, hh, mi, ss);
    }
    
    private static Date convertSqlDate(String baseDate) {
        if (baseDate == null)
            baseDate = "";
        GregorianCalendar gregorianCalendar = convertGregorianCalendar(baseDate);
        return new Date(gregorianCalendar.getTimeInMillis());
    }
    
    private static GregorianCalendar convertGregorianCalendar(Date baseDate) {
    	GregorianCalendar gregorianCalendar = new GregorianCalendar();
    	gregorianCalendar.setTime(baseDate);
    	return gregorianCalendar;
    }
    
    private static String toDateFormatString(Date baseDate, String pattern) {
    	SimpleDateFormat dateFormatter = new SimpleDateFormat(pattern);
        return dateFormatter.format(baseDate);
    }
    
    /**
     * 날짜에 월수 더하기
     * @param AfterDate
     * @param MonthCount
     * @return 날짜
     */
    public static String GET_AFTER_MONTHS(String baseDate, int monthCount) {
		GregorianCalendar baseGreCalendar = convertGregorianCalendar(baseDate);
		Date resultDate = calAfterDate(baseGreCalendar, 0, monthCount, 0, 0, 0, 0);
		
		return toDateFormatString(resultDate, datePattern.get("Normal"));
    }
    
    /**
     * 전월 계산 
     * @param baseDate
     * @return
     */
    public static String GET_BEFORE_ONE_MONTH(String baseDate) {
    	GregorianCalendar baseGreCalendar = convertGregorianCalendar(baseDate);
		Date resultDate = calAfterDate(baseGreCalendar, 0, -1, 0, 0, 0, 0);
		
		return toDateFormatString(resultDate, datePattern.get("Normal")).substring(0, 6);
    }
    
    /**
	 * String, Date 형의 값을 yyyymmdd 형태의 값으로 변환하여 리턴한다.
	 * @param object : String 혹은 date 값
	 * @return String yyyymmdd 값
	 */
	public static String GET_DATE_STR(Object obj) {
		String str = "";
		if (obj == null) {
            return null;
		}

		if (obj instanceof String) {
			str = obj.toString();
			if (str.length() >= 8){
				str = str.substring(0, 8);
			}
		}

		if (obj instanceof Date) {
	        Date sqlDate =(Date) obj;
			str = toDateFormatString(sqlDate, datePattern.get("Normal"));
		}
		
		return str;
	}
	
    /**
     * 해당 연도를 가져옴.
     * @return 연도
     */
    public static int GET_YEAR(String baseDate) {
        return convertGregorianCalendar(baseDate).get(Calendar.YEAR);
    }

    /**
     * 해당 월을 가져옴.
     * @return 월 - 1월부터
     */
    public static int GET_MONTH(String baseDate) {
        return convertGregorianCalendar(baseDate).get(Calendar.MONTH) + 1;
    }
	
	/**
	 * YYYYMMDD 형식의 날짜에서 일 구하기
	 * @param baseDate
	 * @return 일
	 */
	public static int GET_DAY(String baseDate) {
		return convertGregorianCalendar(baseDate).get(Calendar.DATE);
	}

    /**
     * 일자간의 일수 차이를 구한다.
     * @param startDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @param endDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @return 두 일자간의 일수 차이
     */
    public static long GET_DAYS_BETWEEN(String startDate, String endDate) {
        return GET_DAYS_BETWEEN(convertSqlDate(startDate), convertSqlDate(endDate));
    }

    /**
     * 일자간의 일수 차이를 구한다.
     * @param startDate
     * @param endDate
     * @return 두 일자간의 일수 차이
     */
    public static long GET_DAYS_BETWEEN(Date startDate, Date endDate) {
        if (endDate.after(startDate)){
            return getDaysBetweenTwoDate(startDate, endDate);
        } else {
            return -getDaysBetweenTwoDate(endDate, startDate);
        }
    }
    private static long getDaysBetweenTwoDate(Date startDate, Date endDate) {
        long diff = endDate.getTime() - startDate.getTime();

        return (long) diff / (24 * 3600 * 1000);
    }
    
    /**
     * 일자간의 일수 차이를 구한다. (올림적용) 
     * @param startDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @param endDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @return 두 일자간의 일수 차이
     */
    public static long GET_DAYS_BETWEEN_ROUND_UP(String startDate, String endDate) {
        return GET_DAYS_BETWEEN_ROUND_UP(convertSqlDate(startDate), convertSqlDate(endDate));
    }

    /**
     * 일자간의 일수 차이를 구한다. (올림적용) 
     * @param startDate
     * @param endDate
     * @return 두 일자간의 일수 차이
     */
    public static long GET_DAYS_BETWEEN_ROUND_UP(Date startDate, Date endDate) {
        if (endDate.after(startDate)){
            return getDaysBetweenRoundUpTwoDate(startDate, endDate);
        } else {
            return -getDaysBetweenRoundUpTwoDate(endDate, startDate);
        }
    }
    
    private static long getDaysBetweenRoundUpTwoDate(Date startDate, Date endDate) {
        long diff = endDate.getTime() - startDate.getTime();
        double dayDiff = diff / (24 * 3600 * 1000.0);
        return (long) Math.ceil(dayDiff);
    }
    
    /**
	 * 두 날짜의 일수 차이를 년월일로 구하기
	 * @param startDateStr
	 * @param endDateStr
	 * @return YYMMDD 형식의 날짜
	 */
	public static String GET_DATE_BETWEEN(String startDateStr, String endDateStr) {
		int[] ymd = null;
		Date startDate = convertSqlDate(startDateStr);
		Date endDate = convertSqlDate(endDateStr);
		 
		if (endDate.after(startDate)){
			ymd = getDateBetween(startDate, endDate);
        } else {
        	ymd = getDateBetween(endDate, startDate);
        }
		
		return lZeroPad(ymd[0], 2) + lZeroPad(ymd[1], 2) + lZeroPad(ymd[2], 2);
	}

    /**
     * 일자간의 차이를 년월일로 가져온다. 인자의 순서에 상관없이 큰 날짜에서 작은 날짜의 차이를 계산한다.
     * @param aDate
     * @param bDate
     * @return 일자간의 차이
     */
    public static int[] getDateBetween(Date startDate, Date endDate) {
    	GregorianCalendar startCal = convertGregorianCalendar(startDate);
    	GregorianCalendar endCal = convertGregorianCalendar(endDate);

        int diffMonths = getMonthsBetweenWithCheckLastDay(startDate, endDate, false);
        int diffYears = diffMonths / 12;
        long diffDays = 0;
        int monthValue = diffMonths % 12;

        if(startCal.get(date) == endCal.get(date)) {
            diffDays = 0;
        } else if (startCal.get(date) < endCal.get(date)) {
            diffDays = endCal.get(date) - startCal.get(date);
        } else {
        	if(diffMonths < 1 ) {
            	diffDays = GET_DAYS_BETWEEN(startDate, endDate);
        	} else {
        		String endDateStr = toDateFormatString(endDate, datePattern.get("Normal"));
        		String endDateBeforeOneMonthStr = GET_BEFORE_ONE_MONTH(endDateStr);
        		Date endDateBeforeOneMonth = convertSqlDate(endDateBeforeOneMonthStr);
        		GregorianCalendar endDateBeforeOneMonthCal = convertGregorianCalendar(endDateBeforeOneMonthStr);
        		
        		//종료일 전월에 시작일의 일자를 세팅.. 시작일이 말일보다 큰 경우 말일로 세팅 
        		
        		int lastDayOfEndDateBeforeOneMonth = GET_LAST_DAY_OF_MONTH(endDateBeforeOneMonthStr);
        		if (startCal.get(date) <= lastDayOfEndDateBeforeOneMonth) {
        			endDateBeforeOneMonthCal.set(date, startCal.get(date)); //시작일의 일을 세팅..
        		} else {
            		endDateBeforeOneMonthCal.set(date, lastDayOfEndDateBeforeOneMonth); 
        		}
        		diffDays = GET_DAYS_BETWEEN(endDateBeforeOneMonth, endDate);
        	}
        }
        return new int[] {diffYears, monthValue, (int) diffDays };
    }
    
    /**
	 * 숫자 앞에 "0"을 붙여서 주어진 길이만큼의 문자열로 변환
	 * @param originNumber
	 * @param length
	 * @return 문자열
	 */
	public static String lZeroPad(int originNumber, int length) {
		String originStr = String.valueOf(originNumber);
		int orgLen = originStr.length();
		if (orgLen >= length) {
			return originStr;
		} else {
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < length - orgLen; i++) {
				sb.append('0');
			}
			sb.append(originStr);
			return sb.toString();
		}
	}
	
    public static String GET_CURRNET_DATE(int format) {
        if(format >= 6 || format < 0) {
            return null;
        } else {
            SimpleDateFormat simpledateformat = new SimpleDateFormat(datePattern.get(datePatternMapping.get(format)));
            Calendar calendar = Calendar.getInstance();
            simpledateformat.setCalendar(calendar);
            return simpledateformat.format(simpledateformat.getCalendar().getTime());
        }
    }
    
    /**
     * 해당월의 마지막 일을 가져옴.
     * @param baseDate
     * @return 마지막일
     */
	public static int GET_LAST_DAY_OF_MONTH(String baseDate) {
		baseDate = baseDate.replaceAll("\\D", ""); // 구분자를 제거한다.
		if (baseDate.length() == 6) {
			baseDate += "01";
		}
		return getLastDayOfMonth(convertGregorianCalendar(baseDate));
	}
    
    /**
     * 해당월의 마지막 일을 가져옴.
     * @param baseDate 날짜형식 문자열.
     * @return 마지막일
     */
    public static int getLastDayOfMonth(String baseDate) {
    	if (baseDate != null) {
    		//년월만 입력한 경우 1일로 세팅한다.
    		baseDate = baseDate.replaceAll("\\D", "");
    		if ( baseDate.length() == 6 ) {
    			baseDate += "01";
    		}
    	}
    	return getLastDayOfMonth(convertGregorianCalendar(baseDate));
    }
    
    /**
     * 해당월에 몇 일 까지 있는지를 가져옴.
     * @return 주어진 달이 가진 일 수
     */
    public static int getLastDayOfMonth(GregorianCalendar baseDate){
        return baseDate.getActualMaximum(Calendar.DAY_OF_MONTH);
    }
    
    /**
     * 일자간의 개월수 차이를 구한다.
     * 한달 30일 기준으로 0~29일 차이면 0개월, 30~59일 차이면 1개월
     * @param startDate
     * @param endDate
     * @param isLastDayOfMonth 말일비교. 종료일이 말일인 경우 시작일이 종료일보다 커도 한달로 계산함.
     * @return 두 일자간의 개월수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int GET_MONTHS_BETWEEN(String startDate, String endDate) {
            return getMonthsBetweenWithCheckLastDay(convertSqlDate(startDate), convertSqlDate(endDate), false);
    }
    
    /**
     * 두 날짜의 월수 차이 구하기. 내림 적용. 두 날짜가 말일인 경우 한달로 계산
     * @param startDate
     * @param endDate
     * @param isLastDayOfMonth 말일비교. 종료일이 말일인 경우 시작일이 종료일보다 커도 한달로 계산함.
     * // 시작일, 종료일 모두 말일인 경우 한달로 계산한다.
     * @return 두 일자간의 개월수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int getMonthsBetweenWithCheckLastDay(Date startDate, Date endDate, boolean isLastDayOfMonth) {
        if (endDate.after(startDate)) {
            return getMonthsBetweenTwoDate(startDate, endDate, isLastDayOfMonth);
        } else {
            return -getMonthsBetweenTwoDate(endDate, startDate, isLastDayOfMonth);
        }
    }

    private static int getMonthsBetweenTwoDate(Date startDate, Date endDate, boolean isLastDayOfMonth) {
    	GregorianCalendar startCal = convertGregorianCalendar(startDate);
    	GregorianCalendar endCal = convertGregorianCalendar(endDate);

        int diffYears = endCal.get(year) - startCal.get(year);
        int diffMonths = (endCal.get(month) + 1) - (startCal.get(month) + 1);
        int diffDays = endCal.get(date) - startCal.get(date);
        
        if(isLastDayOfMonth) {
            //시작일과 종료일이 모두 말일인 경우 일수 차이는 0으로 한다.
            if ((endCal.get(date) == getLastDayOfMonth(endCal)) && diffDays < 1 ) {
            	diffDays = 0; 
            }
        }
          
        if (diffYears == 0) {
            if (diffMonths >= 0) {
                return (diffYears * 12 + diffMonths + (diffDays < 0 ? -1 : 0));
            } else {
                return (diffYears * 12 + diffMonths + (diffDays > 0 ? 1 : 0));
            }
        } else if (diffYears > 0) {
            return (diffYears * 12 + diffMonths + (diffDays < 0 ? -1 : 0));
        } else {
            return (diffYears * 12 + diffMonths + (diffDays > 0 ? 1 : 0));
        }
    }
    
    /**
     * 일자간의 개월수 차이를 구한다. 1개월을 넘어서면 2개월로 계산한다.
     *
     * @param startDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @param endDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @return 두 일자간의 개월수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int GET_MONTHS_BETWEEN_ROUND_UP(String startDate, String endDate) {
        return getMonthsBetweenRoundUp(convertSqlDate(startDate), convertSqlDate(endDate));
    }

    /**
     * 일자간의 개월수 차이를 구한다. 1개월을 넘어서면 2개월로 계산한다.
     *
     * @param startDate
     * @param endDate
     * @return 두 일자간의 개월수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int getMonthsBetweenRoundUp(Date startDate, Date endDate) {
        if (endDate.after(startDate)) {
            return getMonthsBetweenRoundUpTwoDate(startDate, endDate);
        } else {
            return -getMonthsBetweenRoundUpTwoDate(endDate, startDate);
        }
    }

    private static int getMonthsBetweenRoundUpTwoDate(Date startDate, Date endDate) {
    	GregorianCalendar startCal = convertGregorianCalendar(startDate);
    	GregorianCalendar endCal = convertGregorianCalendar(endDate);

        int diffYears = endCal.get(year) - startCal.get(year);
        int diffMonths = (endCal.get(month) + 1) - (startCal.get(month) + 1);
        int diifDays = endCal.get(date) - startCal.get(date);
        
        //시작일과 종료일이 모두 말일인 경우 일수 차이는 0으로 한다.
        if ((endCal.get(date) == getLastDayOfMonth(endCal)) && diifDays < 1 ) {
        	diifDays = 0; 
        }

        if (diffYears == 0) {
            if (diifDays == 0) {
                return diffMonths;
            } else {
                return (diffMonths + (diifDays > 0 ? 1 : 0));
            }
        } else if (diffYears > 0) {
            if (diifDays == 0)  {
                return diffYears * 12 + diffMonths;
            } else {
                return (diffYears * 12 + diffMonths + (diifDays < 0 ? 0 : 1));
            }
        } else {
            return (diffYears * 12 + diffMonths + (diifDays > 0 ? 1 : 0));
        }
    }
    
	  /**
     * 일자간의 개월수 차이를 구한다.
     * 한달 30일 기준으로 0~29일 차이면 0개월, 30~59일 차이면 1개월
     * @param startDate
     * @param endDate
     * @param isLastDayOfMonth 말일비교. 종료일이 말일인 경우 시작일이 종료일보다 커도 한달로 계산함.
     * // 말일에 상관없이 무조건 일수 차이로 계산한다.
     * @return 두 일자간의 개월수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int GET_MONTHS_BETWEEN_3(String startDate, String endDate) {
            return getMonthsBetweenWithCheckLastDay(convertSqlDate(startDate), convertSqlDate(endDate), true);
    }
    
	/**
	 * 두 날짜의 연수 차이 구하기. 내림 적용
	 * @param startDate
	 * @param endDate
	 * 
	 * @return 연수 차이
	 */
	public static int GET_YEARS_BETWEEN(String startDate, String endDate) {
		// 말일에 상관없이 무조건 일수 차이로 계산한다.
		return getYearsBetweenTwoDateWithCheckLastDay(convertSqlDate(startDate), convertSqlDate(endDate), false);
	}
	/**
	 * 두 날짜의 연수 차이 구하기. 내림 적용. 두 날짜가 말일인 경우 한달로 계산
	 * @param startDate
	 * @param endDate
	 * 
	 * @return 연수 차이
	 */

	public static int GET_YEARS_BETWEEN3(String startDate, String endDate) {
		// 시작일, 종료일 모두 말일인 경우 한달로 계산한다.
		return getYearsBetweenTwoDateWithCheckLastDay(convertSqlDate(startDate), convertSqlDate(endDate), true);
	}
	
	/**
	 * @param startDate
	 * @param endDate
	 * @return 연수 차이
	 */

	public static int GET_YEARS_BETWEEN_ROUND_UP(String startDate, String endDate){
		return getYearsBetweenTwoDate(convertSqlDate(startDate), convertSqlDate(endDate));
	}
	
    /**
     * 일자간의 년수 차이를 구한다.
     *
     * @param beginDate
     * @param endDate
     * @param checkEndDay 말일비교. 종료일이 말일인 경우 시작일이 종료일보다 커도 한달로 계산함.
     * @return 두 일자간의 년수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int getYearsBetweenTwoDateWithCheckLastDay(Date beginDate, Date endDate, boolean checkEndDay) {
        if (endDate.after(beginDate)) {
            return doGetYearsDiff(beginDate, endDate, checkEndDay);
        } else {
            return -doGetYearsDiff(endDate, beginDate, checkEndDay);
        }
    }

    private static int doGetYearsDiff(Date beginDate, Date endDate, boolean checkEndDay) {
        int months = getMonthsBetweenWithCheckLastDay(beginDate, endDate, checkEndDay);
        return months / 12;
    }
    
    
    /**
     * 일자간의 년수 차이를 구한다. 1년을 넘어서면 2년으로 계산한다.
     *
     * @param startDate
     * @param endDate
     * @return 두 일자간의 년수 차이, 첫번째 인자가 큰 경우 음수
     */
    public static int getYearsBetweenTwoDate(Date startDate, Date endDate) {
        if (endDate.after(startDate)) {
            return doGetYearsDiffAbove(startDate, endDate);
        } else {
            return -doGetYearsDiffAbove(endDate, startDate);
        }
    }

    private static int doGetYearsDiffAbove(Date startDate, Date endDate) {
        int months = getMonthsBetweenRoundUp(startDate, endDate);
        return (int) Math.ceil(months / 12.);
    }

	/**
	 * 두 날짜의 연수 차이 구하기
	 * @param startDate
	 * @param endDate
	 * @return 연수 차이
	 */
	public static int GET_TRM_YEARS(String startDate, String endDate) {
		int[] trm_ymd = getDateBetween(convertSqlDate(startDate), convertSqlDate(endDate));
		int years = trm_ymd[0];
		return years;
	}

	/**
	 * 두 날짜의 월수 차이 구하기
	 * @param startDate
	 * @param endDate
	 * @return 월수 차이
	 */
	public static int GET_TRM_MONTHS(String startDate, String endDate) {
		int[] trm_ymd = getDateBetween(convertSqlDate(startDate), convertSqlDate(endDate));
		int months = trm_ymd[1];
		return months;
	}

	/**
	 * 두 날짜의 일수 차이 구하기
	 * @param beginDate
	 * @param endDate
	 * @return 일수 차이
	 */
	public static int GET_TRM_DAYS(String startDate, String endDate) {
		int[] trm_ymd = getDateBetween(convertSqlDate(startDate), convertSqlDate(endDate));
		int days = trm_ymd[2];
		return days;
	}
	
    /**
     * 기준일자를 기준으로 생년월일에서 보험나이를 구함.
     * 
     * @param strBirthDate 생년월일 - 년(YYYY), 월(MM), 일(DD) 형식이 들어가 있는 문자열, 년월일 사이에 구분자가 있어도 상관없음.
     * @param strStdDate 기준일자 - 년(YYYY), 월(MM), 일(DD) 형식이 들어가 있는 문자열, 년월일 사이에 구분자가 있어도 상관없음.
     * @return 보험나이
     */
    public static int CAL_INSURANCE_AGE(String strBirthDate, String strStdDate){
        if (strBirthDate == null || !IS_VALID_DATE(strBirthDate)) {
        	throw new RuntimeException("생년월일의 값을 확인하시기 바랍니다.");
        }
        if (strStdDate == null || !IS_VALID_DATE(strStdDate)) {
        	throw new RuntimeException("기준일자의 값을 확인하시기 바랍니다.");
        }
        
        Date birthDate = convertSqlDate(strBirthDate);
        Date stdDate = convertSqlDate(strStdDate);

        return calValueInsuranceAge(birthDate, stdDate);
    }
    
    /**
     * 날짜 형식이 유효한지 체크한다. 구분자는 제거하고 유효 체크함.
     * @param baseDate 날짜(+시간) 문자열 - yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @return 날짜 형식이 유효할 경우 TRUE
     */
    public static boolean IS_VALID_DATE(String baseDate) {
        if (baseDate == null) {
            return false;
        }
        baseDate = baseDate.replaceAll("\\D", ""); // 숫자를 제외한 모든 문자를 제거한다.

        try {
        	GregorianCalendar startDateCal = convertGregorianCalendar(baseDate);

            int len = baseDate.length();
            if (len < 1) {
            	return false;
            }
            if (len >= 4 && startDateCal.get(year) != Integer.parseInt(baseDate.substring(0, 4))) {
                return false;
            }
            if (len >= 6 && (startDateCal.get(month) + 1) != Integer.parseInt(baseDate.substring(4, 6))) {
                return false;
            }
            if (len >= 8 && startDateCal.get(date) != Integer.parseInt(baseDate.substring(6, 8))) {
                return false;
            }
            if (len >= 10 && startDateCal.get(hour) != Integer.parseInt(baseDate.substring(8, 10))) {
                return false;
            }
            if (len >= 12 && startDateCal.get(minute) != Integer.parseInt(baseDate.substring(10, 12))) {
                return false;
            }
            if (len >= 14 && startDateCal.get(second) != Integer.parseInt(baseDate.substring(12, 14))) {
                return false;
            }
        }
        catch (Exception e) {
            return false;
        }
        return true;
    }

    /**
     * 기준일자를 기준으로 생년월일에서 보험나이를 구함.
     * 
     * @param birthDate 생년월일
     * @param stdDate 기준일자
     * @return 보험나이
     */
    public static int calValueInsuranceAge(Date birthDate, Date stdDate){
        int diffMonths = getMonthsBetweenWithCheckLastDay(birthDate, stdDate, false);
        return (int) Math.round(diffMonths / 12.0);
    }
    
    /**
     * 현재일자를 기준으로 생년월일에서 만나이를 구함.
     * @param birthdayStr 생년월일 - 년(YYYY), 월(MM), 일(DD) 형식이 들어가 있는 문자열, 년월일 사이에 구분자가 있어도 상관없음.
     * @return 만나이
     */
    public static int CAL_REAL_AGE(String birthdayStr) {
        return calRealAge(birthdayStr, RuleFunction.TODAY());
    }

    /**
     * 기준일자를 기준으로 생년월일에서 만나이를 구함.
     * 
     * @param birthdayStr 생년월일 - 년(YYYY), 월(MM), 일(DD) 형식이 들어가 있는 문자열, 년월일 사이에 구분자가 있어도 상관없음.
     * @param baseDateStr 기준일자 - 년(YYYY), 월(MM), 일(DD) 형식이 들어가 있는 문자열, 년월일 사이에 구분자가 있어도 상관없음.
     * @return 만나이
     */
    public static int calRealAge(String birthdayStr, String baseDateStr) {
        return calRealAge(convertSqlDate(birthdayStr), convertSqlDate(baseDateStr));
    }

    /**
     * 기준일자를 기준으로 생년월일에서 만나이를 구함.
     * @param birthDate 생년월일
     * @param stdDate 기준일자
     * @return 만나이
     */
    public static int calRealAge(Date birthDate, Date stdDate) {
    	int monDiff = getMonthsBetweenWithCheckLastDay(birthDate, stdDate, false);
        return (int) Math.floor(monDiff / 12.0);
    }
    
	/**
	 * 만기일 년수 구하기
	 * @param insuranceAge
	 * @param gbn
	 * @param value
	 * @return 년수
	 */
	public static int GET_MATURITY_YEARS(int insuranceAge, String gbn, int value) {
		if ("02".equals(gbn)) { // 년만기
			return value;
		} else if ("01".equals(gbn)) { // 세만기
			return value - insuranceAge;
		} else if ("03".equals(gbn)) { // 개월만기
			return -1;
		}
		return -1;
	}

	/**
	 * 만기일 개월수 구하기
	 * @param insuranceAge
	 * @param gbn
	 * @param value
	 * @return 개월수
	 */
	public static int GET_MATURITY_MONTHS(int insuranceAge, String gbn, int value) {
		if ("02".equals(gbn)) { // 년만기
			return value * 12;
		} else if ("01".equals(gbn)) { // 세만기
			return (value - insuranceAge) * 12;
		} else if ("03".equals(gbn)) { // 개월만기
			return value;
		}
		return -1;
	}
	
	/**
	 * 기준일의 년월을 더한 날짜의 말일자 구하기
	 * @param strDate
	 *            날짜형식 문자열.
	 * @return 마지막일
	 */
	public static String GET_LAST_DAY_STR(String strDate, int year, int month) {
		int tempYear = 0;
		int tempMonth = 0;
		int tempDay = 0;
		String tempDate = "";
		String result = "";
		if (strDate != null) {
			tempYear = Integer.parseInt(strDate.substring(0, 4)) + year;
			tempMonth = Integer.parseInt(strDate.substring(4, 6)) + month;
			tempDay = Integer.parseInt(strDate.substring(6, 8));
			if (tempMonth > 12) {
				tempYear = tempYear + (int) tempMonth / 12;
				tempMonth = tempMonth % 12;
			}
			if (tempMonth < 10) {
				if (tempDay < 10){
					tempDate = String.valueOf(tempYear) + "0"
							+ String.valueOf(tempMonth) + "0"
							+ String.valueOf(tempDay);
				} else {
					tempDate = String.valueOf(tempYear) + "0"
							+ String.valueOf(tempMonth)
							+ String.valueOf(tempDay);
				}
			} else {
				if (tempDay < 10) {
					tempDate = String.valueOf(tempYear)
					+ String.valueOf(tempMonth) + "0"
					+ String.valueOf(tempDay);
				} else {
					tempDate = String.valueOf(tempYear)
					+ String.valueOf(tempMonth)
					+ String.valueOf(tempDay);
				}
			}
			result = tempDate.substring(0, 6) + getLastDayOfMonth(convertGregorianCalendar(tempDate));
		}
		return result;
	}

	/**
	 * 기준일의 년월을 더한 날짜의 말일자 구하기
	 * @param strDate
	 *            날짜형식 문자열.
	 * @return 마지막일
	 */
	public static Date GET_LAST_DAY(Date date, int year, int month){ 
		String strDate = GET_LAST_DAY_STR(toDateFormatString(date, datePattern.get("Normal")), year, month);
		return convertSqlDate(strDate);
	}
	
	
	/**
	 * 날짜에서 NSP에서 사용하는 분기일자 구하기
	 * @param baseDate
	 * @param kb 1: 시작일, 2:종료일
	 * @return 분기일자
	 */
	public static String GET_NSP_QUATER_DATE(String baseDate, String kb) {
		String r_date = "";
		int quar = getQuater(baseDate);
		quar = quar - 1;
		if (quar == 0) {
			quar = 4;
		}
		String year = baseDate.substring(0, 4);
		String sDate = "";
		String eDate = "";
		if (quar == 1) {
			sDate = year + "0401";
			eDate = year + "06" + getLastDayOfMonth(year + "0601");
		}
		if (quar == 2) {
			sDate = year + "0701";
			eDate = year + "09" + getLastDayOfMonth(year + "0901");
		}
		if (quar == 3) {
			sDate = year + "1001";
			eDate = year + "12" + getLastDayOfMonth(year + "1201");
		}
		if (quar == 4) {
			sDate = year + "0101";
			eDate = year + "03" + getLastDayOfMonth(year + "0301");
		}
		if (kb.equals("1")) {
			r_date = sDate;
		} else if (kb.equals("2")) {
			r_date = eDate;
		}
		return r_date;
	}

	/**
     * 입력일자의 분기를 구한다.
     *
     * @param baseDate yyyMMdd 형식의 문자열, 구분자가 있어도 상관없음.
     * @return 입력일자의 분기(int)
     */
    public static int getQuater(String baseDate) {
        String[] parseBaseDate = parseDate(baseDate);
        if (parseBaseDate == null)
            return -1;

        int month = Integer.parseInt(parseBaseDate[1]);
        return (month - 1) / 3 + 1;
    }
    
    private static String[] parseDate(String strDate) {
        if (strDate == null) {
            return null;
        }
        
        strDate = strDate.replaceAll("^\\D+$", "");

        if (strDate.length() >= 10) {
            return new String[] { strDate.substring(0, 4), strDate.substring(4, 6), strDate.substring(6, 8), strDate.substring(8, 10) };
        } else if (strDate.length() >= 8) {
            return new String[] { strDate.substring(0, 4), strDate.substring(4, 6), strDate.substring(6, 8), "00" };
        } else if (strDate.length() >= 6) {
            return new String[] { strDate.substring(0, 4), strDate.substring(4, 6), "00", "00" };
        } else if (strDate.length() >= 4) {
            return new String[] { strDate.substring(0, 4), "00", "00", "00" };
        }
        return null;
    }

	
	
				//	
				//	/**
				//	 * 일수 더해진 영업일 구하기
				//	 * @param date
				//	 * @param days
				//	 * @return 영업일
				//	 */
				//	public Date CAL_WORK_DAY_AFTER_DAYS(Date date, int days) {
				//		String dateStr = toDateFormatString(date, "Dash");
				//		return convertSqlDate(calWorkDay(dateStr, days, true, true));
				//	}
				//
				//	/**
				//	 * 월수 더해진 영업일 구하기
				//	 * @param date
				//	 * @param month
				//	 * @return 영업일
				//	 */
				//	public Date CAL_WORK_DAY_AFTER_MONTHS(Date date, int month) {
				//		GregorianCalendar dateCal = convertGregorianCalendar(date);
				//		Date dateAfterMonth = calAfterDate(dateCal, 0, month, 0, 0, 0, 0);
				//		String dateAfterMonthStr = toDateFormatString(dateAfterMonth, "Dash");
				//		return convertSqlDate(calWorkDay(dateAfterMonthStr, 1, true, true));
				//	}
				//
				//	/**
				//	 * dayInterval 만큼의 전/후 영업일을 구한다.
				//	 * @param date yyyyMMdd(yyy-MM-dd) 형식의 일자 String
				//	 * @param dayInterval 음수 : 전영업일, 양수 : 후영업일, 0제외
				//	 * @param isIncludedStDay 시작일 옵션
				//	 *        true  : 기준일이 영업일이면 기준일부터, 휴일이면 익영업일부터
				//	 *        false : 기준일의 익영업일부터  
				//	 * @param isIncludedEdDay 종료일 옵션
				//	 *        true  : dayInterval 만큼의 전/후 영업일을 종료일로 
				//	 *        false : dayInterval 만큼의 전/후 영업일 그다음 전/후 영업일을 종료일로
				//	 * @return yyyyMMdd 형식의 일자 String
				//	 * </pre>
				//	 */
				//	public static String calWorkDay(String date, int dayInterval,
				//			boolean isIncludedStDay, boolean isIncludedEdDay) {
				//		
				//		String[] tmp = selectWorkDays(getDateString2(date), dayInterval,
				//				isIncludedStDay, isIncludedEdDay);
				//		if (tmp == null || tmp.length == 0) {
				//			return date;
				//		} else {
				//			if (dayInterval > 0) {
				//				return tmp[tmp.length - 1];
				//			} else {
				//				return tmp[0];
				//			}
				//		}
				//	}
	//-------------------------------------------------------------------------------
	

	/**
	 * 문자의 아스키값 구하기
	 * @param ch
	 * @return 아스키값
	 */
	public static int GET_ASCII(String ch) {
		return (int) ch.charAt(0);
	}
	
	/**
	 * int 형을 BigDecimal 형으로 변환
	 * @param intVal
	 * @return BigDecimal 형
	 */
	public static BigDecimal CONVER_BIGDECIMAL(int intVal) {
		BigDecimal bigDecimalVal = new BigDecimal(intVal);
		return bigDecimalVal;
	}
	
	/**
	 * BigDecimal 형을 long 형으로 변환
	 * @param bigDecimalVal
	 * @return long 형
	 */
	public static long CONVER_BIGDECIMAL_TO_LONG(BigDecimal bigDecimalVal) {
		long longVal;
		if (bigDecimalVal == null) {
			longVal = 0;
		}
		longVal = bigDecimalVal.longValue();
		return longVal;
	}
	
	/**
	 * BigDecimal 형을 int 형으로 변환
	 * @param bigDecimalVal
	 * @return int 형
	 */
	public static int CONVER_BIGDECIMAL_TO_INT(BigDecimal bigDecimalVal) {
		int intVal;
		if (bigDecimalVal == null) {
			intVal = 0;
		}
		intVal = bigDecimalVal.intValue();
		return intVal;
	}
	
	/**
	 * 위 함수의 결과값에서 해당 인덱스의 list를 리턴한다.
	 * @args list 전체결과를 담은 리스트
	 * @args idx 전체결과에서 원하는 컬럼의 순서(0~n-1)
	 */
	public static List GET_LIST(List list, int idx) {
		List result = null;
		result = (List)list.get(idx);
		return result;
	}

	/**
	 * 리스트의 복사를 제공한다. 최대 10000개까지만 된다. 무한루프 방지를 위해 들어갔다.
	 * @param list : 복사될 리스트 : 값이 String 이던 int 던 bigdecimal 이던, date 이던 상관없다.
	 * @return : List 복사된 하나의 리스트가 봔환된다.
	 */
	public static List COPY_LIST(List list) {
		ArrayList arrayList = (ArrayList) list;
		ArrayList resultArrayList = new ArrayList();
		for (int i = 0; i < arrayList.size(); i++) {
			resultArrayList.add(arrayList.get(i));
			if (i > 10000) { // 최대 10000개의 리스트에 대해서만 가능하다.
				break; // 무한루프 방지
			}
		}
		return resultArrayList;
	}

	/**
	 * log 계산하는 함수
	 * @args value
	 */
	public static BigDecimal CAL_LOG(BigDecimal value) {
		return new BigDecimal(Math.log(value.doubleValue()));
	}
	
	/**
	 * 문자열에서 특정 문자열을 찾아서 다른 문자열로 대체하기.
	 * @param str
	 * @param str1
	 * @param str2
	 * @return 대체된 문자열
	 */
	public static String REPLACE_CHAR(String str, String str1, String str2) {
		str = str.replaceAll(str1, str2);
		return str;
	}
	
	public static List SPLIT_STRING(String str1, String splitStr) {
		ArrayList arrayList = new ArrayList();
		StringTokenizer stringTokenizer = new StringTokenizer(str1, splitStr);
		while (stringTokenizer.hasMoreTokens()) {
			arrayList.add(stringTokenizer.nextToken());
		}
		return arrayList;
	}
	
	/*
	 * 리스트별 합산을 제공한다.
	 * @param lst1 : 합산 되어야 할 key field
	 * @param lst2 : 합산 되어야 할 값
	 * @return : sorting 되어서 제공된다.
	 */

	public List GROUP_BY_SUM_LIST(List lst1, List lst2) {
		// arraylist 에 담는다.
		ArrayList keyArrayList = (ArrayList) lst1;
		ArrayList valArrayList = (ArrayList) lst2;
		ArrayList keySumArrayList = new ArrayList();
		ArrayList valSumArrayList = new ArrayList();
		int lcnt = 0;
		// ArrayList removeArray = new ArrayList();
		int ctemp = 0;
		for (int i = 0; i < keyArrayList.size(); i++) {
			String source = (String) keyArrayList.get(i);
			if (i == 0) {
				keySumArrayList.add((String) keyArrayList.get(i));
				valSumArrayList.add((String) valArrayList.get(i));
			} else {
				for (int j = 0; j < keySumArrayList.size(); j++) {
					String target = (String) keySumArrayList.get(j);
					if (source.equals(target)) {
						ctemp = 0; // 찾은 경우
//						System.out.println("i ==>" + i + " j ==>" + j
//								+ " source ==> " + source + " target ==>"
//								+ target);
						long dtemp1 = Long.parseLong((String) valSumArrayList.get(j));
						long dtemp2 = Long.parseLong((String) valArrayList.get(i));
						long cp = dtemp1 + dtemp2;
						valSumArrayList.set(j, "" + cp);
						// 찾은경우는 현재 자기자신의 값에다가 plus 를 해준다.
						// sum.set(j,
						break;
					} else {
						ctemp = 1; // 못찾은경우
					}
				}
				if (ctemp == 1) {
					keySumArrayList.add((String) keyArrayList.get(i));
					valSumArrayList.add((String) valArrayList.get(i));
					ctemp = 0; // 초기화
				}
				if (i > 10000) { // 최대 10000개의 리스트에 대해서만 가능하다.
					break; // 무한루프 방지
				}
			}
		}
		return valSumArrayList;
	}
	
    /**
     * 주민등록번호의 CheckSum이 맞는지 체크함.
     * 
     * @param strSsNo 주민등록번호 13자리, 구분자가 있어도 상관없음.
     * @return 주민등록번호 13자리의 CheckSum이 유효하면 true
     */
    public static boolean IS_VALID_RESIDENT_NUM(String strSsNo) {
        if (strSsNo == null) {
            return false;
        }
        //숫자 외의 문자를 제거한다.
        strSsNo = strSsNo.replaceAll("\\D", "");

        if (strSsNo.length() < 13) {
            return false;
        }

        char gen = strSsNo.charAt(6);
        if (!(gen == '1' || gen == '2' || gen == '3' || gen == '4')) {
            return false;
        }
        int year100 = 19; //100단위 생년
        if (gen == '3' || gen == '4') {
            year100 = 20;
        }
        String birth = year100 + strSsNo.substring(0, 6);
        if (!IS_VALID_DATE(birth)) {
            return false;
        }
        if (Integer.parseInt(birth) < 20201001) {
            int[] arr = toIntArray(strSsNo);
            int check_digit = arr[0] * 2 + arr[1] * 3 + arr[2] * 4 + arr[3] * 5 + arr[4] * 6 + arr[5] * 7 + arr[6] * 8 + arr[7] * 9 + arr[8] * 2 + arr[9]
                    * 3 + arr[10] * 4 + arr[11] * 5;
            int temp = (11 - check_digit % 11) % 10;
            if (temp != arr[12]) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    
    /**
     * 숫자로 구성된 문자열을 int형 배열로 변환함.
     * @param strNum 숫자로 구성된 문자열 
     * @return int형 배열
     */
    public static int[] toIntArray(String strNum) {
        if (strNum == null) {
        	return null;
        }
        int[] arr = new int[strNum.length()];
        for( int i=0; i<strNum.length(); i++ ) {
            arr[i] = Character.digit(strNum.charAt(i), 10);
        }
        return arr;
    }
    
	/**
	 * 리스트의 리스트값을 리턴한다. 리스트안의 값이 어떤 타입이든 상관없다.
	 */
	public static ArrayList GET_LIST_IN_LIST(List ars, int idx) {
		ArrayList returnArray = new ArrayList();
		try {
			ArrayList ar = (ArrayList) ars;
			String temp = ars.get(idx).toString();
			temp = temp.substring(1, temp.length() - 1);
			StringTokenizer st = null;
			st = new StringTokenizer(temp, ",");
			while (st.hasMoreTokens()) {
				String listin = st.nextToken();
				returnArray.add(listin.trim());
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return returnArray;
	}
	
	/**
	 * 중복값 제거 들어온값대로 중복이 제거된다.
	 * @param lst : 제거될 중복값 목록
	 * @return : 중복이 제거가 된 값
	 */
	public static List REMOVE_DUPLICATE(List lst) {
		ArrayList ar = (ArrayList) lst;
		ArrayList ar2 = new ArrayList();
		int ctemp = 0;
		for (int i = 0; i < ar.size(); i++) {
			String source = (String) ar.get(i);
			if (i == 0) {
				ar2.add(source);
			}
			for (int j = 0; j < ar2.size(); j++) {
				String target = (String) ar2.get(j);
				if (source.equals(target)) {
					ctemp = 0; // 찾은 경우
					break;
				} else {
					ctemp = 1; // 못찾은경우
				}
			}
			if (ctemp == 1) {
				ar2.add(source);
				ctemp = 0; // 초기화
			}
			if (i > 10000) { // 최대 10000개의 리스트에 대해서만 가능하다.
				break; // 무한루프 방지
			}
		}
		return ar2;
	}
	
	/**
	 * 두 숫자에서 작은 값을 리턴
	 * @param val1
	 * @param val2
	 * @return 작은 값
	 */
	public static BigDecimal CAL_MIN(BigDecimal val1, BigDecimal val2) {
		BigDecimal result = new BigDecimal(0);
		if (val1.compareTo(val2) > 0) {
			result = val2;
		} else {
			result = val1;
		}
		return result;
	}
	
	/**
	 * 제곱 구하기
	 * @param val1
	 * @param val2
	 * @return 제곱값
	 */
	public static BigDecimal CAL_POW(BigDecimal val1, BigDecimal val2) {
		return new BigDecimal(Math.pow(val1.doubleValue(), val2.doubleValue()));
	}

	/**
	 * BigDecimal 형을 문자열로 변환
	 * @param val
	 * @return 문자열
	 */
	public static String TO_STRING(BigDecimal val) {
		return val.toString();
	}

	/**
	 * 문자열을 BigDecimal 형으로 변환
	 * @param strNum
	 * @return BigDecimal 형
	 */
	public static BigDecimal TO_BIGDECIMAL(String strNum) {
		return new BigDecimal(strNum);
	}

	/**
     * 숫자를 3자리마다 콤마(,)를 찍어서 화폐 패턴의 문자열로 변환함. 소수가 있는 경우 반올림되어 처리됨.
     * 사용 예)
     * (54321) => "54,321"
     * (54321.6) => "54,322"
     * (-54321) => "-54,321"
     * @param d 모든 타입의 숫자
     * @return ###,### 형태의 문자열
     */
    public static String CONVERT_MONEY_PATTERN(double d) {
        return convertMoneyPattern(d, 0);
    }
    
	/**
	 * 금액을 일정부분 절삭하고 콤마구분자로 표현하기
	 * @param amt
	 * @param position
	 * @return 콤마구분된 금액
	 */
	public static String CONVERT_MONEY_PATTERN(long amt, int position) {
		// position만큼 절삭
		String sAmt = String.valueOf(amt);
		if (sAmt.length() > position){
			sAmt = sAmt.substring(0, sAmt.length() - 4);
		} else {
			sAmt = "0";
		}
		return convertMoneyPattern(sAmt);
	}
    
	/**
	 * BigDecimal 형을 콤마구분하기
	 * @param strNum
	 * @return 콤마구분된 문자열
	 */
	public static String CONVERT_MONEY_PATTERN(BigDecimal strNum) {
		return convertMoneyPattern(strNum.toString());
	}

    /**
     * 숫자를 3자리마다 콤마(,)를 찍어서 화폐 패턴의 문자열로 변환함. 지정된 소숫점 자리에서 반올림되어 처리됨.
     * 사용 예)
     * (54321, 0) => "54,321"
     * (54321.6, 2) => "54,321.60"
     * (-54321, 1) => "-54,321.0"
     * @param d 모든 타입의 숫자
     * @param scale 소수점 자리수 지정. 음수는 0으로 처리됨.
     * @return ###,### 형태의 문자열
     */
    public static String convertMoneyPattern(double d, int scale) {
        StringBuffer pattern = new StringBuffer("#,##0");
        if(scale > 0) { //소수점 이하까지 출력하는 경우
            pattern.append('.');
            for (int i = 0; i < scale; i++) {
                pattern.append('0');
            }
        }
        DecimalFormat moneyFormatter = new DecimalFormat(pattern.toString());
        return moneyFormatter.format(d);
    }

    /**
     * 숫자를 3자리마다 콤마(,)를 찍어서 화폐 패턴의 문자열로 변환함. 문자열에 소수가 있는 경우 소수가 "0"이라도 그대로 유지됨.
     * 사용 예)
     * ("54321") => "54,321"
     * ("54321.6") => "54,321.6"
     * ("-54321") => "-54,321"
     * @param strNum 모든 타입의 숫자형 문자열
     * @return ###,### 형태의 문자열
     */
    public static String convertMoneyPattern(String strNum) {
        if (strNum == null) {
            return null;
        }
        String[] parts = parseNumberString(strNum);
        double d = 0;
        if ("".equals(parts[2])) {
            d = Double.parseDouble(parts[0] + parts[1]);
            return convertMoneyPattern(d, 0);
        } else {
            //정수부에서 구분자 있는 경우 제거
            String parts1 = parts[1].replaceAll("\\D", "");
            d = Double.parseDouble(parts[0] + parts1 + "." + parts[2]);
            int scale = parts[2].length();
            return convertMoneyPattern(d, scale);
        }
    }
    
    private static String[] parseNumberString(String strNum) {
        if (strNum == null) {
            return null;
        }

        //좌우 공백 제거
        strNum = strNum.trim();
        String[] parts = new String[3];
        parts[0] = "";
        if (strNum.startsWith("-")) {
            parts[0] = "-";
            strNum = strNum.substring(1);
        }

        int dot = strNum.indexOf('.');

        if (dot > -1) {
            parts[1] = strNum.substring(0, dot);
            parts[2] = strNum.substring(dot + 1);
        } else {
            parts[1] = strNum;
            parts[2] = "";
        }
        return parts;
    }
    
	/**
	 * 문자열에서 특정문자열이 포함된 위치 구하기
	 * @param str
	 * @param find
	 * @return 특정문자열 위치
	 */
	public int FIND_CHAR(String str, String find) {
		return str.indexOf(find);
	}
    
    public static void main(String[] args) {
		try {
			//룰유틸.윤달판단 - countLeapMonths - CAL_LEAP_MONTS
			System.out.println("윤달수\t\t- 예상: 1, 실제값:"
					+ CAL_LEAP_MONTS(convertSqlDate("19960301"),
							convertSqlDate("20000301")));
			
			System.out.println("윤달수\t\t- 예상: 1, 실제값:"
					+ CAL_LEAP_MONTS(convertSqlDate("19960301"),
							convertSqlDate("20000229")));
			
			System.out.println("윤달수\t\t- 예상: 1, 실제값:"
					+ CAL_LEAP_MONTS(convertSqlDate("20000201"),
							convertSqlDate("20000229")));
			
			System.out.println("윤달수\t\t- 예상: 1, 실제값:"
					+ CAL_LEAP_MONTS(convertSqlDate("20000229"),
							convertSqlDate("20000229")));
			
			System.out.println("윤달수\t\t- 예상: 1, 실제값:"
					+ CAL_LEAP_MONTS(convertSqlDate("20000229"),
							convertSqlDate("20000301")));
			System.out.println("");

			//룰유틸.이후날짜 - getAfterDate - GET_AFTER_DATE
			System.out.println("한달후날짜\t\t- 예상: 2005-03-15, 실제값:"
					+ GET_AFTER_DATE("20050215", 0, 1, 0));

			System.out.println("한달전날짜\t\t- 예상: 2005-01-15, 실제값:"
					+ GET_AFTER_DATE("20050215", 0, -1, 0));
			System.out.println("");
			
			
			//룰유틸.이후날짜DateFormat - getAfterDateFormat - GET_AFTER_DATE_FORMAT
			System.out.println("이후날짜\t\t- 예상: 2005-01-15, 실제값:"
					+ GET_AFTER_DATE_FORMAT(convertSqlDate("20050215"), 0, -1, 0));
			System.out.println("이후날짜\t\t- 예상: 2004-12-31, 실제값:"
					+ GET_AFTER_DATE_FORMAT(convertSqlDate("20050101"), 0, 0, -1));
			System.out.println("");
			
			// 룰유틸.Ascii변환 - getAscii - GET_ASCII
			System.out.println("Ascii\t\t- 예상: 97, 실제값:" + GET_ASCII("a"));
			System.out.println("");
			
			//룰유틸.정수BigDecimal변환 - getBigDecimal - CONVER_BIGDECIMAL
			System.out.println("BigDecimal\t\t- 예상: 97, 실제값:" + CONVER_BIGDECIMAL(97));
			System.out.println("");
			
			//룰유틸.BigDecimal정수변환 - getBigDeciMaltoInt - CONVER_BIGDECIMAL_TO_INT
			System.out.println("BigDecimal\t\t- 예상: 976, 실제값:" + CONVER_BIGDECIMAL_TO_INT(new BigDecimal(976.90000006)));
			System.out.println("");
			
			//룰유틸.BigDecimalLong형변환 - getBigDeciMaltoLong - CONVER_BIGDECIMAL_TO_LONG
			System.out.println("BigDecimalLong\t\t- 예상: 976, 실제값:" + CONVER_BIGDECIMAL_TO_LONG(new BigDecimal(976.96)));
			System.out.println("");
						
			//룰유틸.익월계산 - getDateAfterOneMonth - GET_AFTER_MONTHS
			System.out.println("익월계산\t\t- 예상: 20230905, 실제값:" + GET_AFTER_MONTHS("20220605", 15));
			System.out.println("익월계산\t\t- 예상: 20210205, 실제값:" + GET_AFTER_MONTHS("20220605", -16));
			System.out.println("");
						
			//룰유틸.전월계산 - getDateBeforeOneMonth - GET_BEFORE_ONE_MONTH
			System.out.println("전월\t\t- 예상: 202304, 실제값:" + GET_BEFORE_ONE_MONTH("20230501"));
			System.out.println("전월\t\t- 예상: 202212, 실제값:" + GET_BEFORE_ONE_MONTH("20230101"));
			System.out.println("");
			
			//룰유틸.날짜변환툴String - getDateString - GET_DATE_STR
			//룰유틸.날짜변환툴Date - getDateString - GET_DATE_STR
			System.out.println("날짜변환툴\t\t- 예상: 20230501, 실제값:" + GET_DATE_STR("20230501"));
			System.out.println("날짜변환툴\t\t- 예상: 20230501, 실제값:" + GET_DATE_STR(convertSqlDate("20230501")));
			System.out.println("");
			
			//룰유틸.일가져오기 - getDay - GET_DAY
			System.out.println("일가져오기\t\t- 예상: 23, 실제값:" + GET_DAY("20230523"));
			System.out.println("일가져오기\t\t- 예상: 12, 실제값:" + GET_DAY("19900412"));
			System.out.println("");			
			
			// 룰유틸.일수계산 - getDaysDiff - GET_DAYS_BETWEEN
			System.out.println("일차이\t\t- 예상: 31, 실제값:"
					+ GET_DAYS_BETWEEN("20060630", "20060731"));
			System.out.println("");			

			//룰유틸.일수계산2 - getDaysDiff2 - GET_DAYS_BETWEEN_ROUND_UP
			System.out.println("일차이(+1)\t\t- 예상: 32, 실제값:"
					+ GET_DAYS_BETWEEN_ROUND_UP("20060501", "20060602"));
			System.out.println("");			

			//룰유틸.일자차이 - getDifference - GET_DATE_BETWEEN
			System.out.println("년월일차이\t\t- 예상: 000224, 실제값:"
			+ GET_DATE_BETWEEN("20060115", "20060408"));
			System.out.println("");			
			
			//룰유틸.보험나이계산 - getInsuAge - CAL_INSURANCE_AGE 
			System.out.println("보험연령\t\t- 예상: 32, 실제값:"
			+ CAL_INSURANCE_AGE("19740413", "20060421"));
			System.out.println("보험연령\t\t- 예상: 33, 실제값:"
					+ CAL_INSURANCE_AGE("19900412", "20230810"));
			System.out.println("");			
			
			//룰유틸2.말일자_문자열 - getLastDay - GET_LAST_DAY_STR
			System.out.println("말일자_문자열\t- 예상: 20440131, 실제값:"
					+ GET_LAST_DAY_STR("20210906", 22, 4));
			System.out.println("");		
			
			// 룰유틸2.말일자_날짜 - getLastDay2 - GET_LAST_DAY
			System.out.println("말일자_날짜\t- 예상: 2044-02-29, 실제값:"
					+ GET_LAST_DAY(convertSqlDate("20210906"), 22, 5));
			System.out.println("");		
			
			//룰유틸.말일계산 - getLastDayOfMonth - GET_LAST_DAY_OF_MONTH
			System.out.println("말일\t\t- 예상: 29, 실제값:"
			+ GET_LAST_DAY_OF_MONTH(("2000/02")));
			System.out.println("");	
			
			//룰유틸.장기테이블분해 - getList - GET_LIST 
			List listA = new ArrayList();
			listA.add(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
			listA.add(SPLIT_STRING("5@4@6", "@"));
			listA.add(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
			System.out.println("***장기테이블분해\t\t- 예상: [5,4,6], 실제값:"
					+ GET_LIST(listA, 1));
			System.out.println("");	
			
			//룰유틸_스태틱.리스트복사 - getListCopy - COPY_LIST
			System.out.println("리스트복사\t\t- 예상: [TEST, TEST, TEST13131!!$, ^%], 실제값:"
					+ COPY_LIST(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@")));
			System.out.println("");	
			
			//룰유틸.Ln - getLn - CAL_LOG
			System.out.println("로그 \t\t- 예상: 1.0986122886681097821082175869378261268138885498046875, 실제값:"
					+ CAL_LOG(new BigDecimal(3)));
			System.out.println("");						
			
			//룰유틸.납만기기간계산 - getMaturity2 - GET_MATURITY_YEARS
			System.out.println("납만기기간계산\t\t- 예상: (세만기) 28, 실제값:" 
					+ GET_MATURITY_YEARS(32, "01", 60));
			System.out.println("");	
			
			//룰유틸.납만기개월수계산 - getMaturity3 - GET_MATURITY_MONTH
			System.out.println("납만기기간계산\t\t- 예상: (세만기) 28, 실제값:" 
					+ GET_MATURITY_MONTHS(32, "01", 60));
			System.out.println("");			
			
			//룰유틸.월가져오기 - getMonth - GET_MONTH 
			System.out.println("월가져오기\t\t- 예상: 1, 실제값:" 
					+ GET_MONTH("20230101"));
			System.out.println("월가져오기\t\t- 예상: 11, 실제값:" 
					+ GET_MONTH("20231121"));
			System.out.println("");		
			
			// 룰유틸.달수계산 - getMonthsDiff - GET_MONTHS_BETWEEN
			System.out.println("월차이\t\t- 예상: 0, 실제값:"
					+ GET_MONTHS_BETWEEN("20060131", "20060228"));
			System.out.println("월차이\t\t- 예상: 24, 실제값:"
					+ GET_MONTHS_BETWEEN("20040131", "20060228"));
			System.out.println("월차이\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN("20060120", "20060223"));
			System.out.println("");		
			
			// 룰유틸.달수계산2 - getMonthsDiff2 - GET_MONTHS_BETWEEN_ROUND_UP
			System.out.println("월차이(+1)\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN_ROUND_UP("20060502", "20060602"));
			System.out.println("월차이(+1)\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN_ROUND_UP("20060503", "20060602"));
			System.out.println("월차이(+1)\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN_ROUND_UP("20060531", "20060630"));
			System.out.println("월차이(+1)\t\t- 예상: 2, 실제값:"
					+ GET_MONTHS_BETWEEN_ROUND_UP("20060531", "20060701"));
			System.out.println("");		
			
			//룰유틸.달수계산3 - getMonthsDiff3 - GET_MONTHS_BETWEEN_3
			System.out.println("월차이(말일비교)\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN_3("20060131", "20060228"));
			System.out.println("월차이(말일비교)\t\t- 예상: 1, 실제값:"
					+ GET_MONTHS_BETWEEN_3("20060121", "20060303"));
			System.out.println("");	
			
			//룰유틸.등급보장기간계산 - getNSPQuaterDate - GET_NSP_QUATER_DATE 
			System.out.println("nsp fy 분기날짜\t\t- 예상: 20060401, 실제값:"
					+ GET_NSP_QUATER_DATE("20060402", "1"));
			System.out.println("nsp fy 분기날짜\t\t- 예상: 20060630, 실제값:"
					+ GET_NSP_QUATER_DATE("20060402", "2"));
			System.out.println("");	

			//룰유틸.만나이계산 - getRealAge - CAL_REAL_AGE
			System.out.println("만나이계산\t\t- 예상: 1, 실제값:"
					+ CAL_REAL_AGE("20210906"));
			System.out.println("만나이계산\t\t- 예상: 39, 실제값:"
					+ CAL_REAL_AGE("19831115"));
			System.out.println("");	
			
			//룰유틸.문자열치환 - getReplaceStr - REPLACE_CHAR
			System.out.println("문자열치환\t\t- 예상: TEST**TEST**TEST13131!!$*^%*, 실제값:"
					+ REPLACE_CHAR("TEST@@TEST@@TEST13131!!$@^%@", "@", "*"));
			System.out.println("");				
			
			//룰유틸.구분자분할 - getRuleSplit - SPLIT_STRING
			System.out.println("구분자분할\t\t- 예상: [TEST, TEST, TEST13131!!$, ^%], 실제값:"
					+ SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
			System.out.println("");		
			
			//룰유틸.일수기간계산 - getTrmDays - GET_TRM_DAYS
			System.out.println("일수기간계산\t\t- 예상: 24, 실제값:"
					+ GET_TRM_DAYS("20220503", "20230327"));
			System.out.println("");		
			
			//룰유틸.달수기간계산 - getTrmMonths - GET_TRM_MONTHS
			System.out.println("달수기간계산\t\t- 예상: 2, 실제값:"
					+ GET_TRM_MONTHS("20220503", "20230327"));
			System.out.println("달수기간계산\t\t- 예상: 3, 실제값:"
					+ GET_TRM_MONTHS("20221103", "20230302"));
			System.out.println("");		
			
			//룰유틸.년수기간계산 - getTrmYears - GET_TRM_YEARS
			System.out.println("년수기간계산\t\t- 예상: 1, 실제값:"
					+ GET_TRM_YEARS("20220503", "20230327"));
			System.out.println("년수기간계산\t\t- 예상: 0, 실제값:"
					+ GET_TRM_YEARS("20230503", "20230327"));
			System.out.println("");		
			
			//룰유틸.년가져오기 - getYear - GET_YEAR
			System.out.println("년가져오기\t\t- 예상: 2023, 실제값:"
					+ GET_YEAR("20230503"));
			System.out.println("년가져오기\t\t- 예상: 1986, 실제값:"
					+ GET_YEAR("19860503"));
			System.out.println("");	
			
			//룰유틸.년수계산 - getYearsDiff - GET_YEARS_BETWEEN
			System.out.println("년차이\t\t- 예상: 1, 실제값:"
					+ GET_YEARS_BETWEEN("20040229", "20060228"));
			System.out.println("년차이\t\t- 예상: 1, 실제값:"
					+ GET_YEARS_BETWEEN("20050630", "20060731"));
			System.out.println("");		
			
			//룰유틸.년수계산2 - getYearsDiff2 - GET_YEARS_BETWEEN_ROUND_UP		
			System.out.println("년차이(+1)\t\t- 예상: 2, 실제값:"
					+ GET_YEARS_BETWEEN_ROUND_UP("20060503", "20070602"));
			System.out.println("년차이(+1)\t\t- 예상: 1, 실제값:"
					+ GET_YEARS_BETWEEN_ROUND_UP("20060703", "20070602"));
			System.out.println("년차이(+1)\t\t- 예상: -2, 실제값:"
					+ GET_YEARS_BETWEEN_ROUND_UP("20060602", "20050503"));
			System.out.println("년차이(+1)\t\t- 예상: -1, 실제값:"
					+ GET_YEARS_BETWEEN_ROUND_UP("20060402", "20050503"));	
			System.out.println("");				
			
			// 룰유틸.년수계산3 - getYearsDiff3 - GET_YEARS_BETWEEN3
			System.out.println("년차이(말일비교)\t\t- 예상: 2, 실제값:"
					+ GET_YEARS_BETWEEN3("20040229", "20060228"));
			System.out.println("");			
			
			
			//TODO 
//			List listB = new ArrayList();
//			List listC = new ArrayList();
//			listB.add(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
//			listB.add(SPLIT_STRING("5@4@6", "@"));
//			listC.add(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
//			
//			//룰유틸.중복값합산 - groupBysum - GROUP_BY_SUM_LIST
//			System.out.println("중복값합산\t\t- 예상: 2, 실제값:"
//					+ GROUP_BY_SUM_LIST(listB,listC));
//			System.out.println("");						
			
			//룰유틸.날짜유효성체크 - isValidDate - IS_VALID_DATE
			System.out.println("유효날짜\t\t- 예상: true, 실제값:"
					+ IS_VALID_DATE("20040229"));
			System.out.println("유효날짜\t\t- 예상: false, 실제값: "
					+ IS_VALID_DATE("2006/05/32"));
			System.out.println("유효날짜\t\t- 예상: false, 실제값: "
					+ IS_VALID_DATE("2006/02/29"));
			System.out.println("");		
			
			//룰유틸.주민등록번호유효성체크 - isValidResno - IS_VALID_RESIDENT_NUM
			System.out.println("주민등록번호유효성체크\t\t- 예상: false, 실제값: "
					+ IS_VALID_RESIDENT_NUM("82010622222222"));
			System.out.println("주민등록번호유효성체크\t\t- 예상: true, 실제값: "
					+ IS_VALID_RESIDENT_NUM("760926-4444444"));
			System.out.println("주민등록번호유효성체크\t\t- 예상: true, 실제값: "
					+ IS_VALID_RESIDENT_NUM("2203024444444"));
			System.out.println("");		
			
			//룰유틸.리스트분해 - ListReturn - GET_LIST_IN_LIST
			List listB = new ArrayList();
			listB.add(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@"));
			listB.add(SPLIT_STRING("5@4@6", "@"));
			listB.add(SPLIT_STRING("5@4@6", "@"));
			listB.add(SPLIT_STRING("2@3@8888", "@"));
			System.out.println("**** 리스트분해\t\t- 예상: [2, 3, 8888], 실제값: "
					+ GET_LIST_IN_LIST(listB, 3));
			System.out.println("");	

			//룰유틸.문자열변환 - lpad - lZeroPad
			System.out.println("문자열변환\t\t- 예상: 002, 실제값: "
					+ lZeroPad(2, 3));
			System.out.println("");	
			
			//룰유틸.최소값계산 - Min - CAL_MIN
			System.out.println("최소값계산\t\t- 예상: 232, 실제값: "
					+ CAL_MIN(new BigDecimal(232), new BigDecimal(387)));
			System.out.println("");		
			
			//룰유틸.거듭제곱 - pow - CAL_POW
			System.out.println("거듭제곱\t\t- 예상: 8, 실제값: "
					+ CAL_POW(new BigDecimal(2), new BigDecimal(3)));
			System.out.println("");					
			
			//룰유틸.리스트중복제거 - RemoveDupl - REMOVE_DUPLICATE
			System.out.println("리스트중복제거\t\t- 예상: [TEST, TEST13131!!$, ^%] 실제값: "
					+ REMOVE_DUPLICATE(SPLIT_STRING("TEST@@TEST@@TEST13131!!$@^%@", "@")));
			System.out.println("");		
			
			//룰유틸.문자열BigDecimal변환 - toBigDecimal - TO_BIGDECIMAL
			System.out.println("문자열BigDecimal변환\t- 예상: 0.2565 실제값: "
					+ TO_BIGDECIMAL("0.2565"));
			System.out.println("String -> BigDecimal\t\t- 예상: 334.33, 실제값:"
					+ TO_BIGDECIMAL("334.33"));
			System.out.println("");		
			
			//룰유틸.금액단위표시 - toMoneyPattern - CONVERT_MONEY_PATTERN
			System.out.println("콤마찍기\t\t- 예상: 123,445, 실제값:"
					+ CONVERT_MONEY_PATTERN(new BigDecimal(123445)));
			System.out.println("콤마찍기\t\t- 예상: 54,322, 실제값:"
					+ CONVERT_MONEY_PATTERN(54321.6));
			System.out.println("만원절삭화폐형식\t\t- 예상: 2,000만원, 실제값:"
					+ CONVERT_MONEY_PATTERN(20000000, 4) + "만원");
			System.out.println("만원절삭화폐형식\t\t- 예상: 200만원, 실제값:"
					+ CONVERT_MONEY_PATTERN(2000000, 4) + "만원");
			System.out.println("만원절삭화폐형식\t\t- 예상: 0만원, 실제값:"
					+ CONVERT_MONEY_PATTERN(2000, 4) + "만원");
			System.out.println("");		
			
			//룰유틸.BigDecimal문자열변환 - toString - TO_STRING
			System.out.println("BigDecimal문자열변환\t\t- 예상: 268.236, 실제값:"
					+ TO_STRING(new BigDecimal(268.236)));		
			System.out.println("");		
			
			// 보험유틸.현재날짜조회 - getCurrentDate	- GET_CURRNET_DATE
			System.out.println("현재날짜조회\t\t- 예상: 2023-08-10, 실제값:"
					+ GET_CURRNET_DATE(0));		
			System.out.println("현재날짜조회\t\t- 예상: 20230810, 실제값:"
					+ GET_CURRNET_DATE(2));		
			System.out.println("");		
			

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
