import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
  Stack,
  Avatar,
  Button
} from "@mui/material";
import { MuiChip } from "../../commonStyle/CommonStyle";
import { useNavigate } from "react-router-dom";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export type reviewReportDataType = {
  username: string,
  time: string,
  reservationname: string,
  price: string,
}

export default function SettingsTableBody(props: any) {
  let navigate = useNavigate();
  const rows: Array<reviewReportDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            <Stack direction="row" spacing={0}>
              <Avatar />
              <Button
                className="name-detail normal-text"
                variant="text"
              >
                {row.username}
              </Button>
            </Stack>
          </TableCell>
          <TableCell style={{ width: '20%' }}>{row.time}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.reservationname}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.price}</TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <EditUserModal getUserlist={props.getUserlist} row={row} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <DeleteUserModal row={row} getUserlist={props.getUserlist} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
