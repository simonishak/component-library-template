import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  placeholder: string;
  defaultText: string;
}

const TextInput: React.FC<Props> = (props) => {
  return (
    <TextField
      id="outlined-required"
      label={props.placeholder}
      defaultValue={props.defaultText}
    />
  );
};

export default TextInput;
