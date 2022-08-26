import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ModifySkillModal from "./ModifySkillModal";
import DeleteSkillModal from "./DeleteSkillModal";


export type adminUserDataType = {
  name: string,
  category: string,
  admin: string,
  addTime: string,
  updateTime: string
}

export default function OASTableBody(props: any) {
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
              <ModifySkillModal />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <DeleteSkillModal name={row.name} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
