import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { a_PwCheck, a_AgeCheck, a_EmailCheck } from "../modules/regCheck";
import axios from "axios";
import { url } from "../modules/config";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#FFFFFF"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #000000"
    }
  }
})(TextField);

const CssToggleButton = withStyles({
  root: {
    border: "none",
    "&.MuiToggleButton-root.Mui-selected": {
      color: "white"
    }
  }
})(ToggleButton);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5vh",
    height: "100%"
  },
  title: {
    fontSize: "25px",
    color: "black",
    borderBottom: "solid 2px #FAC60E",
    marginBottom: "10px"
  },
  subtitle: {
    margin: "0vh 0vw 2vh 0vw"
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vh 2vw 4vh 2vw",
    backgroundColor: "#FAC60E",
    width: "30%",
    margin: "1vh",
    borderRadius: "5px"
  },
  textboxNoLine: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    borderTop: "solid 1px #bdbdbd",
    margin: "3vh 0vw",
    padding: "2vh 0vw"
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%",
    '& label.Mui-focused': {
      color: "#fafafa"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        color: '#fafafa'
      },
      '&:hover fieldset': {
        borderColor: "#FBD85A",
        color: "#fafafa"
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FBD85A',
        color: '#fafafa'
      },
    },
  },

  submitbutton: {
    marginBottom: "1vw",
    width: "95%",
    color: "white",
    borderColor: "#FBD85A",
    border: "solid 2px",
    '&:hover': {
      backgroundColor: "#FBD85A",
      color: "rgb(117, 122, 122)"
    }
  },
  loginbutton: {
    marginBottom: "1vw",
    width: "85%",
    color: "#FAC60E",
    borderColor: "#FAC60E",
    border: "solid 2px",
    '&:hover': {
      borderColor: "#FAC60E",
      backgroundColor: "#FAC60E",
      color: "white"
    }
  },
}));

const SignUp = props => {
  const classes = useStyles();
  const [input, setInput] = useState({
    "email": "",
    "password": "",
    "password_check": "",
    "birth_year": "",
    "gender": "",
    "tags": [],
  });

  const tag_choice = {
    5963: "카페", 5897:"치킨", 5992:"커피", 3764:"술집",
    3060:"삼겹살", 5410:"족발", 1763:"떡볶이", 6430:"피자",
    6897:"횟집", 5581:"짬뽕", 1493:"돈까스", 6241:"파스타",
    6528:"한우", 349:"고기집", 5972:"칼국수", 5481:"중국집", 2041:"맥주"
  }

  const inputChangeEvent = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const checkChangeEvent = event => {
    console.log(event.currentTarget.value)
    setInput({ ...input, gender: event.currentTarget.value });
  };
  const submitClickEvent = async event => {
    console.log("input")
    console.log(input)
    if (
      a_EmailCheck(input.email) &&
      a_PwCheck(input.password) &&
      input.password === input.password_check &&
      a_AgeCheck(input.birth_year) &&
      input.gender !== ""
    ) {
      const result = await axios.post(url+'/accounts/signup/',input).then(data=>{
        alert("가입되었습니다")
        props.history.push("/login");
      }).catch(error=>{
        alert("다시 입력해주세요")
      })
    } else {
      alert("정확히 입력해주세요");
    }
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      submitClickEvent();
    }
  };

  const loginClickEvent = (event) => {
    props.history.push("/login");
  };
  
  return (
    <Box className={classes.root} onKeyPress={pressEnter}>
      <b className={classes.title}>SIGNUP</b>
      <p className={classes.subtitle}>회원님에 대해 알려주세요 :)</p>
      <Box className={classes.textbox} boxShadow={3}>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          variant="outlined"
          name="email"
          onChange={inputChangeEvent}
          error={
            !(input.email === undefined || input.email === "") &&
            input.email !== undefined && !a_EmailCheck(input.email)
          }
          helperText={
            !(input.email === "" || input.email === undefined) &&
            !a_EmailCheck(input.email)
              ? "올바른 이메일 형식이 아닙니다"
              : ""
          }
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          variant="outlined"
          name="password"
          onChange={inputChangeEvent}
          type="password"
          error={
            !(input.password === undefined || input.password === "") &&
            !a_PwCheck(input.password)
          }
          helperText={
            !(input.password === undefined || input.password === "") &&
            !a_PwCheck(input.password)
              ? "패스워드는 영문자, 숫자, 특수문자를 포함하여 3자리 이상 15자리 이하의 길이여야 합니다"
              : ""
          }
          
        />
        {a_PwCheck(input.password) ? 
          <CssTextField
            className={classes.textfield}
            label="비밀번호 재입력"
            variant="outlined"
            name="password_check"
            onChange={inputChangeEvent}
            type="password"
            error={
              !(input.password_check === undefined || input.password_check === "") && input.password!=input.password_check
            }
            helperText={
              ((!(input.password_check === undefined || input.password_check === "") && input.password!=input.password_check)
                ? "비밀번호가 일치하지 않습니다"
                : "")
            }
          />
        : null}
        
        <Box
          display="flex"
          margin={0}
          justifyContent="flex-start"
          width="95%"
          flexWrap="wrap"
        >
          <Box width="70%">
            <CssTextField
              className={classes.textfield}
              label="출생 연도"
              name="birth_year"
              variant="outlined"
              onChange={inputChangeEvent}
              fullWidth
              error={
                !(input.birth_year === undefined || input.birth_year === "") &&
                !a_AgeCheck(input.birth_year)
              }
              helperText={
                !(input.birth_year === undefined || input.birth_year === "") &&
                !a_AgeCheck(input.birth_year)
                  ? "태어난 연도는 1900년 이상 올해년도 이하로 입력해주세요!"
                  : ""
              }
            />
          </Box>
          <Box
            display="flex"
            width="30%"
            paddingLeft={1}
            justifyContent="space-between"
            alignItems="flex"
          >
            <Box>
              <CssToggleButton
                value={0}
                selected={input.gender == 0}
                onChange={checkChangeEvent}
                size="large"
                className={classes.toggleButton}
              >
                남
              </CssToggleButton>
            </Box>
            <Box>
              <CssToggleButton
                value={1}
                selected={input.gender == 1}
                onChange={checkChangeEvent}
                size="large"
                className={classes.toggleButton}
              >
                여
              </CssToggleButton>
            </Box>
          </Box>
        </Box>
        <Button
          className={classes.submitbutton}
          onClick={submitClickEvent}
        >
          SIGNUP
        </Button>
      </Box>

      <Box className={classes.textboxNoLine}>
        <b>이미 YUMMY DIARY의 회원이신가요?</b>
        <p className={classes.subtitle}>YUMMY DIARY 회원으로 입장해주세요!</p>
        <Button
          className={classes.loginbutton}
          onClick={loginClickEvent}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
