import React, { useState } from "react";
import { makeStyles, Container, Avatar, Grid, Paper, Box, Button } from "@material-ui/core";
import ReviewScore from "./ReviewScore";
import ReviewTextField from "./ReviewTextField";
import ReviewHash from "./ReviewHash";
import ReviewAddHash from "./ReviewAddHash";
import MainSearch from "./ReviewAddHash";
import SendButton from "./SendButton";
import axios from "axios";

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
  score_Div: {
    marginLeft: "25vh"
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
    marginTop: "20px",
    marginLeft: "25vh",
    width: "30vh"
  },
  score_Box: {
    width: "90%",
    alignItems: "center",
  },
  divHash: {
    display: "flex",
    marginTop: "25px",
    marginBottom: "25px",
    alignItems: "center",
    marginLeft: "20%",
    width: "70%",
  },
  subStoreScore_starPoint: {
    display: "flex",
    marginTop: "15px",
    alignItems: "center",
    marginLeft: "3%",
    width: "100%"
    
  },
  addTag_h2: {
    marginLeft: "27vh",
  },
  sendButtonBox: {
    alignItems: "center",
    marginTop: "5vw",
    marginLeft: "82vh",
  },
  outerBox: {
    marginLeft: "2vw"
  },
  line: {
    marginTop: "4vw",
    marginLeft: "27vh",
    borderColor: "#FAC60E",
    border: "solid 1px",
    width: "68%"
  },
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
    { id: 0, tagName: "한식"},
    { id: 1, tagName: "중식"},
    { id: 2, tagName: "일식"},
    { id: 3, tagName: "양식"},
    { id: 4, tagName: "분위기 좋은"},
    { id: 5, tagName: "양 많은"},
    { id: 6, tagName: "가성비 좋은"},
    { id: 7, tagName: "저렴한"},
    { id: 8, tagName: "서비스 좋은"},
    { id: 9, tagName: "맛있는"},
  ]);

  const [add_hashs, setAdd_Hashs] = useState([]);
  
  return (
    <Box className={classes.outerBox}>
      <Container className={classes.container}>
        <h1 className={classes.title}>Review Page</h1>
        <Box className={classes.score_Box}>
          {ratings.map((rating) => (
            <Grid className={classes.subStoreScore_starPoint}>
              <div className={classes.h2_Name}>
                <h2 className={classes.storeScore_subTitle}>{rating.label}</h2>
              </div>
              <div className={classes.score_Div}>
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

        <Box>
            <h2 className={classes.addTag_h2}>원하는 태그를 골라주세요!</h2>
          <Grid className={classes.subStoreScore}>
            <div className={classes.divHash}>
              {hashs.map((hash) => (
                <ReviewHash id={hash.id} hashs={hashs} setHashs={setHashs} add_hashs={add_hashs} setAdd_Hashs={setAdd_Hashs} />
                // <ReviewHash id={hash.id} hashs={hashs} setHashs={setHashs} />
              ))}
            </div>
          </Grid>
            <hr className={classes.line}></hr>
            <h2 className={classes.addTag_h2}>원하는 태그가 없으면 만들어주세요!</h2>
            <MainSearch add_hashs={add_hashs} setAdd_Hashs={setAdd_Hashs} />
        </Box>
      </Container>
      <Box className={classes.sendButtonBox}>
        <SendButton className={classes.sendButton}/>
      </Box>
    </Box>
  );
}

export default CustomizedReview;
