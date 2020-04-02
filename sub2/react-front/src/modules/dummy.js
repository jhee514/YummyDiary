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