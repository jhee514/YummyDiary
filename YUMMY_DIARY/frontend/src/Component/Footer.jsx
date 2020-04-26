import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#757570",
    display:"flex",
    height: "20vh",
    textAlign: "center",
    flexDirection:"column",
    justifyContent:"center",
    marginTop :"3vh"
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Box>
        <Typography>
          (주)멀티캠퍼스 서울특별시 강남구 언주로 508 10-17층(역삼동,
          서울상록빌딩) 평일 상담시간 : 09:00 ~ 18:00
        </Typography>
      </Box>
      <Box>
        <Typography>
          Copyright by Multicampus Co., Ltd. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
