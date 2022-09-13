import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export default function MenuAppbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const signOutClick = () => {
    setAnchorEl(null);
    axios.post(`${BASE_URL}/sign-out`, {}, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": 'en'
      }
    }).then(() => navigate("/sign-in"))
      .catch((error) => console.log(error));
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="/icon.png"
            alt="Rounx admin"

            width="130px"
            height="70px"
            style={{ cursor: "pointer", zIndex: 'auto' }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "-5px", marginTop: "2px" }}
          >
            Admin
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ width: "30px", height: "30px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuList
                  sx={{ width: "250px", maxWidth: "100%", padding: "0px" }}
                >
                  <ListItemText
                    sx={{
                      flexGrow: 1,
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Perry Lance
                    <br />
                    usertcqq@gmail.com{" "}
                  </ListItemText>
                  <Divider />
                  <MenuItem style={{ padding: "15px" }} onClick={handleClose}>
                    Change language
                  </MenuItem>
                  <MenuItem style={{ padding: "15px" }} onClick={signOutClick}>
                    Sign out
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
