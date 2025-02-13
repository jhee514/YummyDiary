import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menulist from "../modules/Menulist"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  center: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bar: {
    backgroundColor: "#FAC60E"
  },
  logo: {
    marginRight: "20px",
    marginTop: "10px",
    height: theme.spacing(8),
    width: theme.spacing(18)
  },
  login_signup: {
    marginTop: "10px",
    marginRight: "12px",
    height: theme.spacing(8),
    width: theme.spacing(32),
  }

}));
const Header = props => {
  const classes = useStyles();
  const status = props.history.location.pathname;
  const open = props.open;
  const setOpen = props.setOpen;
  const onMouseUpEvent = event => {
    setOpen(!open);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        {status === '/login' || status === '/signup' ? (
          <Toolbar className={classes.center}>
            <a href="/"><img src="/logo_x_white.png" className={classes.login_signup}/></a>
          </Toolbar>
        ) : (
        <Toolbar>
          <a href="/"><img src="/logo.png" className={classes.logo}/></a>

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
                <Menulist currentHistory={props.history.location.pathname} open={open} setOpen={setOpen} history={props.history}/>
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
      )}
      </AppBar>
    </div>
  );
};
export default Header;
