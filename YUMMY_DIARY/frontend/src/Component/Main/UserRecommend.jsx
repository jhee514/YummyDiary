import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import "./style.scss";
import axios from "axios";
import { url } from "../../modules/config";
import SliderRecommend from "./SliderRecommend";

const MainRecommend = (props) => {
  const { history } = props;
  const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setRecommends(null);
        setLoading(true);
        const response = await axios.get(url + "/stores/recommand/", {
          headers: { authorization: "jwt " + sessionStorage.getItem("token") },
        });
        if (response.data.validation) {
          setRecommends(response.data.Recommand_Store);
          setLoading(false);
        } else {
          alert("선호 태그를 추가하시면 더 많은 추천 정보를 볼 수 있습니다.");
          setLoading(true);
        }
      } catch (e) {
        console.error(e);
      }
      
    };
    fetchData();
  }, []);
  return (
    <div>
      {sessionStorage.getItem("token") === null ? (
        <></>
      ) : (
        <>
          <Typography variant="h5">사용자 기반 추천 목록</Typography>
          {loading ? (
            <div>선호 태그를 추가해주세요!</div>
          ) : (
            <div>
              {recommends.map((recommend) => (
                <div key={recommend.category_name}>
                  <Typography variant="h6">
                    category : {recommend.category_name}
                  </Typography>
                  <SliderRecommend recommend={recommend} history={history} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainRecommend;
