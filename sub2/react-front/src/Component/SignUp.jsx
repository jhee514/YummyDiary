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
    a_email: "",
    a_pw: "",
    a_age: "",
    a_gender: ""
  });
  const inputChangeEvent = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(event.target.name + " : " + event.target.value);
  };
  const checkChangeEvent = event => {
    setInput({ ...input, a_gender: event.currentTarget.value });
    //console.log(event.currentTarget.value);
  };
  const submitclickevent = event => {
    if (
      a_EmailCheck(input.a_email) &&
      a_AgeCheck(input.a_age) &&
      a_PwCheck(input.a_pw) &&
      input.a_gender !== ""
    ) {
      console.log(input);
      props.history.push("/");
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
          name="a_email"
          onChange={inputChangeEvent}
          error={
            !(input.a_email === undefined || input.a_email === "") &&
            input.a_email !== undefined && !a_EmailCheck(input.a_email)
          }
          helperText={
            !(input.a_email === "" || input.a_email === undefined) &&
            !a_EmailCheck(input.a_email)
              ? "올바른 이메일 형식이 아닙니다"
              : ""
          }
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          variant="filled"
          name="a_pw"
          onChange={inputChangeEvent}
          type="password"
          error={
            !(input.a_pw === undefined || input.a_pw === "") &&
            !a_PwCheck(input.a_pw)
          }
          helperText={
            !(input.a_pw === undefined || input.a_pw === "") &&
            !a_PwCheck(input.a_pw)
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
              name="a_age"
              variant="filled"
              onChange={inputChangeEvent}
              fullWidth
              error={
                !(input.a_age === undefined || input.a_age === "") &&
                !a_AgeCheck(input.a_age)
              }
              helperText={
                !(input.a_age === undefined || input.a_age === "") &&
                !a_AgeCheck(input.a_age)
                  ? "나이는 1살이상 120살 미만으로 입력해주세요"
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
              value="남"
              selected={input.a_gender === "남"}
              onChange={checkChangeEvent}
              size="large"
              className={classes.toggleButton}
            >
              남
            </CssToggleButton>

            <CssToggleButton
              value="여"
              selected={input.a_gender === "여"}
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
