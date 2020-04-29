import React from "react";
import { makeStyles, Box, TextField, Button, Input } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "68%",
    marginLeft: "27vh",
  },
}));

const MainSearch = (props) => {
  const classes = useStyles();

  const [input, setInput] = useState({
    searchWord: "",
    searchTags: [],
  });

  const {custom_hashs, setCustom_Hashs} = props; // 사용자가 만든 해쉬태그 넣어줄 리스트

  const inputChangeEvent = (event) => {
    let word = event.currentTarget.value;
    setInput({ ...input, searchWord: word });
  };
  

  const top100Tags = [
    { tag: "안주" },
    { tag: "커플" },
    { tag: "달달한" },
    { tag: "가성비" },
    { tag: "카페" },{ tag: "칼국수" },{ tag: "맛없는" },{ tag: "훠궈" },{ tag: "마라탕" },{ tag: "마라샹궈" },
    { tag: "대창" },{ tag: "곱창" },{ tag: "순대" },{ tag: "떡볶이" },{ tag: "순대국" },{ tag: "치킨" },{ tag: "피자" },
    { tag: "막창" },{ tag: "맥주" },{ tag: "소주" },{ tag: "혼술" },{ tag: "삼겹살" },{ tag: "돼지갈비" },{ tag: "갈비" },
    { tag: "빵" },{ tag: "시카고피자" },{ tag: "꽃등심" },{ tag: "안주" },{ tag: "수제비" },{ tag: "칼국수" },{ tag: "국밥" },
    { tag: "맥주마시기 좋은" },{ tag: "소주마시기 좋은" },{ tag: "와인" },{ tag: "와인마시기 좋은" },{ tag: "감바스" },{ tag: "아이스크림" },{ tag: "엄마는 외계인" }
  ];

  return (
    <Box className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={input.searchWord.charAt(0) === "#" ? top100Tags : []}
        // options={top100Tags}
        getOptionLabel={(option) => "#" + option.tag}
        onChange={(event, value, reason) => {
          let temp = custom_hashs;
          if (reason === "select-option") {
            setInput({ searchWord: "", searchTags: value });
            // temp.push(event.target.value);
            temp.push(value)
          } else if (reason === "remove-option") {
            setInput({ searchWord: "", searchTags: value });
            // temp.splice(temp.indexOf(event.target.value), 1)
            temp.splice(temp.indexOf(value),1)
          } else if (reason === "clear") {
            setInput({ searchWord: "", searchTags: [] });
            temp = [];
          }
          console.log(temp);
          setCustom_Hashs(temp);
        }}
        noOptionsText={
          input.searchWord.charAt(0) === "#"
            ? "적절한 태그가 존재하지 않습니다"
            : "태그로 검색합니다"
        }
        // defaultValue={[top100Tags[2]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="태그 추가하기!"
            placeholder="태그 추가시에 # 이용해서 추가해주세요 ex) #한식"
            value={input.searchWord === undefined ? input.searchWord : ""}
            onChange={inputChangeEvent}
          />
        )}
        renderOption={(option, { inputValue }) => {
          if (inputValue.includes("#")) {
            const matches = match(option.tag, inputValue.slice("#", ""));
            const parts = parse(option.tag, matches);
            return (
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            );
          }
        }}
      />
      {/* <Button
        onClick={() => {
          console.log(input);
        }}
      >
        State 확인하기
      </Button> */}
    </Box>
  );
};

export default MainSearch;
