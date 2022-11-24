import React from "react";
import Typography from "@mui/material/Typography";
import "./TextBox.css";

export interface Props {
  text: string;
}

const TextBox: React.FC<Props> = (props) => {
  return (
    <Typography variant="h3" component="h3">
      {props.text}
    </Typography>
  );
};

export default TextBox;
