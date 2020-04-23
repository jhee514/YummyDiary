import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import { testlogin } from "../modules/dummy";
import { a_EmailCheck } from "../modules/regCheck";
import axios from "axios";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #000000",
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5vw",
    height: "100%",
  },
  title: {
    fontSize: "20px",
    color: "black",
    paddingBottom: "10px",
  },
  subtitle: {
    fontSize: "12px",
    textAlign: "center"
  },
  line: {
    borderColor: "#FAC60E",
    border: "solid 1px",
    width: "30%"
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vh 2vw 4vh 2vw",
    //border:"2px solid #000000",
    backgroundColor: "#FAC60E",
    width: "30%",
    height: "100%",
    margin: "2vh"
  },
  textboxNoLine: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0vh 2vw 0vh 2vw",
    width: "30%",
    height: "100%",
    margin: "2vh"
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%",
  },
  submitbutton: {
    // marginTop: "1vw",
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
  signupbutton: {
    marginBottom: "1vw",
    width: "95%",
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

const Login = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputChangeEvent = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const signupClickEvent = (event) => {
    props.history.push("/signup");
  };

  const submitClickEvent = async (event) => {
    if (
      a_EmailCheck(input.email)
    ) {
    const result = await axios
      .post("http://localhost:8000/token/", input)
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        props.history.push("/");
      })
      .catch((error) => {
        alert("올바르지 않은 입력입니다.");
      });
    } else {
      alert("정확히 입력해주세요");
    }
  };

  return (
    <Box className={classes.root}>
      <b className={classes.title}>LOGIN</b>
      <hr className={classes.line}></hr>
      <p >오늘은 어떤 식사가 기다리고 있을까요? :)</p>
      <Box className={classes.textbox} boxShadow={3}>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          name="email"
          variant="filled"
          onChange={inputChangeEvent}
          error={
            !(input.email === undefined || input.email === "") &&
            input.email !== undefined && !a_EmailCheck(input.email)
          }
          helperText={
            !(input.email === "" || input.email === undefined) &&
            !a_EmailCheck(input.email)
              ? "아이디는 이메일 형식입니다."
              : ""
          }
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          name="password"
          variant="filled"
          onChange={inputChangeEvent}
          type="password"
        />
        <Button
          className={classes.submitbutton}
          onClick={submitClickEvent}
          variant="outlined"
        >
          login
        </Button>
        
      </Box>
      <br/>
      <b>아직 YUMMY DIARY의 회원이 아니신가요?</b>
      <p className={classes.subtitle}>회원가입을 통해 더 많은 정보와 혜택을 받아가세요!</p>

      <Box className={classes.textboxNoLine}>
        <Button
          className={classes.signupbutton}
          onClick={signupClickEvent}
        >
          SIGNUP
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
