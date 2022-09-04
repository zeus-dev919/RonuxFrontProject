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
import ApproveModal from "./ApproveModal";
import RejectApproveModal from "./RejectApproveModal";

export type reviewIDDataType = {
  name: string,
  reviewStatus: string,
  approvalStatus: string,
  admin: string,
  applicationTime: string,
  reviewTime: string
}

export default function ReviewFreelancersTableBody(props: any) {
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
          <TableCell style={{ width: '15%' }}>{row.reviewStatus}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.approvalStatus}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.admin}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.applicationTime}</TableCell>
          <TableCell style={{ width: '15%' }}>{row.reviewTime}</TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <ApproveModal name={row.name} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <RejectApproveModal name={row.name} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
