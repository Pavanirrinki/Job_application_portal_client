import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import { RecommendedJobs } from "../RecommendedJobs/RecommendedJobs";
import "./SingleJob.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOBSSERVICE, USERSERVICE } from "../../Containers/Env/Env";
import moment from "moment";
import { UserContext } from "../../Containers/useContext/Context";
type Props = {};

const SingleJob = (props: Props) => {
  const { id } = useParams();
  const [particularjobDetails, SetParticularjobDetails] = useState<any>(null);
  const { user } = useContext<any>(UserContext);
  useEffect(() => {
    axios
      .get(JOBSSERVICE + `Job_details/${id}`)
      .then((res) => {
        console.log(res.data, "pawan");
        SetParticularjobDetails(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

const ApplyForJob =(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("JobId",particularjobDetails.id);
  formData.append("userId",user.id)
axios
    .post(USERSERVICE + "apply_for_job", formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then((res) => {console.log(res.data)})
    .catch((err) => console.log(err.message));
}
  return (
    <Container className="mb-3">
      <Grid container gap={4}>
        <Grid item className="ml-15" xs={7}>
          <Paper className="rounded-4 mb-4">
            <Container className="pt-3 pb-3">
              <Typography className="fs-20 fw-bold Job-Title">
                {particularjobDetails && particularjobDetails?.jobTitle}
              </Typography>
              <div className="d-flex align-items-center justify-content-start">
                <Typography
                  variant="body2"
                  gutterBottom
                  className="mb-0 pb-0 mr-8 text-secondary"
                >
                  {particularjobDetails &&
                    particularjobDetails?.companyId?.name}
                </Typography>
                <StarIcon className="text-warning fs-6 ml-8" />
                <Typography variant="body2" className="mt-0 ml-1 fw-600">
                  5.0
                </Typography>
                <Typography variant="body2" className="mt-0 ml-5px fw-600">
                  5.0
                </Typography>
                <Typography variant="body2" className="mt-0 ml-5px fw-600">
                  Reviews
                </Typography>
              </div>

              <div className="d-flex align-items-center justify-content-start">
                <BusinessCenterOutlinedIcon className="text-secondary fs-6 place_Icon" />
                <Typography
                  variant="body2"
                  className="place_Icon mt-0 ml-15 fw-600"
                >
                  {particularjobDetails && particularjobDetails.minExp}-{" "}
                  {particularjobDetails && particularjobDetails.maxExp} years
                </Typography>

                <Typography
                  variant="body2"
                  className="place_Icon mt-0 ml-15 fw-600"
                >
                  $ {particularjobDetails && particularjobDetails.minSal}-{" "}
                  {particularjobDetails && particularjobDetails.maxSal
                    ? particularjobDetails.maxSal
                    : "Not Disclosed"}
                </Typography>
              </div>
              <div className="d-flex align-items-center">
                <PlaceIcon className="place_Icon" />
                <Typography className="place_Icon">
                  {particularjobDetails && particularjobDetails.location}
                </Typography>
              </div>
             

              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <Typography className="place_Icon">
                    Posted:
                    <span>
                      {moment(
                        particularjobDetails && particularjobDetails.posted
                      ).fromNow()}
                    </span>
                  </Typography>

                  <Divider
                    sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                    orientation="vertical"
                    flexItem
                  />
                  <Typography className="place_Icon">
                    Openings:
                    <span>
                      {particularjobDetails && particularjobDetails.openings}
                    </span>
                  </Typography>

                  <Divider
                    sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                    orientation="vertical"
                    flexItem
                  />
                  <Typography className="place_Icon">
                    Applicants:<span>6</span>
                  </Typography>
                </div>

                <div className="d-flex gap-3">
                  <Button variant="outlined" className="rounded-pill">
                    Save
                  </Button>
                  <Button variant="contained" className="rounded-pill" onClick={ApplyForJob}>
                    Apply
                  </Button>
                </div>
              </div>
            </Container>
          </Paper>

          <Paper className="rounded-4">
            <Container className="pt-3 pb-3">
              <Typography className="fs-20 fw-bold Job-Title">
                Job Description
              </Typography>
              <Typography variant="body2" className="lh-1 opacity08">
                {particularjobDetails && particularjobDetails.companyId.name} is looking for {particularjobDetails && particularjobDetails?.jobTitle} to
                join our dynamic team and embark on a rewarding career journey.
              </Typography>
              <Stack className="mb-3 row-gap-3 mt-10">
                {particularjobDetails &&
                  particularjobDetails.jobDescription.map(
                    (data: string, index: number) => {
                      return (
                        <Box className="d-flex">
                          <Typography variant="body2">{index + 1}.</Typography>
                          <Typography variant="body2">{data}</Typography>
                        </Box>
                      );
                    }
                  )}
              </Stack>
              <Stack>
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                    Role :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                  {particularjobDetails && particularjobDetails?.jobTitle}
                  </Typography>
                </div>
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                    Department :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                    Backend Developer
                  </Typography>
                </div>
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                    Industry Type :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                  {particularjobDetails && particularjobDetails?.industryType}
                  </Typography>
                </div>{" "}
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                    Employement Type :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                    Backend Developer
                  </Typography>
                </div>{" "}
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                  workmode:{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                   {particularjobDetails && particularjobDetails.workmode}
                  </Typography>
                </div>
              </Stack>
              <Typography className="mt-2 mb-1 fw-bold" variant="body2">
                Education
              </Typography>
              <div className="d-flex gap-3">
                {particularjobDetails && particularjobDetails.technologiesKnown.map((data:string)=>{
                return(
                <Chip label={data} variant="outlined" className="fw-medium" />
                )
                })}
             
              </div>
              <Typography className="mt-2 mb-1 fw-bold" variant="body2">
                Key Skills
              </Typography>
              <div className="d-flex gap-3">
              {particularjobDetails && particularjobDetails.qualifications.map((data:string)=>{
                return(
                <Chip label={data} variant="outlined" className="fw-medium" />
                )
                })}
              </div>
            </Container>
          </Paper>
        </Grid>
        <Grid item className="Recommended_container" xs={4}>
          <Paper className="rounded-4">
            <Typography variant="h6" className="pt-3 mb-1 similarJobs">
              Similar Jobs
            </Typography>
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleJob;
