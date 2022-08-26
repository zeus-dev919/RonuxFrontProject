import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";


export type adminUserDataType = {
  name: string,
  desc: string,
  user: string,
  time: string,
  ip: string
}

export default function UserActivityTableBody(props: any) {
  const rows: Array<adminUserDataType> = props.rows;

  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell style={{ width: '25%' }}>{row.desc}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.user}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.time}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.ip}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
