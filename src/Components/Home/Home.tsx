import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { Divider, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Tooltip, Typography } from "@mui/material";
import "./Home.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { useNavigate } from "react-router-dom";
import ContentComponent from "../../Containers/MainContainer/RecommendedJobs";
import { Job_details,Companies_data } from "../../Containers/MockData/MockData";
import TopCompanies from "../../Containers/MainContainer/TopCompanies/TopCompanies";
import { UserContext } from "../../Containers/useContext/Context";

type Props = {};
const styles:any = {
  container: {
    marginTop: '10px',
    height: '110vh',
    overflow: 'auto',
 
   
  },
  
};

const Home = (props: Props) => {
  const{user} = useContext<any>(UserContext);

 const navigate = useNavigate();

  return (
    <>

      <div style={{background:"#f2f2f2"}}>
      <Grid container className="content_container" style={{height:"110vh"}}>
   
        <Grid item xs={2} style={{ marginTop: "10px" }}>
          <Paper className="profile_container" elevation={5} >
            <img src="userdp.svg" className="profile_image" alt="profile_pic" />
            <Typography
              variant="h6"
              style={{
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "3px",
              }}
            >
            {user ? user?.name:"Update name"}
            </Typography>
            <Typography variant="subtitle1" className="data">
              B.Tech/B.E.Mechanical
            </Typography>
            <Typography variant="body1" className="data1">
              @JNTU College of Engineering..
            </Typography>
            <Typography className="update_period">
              Last updated 4m ago
            </Typography>

            <button className="complete_profile_button" onClick={()=>navigate("/profile_info")}>
              Complete Profile
            </button>
            <div className="profile_performance" >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography className="profile_performance_content">
                  Profile Performance
                </Typography>
                <Tooltip
                  title="Add jfnhrjvfnjhvn jkfgvn"
                  arrow
                  placement="right-start"
                >
                  <InfoOutlinedIcon className="Info_Icon" />
                </Tooltip>
              </div>

              <div className="flex-spacearound" style={{ marginTop: "20px" ,marginBottom:"20px"}}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "550",
                    color: "#8c8c8c",
                  }}
                >
                  Search preferences
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "center",
                      color: "#275df5",
                    }}
                  >
                    57{" "}
                    <KeyboardArrowRightIcon
                      style={{ height: "24px", width: "24px" }}
                    />
                  </div>
                </div>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ marginRight: "10px" }}
                />

<div
                  style={{
                    fontSize: "14px",
                    fontWeight: "550",
                    color: "#8c8c8c",
                  }}
                >
                 Recruiter actions
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "center",
                      color: "#275df5",
                    }}
                  >
                   3{" "}
                    <KeyboardArrowRightIcon
                      style={{ height: "24px", width: "24px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{margin:"20px 10px 20px 10px"}}>
            <ListItem disablePadding >
            <ListItemButton className="user_tabs">
              <ListItemIcon>
          <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton className="user_tabs">
              <ListItemIcon>
          <BusinessCenterOutlinedIcon  />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton className="user_tabs">
              <ListItemIcon>
          <BusinessOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Companies" />
            </ListItemButton>
          </ListItem>
         <ListItem disablePadding >
            <ListItemButton className="user_tabs">
              <ListItemIcon>
          <LocalLibraryOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </ListItem>
         </div>
          </Paper>
        </Grid>
        <Grid item xs={4} style={styles.container} className="hideScrollbar">

<ContentComponent data={Job_details} title='Recommended jobs for you'/>
<TopCompanies data={Companies_data} title="Top Companies"/>
<ContentComponent data={Job_details} title='Recommended jobs for you'/>
<TopCompanies data={Companies_data} title="Top Companies"/>
<ContentComponent data={Job_details} title='Recommended jobs for you'/>
<TopCompanies data={Companies_data} title="Top Companies"/>
        </Grid> 
        
        <Grid item xs={2} >
     
    
    
  {[1,2,3].map((_,index)=>{
    return (
      <div className="innerdiv">
      <div className="div4 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
          </div>
          <div className="detbox">
            <p className="name dark">Jeanette Harmon</p>
            <p className="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div className="review dark">
          
        <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
        </div>
      </div>
      </div>
    )
  })}
 
        </Grid>
   
      
      </Grid>

        </div>
    </>
  );
};

export default Home;
