import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  return (
    <List sx={{ width: '100%' }}>
      <Typography variant='h6' mt={3} ml={3} mb={1}> Role names </Typography>
      <ListItemButton role={undefined} autoFocus >
        <ListItemText style={{paddingLeft:'10px'}} id={'labelId'} className='list-active' primary={'Super Administrator'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{paddingLeft:'10px'}} id={'labelId'} primary={'User Administrator'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{paddingLeft:'10px'}} id={'labelId'} primary={'Review Administrator'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{paddingLeft:'10px'}} id={'labelId'} primary={'Arbitration Administrator'} />
      </ListItemButton>
    </List>
  );
}
