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
    marginTop: "6vw",
    height: "100%",
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vw 2vw 4vw 2vw",
    //border:"2px solid #000000",
    backgroundColor: "#FAC60E",
    width: "30%",
    height: "100%",
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%",
  },

  submitbutton: {
    marginTop: "2vw",
    marginBottom: "1vw",
    width: "95%",
    backgroundColor: "rgb(117, 122, 122)",
    color: "white",
  },
  signupbutton: {
    marginBottom: "1vw",
    width: "95%",
    backgroundColor: "rgb(117, 122, 122)",
    color: "white",
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
      <Box className={classes.textbox}>
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
          size="large"
        >
          제출
        </Button>
        <Button
          className={classes.signupbutton}
          onClick={signupClickEvent}
          size="large"
        >
          SIGNUP
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
