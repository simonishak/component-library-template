import React from "react";
import Typography from "@mui/material/Typography";
import "./TextBox.css";

interface Props {
  text: string;
}

const TextBox: React.FC<Props> = (props) => {
  return (
    <Typography variant="h2" component="h2">
      {props.text}
    </Typography>
  );
};

export default TextBox;
