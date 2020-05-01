export const testuser1 = {
  a_email: "id1@ssafy.com",
  a_pw: "pw1!",
  a_gender: "여",
  a_birth: "1999",
};

export const testlogin = (input) => {
  const validation =
    input.a_email === testuser1.a_email && input.a_pw === testuser1.a_pw;
  const submitform = {
    data: validation ? testuser1 : {},
    message: validation
      ? "정상적으로 로그인 되었습니다"
      : "이메일 비밀번호를 확인바랍니다",
    validation: validation,
  };
  return submitform;
};

export const carddata = [
  {
    no: 1,
    storeName: "오목집",
    content: "광화문 최고의 맛집",
    rating: "4.5",
    url: "/detail",
  },
  { no: 2, storeName: "2번네", content: "2번음식 맛잇", rating: "3.5" },
  { no: 3, storeName: "3번네", content: "3번음식 맛잇", rating: "2.3" },
  { no: 4, storeName: "4번네", content: "4번음식 맛잇", rating: "5.0" },
  { no: 5, storeName: "5번네", content: "5번음식 맛잇", rating: "4.9" },
  { no: 6, storeName: "6번네", content: "6번음식 맛잇", rating: "3.8" },
];

export const testSearch = {
  categories: {
    관심사: { c_no: 1, c_name: "관심사" },
    성별: { c_no: 2, c_name: "성별" },
    나이: { c_no: 3, c_name: "나이" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "검색조건",
      categoryIds: ["관심사", "성별", "나이"],
    },
    columnOrder: ["column-1"],
  },
};
export const hashdata = [
  {
    no: 1,
    storeName: "1번네",
    content: "1번음식 맛잇",
    rating: "4.5",
    review_cnt: "9",
  },
  {
    no: 2,
    storeName: "2번네",
    content: "2번음식 맛잇",
    rating: "3.5",
    review_cnt: "90",
  },
  {
    no: 3,
    storeName: "3번네",
    content: "3번음식 맛잇",
    rating: "2.3",
    review_cnt: "49",
  },
  {
    no: 4,
    storeName: "4번네",
    content: "4번음식 맛잇",
    rating: "5.0",
    review_cnt: "59",
  },
  {
    no: 5,
    storeName: "5번네",
    content: "5번음식 맛잇",
    rating: "4.9",
    review_cnt: "27",
  },
  {
    no: 6,
    storeName: "6번네",
    content: "6번음식 맛잇",
    rating: "3.8",
    review_cnt: "999",
  },
];

export const storedata = [
  {
    no: 1,
    storeName: "일계진미",
    content: "닭갈비1",
    rating: "5.0",
    review_cnt: "10",
  },
  {
    no: 2,
    storeName: "이계진미",
    content: "닭갈비2",
    rating: "1.0",
    review_cnt: "12",
  },
  {
    no: 3,
    storeName: "삼계진미",
    content: "닭갈비3",
    rating: "2.0",
    review_cnt: "36",
  },
  {
    no: 4,
    storeName: "사계진미",
    content: "닭갈비4",
    rating: "3.0",
    review_cnt: "98",
  },
  {
    no: 5,
    storeName: "오계진미",
    content: "닭갈비5",
    rating: "4.0",
    review_cnt: "193",
  },
  {
    no: 6,
    storeName: "육계진미",
    content: "닭갈비6",
    rating: "1.5",
    review_cnt: "10023",
  },
];

export const storedetail = {
  no: 1,
  storeName: "오목점 광화문점",
  tags: ["광화문", "족발", "보쌈"],
  menuList: [
    { menuNo: 1, menuName: "족발 中", menuPrice: "37000" },
    { menuNo: 2, menuName: "족발 大", menuPrice: "42000" },
    { menuNo: 3, menuName: "냉채족발", menuPrice: "38000" },
    { menuNo: 4, menuName: "매운족발", menuPrice: "38000" },
    { menuNo: 5, menuName: "오목집계란말이", menuPrice: "15000" },
    { menuNo: 6, menuName: "쟁반막국수", menuPrice: "15000" },
    { menuNo: 7, menuName: "부추전", menuPrice: "15000" },
    { menuNo: 8, menuName: "꽃게탕 추가", menuPrice: "15000" },
    { menuNo: 9, menuName: "버섯칼국수", menuPrice: "7000" },
    { menuNo: 10, menuName: "막국수(물/비빔)", menuPrice: "8000" },
    { menuNo: 11, menuName: "누룽지", menuPrice: "4000" },
    { menuNo: 12, menuName: "주먹밥", menuPrice: "3000" },
  ],
  rating: 3.6,
  open: ["월-금오전 11시 - 오후 11시", "토/일오후 4시 - 오후 10시"],
  address: "서울특별시 종로구 공평동 125-1",
};

export const taglist = [
  { tagNo: 1, tagName: "한식" },
  { tagNo: 2, tagName: "중식" },
  { tagNo: 3, tagName: "일식" },
  { tagNo: 4, tagName: "양식" },
  { tagNo: 5, tagName: "분위기 좋은" },
  { tagNo: 6, tagName: "양 많은" },
  { tagNo: 7, tagName: "가성비 좋은" },
  { tagNo: 8, tagName: "저렴한" },
  { tagNo: 9, tagName: "서비스 좋은" },
  { tagNo: 10, tagName: "맛있는" },
];

export const top100Tags = [
  "카페",
  "치킨",
  "커피",
  "술집",
  "삼겹살",
  "족발",
  "떡볶이",
  "피자",
  "횟집",
  "짬뽕",
  "청주",
  "돈까스",
  "파스타",
  "한우",
  "고기집",
  "칼국수",
  "중국집",
  "맥주",
  "곱창",
  "레스토랑",
  "갈비",
  "이자카야",
  "김밥",
  "소고기",
  "서교동",
  "닭갈비",
  "동면",
  "돼지갈비",
  "보쌈",
  "한정식",
  "샤브샤브",
  "부대찌개",
  "경남",
  "감자탕",
  "냉면",
  "국수",
  "쭈꾸미",
  "역삼동",
  "빵집",
  "초밥",
  "참치",
  "쌀국수",
  "논현동",
  "닭발",
  "장어",
  "분식",
  "막창",
  "스테이크",
  "마카롱",
  "춘천",
  "양꼬치",
  "김치찌개",
  "순대국",
  "탕수육",
  "밥집",
  "삼계탕",
  "치즈",
  "우동",
  "우동",
  "심곡동",
  "진주",
  "해장국",
  "교동",
  "국밥",
  "장항동",
  "디저트",
  "달성군",
  "추어탕",
  "아구찜",
  "여수",
  "고깃집",
  "아이스크림",
  "흑돼지",
  "짜장면",
  "매운탕",
  "의정부동",
  "순천",
  "막국수",
  "닭",
  "케이크",
  "낙지",
  "만두",
  "정자동",
  "김포",
  "물회",
  "부천",
  "생고기",
  "빙수",
  "창녕군",
  "브런치카페",
  "오리고기",
  "샌드위치",
  "여의도동",
  "구월동",
  "찜닭",
  "치맥",
  "가산동",
  "수택동",
  "브런치",
  "버거",
];
