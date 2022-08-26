import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RestoreModal from "./RestoreModal";
import ViewReasonModal from "./ViewReasonModal";

export type adminUserDataType = {
  name: string,
  category: string,
  admin: string,
  remainingDays: string
}

export default function OASDeletedTableBody(props: any) {
  const rows: Array<adminUserDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            <div className="user-admin-console-icon">
              <AccountCircleIcon style={{ color: '#9e9e9e', marginRight: '6px' }} />
              {row.name}
            </div>
          </TableCell>
          <TableCell style={{ width: '20%' }}>{row.category}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.remainingDays}</TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <RestoreModal />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <ViewReasonModal />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
