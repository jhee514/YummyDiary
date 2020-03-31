import React from "react";
import { makeStyles, Box, TextField, Typography, Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(70,190,75,0.9)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(70,190,75,0.9)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(70,190,75,0.9)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0,255,0,0.9)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(70,190,75,0.9)',
      },
    },
    '& label.MuiInputLabel-outlined':{
      color: 'rgba(70,190,75,0.9)',
    }
  },
})(TextField);
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
    //border:"2px solid #000000",
    backgroundColor : "rgba(0,0,0,0.2)"
  },
  textfield: {
    marginBottom: "1vw",
    width: "140%"
  },
  title:{
    marginBottom : "2vw",
    color : "rgba(70,190,75,0.9)"
  }
}));

const Home = props => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.textbox}>
      <Typography variant="h4" className={classes.title}>로그인</Typography>
      <CssTextField
        className={classes.textfield}
        label="아이디"
        variant="outlined"
      />
      <CssTextField
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
