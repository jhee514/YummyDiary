import React from "react";
import { makeStyles, Box, TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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

const Home = props => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
      <Typography variant="h4" className={classes.title}>로그인</Typography>
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
      <Button>
        제출
      </Button>
      <Link to="/signup">
        <Button>
          SIGNUP
        </Button>
      </Link>
      </Box>
    </Box>
  );
};
export default Home;
