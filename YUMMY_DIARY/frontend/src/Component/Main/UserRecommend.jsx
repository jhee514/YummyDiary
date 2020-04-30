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
  return (
    <div>
      {sessionStorage.getItem("token") === null ? (
        <></>
      ) : (
        <>
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
