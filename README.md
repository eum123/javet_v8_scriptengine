# WNE-RULE-JAVET



## Script 문법
일반적인 javascript 문법을 사용 가능하다.

* 주의 사항
  * 숫자로 시작하는 함수 및 변수명 사용 불가.

### 함수 선언
함수 선언은 아래와 같이 예전 방식만 가능하다.
```javascript
function name() {
    
}
```

아래 방식은 사용 불가능 하다
```javascript
var name = function() {
    
}
```

### Java 객체 사용 법
java에서 제공하는 객체를 javascript 내에서 사용 가능하다.
단 reserved_objects.properties에 선언된 객체만 사용 가능하다.

java Map에서 재공되는 method는 사용할 수 없고 json 형식으로 사용하면 된다.

javascript 내에 생성한 객체는 다른 함수 호출시 parameter로 전달 가능하며
return 시 생성한 map을 확인 할 수 있다.

* 데이터 추가
  map.변수명 = 값;  
*

```javascript
function name() {
    var map = new HashMap();
    map.name = 'hong';
    
    return map;
}
```

BigDecimal 사용
```javascript
function my() {
    const a = new BigDecimal(10);
    const b = new BigDecimal(2); 
    return a.subtract(b); 
}
```

### 사용자 Java 객체 사용 방법
javascript에서 사용자 객체를 생성하여 사용 가능하다

* 주의사항
  * default constructor 만 허용
  * 생성 할 객체의 package까지 선언 해야 됨.

```javascript
function name() {
    const obj = Type.of("javet.MyObject");
    return obj.getName();
}
```



## 외부 호출 기능
javascript 내에서 외부 호출 기능은 아래와 같이 제공한다.
* jdbc를 이용한 select
* spring bean 실행

### jdbc를 이용한 select
EXTERNAL.create().execute()를 이용하여 외부 호출 가능함.
* Parameter
  * 명령 : jdbc:RuleDataSource?query=select 1
    * jdbc: 호출 방식
    * RuleDataSource : DataSource 이름. 반드시 등록된 이름을 사용해야 한다.
    * query : select 쿼리 
  * 참조 값 : HashMap

기본 예제
```javascript
function my() {
    var result = EXTERNAL.create().execute("jdbc:RuleDataSource?query=select 1", null);
    console.log("result:" + result);
    return result;
}
```

변수 예제
```javascript
function my() {
    const map = new HashMap();
    map.name = 'hong';
    
    var result = EXTERNAL.create().execute("jdbc:RuleDataSource?query=select * from my_table where name='${name}'", map);
    console.log("result:" + result);
    return result;
}
```

### spring bean 실행
EXTERNAL.create().execute()를 이용하여 외부 호출 가능함.

* Parameter
    * 명령 : bean:myBean?method=hello
        * bean: 호출 방식
        * myBean : spring bean name
        * method : 실행할 method 이름
    * 참조 값 : HashMap - bean 실행 당시 parameter로 주입함.
* 제약 조건
  * 실행 할 메소드는 반드시 Map을 parameter로 받을수 있어야 한다.
  * 실행 할 메소드는 반드시 Map을 return 해야 한다.
```javascript
function my() {
    var result = EXTERNAL.create().execute('bean:myBean?method=hello', null);
    console.log('result:' + result); 
    return result;
}
```

## 실행 trace
함수의 실행 결과를 저장 하기 위해 로직 시작 전, 후에 기록하는 함수 호출이 필요하다.

* 사용방법
  * 로직 시작 전 호출
    * context.start(함수이름)
    * context.addParameter(함수명, parameter key, parameter 값)
  * 로직 시작 후
    * context.end(함수이름, 실형 결과)

```javascript
function my() {
     context.start('my');
     context.addParameter('my', 'key', 'value1'); 
     console.log('my');
     context.end('my', null);
     sub(); 

     return 'hi'; 
}
                
function sub() {
    context.start('sub');
    context.addParameter('sub', 'key', 'value1'); 
    console.log('sub');
    context.end('sub');
}
```

