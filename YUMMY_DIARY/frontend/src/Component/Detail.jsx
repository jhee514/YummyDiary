import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Divider,
  Button,
  Grid,
  Paper,
  Chip,
} from "@material-ui/core";
import { storedetail } from "../modules/dummy";
import { Rating } from "@material-ui/lab";
import KakaoMap from "./KakaoMap";
import { usePosition } from "use-position";
import { getDistance } from "../modules/getDistance";
import axios from "axios";
import { url } from "../modules/config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: "10vh",
    //flexDirection: "column",
  },
  mapbox: {
    margin: "0 2vw 0 2vw",
    display: "flex",
    width: "25%",
    height: "40vh",
    //alignItems: "center",
  },
  map: {
    width: "100%",
    //hegiht:"60vh",
  },
  storedetail: {
    margin: "0 2vw 0 2vw",
    //height: "100vh",
    display: "flex",
    width: "75%",
    //alignItems: "center",
    justifyContent: "center",
    padding: "0 10vw 0 10vw",
  },
  contentbox: {
    //border: "2px solid #FAC60E",
    backgroundColor: "white",
    width: "100%",
    //height: "100%",
    //margin: "2vh 0 2vh 0",
  },
  content: {
    padding: "4vh 1vw 4vh 1vw",
  },
  divider: {},
  reviewBox: {
    display: "flex",

    justifyContent: "center",
  },
  reviewContent: {
    display: "flex",
    width: "100%",
    margin: "3vh 15px 3vh 15px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  rating: {
    "&.MuiRating-root": {
      fontSize: "1.2rem",
      alignSelf: "center",
    },
    marginLeft: theme.spacing(1),
  },
}));
const Detail = (props) => {
  const classes = useStyles();
  const [unfold, setUnfold] = useState(true);
  const [loading, setLoading] = useState(false);
  const [store, setStore] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        setStore({});
        setLoading(true);
        const response = await axios.get(
          url + "/stores/stores/" + props.match.params.id
        );
        setStore(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const foldEvent = (event) => {
    setUnfold(!unfold);
  };
  // console.log(props.match.params)
  const watch = true;
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    watch
  );
  const date = new Date();
  const colorIndex = ["red", "darkorange", "green", "blue", "aquamarine","deeppink","forrestgreen","magenta","maroon","mediumorchid"];
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Box className={classes.root}>
          <Box className={classes.mapbox}>
            <Box className={classes.contentbox}>
              {/* <img src="/dummymap.png" alt="map" className={classes.map} /> */}
              {latitude === undefined ? (
                <></>
              ) : (
                <KakaoMap
                  target_lang={store.latitude}
                  target_long={store.longitude}
                  current_lang={latitude}
                  current_long={longitude}
                />
              )}
              <Typography variant="h6">
                <a
                  href={
                    "https://map.kakao.com/link/to/" +
                    store.name +
                    " " +
                    store.branch +
                    "," +
                    store.latitude +
                    "," +
                    store.longitude
                  }
                >
                  길찾기
                </a>
              </Typography>
              <Typography>
                거리 :{" "}
                {getDistance(
                  store.latitude,
                  store.longitude,
                  latitude,
                  longitude
                )}{" "}
                KM
              </Typography>
            </Box>
          </Box>
          <Box className={classes.storedetail}>
            <Box className={classes.contentbox}>
              <Box className={classes.content}>
                {sessionStorage.token ? (
                  <Typography
                    variant="subtitle2"
                    style={{ textAlign: "end" }}
                    onClick={() => {
                      props.history.push("/review/" + store.id);
                    }}
                  >
                    리뷰작성 ->
                  </Typography>
                ) : (
                  <></>
                )}
                <Typography variant="h4">{store.name}</Typography>
                <Typography variant="h6">
                  {/* {storedetail.tags.map((tag, index) => tag + " ")} */}
                  {store.category}
                </Typography>
                <Typography variant="h6">{store.address}</Typography>
              </Box>
              <Divider variant="middle" />
              <Box className={classes.content}>
                <Typography variant="h6">영업 시간</Typography>
                <Typography variant="body2">
                  {store.bhour === "" ? "정보가 없습니다" : store.bhour}
                </Typography>
              </Box>
              <Divider variant="middle" />
              <Box className={classes.content}>
                {store.menu === undefined || store.menu.length === 0 ? (
                  <Typography>정보가 없습니다</Typography>
                ) : (
                  <>
                    {store.menu.map((item, index) =>
                      (unfold ? 2 : store.menu.length) >= index ? (
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          key={index}
                        >
                          <Typography>{item.name}</Typography>
                          <Typography>{item.price}원</Typography>
                        </Box>
                      ) : (
                        <></>
                      )
                    )}
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      marginTop={1}
                      onClick={foldEvent}
                    >
                      <Button variant="text">
                        {unfold ? "더보기" : "접기"}
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
              <Divider variant="middle" />
              <Box>
                {store.review === undefined || store.review.length === 0 ? (
                  <Typography>리뷰가 없습니다</Typography>
                ) : (
                  <>
                    {store.review.map((item, index) => (
                      <Box key={index} className={classes.reviewBox}>
                        <Box className={classes.reviewContent}>
                          {/* <Typography>
                            {item.writer.gender === 0 ? "남" : "여"} {date.getFullYear()-item.writer.birth_year} 세
                          </Typography> */}
                          <Box display="flex">
                            {item.hashtag.map((tag, index) => (
                              <Chip
                                label={tag.content}
                                style={{
                                  backgroundColor:
                                    colorIndex[
                                      Math.round(Math.random() * 10) %
                                        colorIndex.length
                                    ],
                                    color:"white"
                                }}
                              />
                            ))}
                          </Box>
                          <Typography>
                            {item.reg_time.substring(0, 4) +
                              "년 " +
                              item.reg_time.substring(5, 7) +
                              "월 " +
                              item.reg_time.substring(8, 10) +
                              "일"}
                          </Typography>
                          <Box display="flex">
                            <Typography>
                              {"평점 :" +
                                Number(item.total_score).toFixed(1) +
                                " / 5.0"}
                            </Typography>
                            <Rating
                              name={index + ""}
                              value={Number(item.total_score)}
                              readOnly
                              precision={0.1}
                              className={classes.rating}
                            />
                          </Box>

                          <Typography>{item.content}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Detail;
