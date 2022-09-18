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
import { MuiChip } from "../../commonStyle/CommonStyle";
import { useNavigate } from "react-router-dom";
import EditServiceModal from "./EditServiceModal";
import DeleteServiceModal from "./DeleteServiceModal";


export type serviceType = {
  name: string,
  time: string,
  price: string,
  description: string,
}

export default function ServicesTableBody(props: any) {
  let navigate = useNavigate();
  const rows: Array<serviceType> = props.rows;
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover={true} className="row-hover">
          <TableCell style={{ width: '20%' }} component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell style={{ width: '20%' }}>{row.time}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.price}</TableCell>
          <TableCell style={{ width: '20%' }}>{row.description}</TableCell>

          <TableCell align="right">
            <Box className="hidden">
              <EditServiceModal getServicelist={props.getServicelist} row={row} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box className="hidden">
              <DeleteServiceModal row={row} getServicelist={props.getServicelist} />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
