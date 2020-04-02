import React, { Fragment, useState } from "react";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import SideBar from "./SideBar";
import Header from "./Header";
import cafe from "../cafe.jpg"
import { useHistory } from "react-router-dom"


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "0",
    backgroundImage: `url(${cafe})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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

  return (
    <Fragment>
      <CssBaseline>
        <Container className={classes.container} maxWidth="xl">
          {/* {open ? <SideBar /> : <></>} */}

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
