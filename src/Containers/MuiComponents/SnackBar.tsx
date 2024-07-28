import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({children,message,showsnackBar,severity}:{children:any,message:string,showsnackBar:boolean,severity:any}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
console.log("snck",showsnackBar)
  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      {showsnackBar === true  && 
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center"}}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="standard"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>}
    </div>
  );
}
