import * as React from "react";
import {
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";

export default function OASTableHead(props: any) {
  const header = props.name;
  return (
    <TableHead>
      <TableRow
        className="user-admin-console-tablerow">
        {
          header.map((item: string) => {
            return <TableCell align="left">{item}</TableCell>
          })
        }
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}