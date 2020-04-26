import React, { useState } from "react";
import { makeStyles, Container, Avatar, Grid, Paper, Box } from "@material-ui/core";
import ReviewScore from "./ReviewScore";
import ReviewTextField from "./ReviewTextField";
import ReviewHash from "./ReviewHash";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10px", // "top , left"
    marginLeft: "10%"
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
    marginLeft: "20%",
  },
  divHash: {
    display: "flex",
    marginTop: "25px",
    marginBottom: "25px",
    alignItems: "center",
    marginLeft: "15%",
    width: "70%",
  },
  subStoreScore_starPoint: {
    display: "flex",
    marginTop: "15px",
    alignItems: "center",
    marginLeft: "3%"
    
  }
}));

function CustomizedReview() {
  const classes = useStyles();
  const [ratings, setRatings] = useState([
    { id: 0, label: "맛을 평가해주세요", rating: 0, title: "맛" },
    { id: 1, label: "가격을 평가해주세요", rating: 0, title: "가격" },
    { id: 2, label: "서비스를 평가해주세요", rating: 0, title: "서비스" },
  ]);

  const [reviews, setReviews] = useState('');

  const [hashs, setHashs] = useState([
    { id: 0, tagName: "한식", checkable: false },
    { id: 1, tagName: "중식", checkable: false },
    { id: 2, tagName: "일식", checkable: false },
    { id: 3, tagName: "양식", checkable: false },
    { id: 4, tagName: "분위기 좋은", checkable: false },
    { id: 5, tagName: "양 많은", checkable: false },
    { id: 6, tagName: "가성비 좋은", checkable: false },
    { id: 7, tagName: "저렴한", checkable: false },
    { id: 8, tagName: "서비스 좋은", checkable: false },
    { id: 9, tagName: "맛있는", checkable: false },
  ])
  
  return (
    <Box>
      <Container className={classes.container}>
        <h1 className={classes.title}>Review Page</h1>
        <Box>
          {ratings.map((rating) => (
            <Grid className={classes.subStoreScore_starPoint}>
              <div className={classes.h2_Name}>
                <h2 className={classes.storeScore_subTitle}>{rating.label}</h2>
              </div>
              <div>
                <ReviewScore ratings={ratings} id={rating.id} setRatings={setRatings}/>
              </div>
            </Grid>  
          ))}
        </Box>

        <Box>
          <Grid className={classes.subStoreScore}>
            <ReviewTextField className={classes.ReviewTextField1} reviews={reviews} setReviews={setReviews} />
          </Grid>
        </Box>

        <Grid className={classes.subStoreScore}>
          <div className={classes.divHash}>
            {hashs.map((hash) => (
              <ReviewHash id={hash.id} hashs={hashs} setHashs={setHashs}/>
            ))}
          </div>
        </Grid>

      </Container>
    </Box>
  );
}

export default CustomizedReview;
