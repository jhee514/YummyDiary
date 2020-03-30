import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#b3d4fc",
    flexGrow: 1
  }
}));
const Header = props => {
  const classes = useStyles();
  const open = props.open;
  const setOpen = props.setOpen;
  const onClickEvent = event => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {open ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={onClickEvent}
            >
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onClickEvent}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
