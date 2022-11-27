import { Image, LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth = 240 }) => {

    const logoNav = "/public/logo-header.png";

  return (
    <AppBar
      className="navbar"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` }, // 100% - 240px
        ml: { sm: `${drawerWidth}px` }, // 240px
      }}
    >
      <Toolbar className="navbar__toolbar">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined sx={{ fontSize: 32 }} />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography noWrap component="div">
            <img className="logo-nav" src={logoNav} alt="logo" sx={{ height: 40 }} />
          </Typography>
          <IconButton color="error">
            <LogoutOutlined sx={{ fontSize: 32 }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
