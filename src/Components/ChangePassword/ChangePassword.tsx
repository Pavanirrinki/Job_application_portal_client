import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { USERSERVICE } from '../../Containers/Env/Env';
type Props = {}

const ChangePassword = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword,setConfirmPassword] = React.useState(false);
  const [newPassword,setNewPassword] = React.useState(''); 
  const [confirmNewPassword,setConfirmNewPassword] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickconfirmShowPassword = () => setConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownconfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const HandleChangePassword =(event: React.MouseEvent<HTMLButtonElement>)=>{
     event.preventDefault();
     if(newPassword == confirmNewPassword){
     axios.patch(USERSERVICE+'Change_password',{email:location.state,password:confirmNewPassword}).
     then((res)=>{console.log(res.data);navigate("/")}).
     catch((error)=>console.log(error.message))
     }else{
     console.log("Password Does not Match");
     }
  }
  return (
    <Stack  sx={{width:"30%",margin:"30px auto",}}>
      <Paper className='rounded pb-5'>
        <Typography className="m-3 text-start fw-bold" variant="h6">Reset Your Password</Typography>
        <div className='d-flex justify-content-center flex-column align-items-center'>
    <FormControl sx={{ m: 1,width:"80%"}} variant="outlined" >
      <InputLabel htmlFor="outlined-adornment-password" >New Password</InputLabel>
      <OutlinedInput
   style={{padding: "6.5px 10px"}}
   value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={<InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>}
        label="New Password" />
    </FormControl>
    <FormControl sx={{ m: 1,width:"80%"}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
        <OutlinedInput
        value={confirmNewPassword}
        onChange={(e)=>setConfirmNewPassword(e.target.value)}
         style={{padding: "6.5px 10px"}}
          id="outlined-adornment-password"
          type={confirmPassword ? 'text' : 'password'}
          endAdornment={<InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickconfirmShowPassword}
              onMouseDown={handleMouseDownconfirmPassword}
              edge="end"
            >
              {confirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>}
          label="Confirm Password" />
      </FormControl>
   
      </div>
      <Box className="d-flex justify-content-center gap-3 align-items-center mt-3">
      
      <Button variant="outlined" style={{width:"40%"}} onClick={()=>navigate("/login")}>Cancel</Button>
      <Button variant="contained" style={{width:"40%"}} onClick={HandleChangePassword}>Submit</Button>
      </Box>
      </Paper>
      </Stack>
  )
}

export default ChangePassword;