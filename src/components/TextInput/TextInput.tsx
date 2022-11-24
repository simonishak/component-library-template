import React from "react";
import TextField from "@mui/material/TextField";
import theme from "../../theme";
import { ThemeProvider } from "@emotion/react";

export interface Props {
  placeholder: string;
  defaultText: string;
}

const TextInput: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-required"
        label={props.placeholder}
        defaultValue={props.defaultText}
      />
    </ThemeProvider>
  );
};

export default TextInput;
