import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 290;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{ backgroundColor: "primary.main", flexGrow: 1, p: 0 }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
