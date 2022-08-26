import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  styled,
  Switch,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TreeView from "@mui/lab/TreeView/TreeView";
import TreeItem from "@mui/lab/TreeItem/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack } from "@mui/system";
import DetailDialog from "./adminDialogs/DetailDialog";
import CreateAdmin from "./adminDialogs/CreateAdmin";
import AssignAdmin from "./adminDialogs/AssignAdmin";
import ResetPassword from "./adminDialogs/ResetPassword";
import RenameAdmin from "./adminDialogs/RenameAdmin";
import DeleteAdmin from "./adminDialogs/DeleteAdmin";
import { TabPanel } from "./../commonStyle/CommonStyle";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GrayButton = styled(Button)({
  textTransform: "none",
  borderRadius: 30,
  margin: "15px -5px 15px 20px",
  ":hover": {
    backgroundColor: "lightblue",
  },
});

const CustomTreeItem = (props: any) => {
  const { label, ...other } = props;
  return (
    <TreeItem
      {...other}
      label={
        <>
          <Checkbox defaultChecked color="secondary" size="small" /> {label}{" "}
        </>
      }
    />
  );
};

export default function SuperAdminTab() {
  const [value, setValue] = React.useState<any>(0);
  const [checked, setChecked] = React.useState([0]);
  const [detailDialogOpen, setDetailDialogOpen] = React.useState(false);
  const [createAdminOpen, setCreateAdminOpen] = React.useState(false);
  const [assignAdminOpen, setAssignAdminOpen] = React.useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = React.useState(false);
  const [renameAdminOpen, setRenameAdminOpen] = React.useState(false);
  const [deleteAdminOpen, setDeleteAdminOpen] = React.useState(false);

  const handleTabChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          style={{ marginLeft: "30px" }}
        >
          <Tab
            label="Administrators"
            {...a11yProps(0)}
            className="normal-text"
          />
          <Tab label="Permissions" {...a11yProps(1)} className="normal-text" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GrayButton variant="outlined" onClick={() => setCreateAdminOpen(true)}>
          Create administrator account
        </GrayButton>
        <GrayButton variant="outlined" onClick={() => setAssignAdminOpen(true)}>
          Assign administrator role
        </GrayButton>
        <GrayButton variant="outlined">Unassign administrator role</GrayButton>
        <TableContainer>
          <Table
            size="small"
            stickyHeader
            padding="normal"
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell className="gray-header" align="left" colSpan={2}>
                  <Checkbox />
                  Name
                </TableCell>
                <TableCell className="gray-header" align="left" colSpan={1}>
                  Email
                </TableCell>
                <TableCell className="gray-header" align="left" colSpan={1}>
                  last sign in time
                </TableCell>
                <TableCell
                  className="gray-header"
                  align="left"
                  colSpan={4}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                className="active-hover"
                style={{ cursor: "pointer" }}
                hover
                role="checkbox"
                tabIndex={-1}
                key={1}
              >
                <TableCell key={1} align={"left"} colSpan={2}>
                  <Stack direction="row" spacing={0}>
                    <Checkbox />
                    <Avatar />
                    <Button
                      className="name-detail normal-text"
                      onClick={() => setDetailDialogOpen(true)}
                      variant="text"
                    >
                      Perry Lance
                    </Button>
                  </Stack>
                </TableCell>
                <TableCell key={1} align={"left"} colSpan={1}>
                  usertcqq@gmail.com
                </TableCell>
                <TableCell key={1} align={"left"} colSpan={1}>
                  2020-03-10 05:23
                </TableCell>
                <TableCell key={1} align={"right"} colSpan={4}>
                  <GrayButton
                    style={{ margin: "5px" }}
                    variant="text"
                    onClick={() => setResetPasswordOpen(true)}
                  >
                    Reset password
                  </GrayButton>
                  <GrayButton
                    style={{ margin: "5px" }}
                    variant="text"
                    onClick={() => setRenameAdminOpen(true)}
                  >
                    Rename administrator
                  </GrayButton>
                  <GrayButton
                    style={{ margin: "5px" }}
                    variant="text"
                    onClick={() => setDeleteAdminOpen(true)}
                  >
                    Delete administrator account
                  </GrayButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{
            margin: "10px 10px",
            height: "100%",
            flexGrow: 1,
            width: "25%",
          }}
        >
          <CustomTreeItem nodeId="1" label="Privacy & Terms">
            <CustomTreeItem nodeId="2" label="Read">
              <CustomTreeItem nodeId="3" label="Get privacy policy" />
              <CustomTreeItem nodeId="4" label="Get terms of service" />
            </CustomTreeItem>
            <CustomTreeItem nodeId="5" label="Update">
              <CustomTreeItem nodeId="6" label="Edit privacy policy" />
              <CustomTreeItem nodeId="7" label="Edit terms of service" />
            </CustomTreeItem>
          </CustomTreeItem>
          <CustomTreeItem nodeId="8" label="App release">
            <CustomTreeItem nodeId="9" label="Create" />
            <CustomTreeItem nodeId="10" label="Read" />
            <CustomTreeItem nodeId="11" label="Update">
              <CustomTreeItem nodeId="12" label="Modify version" />
              <CustomTreeItem nodeId="13" label="Release version" />
            </CustomTreeItem>
            <CustomTreeItem nodeId="14" label="Delete" />
          </CustomTreeItem>
        </TreeView>
      </TabPanel>

      {/* Detail Dialog */}
      {detailDialogOpen && (
        <DetailDialog onClose={() => setDetailDialogOpen(false)} />
      )}

      {/* Create administrator account */}
      {createAdminOpen && (
        <CreateAdmin onClose={() => setCreateAdminOpen(false)} />
      )}

      {/* Assign administrator */}
      {assignAdminOpen && (
        <AssignAdmin onClose={() => setAssignAdminOpen(false)} />
      )}

      {/* Reset Password */}
      {resetPasswordOpen && (
        <ResetPassword onClose={() => setResetPasswordOpen(false)} />
      )}

      {/* Rename administrator */}
      {renameAdminOpen && (
        <RenameAdmin onClose={() => setRenameAdminOpen(false)} />
      )}

      {/* Delete administrator */}
      {deleteAdminOpen && (
        <DeleteAdmin onClose={() => setDeleteAdminOpen(false)} />
      )}
    </Box>
  );
}
