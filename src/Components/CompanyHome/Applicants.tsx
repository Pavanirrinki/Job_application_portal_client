import React, { useContext, useEffect, useState } from "react";
import "./Applicants.css";
import { Box, Button, ButtonGroup, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CustomizedDialogs from "../../Containers/MuiComponents/Dialog";

type Props = {
  row:any;
};


const Applicants = (props: Props) => {
const [viewPdf,setViewPdf] = useState<boolean>(false);
   console.log(props.row,"rowed");
   const handleDownloadClick = (e:any) => {
    e.preventDefault();
    setViewPdf(true)
   }
  return (
    <Paper className="mt-5 rounded-1">
      <Grid container>
        <Grid xs={7}>
          <Typography variant="h6" className="m-2">
            {props.row && props.row.userdata.name}
          </Typography>
          <Container className="d-flex justify-content-between mb-3">
            <Box className="d-flex align-items-center gap-1 text-secondary">
              <BusinessCenterOutlinedIcon />
              <Typography variant="subtitle2" className="mt-1 fw-600">
                {props.row && props.row.userdata.experienced} years
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
                {props.row && props.row.userdata.hometown}
              </Typography>
            </Box>
          </Container>

          <Stack>
            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="body2"
                    className="fw-bold  text-black-50"
                  >
                    Current/Prev
                  </Typography>
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
                  <Typography
                    variant="body2"
                    className="fw-bold  text-black-50"
                  >
                    Education
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    {props.row && props.row.userGraduation.university},
                    {props.row && props.row.userGraduation.institute} -{" "}
                    {props.row && props.row.userGraduation.startDate}
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="body2"
                    className="fw-bold  text-black-50"
                  >
                    Pref. Location
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    Anywhere in India
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="body2"
                    className="fw-bold  text-black-50"
                  >
                    Skills
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {props.row &&
                    props.row.userResume.skills.map((data: String) => {
                      return (
                        <Chip label={data} style={{ marginLeft: "3px" }} />
                      );
                    })}
                </Grid>
              </Grid>
            </Container>

            <Container className="mb-3">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="body2"
                    className="fw-bold  text-black-50"
                  >
                    Mobile No.
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="caption" display="block">
                    {props.row && props.row.userdata.mobilenumber}
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
            <img
              src={`data:image/png;base64,${
                props.row && props.row.userdata.profile_pic
              }`}
              className="profile-image-user"
              alt="profile_pic"
            />
          </Box>
          <Typography
            variant="body2"
            className="text-center m-1 text-primary-emphasis"
          >
            Frontened Developer with 2 years experience building mobile
            applications
          </Typography>
          <Box className="gap-3 d-flex mt-2">
            <Button
              variant="outlined"
              className="rounded-pill"
              onClick={handleDownloadClick}
            >
              show Resume
            </Button>
            <a href={`mailto:${props.row && props.row.userdata.email}`}>
              <Button
                variant="outlined"
                startIcon={<MailOutlineOutlinedIcon />}
                className="rounded-pill"
              >
                Send a Email
              </Button>
            </a>
            {viewPdf && (
              <CustomizedDialogs setViewPdf={setViewPdf}>
              <iframe
                src={`data:application/pdf;base64,${
                  props.row && props.row.userResume.pdf
                }`}
                title="PDF Preview"
                width="100%"
                height="750px"
                style={{ border: "none" }}
              ></iframe>
              </CustomizedDialogs>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Applicants;
