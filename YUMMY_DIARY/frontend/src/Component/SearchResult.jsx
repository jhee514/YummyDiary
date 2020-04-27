import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Box,
  withStyles,
  Link,
} from "@material-ui/core";
import "./Main/style.scss";
import axios from "axios";
import ItemList from "./SearchResult/ItemList";

const useStyles = makeStyles((theme) => ({
  ItemList_Box: {
    marginTop: "3vw",
    //border: "1px solid #FAC60E",
    marginLeft: "18vh",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
  },
  ItemList_Box2:{
    marginTop: "10vw",
    //border: "1px solid #FAC60E",
    marginLeft: "18vh",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
  },
  empty_Div: {
    marginTop:"15vw",
  }
}));
const SearchResult = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.ItemList_Box}>
        <ItemList history={props.history} />
      </Box>
      <Box className={classes.ItemList_Box2}>
        <ItemList history={props.history} />
      </Box>
      <div className={classes.empty_Div}></div>
    </div>
  );
};

export default SearchResult;
