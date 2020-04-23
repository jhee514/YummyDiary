import React from "react";
import { makeStyles, Button, Typography, Box } from "@material-ui/core";
import { carddata } from "../../modules/dummy";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
  const PrevButton = (props) =>{
    const { className, style, onClick } = props;
    return <button className={className} onClick={onClick} style={{...style, display:"block"}}><ArrowBackIosIcon /></button>
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow : <PrevButton />
    
  };
  return (
    <div>
      <Typography>추천목록</Typography>
      <Slider {...settings} className={classes.slider}>
        {carddata.map((data) => (
          <div key={data.no}>
            <Typography variant="h5">{data.storeName}</Typography>
            <Typography variant="body2">{data.content}</Typography>
            <Typography variant="h6">{data.rating}</Typography>

            {data.url ? (
              <Button
                onClick={(event) => {
                  props.history.push(data.url);
                }}
              >
                상세보기
              </Button>
            ) : (
              <></>
            )}
          </div>
        ))}
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
    </div>
  );
};

export default MainRecommend;
