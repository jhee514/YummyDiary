/*global kakao*/
import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "100%",
    height: "100%",
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
        console.log(1);
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

        let polyline = new kakao.maps.Polyline({
          map: map,
          path: [
            new kakao.maps.LatLng(props.latitude, props.longitude),
            new kakao.maps.LatLng(location.latitude, location.longitude),
          ],
        });
        polyline.setMap(null);
        setLocation({distance: polyline.getLength(), ...location});
      });
    };
  }

  return (
    <>
      <div id="map" className={classes.map}></div>
    </>
  );
};

export default KakaoMap;
