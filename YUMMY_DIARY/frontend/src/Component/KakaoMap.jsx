/*global kakao*/
import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  map: {
    display : "absolute",
    width: "100%",
    height: "100%",
    marginBottom : "2vh"
  },
}));
const KakaoMap = (props) => {
  console.log(props)
  const classes = useStyles();
  const script = document.createElement("script");

  script.type = "text/javascript";
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=beed700290d38ad109541a91cbf923a7&autoload=false";
  script.async = true;

  document.head.appendChild(script);
 
    script.onload = () => {
      kakao.maps.load(() => {
        //파라미터로 autoload=false를 줘서 v3이 모두 로드된 후, 이 콜백함수가 실행된다.
        let el = document.getElementById("map");
        let markerPosition_target = new kakao.maps.LatLng(
          props.current_lang,
          props.current_long
        );
        let markerPosition_cur_location = new kakao.maps.LatLng(
          props.target_lang,
          props.target_long
        );
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(props.target_lang, props.target_long),
          level: 3,
        });
        let marker_target = new kakao.maps.Marker({
          position: markerPosition_target,
        });
        marker_target.setMap(map);
        let marker_cur_location = new kakao.maps.Marker({
          position : markerPosition_cur_location,
        })
        marker_cur_location.setMap(map);
      });
    };
  return (
    <>
      <div id="map" className={classes.map}></div>
    </>
  );
};

export default KakaoMap;
