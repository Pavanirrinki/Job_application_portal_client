import {
  Box,
  Button,
 
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

export const Register = (props: Props) => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [mobile, setMobile] = useState<number | undefined>(undefined);

  async function SubmitData(event: any) {
    event.preventDefault();
  await  axios
      .post("http://desktop-b3n780k:8765/USERSERVICES/users/register", {
        email,
        password,
        name,
        mobilenumber: mobile,
      })
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error.message));
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue === '' ? undefined : Number(inputValue);
    
    if (numericValue != undefined) {
      setMobile(numericValue);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="portal_icon.webp"
                alt="logo"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}
            >
              Already Register ? <span style={{ color: "blue" }}>LOG IN</span>{" "}
              here
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <Paper elevation={4} style={{ textAlign: "center" }}>
            <div>
              <img
                src="info.png"
                alt="info"
                style={{ height: "180px", width: "180px" }}
              />
            </div>
            <h3>On registering,you can</h3>
            <Typography
              style={{ padding: "10px 10px 0px 10px", textAlign: "start" }}
              variant="body2"
            >
              Build your profile and let recruiters find you
            </Typography>
            <Typography
              style={{ padding: "10px 10px 0px 10px", textAlign: "start" }}
              variant="body2"
            >
              Get job postings delivered right to your email
            </Typography>
            <Typography
              style={{ padding: "10px", textAlign: "start" }}
              variant="body2"
            >
              Find a job and grow your career
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3}>
            <div style={{ padding: "20px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Create your Profile
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: "grey", marginBottom: "20px" }}
              >
                Search & apply to jobs from India's No.1 Job Site
              </Typography>
            </div>

            <form action="#" >
              <label
                style={{
                  padding: "0px 0px 3px 5px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Full Name
              </label>

              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                placeholder="what is your name?"
                className="border-input"
                value={name}
                name="name"
                onChange={(e)=>setName(e.target.value)}
              />

              <label
                style={{
                  padding: "0px 0px 3px 5px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Email
              </label>
              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                placeholder="Enter your Email"
                className="border-input"
                value={email}
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />

              <label
                style={{
                  padding: "0px 0px 3px 5px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Mobile Number
              </label>
              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                placeholder="Enter your mobilenumber"
                type="number"
                className="border-input"
                value={mobile}
                name="mobile"
                onChange={handleChange}
              />

              <label
                style={{
                  padding: "0px 0px 3px 5px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Password
              </label>

              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-misaligned"
                placeholder="Enter your password"
                type="password"
                className="border-input"
                value={password}
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
<Button variant="contained" style={{margin:"10px"}} onClick={SubmitData}>Contained</Button> 
</div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
