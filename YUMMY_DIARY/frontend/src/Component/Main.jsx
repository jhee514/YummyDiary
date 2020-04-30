import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import MainBanner from "./Main/MainBanner";
import MainSearch from "./Main/MainSearch";
import MainRecommend from "./Main/MainRecommend";
import UserRecommend from "./Main/UserRecommend";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bannerbox: {
    width: "35%",
    minWidth: "20vw",
    minHeight: "20vh",
    marginTop: "4vh",
    marginBottom: "4vh",
    // justifyContent: "center",
    padding: "1vh 0 1vh 0",
    // flexDirection: "column",
    // alignItems: "center",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  recommendbox: {
    marginTop: "2vh",
    //border: "1px solid #FAC60E",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
  },
  searchbox: {
    width: "70%",
    minWidth: "80vw",
  },
}));
const Main = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* 검색 바 영역 */}
      <Box width="80%" marginTop={1}>
        {/* <DraggableCategories /> */}
        <MainSearch />
      </Box>
      {/* 광고 및 배너 영역 */}
      <Box className={classes.bannerbox}>
        <MainBanner />
      </Box>

      {/* 추천 */}
      <Box className={classes.recommendbox}>
        <MainRecommend history={props.history} />
      </Box>

      <Box className={classes.recommendbox}>
        <UserRecommend history={props.history} />
      </Box>
    </Box>
  );
};

export default Main;
