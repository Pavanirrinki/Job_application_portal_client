import React from 'react';
import "./ViewAllCompanies.css";
import { Box, Container, Grid, Paper, Stack, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ViewAllCompanies() {
  const theme = useTheme();
  return (
    <>
      <Container className='bg-secondary p-4 mt-4 mb-20 rounded-4 d-flex align-items-center gap-3 custom-container'>
        <div className='bg-white pd-10 rounded-circle'>
          <ChevronLeftIcon />
        </div>
        
        {[1, 2, 3, 4, 5].map((data) => {
          return (
            <Box key={data}>
              <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          );
        })}
        
        <div className='bg-white pd-10 rounded-circle'>
          <ChevronRightIcon />
        </div>
      </Container>

      <Container className='p-0 mb-20 rounded-4'>
        <Grid container>
          <Grid item xs={3}>
            <Paper>
              ujjmjjj
            </Paper>
          </Grid>
          <Grid item xs={4} className='ml-50'>
         
            <Paper className='rounded-4'>
              <Box style={{padding:"19px 16px",display:"flex",gap:5}}>
                <Stack>
              <img src="/CompanyProfiles/692902.gif" alt="company-logo" className='company_img' />
              </Stack>
<Stack>
  <Typography>llll</Typography>
</Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4} className='ml-50'>
            <Paper>
              <img src="/CompanyProfiles/692902.gif" alt="company-logo" style={{ height: "50px", width: "50px" }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>  
    </>
  );
}

export default ViewAllCompanies;
