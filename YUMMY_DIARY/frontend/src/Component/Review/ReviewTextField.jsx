import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '100ch',
    },
  },
  textField_container: {
      alignItems: "center",
      marginLeft: "22%",
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
          placeholder="~_~"
          variant="outlined"
          fullWidth={true}
          value={reviews}
          // handleChange={handleChange()}
          onChange={(event) => {
            setReviews(event.target.value)
            console.log(reviews)
          }}
        />
      </div>
    </form>
  );
}