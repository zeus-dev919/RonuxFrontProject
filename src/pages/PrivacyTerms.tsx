import React, { useState } from "react";
import {
  Divider,
  Grid,
  Input,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../commonStyle/CommonStyle";
import Box from "@mui/material/Box";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import { BlueButton } from "./../commonStyle/CommonStyle";

const CustomPaper = styled(Paper)({
  height: "100vh",
  borderRadius: 0,
});

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PrivacyTerms() {
  const [tabValue, setTabValue] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const handleChange = (file: any) => {
    setFile(file);
  };

  const fileTypes = ["*"];

  return (
    <>
      <ListItem>
        <Typography ml={1}> Privacy & Terms </Typography>
      </ListItem>
      <Divider />
      <Grid container>
        <Grid item xs={2}>
          <CustomPaper variant="outlined">
            <br />
            <List>
              <Typography variant="h6" mt={3} ml={3} mb={1}>
                Privacy Policy
              </Typography>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => setSelectedIndex(0)}
              >
                <ListItemText
                  style={{ paddingLeft: "10px" }}
                  id={"labelId"}
                  primary={"English"}
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
                  primary={"Chinese (Simplified)"}
                  className={selectedIndex === 1 ? "list-active" : ""}
                />
              </ListItemButton>
            </List>
            <Divider />
            <List>
              <Typography variant="h6" mt={3} ml={3} mb={1}>
                Terms of Service
              </Typography>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => setSelectedIndex(2)}
              >
                <ListItemText
                  style={{ paddingLeft: "10px" }}
                  id={"labelId"}
                  primary={"English"}
                  className={selectedIndex === 2 ? "list-active" : ""}
                />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={() => setSelectedIndex(3)}
              >
                <ListItemText
                  style={{ paddingLeft: "10px" }}
                  id={"labelId"}
                  primary={"Chinese (Simplified)"}
                  className={selectedIndex === 3 ? "list-active" : ""}
                />
              </ListItemButton>
            </List>
          </CustomPaper>
        </Grid>
        <Grid item xs={10}>
          <CustomPaper variant="outlined">
            <Typography mt={4} ml={4} mb={2}>
              {" "}
              Update time: 2020-11-25{" "}
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                style={{ marginLeft: "30px" }}
              >
                <Tab
                  label="Administrators"
                  {...a11yProps(0)}
                  className="normal-text"
                />
                <Tab
                  label="Permissions"
                  {...a11yProps(1)}
                  className="normal-text"
                />
              </Tabs>
            </Box>

            <TabPanel style={{ margin: "20px" }} value={tabValue} index={0}>
              <TextField
                sx={{ width: "100%", height: "200px" }}
                rows={10}
                placeholder="Content description"
                multiline
              />
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <Box
                  sx={{
                    border: "1px dashed",
                    color: "gray",
                    marginTop: "37px",
                  }}
                >
                  <div style={{ marginLeft: "10px" }}>
                    Attach files by dragging & dropping, selecting or pasting
                    them.
                  </div>
                </Box>
              </FileUploader>
              <BlueButton style={{ float: "right", marginTop: "15px" }}>
                Save
              </BlueButton>
            </TabPanel>

            <TabPanel style={{ margin: "20px" }} value={tabValue} index={1}>
              <TextField
                sx={{ width: "100%", height: "200px" }}
                rows={10}
                placeholder="Content description"
                multiline
              />
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <Box
                  sx={{
                    border: "1px dashed",
                    color: "gray",
                    marginTop: "37px",
                  }}
                >
                  <div style={{ marginLeft: "10px" }}>
                    Attach files by dragging & dropping, selecting or pasting
                    them.
                  </div>
                </Box>
              </FileUploader>
              <BlueButton style={{ float: "right", marginTop: "15px" }}>
                Save
              </BlueButton>
            </TabPanel>
          </CustomPaper>
        </Grid>
      </Grid>
    </>
  );
}
