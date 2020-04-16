import React from "react";
import {makeStyles, Container, Avatar, Grid, Paper} from '@material-ui/core';
import ReviewScore from "./ReviewScore";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "10px 150px", // "top , left"
  },
  title: {
      fontSize: "30px"
  },
  content: {
    width: "100%",
    height: "100%",
    fontSize: "20px"
  },
  storeScore: {
    width: "1000px",
    display: "flex",
    border: "1px solid #FF233B"
  },  
  storeScore_subTitle: {
    margin: "25px 20px",
  },
  substoreScore_subTitle: {
    marginTop: "50px",
    marginLeft: "20px"
  },
  item: {
    width: "20vw",
    height: "300px",
    padding: "20px",
    fontSizd: "15px",
    textAlign: "center"
  },
  ReviewScore: {
    border: "1px solid black",
    margin: "25px 500px"
  }
}));

export default function CustomizedReview() {
  const classes = useStyles();

  return(
    <Container className={classes.container}>
      <h1 className={classes.title}>
        Review Page
      </h1>
      <Grid className={classes.storeScore}>
        <h2 className={classes.storeScore_subTitle}>
          맛집을 평가해주세요
        </h2>
        <ReviewScore className={classes.ReviewScore}/>
      </Grid>

      <Grid className={classes.subStoreScore}>
        <h2 className={classes.substoreScore_subTitle}>
          맛을 평가해주세요
        </h2>
        <ReviewScore className={classes.ReviewScore}/>
        <h2 className={classes.storeScore_subTitle}>
          가격을 평가해주세요
        </h2>
        <ReviewScore className={classes.ReviewScore}/>
        <h2 className={classes.storeScore_subTitle}>
          서비스를 평가해주세요
        </h2>
        <ReviewScore className={classes.ReviewScore}/>
      </Grid>
    </Container>
  )
}