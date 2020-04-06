import React, { useState } from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display : "flex" ,
    flexDirection: "column",
    alignItems: "center",
  }
}))

const Main = props => {
  
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      <Box>
        <Typography>main</Typography>
      </Box>

    </Box>

  )
}

export default Main;