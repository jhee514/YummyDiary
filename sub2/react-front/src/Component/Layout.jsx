import React, { Fragment, useState } from "react";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import SideBar from "./SideBar";
import Header from "./Header";
import cafe from "../cafe.jpg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    margin: "0 auto",
    padding: "0",
    backgroundImage: `url(${cafe})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  content: {
    width: "100%"
  }
}));
const Layout = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <CssBaseline>
        <Container className={classes.container} maxWidth="xl">
          {/* {open ? <SideBar /> : <></>} */}

          <div className={classes.content}>
            <Header open={open} setOpen={setOpen} />
            {props.children}
          </div>
        </Container>
      </CssBaseline>
    </Fragment>
  );
};

export default Layout;
