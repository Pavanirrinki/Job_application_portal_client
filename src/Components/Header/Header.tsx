import {
  Badge,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import "../Register/Register.css";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

type Props = {};

const Header = (props: Props) => {
    const [searchedJobs,setSearchedJobs] = useState<String>('');

    const searchedJob = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchedJobs(e.target.value);

    }
    return (
    <>
      <Grid
        container
        className="flex-spacearound"
        xs={12}
        style={{
          background: "white",
          width: "100%",
          position: "fixed",
          zIndex: 900,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Grid item className="align-items-center" gap={8}>
          <img src="portal_icon.webp" alt="logo" className="logo-styles" />
          <Badge badgeContent={4} color="error">
            <Typography className="pd-6">Jobs</Typography>
          </Badge>
          <Typography>Companies</Typography>
          <Badge badgeContent={1} color="error">
            <Typography className="pd-6">Services</Typography>
          </Badge>
          <div className="searchBox">
            <TextField
              fullWidth
              placeholder="search here...."
              id="fullWidth"
              className="searchInput"
              onChange={searchedJob}
              type="text"
            />

            <button className="searchButton">
              <SearchIcon />
            </button>
            {searchedJobs.length >=1 &&   <Paper className="Search_Items" elevation={5}>    
           {[1,2,3,4,5,6].map(data=><MenuItem className="menu_Items">Backend Developer</MenuItem>)}
         </Paper>}
         
          </div>
        
       
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "50px",
            }}
          >
            <Button className="Jobs_360">Jobs 360</Button>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon
                className="ml-30 fs-30"
               
              />
            </Badge>
            <Badge badgeContent={4} color="error">
              <div
                className="ml-30"
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "20px",
                  padding: "0px 10px",
                }}
              >
                <ListIcon className="fs-30" />

                <PersonOutlineIcon className="fs-30" />
              </div>
            </Badge>
          </div>
        </Grid>
      </Grid>

    </>
  );
};

export default Header;
