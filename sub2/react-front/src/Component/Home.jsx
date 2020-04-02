import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import {
  testlogin
} from "../modules/dummy"

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(70,190,75,0.9)"
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
        borderColor: "rgba(70,190,75,0.9)"
      }
    },
    "& label.MuiInputLabel-outlined": {
      color: "rgba(70,190,75,0.9)"
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
    padding: "1vw",
    paddingTop: "4vw",
    paddingBottom: "4vw",
    //border:"2px solid #000000",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "30%",
    height: "100%"
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%"
  },
  title: {
    marginBottom: "2vw",
    color: "rgba(70,190,75,0.9)"
  },
  submitbutton: {
    marginTop: "2vw",
    width: "100%",
    height: "100%"
  }
}));

const Home = props => {
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
    props.history.push("/signup")
  }

  const submitClickEvent = event => {
    const result = testlogin(input)
    alert(result.message)
    if(result.validation){
      sessionStorage.setItem("id", result.data.a_email)
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
        <Typography variant="h4" className={classes.title}>
          로그인
        </Typography>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          name="a_email"
          variant="outlined"
          onChange={inputChangeEvent}
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          name="a_pw"
          variant="outlined"
          onChange={inputChangeEvent}
          type="password"
        />
        <Button className={classes.submitbutton} onClick={submitClickEvent}>제출</Button>
        <Button className={classes.submitbutton} onClick={signupClickEvent}>SIGNUP</Button>
      </Box>
    </Box>
  );
};
export default Home;
