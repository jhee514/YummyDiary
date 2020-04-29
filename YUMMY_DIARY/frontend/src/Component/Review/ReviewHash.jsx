import React, { useState } from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, Box, TextField, Button } from "@material-ui/core";
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  tagOuterDiv: {
    display: "flex"
  },
  tagName: {
    width: 50,
    height: 16,
    marginTop: "6%",
    // marginRight: "2vh"
  }
});



// Inspired by blueprintjs
export default function StyledCheckbox(props) {
  const classes = useStyles();
  const {id, hashs, setHashs, add_hashs, setAdd_Hashs} = props;
  // const { id, hashs, add_hashs, setAdd_Hashs } = props;
  const [hashs_check, setHashs_check] = useState([
    { id: 0, checkable: false },
    { id: 1, checkable: false },
    { id: 2, checkable: false },
    { id: 3, checkable: false },
    { id: 4, checkable: false },
    { id: 5, checkable: false },
    { id: 6, checkable: false },
    { id: 7, checkable: false },
    { id: 8, checkable: false },
    { id: 9, checkable: false },
  ])

  const changeHandler = (event) => {
    // console.log('변화감지!');

    // if(hashs_check[id].checkable === false){
      let temp = add_hashs
      let current_value = event.target.value
      if(temp.includes(current_value)){
        temp.splice(temp.indexOf(current_value), 1)
        // temp = temp.filter((hash) => hash !== current_value)
      } else {
        temp.push(current_value);
      }
      setAdd_Hashs(temp)
      console.log(add_hashs);

    // }
  }

  return (
    <div className={classes.tagOuterDiv}>
      <div className={classes.checkDiv}>
        <Checkbox
          className={classes.root}
          disableRipple
          color="default"
          value={hashs[id].tagName}
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          inputProps={{ 'aria-label': 'decorative checkbox' }}
          {...props}
          // checked={changeHandler}
          // checked={add_hashs.includes(hashs[id].tagName)}
          onChange={changeHandler}
          />
      </div>
      <div className={classes.tagName}>{hashs[id].tagName}</div>
    </div>
    
  );
}