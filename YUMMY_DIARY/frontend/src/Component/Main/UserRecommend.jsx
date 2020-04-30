import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";
import Slider from "react-slick";
import "./style.scss";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import { url } from "../../modules/config";
import SliderRecommend from "./SliderRecommend";

const render_count = 0;

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  gridListTile: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #FAC60E",
    margin: "1px 1px 1px 1px",
  },
  slider: {
    marginTop: "2vh",
  },
}));
const MainRecommend = (props) => {
  const {history} = props;
  const classes = useStyles();
  const [recommends, setRecommends] = useState([]);
  const [storenames, setStorenames] = useState([]);
  const [datavalidate, setDatavalidate] = useState(false);
  const [loading, setLoading] = useState(true);
//   const token = sessionStorage.getItem("token");
//   const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NTAzNzksInVzZXJuYW1lIjoiYmFjazFAc3NhZnkuY29tIiwiZXhwIjoxNTg4NzY0MTQyLCJlbWFpbCI6ImJhY2sxQHNzYWZ5LmNvbSIsIm9yaWdfaWF0IjoxNTg4MTU5MzQyfQ.ypQbBJdU_ZMG16GPEC4heSly9jXLwk7XhbpsaJNAd8k`;
  //   console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDatavalidate(false);
        setRecommends(null);
        setLoading(true);
        const response = await axios.get(
        // 배포할때 아래 주석 풀어주어야함...
        //   url + "/stores/recommand/", 
        //   { headers: { authorization: "jwt " + sessionStorage.getItem("token") } }

        // 로컬환경은 아래 주석 풀어주어야함...
            "http://127.0.0.1:8000/api/stores/recommand/",
            { headers: { authorization: "jwt " + sessionStorage.getItem("token") } }
        );
        // console.log(response)
        if (response.data.validation) {
          setRecommends(response.data.Recommand_Store);
          setDatavalidate(true);
        } else {
          alert(response.data.msg);
          // 한식 , 중식, 일식 dummydata 만들기!
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 10,
  };
  console.log();

  return (
    <div>
      <Typography variant="h5">사용자 기반 추천 목록</Typography>
      {loading ? (
        <div>정보를 불러오는 중입니다.....</div>
      ) : (
        <div>
          {recommends.map((recommend) => (
            <div key={recommend.category_name}>
              <Typography variant="h6">
                category : {recommend.category_name}
              </Typography>
              <SliderRecommend recommend={recommend} history={history}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainRecommend;
