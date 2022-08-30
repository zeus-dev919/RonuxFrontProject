import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function VersionList() {
  const [checked, setChecked] = React.useState([0]);

  return (
    <List sx={{ width: '100%' }}>
      <Typography variant='h6' mt={3} ml={3} mb={1}> App versions </Typography>
      <ListItemButton role={undefined} autoFocus >
        <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} className='list-active' primary={'2.1.0 (4) - Release version'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} primary={'2.0.0 (3)'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} primary={'1.0.0 (2) - Lowest version'} />
      </ListItemButton>
      <ListItemButton role={undefined} >
        <ListItemText style={{ paddingLeft: '10px' }} id={'labelId'} primary={'1.0.0 (1)'} />
      </ListItemButton>
    </List>
  );
}
