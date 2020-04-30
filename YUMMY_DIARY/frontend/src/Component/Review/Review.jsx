import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid, Box, Button } from "@material-ui/core";
import ReviewScore from "./ReviewScore";
import ReviewTextField from "./ReviewTextField";
import ReviewHash from "./ReviewHash";
import MainSearch from "./ReviewAddHash";
import axios from "axios";
import { url } from "../../modules/config";

const useStyles = makeStyles((theme) => ({
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
    justifyContent:"center"
  },
  score_Div: {
    marginLeft: "25vh",
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
    // marginTop: "20px",
    // marginLeft: "25vh",
    width: "30vh",
  },
  score_Box: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  divHash: {
    display: "flex",
    marginTop: "25px",
    marginBottom: "25px",
    alignItems: "center",
  },
  subStoreScore_starPoint: {
    display: "flex",
    marginTop: "15px",
    alignItems: "center",
    marginLeft: "3%",
    width: "100%",
  },
  addTag_h2: {
    marginLeft: "27vh",
  },
  sendButtonBox: {
    marginTop: "5vw",
    display:"flex",
    justifyContent:"center"
  },
  sendButton: {
    backgroundColor: "#FAC60E",
    border: "solid 2px",
    borderColor: "#FBD85A",
    "&:hover": {
      borderColor: "#FAC60E",
      backgroundColor: "#FAC60E",
      color: "white",
    },
  },
  outerBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
  },
  line: {
    marginTop: "4vw",
    borderColor: "#FAC60E",
    border: "solid 1px",
    width:"70%"
  },
}));

function CustomizedReview(props) {
  const classes = useStyles();
  const [hashs, setHashs] = useState([
    { id: 0, tagName: "한식" },
    { id: 1, tagName: "중식" },
    { id: 2, tagName: "일식" },
    { id: 3, tagName: "양식" },
    { id: 4, tagName: "분위기 좋은" },
    { id: 5, tagName: "양 많은" },
    { id: 6, tagName: "가성비 좋은" },
    { id: 7, tagName: "저렴한" },
    { id: 8, tagName: "서비스 좋은" },
    { id: 9, tagName: "맛있는" },
  ]);
  const store = props.match.params.store;
  const [customHashs, setCustomHashs] = useState([]);
  const [reviewList, setReviewList] = useState({
    store: store,
    contents: "",
    scores: [
      { id: 0, label: "맛을 평가해주세요", rating: 0, title: "맛" },
      { id: 1, label: "가격을 평가해주세요", rating: 0, title: "가격" },
      { id: 2, label: "서비스를 평가해주세요", rating: 0, title: "서비스" },
    ],
    hashtag: [],
  });
  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      props.history.push("/");
    }
  }, []);
  const SendReviewData = async (event) => {
    // 통신보낼 데이터 리스트 작업공간
    let score1 = reviewList.scores[0].rating,
      score2 = reviewList.scores[1].rating,
      score3 = reviewList.scores[2].rating;
    let total_avg_score = ((score1 + score2 + score3) / 3.0).toFixed(1);
    //예외처리
    if (score1 == 0 || score2 == 0 || score3 == 0) {
      // reviewScore 예외처리
      alert("모든 항목의 별점을 부여해주세요");
    } else if (reviewList.contents === "") {
      alert("리뷰 내용을 적어주세요.");
    } else {
      try {
        const response = await axios.post(
          url + "/stores/reviewcreate/",
          {
            content: reviewList.contents,
            store: reviewList.store,
            hashtag: reviewList.hashtag.concat(customHashs),
            total_score: total_avg_score,
          },
          {
            headers: {
              authorization: "jwt " + sessionStorage.getItem("token"),
            },
          }
        );
        alert("등록완료!");
        props.history.push("/detail/" + store);
      } catch (e) {
        console.error(e);
        alert("잘못된 정보입니다!");
      }
    }
  };
  return (
    <Box className={classes.outerBox}>
      <h1 className={classes.title}>Review Page</h1>

      <Box className={classes.score_Box}>
        {reviewList.scores.map((rating) => (
          <Box display="flex" justifyContent="space-between" width="60%">
            <Box className={classes.h2_Name}>
              <h2 className={classes.storeScore_subTitle}>{rating.label}</h2>
            </Box>
            <Box className={classes.score_Div}>
              <ReviewScore
                rating={rating}
                id={rating.id}
                reviewList={reviewList}
                setReviewList={setReviewList}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box justifyContent="center" display="flex">
          <ReviewTextField
            className={classes.ReviewTextField}
            reviewList={reviewList}
            setReviewList={setReviewList}
          />
      </Box>

      <Box justifyContent="center" display="flex" flexDirection="column">
        <h2 className={classes.addTag_h2}>원하는 태그를 골라주세요!</h2>
        <Box className={classes.subStoreScore}>
          <div className={classes.divHash}>
            {hashs.map((hash, index) => (
              <ReviewHash
                id={hash.id}
                hashs={hashs}
                reviewList={reviewList}
                setReviewList={setReviewList}
                customHashs={customHashs}
                key={index}
              />
            ))}
          </div>
        </Box>
        <hr className={classes.line}></hr>
        <h2 className={classes.addTag_h2}>
          원하는 태그가 없으면 만들어주세요!
        </h2>
        <Box display="flex" justifyContent="center">
        <MainSearch
          customHashs={customHashs}
          setCustomHashs={setCustomHashs}
          reviewList={reviewList}
        />
        </Box>
      </Box>
      <Box className={classes.sendButtonBox}>
        <Button className={classes.sendButton} onClick={SendReviewData}>
          리뷰 올리기
        </Button>
      </Box>
    </Box>
  );
}

export default CustomizedReview;
