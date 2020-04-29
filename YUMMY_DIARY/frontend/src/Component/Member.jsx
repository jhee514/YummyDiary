import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Box,
  Typography,
  useTheme,
  Tab,
  AppBar,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";
import MemberUpdate from "./Member/MemberUpdate";
import PwChange from "./Member/PwChange";
import { url } from "../modules/config";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "10vh",
    marginBottom: "10vh",
    minHeight: "400px",
    minWidth:"700px",
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    width: "70%",
    
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "white",
      backgroundColor: "#FAC60E",
    },
    "& .PrivateTabIndicator-colorPrimary-139": {
      backgroundColor: "white",
    },
  },
}));

export default function Member(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(()=>{

    const fetchUser = async() => {
      setLoading(true);
      try{
        const response =  await axios(url+"/accounts/mypage/",{headers:{authorization : "jwt "+sessionStorage.getItem("token")}})
        setUser(response.data);
      }catch(e){
        props.history.push("/")
      }
      setLoading(false);    
    }
    fetchUser();
  },[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <div className={classes.content}>
        <AppBar position="static" color="default" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="회원 정보 수정" {...a11yProps(0)} />
            <Tab label="비밀 번호 변경" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          {loading? <></> : <MemberUpdate user={user} setUser={setUser} />}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <PwChange user={user} />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Box>
  );
}
