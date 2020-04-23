import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { storedetail } from "../modules/dummy";
import { Rating } from "@material-ui/lab";
import KakaoMap from "./KakaoMap";
import { usePosition } from "use-position";
import { getDistance } from "../modules/getDistance";
import axios from "axios";

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
          "http://localhost:8000/stores/stores/" + props.match.params.id
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
                    "오목집,37.5718251,126.9803754"
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
            {/* 37.5718251 , 126.9803754 */}
          </Box>
          <Box className={classes.storedetail}>
            <Box className={classes.contentbox}>
              <Box className={classes.content}>
                <Typography variant="h4">
                  {store.name}
                  <Rating value={storedetail.rating} disabled precision="0.1" />
                </Typography>
                <Typography variant="h6">
                  {/* {storedetail.tags.map((tag, index) => tag + " ")} */}
                  {store.category}
                </Typography>
                <Typography variant="h6">{store.address}</Typography>
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
      )}
    </>
  );
};

export default Detail;
