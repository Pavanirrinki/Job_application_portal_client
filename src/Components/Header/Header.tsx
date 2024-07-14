import {
  Badge,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../Register/Register.css";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListIcon from "@mui/icons-material/List";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";
import { JOBSSERVICE } from "../../Containers/Env/Env";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [searchedJobs, setSearchedJobs] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const [searchedContent, setSearchedContent] = useState<any[]>([]);

  const searchedJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setSearchedJobs(inputVal);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = window.setTimeout(() => {
      axios
        .get(`${JOBSSERVICE}Search_jobs_by_name/${inputVal}`)
        .then((res) => {
          setSearchedContent(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

const HandleViewCategoryJobs =(e:any,data:String) =>{
  e.preventDefault();
  navigate('/View_all_jobs', { state: { data, page: 0 } });
  setSearchedJobs('');
}
  return (
    <>
      <Grid container className="flex-spacearound Header_Container" xs={12}>
        <Grid item className="align-items-center" gap={8}>
          <img src="/portal_icon.webp" alt="logo" className="logo-styles" />
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
              autoComplete="off"
            />

            <button className="searchButton">
              <SearchIcon />
            </button>
            {searchedContent.length >= 1 && searchedJobs.length >= 1 && (
              <Paper className="Search_Items" elevation={7}>
                {searchedContent &&
                  searchedContent.map((data: any) => (
                    <MenuItem className="menu_Items" onClick={(e)=>HandleViewCategoryJobs(e,data.jobTitle)}>{data?.jobTitle}</MenuItem>
                  ))}
              </Paper>
            )}
          </div>

          <div className="d-flex justify-content-center align-items-center ml-50">
            <Button className="Jobs_360">Jobs 360</Button>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon className="ml-30 fs-30" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <div className="ml-30 border border-grey rounded-pill pl-10 pr-10">
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
