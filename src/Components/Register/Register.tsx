import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { COMPANYSERVICE, USERSERVICE, profileimage } from "../../Containers/Env/Env";

import { useNavigate } from "react-router-dom";

type Props = {};

export const Register = (props: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [registerAs, setRegisterAs] = useState("Employee");
  const [companyDescription, setCompanyDescription] = useState("");
  const [workingTechnologies, setWorkingTechnologies] = useState<string>("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  console.log("RegisterAS", registerAs);

  async function SubmitData(event: any) {
    event.preventDefault();
    if (name && email && mobile && password) {
      const Employeepayload = {
        email,
        password,
        name,
        mobilenumber: mobile,
        registerAs,
      };
      const formData = new FormData();
      formData.append("name", name);
      formData.append("companyDescription", companyDescription);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("mobilenumber", mobile);
      formData.append("registerAs", registerAs);
      formData.append("workingTechnologies", workingTechnologies);
      formData.append("profile_pic",profileimage);
      try {
        const url =
          registerAs === "Employee"
            ? USERSERVICE + "register"
            : COMPANYSERVICE + "save";
        const payload = registerAs === "Employee" ? Employeepayload : formData;

        const { data } = await axios.post(url, payload);

        console.log(data);
        setEmail("");
        setPassword("");
        setMobile("");
        setName("");
        setCompanyDescription("");
        workingTechnologies && setWorkingTechnologies("");
        setErrors({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });

        navigate("/login");
      } catch (e: any) {
        console.log(e.message);
      }
    } else {
      console.log("error");
    }
  }

  const BlurEffect = (field: any, value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    let errorMessage = "";

    switch (field) {
      case "name":
        errorMessage =
          value.length <= 1 ? "Name must be longer than 1 character" : "";
        break;
      case "email":
        errorMessage = !emailRegex.test(value) ? "Invalid email format" : "";
        break;
      case "mobile":
        errorMessage = !mobileRegex.test(value) ? "Invalid mobile number" : "";
        break;
      case "password":
        errorMessage =
          value.length <= 1 ? "Password must be longer than 1 character" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
  };

  return (
    <>
    <Box className="bg-white w-100 mb-20">
      <Container className="d-flex justify-content-between align-items-center">
      <img src="/portal_icon.webp" alt="logo" className="logo-styles" />
      <Box className="d-flex gap-1">
      <Typography className="header">Already Register?</Typography>
      <Typography className="text-primary opacity10 fw-700 cursor-pointer" onClick={()=>navigate("/login")}> LOGIN</Typography>
      <Typography> here</Typography>
     </Box>
      </Container>
    </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10} className="mb-20">
        
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-center flex-column align-items-center"
          >
              
            <Paper elevation={4} className="text-center">
              <div>
                <img src="/info.png" alt="info" className="img_dimensions" />
              </div>
              <h3>On registering, you can</h3>
              <Typography className="text-center p-2" variant="body2">
                Build your profile and let recruiters find you
              </Typography>
              <Typography className="text-center p-2" variant="body2">
                Get job postings delivered right to your email
              </Typography>
              <Typography className="text-center p-2" variant="body2">
                Find a job and grow your career
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={3}>
              <div className="pd-20">
                <Typography variant="h6" className="fw-bold">
                  Create your Profile
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="text-secondary mb-20"
                >
                  Search & apply to jobs from India's No.1 Job Site
                </Typography>
              </div>

              <form action="#" onSubmit={SubmitData}>
                <div className="d-flex flex-column">
                  <label className="fs-14 fw-700 p-1">Full Name</label>

                  <TextField
                    error={!!errors.name}
                    onBlur={() => BlurEffect("name", name)}
                    helperText={errors.name || "Please enter your name"}
                    id="demo-helper-text-misaligned"
                    placeholder="What is your name?"
                    className="border-input"
                    value={name}
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value.length > 1) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          name: "",
                        }));
                      }
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fs-14 fw-700 p-1">Email</label>
                  <TextField
                    error={!!errors.email}
                    onBlur={() => BlurEffect("email", email)}
                    helperText={errors.email || "Please enter your email"}
                    id="demo-helper-text-misaligned"
                    placeholder="Enter your Email"
                    className="border-input"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value.length > 1) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          email: "",
                        }));
                      }
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fs-14 fw-700 p-1">Mobile Number</label>
                  <TextField
                    error={!!errors.mobile}
                    onBlur={() => BlurEffect("mobile", mobile)}
                    helperText={
                      errors.mobile || "Please enter your mobile number"
                    }
                    id="demo-helper-text-misaligned"
                    placeholder="Enter your mobile number"
                    className="border-input"
                    value={mobile}
                    name="mobile"
                    onChange={(e) => {
                      setMobile(e.target.value);
                      if (e.target.value.length > 1) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          mobile: "",
                        }));
                      }
                    }}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fs-14 fw-700 p-1">Password</label>

                  <TextField
                    error={!!errors.password}
                    onBlur={() => BlurEffect("password", password)}
                    helperText={errors.password || "Please enter your password"}
                    id="demo-helper-text-misaligned"
                    placeholder="Enter your password"
                    type="password"
                    className="border-input"
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value.length > 1) {
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          password: "",
                        }));
                      }
                    }}
                  />
                </div>
                <FormControl className="d-flex">
                  <label
                    id="demo-row-radio-buttons-group-label"
                    className="fs-14 fw-700 p-1"
                  >
                    RegisterAs
                  </label>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="registerAs"
                    defaultValue="Employee"
                    className="d-flex justify-content-around"
                    value={registerAs}
                    onChange={(e) => setRegisterAs(e.target.value)}
                  >
                    <FormControlLabel
                      value="Employee"
                      control={<Radio />}
                      label="Employee"
                    />
                    <FormControlLabel
                      value="Recruiter"
                      control={<Radio />}
                      label="Recruiter"
                    />
                  </RadioGroup>
                  {registerAs !== "Employee" && (
                    <div className="d-flex flex-column">
                      <label className="fs-14 fw-700 p-1">
                        Company Description
                      </label>

                      <TextField
                        id="outlined-textarea"
                        placeholder="Company Description...."
                        className="border-input"
                        rows={5}
                        multiline
                        value={companyDescription}
                        fullWidth
                        helperText="Please Provide description in points"
                        onChange={(e) => setCompanyDescription(e.target.value)}
                      />
                      <label className="fs-14 fw-700 p-1">
                        Working Technologies
                      </label>
                      <TextField
                        id="outlined-basic"
                        placeholder="Add Skills"
                        variant="outlined"
                        fullWidth
                        helperText="Skills separated by comma."
                        className="border-input"
                        onChange={(e) =>
                          setWorkingTechnologies(() => e.target.value)
                        }
                      />


                    </div>
                  )}
                </FormControl>
                <div className="d-flex justify-content-center align-items-center">
                  <Button variant="contained" className="m-20" type="submit">
                    Register
                  </Button>
                </div>

              </form>
            
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
