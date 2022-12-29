import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography
          fontSize={29}
          fontWeight={"light"}
          sx={{ color: "tertiary.main" }}
        >
          10th of August 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className="save__btn"
          sx={{ pr: 1.7, pl: 1.7, color: "primary.contrastText" }}
        >
          <SaveOutlined sx={{ mr: 1, fontSize: 25, color: "#ffcb36" }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          fullWidth
          type={"text"}
          variant={"filled"}
          label={"Title"}
          placeholder={"Enter a title"}
          sx={{
            mt: 2,
            backgroundColor: "#374051",
            borderRadius: 1,
          }}
        />

        <TextField
          fullWidth
          multiline
          minRows={10}
          type={"text"}
          variant={"filled"}
          label={"Description"}
          placeholder={"Enter a Description"}
          sx={{
            mt: 2,
            backgroundColor: "#374051",
            borderRadius: 1,
          }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
