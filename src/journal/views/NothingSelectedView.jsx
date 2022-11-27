import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    textAlign={"center"}
    justifyContent="center"
    alignItems="center"
    spacing={0}
    direction="column"
    sx={{ minHeight: "calc(100vh - 112px)", backgroundColor: "primary.main", padding: 4 }}
  >
    <Grid item xs={12}>
        <CheckBoxOutlinedIcon sx={{ fontSize: 100, color: "#ff7c35;" }} />
       
        <Typography variant="h5" sx={{ mb: 1, color: "primary.contrastText" }}>
            Select something
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, color: "tertiary.main" }}>
            Create an entry or select one from the list on the left
        </Typography>

    </Grid>


    </Grid>

  )
}
