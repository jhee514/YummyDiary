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
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  banner: {
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
  recommend: {
    marginTop: "2vh",
    //border: "1px solid #FAC60E",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
    
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
  search: {
    position: "relative",
    marginTop: "1vh",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Main = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* 광고 및 배너 영역 */}
      <Box className={classes.banner}>
        <Box display="flex" maxHeight="30vh">
          <img src="/tmpbanner.jpg" alt="banner" className={classes.image} />
        </Box>
        <Box>
          <Pagination count={10} disabled />
        </Box>
      </Box>
      {/* 검색 바 영역 */}
      <Box >
        <div className={classes.search} >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Box>
      {/* 추천 */}
      <Box className={classes.recommend} >
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
