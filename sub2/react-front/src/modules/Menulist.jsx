import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Menulist = props => {
  const menumap = {
    "/": [
      { id: 1, menuname: "home", menupath: "/" },
      { id: 2, menuname: "login", menupath: "/login" },
      { id: 3, menuname: "signup", menupath: "/signup" }
    ],
    "/signup": [
      { id: 1, menuname: "home", menupath: "/" },
      { id: 2, menuname: "login", menupath: "/login" }
    ],
    "/login":[
      { id: 1, menuname: "home", menupath: "/" },
      { id: 2, menuname: "signup", menupath: "/signup" }
    ]
  };
  const currentHistory = props.currentHistory;
  console.log(currentHistory);
  return (
    <>
      {menumap[currentHistory].map(menu => (
        <Link to={menu.menupath} key={menu.id}>
          <Button>{menu.menuname}</Button>
        </Link>
      ))}
    </>
  );
};
export default Menulist;
