import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function DeleteAdmin(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose} >
      <DialogTitle className='dialog-title'>Delete administrator account</DialogTitle>
      <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ marginTop: '30px', color: 'gray' }}>
          Sure you want to delete Perry Lance's administrator account?
        </span>
      </DialogContent>
      <DialogActions style={{ marginRight: '10px' }}>
        <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
        <Button className='normal-text round-button' onClick={props.onClose}>Rename</Button>
      </DialogActions>
    </Dialog>
  )
}