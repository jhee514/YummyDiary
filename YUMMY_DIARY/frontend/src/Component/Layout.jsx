import React, { Fragment, useState } from "react";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Header from "./Header";
import { useHistory } from "react-router-dom"


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "0",
    height:"100%",
    minHeight:"100vh"
  },
  content: {
    width: "100%",
    height: "100%"
  }
}));
const Layout = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  // console.log('history', history)
  // // location: {pathname: "/", ...}

  return (
    <Fragment>
      <CssBaseline>
        <Container className={classes.container} maxWidth="xl">
          <div className={classes.content}>
            <Header open={open} setOpen={setOpen} history={history} />
            {props.children}
          </div>
        </Container>
      </CssBaseline>
    </Fragment>
  );
};

export default Layout;
