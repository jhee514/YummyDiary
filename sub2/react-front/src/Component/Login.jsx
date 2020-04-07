import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import { testlogin } from "../modules/dummy";

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
    marginBottom: "1vw",
    width: "95%",
    height: "100%"
  },
 
  submitbutton: {
    marginTop: "2vw",
    marginBottom: "1vw",
    width: "95%",
    backgroundColor: "rgb(117, 122, 122)",
    color:"white"
  },
  signupbutton: {
    marginBottom: "1vw",
    width: "95%",
    backgroundColor: "rgb(117, 122, 122)",
    color:"white"
  }
}));

const Login = props => {
  const classes = useStyles();
  const [input, setInput] = useState({
    a_email: "",
    a_pw: ""
  });
  const inputChangeEvent = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(event.target.name + " : " + event.target.value);
  };

  const signupClickEvent = event => {
    props.history.push("/signup");
  };

  const submitClickEvent = event => {
    const result = testlogin(input);
    alert(result.message);
    if (result.validation) {
      sessionStorage.setItem("id", result.data.a_email);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          name="a_email"
          variant="filled"
          onChange={inputChangeEvent}
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          name="a_pw"
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
