import React from "react";
import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
const MainSearch = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState({
    searchWord: "",
    searchTags: [],
  });
  const inputChangeEvent = (event) => {
    let word = event.currentTarget.value;
    setInput({ ...input, searchWord: word });
  };
  return (
    <Box className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={input.searchWord.charAt(0) === "#" ? top100Tags : []}
        getOptionLabel={(option) => "#" + option.tag}
        onChange={(event, value, reason) => {
          if (reason === "select-option") {
            setInput({ searchWord: "", searchTags: value });
          } else if (reason === "remove-option") {
            setInput({ searchWord: "", searchTags: value });
          } else if (reason === "clear") {
            setInput({ searchWord: "", searchTags: [] });
          }
        }}
        noOptionsText={
          input.searchWord.charAt(0) === "#"
            ? "적절한 태그가 존재하지 않습니다"
            : "키워드로 검색합니다"
        }
        // defaultValue={[top100Tags[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="검색"
            placeholder="태그 검색 시에 # 이용해서 추가해주세요"
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
      <Button
        onClick={() => {
          console.log(input);
        }}
      >
        State 확인하기
      </Button>
    </Box>
  );
};

const top100Tags = [
  { tag: "안주" },
  { tag: "커플" },
  { tag: "달달한" },
  { tag: "가성비" },
];
export default MainSearch;
