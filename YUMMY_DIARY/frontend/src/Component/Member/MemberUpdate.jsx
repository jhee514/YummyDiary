import React, { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { a_PwCheck, a_AgeCheck, a_EmailCheck } from "../../modules/regCheck";
import axios from "axios";
import { useEffect } from "react";
import { url } from "../../modules/config";

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

const CssToggleButton = withStyles({
  root: {
    border: "none",
    "&.MuiToggleButton-root.Mui-selected": {
      color: "white",
    },
  },
})(ToggleButton);

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
  textboxNoLine: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    borderTop: "solid 1px #bdbdbd",
    margin: "3vh 0vw",
    padding: "2vh 0vw",
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
}));

const MemberUpdate = (props) => {
  const classes = useStyles();

  const { user, setUser } = props;

  const inputChangeEvent = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const checkChangeEvent = (event) => {
    setUser({ ...user, gender: event.currentTarget.value });
  };
  const submitClickEvent = async (event) => {
    if (
      a_EmailCheck(user.email) &&
      a_AgeCheck(user.birth_year) &&
      user.gender !== ""
    ) {
      const result = await axios.patch(url + "/accounts/mypage/", user, {
        headers: { authorization: "jwt " + sessionStorage.getItem("token") },
      });
    } else {
      alert("정확히 입력해주세요");
    }
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      submitClickEvent();
    }
  };

  return (
    <Box className={classes.root} onKeyPress={pressEnter}>
      <p className={classes.subtitle}>회원님의 정보를 수정해주세요 :)</p>
      <Box className={classes.textbox} boxShadow={3}>
        <CssTextField
          className={classes.textfield}
          label="이메일"
          variant="outlined"
          disabled
          value={user.email}
          name="email"
          onChange={inputChangeEvent}
        />

        <Box
          display="flex"
          margin={0}
          justifyContent="flex-start"
          width="95%"
          flexWrap="wrap"
        >
          <Box width="70%">
            <CssTextField
              className={classes.textfield}
              label="출생 연도"
              name="birth_year"
              value={user.birth_year}
              variant="outlined"
              onChange={inputChangeEvent}
              fullWidth
              error={
                !(user.birth_year === undefined || user.birth_year === "") &&
                !a_AgeCheck(user.birth_year)
              }
              helperText={
                !(user.birth_year === undefined || user.birth_year === "") &&
                !a_AgeCheck(user.birth_year)
                  ? "태어난 연도는 1900년 이상 올해년도 이하로 입력해주세요!"
                  : ""
              }
            />
          </Box>
          <Box
            display="flex"
            width="30%"
            paddingLeft={1}
            justifyContent="space-between"
            alignItems="flex"
          >
            <Box>
              <CssToggleButton
                value={0}
                selected={user.gender == 0}
                onChange={checkChangeEvent}
                size="large"
                className={classes.toggleButton}
              >
                남
              </CssToggleButton>
            </Box>
            <Box>
              <CssToggleButton
                value={1}
                selected={user.gender == 1}
                onChange={checkChangeEvent}
                size="large"
                className={classes.toggleButton}
              >
                여
              </CssToggleButton>
            </Box>
          </Box>
        </Box>
        <Button
          className={classes.submitbutton}
          size="large"
          onClick={submitClickEvent}
        >
          수정
        </Button>
      </Box>
    </Box>
  );
};
export default MemberUpdate;
