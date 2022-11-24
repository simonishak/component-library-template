import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export interface Props {
  items: Item[];
}

export interface Item {
  text: string;
}

const UnifyList: React.FC<Props> = (props) => {
  const items = props.items.map((item, idx) => {
    return (
      <ListItem key={idx} disablePadding>
        <ListItemButton>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>{items}</List>
      </nav>
    </Box>
  );
};

export default UnifyList;
