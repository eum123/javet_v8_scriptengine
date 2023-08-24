function 일반_상해_공통_보험료수식적용_001(가입금액, 가입금액단위, 가입금액수정계수, 가입금액할증계수, 가족담보계좌수
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
                , 입원의료비한방비급여추가할증률, 상해확장담보24시간상해할증률, 실손의료비상해확장담보할증률, 실손의료비상해확장담보할증률_3대비급여 ){
    var __TARGET_DATE__;

    //var BigDecimal = Java.type('java.math.BigDecimal');


    var __RULE_INQUIRY_BASE_DATE__ = __TARGET_DATE__;
    var __hpasRuleResult = {};

    var 기본요율 = null;
    var 기본보험료 = null;
    var 적용요율 = null;
    var 가입금액할증계수 = 가입금액할증계수;
    var 최종보험료 = null;
    var 상해급수할인할증율 = 상해급수할인할증율;
    var LCM계수 = 0;
    var 일반암기본요율;
    var 특정암기본요율;
    var 갑상샘암기본요율;
    var 상피내암기본요율;
    var 경계성암기본요율;
    var 기타피부암기본요율;
    var 프린트값;
    var 보험료자리수;
    var 입원일당자리수;
    var 룰유틸;
    var 특수운전중실손의료비할증율_특약형;

    if(
        면책일수=="0.000"||면책일수==""
    ){
        면책일수=0;
    }


    if(
        IS_EMPTY(천재상해사망후유장해적용요율)==true
    ){
        천재상해사망후유장해적용요율=0;
    }


    if(
        IS_EMPTY(상해3급할증율)==true
    ){
        상해3급할증율=0;
    }


    if(
        IS_EMPTY(의료실비할증계수합계)==true
    ){
        의료실비할증계수합계=0;
    }


    if(
        IS_EMPTY(기본의료실비할증계수)==true
    ){
        기본의료실비할증계수=0;
    }


    if(
        IS_EMPTY(자리수)==true
    ){
        자리수=0
    }


    if(
        IS_EMPTY(가입금액단위)==true
    ){
        가입금액단위=1
    }


    if(
        IS_EMPTY(피부양자할증율)==true
    ){
        피부양자할증율=0
    }


    if(
        IS_EMPTY(직장가입자할인율)==true
    ){
        직장가입자할인율=0
    }


    if(
        IS_EMPTY(분할위험담보할인율)==true
    ){
        분할위험담보할인율=0
    }


    if(
        IS_EMPTY(상해급수할인할증율)==true
    ){
        상해급수할인할증율=1
    }


    if(
        IS_EMPTY(건강보험비가입자할증율)==true
    ){
        건강보험비가입자할증율=0
    }


    if(
        IS_EMPTY(건강보험비가입자할증율)==true
    ){
        건강보험비가입자할증율=0
    }


    if(
        IS_EMPTY(장기일시납요율)==true
    ){
        장기일시납요율=1
    }


    if(
        IS_EMPTY(분납할증율)==true
    ){
        분납할증율=0
    }


    if(
        여행중상해의료실비직업담보할증율<=0
    ){
        여행중상해의료실비직업담보할증율=1
    }


    if(
        여행중의료실비1의운동담보할증율<=0
    ){
        여행중의료실비1의운동담보할증율=1
    }


    if(
        여행중의료실비2의운동담보할증율<=0
    ){
        여행중의료실비2의운동담보할증율=0
    }


    if(
        IS_EMPTY(천재위험담보할증율)==true
    ){
        천재위험담보할증율=0
    }


    if(
        IS_EMPTY(입원의료비치과추가담보할증율)==true
    ){
        입원의료비치과추가담보할증율=0
    }


    if(
        IS_EMPTY(입원의료비한방추가담보할증율)==true
    ){
        입원의료비한방추가담보할증율=0
    }


    if(
        IS_EMPTY(입원의료비치과추가담보할증율_특약형)==true
    ){
        입원의료비치과추가담보할증율_특약형=0
    }


    if(
        IS_EMPTY(입원의료비한방추가담보할증율_특약형)==true
    ){
        입원의료비한방추가담보할증율_특약형=0
    }


    if(
        IS_EMPTY(상해확장담보할증율)==true
    ){
        상해확장담보할증율=0
    }


    if(
        IS_EMPTY(예정기초율전환계수)==true
    ){
        예정기초율전환계수=1
    }


    if(
        IS_EMPTY(학교할증율)==true
    ){
        학교할증율=0
    }


    if(
        IS_EMPTY(대중교통적용요율)==true
    ){
        대중교통적용요율=1
    }


    if(
        IS_EMPTY(특별비용할증율합)==true
    ){
        특별비용할증율합=0
    }


    if(
        IS_EMPTY(특수운전중상해단기율)==true
    ){
        특수운전중상해단기율=0
    }


    if(
        IS_EMPTY(의료급여수급권자의료비할인율)==true
    ){
        의료급여수급권자의료비할인율=0
    }


    if(
        IS_EMPTY(특수운동중실손의료비할증율)==true
    ){
        특수운동중실손의료비할증율=0
    }


    if(
        IS_EMPTY(특수운동중실손의료비할증율_특약형)==true
    ){
        특수운동중실손의료비할증율_특약형=0
    }


    if(
        IS_EMPTY(특수운전중실손의료비할증율)==true
    ){
        특수운전중실손의료비할증율=0
    }

    if(
        IS_EMPTY(해외의료비상해자기부담금할인율)==true
    ){
        해외의료비상해자기부담금할인율=0
    }

    if(
        IS_EMPTY(해외의료비질병자기부담금할인율)==true
    ){
        해외의료비질병자기부담금할인율=0
    }

    if(
        IS_EMPTY(청약일자기준환율)==true
    ){
        청약일자기준환율=1
    }

    if(
        IS_EMPTY(해외상해의료비가입금액계수)==true
    ){
        해외상해의료비가입금액계수=1
    }

    if(
        IS_EMPTY(해외질병의료비가입금액계수)==true
    ){
        해외질병의료비가입금액계수=1
    }


    if(
        IS_EMPTY(단체계약적용요율)==true
    ){
        단체계약적용요율=1
    }


    if(
        IS_EMPTY(해외여행실비특약전환율)==true
    ){
        해외여행실비특약전환율=100
    }


    if(
        IS_EMPTY(여행중상해의료실비직업담보할증율_특약형)==true
    ){
        여행중상해의료실비직업담보할증율_특약형=1
    }


    if(
        IS_EMPTY(여행중의료실비1의운동담보할증율_특약형)==true
    ){
        여행중의료실비1의운동담보할증율_특약형=1
    }


    if(
        IS_EMPTY(여행중의료실비2의운동담보할증율_특약형)==true
    ){
        여행중의료실비2의운동담보할증율_특약형=0
    }


    if(
        IS_EMPTY(수술비보상비율)==true
    ){
        수술비보상비율=100
    }


    if(
        IS_EMPTY(직무상선박탑승중실손의료비할증율)==true
    ){
        직무상선박탑승중실손의료비할증율=0
    }


    if(
        IS_EMPTY(직무상선박탑승중실손의료비할증율_특약형)==true
    ){
        직무상선박탑승중실손의료비할증율_특약형=0
    }


    if(
        IS_EMPTY(고도후유장해할인율)==true
    ){
        고도후유장해할인율=0
    }


    if(
        IS_EMPTY(보험료적용비율)==true
    ){
        보험료적용비율=100
    }


    if(
        IS_EMPTY(입원의료비치과비급여추가할증률)==true
    ){
        입원의료비치과비급여추가할증률=0
    }


    if(
        IS_EMPTY(입원의료비한방비급여추가할증률)==true
    ){
        입원의료비한방비급여추가할증률=0
    }


    if(
        IS_EMPTY(질병의료비출산확장할증률)==true
    ){
        질병의료비출산확장할증률=0
    }


    if(
        IS_EMPTY(실손의료비상해확장담보할증률)==true
    ){
        실손의료비상해확장담보할증률=0
    }


    if(
        IS_EMPTY(실손의료비상해확장담보할증률_3대비급여)==true
    ){
        실손의료비상해확장담보할증률_3대비급여=0
    }


    if(
        IS_EMPTY(상해확장담보24시간상해할증률)==true
    ){
        상해확장담보24시간상해할증률=0
    }


    특수운전중실손의료비할증율_특약형=RuleFunction.ROUND((RuleFunction.AMT(특수운전중실손의료비할증율)).multiply(RuleFunction.AMT(0.1371)),3)


    // Compiler Version 1 , Created : 2023-08-23 15:25:08
    if(화폐코드 == "WON"
    ){
        보험료자리수 = 1

    }

    if(화폐코드 != "WON"
    ){
        보험료자리수 = 3

    }

    if(화폐코드 == ""
    ){
        보험료자리수 = 1

    }

    if(true
    ){
        LCM계수=RuleFunction.ROUND((RuleFunction.AMT(1)).divide(RuleFunction.AMT(예정손해율), 20, BigDecimal.ROUND_DOWN),5)

    }

    if(상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00120002' || 상품코드 == 'FA00096002' || 상품코드 == 'FA00121001' || 상품코드 == 'FA00121002'
    ){
        LCM계수 = 1

    }

    if((상품코드 == 'FA00034002' || 상품코드 == 'FA00034003' || 상품코드 == 'FA00034012' || 상품코드 == 'FA00034015') && (담보코드 == "CFA11556" || 담보코드 == "CFA11557" || 담보코드 == "CFA11676")
    ){
        LCM계수 = 1

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00120002' || 상품코드 == 'FA00096002') && (담보코드 == "CFA10995" || 담보코드 == "CFA11012" || 담보코드 == "CFA11009" || 담보코드 == "CFA11009" || 담보코드 == "CFA11690" || 담보코드 == "CFA11691" || 담보코드 == "CFA11692" || 담보코드 == "CFA11693" || 담보코드 == "CFA11694")
    ){
        LCM계수=RuleFunction.ROUND((RuleFunction.AMT(1)).divide(RuleFunction.AMT(예정손해율), 20, BigDecimal.ROUND_DOWN),5)

    }

    if((상품코드 == 'FA00120002' || 상품코드 == 'FA00096001') && 담보코드 == "CFA11012"
    ){
        순요율 = 특정암순요율

    }

    if(true
    ){
        기본요율=(RuleFunction.AMT(순요율)).multiply(RuleFunction.AMT(LCM계수))

    }

    if(담보코드 == "CFA10946" || 담보코드 == "CFA10952" || 담보코드 == "CFA10960" || 담보코드 == "CFA10947" || 담보코드 == "CFA10953" || 담보코드 == "CFA10961" || 담보코드 == "CFA10948" || 담보코드 == "CFA10954" || 담보코드 == "CFA10962" || 담보코드 == "CFA10949" || 담보코드 == "CFA10956" || 담보코드 == "CFA10964" || 담보코드 == "CFA10950" || 담보코드 == "CFA10957" || 담보코드 == "CFA10965" || 담보코드 == "CFA10951" || 담보코드 == "CFA10958" || 담보코드 == "CFA10966"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(영업요율),1)

    }

    if(담보코드 == "CFA11412" || 담보코드 == "CFA11413" || 담보코드 == "CFA11414" || 담보코드 == "CFA11415" || 담보코드 == "CFA11416" || 담보코드 == "CFA11417" || 담보코드 == "CFA11418" || 담보코드 == "CFA11419" || 담보코드 == "CFA11420" || 담보코드 == "CFA11421" || 담보코드 == "CFA11422" || 담보코드 == "CFA11423" || 담보코드 == "CFA11424" || 담보코드 == "CFA11425" || 담보코드 == "CFA11426" || 담보코드 == "CFA11434" || 담보코드 == "CFA11435" || 담보코드 == "CFA11436" || 담보코드 == "CFA11427" || 담보코드 == "CFA11428" || 담보코드 == "CFA11429" || 담보코드 == "CFA11430" || 담보코드 == "CFA11431" || 담보코드 == "CFA11432" || 담보코드 == "CFA11437" || 담보코드 == "CFA11438" || 담보코드 == "CFA11439"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(영업요율),1)

    }

    if(담보코드 == "CFA11800" || 담보코드 == "CFA11801" || 담보코드 == "CFA11802" || 담보코드 == "CFA11803" || 담보코드 == "CFA11804" || 담보코드 == "CFA11805" || 담보코드 == "CFA11806" || 담보코드 == "CFA11807" || 담보코드 == "CFA11808" || 담보코드 == "CFA11809" || 담보코드 == "CFA11810" || 담보코드 == "CFA11811" || 담보코드 == "CFA11812" || 담보코드 == "CFA11813" || 담보코드 == "CFA11814" || 담보코드 == "CFA11815" || 담보코드 == "CFA11816" || 담보코드 == "CFA11817" || 담보코드 == "CFA11818" || 담보코드 == "CFA11819" || 담보코드 == "CFA11820"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(영업요율),1)

    }

    if(담보코드 == "CFA11501"
    ){
        기본요율 = 영업요율

    }

    if(담보코드 == "CFA11676"
    ){
        기본요율 = 영업요율

    }

    if(담보코드 == "CFA10574"
    ){
        기본요율=(RuleFunction.ROUND((RuleFunction.AMT(순요율)).multiply(RuleFunction.AMT(LCM계수)),7)).multiply(RuleFunction.AMT(가입금액))
        LOGGER.debug("기본요율222[ " + 기본요율 + "]")

    }

    if(담보코드 == "CFA11614" || 담보코드 == "CFA11615" || 담보코드 == "CFA11616"
    ){
        가입금액=((RuleFunction.AMT(가입금액)).multiply(RuleFunction.AMT(수술비보상비율))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)

    }

    if(적용요율코드 == "사업비자원봉사활동중상해입원일당담보"
    ){
        if(
            자원봉사활동담보구분코드=='01'
        ){
            입원일당자리수=2
        }else{
            입원일당자리수=1
        }

        기본요율=RuleFunction.ROUND((RuleFunction.AMT(순요율)).multiply(RuleFunction.AMT(LCM계수)),입원일당자리수)

    }

    if(담보코드 == "CFA10995"
    ){
        일반암기본요율=RuleFunction.ROUND((RuleFunction.AMT(일반암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)
        특정암기본요율=RuleFunction.ROUND((RuleFunction.AMT(특정암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)
        상피내암기본요율=RuleFunction.ROUND((RuleFunction.AMT(상피내암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)
        경계성암기본요율=RuleFunction.ROUND((RuleFunction.AMT(경계성암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)
        기타피부암기본요율=RuleFunction.ROUND((RuleFunction.AMT(기타피부암순요율)).multiply(RuleFunction.AMT(LCM계수)),1)

    }

    if(담보코드 == "CFA11628" || 담보코드 == "CFA11629"
    ){
        일반암기본요율=RuleFunction.ROUND((RuleFunction.AMT(일반암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        특정암기본요율=RuleFunction.ROUND((RuleFunction.AMT(특정암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        상피내암기본요율=RuleFunction.ROUND((RuleFunction.AMT(상피내암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        경계성암기본요율=RuleFunction.ROUND((RuleFunction.AMT(경계성암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        기타피부암기본요율=RuleFunction.ROUND((RuleFunction.AMT(기타피부암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)

    }

    if(담보코드 == "CFA10542"
    ){
        일반암기본요율=RuleFunction.ROUND((RuleFunction.AMT(일반암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        특정암기본요율=RuleFunction.ROUND((RuleFunction.AMT(특정암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        상피내암기본요율=RuleFunction.ROUND((RuleFunction.AMT(상피내암순요율)).multiply(RuleFunction.AMT(LCM계수)),5)
        경계성암기본요율=RuleFunction.ROUND((RuleFunction.AMT(경계성암순요율)).multiply(RuleFunction.AMT(LCM계수)),4)
        기타피부암기본요율=RuleFunction.ROUND((RuleFunction.AMT(기타피부암순요율)).multiply(RuleFunction.AMT(LCM계수)),5)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "23"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "24"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "25"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "26"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "27"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "28"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "29"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "30"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "31"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "32"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "33"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율 = 0
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "34"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율 = 0
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "35"
    ){
        일반암기본요율 =  0
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율 =  0
        경계성암기본요율 =  0
        기타피부암기본요율 =  0

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "36"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율 =  0
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "37"
    ){
        일반암기본요율 =  0
        특정암기본요율 =  0
        갑상샘암기본요율 =  0
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        경계성암기본요율 =  0
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "38"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "39"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.4)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "40"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "41"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "43"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.5)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "44"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율 =  0
        상피내암기본요율 =  0
        경계성암기본요율 =  0
        기타피부암기본요율 =  0

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "45"
    ){
        일반암기본요율 =  0
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율 = 0
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        기타피부암기본요율 = 0

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "46"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "47"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "48"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "49"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "50"
    ){
        일반암기본요율 =  0
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율 =  0
        상피내암기본요율 =  0
        경계성암기본요율 =  0
        기타피부암기본요율 = 0

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "73"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암기본요율)).multiply(RuleFunction.ROUND(((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(0.43)),1)),1)
        상피내암기본요율=RuleFunction.ROUND((RuleFunction.AMT(상피내암기본요율)).multiply(RuleFunction.ROUND(((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(0.43)),1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND((RuleFunction.AMT(기타피부암기본요율)).multiply(RuleFunction.ROUND(((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(0.43)),1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "74"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.7)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.7)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.7)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "88"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.5)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "91"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.6)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "101"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "92"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.4)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.3)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995" && 담보세부구분코드 == "93"
    ){
        일반암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(특정암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN)),1)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        갑상샘암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.1)),1)

    }

    if(담보코드 == "CFA10995"
    ){
        기본요율 = 일반암기본요율 + 특정암기본요율 + 갑상샘암기본요율 + 상피내암기본요율 + 경계성암기본요율 + 기타피부암기본요율

    }

    if(담보코드 == "CFA11628" || 담보코드 == "CFA11629"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN)),4)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.4)),4)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.4)),4)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.4)),4)

    }

    if(담보코드 == "CFA10542"
    ){
        일반암기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(일반암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),4)
        특정암기본요율 =  0
        갑상샘암기본요율=RuleFunction.ROUND((RuleFunction.AMT(갑상샘암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN)),4)
        상피내암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(상피내암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),5)
        경계성암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(경계성암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),4)
        기타피부암기본요율=RuleFunction.ROUND(((RuleFunction.AMT(기타피부암기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(0.2)),5)

    }

    if(담보코드 == "CFA11628" || 담보코드 == "CFA11629" || 담보코드 == "CFA10542"
    ){
        기본요율 = 일반암기본요율 + 특정암기본요율 + 갑상샘암기본요율 + 상피내암기본요율 + 경계성암기본요율 + 기타피부암기본요율
        LOGGER.debug("기본요율 : " + 기본요율)
        LOGGER.debug("일반암기본요율 : " + 일반암기본요율)
        LOGGER.debug("특정암기본요율 : " + 특정암기본요율)
        LOGGER.debug("갑상샘암기본요율 : " + 갑상샘암기본요율)
        LOGGER.debug("상피내암기본요율 : " + 상피내암기본요율)
        LOGGER.debug("경계성암기본요율 : " + 경계성암기본요율)
        LOGGER.debug("기타피부암기본요율 : " + 기타피부암기본요율)

    }

    if(true
    ){
        LOGGER.debug("계산전 기본요율["+ 기본요율 +"]")

    }

    if(보험료관리여부 == "1" && 적용요율코드 != "사업비면책일수"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(기본요율),자리수)
        LOGGER.debug("기본요율(원본)[ " + 기본요율 + "]")

    }

    if(보험료관리여부 == "1" && 적용요율코드 == "사업비면책일수"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(기본요율),1)
        LOGGER.debug("기본요율(원본)[ " + 기본요율 + "]")

    }

    if(보험료관리여부 == "1" && (담보코드 == "CFA10995")
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(기본요율),4)
        LOGGER.debug("기본요율(예외사항)[ " + 기본요율 + "]")

    }

    if(담보코드=="CFA11695" || 담보코드=="CFA11696" || 담보코드=="CFA11697" || 담보코드=="CFA11698" || 담보코드=="CFA11699" || 담보코드=="CFA11700" || 담보코드=="CFA11701" || 담보코드=="CFA11702" || 담보코드=="CFA11703" || 담보코드=="CFA11704" || 담보코드=="CFA11687" || 담보코드=="CFA11688"
    ){
        기본요율=(RuleFunction.AMT(기본요율)).multiply((RuleFunction.AMT(보험료적용비율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))
        LOGGER.debug("보험료적용비율[ " + 보험료적용비율 + "]")
        LOGGER.debug("보험료적용비율 반영 후 기본요율[ " + 기본요율 + "]")

    }

    if(담보코드 == "CFA10981"
    ){
        기본요율 = 특수운전중사망후유장해요율

    }

    if(보험료관리여부 == "0"
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(0),1)

    }

    if(상품코드 == 'FA00046001' && 담보코드 == "CFA10591" && (보험기간년수 == 0 && (보험기간개월수 < 3 || (보험기간개월수 == 3 && 보험기간일수 ==0)))
    ){
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(기본요율),자리수.subtract(RuleFunction.AMT(1)))

    }

    if(담보코드 == "CFA10478"
    ){
        기본요율 = 천재상해사망후유장해적용요율

    }

    if((담보코드 =="CFA10497" || 담보코드 == "CFA10499") && 계약형태코드 == '04'
    ){
        누적기초보험료=RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),1)
        기본요율=RuleFunction.AMT(누적기초보험료).add((ROUNDUP((RuleFunction.AMT(가입금액).subtract(RuleFunction.AMT(1000))).divide(RuleFunction.AMT(1000), 20, BigDecimal.ROUND_DOWN),1)).multiply(RuleFunction.AMT(기본요율)))

    }

    if((담보코드 == "CFA10497" || 담보코드 == "CFA10499") && 계약형태코드 == '06'
    ){
        누적기초보험료=RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),1)
        기본요율=RuleFunction.ROUND(RuleFunction.AMT(누적기초보험료).add((RuleFunction.AMT(가족담보계좌수).subtract(RuleFunction.AMT(1))).multiply(RuleFunction.AMT(기본요율)),1))

    }

    if((담보코드 == "CFA10496" || 담보코드 == "CFA10498") && 계약형태코드 == '04'
    ){
        기본요율=RuleFunction.ROUND(((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(100000), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(기본요율)),1)

    }

    if(상품코드 == "FA00046001" && (담보코드 == "CFA10602" || 담보코드 == "CFA10603" || 담보코드 == "CFA10598")
    ){
        기본요율 = 순요율

    }

    if(담보코드 == "CFA10543"
    ){
        기본요율=RuleFunction.ROUND(((((RuleFunction.AMT(순요율)).multiply(RuleFunction.AMT(LCM계수))).multiply(RuleFunction.AMT(1000))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN),자리수)

    }

    if(조정계수 == "NULL"
    ){
        조정계수 = "0"

    }

    if(담보코드 == "CFA11107"
    ){
        기본요율=ROUNDDOWN((RuleFunction.ROUND((RuleFunction.AMT(순요율)).multiply(RuleFunction.AMT(LCM계수)),1)).multiply(PARSEBIGDECIMAL(RuleFunction.AMT(조정계수))),1)

    }

    if(담보코드 !="CFA10409" && 담보코드 !="CFA10410" && 담보코드 !="CFA10411" && 담보코드 !="CFA10412" && 담보코드 !="CFA10413" && 담보코드 !="CFA10451" && 담보코드 !="CFA10452" && 담보코드 !="CFA10946" && 담보코드 !="CFA10947" && 담보코드 !="CFA10948"  && 담보코드 !="CFA11412"  && 담보코드 !="CFA11413" && 담보코드 !="CFA11414" && 담보코드 !="CFA11800"  && 담보코드 !="CFA11802"
    ){
        상해3급할증율 = 0

    }

    if(누적기초보험료 > 0
    ){
        누적기초보험료=RuleFunction.ROUND((RuleFunction.AMT(누적기초보험료)).multiply(RuleFunction.AMT(LCM계수)),자리수)

    }

    if(기본보험료코드 == "보험료"
    ){
        기본보험료=ROUNDDOWN(RuleFunction.AMT(기본요율),보험료자리수)

    }

    if(기본보험료코드 == "요율" && (적용요율코드 == "사업비면책일수")
    ){
        LOGGER.debug("계산전 기본요율은[ " + 기본요율 + "]")
        기본보험료=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN)),보험료자리수)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),자리수)
        기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN)),보험료자리수)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),자리수)
        LOGGER.debug("계산후 기본요율은[ " + 기본요율 + "]")

    }

    if(기본보험료코드 == "요율" && (적용요율코드 == "치아담보면책일수")
    ){
        LOGGER.debug("계산전 기본요율은[ " + 기본요율 + "]")
        기본보험료=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN)),3)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),자리수)
        기본요율=RuleFunction.ROUND((((RuleFunction.ROUND((RuleFunction.AMT(기본요율)).multiply((RuleFunction.AMT(가입금액)).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN)),3)).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1)),자리수)
        LOGGER.debug("계산후 기본요율은[ " + 기본요율 + "]")

    }

    if(기본보험료코드 == "요율" && (적용요율코드 != "사업비면책일수" && 적용요율코드 != "치아담보면책일수")
    ){
        기본보험료=ROUNDDOWN(((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(가입금액))).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN),보험료자리수)

    }

    if(기본보험료코드 == "할증요율"
    ){
        기본보험료 = 0

    }

    if(적용요율코드 == "사업비건강상해통원비"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비대중교통사망후유장해"
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(대중교통적용요율))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비대중교통의료실비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(의료실비할증계수합계).subtract(RuleFunction.AMT(기본의료실비할증계수)))).multiply(RuleFunction.AMT(대중교통적용요율))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 의료실비할증계수합계 - 기본의료실비할증계수

    }

    if(적용요율코드 == "사업비메디케어공무원사망후유장해"
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해확장담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00121001' || 상품코드 == 'FA00121002' || 상품코드 == 'FA00120002' || 상품코드 == 'FA00096002' ) && (적용요율코드 == "사업비기본" || 적용요율코드 == "사업비면책일수" || 적용요율코드 == "치아담보면책일수")
    ){
        적용요율=(((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001' && 상품코드 != 'FA00120001'  && 상품코드 != 'FA00121001'  && 상품코드 != 'FA00121002' && 상품코드 != 'FA00096002' && 상품코드 != 'FA00120002' && (적용요율코드 == "사업비기본" || 적용요율코드 == "사업비면책일수" || 적용요율코드 == "치아담보면책일수")
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비산업재해입원일당"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(산업재해인상계수))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001' && 상품코드 != 'FA00120001'  && 상품코드 != 'FA00121001'  && 상품코드 != 'FA00121002' && 상품코드 != 'FA00096002' && 상품코드 != 'FA00120002' && 적용요율코드 == "사업비기본상해수술비"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(0.19))

    }

    if(적용요율코드 == "사업비자원봉사활동중상해입원일당담보"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비기본의료실비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(기본의료실비할증계수).subtract(RuleFunction.AMT(자기부담금조정계수)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 기본의료실비할증계수

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00121001' || 상품코드 == 'FA00120002' || 상품코드 == 'FA00096002' || 상품코드 == 'FA00121002') && 적용요율코드 == "사업비사망후유장해"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001'  && 상품코드 != 'FA00120001' && 상품코드 != 'FA00096002' && 상품코드 != 'FA00120002' && 적용요율코드 == "사업비사망후유장해"&& (담보코드 == "CFA10409" || 담보코드 == "CFA11131" || 담보코드 == "CFA11133")
    ){
        적용요율=((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해확장담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        LOGGER.debug("기본요율[ " + 기본요율 + "]")
        LOGGER.debug("고도후유장해할인율[ " + 고도후유장해할인율 + "]")
        LOGGER.debug("분할위험담보할인율[ " + 분할위험담보할인율 + "]")
        LOGGER.debug("단체계약적용요율[ " + 단체계약적용요율 + "]")
        LOGGER.debug("단기요율[ " + 단기요율 + "]")
        LOGGER.debug("장기일시납요율[ " + 장기일시납요율 + "]")
        LOGGER.debug("분납할증율[ " + 분납할증율 + "]")
        LOGGER.debug("상해3급할증율[ " + 상해3급할증율 + "]")
        LOGGER.debug("사업비합계할인율[ " + 사업비합계할인율 + "]")
        LOGGER.debug("상해확장담보할증율[ " + 상해확장담보할증율 + "]")
        LOGGER.debug("예정기초율전환계수[ " + 예정기초율전환계수 + "]")

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001' && 상품코드 != 'FA00120001'  && 상품코드 != 'FA00120002' && 상품코드 != 'FA00096002' && 적용요율코드 == "사업비사망후유장해" && (담보코드 != "CFA10409" && 담보코드 != "CFA11131" && 담보코드 != "CFA11133")
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if((상품코드 == 'FA00121001'  || 상품코드 == 'FA00121002') && 적용요율코드 == "사업비사망후유장해"&& (담보코드 == "CFA10409" || 담보코드 == "CFA11131" || 담보코드 == "CFA11133")
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해확장담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비사망후유장해"&& (담보코드 == "CFA10981" || 담보코드 == "CFA10980")
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(특수운전중상해단기율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비신주말사망후유장해"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(신주말할증율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비신주말의료실비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(의료실비할증계수합계).subtract(RuleFunction.AMT(기본의료실비할증계수)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(신주말할증율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 의료실비할증계수합계 - 기본의료실비할증계수

    }

    if(적용요율코드 == "사업비연구원사망후유장해"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(연구원할인율))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비연구원의료실비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(기본의료실비할증계수).subtract(RuleFunction.AMT(자기부담금조정계수)))).multiply(RuleFunction.AMT(연구원할인율))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 기본의료실비할증계수

    }

    if(적용요율코드 == "사업비연구원기타"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(연구원할인율))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비신체부위별후유장해확장"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(신체부위확장담보요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply((RuleFunction.AMT(후유장해담보적용율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비특약의료실비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(의료실비할증계수합계).subtract(RuleFunction.AMT(기본의료실비할증계수)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 의료실비할증계수합계 - 기본의료실비할증계수

    }

    if(적용요율코드 == "사업비스포츠"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(운동위험할증요율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비레저스포츠"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(운동위험할증요율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비스포츠배상책임"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(보상한도액인상계수).subtract(RuleFunction.AMT(자기부담금할인계수)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(단체할인율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비스포츠의료실비"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(가입금액할증계수).subtract(RuleFunction.AMT(자기부담금조정계수)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(운동위험할증요율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "여행국내스포츠"
    ){
        적용요율=((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))

    }

    if(적용요율코드 == "사업비여행국내해외"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비여행국내해외상해사망"
    ){
        적용요율=((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(사망후유장해할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행국내해외의료실비"
    ){
        적용요율=((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(의료실비할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비여행남북한"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행남북한배상책임"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(보상한도액인상계수)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행남북한상해사망"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(사망후유장해할증율합))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행남북한의료실비"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(의료실비할증율합))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행남북한특별비용"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(특별비용할증율합))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행남북한휴대품"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(가입금액수정계수))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(다수구매자할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(북한주민할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비여행배상책임"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(보상한도액인상계수)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "여행스포츠의료실비"
    ){
        적용요율=((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(가입금액할증계수).subtract(RuleFunction.AMT(자기부담금조정계수)))).multiply(RuleFunction.AMT(단기요율))

    }

    if(적용요율코드 == "사업비여행질병치료비"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(자기부담금할인율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비여행휴대품"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(가입금액수정계수))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비일상생활배상책임"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(보상한도액인상계수).subtract(RuleFunction.AMT(자기부담금할인계수)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        LOGGER.debug("기본요율 [ " + 기본요율)
        LOGGER.debug("보상한도액인상계수 [ "  + 보상한도액인상계수)
        LOGGER.debug("자기부담금할인계수 [ " + 자기부담금할인계수)
        LOGGER.debug("단기요율 [ " + 단기요율)
        LOGGER.debug("장기일시납요율 [ " + 장기일시납요율)
        LOGGER.debug("분납할증율 [ " + 분납할증율)
        LOGGER.debug("사업비합계할인율 [ " + 사업비합계할인율)
        LOGGER.debug("예정기초율전환계수 [ " + 예정기초율전환계수)
        LOGGER.debug("적용요율 [ " + 적용요율)

    }

    if(적용요율코드 == "실손의료비특약"
    ){
        적용요율=((((((((((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비치과비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비한방비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply((RuleFunction.AMT(해외여행실비특약전환율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(특수운동중실손의료비할증율_특약형)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(직무상선박탑승중실손의료비할증율_특약형)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(특수운전중실손의료비할증율_특약형)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(직장가입자할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(피부양자할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(여행중상해의료실비직업담보할증율_특약형))).multiply(RuleFunction.AMT(여행중의료실비1의운동담보할증율_특약형))).multiply(RuleFunction.AMT(100).add(RuleFunction.AMT(여행중의료실비2의운동담보할증율_특약형)))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(실손의료비상해확장담보할증률_3대비급여)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비입원의료비"
    ){
        적용요율=(((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(입원병실료차액담보할증율)).add(RuleFunction.AMT(기타비급여담보할증율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(입원의료비한방비급여추가할증률)).add(RuleFunction.AMT(입원의료비치과비급여추가할증률)))).multiply(RuleFunction.AMT(입원의료비보상비율))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(직장가입자할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(피부양자할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(단체할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비통원의료비"
    ){
        적용요율=(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(통원의료비담보할인율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(통원의료비한방추가담보할증율)).add(RuleFunction.AMT(통원의료비치과추가담보할증율)))).multiply(RuleFunction.AMT(통원의료비보상비율))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(단체할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비학교사망후유장해" && 담보코드 != "CFA10569"
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(학교할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비학교사망후유장해" && 담보코드 == "CFA10569"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비학교의료실비"
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(의료실비할증계수합계).subtract(RuleFunction.AMT(기본의료실비할증계수)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(학교할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 의료실비할증계수합계 - 기본의료실비할증계수

    }

    if(적용요율코드 == "할증요율"
    ){
        적용요율 = 0

    }

    if(적용요율코드 == "사업비항공기사망후유장해"
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(대중교통적용요율))).multiply(RuleFunction.AMT(탑승횟수))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비해외여행사망후유"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(사망후유장해할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비해외여행중여행취소"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비해외여행특별비용"
    ){
        적용요율=((((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(특별비용할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비해외의료실비"
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비행사종합상해사망"
    ){
        적용요율=(((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(사망후유장해할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))

    }

    if(적용요율코드 == "사업비행사종합의료실비"
    ){
        적용요율=((RuleFunction.AMT(기본요율).add(RuleFunction.AMT(의료실비할증율합))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비체육시설사망후유장해"
    ){
        적용요율=(((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(운동위험할증요율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))

    }

    if(적용요율코드 == "사업비체육시설의료실비"
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(기본의료실비할증계수).subtract(RuleFunction.AMT(자기부담금조정계수)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(운동위험할증요율)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))
        가입금액할증계수 = 기본의료실비할증계수

    }

    if(적용요율코드 == "사업비실손의료실비" && 상품코드 != 'FA00044001' && 상품코드 !='FA00044002'
    ){
        적용요율=((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비실손의료실비" && 상품코드 != 'FA00044001' && 상품코드 !='FA00044002' && (담보코드 == "CFA10946" || 담보코드 == "CFA10949" || 담보코드 == "CFA11412" || 담보코드 == "CFA11415")
    ){
        적용요율=((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비치과비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비한방비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(직장가입자할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(피부양자할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비실손의료실비_급여" && 상품코드 != 'FA00044001' && 상품코드 !='FA00044002'
    ){
        적용요율=(((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(직장가입자할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(피부양자할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(질병의료비출산확장할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비실손의료실비_비급여" && 상품코드 != 'FA00044001' && 상품코드 !='FA00044002'
    ){
        적용요율=((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비치과비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(입원의료비한방비급여추가할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(직장가입자할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(피부양자할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(질병의료비출산확장할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비실손의료실비" && (상품코드 == 'FA00044001' || 상품코드 =='FA00044002')
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비_급여" && (상품코드 == 'FA00044001' || 상품코드 =='FA00044002')
    ){
        적용요율=(((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비_비급여" && (상품코드 == 'FA00044001' || 상품코드 =='FA00044002')
    ){
        적용요율=((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if((적용요율코드 == "사업비실손의료실비" || 적용요율코드 == "사업비실손의료실비_급여" || 적용요율코드 == "사업비실손의료실비_비급여") && (담보코드 =="CFA10946" || 담보코드 =="CFA10947" || 담보코드 =="CFA10948" || 담보코드 =="CFA11412" || 담보코드 =="CFA11413" || 담보코드 =="CFA11414" || 담보코드 =="CFA11800" || 담보코드 =="CFA11802")/* 특수운동, 특수운전 의료비할증*/
    ){
        적용요율=((((RuleFunction.AMT(적용요율)).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(특수운동중실손의료비할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(특수운전중실손의료비할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(직무상선박탑승중실손의료비할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(실손의료비상해확장담보할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "사업비실손의료실비_해외여행_상해_급여"
    ){
        적용요율=ROUNDDOWN(((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(상해전환율_해외여행_급여))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(여행중상해의료실비직업담보할증율))).multiply(RuleFunction.AMT(여행중의료실비1의운동담보할증율))).multiply(RuleFunction.AMT(100).add(RuleFunction.AMT(여행중의료실비2의운동담보할증율)))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수)),1)
        LOGGER.debug("적용요율:"+적용요율)
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비_해외여행_질병_급여"
    ){
        적용요율=ROUNDDOWN(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(질병전환율_해외여행_급여))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(건강보험비가입자할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수)),1)
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비_해외여행_상해_비급여"
    ){
        적용요율=ROUNDDOWN((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(상해전환율_해외여행_비급여))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(여행중상해의료실비직업담보할증율))).multiply(RuleFunction.AMT(여행중의료실비1의운동담보할증율))).multiply(RuleFunction.AMT(100).add(RuleFunction.AMT(여행중의료실비2의운동담보할증율)))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수)),1)
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비_해외여행_질병_비급여"
    ){
        적용요율=ROUNDDOWN((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(질병전환율_해외여행_비급여))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(의료급여수급권자의료비할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수)),1)
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비실손의료실비"
    ){
        if(
            적용요율>0&&적용요율<1
        ){
            적용요율=1
        }

    }

    if(적용요율코드 == "사업비해외실손의료실비"
    ){
        적용요율=((ROUNDDOWN(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(여행중상해의료실비직업담보할증율))).multiply(RuleFunction.AMT(여행중의료실비1의운동담보할증율))).multiply(RuleFunction.AMT(100).add(RuleFunction.AMT(여행중의료실비2의운동담보할증율)))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(해외의료비상해자기부담금할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(천재위험담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))),4)).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비해외장기체류실손의료실비"
    ){
        적용요율=ROUNDDOWN(((((((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(여행중상해의료실비직업담보할증율))).multiply(RuleFunction.AMT(여행중의료실비1의운동담보할증율))).multiply(RuleFunction.AMT(100).add(RuleFunction.AMT(여행중의료실비2의운동담보할증율)))).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(해외의료비상해자기부담금할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(천재위험담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(해외상해의료비가입금액계수))).divide(RuleFunction.AMT(청약일자기준환율), 20, BigDecimal.ROUND_DOWN),4)

    }

    if(적용요율코드 == "사업비해외질병실손의료실비"
    ){
        적용요율=(((ROUNDDOWN((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(천재위험담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))),4)).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(해외의료비질병자기부담금할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(적용요율코드 == "사업비해외장기체류질병실손의료실비"
    ){
        적용요율=ROUNDDOWN(((((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(천재위험담보할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(해외의료비질병자기부담금할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))).multiply(RuleFunction.AMT(해외질병의료비가입금액계수))).divide(RuleFunction.AMT(청약일자기준환율), 20, BigDecimal.ROUND_DOWN),4)

    }

    if(적용요율코드 == "사업비기본" && (담보코드 == "CFA10411" || 담보코드 == "CFA11606" || 담보코드 == "CFA11407")
    ){
        적용요율=(RuleFunction.AMT(적용요율)).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해확장담보24시간상해할증률)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))

    }

    if(적용요율코드 == "치아위험담보"
    ){
        적용요율=((ROUNDDOWN((((((RuleFunction.AMT(기본요율)).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(365).subtract(PARSEINT(RuleFunction.AMT(면책일수))))).divide(RuleFunction.AMT(365), 20, BigDecimal.ROUND_DOWN),7)).multiply(RuleFunction.AMT(예정기초율전환계수))).multiply(RuleFunction.AMT(장기일시납요율))

    }

    if(최종보험료코드 == "보험료"
    ){
        최종보험료=ROUNDDOWN(RuleFunction.AMT(적용요율),보험료자리수)

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001'  && 상품코드 != 'FA00120001' && 상품코드 != 'FA00096002' && 상품코드 != 'FA00120002' && 최종보험료코드 == "요율"
    ){
        최종보험료=ROUNDDOWN(((RuleFunction.AMT(기본보험료)).multiply(RuleFunction.AMT(가입금액))).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN),보험료자리수)

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' ||  상품코드 == 'FA00120001' || 상품코드 == 'FA00096002' || 상품코드 == 'FA00120002') && (적용요율코드 == "사업비기본" || 적용요율코드 == "사업비면책일수" || 적용요율코드 == "치아담보면책일수")
    ){
        기본보험료=ROUNDDOWN(RuleFunction.AMT(기본보험료),보험료자리수)
        최종보험료=ROUNDDOWN((((RuleFunction.AMT(기본보험료)).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))),보험료자리수)

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00120002' || 상품코드 == 'FA00096002') && 적용요율코드 == "사업비사망후유장해"
    ){
        기본보험료=ROUNDDOWN(RuleFunction.AMT(기본보험료),보험료자리수)
        최종보험료=ROUNDDOWN((((((((RuleFunction.AMT(기본보험료)).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(고도후유장해할인율)))).multiply(RuleFunction.AMT(1).subtract(RuleFunction.AMT(분할위험담보할인율)))).multiply(RuleFunction.AMT(단체계약적용요율))).multiply(RuleFunction.AMT(단기요율))).multiply(RuleFunction.AMT(1).add(RuleFunction.AMT(분납할증율)))).multiply(RuleFunction.AMT(1).add((RuleFunction.AMT(상해3급할증율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN)))).multiply(RuleFunction.AMT(1).subtract((RuleFunction.AMT(사업비합계할인율)).divide(RuleFunction.AMT(100), 20, BigDecimal.ROUND_DOWN))),보험료자리수)

    }

    if(최종보험료코드 == "할증요율"
    ){
        최종보험료 = 0

    }

    if(상품코드 != 'FA00096001' && 상품코드 != 'FA00102001' && 상품코드 != 'FA00116001'  && 상품코드 != 'FA00120001' && 상품코드 != 'FA00096002' && 상품코드 != 'FA00120002' && 최종보험료코드 == "요율인원" && 담보코드 != "CFA11019" && 적용요율코드 != "사업비면책일수" && 적용요율코드 != "치아담보면책일수"
    ){
        최종보험료=(ROUNDDOWN(((RuleFunction.AMT(적용요율)).multiply(RuleFunction.AMT(가입금액))).divide(RuleFunction.AMT(가입금액단위), 20, BigDecimal.ROUND_DOWN),보험료자리수)).multiply(RuleFunction.AMT(인원수))
        LOGGER.debug("스포츠레저 일당담보 [ " + 최종보험료 + "]")

    }

    if((상품코드 == 'FA00096001' || 상품코드 == 'FA00102001' || 상품코드 == 'FA00116001' || 상품코드 == 'FA00120001' || 상품코드 == 'FA00096002' || 상품코드 == 'FA00120002') && 최종보험료코드 == "요율인원" && 적용요율코드 != "사업비면책일수" && 적용요율코드 != "치아담보면책일수"
    ){
        최종보험료=ROUNDDOWN((RuleFunction.AMT(최종보험료)).multiply(RuleFunction.AMT(인원수)),보험료자리수)

    }

    if((적용요율코드 == "사업비면책일수" || 적용요율코드 == "치아담보면책일수") && 최종보험료코드 == "요율인원"
    ){
        최종보험료=(ROUNDDOWN(RuleFunction.AMT(적용요율),자리수)).multiply(RuleFunction.AMT(인원수))

    }

    if(담보코드 == "CFA11019"  && 최종보험료코드 == "요율인원"
    ){
        최종보험료=(ROUNDDOWN(RuleFunction.AMT(적용요율),보험료자리수)).multiply(RuleFunction.AMT(인원수))

    }

    if(최종보험료코드 == "보험료인원"
    ){
        최종보험료=(ROUNDDOWN(RuleFunction.AMT(적용요율),보험료자리수)).multiply(RuleFunction.AMT(인원수))

    }

    if(화폐코드 == "WON"
    ){
        기본보험료=ROUNDDOWN(RuleFunction.AMT(기본보험료),1)
        최종보험료=ROUNDDOWN(RuleFunction.AMT(최종보험료),1)

    }

    if(화폐코드 != "WON"
    ){
        기본보험료=ROUNDDOWN(RuleFunction.AMT(기본보험료),3)
        최종보험료=ROUNDDOWN(RuleFunction.AMT(최종보험료),3)

    }

    if(보험료관리여부 == "0"
    ){
        기본보험료 = 0
        최종보험료 = 0

    }
    if(
        기본요율<0
    ){
        기본요율=0
    }


    if(
        기본보험료<0
    ){
        기본보험료=0
    }


    if(
        적용요율<0
    ){
        적용요율=0
    }


    if(
        최종보험료<0
    ){
        최종보험료=0
    }


    if(
        가입금액할증계수<0
    ){
        가입금액할증계수=0
    }

    __hpasRuleResult = {
        기본요율 : 기본요율 , 기본보험료 : 기본보험료 , 적용요율 : 적용요율 , 가입금액할증계수 : 가입금액할증계수 , 최종보험료 : 최종보험료 , 상해급수할인할증율 : 상해급수할인할증율
    }

    return RESULT(__hpasRuleResult);
};