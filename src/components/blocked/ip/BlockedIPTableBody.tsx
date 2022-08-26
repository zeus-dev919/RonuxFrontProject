import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box
} from "@mui/material";
import UnblockModal from "./UnblockModal";

export type adminUserDataType = {
  url: string,
  reason: string,
  admin: string,
  time: string
}

export default function BlockedIPTableBody(props: any) {
  const rows: Array<adminUserDataType> = props.rows;
  console.log(rows);
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            {row.url}
          </TableCell>
          <TableCell style={{ width: '20%' }}>{row.reason}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.time}</TableCell>
          <TableCell style={{ width: '20%' }} align="right">
            <Box className="hidden">
              <UnblockModal ip={row.url} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
