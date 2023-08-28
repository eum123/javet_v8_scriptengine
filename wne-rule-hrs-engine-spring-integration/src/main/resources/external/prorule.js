
//##########################################
// ProRule 전환
//##########################################
function MAX_BETWEEN_TWO(n1, n2) {
    return Math.max(n1, n2);
}
function MIN_BETWEEN_TWO(n1, n2) {
    return Math.min(n1, n2);
}
function GET_NEW_DATE(date1) {
    CONTEXT.getLogger().debug("function GET_NEW_DATE() date1:{}", date1);

    if(!(date1 instanceof Date)) {

        var year;
        var month;
        var day;
        var hour = '00';
        var min = '00';
        var sec = '00';

        if(date1 && date1 != ''){
            if(date1.length < 8) {
                return '';
            }
            if(date1.indexOf('-') != -1) {
                var splitDT = date1.split(' ');
                var splitTime = splitDT[0].split('-');
                year = splitTime[0]
                month = splitTime[1]
                day = splitTime[2]

            } else {
                year = date1.substring(0,4)
                month = date1.substring(4,6)
                day = date1.substring(6,8)
            }
            if(date1.indexOf(':') != -1) {
                var splitDT = date1.split(' ');
                if(splitDT.length > 1) {
                    var splitT = splitDT[1].split(':');
                    hour = splitT[0]
                    min = splitT[1]
                    sec = splitT[2]
                }
            }
        }

        var dateValue1 = new Date(year, month, day, hour, min, sec);

        return dateValue1;
    }

    return date1;
}

function GET_DATE_STR_FORMAT(time) {
    var d = GET_NEW_DATE(time);
    if(d != ''){
        return d.getFullYear() + '-' + LPAD(d.getMonth(), '0') + '-' + LPAD(d.getDate(), '0') + ' ' + LPAD(d.getHours(),'0')
            + ':' + LPAD(d.getMinutes(),'0') + ':' + LPAD(d.getSeconds(),'0') + ' ' + d.getMilliseconds() ;
    }
    return '';
}

function CAL_DAYS_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }

    if(dateValue1 > dateValue2) {
        interval = dateValue1.getTime() - dateValue2.getTime();
    } else {
        interval = dateValue2.getTime() - dateValue1.getTime();
    }
    return Math.floor(interval / (1000*60*60*24));
}

function CAL_HOURS_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2 ;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1 > dateValue2) {
        interval = dateValue1.getTime() - dateValue2.getTime();
    } else {
        interval = dateValue2.getTime() - dateValue1.getTime();
    }
    return Math.floor(interval / (1000*60*60)) ;
}

function CAL_MINUTES_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1  >  dateValue2) {
        interval  =  dateValue1.getTime()  -  dateValue2.getTime();
    } else {
        interval  =  dateValue2.getTime()  -  dateValue1.getTime();
    }
    return  Math.floor(interval  /  (1000*60));
}

function RESULT(result) {
    return result;
}
//-----------------미 테스트

function CAL_SECOND_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1 > dateValue2) {
        interval = dateValue1.getTime() - dateValue2.getTime();
    } else {
        interval = dateValue2.getTime() - dateValue1.getTime();
    }
    return Math.floor(interval / (1000*60));
}

function CAL_MILLISECOND_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1 > dateValue2) {
        interval = dateValue1.getTime() - dateValue2.getTime();
    } else {
        interval = dateValue2.getTime() - dateValue1.getTime();
    }
    return Math.floor(interval / (1000));
}

function CAL_MONTHS_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1 > dateValue2) {
        interval = dateValue1.getMonth() - dateValue2.getMonth() +
            12 * ( dateValue1.getYear() -  dateValue2.getYear());
    } else {
        interval = dateValue2.getMonth() - dateValue1.getMonth() +
            12 * ( dateValue2.getYear() -  dateValue1.getYear());
    }
    return interval ;
}

function CAL_YEARS_BETWEEN(date1, date2) {
    var interval;
    var dateValue1 = date1;
    var dateValue2 = date2;
    if(!(date1 instanceof Date)) {
        dateValue1 = GET_NEW_DATE(date1);
    }
    if(!(date2 instanceof Date)) {
        dateValue2 = GET_NEW_DATE(date2);
    }
    if(dateValue1 > dateValue2) {
        interval = dateValue1.getYear() - dateValue2.getYear();
    } else {
        interval = dateValue2.getYear() - dateValue1.getYear();
    }
    return interval;
}

function CAL_ELAPSED_DAYS(time) {
    return Number(time) * 24 * 60 * 60 * 1000;
}

