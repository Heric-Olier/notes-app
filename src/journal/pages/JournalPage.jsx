
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography sx={{color: 'tertiary.main'}}>
        JDolor aliqua laborum non amet dolore. Sint ut sint duis occaecat
        occaecat. Eiusmod magna veniam laboris minim dolor do officia et commodo
        nulla. Incididunt quis adipisicing minim laboris adipisicing sunt. Velit
        voluptate quis deserunt sit enim aliqua ea sit exercitation.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#ff7c35",
          color: "error.contrastText",
          "&:hover": { backgroundColor: "#ff7c35", opacity: 0.8 },
          boxShadow: 4,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
};
