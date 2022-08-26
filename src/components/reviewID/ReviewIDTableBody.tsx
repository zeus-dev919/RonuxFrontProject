import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export type adminUserDataType = {
  name: string,
  category: string,
  admin: string,
  addTime: string,
  updateTime: string
}

export default function OSATableBody(props: any) {
  const rows: Array<adminUserDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '17%' }} component="th" scope="row">
            <Box className="user-admin-console-icon">
              <AccountCircleIcon style={{ color: '#9e9e9e', marginRight: '6px' }} />
              {row.name}
            </Box>
          </TableCell>
          <TableCell style={{ width: '17%' }}>{row.category}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.addTime}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.updateTime}</TableCell>
          <TableCell align="right">
            <Box className="hidden">

            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
