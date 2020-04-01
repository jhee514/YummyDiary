import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";

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
    height: "100%",
    width: "30%"
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%"
  },
  title: {
    marginBottom: "2vw",
    color: "rgba(70,190,75,0.9)"
  }
}));

const SignUp = props => {
  const classes = useStyles();
  const [input, setInput] = useState({
    a_id: "",
    a_pw: "",
    a_age: "",
    a_gender: ""
  });
  const inputChangeEvent = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(event.target.name + " : " + event.target.value);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
        <Typography variant="h4" className={classes.title}>
          회원가입
        </Typography>
        <CssTextField
          className={classes.textfield}
          label="아이디"
          variant="outlined"
          name="a_id"
          onChange={inputChangeEvent}
        />
        <CssTextField
          className={classes.textfield}
          label="비밀번호"
          variant="outlined"
          name="a_pw"
          onChange={inputChangeEvent}
        />

        <CssTextField
          className={classes.textfield}
          label="나이"
          variant="outlined"
          onChange={inputChangeEvent}
        />
        {/* 성별체크 */}
        <Button>제출</Button>
      </Box>
    </Box>
  );
};
export default SignUp;
