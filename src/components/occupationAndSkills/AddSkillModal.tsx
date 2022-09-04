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
      maxWidth='xs'
      style={{ width: '100%' }}
      open={open}
      onClose={props.addSkillClick}
    >
      <DialogTitle
        className='dialog-title'
      >
        Add skill
      </DialogTitle>
      <DialogContent>
        <FormControl style={{ marginTop: "20px" }} fullWidth>
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
        <DialogContentText style={{ marginTop: "20px" }} >
          <TextField fullWidth label="Skill name" defaultValue="Java"></TextField>
        </DialogContentText>
        <DialogContentText style={{ marginTop: "20px" }}>
          <TextField fullWidth label="Skill slug" defaultValue="java"></TextField>
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
