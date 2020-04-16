const a_IdReg = /^[a-z][a-z0-9]{2,14}$/;
const a_PwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,15}$/;
const a_NameReg = /^[가-힣]{2,4}$|^[a-zA-Z]{2,15}$/;
const a_EmailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const s_AmountReg = /^[1-9][0-9]{0,2}$/;
const a_AgeReg = /^[1-2][0-9]{3}$/;


export const a_IdCheck = a_id => {
  return a_IdReg.test(a_id);
} 

export const a_PwCheck = a_pw => {
  return a_PwReg.test(a_pw);
} 

export const a_NameCheck = a_name => {
  return a_NameReg.test(a_name);
} 

export const a_EmailCheck = a_email => {
  return a_EmailReg.test(a_email);
} 

export const a_AgeCheck = a_age => {
  return a_AgeReg.test(a_age) && (Number(a_age)>=1900)
}

export const s_AmountCheck = s_amount => {
  return s_AmountReg.test(s_amount);
}

