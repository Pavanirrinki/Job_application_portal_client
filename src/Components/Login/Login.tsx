import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { USERSERVICE } from "../../Containers/Env/Env";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        USERSERVICE + "login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          localStorage.setItem(
            `Job_application_user_data`,
            JSON.stringify(res.data)
          );
          return navigate("/");
        }
      })
      .catch((error) =>
        console.log(error.response?.data ? error.response?.data : error.message)
      );
  };

  const SendOtp = (e: any) => {
    e.preventDefault();
    if (email != "") {
      axios
        .post(
          USERSERVICE + "otp-send",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/forgotPassword", { state: email });
        })
        .catch((error) => console.log(error.message));
    } else {
      alert("Please fill email");
    }
  };
  return (
    <Grid container className="container">
      <Grid item xs={2}></Grid>
      <Grid item xs={4} mt={3}>
        <Paper className="pd-30">
          <Typography className="heading">New to Portal</Typography>
          <div className="flex-start">
            <DoneIcon className="DoneIcon" />
            <Typography className="text" variant="body2">
              One click apply using Portal profile.
            </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon" />
            <Typography className="text" variant="body2">
              Get relevant job recommendations.
            </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon" />
            <Typography className="text" variant="body2">
              Showcase profile to top companies and consultants.
            </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon" />
            <Typography className="text" variant="body2">
              Know application status on applied jobs.
            </Typography>
          </div>
          <div className="flex-center md-10">
            <Button variant="outlined">Register for free</Button>
          </div>
          <div className="flex-end">
            <img src="LoginInfo.png" alt="logo" className="Logininfo-png" />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={8}>
          <Container>
            <Typography className="login-container">LogIn</Typography>
            <label className="fs-14 fw-700 p-1">EmailID/Username</label>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Enter your Email"
              className="border-input opacity09 mb-30"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="fs-14 fw-700 p-1">Password</label>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Enter your password"
              className="border-input opacity09"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Typography
              className="text-end mr-12 text-primary cursor-pointer"
              variant="caption"
              display="block"
              gutterBottom
              onClick={SendOtp}
            >
              Forgot password?
            </Typography>
            <div className="d-flex justify-content-center flex-column">
              <Button
                variant="contained"
                style={{ width: "inherit" }}
                className="md-10"
                onClick={HandleSubmit}
              >
                LOG IN
              </Button>
              <Typography className="text-center">Use OTP to LogIn</Typography>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <Divider className="md-10">Or</Divider>
              <Paper
                elevation={3}
                className="pd-10 rounded-pill d-flex mb-30 align-items-center"
              >
                <img
                  src="google.png"
                  className="Google_img"
                  alt="google logo"
                />

                <Typography className="fw-700 fs-15 text-secondary">
                  Sign In with Google
                </Typography>
              </Paper>
            </div>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Login;
