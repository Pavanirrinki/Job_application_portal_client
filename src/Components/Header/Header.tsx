import {
  Badge,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../Register/Register.css";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { JOBSSERVICE } from "../../Containers/Env/Env";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../../Containers/MuiComponents/RightSlideBar";
import NotificationsContainer from "../../Containers/NotificationsContainer/NotificationsContainer";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [searchedJobs, setSearchedJobs] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const [searchedContent, setSearchedContent] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<boolean>(false);
  const [displaySearchContent,setDisplaySearchContent] = useState(false);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
   
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
       setNotifications(false);
      
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  const searchedJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setSearchedJobs(inputVal);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = window.setTimeout(() => {
      console.log("searched",searchedContent)
      axios
        .get(`${JOBSSERVICE}Search_jobs_by_name/${inputVal}`)
        .then((res) => {
        
              setSearchedContent(res.data);
              setDisplaySearchContent(true)
          
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  const HandleViewCategoryJobs = (e: any, data:string) => {
    
    e.preventDefault();
    
    navigate("/View_all_jobs", { state: { data, page: 0 } });
    setSearchedJobs(data);
   setDisplaySearchContent(false)
  };
console.log(searchedJobs,"searchedjobs")
  return (
    <>
      <Grid container className="flex-spacearound Header_Container" xs={12}>
        <Grid item className="align-items-center" gap={8}>
          <img src="/portal_icon.webp" alt="logo" className="logo-styles" onClick={()=>navigate("/")}/>
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
              value={searchedJobs}
              type="text"
              autoComplete="off"
            />

            <button className="searchButton">
              <SearchIcon />
            </button>
            {displaySearchContent && searchedJobs.length >= 1 && (
              <Paper className="Search_Items d-flex flex-column align-items-center justify-content-center" elevation={7}>
                {searchedContent &&
                   Array.from(new Set(searchedContent.map(data => data.jobTitle))).map((data: any) => (
                    <MenuItem
                      className="menu_Items"
                      onClick={(e) => HandleViewCategoryJobs(e, data)}
                    >
                      {data}
                    </MenuItem>
                  ))}
              </Paper>
            )}
          </div>

          <div className="d-flex justify-content-center align-items-center ml-50">
            <Button className="Jobs_360">Jobs 360</Button>
            <Badge badgeContent={4} color="error" className="position-relative"   ref={wrapperRef}>
              <NotificationsNoneIcon
                className="ml-30 fs-30"
                onClick={() => {setNotifications((prev) => !prev);console.log("notification clicked",notifications)}}
              />
              {notifications && (
                <NotificationsContainer setNotifications={setNotifications} notification={notifications}/>
              )}
            </Badge>
            <AnchorTemporaryDrawer>
              <Badge badgeContent={4} color="error">
                <div className="ml-30 border border-grey rounded-pill pl-10 pr-10">
                  <ListIcon className="fs-30 text-dark" />

                  <PersonOutlineIcon className="fs-30 text-dark" />
                </div>
              </Badge>
            </AnchorTemporaryDrawer>
          </div>
        </Grid>
      </Grid>
    </>
     
  );
};

export default Header;
