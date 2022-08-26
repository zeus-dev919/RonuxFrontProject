import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box
} from "@mui/material";
import RestoreModal from "./RestoreModal";

export type adminUserDataType = {
  keyword: string,
  category: string,
  admin: string,
  ranges: string,
  time: string
}

export default function BlockedKeywordTableBody(props: any) {
  const rows: Array<adminUserDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            <Box className="user-admin-console-icon">
              {row.keyword}
            </Box>
          </TableCell>
          <TableCell style={{ width: '20%' }}>{row.category}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.ranges}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.time}</TableCell>
          <TableCell style={{ width: '20%' }} align="right">
            <Box className="hidden">
              <RestoreModal keyword={row.keyword} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
