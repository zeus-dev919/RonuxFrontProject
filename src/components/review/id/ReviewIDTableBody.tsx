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
import { MuiChip } from "../../../commonStyle/CommonStyle";

export type reviewIDDataType = {
  name: string,
  status: string,
  admin: string,
  applicationTime: string,
  reviewTime: string
}

export default function ReviewIDTableBody(props: any) {
  const rows: Array<reviewIDDataType> = props.rows;
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
              >
                {row.name}
              </Button>
            </Stack>
          </TableCell>
          <TableCell style={{ width: '17%' }}>{row.status}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.applicationTime}</TableCell>
          <TableCell style={{ width: '17%' }}>{row.reviewTime}</TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <MuiChip label="View identity verification" />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
