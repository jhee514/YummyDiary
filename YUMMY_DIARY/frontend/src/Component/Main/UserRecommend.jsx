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
  const classes = useStyles();
  const [recommends, setRecommends] = useState([]);
  const [storenames, setStorenames] = useState([]);
  const [datavalidate, setDatavalidate] = useState(false);
  const [loading, setLoading] = useState(true);
  // const token = sessionStorage.getItem("token");
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NTAzNzksInVzZXJuYW1lIjoiYmFjazFAc3NhZnkuY29tIiwiZXhwIjoxNTg4NzY0MTQyLCJlbWFpbCI6ImJhY2sxQHNzYWZ5LmNvbSIsIm9yaWdfaWF0IjoxNTg4MTU5MzQyfQ.ypQbBJdU_ZMG16GPEC4heSly9jXLwk7XhbpsaJNAd8k`;
  //   console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDatavalidate(false);
        setRecommends(null);
        setLoading(true);
        const response = await axios.get(
          //   url+"/stores/recommand/", {headers:{authorization : "jwt "+sessionStorage.getItem("token")}}
          // url + "/stores/recommand/", { headers: { authorization: "jwt " + token } }
          "http://127.0.0.1:8000/api/stores/recommand/",
          { headers: { authorization: "jwt " + token } }
        );
        // console.log(response)
        if (response.data.validation) {
          // console.log(response.data.Recommand_Store);
        //   let tmp = [];
        //   response.data.Recommand_Store.forEach((item) => {
        //     console.log(JSON.parse(JSON.stringify(item.store_list)));
        //     tmp.push({
        //       store_list: JSON.stringify(item.store_list),
        //       category_name: item.category_name,
        //     });
        //   });
        //   console.log(tmp);
          setRecommends( response.data.Recommand_Store);
          setDatavalidate(true);
        } else {
          alert(response.data.msg);
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
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Typography>사용자 기반 추천 목록</Typography>
      {
        <Slider {...settings} className={classes.slider}>
          {loading ? (
            <div>
              <ScaleLoader />
            </div>
          ) : (
            <>
              {datavalidate ? (
                <div>
                  {recommends.map((recommend, index, array) => {
                    return (
                      <SliderRecommend
                        index={index}
                        recommend={recommend}
                        array={array}
                      ></SliderRecommend>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </Slider>
      }
    </div>
  );
};

export default MainRecommend;
