import {
  AlertTitle,
  Alert,
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
import {
  COMPANYSERVICE,
  USERSERVICE,
  profileimage,
} from "../../Containers/Env/Env";

import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "../../Containers/MuiComponents/SnackBar";


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
  const [showsnackBar,setShowsnackBar] = useState<boolean>(false);
  const [message,setMessage] = useState("");
  const [severity,setSeverity] = useState('');
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [companyErrors, setCompanyErrors] = useState({
    companyDescription: "",
    workingTechnologies: "",
  });
  console.log("RegisterAS", registerAs);

  async function SubmitData(event: any) {
    event.preventDefault();
    let formValid = true;

    if (!name) {
      formValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please provide a name",
      }));
    }
    if (!email) {
      formValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please provide an email",
      }));
    }
    if (!mobile) {
      formValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Please provide a mobile number",
      }));
    }
    if (!password) {
      formValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please provide a password",
      }));
    }

    if (registerAs !== "Employee") {
      if (!companyDescription) {
        formValid = false;
        setCompanyErrors((prevErrors) => ({
          ...prevErrors,
          companyDescription: "Please provide a description",
        }));
      }
      if (!workingTechnologies) {
        formValid = false;
        setCompanyErrors((prevErrors) => ({
          ...prevErrors,
          workingTechnologies: "Please provide working technologies",
        }));
      }
    }

    if (formValid) {
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
      formData.append("profile_pic", profileimage);
      try {
        const url =
          registerAs === "Employee"
            ? USERSERVICE + "register"
            : COMPANYSERVICE + "save";
        const payload = registerAs === "Employee" ? Employeepayload : formData;
        const { data } = await axios.post(url, payload);
        
        console.log(data,"dataregister");
        setEmail("");
        setPassword("");
        setMobile("");
        setName("");
        setCompanyDescription("");
        setWorkingTechnologies("");
        setErrors({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        setCompanyErrors({
          companyDescription: "",
          workingTechnologies: "",
        });
        setMessage("Registered Successfully");
        setSeverity("success");
        setShowsnackBar(true);
        setTimeout(()=>{
         
          navigate("/login");
        },2000)
        
      } catch (e: any) {
        console.log(e.response.data || e.message);
        setMessage(e.response.data);
        setSeverity("error")
        setShowsnackBar(true);
      }
    } else {
      return ;
    }
  }

  const BlurEffect = (field: string, value: string) => {
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
      case "companyDescription":
        errorMessage =
          value.length <= 1 ? "Company description must be provided" : "";
        break;
      case "workingTechnologies":
        errorMessage =
          value.length <= 1 ? "Working technologies must be provided" : "";
        break;
      default:
        break;
    }

    if (field === "companyDescription" || field === "workingTechnologies") {
      setCompanyErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    }
  };

  return (
    <>
      <Box className="bg-white w-100 mb-20">
        <Container className="d-flex justify-content-between align-items-center">
          <img src="/portal_icon.webp" alt="logo" className="logo-styles" />
          <Box className="d-flex gap-1">
            <Typography className="header">Already Register?</Typography>
            <Typography
              className="text-primary opacity10 fw-700 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              {" "}
              LOGIN
            </Typography>
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
                        error={!!companyErrors.companyDescription}
                        placeholder="Company Description...."
                        onBlur={() => BlurEffect("companyDescription", companyDescription)}
                        className="border-input"
                        rows={5}
                        multiline
                        value={companyDescription}
                        fullWidth
                        helperText={
                         companyErrors.companyDescription
                            || "Please Provide description in points"
                        }
                        onChange={(e) => {
                          setCompanyDescription(e.target.value);
                          if (e.target.value.length > 1) {
                            setCompanyErrors((prevErrors) => ({
                              ...prevErrors,
                              companyDescription: "",
                            }));
                          }
                        }}
                      />
                      <label className="fs-14 fw-700 p-1">
                        Working Technologies
                      </label>
                      <TextField
                        id="outlined-basic"
                        placeholder="Add Skills"
                        error={!!companyErrors.workingTechnologies}
                        onBlur={() => BlurEffect("workingTechnologies", workingTechnologies)}
                        variant="outlined"
                        fullWidth
                        helperText={
                          companyErrors.workingTechnologies
                            ? companyErrors.workingTechnologies
                            : "Skills separated by comma."
                        }
                        className="border-input"
                        onChange={(e) => {
                          setWorkingTechnologies(e.target.value);
                          if (e.target.value.length > 1) {
                            setCompanyErrors((prevErrors) => ({
                              ...prevErrors,
                              workingTechnologies: "",
                            }));
                          }
                        }}
                      />
                    </div>
                  )}
                </FormControl>
               
               
                <CustomizedSnackbars message={message} showsnackBar={showsnackBar} severity={severity} >
                  <div className="d-flex justify-content-center align-items-center">
                  <Button variant="contained" className="m-20" type="submit">
                    Register
                  </Button>
                  </div>
                  </CustomizedSnackbars>
   
               
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};
