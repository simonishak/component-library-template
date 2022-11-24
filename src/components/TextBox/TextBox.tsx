import React from "react";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import "./TextBox.css";
import { ThemeProvider } from "@emotion/react";

export interface Props {
  text: string;
}

const TextBox: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="h3">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
};

export default TextBox;
