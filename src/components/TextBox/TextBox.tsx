import React from "react";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import "./TextBox.css";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

export interface TextBoxProps {
  text: string;
}

const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="h3">
        {props.text}
      </Typography>
      <Button variant="contained" color="secondary">
        Button
      </Button>
    </ThemeProvider>
  );
};

export default TextBox;
