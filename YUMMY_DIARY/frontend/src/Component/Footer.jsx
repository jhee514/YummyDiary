import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#e0e0e0",
    display:"flex",
    textAlign: "center",
    flexDirection:"column",
    justifyContent:"center",
    padding: "4vh",
    marginTop : "3vh",
    fontSize: "0.9rem",
  },
  footer_p: {
    margin: "2px",
  }
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container item spacing={1} justify="center">
        <Grid item>
          <Link component={RouterLink} to="#" color="inherit">
            <Facebook fontSize="small"/>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="#" color="inherit">
            <Instagram fontSize="small"/>
          </Link>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="#" color="inherit">
            <Twitter fontSize="small"/>
          </Link>
        </Grid>
      </Grid>
      <p className={classes.footer_p}>
        <Link
          component={RouterLink}
          to="#"
          color="inherit"
          underline="hover"
        >
          문의하기(평일 상담시간 : 09:00 ~ 18:00)
        </Link>{" "}
        |{" "}
        <Link
          component={RouterLink}
          to="#"
          color="inherit"
          underline="hover"
        >
          개인정보취급방침
        </Link>{" "}
        |{" "}
        <Link
          component={RouterLink}
          to="#"
          color="inherit"
          underline="hover"
        >
          제휴/광고
        </Link>
      </p>
      <p className={classes.footer_p}>
        (주)YUMMYDIARY | 서울특별시 강남구 언주로 508 10-17층(역삼동, 서울상록빌딩) 1101호<br/>
        Copyright YUMMYDIARY Co., Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
