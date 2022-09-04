import React from 'react';
import {
  styled,
  FormControlLabel,
  Checkbox,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Box
} from '@mui/material';

const DialogTextField = styled(TextField)({
  width: '100%',
  marginTop: '20px'
})

export default function ModifyVersionModal(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
      <DialogTitle className='dialog-title'>Create a new role</DialogTitle>
      <DialogContent>
        <DialogTextField label="Version code" defaultValue="4" />
        <DialogTextField label="Version name" defaultValue="2.1.0" />
        <DialogTextField label="App install package" defaultValue="App.name.apk" />
        <DialogTextField label="Version description" />
      </DialogContent>
      <Box display='flex' justifyContent='space-between' alignItems='baseline'>
        <FormControlLabel style={{ marginLeft: '1em' }} control={<Checkbox />} label='Lowest version' />
        <DialogActions>
          <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
          <Button className='normal-text round-button' onClick={props.onClose}>Save</Button>
        </DialogActions>
      </Box>

    </Dialog>
  )
}