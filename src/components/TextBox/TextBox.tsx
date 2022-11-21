import React from "react";
import Typography from "@mui/material/Typography";
import "./TextBox.css";

interface Props {
  text: string;
}

const TextBox: React.FC<Props> = (props) => {
  return (
    <Typography variant="h1" component="h1">
      {props.text}
    </Typography>
  );
};

export default TextBox;
