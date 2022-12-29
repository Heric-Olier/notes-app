import { TurnedInNot } from "@mui/icons-material";
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Grid,
  ListItemText,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxShadow: "inset -9rem 0 9rem -9rem #000;",
            borderRight: "1px solid #29303d;",
            backgroundColor: "primary.main",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar
          className="sidebar__toolbar"
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Heric Olier
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {["Notes", "Calendar", "Settings", "Profile"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot sx={{ color: "#ffcb36" }} />
                </ListItemIcon>
                <Grid container>
                  <ListItemText
                    primary={text}
                    sx={{ color: "primary.contrastText" }}
                  />
                  <ListItemText
                    secondary={
                      "Elit amet id Lorem magna. Ipsum laborum irure sunt in aliquip mollit do elit occaecat."
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
