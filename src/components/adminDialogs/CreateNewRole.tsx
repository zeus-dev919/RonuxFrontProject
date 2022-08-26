import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const DialogTextField = styled(TextField)({
  width: '100%',
  marginTop: '20px'
})

export default function CreateNewRole(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
      <DialogTitle className='dialog-title'>Create a new role</DialogTitle>
      <DialogContent>
        <DialogTextField label="Name" defaultValue="Super Administrator" />
        <DialogTextField label="Description" defaultValue="The role has full administrative rights" />
      </DialogContent>
      <DialogActions>
        <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
        <Button className='normal-text round-button' onClick={props.onClose}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}