import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function AssignAdmin(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose} style={{ width: '100%' }} >
        <DialogTitle className='dialog-title'>Assign adminstrator role</DialogTitle>
        <DialogContent>
          <TextField style={{ marginTop: '30px', width: '100%' }} variant='outlined' label="Email" defaultValue="usertcqq@gmail.com" />
        </DialogContent>
        <DialogActions style={{ marginRight: '10px' }}>
          <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
          <Button className='normal-text round-button' onClick={props.onClose}>Confirm assign</Button>
        </DialogActions>
      </Dialog>
  )
}