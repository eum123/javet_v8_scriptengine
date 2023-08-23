/**
 * PRO Rule 전환
 */
function MAX_BETWEEN_TWO(n1, n2) {
    return Math.max(n1, n2);
}
function MIN_BETWEEN_TWO(n1, n2) {
    return Math.min(n1, n2);
}
function GET_NEW_DATE(date1) {
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