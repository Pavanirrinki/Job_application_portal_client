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
      style={{ background: "white", padding: "10px"}}
    >
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="download.svg"
          alt="logo"
          style={{ height: "175px", width: "300px" }}
        />
        <Typography className="media_title">Connect with us</Typography>
        <div style={{ gap: 10, display: "flex", color: "#b3b3b3" }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 15,
          marginTop: "30px",
        }}
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
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 15,
          marginTop: "30px",
        }}
      >
        <Typography className="footer_content">Help Center</Typography>
        <Typography className="footer_content">Summons/Notices</Typography>

        <Typography className="footer_content">Grievances</Typography>
        <Typography className="footer_content">Report issue</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 15,
          marginTop: "30px",
        }}
      >
        <Typography className="footer_content">Help Center</Typography>
        <Typography className="footer_content">Summons/Notices</Typography>

        <Typography className="footer_content">Grievances</Typography>
        <Typography className="footer_content">Report issue</Typography>
      </Grid>
      <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"0px"}}>
        <div style={{border:"1px solid  #cccccc",padding:"10px",borderRadius:"20px"}}>
       <Typography className="playstore_content">Apply on the go</Typography>
       <Typography className="playstore_content">Get real-time job updates on our App</Typography>
       <div className="align-items-center" style={{gap:3,marginTop:"10px"}}>
       <img src="android-app_v1.png" style={{height:"44px",width:"130x"}} alt="logo"/>
       <img src="ios-app_v1.png" style={{height:"44px",width:"130px"}} alt="logo"/>
       </div>
       </div>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
