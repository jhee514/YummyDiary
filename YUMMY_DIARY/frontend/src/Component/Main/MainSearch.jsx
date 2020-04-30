import React from "react";
import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { top100Tags } from "../../modules/dummy";
import { setWord } from "../../modules/searchword";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAutocomplete-root .MuiInput-underline:after": {
      borderBottom: "2px solid #FAC60E",
    },
    "& .MuiAutocomplete-root ":{
      width:"80%"
    },
    display:"flex",
    justifyContent:"space-between",
    alignItems :"center"
  },
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
        getOptionLabel={(option) => "#" + option}
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
            ? "존재하지 않는 태그입니다"
            : "키워드로 검색합니다"
        }
        // defaultValue={[top100Tags[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="검색"
            placeholder="태그 검색 시에 # 이용해서 추가해주세요"
            value={input.searchWord}
            onChange={inputChangeEvent}
            inputProps={{
              ...params.inputProps,
              onBlur: (event) => event.preventDefault(),
            }}
          >
          </TextField>
        )}
        renderOption={(option, { inputValue }) => {
          if (inputValue.includes("#")) {
            const matches = match(option, inputValue.slice("#", ""));
            const parts = parse(option, matches);

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
          props.history.push("/searchResult/"+setWord(input.searchWord,input.searchTags))
          
        }}
        variant="outlined"
        style={{
          height:"6vh",
          marginTop:"2vh"
        }}
      >
        검색
      </Button>
    </Box>
  );
};

// const top100Tags = [
//   { tag: "안주" },
//   { tag: "커플" },
//   { tag: "달달한" },
//   { tag: "가성비" },
// ];
export default MainSearch;
