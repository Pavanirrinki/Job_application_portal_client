import React, { useContext, useState } from "react";
import "./UploadJob.css";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { MultipleSelectPlaceholder } from "../../Containers/MuiComponents/Select";
import {
  JOBSSERVICE,
  currencySymbols,
  exp_years,
  industryTypes,
} from "../../Containers/Env/Env";
import axios from "axios";
import { UserContext } from "../../Containers/useContext/Context";
import { Navigate, useNavigate } from "react-router-dom";
type Props = {};

export const UploadJob = (props: Props) => {
  const navigate = useNavigate();
  const { user } = useContext<any>(UserContext);
  const names = ["In Office", "Work from home"];
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    workmode: "",
    jobDescription: "",
    keyskills: "",
    min_exp: "",
    max_exp: "",
    min_salary: "",
    max_salary: "",
    location: "",
    industryType: "",
    openings: "",
    qualifications:''
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setJobDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e);
  };

  const PostJob = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("jobDescription", jobDetails.jobDescription);
    formData.append("skills", jobDetails.keyskills);
    formData.append("minExp", jobDetails.min_exp);
    formData.append("maxExp", jobDetails.max_exp);
    formData.append("minSal", jobDetails.min_salary);
    formData.append("maxSal", jobDetails.max_salary);
    formData.append("companyId",user.id);
    formData.append("location", jobDetails.location);
    formData.append("workmode", jobDetails.workmode);
    formData.append("jobTitle", jobDetails.jobTitle);
    formData.append("industryType", jobDetails.industryType);
    formData.append("openings", jobDetails.openings);
    formData.append("qualifications",jobDetails.qualifications);
    axios
      .post(JOBSSERVICE + "save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setJobDetails({
          jobTitle: "",
          workmode: "",
          jobDescription: "",
          keyskills: "",
          min_exp: "",
          max_exp: "",
          min_salary: "",
          max_salary: "",
          location: "",
          industryType: "",
          openings: "",
          qualifications:""
        });
        navigate("/home");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <Container style={{ width: "50%" }}>
      <Paper className="mb-10 rounded-4">
        <Typography variant="h6" className="fw-600 postJob pd-10">
          Post a Job-Private
        </Typography>
        <Container>
          <FormControl fullWidth style={{ width: "90%", marginLeft: "30px" }}>
            <FormLabel
              id="demo-radio-buttons-group-label"
              required
              className="mb-10"
            >
              JobTitle/Designation
            </FormLabel>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Job Title"
              className="mb-30"
              name="jobTitle"
              value={jobDetails.jobTitle}
              onChange={handleChange}
            />
            <FormLabel id="demo-radio-buttons-group-label" required>
              Work mode
            </FormLabel>

            <MultipleSelectPlaceholder
              placeholder="Work Mode...."
              fullwidth
              renderData={names}
              named="workmode"
              onChange={handleChange}
              className="mb-30"
            />
            <FormLabel id="demo-radio-buttons-group-label" required>
              Job Description
            </FormLabel>

            <TextField
              id="filled-multiline-flexible"
              placeholder="Job Description......."
              multiline
              rows={9}
              className="mb-30"
              fullWidth
              name="jobDescription"
              value={jobDetails.jobDescription}
              onChange={handleChange}
            />
            <FormLabel
              id="demo-radio-buttons-group-label"
              required
              className="mb-10"
            >
              Key skills
            </FormLabel>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Required Skills...."
              className="mb-30"
              helperText="Please each skill separated by comma"
              name="keyskills"
              value={jobDetails.keyskills}
              onChange={handleChange}
            />
            <FormLabel
              id="demo-radio-buttons-group-label"
              required
              className="mb-10"
            >
              Educational Qualifications
            </FormLabel>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Required Skills...."
              className="mb-30"
              helperText="Please each skill separated by comma"
              name="qualifications"
              value={jobDetails.qualifications}
              onChange={handleChange}
            />
            <FormLabel id="demo-radio-buttons-group-label" required>
              Work Experience(years)
            </FormLabel>
            <div className="d-flex align-items-center w-100 gap-2 mb-20">
              <div className="width-50">
                <MultipleSelectPlaceholder
                  placeholder="Select Min Years...."
                  fullwidth
                  renderData={exp_years}
                  named="min_exp"
                  onChange={handleChange}
                />
              </div>{" "}
              To
              <div className="width-50">
                <MultipleSelectPlaceholder
                  placeholder="Select Max Years..."
                  fullwidth
                  renderData={exp_years}
                  named="max_exp"
                  onChange={handleChange}
                />
              </div>
            </div>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Annual Salary
            </FormLabel>
            <div className="d-flex align-items-center w-100 gap-2 mb-20 justify-content-center">
              <div className="width-33">
                <MultipleSelectPlaceholder
                  placeholder="India - ₹"
                  fullwidth
                  renderData={currencySymbols}
                  named="currency"
                  onChange={handleChange}
                />
              </div>
              <div className="width-33">
                <TextField
                  id="demo-helper-text-misaligned"
                  placeholder="Min Salary...."
                  name="min_salary"
                  value={jobDetails.min_salary}
                  onChange={handleChange}
                  type="number"
                />
              </div>{" "}
              To
              <div className="width-33">
                <TextField
                  id="demo-helper-text-misaligned"
                  placeholder="Max Salary...."
                  name="max_salary"
                  value={jobDetails.max_salary}
                  onChange={handleChange}
                  type="number"
                />
              </div>
            </div>

            <FormLabel
              id="demo-radio-buttons-group-label"
              required
              className="mb-10"
            >
              Location
            </FormLabel>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Enter Job Location...."
              className="mb-30"
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
            />
            <FormLabel id="demo-radio-buttons-group-label" required>
              Industry Type
            </FormLabel>

            <MultipleSelectPlaceholder
              placeholder="Select IndustryType..."
              fullwidth
              renderData={industryTypes}
              named="industryType"
              className="mb-30"
              onChange={handleChange}
            />
            <FormLabel
              id="demo-radio-buttons-group-label"
              required
              className="mb-10"
            >
              Openings
            </FormLabel>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Positions available...."
              name="openings"
              value={jobDetails.openings}
              onChange={handleChange}
              type="number"
            />
          </FormControl>
          <div className="d-flex pd-10 justify-content-end mt-0 mr-10">
            <Button>Cancel</Button>
            <Button onClick={PostJob}>Save</Button>
          </div>
        </Container>
      </Paper>
    </Container>
  );
};
