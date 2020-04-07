import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Menulist from "../modules/Menulist"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  center: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#FAC60E"
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
  const onMouseUpEvent = event => {
    setOpen(!open);
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
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            {open ? (
              <>
                {/* <Link to="/">
                  <Box marginRight={1}>
                    <Typography>Home</Typography>
                  </Box>
                </Link>
                <Box marginRight={1}>
                  <Link to="/signup">
                    <Typography>Sign Up</Typography>
                  </Link>
                </Box> */}
                <Menulist currentHistory={props.history.location.pathname}/>
              </>
            ) : (
              <></>
            )}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMouseUpEvent}
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
