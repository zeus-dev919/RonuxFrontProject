import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import {
  ListItemButton,
  ListItemText,
  Table,
  TableContainer,
  TableFooter,
  Paper,
  Typography,
  Toolbar,
  Box,
  Divider,
  ListItem,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DecideButton } from "../../commonStyle/CommonStyle";


import AdminUserPagination from "../../components/adminUserModals/AdminUserPagination";
import OASTableHead from "../../components/occupationAndSkills/OASTableHead";
import PopOverModal from "../../components/occupationAndSkills/PopOverModal";
import OASDeletedTableBody from "../../components/occupationAndSkills/OASDeletedTableBody";
import OASTableBody from "../../components/occupationAndSkills/OASTableBody";
import AddSkillModal from "../../components/occupationAndSkills/AddSkillModal";

const CustomPaper = styled(Paper)({
  height: "100vh",
  borderRadius: 0,
});

//Reac API data here
const data = [{
  name: 'Java',
  category: 'Language',
  admin: 'Perry Lance',
  addTime: '2022-03-10',
  updateTime: '2022-03-11'
}, {
  name: 'Java',
  category: 'Language',
  admin: 'Perry Lance',
  addTime: '2022-03-10',
  updateTime: '2022-03-11'
}, {
  name: 'Java',
  category: 'Language',
  admin: 'Perry Lance',
  addTime: '2022-03-10',
  updateTime: '2022-03-11'
},]

const deletedData = [{
  name: 'Java',
  category: 'Language',
  admin: 'Perry Lance',
  remainingDays: 'Can be restored in 18 days',
},];

export default function OccupationAndSkills() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [header, setHeader] = React.useState("Currently showing all skills");
  const [tableHeader, setTableHeader] = React.useState(["Skill name", "Skill category", "Administrator", "Add time", "Update time"]);
  const [rows, setRows] = React.useState(data);
  const [clear, setClear] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [addSkill, setAddSkill] = React.useState(false);
  const open = Boolean(anchorEl);
  //handle event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deletedSkillClick = () => {
    setHeader("Currently showing recently deleted skills");
    setTableHeader(["Skill name", "Skill category", "Administrator", "Days remaining before deletion"]);
    setClear(true);
  }
  const clearClick = () => {
    setClear(false);
    setHeader("Currently showing all skills");
    setTableHeader(["Skill name", "Skill category", "Administrator", "Add time", "Update time"]);
    setRows(data);
  }
  const addSkillClick = () => {
    setAddSkill(false);
  }

  return (
    <>
      <ListItem>
        <Typography ml={1}> Occupation & Skills </Typography>
      </ListItem>
      <Divider />
      <Grid container>
        <Grid item xs={2}>
          <CustomPaper variant="outlined">
            <List>
              <Typography variant="h6" mt={3} ml={3} mb={1}>
                Occupational categories
              </Typography>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => setSelectedIndex(0)}
              >
                <ListItemText
                  style={{ paddingLeft: "10px" }}
                  id={"labelId"}
                  primary={"Development"}
                  className={selectedIndex === 0 ? "list-active" : ""}
                />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => setSelectedIndex(1)}
              >
                <ListItemText
                  style={{ paddingLeft: "10px" }}
                  id={"labelId"}
                  primary={"Design"}
                  className={selectedIndex === 1 ? "list-active" : ""}
                />
              </ListItemButton>
            </List>
          </CustomPaper>
        </Grid>
        <Grid item xs={10}>
          <CustomPaper variant="outlined">
            <Box>
              <Box className="user-admin-console-container">
                <Toolbar className="blocked-toolbar">
                  <Typography className="user-admin-console-typography">
                    {header}
                  </Typography>
                  {!clear && <DecideButton onClick={() => setAddSkill(true)}>Add skills</DecideButton>}
                </Toolbar>
                <AddSkillModal addSkill={addSkill} addSkillClick={addSkillClick} />
                <Box className="admin-user-console-choose">
                  <Box onClick={handleClick} className="user-admin-console-add-filters">
                    <AddIcon />
                    Add filters
                  </Box>
                  {clear && <Box onClick={clearClick} className="user-admin-console-clear-filters">Clear filters</Box>}
                </Box>
                <PopOverModal open={open} anchorEl={anchorEl} handleClose={handleClose} deletedSkillClick={deletedSkillClick} />
                <TableContainer component={Paper}>
                  <Table>
                    <OASTableHead name={tableHeader} />
                    {!clear &&
                      <OASTableBody rows={rows} />}
                    {clear &&
                      <OASDeletedTableBody rows={deletedData} />}
                    <TableFooter>
                      <AdminUserPagination rows={rows} />
                    </TableFooter>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </CustomPaper>
        </Grid>
      </Grid>
    </>
  );
}
