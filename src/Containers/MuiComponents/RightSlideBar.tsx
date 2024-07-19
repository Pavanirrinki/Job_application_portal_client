import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from 'react-router-dom';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer({children}:{children:any}) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
const data =[{
  Item:"Portal Blogs",
  Icon:<FormatListBulletedOutlinedIcon />
},{
  Item:"Add Review",
  Icon:<StarRateIcon />
},{
  Item:"Wislisted",
  Icon:<TurnedInOutlinedIcon />
},{
  Item:"Settings",
  Icon:<SettingsOutlinedIcon/>
},{
  Item:"FAQ'S",
  Icon:<HelpOutlineOutlinedIcon/>
},{
  Item:"LogOut",
  Icon:<ExitToAppOutlinedIcon />
}]
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,margin:"auto"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>text.Item == "Add Review" ? navigate("/post_Reviews"):""}>
              <ListItemIcon>
               {text.Icon}
              </ListItemIcon>
              <ListItemText primary={text.Item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{children}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
           
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
