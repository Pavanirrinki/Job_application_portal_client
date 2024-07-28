import React from 'react'
import "./Allfilters.css"
import { Container, Paper, Typography,Divider  } from '@mui/material'
function Allfilters() {
  return (
<Paper className='pb-10'>
   <Container>
    <Typography className='pt-20 mb-10 rounded-pill fw-700'>
        All Filters
    </Typography>
    <Divider className='mb-10  border-secondary'/>
   </Container>
</Paper>
  )
}

export default Allfilters