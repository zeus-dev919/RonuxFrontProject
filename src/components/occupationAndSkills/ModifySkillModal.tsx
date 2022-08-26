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
  TextField,
  Box
} from "@mui/material"
import { DecideButton, MuiChip } from "../../commonStyle/CommonStyle";

export default function ModifySkillModal(props: any) {
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

  const handleClickOpen = () => {
    setOpen(true);
  }
  const modifyClick = () => {
    setOpen(false);
    //API here

  }
  const categoryChange = (e: any) => {
    setCategory(e.target.value)
  }
  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <MuiChip label="Modify skill" />
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ width: '30%', marginLeft: '35%', minWidth: '400px' }}
      >
        <DialogTitle
          style={{ color: "white", backgroundColor: "#336def" }}
        >
          Modify skill
        </DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: '41ch' }}>
            <InputLabel>Language</InputLabel>
            <Select
              value={category}
              onChange={categoryChange}
              input={<OutlinedInput label="Skill Category" />}
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
          <DialogContentText >
            <TextField label="Skill name" defaultValue="Java" sx={{ m: 1, width: '40ch' }}></TextField>
          </DialogContentText>
          <DialogContentText>
            <TextField label="Skill slug" defaultValue="java" sx={{ m: 1, width: '40ch' }}></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DecideButton onClick={() => setOpen(false)} autoFocus>
            Cancel
          </DecideButton>
          <DecideButton onClick={modifyClick} autoFocus>
            Modify
          </DecideButton>
        </DialogActions>
      </Dialog>
    </Box>

  );
}
