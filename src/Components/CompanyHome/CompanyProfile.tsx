import { Button, Container, Paper, Stack, TextField, Typography, Grid, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./CompanyProfile.css";
import { COMPANYSERVICE, CompanyService } from "../../Containers/Env/Env";
import { UserContext } from "../../Containers/useContext/Context";
import axios from "axios";

type Props = {};

const CompanyProfile = (props: Props) => {
  const [companyProfileData,setCompanyProfileData] = useState({
    organizationName:"",
    email:"",
    mobile:'',
   companyDescription:"",
   workingTechnologies:""
  })
const {user} = useContext<any>(UserContext);
console.log("user","user",user)
const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCompanyProfileData((prev)=>({...prev,[name]:value}));
  }




const SubmitCompanyData =(event: React.MouseEvent<HTMLButtonElement>) =>{
  event.preventDefault();
  const formData = new FormData();
  formData.append("company_id",user.id)
  formData.append("email",companyProfileData.email);
  formData.append("name",companyProfileData.organizationName);
  formData.append("mobilenumber",companyProfileData.mobile);
  formData.append("companyDescription",companyProfileData.companyDescription);
  formData.append("workingTechnologies",companyProfileData.workingTechnologies);


  axios.patch(COMPANYSERVICE+`update_company_details`,formData,
).then((res)=>console.log(res.data)).catch((err)=>console.log(err.message))
}


  return (
    <Container className="m-3">
      <Paper className="container rounded bg-white mt-5 mb-5 ">
        <Grid container spacing={3}>
          <Grid item xs={12} className="d-flex justify-content-center">
            <Stack alignItems="center" className="profile-container">
              <label htmlFor="input">
                <Stack className="progress-circle" alignItems="center">
                  <Paper className="completion-text">87%</Paper>
                  <Box className="image-container" position="relative">
                    <img src="/userdp.svg" className="profile-image" alt="profile_pic" />
                    <Box className="add-icon" position="absolute" bottom={0} right={0}>
                      <AddCircleOutlineIcon className="fs-50" />
                    </Box>
                  </Box>
                  <input id="input" type="file" className="d-none" />
                </Stack>
              </label>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box p={3}>
              <Typography variant="h4" className="text-right" gutterBottom>
                Profile Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="pt-10 pb-10">Name of Company</Typography>
                  <TextField
                    id="company-name"
                    variant="outlined"
                    fullWidth
                    className="custom-textfield"
                    placeholder="Enter Organization Name..."
                    value={companyProfileData.organizationName}
                    name="organizationName"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className="pt-10 pb-10">Email</Typography>
                  <TextField
                    id="company-email"
                    variant="outlined"
                    fullWidth
                    className="custom-textfield"
                    placeholder="Enter Organization Email..."
                    type="email"
                    value={companyProfileData.email}
                    name="email"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className="pt-10 pb-10">Mobile</Typography>
                  <TextField
                    id="company-mobile"
                    variant="outlined"
                    fullWidth
                    className="custom-textfield"
                    placeholder="Enter Organization Mobile..."
                    type="number"
                    value={companyProfileData.mobile}
                    name="mobile"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className="pt-10 pb-10">Company Description</Typography>
                  <TextField
                    id="company-description"
                    variant="outlined"
                    placeholder="Company Description..."
                    rows={5}
                    multiline
                    fullWidth
                    value={companyProfileData.companyDescription}
                    name="companyDescription"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className="pt-10 pb-10">Update Skills</Typography>
                  <TextField
                    id="company-skills"
                    variant="outlined"
                    placeholder="Working technologies..."
                    className="custom-textfield"
                    fullWidth
                    helperText="Skills separated by comma."
                    value={companyProfileData.workingTechnologies}
                    name="workingTechnologies"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center" mt={3}>
                  <Button variant="contained" className="rounded-pill p-2" onClick={SubmitCompanyData}>
                    Save Profile
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CompanyProfile;
