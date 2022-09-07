import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  TableBody,
  TableCell,
  TableRow,
  Chip,
  Popover,
  MenuItem as MuiMenuItem,
  Avatar,
  Stack,
  Button
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";

import ResetPasswordModal from "./ResetPasswordModal";
import PauseUserModal from "./PauseUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const MuiChip = styled(Chip)(({ theme }) => ({
  "&:hover": {
    background: "#ccccff",
  },
  color: "blue",
}));

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  margin: "2px",
  fontSize: "16px",
}));

export type adminUserDataType = {
  name: string,
  type: string,
  status: string,
  sign: string,
  email: string
}

export default function AdminUserTableBody(props: any) {
  const navigate = useNavigate();
  const rows: Array<adminUserDataType> = props.rows;
  const [moreButton, setMoreButton] = React.useState<HTMLDivElement | null>(null);
  const open = Boolean(moreButton);
  const id = open ? "simple-popover" : undefined;

  //button click handler
  const adminUserMoreButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setMoreButton(event.currentTarget);
  };
  const handleClose = () => {
    setMoreButton(null);
  };
  const userClick = (name: string) => {
    axios.post(`${BASE_URL}/clients/${name}`, {}, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": 'en'
      }
    }).then(() => navigate(`users/${name}`))
  }
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '17%' }} component="th" scope="row">
            <Stack direction="row" spacing={0}>
              <Avatar />
              <Button
                className="name-detail normal-text"
                variant="text"
                onClick={() => userClick(row.name)}
              >
                {row.name}
              </Button>
            </Stack>
          </TableCell>
          <TableCell style={{ width: '17%' }}>{row.type}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.status}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.sign}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.email}</TableCell>
          <TableCell style={{ width: '17%' }} align="right">
            <div className="hidden">
              <ResetPasswordModal name={row.name} />
            </div>
          </TableCell>
          <TableCell align="right">
            <div className="hidden">
              <MuiChip label="more" icon={<ArrowDropDownIcon />} onClick={adminUserMoreButtonClick} />
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={moreButton}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem><PauseUserModal name={row.name} /></MenuItem>
              <MenuItem><DeleteUserModal name={row.name} /></MenuItem>
            </Popover>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
