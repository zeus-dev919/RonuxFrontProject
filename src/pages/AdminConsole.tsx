import React from "react";
import { Button, Grid, ListItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SuperAdminTab from "../components/SuperAdminTab";
import CheckboxList from "../components/SideList";
import PopperButton from "../components/PopperButton";
import CreateNewRole from "../components/adminDialogs/CreateNewRole";

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

export default function AdminConsole() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem>
        <Typography ml={1}> Administrator </Typography>
      </ListItem>
      <Divider />
      <Grid container>
        <Grid item xs={2}>
          <CustomPaper variant="outlined">
            <CreateRoleButton variant="outlined" onClick={() => setOpen(true)}>
              Create a new role
            </CreateRoleButton>
            <br />
            <CheckboxList />
          </CustomPaper>
        </Grid>
        <Grid item xs={10}>
          <CustomPaper variant="outlined">
            <Typography m={2}> Super Administrator </Typography>
            <PopperButton />
            <Typography m={2} style={{ color: "grey" }}>
              {" "}
              The role has administrative rights{" "}
            </Typography>
            <SuperAdminTab />
          </CustomPaper>
        </Grid>
      </Grid>
      {open && <CreateNewRole onClose={handleClose} />}
    </>
  );
}
