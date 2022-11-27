
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

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
    </JournalLayout>
  );
};
