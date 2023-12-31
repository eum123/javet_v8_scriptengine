package wne.rule.hrs.engine.spring.integration.sample;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import wne.rule.hrs.engine.core.RuleExecuteResult;
import wne.rule.hrs.engine.core.util.ApplicationContextProvider;
import wne.rule.hrs.engine.spring.integration.TestApplication;
import wne.rule.hrs.engine.spring.integration.component.RuleComponent;
import wne.rule.hrs.engine.spring.integration.configuration.StandaloneRedisProperties;

import java.io.File;
import java.io.FilenameFilter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {TestApplication.class, ApplicationContextProvider.class, StandaloneRedisProperties.class})
public class HwgeneralinsRuleTest {
    @Autowired
    private RuleComponent ruleService;

    @Test
    public void 장기_온라인_연령계산() throws Exception {

        String path = "sample/장기_온라인_연령계산_001.js";
        String ruleId ="장기_온라인_연령계산_001";
        ruleService.setScriptFetcher(new LocalScriptFetcher(path));

        System.out.println("START : " + ruleId + ", parameter:" + getParamter(ruleId));

        RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId) );

        System.out.println("execut results: " + obj.getSubRuleExecuteResult());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

    }

    @Test
    public void 일반_상해_공통_보험료수식적용_001() throws Exception {

        //script 검증 필요

        String script = Files.readAllLines(Paths.get(
                ClassLoader.getSystemResource("sample/일반_상해_공통_보험료수식적용_001.js").toURI())
        ).stream().collect(Collectors.joining("\n"));

        ruleService.updateRule("일반_상해_공통_보험료수식적용_001", script);
        //누적기초보험료=RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),자리수)
        /*
                가입금액, 가입금액단위, 가입금액수정계수, 가입금액할증계수, 가족담보계좌수
                , 건강보험비가입자할증율, 계속계약할인율, 계약형태코드, 고도후유장해할인율, 기본보험료코드
                , 기본의료실비할증계수, 기타비급여담보할증율, 누적기초보험료, 다수구매자할인율, 단기요율
                , 단체계약적용요율, 단체할인율, 담보코드, 대중교통적용요율, 면책일수
                , 보상한도액인상계수, 보상한도액인상율, 보험기간개월수, 보험기간년수, 보험기간일수

                , 보험료관리여부, 부부가족적용요율, 북한주민할인율, 분납할증율, 분할위험담보할인율
                , 사망후유장해할증율합, 사업비합계할인율, 상품코드, 상해3급할증율, 상해급수할인할증율
                , 순요율, 신규갱신구분코드, 신주말할증율, 신체부위확장담보요율, 여행자담보할증율
                , 연구원할인율, 예정손해율, 운동위험할증요율, 의료실비할증계수합계, 의료실비할증율합
                , 인원수, 입원병실료차액담보할증율, 입원의료비보상비율, 입원의료비치과추가담보할증율, 입원의료비한방추가담보할증율

                , 자기부담금조정계수, 자기부담금할인계수, 자기부담금할인율, 자리수, 장기일시납요율
                , 적용요율코드, 직장가입자할인율, 천재상해사망후유장해적용요율, 최종보험료코드, 탑승횟수
                , 통원의료비담보할인율, 통원의료비보상비율, 통원의료비치과추가담보할증율, 통원의료비한방추가담보할증율, 특별비용할증율합
                , 피부양자할증율, 학교할증율, 화폐코드, 후유장해담보적용율, 실손의료비단기요율
                , 여행중상해의료실비직업담보할증율, 여행중의료실비1의운동담보할증율, 여행중의료실비2의운동담보할증율, 천재위험담보할증율, 담보세부구분코드

                , 일반암순요율, 특정암순요율, 갑상샘암순요율, 상피내암순요율, 경계성암순요율
                , 기타피부암순요율, 특수운전중사망후유장해요율, 상해확장담보할증율, 조정계수, 예정기초율전환계수
                , 특수운전중상해단기율, 의료급여수급권자의료비할인율, 특수운동중실손의료비할증율, 특수운전중실손의료비할증율, 영업요율
                , 해외의료비상해자기부담금할인율, 해외의료비질병자기부담금할인율, 해외상해의료비가입금액계수, 해외질병의료비가입금액계수, 청약일자기준환율
                , 자원봉사활동담보구분코드, 해외여행실비특약전환율, 입원의료비치과추가담보할증율_특약형, 입원의료비한방추가담보할증율_특약형
                , 특수운동중실손의료비할증율_특약형, 여행중상해의료실비직업담보할증율_특약형, 여행중의료실비1의운동담보할증율_특약형, 여행중의료실비2의운동담보할증율_특약형, 수술비보상비율

                , 직무상선박탑승중실손의료비할증율, 직무상선박탑승중실손의료비할증율_특약형, 보험료적용비율, 산업재해인상계수, 상해전환율_해외여행_급여
                , 상해전환율_해외여행_비급여, 질병전환율_해외여행_급여, 질병전환율_해외여행_비급여, 질병의료비출산확장할증률, 입원의료비치과비급여추가할증률
                , 입원의료비한방비급여추가할증률, 상해확장담보24시간상해할증률, 실손의료비상해확장담보할증률, 실손의료비상해확장담보할증률_3대비급여

         */

        RuleExecuteResult obj = ruleService.executeByRuleId("일반_상해_공통_보험료수식적용_001", "일반_상해_공통_보험료수식적용",
                1000, 10000, 1.0, 1.0, 1.0
                , 0.2, 0.1, "A", 10, "A01"
                , 0.1, 4, 1000, 10, 0.2
                , 0.2, 10, "E01", 10, 10
                , 0.0, 10, 3, 10, 4

                , "Y", 0.34, 10, 23, 20
                , 200, 2, "AA", 10, 12
                , 8, "C", 12, 2, 0.123
                , 1, 2, 3, 10000, 2000

                , 0.002, 0.221, 20, 2, 12
                , "BB", 2, 4, "DD", 3
                , 2, 4, 5, 6, 7
                , 2, 3, "K", 3, 4
                , 2, 3, 4, 5, "A!"

                , 2,4, 6, 5, 2
                , 2, 4, 6, 3, 1
                , 3, 5, 7, 3, 5
                , 3, 4, 6, 3, 4
                , "A", "B", "C", "D", 12

                , 2, "D", 2, 5, 2
                , 2, 3, 5, 5, 3
                , 2, 6, 2, 4, 2
                );

        System.out.println(obj.getResult());
        System.out.println(obj.getRuleExecuteLog());
        System.out.println(obj.getThrowable());



    }

    @Test
    public void 일반_공통_보상한도금액사이값입력가능금액기준표_001() throws Exception {

        String path = "sample/일반_공통_보상한도금액사이값입력가능금액기준표_001.j";

        ruleService.setScriptFetcher(new LocalScriptFetcher(path));


        //누적기초보험료=RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),자리수)
        /*
                상품코드,위험유형코드,업종1레벨코드,업종2레벨코드,담보코드
                ,보상한도금액단위코드,배상구분코드,가입금액

         */

        RuleExecuteResult obj = ruleService.executeByRuleId("일반_공통_보상한도금액사이값입력가능금액기준표_001", "일반_공통_보상한도금액사이값입력가능금액기준표",
                "FA00050003", "RFA00030", "A601", "A301", "CFA10112"
                , "02", "02", 5000000
        );

        System.out.println(obj.getResult());
        System.out.println(obj.getRuleExecuteLog());
        System.out.println(obj.getThrowable());
        System.out.println(obj.getErrorDetailMessage());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

    }

    @Test
    public void 장기_보험종기계산() throws Exception {

        String path = "sample/장기_보험종기계산_001.js";
        String ruleId ="장기_보험종기계산_001";

        ruleService.setScriptFetcher(new LocalScriptFetcher(path));

        System.out.println("START : " + ruleId + " parameter:" + getParamter(ruleId).length);

        RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId) );

        System.out.println("execut results: " + obj.getSubRuleExecuteResult());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

    }

    @Test
    public void 일반_상해의료실비담보_상해통원_외래_요율_CFA11413_개인() throws Exception {

        String path = "sample/일반_상해의료실비담보_상해통원_외래_요율_CFA11413_개인_001.js";
        String ruleId ="일반_상해의료실비담보_상해통원_외래_요율_CFA11413_개인_001";

        ruleService.setScriptFetcher(new LocalScriptFetcher(path));

        System.out.println("START : " + ruleId + " parameter:" + getParamter(ruleId).length);

        RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId) );

        System.out.println(obj.getResult());
        System.out.println("처리시간:" + (obj.getEndTime() - obj.getStartTime()));
        System.out.println("execut results: " + obj.getSubRuleExecuteResult());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

        Assert.assertNull(obj.getThrowable());
    }
    @Test
    public void 일반_공통_보상한도금액사이값입력가능금액기준표_001_debug() throws Exception {

        String path = "sample/일반_공통_보상한도금액사이값입력가능금액기준표_001_debug.js";
        String ruleId ="일반_공통_보상한도금액사이값입력가능금액기준표_001";

        ruleService.setScriptFetcher(new LocalScriptFetcher(path));

        System.out.println("START : " + ruleId + " parameter:" + getParamter(ruleId).length);

        RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId) );

        System.out.println(obj.getResult());
        System.out.println("처리시간:" + (obj.getEndTime() - obj.getStartTime()));
        System.out.println("execut results: " + obj.getSubRuleExecuteResult());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

    }

    @Test
    public void function_001() throws Exception {

        String script = "function my() { \n" +
                "var 누적기초보험료 = 1000; \n" +
                "var LCM계수 = 1; \n" +
                "var 자리수 = 2; \n" +
                "return RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),자리수); \n" +
                "} \n";

        ruleService.updateRule("일반_상해_공통_보험료수식적용_001", script);

        RuleExecuteResult obj = ruleService.executeByRuleId("my", "ruleName");

        System.out.println(obj.getResult().getClass());
        System.out.println(obj.getRuleExecuteLog());
        System.out.println(obj.getThrowable());

        Assert.assertNull(obj.getThrowable());
    }

    @Test
    public void testAll() {
        String path = System.getProperty("user.dir") + "/src/test/resources/sample/";

        File f = new File(path);
        String[] list = f.list(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return name.indexOf(".js") > 0 && name.indexOf("debug") < 0;
            }
        });

        for (String s : list) {
            String filePath = "sample/" + s;
            String ruleId = s.substring(0, s.indexOf("."));

            System.out.println("path:" + filePath);
            System.out.println("ruleId:" + ruleId);

            ruleService.setScriptFetcher(new LocalScriptFetcher(filePath));

            try {
                RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId)
                );

                if(obj.getErrorLineNumber() != 0) {
                    System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());
                }
                if(obj.getThrowable() != null) {
                    break;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private Object[] getParamter(String ruleId) {

        if(ruleId.contains("장기_온라인_연령계산")) {
            return new Object[] {"20230101", "8011111111111", "01"};
        }

        if(ruleId.contains("장기_보험종기계산")) {
            //기준일자,만기구분코드,만기,연령
            return new Object[] {"20230101", "03", 5, 4};
        }

        if(ruleId.contains("장기_보험종기")) {
            //만기,주민등록번호,만기구분코드,기준일자,연령산출기준구분코드,담보코드,임신경과주
            return new Object[] {12, "8011111111111", "01", "20230101", "", "", 4};
        }

        if(ruleId.contains("일반_화재일반물건_특정물건_기본요율")) {
            //업종코드,건물급수코드
            return new Object[] {"E011", "1"};
        }

        if(ruleId.contains("손사_후유장해_좌우구분예외_001")) {
            //IDX,좌우구분
            return new Object[] {1, new Object[]{"E", "L"}};
        }

        if(ruleId.contains("손사_후유장해_동일계열구분_001")) {
            //CNT1,CNT2,CNT3,IDX,IDXP,구구장해동일계열갯수,구구장해동일계열여부,구장해동일계열갯수,구장해동일계열여부,신장해동일계열갯수,신장해동일계열여부,장해코드
            return new Object[] {1, 2, 3, 1 };
        }

        if(ruleId.contains("일반_상해의료실비담보_상해통원_외래_요율_CFA11413_개인")) {
            //단일요율적용여부,상해급수코드,실손의료비보험가입유형,가입금액,성별코드,담보코드,보험연령
            return new Object[] {"0", "1", "06", 100000, "01", "CFA11413", 0 };
        }

        if(ruleId.contains("일반_공통_보상한도금액사이값입력가능금액기준표_001")) {
            //상품코드,위험유형코드,업종1레벨코드,업종2레벨코드,담보코드,보상한도금액단위코드,배상구분코드,가입금액
            return new Object[] {"FA00145001", "RFA00068", "", "", "CFA10237", "01", "01", 100000000};
        }


        return null;
    }

    @Test
    public void single() throws Exception {

        String path = "sample/일반_화재일반물건_특정물건_기본요율_001.js";
        String ruleId ="일반_화재일반물건_특정물건_기본요율_001";

        ruleService.setScriptFetcher(new LocalScriptFetcher(path));

        System.out.println("START : " + ruleId);

        RuleExecuteResult obj = ruleService.executeByRuleId(ruleId, ruleId, getParamter(ruleId) );

        System.out.println("result:" + obj.getResult());
        System.out.println("execut results: " + obj.getSubRuleExecuteResult());
        System.out.println("ruleId : " + obj.getRuleId() + ", error line : " + obj.getErrorLineNumber() + ", 오류 메시지 : " + obj.getErrorDetailMessage());

    }



}
