import React, { useState } from "react";
import { makeStyles, Container, Avatar, Grid, Paper } from "@material-ui/core";
import ReviewScore from "./ReviewScore";
import ReviewTextField from "./ReviewTextField";
import ReviewHash from "./ReviewHash";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "10px 200px", // "top , left"
  },
  title: {
    fontSize: "30px",
    textAlign: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    fontSize: "20px",
  },
  storeScore: {
    // width: "1000px",
    display: "flex",
    // border: "1px solid #FF233B",
    alignItems: "center",
  },
  ReviewScore: {
    // border: "1px solid black",
    margin: "25px 500px",
  },
  subStoreScore: {
    // border: "1px solid #FF223B",
    display: "flex",
    marginTop: "15px",
    alignItems: "center",
  },
  storeScore_subTitle: {
    margin: "25px 20px",
    width: "220px",
    textAlign: "center",
  },
  substoreScore_subTitle: {
    // marginTop: "50px",
    marginLeft: "20px",
  },
  item: {
    width: "20vw",
    height: "300px",
    padding: "20px",
    fontSizd: "15px",
    textAlign: "center",
  },
  ReviewScore_taste: {
    // margin: "25px 500px"
  },
  ReviewScore_price: {
    // margin: "25px 300px"
  },
  ReviewScore_taste_service: {
    // margin: "25px 500px"
  },
  h2_Name: {
    width: "500px",
    // textAlign: "center",
    // alignItems: "center",
    marginLeft: "200px",
  },
  divHash: {
    marginTop: "25px",
    marginBottom: "25px",
    alignItems: "center",
  },
}));

function CustomizedReview() {
  const classes = useStyles();
  const [ratings, setRatings] = useState([
    { id: 0, label: "맛을 평가해주세요", rating: 0, title: "맛" },
    { id: 1, label: "가격을 평가해주세요", rating: 0, title: "가격" },
    { id: 2, label: "서비스를 평가해주세요", rating: 0, title: "서비스" },
  ]);
  return (
    <Container className={classes.container}>
      <h1 className={classes.title}>Review Page</h1>
      {ratings.map((rating) => (
        <Grid className={classes.subStoreScore}>
        <div className={classes.h2_Name}>
      <h2 className={classes.storeScore_subTitle}>{rating.label}</h2>
        </div>
        <div>
          <ReviewScore className={classes.ReviewScore_taste} ratings={ratings} id={rating.id} setRatings={setRatings}/>
        </div>
      </Grid>  
      )
      )}
      <Grid className={classes.subStoreScore}>
        <ReviewTextField />
      </Grid>

      <Grid className={classes.subStoreScore}>
        <div className={classes.divHash}>
          <ReviewHash />
        </div>
      </Grid>
    </Container>
  );
}

export default CustomizedReview;
