import React, { useState, useMemo } from "react";
import {
  Box,
  TextField,
  withStyles,
  makeStyles,
  Button,
} from "@material-ui/core";
import { a_PwCheck } from "../../modules/regCheck";
import axios from "axios";
import { url } from "../../modules/config";
import InputText from "./InputText";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5vh",
    height: "100%",
  },
  subtitle: {
    margin: "0vh 0vw 2vh 0vw",
  },
  textbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vh 2vw 4vh 2vw",
    backgroundColor: "#FAC60E",
    width: "50%",
    margin: "1vh",
    borderRadius: "5px",
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%",
    "& label.Mui-focused": {
      color: "#fafafa",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        color: "#fafafa",
      },
      "&:hover fieldset": {
        borderColor: "#FBD85A",
        color: "#fafafa",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FBD85A",
        color: "#fafafa",
      },
    },
  },

  submitbutton: {
    marginBottom: "1vw",
    width: "95%",
    color: "white",
    borderColor: "#FBD85A",
    border: "solid 2px",
    "&:hover": {
      backgroundColor: "#FBD85A",
      color: "rgb(117, 122, 122)",
    },
  },
  loginbutton: {
    marginBottom: "1vw",
    width: "85%",
    color: "#FAC60E",
    borderColor: "#FAC60E",
    border: "solid 2px",
    "&:hover": {
      borderColor: "#FAC60E",
      backgroundColor: "#FAC60E",
      color: "white",
    },
  },
}));

export default function PwChange(props) {
  const classes = useStyles();
  const initState = {
    newPassword: "",
    oldPassword: "",
    password_check: "",
  };
  const [input, setInput] = useState(initState);
  const user = props.user;
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      submitClickEvent();
    }
  };
  const validatePassword = useMemo(
    () =>
      !(input.newPassword === undefined || input.newPassword === "") &&
      !a_PwCheck(input.newPassword),
    [input]
  );
  const validatePasswordCheck = useMemo(
    () =>
      !(input.password_check === undefined || input.password_check === "") &&
      input.newPassword != input.password_check,
    [input]
  );
  const inputChangeEvent = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const submitClickEvent = async (event) => {
    try {
      const check = await axios.post(url + "/token/", {
        email: user.email,
        password: input.oldPassword,
      });
      try {
        const response = await axios.patch(
          url + "/accounts/mypage/",
          { ...user, password: input.newPassword },
          { headers: { authorization: "jwt " + sessionStorage.token } }
        );
        setInput(initState);
        alert("비밀번호가 변경되었습니다.");
      } catch (e) {
        alert("비밀번호 변경에 실패했습니다.");
      }
    } catch (e) {
      alert("현재 비밀번호가 일치하지 않습니다");
    }
  };
  return (
    <Box className={classes.root} onKeyPress={pressEnter}>
      <p className={classes.subtitle}>회원님의 정보를 수정해주세요 :)</p>
      <Box className={classes.textbox} boxShadow={3}>
        <InputText
          value={input.oldPassword}
          classes={classes.textfield}
          disabled={false}
          label="현재 비밀번호"
          onChange={inputChangeEvent}
          name="oldPassword"
          type="password"
        />
        <InputText
          value={input.newPassword}
          classes={classes.textfield}
          disabled={false}
          label="새 비밀번호"
          onChange={inputChangeEvent}
          name="newPassword"
          type="password"
          error={validatePassword}
          helperText={
            validatePassword
              ? "패스워드는 영문자, 숫자, 특수문자를 포함하여 3자리 이상 15자리 이하의 길이여야 합니다"
              : ""
          }
        />
        <InputText
          classes={classes.textfield}
          label="비밀번호 재입력"
          variant="outlined"
          name="password_check"
          onChange={inputChangeEvent}
          type="password"
          value={input.password_check}
          error={validatePasswordCheck}
          helperText={
            validatePasswordCheck ? "비밀번호가 일치하지 않습니다" : ""
          }
        />
        <Button
          className={classes.submitbutton}
          size="large"
          onClick={submitClickEvent}
        >
          변경하기
        </Button>
      </Box>
    </Box>
  );
}
