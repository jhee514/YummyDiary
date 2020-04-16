import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Menulist = (props) => {
  const token = sessionStorage.getItem("token");
  const menumap = {
    "/": [
      {
        id: 1,
        menuname: "home",
        event: () => {
          props.setOpen(false);
          props.history.push("/");
        },
      },
      token === null
        ? {
            id: 2,
            menuname: "login",
            event: () => {
              props.setOpen(false);
              props.history.push("/login");
            },
          }
        : {
            id: 2,
            menuname: "logout",
            event: () => {
              sessionStorage.removeItem("token");
              props.setOpen(false);
              window.location.reload();
            },
          },
      token === null
        ? {
            id: 3,
            menuname: "signup",
            event: () => {
              props.setOpen(false);
              props.history.push("/signup");
            },
          }
        : null,
    ],
    "/signup": [
      {
        id: 1,
        menuname: "home",
        event: () => {
          props.setOpen(false);
          props.history.push("/");
        },
      },
      {
        id: 2,
        menuname: "login",
        event: () => {
          props.setOpen(false);
          props.history.push("/login");
        },
      },
    ],
    "/login": [
      {
        id: 1,
        menuname: "home",
        event: () => {
          props.setOpen(false);
          props.history.push("/");
        },
      },
      {
        id: 2,
        menuname: "signup",
        event: () => {
          props.setOpen(false);
          props.history.push("/signup");
        },
      },
    ],
  };
  const currentHistory = props.currentHistory;
  return (
    <>
      {menumap[currentHistory].map((menu, index) =>
        menu === null ? (
          <Box key={index}></Box>
        ) : (
          <Button onClick={menu.event} key={index}>
            {menu.menuname}
          </Button>
        )
      )}
    </>
  );
};
export default Menulist;
