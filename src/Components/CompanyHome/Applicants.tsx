import React from "react";
import "./Applicants.css";
import { Box, Button, ButtonGroup, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
type Props = {};

const Applicants = (props: Props) => {
    const skills =["java","spring","Docker"]
  return (
    <Paper className="mt-5 rounded-1">
      <Grid container>
        <Grid xs={7}>
          <Typography variant="h6" className="m-2">
            Pavan Kumar Irrinki
          </Typography>
          <Container className="d-flex justify-content-between mb-3">
            <Box className="d-flex align-items-center gap-1 text-secondary">
              <BusinessCenterOutlinedIcon />
              <Typography variant="subtitle2" className="mt-1 fw-600">
                2y 2m
              </Typography>
            </Box>

            <Box className="d-flex align-items-center gap-1 text-secondary">
              <AccountBalanceWalletOutlinedIcon />
              <Typography variant="body2" className="mt-1 fw-600">
                9.0 lakhs
              </Typography>
            </Box>

            <Box className="d-flex align-items-center gap-1 text-secondary">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" className="mt-1 fw-600">
                Hyderabad
              </Typography>
            </Box>
          </Container>

          <Stack>
            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" className="fw-bold  text-black-50">Current/Prev</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas debitis itaque omnis perspiciatis, tempora porro
                    expedita. Consequuntur iure nobis a. Unde magnam a nihil,
                    recusandae beatae odit at architecto voluptatibus?
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" className="fw-bold  text-black-50">Education</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    B.Tech/B.E Jawaharlal Nehhru Technological University
                    kakinada 2016
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" className="fw-bold  text-black-50">Pref. Location</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">Anywhere in India</Typography>
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" className="fw-bold  text-black-50">Skills</Typography>
                </Grid>
                <Grid item xs={8}>
                  {skills.map((data: String) => {
                    return <Chip label={data} style={{ marginLeft: "3px" }} />;
                  })}
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" className="fw-bold  text-black-50">May Also known</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    Rest Api,Mobile development,React,Junit,Mocha,unit testing
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Stack>
        </Grid>
        <Grid
          xs={5}
          style={{ background: "#E0E0E0" }}
          className="d-flex flex-column justify-content-start align-items-center"
        >
          <Box className="profile-image-container">
            <img src="/userdp.svg" className="profile" alt="profile_pic" />
          </Box>
          <Typography variant="body2" className="text-center m-1 text-primary-emphasis">
            Frontened Developer with 2 years experience building mobile
            applications
          </Typography>
          <Box className="gap-3 d-flex mt-2">
            <Button variant="outlined" startIcon={<CallOutlinedIcon />} className="rounded-pill">
              call
            </Button>
            <Button variant="outlined" startIcon={<MailOutlineOutlinedIcon />} className="rounded-pill">
            Send a Email
            </Button>   
          </Box>
        </Grid>
      </Grid>
    </Paper>

  );
};

export default Applicants;
