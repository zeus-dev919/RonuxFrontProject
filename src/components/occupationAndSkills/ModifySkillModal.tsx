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
        maxWidth='xs'
        style={{ width: '100%' }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle
          className='dialog-title'
        >
          Modify skill
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginTop: '20px' }} >
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
          <DialogContentText sx={{ marginTop: '20px' }} >
            <TextField fullWidth label="Skill name" defaultValue="Java" ></TextField>
          </DialogContentText>
          <DialogContentText sx={{ marginTop: '20px' }}>
            <TextField fullWidth label="Skill slug" defaultValue="java" ></TextField>
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
