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
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";
import { USERSERVICE } from "../../Containers/Env/Env";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type Props = {};


const Login = (props: Props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const HandleSubmit=(e:any)=>{
    e.preventDefault();
  axios.post(USERSERVICE+"login",{email,password},{
    headers:{
      "Content-Type": "application/json",
    }
  }).then((res)=>{console.log(res.data);
    if(res.status == 200){
      localStorage.setItem(`Job_application_user_data`,JSON.stringify(res.data));
      return navigate("/")
    }
  }).catch((error)=>console.log(error.response?.data ? error.response?.data:error.message))
  }
  const SendOtp=(e:any)=>{
    e.preventDefault();

  }
  return (
    <Grid
      container
     
      className="container"
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={4} mt={3}>
        <Paper className="pd-30"> 
          <Typography className="heading">New to Portal</Typography>
          <div className="flex-start">
            <DoneIcon className="DoneIcon"/>
          <Typography
            className="text"
            variant="body2"
          >
            One click apply using Portal profile.
          </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon"/>
          <Typography
            className="text"
            variant="body2"
          >
            Get relevant job recommendations.
          </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon"/>
          <Typography
            className="text"
            variant="body2"
          >
           Showcase profile to top companies and consultants.
          </Typography>
          </div>
          <div className="align-items-center">
            <DoneIcon className="DoneIcon"/>
          <Typography
           className="text"
            variant="body2"
          >
         Know application status on applied jobs.
          </Typography>
          </div>
          <div className="flex-center md-10">
            <Button variant="outlined">
              Register for free
            </Button>
          </div>
          <div className="flex-end">
            <img
              src="LoginInfo.png"
              alt="logo"
             className="Logininfo-png"
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        
        <Paper elevation={8} >
          <Container >
          <Typography className="login-container">
            LogIn
          </Typography>
          <label
            style={{
              padding: "0px 0px 3px 5px",
              fontWeight: "700",
              fontSize: "13px",
            }}
          >
            EmailID/Username
          </label>
          <TextField
            
            id="demo-helper-text-misaligned"
            placeholder="Enter your Email"
            className="border-input"
            name="email"
            style={{marginBottom:"30px",opacity:"0.9"}}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)}}
          />
          <label
            style={{
              padding: "0px 0px 3px 5px",
              fontWeight: "700",
              fontSize: "13px",
            }}
          >
            Password
          </label>
          <TextField
            
            id="demo-helper-text-misaligned"
            placeholder="Enter your password"
            className="border-input"
            name="password"
            type="password"
            style={{opacity:"0.9"}}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)}}
          />
          <Typography className="text-end mr-12 text-primary cursor-pointer" variant="caption" display="block" gutterBottom 
          onClick={SendOtp}>Forgot password?</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
           

            }}
          >
            <Button
              variant="contained"
              style={{ width: "inherit", margin: "10px" }}
              onClick={HandleSubmit}
            >
            LOG IN
            </Button>
            <Typography className="text-center">Use OTP to LogIn</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Divider style={{ margin: "10px" }}>Or</Divider>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
              marginBottom:"30px"
                    }}
            >
              <img
                src="google.png"
                style={{ height: "20px", width: "20px", marginRight: "25%" }}
                alt="google logo"
              />

              <Typography style={{ fontWeight: "700", color: "grey",fontSize:"15px"}}>
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
