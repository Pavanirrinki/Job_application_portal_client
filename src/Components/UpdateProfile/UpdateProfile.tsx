import React from 'react'
import "./UpdateProfile.css"
import { Box, Container, Divider, Paper, Stack, Typography } from '@mui/material'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
type Props = {}

const UpdateProfile = (props: Props) => {
  return (
    
    <Container className='mt-5 mb-5'>
        <Paper className='p-5 rounded d-flex justify-content-center gap-5 align-items-center'>
            <Stack className='profile-container'>
    <Stack className="progress-circle ">
        <Paper className="completion-text">87%</Paper>
        <img src="userdp.svg" className="profile-image" alt="profile_pic" />
        </Stack>
    </Stack>
    <Stack>
        <div className='d-flex flex-row gap-3 align-items-center'>
        <Typography>JohnDoe Smith</Typography>
        <ModeOutlinedIcon />
        </div>
        <Typography className='mb-3'>Profile last updated - 06Feb , 2024</Typography>
       <div style={{border:"1px solid grey",width:"100%"}}></div>
       <Box className="d-flex justify-content-between gap-5 mt-3">
        <Stack className='row-gap-3'>
       <div className='d-flex flex-row gap-3 align-items-center'>
        <LocationOnOutlinedIcon/>
        <Typography>Hyderabad,INDIA</Typography>
  
        </div>
        <div className='d-flex flex-row gap-3 align-items-center'>
            <WorkOutlineOutlinedIcon  />
        <Typography>Fresher</Typography>
      
        </div><div className='d-flex flex-row gap-3 align-items-center'>
            <CalendarTodayOutlinedIcon />
        <Typography>Availability to join</Typography>

        </div>
        </Stack>
       <Divider orientation="vertical" flexItem style={{border:"1px solid red"}}/>
       <Stack className='row-gap-3'>
       <div className='d-flex flex-row gap-3 align-items-center'>
        <LocalPhoneOutlinedIcon />
        <Typography>+91 7890908765</Typography>
      
        </div>
        <div className='d-flex flex-row gap-3 align-items-center'>
            <EmailOutlinedIcon />
        <Typography>JohnDoe@gmail.com</Typography>
     
        </div>
        </Stack>
       </Box>
    </Stack>
    </Paper>
</Container>
  )
}

export default UpdateProfile;