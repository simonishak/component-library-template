import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009fdf",
      light: "#d2edfd",
      dark: "#002d72",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#009fdf",
      dark: "#002d72",
    },
    success: {
      main: "#7fba23",
    },
    warning: {
      main: "#ffcd00",
    },
    error: {
      main: "#a61731",
    },
  },
  typography: {
    allVariants: {
      fontFamily:
        "Whitney Book, Whitney SSM A, Whitney SSm B, Open Sans, Lato, Arial",
    },
  },
});

export default theme;
