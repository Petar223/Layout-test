import { createTheme } from "@mui/material/styles";
import { red, green, grey, blue, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    grey: {
      100: grey[100],
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
    },
    text: {
      primary: "#000000",
      secondary: grey[600],
      white: "#fff",
    },
    divider: grey[300],
    background: {
      default: grey[100],
      paper: "#ffffff",
    },
    link: blue,
    star: yellow[700],
  },
  status: {
    danger: "#ff1744",
  },
  common: {
    white: "#fff",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    subtitle1: {
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: "1rem",
      color: red[500],
    },
    body2: {
      color: grey[600],
    },
  },
});

export default theme;
