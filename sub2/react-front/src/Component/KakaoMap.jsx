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
  const [location, setLocation] = useState({});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("지도 데이터를 불러올 수 없습니다");
  }
  const classes = useStyles();

  const script = document.createElement("script");

  script.type = "text/javascript";
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=beed700290d38ad109541a91cbf923a7&autoload=false";
  script.async = true;

  document.head.appendChild(script);
  if (location.latitude !== undefined) {
    script.onload = () => {
      kakao.maps.load(() => {
        //파라미터로 autoload=false를 줘서 v3이 모두 로드된 후, 이 콜백함수가 실행된다.
        let el = document.getElementById("map");
        let markerPosition = new kakao.maps.LatLng(
          props.latitude,
          props.longitude
        );
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(props.latitude, props.longitude),
          level: 3,
        });
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        var polyline = new kakao.maps.Polyline({
          /* map:map, */
          path: [
            new kakao.maps.LatLng(props.latitude, props.longitude),
            new kakao.maps.LatLng(location.latitude, location.longitude),
          ],
          strokeWeight: 2,
          strokeColor: "#FF00FF",
          strokeOpacity: 0.8,
          strokeStyle: "dashed",
        });
        let dl = document.getElementById("distance");
        dl.innerHTML =
          "현재 위치에서의 거리 : " + Math.round(polyline.getLength()) + "m";
      });
    };
  }
  return (
    <>
      <div id="map" className={classes.map}></div>
      <Typography variant="h5" id="distance"></Typography>
    </>
  );
};

export default KakaoMap;
