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
  const {
    value,
    onChange,
    disabled,
    label,
    name,
    variant,
    classes,
    type,
    error,
    helperText,
    multiline,
    placeholder,
    rows,
    fullWidth,
  } = props;
  return (
    <CssTextField
      className={classes}
      label={label}
      rows={rows}
      variant={variant === undefined ? "outlined" : variant}
      type={type === undefined ? "text" : type}
      disabled={disabled === undefined ? false : disabled}
      multiline={multiline === undefined ? false : multiline}
      fullWidth={fullWidth === undefined ? false : fullWidth}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};
export default InputText;
