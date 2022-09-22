import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IS_LOGOUT } from "../actions/actionType";
import { useSelector } from "react-redux";
import { string } from "yup";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export default function MenuAppbar() {
  let user = useSelector((state: any) => state.login.user);
  const [currentUser, setCurrentUser] = React.useState(user);
  React.useEffect(() => {
    if (Object.keys(user).length === 0) {
      const storageUser: any = localStorage.getItem('user')
      let check = JSON.parse(storageUser);
      setCurrentUser(check);
    }
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const signOutClick = () => {
    setAnchorEl(null);
    navigate("/sign-in");
    localStorage.removeItem('user');
    dispatch({ type: IS_LOGOUT });
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#336def" }}>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "-5px", marginTop: "2px", cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Salon Admin
          </Typography>
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
                  {currentUser.username}
                  <br />
                  {currentUser.email}
                </ListItemText>
                <Divider />
                <MenuItem style={{ padding: "15px" }} onClick={signOutClick}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
