import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {
  a_PwCheck,
  a_AgeCheck,
  a_EmailCheck,
} from "../modules/regCheck"


const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(70,190,75,0.9)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(70,190,75,0.9)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(70,190,75,0.9)"
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,255,0,0.9)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(70,190,75,0.9)",
        
      }
    },
    "& label.MuiInputLabel-outlined": {
      color: "rgba(70,190,75,0.9)"
    }
  }
})(TextField);
const CssToggleButton = withStyles({
  root:{
    border : "none",
    "&.MuiToggleButton-root.Mui-selected" :{
      color: "rgba(70,190,75,0.9)",
    },
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
    padding: "1vw",
    paddingTop: "4vw",
    paddingBottom: "4vw",
    //border:"2px solid #000000",
    backgroundColor: "rgba(0,0,0,0.2)",
    height: "100%",
    width: "30%"
  },
  textfield: {
    margin: "1vw 0vw 0vw 0vw",
    width: "100%"
  },
  title: {
    marginBottom: "2vw",
    color: "rgba(70,190,75,0.9)"
  },
  submitbutton : {
    marginTop : "2vw",
    width : "100%",
    height : "100%"

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
    if(a_EmailCheck(input.a_email) && a_AgeCheck(input.a_age) && a_PwCheck(input.a_pw) && input.a_gender !==""){
      console.log(input)
      props.history.push("/")
    }else{
      alert("정확히 입력해주세요")
    }
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
        <Typography variant="h4" className={classes.title}>
          회원가입
        </Typography>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          variant="outlined"
          name="a_email"
          onChange={inputChangeEvent}
          error={
            !(input.a_email === undefined || input.a_email === "") &&
              (input.a_email !== undefined && !a_EmailCheck(input.a_email))
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
          variant="outlined"
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
              variant="outlined"
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
        <Button className={classes.submitbutton} onClick={submitclickevent}>제출</Button>
      </Box>
    </Box>
  );
};
export default SignUp;
