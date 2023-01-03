import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={0}
      direction="column"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "#FFF",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
