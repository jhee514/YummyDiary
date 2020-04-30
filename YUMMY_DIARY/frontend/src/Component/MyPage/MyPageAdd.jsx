import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import InputText from "../Member/InputText";
import MenuItem from "@material-ui/core/MenuItem";
import { url } from "../../modules/config";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
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
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#FAC60E",
      color: "white",
    },
    "& .MuiButton-textPrimary": {
      color: "white",
    },
  },
}));
const meals = [
  { value: 0, label: "아침" },
  { value: 1, label: "점심" },
  { value: 2, label: "저녁" },
];
const MyPageAdd = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState({
    meal: "",
    menus: "",
    party: "",
    store_id: null,
    location: "",
    score: 0,
  });
  const { handleClose, open, setOpen } = props;
  const inputChageEvent = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleAdd = async () => {
    try {
      const response = await axios.post(url + "/posts/post", value, {
        headers: { authorization: "jwt " + sessionStorage.getItem("token") },
      });
      setOpen(false);
    } catch (e) {
      console.error(e);
      alert("서버 상태가 좋지 않습니다.");
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="form-dialog-title">메모 추가</DialogTitle>
      <DialogContent>
        <DialogContentText>
          아침 점심 저녁 하루의 식단을 기록해보세요!
        </DialogContentText>
        <TextField
          className={classes.textfield}
          variant="outlined"
          select
          label="언제"
          name="meal"
          onChange={inputChageEvent}
          value={value.meal}
        >
          {meals.map((meal) => (
            <MenuItem key={meal.value} value={meal.value}>
              {meal.label}
            </MenuItem>
          ))}
        </TextField>
        <InputText
          classes={classes.textfield}
          label="메뉴"
          name="menus"
          value={value.menus}
          onChange={inputChageEvent}
        />
        <InputText
          classes={classes.textfield}
          label="함께 먹은 사람"
          name="party"
          value={value.party}
          onChange={inputChageEvent}
        />
        <InputText
          classes={classes.textfield}
          label="장소"
          name="location"
          value={value.location}
          onChange={inputChageEvent}
        />
        <InputText
          classes={classes.textfield}
          label="점수"
          placeholder="0~5점까지의 점수를 입력해주세요"
          name="score"
          value={value.score}
          onChange={inputChageEvent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          취소
        </Button>
        <Button onClick={handleAdd} color="primary">
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyPageAdd;
