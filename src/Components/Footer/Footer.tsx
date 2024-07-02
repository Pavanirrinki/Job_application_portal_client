import React from "react";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <Grid
      container
      className="bg-white pd-10"
    >
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={2}
        className="d-flex flex-column align-items-center"
      >
        <img
          src="download.svg"
          alt="logo"
          
          className="footer_logo"
        />
        <Typography className="media_title">Connect with us</Typography>
        <div className="social_media_icons gap-2">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </Grid>
      <Grid
        item
        xs={2}
        className="gap-3 d-flex justify-content-start flex-column align-items-center mt-30"
      >
        <Typography className="footer_content">About Us</Typography>
        <Typography className="footer_content">Careers</Typography>
        <Typography className="footer_content">Employer home</Typography>
        <Typography className="footer_content">Site map</Typography>
        <Typography className="footer_content">Credits</Typography>
      </Grid>
      <Grid
        item
        xs={2}
       className="gap-3 d-flex justify-content-start flex-column align-items-center mt-30"
        
      >
        <Typography className="footer_content">Help Center</Typography>
        <Typography className="footer_content">Summons/Notices</Typography>

        <Typography className="footer_content">Grievances</Typography>
        <Typography className="footer_content">Report issue</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        className="gap-3 d-flex justify-content-start flex-column align-items-center mt-30"
      >
        <Typography className="footer_content">Help Center</Typography>
        <Typography className="footer_content">Summons/Notices</Typography>

        <Typography className="footer_content">Grievances</Typography>
        <Typography className="footer_content">Report issue</Typography>
      </Grid>
      <Grid item xs={3} 
      
      className="d-flex justify-content-center align-items-center flex-column m-0">
        <div  className="border border-grey pd-10 rounded-4">
       <Typography className="playstore_content">Apply on the go</Typography>
       <Typography className="playstore_content">Get real-time job updates on our App</Typography>
       <div className="align-items-center gap-1 mt-10" >
       <img src="android-app_v1.png" className="download_logos" alt="logo"/>
       <img src="ios-app_v1.png" className="download_logos" alt="logo"/>
       </div>
       </div>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
