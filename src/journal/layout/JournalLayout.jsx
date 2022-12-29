import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 310;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box
        backgroundColor="#0e141f" 
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
