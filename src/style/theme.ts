import { createTheme } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: green[300],
    },
  },
});

export default theme;
