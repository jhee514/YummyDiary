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
      color: "#3A3838"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3A3838"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3A3838"
      },
      "&:hover fieldset": {
        borderColor: "#3A3838 "
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3A3838"
      }
    },
    "& label.MuiInputLabel-outlined": {
      color: "#3A3838"
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
    backgroundColor: "#FAC60E",
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
    color: "#3A3838"
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
