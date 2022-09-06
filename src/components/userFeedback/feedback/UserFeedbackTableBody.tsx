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
  type: string,
  deviceName: string,
  system: string,
  version: string
  feedbackTime: string

}

export default function UserFeedbackTableBody(props: any) {
  const rows: Array<reviewIDDataType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '15%' }} component="th" scope="row">
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
          <TableCell style={{ width: '15%' }}>{row.type}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.deviceName}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.system}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.version}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.feedbackTime}</TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <MuiChip label="View feedback" />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
