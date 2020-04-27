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
    marginTop: "2vh",
    //border: "1px solid #FAC60E",
    marginLeft: "18vh",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
  }
}));
const SearchResult = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.ItemList_Box}>
        <ItemList />
      </Box>
    </div>
  );
};

export default SearchResult;
