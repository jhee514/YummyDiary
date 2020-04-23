import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { storedetail } from "../modules/dummy";
import { Rating } from "@material-ui/lab";
import { useState } from "react";
import KakaoMap from "./KakaoMap";

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
}));
const Detail = (porps) => {
  const classes = useStyles();
  const [unfold, setUnfold] = useState(true);
  const foldEvent = (event) => {
    setUnfold(!unfold);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.mapbox}>
        <Box className={classes.contentbox}>
          {/* <img src="/dummymap.png" alt="map" className={classes.map} /> */}

          <KakaoMap latitude={37.5718251} longitude={126.9803754} />

          <Typography variant="h6">
            <a
              href={
                "https://map.kakao.com/link/to/" +
                "오목집,37.5718251,126.9803754"
              }
            >
              길찾기
            </a>
          </Typography>
        </Box>
        {/* 37.5718251 , 126.9803754 */}
      </Box>
      <Box className={classes.storedetail}>
        <Box className={classes.contentbox}>
          <Box className={classes.content}>
            <Typography variant="h4">
              {storedetail.storeName}
              <Rating value={storedetail.rating} disabled precision="0.1" />
            </Typography>
            <Typography variant="h6">
              {storedetail.tags.map((tag, index) => tag + " ")}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box className={classes.content}>
            <Typography variant="h6">영업 시간</Typography>
            {storedetail.open.map((time, index) => (
              <Typography variant="body2" key={index}>
                {time}
              </Typography>
            ))}
          </Box>
          <Divider variant="middle" />
          <Box className={classes.content}>
            {storedetail.menuList.map((menu, index) =>
              (unfold ? 2 : storedetail.menuList.length) >= index ? (
                <Box display="flex" justifyContent="space-between">
                  <Typography>{menu.menuName}</Typography>
                  <Typography>{menu.menuPrice}원</Typography>
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
              <Button variant="text">{unfold ? "더보기" : "접기"}</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
