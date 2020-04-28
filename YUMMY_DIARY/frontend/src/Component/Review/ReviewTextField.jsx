import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '100vh',
    },
  },
  textField_container: {
      alignItems: "center",
      marginLeft: "13%",
  }
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const {reviews, setReviews} = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.textField_container}>
        <TextField
          id="outlined-multiline-static"
          label="후기를 작성해주세요"
          multiline
          rows={5}
          placeholder="어떠셨는지 궁금해요 알려주세요"
          variant="outlined"
          fullWidth={true}
          value={reviews}
          // handleChange={handleChange()}
          onChange={(event) => {
            setReviews(event.target.value)
            // console.log(reviews)
          }}
        />
      </div>
    </form>
  );
}