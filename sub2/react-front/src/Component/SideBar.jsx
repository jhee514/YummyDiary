import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  Box: {
    backgroundColor: "rgba(0,0,0,0.86)",
    hight: "100vh",
    width: "40vh",
    padding : "2vh",
    textAlign : "center",
    color: "#ffffff"
  }
}));
const SideBar = props => {
  const classes = useStyles()
  return (
  <Box className={classes.Box}>
    <Typography>This is Sidebar</Typography>
  </Box>
  );
};
export default SideBar;
