import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import { carddata } from "../../modules/dummy";
import Slider from "react-slick";
import "./style.scss";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

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
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setStores(null);
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/stores/stores/"
        );
        setStores(response.data.results);
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
    slidesToScroll: 2,
  };
  return (
    <div>
      <Typography>추천목록</Typography>
      {
        <Slider {...settings} className={classes.slider}>
          {loading ? (
            <div>
            <ScaleLoader />
            </div>
          ) : (
            stores.map((store) => (
              <div key={store.id}>
                <img src={store.image} alt={store.name} style={{width : "16vw" , height:"12vw"}}/>
                <Typography variant="h5">{store.name}</Typography>
                <Typography variant="body2">{store.address}</Typography>
                <Typography variant="h6">{store.tel}</Typography>
                <Button
                  onClick={(event) => props.history.push("/detail/" + store.id)}
                >
                  상세보기
                </Button>
              </div>
            ))
          )}
          {/* <GridList cols={2.5} className={classes.gridList}>
          {carddata.map((data) => (
            <GridListTile key={data.no} className={classes.gridListTile}>
              <Typography variant="h5">{data.storeName}</Typography>
              <Typography variant="body2">{data.content}</Typography>
              <Typography variant="h6">{data.rating}</Typography>
              {data.url ? (
                
                  <Button onClick={(event) => {
                    props.history.push(data.url)
                  }}>상세보기</Button>
                
              ) : (
                <></>
              )}
            </GridListTile>
          ))}
        </GridList> */}
        </Slider>
      }
    </div>
  );
};

export default MainRecommend;