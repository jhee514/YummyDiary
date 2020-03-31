import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Avatar,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  center: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  logo: {
    marginRight: "20px",
    height: theme.spacing(6),
    width: theme.spacing(21)
  },

}));
const Header = props => {
  const classes = useStyles();
  const open = props.open;
  const setOpen = props.setOpen;
  const onMouseLeaveEvent = event => {
    setOpen(false);
    console.log("1");
  };
  const onMouseUpEvent = event => {
    setOpen(true);
    console.log("2");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Avatar variant="square" src="/logo.png" className={classes.logo}>
            what
          </Avatar>

          <Typography className={classes.center}></Typography>
          <Box
            onPointerLeave={onMouseLeaveEvent}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            {open ? (
              <>
                <Link to="/">
                  <Box marginRight={1}>
                    <Typography>Home</Typography>
                  </Box>
                </Link>
                <Box marginRight={1}>
                  <Link to="/signup">
                    <Typography>Sign Up</Typography>
                  </Link>
                </Box>
              </>
            ) : (
              <></>
            )}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onPointerEnter={onMouseUpEvent}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
