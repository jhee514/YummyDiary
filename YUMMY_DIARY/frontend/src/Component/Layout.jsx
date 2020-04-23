import React, { Fragment, useState } from "react";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Header from "./Header";
<<<<<<< HEAD:sub2/react-front/src/Component/Layout.jsx
import cafe from "../cafe.jpg"
=======
>>>>>>> 53c840a2d77bfbfa91ab291303c8e12ef254bd79:YUMMY_DIARY/frontend/src/Component/Layout.jsx
import { useHistory } from "react-router-dom"


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "0",
<<<<<<< HEAD:sub2/react-front/src/Component/Layout.jsx
    // backgroundImage: `url(${cafe})`,
    //backgroundPosition: "center",
    //backgroundSize: "cover",
    //backgroundRepeat: "no-repeat",
=======
>>>>>>> 53c840a2d77bfbfa91ab291303c8e12ef254bd79:YUMMY_DIARY/frontend/src/Component/Layout.jsx
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
