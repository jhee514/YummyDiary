import React from "react";
import { withStyles, TextField } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#FFFFFF",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #000000",
    },
  },
})(TextField);
const InputText = (props) => {
  const { value, onChange, disabled, label, name ,classes,type, error, helperText} = props
  return (
    <CssTextField
      className={classes}
      label={label}
      variant="outlined"
      type={type===undefined? "text":type}
      disabled ={disabled===undefined? false : disabled}
      value={value}
      name={name}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};
export default InputText;