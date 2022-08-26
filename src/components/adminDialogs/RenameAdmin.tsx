import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Button } from '@mui/material';

export default function RenameAdmin(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
        <DialogTitle className='dialog-title'>Rename Administrator</DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ marginTop: '30px' }}>
            <Avatar style={{ width: '80px', height: '80px', margin: 'auto' }} />
          </div>
          <TextField variant='outlined' label="First Name" defaultValue="Perry" />
          <TextField variant='outlined' label="Last Name" defaultValue="Lance" />
          <TextField variant='outlined' label="Email" defaultValue="usertcqq@gmail.com" />
        </DialogContent>
        <DialogActions style={{ marginRight: '10px' }}>
          <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
          <Button className='normal-text round-button' onClick={props.onClose}>Rename</Button>
        </DialogActions>
      </Dialog>
  )
}