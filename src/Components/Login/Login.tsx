import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import DoneIcon from '@mui/icons-material/Done';
type Props = {};


const Login = (props: Props) => {
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
        <Paper elevation={8} style={{ padding: "50px" }}>
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
            name="email"
            type="password"
            style={{marginBottom:"30px",opacity:"0.9"}}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

            }}
          >
            <Button
              variant="contained"
              style={{ width: "90%", margin: "10px" }}
            >
              Text
            </Button>
            <Typography>Use OTP to LogIn</Typography>
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
              }}
            >
              <img
                src="google.png"
                style={{ height: "20px", width: "20px", marginRight: "25%" }}
                alt="google logo"
              />

              <Typography style={{ fontWeight: "700", color: "grey",fontSize:"15px" }}>
                Sign In with Google
              </Typography>
            </Paper>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Login;