function CAL_ELAPSED_HOURS(time) {
    return Number(time) * 60 * 60 * 1000;
}

function CAL_ELAPSED_MINUTES(time) {
    return Number(time) * 60 * 1000;
}

function CAL_ELAPSED_SEC(time) {
    return Number(time) * 1000;
}

function CAL_ELAPSED_MILLISEC(time) {
    return Number(time);
}

function COVERT_DATE_FORMAT(dateTimeStr) {
    var yyyy = dateTimeStr.substring(0, 4);
    var mm = dateTimeStr.substring(5,7);
    var dd = dateTimeStr.substring(8,10);
    return yyyy+mm+dd;
}

function COVERT_DATE_TIME_FORMAT(dateStr) {
    var yyyy = dateStr.substring(0,4);
    var mm = dateStr.substring(4,6);
    var dd = dateStr.substring(6,8);
    return yyyy + '-' + mm + '-' + dd + ' 00:00:00';
}

function LEFT(value, length) {
    return String(value).substr(0, length);
}

function LEN(value) {
    return String(value).length;
}

function MID(value, index, length) {
    return String(value).substr((index-1), length);
}

function RIGHT(value, length) {
    return String(value).substr(((String(value)).length - length), length);
}

function TRIM(value) {
    return String(value).trim();
}

function ADD_ARRAY_ELEMENT(arrayA, element) {
      arrayA.push(element)
      return arrayA  
}

function CONCAT_ARRAY(arrayA, arrayB) {
    return arrayA.concat(arrayB);
}

function FIND_MAX_ELEMENT(arrayA) {
    var maxValue = arrayA[0]
    for(var i = 0; i < arrayA.length; i++) {
       maxValue = Math.max(Number(maxValue), Number(arrayA[i]));
    }
    return maxValue;
}

function FIND_MIN_ELEMENT(arrayA) {
    var minValue = arrayA[0]
    for(var i = 0; i < arrayA.length; i++) {
       minValue = Math.min(Number(minValue), Number(arrayA[i]));
    }
    return minValue;
}

function SPLICE_ELEMENT(arrayA, index) {
  arrayA.splice(index, 1)
  return arrayA;
}

function REVERSE_ARRAY(arrayA) {
    return arrayA.reverse();
}

function GET_SUB_ARRAY(arrayA, fromIdx, toIndx) {
    return arrayA.slice(fromIdx, toIndx);
}

function SORT_ARRAY(arrayA, type) {
    if(type === 'ASC') {
        arrayA = arrayA.sort()
    } else if(type === 'DESC') {
        arrayA = arrayA.sort().reverse()
    }
    return arrayA ;
}

function SUM_ARRAY_ELEMENT(arrayA) {
        var sumValue = 0
        for(var i = 0; i < arrayA.length; i++) {
           sumValue += Number(arrayA[i]);
        }
        return sumValue;
}

function SWAP_ARRAY_ELEMENT(arrayA, i, j) {
      var temp = arrayA[i];
      arrayA[i] = arrayA[j];
      arrayA[j] = temp;
      return arrayA;
}



//##########################################
// 기존 함수 wrapping
//##########################################
function LEGAL_AGE(birthDate, baseDate) {
    CONTEXT.getLogger().debug("function LEGAL_AGE() birthDate:{}, baseDate:{}", birthDate, baseDate);
    return RuleFunction.LEGAL_AGE(birthDate, baseDate);
}

function INSURANCE_AGE(birthDate, baseDate) {
    return RuleFunction.INSURANCE_AGE(birthDate, baseDate);
}

function NOT(v) {
    return !v;
}

function GET_MATURITY_MONTHS(insuranceAge, gbn, value) {
    CONTEXT.getLogger().debug("function GET_MATURITY_MONTHS() insuranceAge:{}, gbn:{}, value:{}", insuranceAge, gbn, value);
    return RuleExternalFunction.GET_MATURITY_MONTHS(insuranceAge, gbn, value);
}

function GET_AFTER_DATE(baseDate, year, month, day) {
    CONTEXT.getLogger().debug("function GET_AFTER_DATE() baseDate:{}, year:{}, month:{}, day:{}", baseDate, year, month, day);
    return RuleExternalFunction.GET_AFTER_DATE(baseDate, year, month, day);
}

function GET_AFTER_DATE_FORMAT(baseDate, year, month, day) {
    CONTEXT.getLogger().debug("function GET_AFTER_DATE_FORMAT() baseDate:{}, year:{}, month:{}, day:{}", baseDate, year, month, day);
    return RuleExternalFunction.GET_AFTER_DATE_FORMAT(baseDate, year, month, day);
}