위 함수 실행 후 trace를 확인 하면
```java
public MyClass{
    public void execute(){
        //....
        RuleResultVo obj=ruleService.executeByRuleId("my",null);
        System.out.println("trace:"+obj.getTraceList());

        //출력 내용
        //trace:[RuleTrace(ruleId=my, parameter={key=value1}, result=null, startTime=1692593061408, endTime=1692593061409), RuleTrace(ruleId=sub, parameter={key=value1}, result=null, startTime=1692593061409, endTime=1692593061409)]
    }
}
```

# 기타
## 룰 ID별 DB 조회 기능 테스트
Rule ID의 버전 관리를 위해 실행 단계에서 호출할 rule ID가 결정되어
rule 실행 시 db에서 조회 하여 실행 하는 방식 테스트.

스크립트 실행 시간은 제외 하였음.

### 결과 
* Engine 생성 시간이 약 1초 정도 소요되어 pool 에 미리 생성하여 진행
* 대부분 DB 처리 시간 만큼 소요시간 걸림.
* 실행 로그
```
13:56:57.212 [main] DEBUG javet.DBSelect - create================ : 1
13:56:58.027 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 815
13:56:58.032 [main] DEBUG javet.DBSelect - ================ : 821

13:56:58.036 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.296 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 260
13:56:58.301 [main] DEBUG javet.DBSelect - ================ : 265

13:56:58.312 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.399 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 87
13:56:58.400 [main] DEBUG javet.DBSelect - ================ : 88

13:56:58.401 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.493 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 92
13:56:58.494 [main] DEBUG javet.DBSelect - ================ : 93

13:56:58.495 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.615 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 120
13:56:58.615 [main] DEBUG javet.DBSelect - ================ : 120

13:56:58.616 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.778 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 162
13:56:58.779 [main] DEBUG javet.DBSelect - ================ : 163

13:56:58.781 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.856 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 73
13:56:58.857 [main] DEBUG javet.DBSelect - ================ : 76

13:56:58.862 [main] DEBUG javet.DBSelect - create================ : 0
13:56:58.929 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 67
13:56:58.930 [main] DEBUG javet.DBSelect - ================ : 68

13:56:58.930 [main] DEBUG javet.DBSelect - create================ : 0
13:56:59.001 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 71
13:56:59.001 [main] DEBUG javet.DBSelect - ================ : 71

13:56:59.002 [main] DEBUG javet.DBSelect - create================ : 0
13:56:59.072 [main] DEBUG javet.DBSelect - DB>>>>>>>>>>>>>>>>> : 70
13:56:59.073 [main] DEBUG javet.DBSelect - ================ : 71
```


## 룰 ID별 Redis 조회 기능 테스트
* 실행 로그
```
15:35:02.303 [main] DEBUG javet.RedisSelect - create================ : 2
15:35:02.428 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 125
15:35:02.435 [main] DEBUG javet.RedisSelect - ================ : 134

15:35:02.438 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.453 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 14
15:35:02.459 [main] DEBUG javet.RedisSelect - ================ : 21

15:35:02.460 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.475 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 15
15:35:02.504 [main] DEBUG javet.RedisSelect - ================ : 44

15:35:02.505 [main] DEBUG javet.RedisSelect - create================ : 1
15:35:02.521 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 16
15:35:02.532 [main] DEBUG javet.RedisSelect - ================ : 28

15:35:02.533 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.548 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 15
15:35:02.553 [main] DEBUG javet.RedisSelect - ================ : 20

15:35:02.553 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.568 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 15
15:35:02.577 [main] DEBUG javet.RedisSelect - ================ : 24

15:35:02.579 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.593 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 14
15:35:02.598 [main] DEBUG javet.RedisSelect - ================ : 19

15:35:02.600 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.640 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 40
15:35:02.646 [main] DEBUG javet.RedisSelect - ================ : 46

15:35:02.646 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.823 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 177
15:35:02.854 [main] DEBUG javet.RedisSelect - ================ : 208

15:35:02.855 [main] DEBUG javet.RedisSelect - create================ : 0
15:35:02.870 [main] DEBUG javet.RedisSelect - Redis>>>>>>>>>>>>>>>>> : 15
15:35:02.876 [main] DEBUG javet.RedisSelect - ================ : 21
```