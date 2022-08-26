import * as React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material"
import { DecideButton } from "../../../commonStyle/CommonStyle";

export default function AddBlockedKeywordModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
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
  React.useEffect(() => {
    setOpen(props.addKeyword)
  }, [props.addKeyword]);

  const handleClose = () => {
    setOpen(false);
  };
  const addClick = () => {
    props.addKeywordClick();
    //API fetch or axios here

  }
  const categoryChange = (e: any) => {
    setCategory(e.target.value)
  }
  return (
    <Dialog
      open={open}
      onClose={props.addIPClick}
      style={{ width: '30%', marginLeft: '35%', minWidth: '500px' }}
    >
      <DialogTitle
        style={{ color: "white", backgroundColor: "#336def" }}
      >
        Add blocked IP
      </DialogTitle>
      <DialogContent style={{ marginTop: "20px" }}>
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField label="Blocked keyword" defaultValue="Test" sx={{ m: 1, width: '40ch' }}></TextField>
        </DialogContentText>
        <FormControl sx={{ m: 1, width: '41ch' }}>
          <InputLabel>Blocked category</InputLabel>
          <Select
            value={category}
            onChange={categoryChange}
            input={<OutlinedInput label="Blocked Category" />}
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
        <FormControl sx={{ m: 1, width: '41ch' }}>
          <InputLabel>Blocked ranges</InputLabel>
          <Select
            value={category}
            onChange={categoryChange}
            input={<OutlinedInput label="Blocked ranges" />}
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
      </DialogContent>
      <DialogActions>
        <DecideButton onClick={props.addKeywordClick} autoFocus>
          Cancel
        </DecideButton>
        <DecideButton onClick={addClick} autoFocus>
          Add
        </DecideButton>
      </DialogActions>
    </Dialog>
  );
}
