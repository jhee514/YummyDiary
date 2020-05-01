import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputText from "../Member/InputText";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "100vh",
    },
  },
  textField_container: {
    // alignItems: "center",
    // marginLeft: "13%",
  },
  textfield: {
    marginBottom: "1vw",
    width: "95%",
    height: "100%",
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
      "&.Mui-focused fieldset": {
        borderColor: "#FBD85A",
        color: "#fafafa",
      },
      
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const { reviewList, setReviewList } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.textField_container}>
        <InputText
        classes={classes.textfield}
          label="후기를 작성해주세요"
          multiline
          rows={5}
          placeholder="어떠셨는지 궁금해요 알려주세요"
          variant="outlined"
          fullWidth={true}
          value={reviewList.contents}
          onChange={(event) => {
            setReviewList({ ...reviewList, contents: event.target.value });
          }}
        />
      </div>
    </form>
  );
}
