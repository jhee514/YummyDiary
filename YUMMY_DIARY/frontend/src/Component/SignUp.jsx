import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { a_PwCheck, a_AgeCheck, a_EmailCheck } from "../modules/regCheck";
import axios from "axios";

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
    marginTop: "6vw",
    height: "100%"
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vw 2vw 4vw 2vw",
    //border:"2px solid #000000",
    backgroundColor: "#FAC60E",
    width: "30%",
    height: "100%"
  },
  textfield: {
    margin: "1vw 0vw 0vw 0vw",
    width: "100%"
  },

  submitbutton: {
    marginTop: "2vw",
    marginBottom: "1vw",
    width: "100%",
    backgroundColor: "rgb(117, 122, 122)",
    color: "white"
  }
}));

const SignUp = props => {
  const classes = useStyles();
  const [input, setInput] = useState({
    "email": "",
    "password": "",
    "birth_year": "",
    "gender": ""
  });
  const inputChangeEvent = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const checkChangeEvent = event => {
    console.log(event.currentTarget.value)
    setInput({ ...input, gender: event.currentTarget.value });
  };
  const submitclickevent = async event => {
    if (
      a_EmailCheck(input.email) &&
      a_AgeCheck(input.birth_year) &&
      a_PwCheck(input.password) &&
      input.gender !== ""
    ) {
      const result = await axios.post('http://127.0.0.1:8000/accounts/signup/',input).then(data=>{
        alert("가입되었습니다")
        props.history.push("/login");
      }).catch(error=>{
        alert("다시 입력해주세요")
      })
    } else {
      alert("정확히 입력해주세요");
    }
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          variant="filled"
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
          variant="filled"
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
              ? "패스워드는 첫째자리는 영문자로 시작하고 영문자, 숫자, 특수문자를 포함해야 하며, 3자리 이상 15자리 이하의 길이여야 합니다"
              : ""
          }
        />
        <Box
          display="flex"
          margin={0}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          width="100%"
          flexWrap="wrap"
        >
          <Box width="60%">
            <CssTextField
              className={classes.textfield}
              label="나이"
              name="birth_year"
              variant="filled"
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
            width="40%"
            paddingLeft={1}
            justifyContent="space-between"
          >
            <CssToggleButton
              value={0}
              selected={input.gender == 0}
              onChange={checkChangeEvent}
              size="large"
              className={classes.toggleButton}
            >
              남
            </CssToggleButton>

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
        <Button className={classes.submitbutton} size="large" onClick={submitclickevent}>
          제출
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
