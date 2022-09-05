import * as React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  DialogContent,
  DialogContentText,
  TextField
} from "@mui/material"
import { CustomModal } from "../../../commonStyle/CommonStyle";

export default function IDNumberModal(props: any) {
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const [category, setCategory] = React.useState('');

  const categoryChange = (e: any) => {
    setCategory(e.target.value)
  }
  return (
    <CustomModal name="ID number" onClose={props.onClose}>
      <DialogContent style={{ marginTop: "20px" }}>
        <FormControl fullWidth sx={{ mt: '20px' }}>
          <InputLabel>ID type</InputLabel>
          <Select
            value={category}
            onChange={categoryChange}
            input={<OutlinedInput label="ID type" />}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Match" defaultValue="0123456789"></TextField>
        </DialogContentText>
      </DialogContent>
    </CustomModal>
  );
}
