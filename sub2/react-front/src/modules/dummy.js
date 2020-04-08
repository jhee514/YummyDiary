export const testuser1 = {
  a_email : "id1@ssafy.com",
  a_pw : "pw1!",
  a_gender : "여",
  a_birth : "1999"
}

export const testlogin = input =>{
  const validation = (input.a_email===testuser1.a_email) && (input.a_pw === testuser1.a_pw)
  const submitform = {
    data : validation ? testuser1 : {},
    message : validation ? "정상적으로 로그인 되었습니다" : "이메일 비밀번호를 확인바랍니다",
    validation : validation
  }
  return submitform;
}

export const carddata = [
  {no : 1, storeName : "1번네", content : "1번음식 맛잇", rating : "4.5"},
  {no : 2, storeName : "2번네", content : "2번음식 맛잇", rating : "3.5"},
  {no : 3, storeName : "3번네", content : "3번음식 맛잇", rating : "2.3"},
  {no : 4, storeName : "4번네", content : "4번음식 맛잇", rating : "5.0"},
  {no : 5, storeName : "5번네", content : "5번음식 맛잇", rating : "4.9"},
  {no : 6, storeName : "6번네", content : "6번음식 맛잇", rating : "3.8"},
]

export const testSearch = {
  categories : {
    '관심사' : {c_no : 1, c_name : '관심사'},
    '성별' : {c_no : 2, c_name : '성별'},
    '나이' : {c_no : 3, c_name: '나이'},
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      title: '검색조건',
      categoryIds: ['관심사','성별','나이']
    },
    columnOrder: ['column-1']
  }
}