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
import { DecideButton } from "../../commonStyle/CommonStyle";

export default function AddSkillModal(props: any) {
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
    setOpen(props.addSkill)
  }, [props.addSkill]);

  const addClick = () => {
    props.addSkillClick();
    //API fetch or axios here

  }
  const categoryChange = (e: any) => {
    setCategory(e.target.value)
  }
  return (
    <Dialog
      open={open}
      onClose={props.addSkillClick}
      style={{ width: '30%', marginLeft: '35%', minWidth: '400px' }}
    >
      <DialogTitle
        style={{ color: "white", backgroundColor: "#336def" }}
      >
        Add skill
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
        <DecideButton onClick={props.addSkillClick} autoFocus>
          Cancel
        </DecideButton>
        <DecideButton onClick={addClick} autoFocus>
          Add
        </DecideButton>
      </DialogActions>
    </Dialog>
  );
}
