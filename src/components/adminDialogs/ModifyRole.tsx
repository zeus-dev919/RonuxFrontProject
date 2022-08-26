import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function ModifyRole(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
        <DialogTitle className='dialog-title'>Create a new role</DialogTitle>
        <DialogContent>
          <TextField label="Name" variant="outlined" style={{ width: '100%', marginTop: '30px' }} defaultValue="Super Administrator" />
          <TextField label="Description" variant="outlined" style={{ width: '100%', marginTop: '30px' }} defaultValue="The role has full administrative rights" />
        </DialogContent>
        <DialogActions>
          <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
          <Button className='normal-text round-button' onClick={props.onClose}>Create</Button>
        </DialogActions>
      </Dialog>
  )
}