import React from "react";
import {
  makeStyles,
  Box,
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Chip,
} from "@material-ui/core";

import { useState } from "react";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display:"flex",
    flexDirection:"column"
  },
  textfield: {
    marginBottom: "1vw",
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #FBD85A",
    },
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        color: "#fafafa",
      },
      "&:hover fieldset": {
        borderColor: "#FBD85A",
        color: "#fafafa",
      },
    },
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const MainSearch = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const { customHashs, setCustomHashs, reviewList } = props; // 사용자가 만든 해쉬태그 넣어줄 리스트

  const addCustomTag = (event) => {
    //중복 체크 5개 이상 check  가능?
    if (customHashs.length < 5) {
      const newValue = input;
      setInput("");
      let temp = customHashs;
      const matched = (tag) => tag.content === newValue;
      const matchedTagNumber = temp.findIndex(matched);
      const matchedOldTag = reviewList.hashtag.findIndex(matched);
      if (matchedTagNumber == -1 && matchedOldTag == -1) {
        temp.push({ content: newValue });
      } else {
        alert("이미 추가한 태그입니다.");
      }
      setCustomHashs(temp);
    } else {
      alert("tag는 최대 5개 추가할 수 있습니다");
    }
  };
  const deleteCustomHash = (content) => () => {
    setCustomHashs((customHashs) =>
      customHashs.filter((customHash) => customHash.content !== content)
    );
  };
  const inputChangeEvent = (event) => {
    setInput(event.currentTarget.value);
  };
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      addCustomTag();
    }
  };
  return (
    <Box className={classes.root}>
      <FormControl className={classes.textfield} fullWidth>
        <InputLabel htmlFor="standard-adornment-password">
          태그를 추가해주세요
        </InputLabel>
        <Input
          id="standard-adornment-password"
          value={input}
          onChange={inputChangeEvent}
          onKeyPress={pressEnter}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={addCustomTag}
                // onMouseDown={handleMouseDownPassword}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box>
        {customHashs.length === undefined ? (
          <></>
        ) : (
          <>
            {customHashs.map((customHash, index) => (
              <Chip
                key={index}
                label={customHash.content}
                onDelete={deleteCustomHash(customHash.content)}
                className={classes.chip}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainSearch;
