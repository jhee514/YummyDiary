import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '110ch',
    },
  },
  textField_container: {
      alignItems: "center",
      marginLeft: "150px",
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        />
      </div>
    </form>
  );
}