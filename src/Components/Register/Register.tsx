import {
  Box,
  Button,
 
  FormControl,
 
  FormControlLabel,
 
  FormLabel,
 
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { USERSERVICE } from "../../Containers/Env/Env";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";


type Props = {};


export const Register = (props:Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [registerAs,setRegisterAs] = useState('Employee');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  
  });
console.log("RegisterAS",registerAs)
  async function SubmitData(event:any) {
    event.preventDefault();
    if(name && email &&  mobile && password ){
    await axios
      .post(USERSERVICE + 'register', {
        email,
        password,
        name,
        mobilenumber: mobile,
        registerAs
      })
      .then((data) => {
        console.log(data.data);
        setEmail('');
        setPassword('');
        setMobile('');
        setName('');
        setErrors({
          name: '',
          email: '',
          mobile: '',
          password: '',
        });
        navigate("/login")
      })
      .catch((error) => console.log(error.message));

    }else{
      console.log("error")
    }
  }

  const BlurEffect = (field:any, value:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    let errorMessage = '';

    switch (field) {
      case 'name':
        errorMessage = value.length <= 1 ? 'Name must be longer than 1 character' : '';
        break;
      case 'email':
        errorMessage = !emailRegex.test(value) ? 'Invalid email format' : '';
        break;
      case 'mobile':
        errorMessage = !mobileRegex.test(value) ? 'Invalid mobile number' : '';
        break;
      case 'password':
        errorMessage = value.length <= 1 ? 'Password must be longer than 1 character' : '';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10} style={{ marginBottom: '20px',marginTop:"20px" }}>
   
        <Grid item xs={2}></Grid>
        <Grid item xs={3} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <Paper elevation={4} style={{ textAlign: 'center'}}>
            <div>
              <img
                src="info.png"
                alt="info"
                style={{ height: '180px', width: '180px' }} />
            </div>
            <h3>On registering, you can</h3>
            <Typography
              style={{ padding: '10px 10px 0px 10px', textAlign: 'start' }}
              variant="body2"
            >
              Build your profile and let recruiters find you
            </Typography>
            <Typography
              style={{ padding: '10px 10px 0px 10px', textAlign: 'start' }}
              variant="body2"
            >
              Get job postings delivered right to your email
            </Typography>
            <Typography style={{ padding: '10px', textAlign: 'start' }} variant="body2">
              Find a job and grow your career
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Create your Profile
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'grey', marginBottom: '20px' }}
              >
                Search & apply to jobs from India's No.1 Job Site
              </Typography>
            </div>

            <form action="#" onSubmit={SubmitData}>
              <div className="d-flex flex-column">
                <label
                  style={{
                    padding: '0px 0px 3px 5px',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Full Name
                </label>

                <TextField
                  error={!!errors.name}
                  onBlur={() => BlurEffect('name', name)}
                  helperText={errors.name || 'Please enter your name'}
                  id="demo-helper-text-misaligned"
                  placeholder="What is your name?"
                  className="border-input"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.length > 1) {
                      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
                    }
                  } } />
              </div>
              <div className="d-flex flex-column">
                <label
                  style={{
                    padding: '0px 0px 3px 5px',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Email
                </label>
                <TextField
                  error={!!errors.email}
                  onBlur={() => BlurEffect('email', email)}
                  helperText={errors.email || 'Please enter your email'}
                  id="demo-helper-text-misaligned"
                  placeholder="Enter your Email"
                  className="border-input"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value.length > 1) {
                      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                    }
                  } } />
              </div>
              <div className="d-flex flex-column">
                <label
                  style={{
                    padding: '0px 0px 3px 5px',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Mobile Number
                </label>
                <TextField
                  error={!!errors.mobile}
                  onBlur={() => BlurEffect('mobile', mobile)}
                  helperText={errors.mobile || 'Please enter your mobile number'}
                  id="demo-helper-text-misaligned"
                  placeholder="Enter your mobile number"
                  className="border-input"
                  value={mobile}
                  name="mobile"
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (e.target.value.length > 1) {
                      setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
                    }
                  } } />
              </div>
              <div className="d-flex flex-column">
                <label
                  style={{
                    padding: '0px 0px 3px 5px',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Password
                </label>

                <TextField
                  error={!!errors.password}
                  onBlur={() => BlurEffect('password', password)}
                  helperText={errors.password || 'Please enter your password'}
                  id="demo-helper-text-misaligned"
                  placeholder="Enter your password"
                  type="password"
                  className="border-input"
                  value={password}
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value.length > 1) {
                      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
                    }
                  } } />
              </div>
              <FormControl style={{ display: "flex" }}>
            
              <label
              id="demo-row-radio-buttons-group-label"
                  style={{
                    padding: '0px 0px 3px 5px',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                 RegisterAs
                </label>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="registerAs"
                defaultValue="Employee"
                style={{ display: "flex", justifyContent: "space-around" }}
                value={registerAs}
                onChange={(e)=>setRegisterAs(e.target.value)}
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
            </FormControl>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" style={{ margin: '20px' }} type="submit">
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

