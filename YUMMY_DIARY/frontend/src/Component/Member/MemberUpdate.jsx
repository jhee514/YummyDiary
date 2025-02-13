import React, { useState, useMemo } from "react";
import { makeStyles, Box, Button, withStyles, Chip } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { a_AgeCheck, a_EmailCheck } from "../../modules/regCheck";
import axios from "axios";

import { url } from "../../modules/config";
import InputText from "./InputText";

const CssToggleButton = withStyles({
  root: {
    border: "none",
    "&.MuiToggleButton-root.Mui-selected": {
      color: "white",
    },
  },
})(ToggleButton);
const tag_choices = [
  { tag_id: 5963, content: "카페" },
  { tag_id: 5897, content: "치킨" },
  { tag_id: 5992, content: "커피" },
  { tag_id: 3764, content: "술집" },
  { tag_id: 3060, content: "삼겹살" },
  { tag_id: 5410, content: "족발" },
  { tag_id: 1763, content: "떡볶이" },
  { tag_id: 6430, content: "피자" },
  { tag_id: 6897, content: "횟집" },
  { tag_id: 5581, content: "짬뽕" },
  { tag_id: 1493, content: "돈까스" },
  { tag_id: 6241, content: "파스타" },
  { tag_id: 6528, content: "한우" },
  { tag_id: 349, content: "고기집" },
  { tag_id: 5972, content: "칼국수" },
  { tag_id: 5481, content: "중국집" },
  { tag_id: 2041, content: "맥주" },
];
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
  // chip css 조정
  chip : {
    // outlined 일 때 css
    "&.MuiChip-colorPrimary":{
      color : "#7A6107",
      border: "1px solid #BA940B"
    },
    // default 일 때 css
    "&.MuiChip-colorSecondary":{
      backgroundColor : "#FBD85A",
      color : "#3B2F04",
      border: "1px solid #3B2F04"
    },
  }
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
    if (a_AgeCheck(user.birth_year) && user.gender !== "") {
      try {
        console.log(user)
        const response = await axios.post(url + "/token/", {
          email: user.email,
          password: user.password,
        });
      } catch (e) {
        alert("올바른 비밀 번호를 입력해주세요");
      }
      try {
        const result = await axios.patch(
          url + "/accounts/mypage/",
          {
            email: user.email,
            gender: user.gender,
            birth_year: user.birth_year,
            tags : user.tags
          },
          {
            headers: {
              authorization: "jwt " + sessionStorage.getItem("token"),
            },
          }
        );
        setUser(result.data);
      } catch (e) {
        alert(
          "입력된 정보를 수정하는 중 오류가 발생했습니다 잠시후에 다시 시도해주세요"
        );
      }
    } else {
      alert("정확히 입력해주세요");
    }
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      submitClickEvent();
    }
  };
  const validatePasswordCheck = useMemo(
    () =>
      !(user.password_check === undefined || user.password_check === "") &&
      user.password != user.password_check,
    [user]
  );
  const handleTagClick = (newTag) => () => {
    let temp = user.tags;
    const matched = (tag) => tag === newTag.tag_id;
    const matchedIndex = temp.findIndex(matched);

    if (matchedIndex == -1) {
      if (temp.length === 5) {
        alert("태그는 최대 5개까지만 선택 가능합니다");
      } else {
        temp.push(newTag.tag_id);
      }
    } else {
      temp.splice(matchedIndex, 1);
    }
    setUser({ ...user, tags: temp });
  };

  return (
    <Box className={classes.root} onKeyPress={pressEnter}>
      <p className={classes.subtitle}>회원님의 정보를 수정해주세요 :)</p>
      <Box className={classes.textbox} boxShadow={3}>
        <InputText
          classes={classes.textfield}
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
            <InputText
              classes={classes.textfield}
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
        <InputText
          classes={classes.textfield}
          label="비밀번호"
          value={user.password === undefined ? "" : user.password}
          name="password"
          type="password"
          onChange={inputChangeEvent}
        />
        <InputText
          classes={classes.textfield}
          label="비밀번호 재입력"
          value={user.password_check === undefined ? "" : user.password_check}
          name="password_check"
          type="password"
          onChange={inputChangeEvent}
          error={validatePasswordCheck}
          helperText={
            validatePasswordCheck ? "비밀번호가 일치하지 않습니다" : ""
          }
        />
        <p className={classes.question}>
          다음 중 좋아하는 카테고리를 선택해주세요
          <br />
          (최소 2개 이상 최대 5개 이하)
        </p>
        <Box
          display="flex"
          margin={1}
          justifyContent="center"
          width="95%"
          flexWrap="wrap"
        >
          {tag_choices.map((choice) => (
            <Box margin="3px">
              <Chip
                variant={
                  user.tags.findIndex((tag) => tag === choice.tag_id) != -1
                    ? "default"
                    : "outlined"
                }
                color={
                  user.tags.findIndex((tag) => tag === choice.tag_id) != -1
                    ? "secondary"
                    : "primary"
                }
                label={choice.content}
                id={choice.tag_id}
                onClick={handleTagClick(choice)}
                className={classes.chip}
              />
            </Box>
          ))}
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
