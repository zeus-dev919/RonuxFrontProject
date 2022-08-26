import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const LabelDialogContent = styled(DialogContent)({
  marginTop: '-30px',
})

export default function DetailDialog(props: any) {
  return (
    <Dialog open={true} maxWidth='xs' onClose={props.onClose}>
        <DialogTitle className='dialog-title'>Administrator</DialogTitle>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <DialogContent>
          <span className='span-gray'>Name: </span>
          <span>Perry Lance</span>
        </DialogContent>
        <LabelDialogContent>
          <span className='span-gray'>Email: </span>
          <span>usertcqq@gmail.com</span>
        </LabelDialogContent>
        <LabelDialogContent>
          <span className='span-gray'>Role: </span>
          <span>Super Administrator</span>
        </LabelDialogContent>
        <LabelDialogContent>
          <span className='span-gray'>Last sign in time: </span>
          <span>2020-03-10</span>
        </LabelDialogContent>
        <LabelDialogContent>
          <span className='span-gray'>Account created time: </span>
          <span>2020-03-06</span>
        </LabelDialogContent>
        <DialogActions>
          <Button className='normal-text round-button' onClick={props.onClose}>Close</Button>
        </DialogActions>
        </div>
      </Dialog>
  )
}