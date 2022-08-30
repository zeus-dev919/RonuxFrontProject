import React from "react";
import { Button, Grid, ListItem, Typography, Box, Divider, Paper, styled } from "@mui/material";
import VersionList from "../components/appRelease/VersionList";
import VersionInfo from "../components/appRelease/VersionInfo";
import VersionDescription from "../components/appRelease/VersionDescription";
import CreateVersionModal from "../components/appRelease/CretateVersionModal";
import MoreOptionButton from "../components/appRelease/MoreOptionButton";

const CreateRoleButton = styled(Button)({
  borderRadius: 20,
  marginLeft: 20,
  marginTop: 40,
  textTransform: "none",
});

const CustomPaper = styled(Paper)({
  height: "100vh",
  borderRadius: 0,
});

export default function AppRelease() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem>
        <Typography ml={1}> App release </Typography>
      </ListItem>
      <Divider />
      <Grid container>
        <Grid item xs={2}>
          <CustomPaper variant="outlined">
            <CreateRoleButton variant="outlined" onClick={() => setOpen(true)}>
              Create new version
            </CreateRoleButton>
            <br />
            <VersionList />
          </CustomPaper>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <VersionInfo />
            <MoreOptionButton />
          </Box>

          <Divider />
          <VersionDescription />
        </Grid>
      </Grid>
      {open && <CreateVersionModal onClose={handleClose} />}
    </>
  );
}
