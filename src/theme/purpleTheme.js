import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#0E141F",
    },
    secondary: {
      main: "#543884",
    },
    tertiary: {
      main: "#ada699",
    },
    error: {
      main: red.A400,
    },
  },
});
