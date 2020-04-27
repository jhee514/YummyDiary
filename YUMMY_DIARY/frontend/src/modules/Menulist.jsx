import React from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
  },
}));

const Menulist = (props) => {
  const token = sessionStorage.getItem("token");
  const classes = useStyles();
  const buttonlist = [
    {
      id: 0,
      menuname: "home",
      event: () => {
        props.setOpen(false);
        props.history.push("/");
      },
    },
    {
      id: 1,
      menuname: "login",
      event: () => {
        props.setOpen(false);
        props.history.push("/login");
      },
    },
    {
      id: 2,
      menuname: "logout",
      event: () => {
        sessionStorage.removeItem("token");
        props.setOpen(false);
        window.location.reload();
      },
    },

    {
      id: 3,
      menuname: "mypage",
      event: () => {
        props.setOpen(false);
        props.history.push("/mypage");
      },
    },
    {
      id: 4,
      menuname: "signup",
      event: () => {
        props.setOpen(false);
        props.history.push("/signup");
      },
    },
  ];

  const menumap = {
    "/": token === null ? [0, 1, 4] : [0, 3, 2],
    "/signup": [0, 1],
    "/login": [0, 4],
    "/detail": token === null ? [0, 1, 4] : [0, 3, 2],
    "/mypage": [0,2],
    "/review": [0, 3, 2],
    "/searchResult": token === null ? [0, 1, 4] : [0, 3, 2],
  };
  const currentHistory = props.currentHistory;
  return (
    <>
      {menumap[currentHistory].map((num, index) => (
        <Button onClick={buttonlist[num].event} key={index} className={classes.button}>
          {buttonlist[num].menuname}
        </Button>
      ))}
    </>
  );
};
export default Menulist;
