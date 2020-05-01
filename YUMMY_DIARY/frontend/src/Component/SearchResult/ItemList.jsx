import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
// import { carddata } from "../../modules/dummy";
import Slider from "react-slick";
import "../Main/style.scss";

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
  searchResult_Box: {
    justifyContent: "center",
  },
  header: {
    marginTop: "4vh",
  },
}));

const MainRecommend = (props) => {
  const classes = useStyles();
  const {stores} = props
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <Box className={classes.searchResult_Box}>
      
      {
        <Slider {...settings} className={classes.slider}>
          {stores.map((store) => (
            <div key={store.id}>
              <img
                src={store.image}
                alt={store.name}
                style={{ width: "16vw", height: "12vw" }}
              />
              <Typography variant="h5">{store.name}</Typography>
              <Typography variant="body2">{store.address}</Typography>
              <Typography variant="h6">{store.tel}</Typography>
              <Typography variant="caption">
                <Link
                  onClick={(event) => props.history.push("/detail/" + store.id)}
                >
                  상세보기
                </Link>
              </Typography>
            </div>
          ))}
        </Slider>
      }
    </Box>
  );
};

export default MainRecommend;
