import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, FormControlLabel, Switch } from '@mui/material';

export default function ResetPassword(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
      <DialogTitle className='dialog-title'>Reset password for Perry Lance</DialogTitle>
      <DialogContent>
        <div style={{ color: 'gray', marginTop: '15px'}}>
          <FormControlLabel control={<Switch defaultChecked />} label="Automatically generated password" />
          <FormControlLabel control={<Switch defaultChecked />} label="Require password change on next sign in" />
        </div>
      </DialogContent>
      <DialogActions style={{ marginRight: '10px' }}>
        <Button className='normal-text round-button' onClick={props.onClose}>Cancel</Button>
        <Button className='normal-text round-button' onClick={props.onClose}>Reset</Button>
      </DialogActions>
    </Dialog>
  )
}