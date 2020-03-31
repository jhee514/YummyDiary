import React from "react";
import { makeStyles, Box, TextField, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop : "6vw",
  },
  textbox : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5vw",
    border:"2px solid #000000"
  },
  textfield: {
    marginBottom: "1vw",
    width: "140%"
  },
  title:{
    marginBottom : "2vw"
  }
}));

const SignUp = props => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
      <Typography variant="h4" className={classes.title}>회원가입</Typography>
      <TextField
        className={classes.textfield}
        label="아이디"
        variant="outlined"
      />
      <TextField
        className={classes.textfield}
        label="비밀번호"
        variant="outlined"
      />
      <TextField
        className={classes.textfield}
        label="성별"
        variant="outlined"
      />
      <TextField
        className={classes.textfield}
        label="나이"
        variant="outlined"
      />
      <Button>
        제출
      </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
