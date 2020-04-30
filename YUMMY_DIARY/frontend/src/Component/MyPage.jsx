import React, { useEffect, useState } from "react";
import { makeStyles, Container,Typography, Avatar, Grid, Box,Paper } from "@material-ui/core";
import axios from "axios";
import MyPageScore from "./MyPage/MyPageScore";
import Slider from "react-slick";
import { url } from "../modules/config";

const useStyles = makeStyles((theme) => ({
    recommendbox:{
        marginTop: "8vh",
        //border: "1px solid #FAC60E",
        width: "70%",
        minWidth: "80vw",
        flexDirection: "column",
        alignItems: "center",
    },
    mypage_div: {
        alignItems: "center",
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "600px",
    },
    hr_tag: {
        width: "98%",
        border: "solid 2px",
        borderColor: "#FAC60E"
    }
}));

const MyPage = (props) => {
  const settings = {
    // infinite: posts.length > 3 ?true:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
          url + "/accounts/myposts/",
          { headers: { authorization: "jwt " + sessionStorage.getItem("token") } }
      );
      console.log(response.data);
      setPosts(response.data);
    };
    fetchData();
  }, []);

  return (
    <Box className={classes.root}>
      {/* 프로필 및 식단 작성 부분 */}
      <h1 className={classes.title}>My DIARY</h1>
      <Box className={classes.recommendbox}>
        <Slider {...settings}>
            {posts.map((post, index) => (
              //   <Grid item spacing={2}>
              //     <Paper className={classes.item}>
              <div key={post.pk} className={classes.mypage_div}>
                {post.fields.meal == 1 ? (
                  <Typography variant="h5">Breakfast</Typography>
                ) : post.fields.meal == 2 ? (
                  <Typography variant="h5">Lunch</Typography>
                ) : (
                  <Typography variant="h5">Dinner</Typography>
                )}
                <hr className={classes.hr_tag} />
                <Typography variant="h6">
                  Date:{" "}
                  {post.fields.created_at.substring(0, 4) +
                    "년 " +
                    post.fields.created_at.substring(5, 7) +
                    "월 " +
                    post.fields.created_at.substring(8, 10) +
                    "일"}
                </Typography>
                <Typography variant="h6">Location: {post.fields.location}</Typography>
                  <Typography variant="h6">함께한 사람: {post.fields.party}</Typography>
                <Typography variant="h6">Dish: {post.fields.menus}</Typography>
                <Typography variant="h6">
                  Rating: {post.fields.score.toFixed(1.0)}
                  {/* <MyPageScore score={post.fields.score} /> */}
                </Typography>
              </div>
              //     </Paper>
              //   </Grid>
            ))}
        </Slider>
        </Box>
    </Box>
  );
};

export default MyPage;
