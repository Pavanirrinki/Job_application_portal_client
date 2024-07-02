import {
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import { RecommendedJobs } from "../RecommendedJobs/RecommendedJobs";
import "./SingleJob.css"
type Props = {};

const SingleJob = (props: Props) => {
  return (
    <Container className="mb-3">
       
      <Grid container gap={4}>
        <Grid item className="ml-15" xs={7}>
          <Paper className="rounded-4 mb-4">
            <Container className="pt-3 pb-3">
              <Typography
               
                className="fs-20 fw-bold Job-Title"
              >
                Web Developer
              </Typography>
              <div className="d-flex align-items-center justify-content-start">
                <Typography
                  variant="body2"
                  gutterBottom
                  className="mb-0 pb-0"
                >
                  Infosource Techsystems
                </Typography>
                <StarIcon
                  className="text-warning fs-6 ml-8"
                />
                <Typography
                  variant="body2"

                  className="mt-0 ml-1 fw-600"
                >
                  5.0
                </Typography>
                <Typography
                  variant="body2"
                 className="mt-0 ml-5px fw-600"
                >
                  5.0
                </Typography>
                <Typography
                  variant="body2"
                   className="mt-0 ml-5px fw-600"
                >
                  Reviews
                </Typography>
              </div>

              <div className="d-flex align-items-center justify-content-start">
                <BusinessCenterOutlinedIcon className="text-secondary fs-6 place_Icon" />
                <Typography
                  variant="body2"

                  className="place_Icon mt-0 ml-15 fw-600"
                >
                  0-3 years
                </Typography>

                <Typography
                  variant="body2"
                  className="place_Icon mt-0 ml-15 fw-600"
                >
                  $ Not disclosed
                </Typography>
              </div>
              <div className="d-flex align-items-center">
                <PlaceIcon className="place_Icon" />
                <Typography className="place_Icon">Hyderabad</Typography>
              </div>
              <Divider className="Divider" />

              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <Typography className="place_Icon">
                    Posted:<span>4days Ago</span>
                  </Typography>

                  <Divider
                    sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                    orientation="vertical"
                    flexItem
                  />
                  <Typography className="place_Icon">
                    Openings:<span>1</span>
                  </Typography>

                  <Divider
                    sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                    orientation="vertical"
                    flexItem
                  />
                  <Typography className="place_Icon">
                    Applicants:<span>1456</span>
                  </Typography>
                </div>

                <div className="d-flex gap-3">
                  <Button variant="outlined" className="rounded-pill">
                    Save
                  </Button>
                  <Button variant="contained" className="rounded-pill">
                    Apply on company site
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
              <Typography
                variant="body2"
              
                className="lh-1 opacity08"
              >
                Infosource Techsystems Pvt Ltd is looking for Web Developer to
                join our dynamic team and embark on a rewarding career journey.
              </Typography>
              <Stack
                
                className="mb-3 row-gap-3 mt-10"
              >
                <Typography variant="body2">
                  1.Website and software application designing, building, or
                  maintaining.
                </Typography>
                <Typography variant="body2">
                  2.Using scripting or authoring languages, management tools,
                  content creation tools, applications, and digital media.
                </Typography>
                <Typography variant="body2">
                  3.Conferring with teams to resolve conflicts, prioritize
                  needs, develop content criteria, or choose solutions.
                </Typography>
                <Typography variant="body2">
                  4.Directing or performing Website updates.
                </Typography>
                <Typography variant="body2">
                  5.Developing or validating test routines and schedules to
                  ensure that test cases mimic external interfaces and address
                  all browser and device types.
                </Typography>
                <Typography variant="body2">
                  6.Editing, writing, or designing Website content, and
                  directing team members who produce content.
                </Typography>
                <Typography variant="body2">
                  7.Maintaining an understanding of the latest Web applications
                  and programming practices through education, study, and
                  participation in conferences, workshops, and groups.
                </Typography>
                <Typography variant="body2">
                  8.Back up files from Web sites to local directories for
                  recovery.
                </Typography>
                <Typography variant="body2">
                  9.Identifying problems uncovered by customer feedback and
                  testing, and correcting or referring problems to appropriate
                  personnel for correction.
                </Typography>
                <Typography variant="body2">
                  10.Evaluating code to ensure it meets industry standards, is
                  valid, is properly structured, and is compatible with
                  browsers, devices, or operating systems.
                </Typography>
                <Typography variant="body2">
                  11.Determining user needs by analyzing technical requirements
                </Typography>
              </Stack>
              <Stack>
                <div className="d-flex mb-2">
                  <Typography className="fw-bold" variant="body2">
                    Role :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                    Backend Developer
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
                    Backend Developer
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
                    Role Category :{" "}
                  </Typography>
                  <Typography variant="body2" className="color_717b9e">
                    Backend Developer
                  </Typography>
                </div>
              </Stack>
              <Typography className="mt-2 mb-1 fw-bold" variant="body2">
                Education
              </Typography>
              <div className="d-flex gap-3">
                <Chip label="UG" variant="outlined" className="fw-medium" />
                <Chip label="PG" variant="outlined" className="fw-medium" />
                <Chip label="IT" variant="outlined" className="fw-medium" />
              </div>
              <Typography className="mt-2 mb-1 fw-bold" variant="body2">
                Key Skills
              </Typography>
              <div className="d-flex gap-3">
                <Chip
                  label="web technologies"
                  variant="outlined"
                  className="fw-medium"
                />
              </div>
            </Container>
          </Paper>
        </Grid>
        <Grid item className="Recommended_container" xs={4}>
          <Paper className="rounded-4">
          <Typography variant="h6" className="pt-3 mb-1 similarJobs">Similar Jobs</Typography>
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
