import { Box, Container, Grid, Paper } from '@mui/material'
import React from 'react'
import CompanyProfile from './CompanyProfile'
import { Applications } from './Applications'
import Applicants from './Applicants'
import TablePaginationDemo from '../../Containers/MuiComponents/Pagination'

type Props = {}

const CompanyHome = (props: Props) => {
  return (
<Box  className='d-flex justify-content-center gap-3 px-5'>

  <Grid container spacing={5}>
    <Grid item xs={5}>
    <Applications />
    </Grid>
    <Grid item xs={7}>
    <Applicants />
    <Applicants />
    <Paper className='mb-3'>
    <TablePaginationDemo />
    </Paper>
    </Grid>
  </Grid>
</Box>
  )
}

export default CompanyHome