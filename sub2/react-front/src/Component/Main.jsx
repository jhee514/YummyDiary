import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  InputBase,
  GridList,
  GridListTile,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";
import { carddata } from "../modules/dummy";
import DraggableCategories from "./DraggableCategories";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bannerbox : {
    width: "70%",
    minWidth: "80vw",
    marginTop: "2vw",
    border: "1px solid #FAC60E",
    justifyContent: "center",
    display: "flex",
    padding: "1vh 0 1vh 0",
    flexDirection: "column",
    alignItems: "center",
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
  searchbox:{
    width: "70%",
    minWidth: "80vw",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridListTile:{
    backgroundColor : "#FFFFFF",
    border: "1px solid #FAC60E",
    margin: "1px 1px 1px 1px"
  },
}));
const Main = (props) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState({  
    keyword : "",
    related : [],
  })

  const searchChangeEvent = event => {
    setSearchInput({
      ...searchInput,
      keyword : event.target.value
    })
    console.log(searchInput)
  }
  return (
    <Box className={classes.root}>
      {/* 광고 및 배너 영역 */}
      <Box className={classes.bannerbox}>
        <Box display="flex" maxHeight="30vh">
          <img src="/tmpbanner.jpg" alt="banner" className={classes.image} />
        </Box>
        <Box>
          <Pagination count={10} disabled />
        </Box>
      </Box>
      {/* 검색 바 영역 */}
      <Box width="80%">
      <DraggableCategories />

      </Box>
      {/* 추천 */}
      <Box className={classes.recommendbox} >
        <Typography>추천목록</Typography>
        <GridList cols={2.5} className={classes.gridList}>
          {carddata.map((data) => (
            <GridListTile key={data.no} className={classes.gridListTile}>
              
                  <Typography variant="h5">{data.storeName}</Typography>
                  <Typography variant="body2">{data.content}</Typography>
                  <Typography variant="h6">{data.rating}</Typography>

            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Box>
  );
};

export default Main;