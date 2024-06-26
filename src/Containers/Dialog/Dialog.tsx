import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {
  Dates,
  USERSERVICE,
  UserService,
  Year,
  months,
  names,
} from "../Env/Env";
import { MultipleSelectPlaceholder } from "../MuiComponents/Select";
import { UserContext } from "../useContext/Context";

export default function ScrollDialog({ button }: { button: any }) {
  const {user} = React.useContext<any>(UserContext);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const [skills, setSkills] = React.useState<string>("");
  const [pdf, setPdf] = useState<any>(null);
  const [resumeName, setresumeName] = useState<String>("");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setPdf(null);
    setSkills("");
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const UploadResume = async (event: any) => {
    event.preventDefault();
    console.log("data clicked");
    const formData = new FormData();

    formData.append("Id", user.id);
    formData.append("skills", skills);
    formData.append("pdf", pdf);
    formData.append("resumename", resumeName.toString());
    formData.append("uploaddate", new Date().toString());
    try {
      const response = await axios.post(
        USERSERVICE + "upload_user_data",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setPdf(null);
      setSkills("");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen("body")} className="text-dark">
        {button}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Upload Details</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{ minWidth: "500px" }}
          >
            <Container
              className="p-5 mt-3 rounded d-flex justify-content-center align-items-center flex-column"
              style={{ border: "1px dashed red" }}
            >
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="file-input"
                  className="file-input"
                  onChange={(e: any) => {
                    setPdf(e.target.files[0]);
                    setresumeName(e.target.files[0].name);

                    console.log(e.target.files[0]);
                  }}
                />
                <label htmlFor="file-input" className="file-input-label">
                  Upload Resume
                </label>
              </div>
              {pdf ? (
                pdf.name
              ) : (
                <Typography>
                  Supported Formats: doc, docx, rtf, pdf, upto 2 MB
                </Typography>
              )}
            </Container>

            <Typography className="mt-3 mb-3">Update Skills</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Add Skills"
              variant="outlined"
              fullWidth
              helperText="Skills separated by comma."
              onChange={(event) => setSkills(event.target.value)}
            />
            <Typography className="mt-3 mb-3">Resume Headline</Typography>
            <TextField
              id="outlined-textarea"
              placeholder="Placeholder"
              multiline
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={UploadResume}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
























export const Education = ({ button }: { button: any }) => {
  const {user} = React.useContext<any>(UserContext);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [educationDetails, setEducationDetails] = useState({
    graduation_type: "",
    university: "",
    course: "",
    specilization: "",
    startDate: "",
    endDate: "",
    gradeSystem: "",
    marks_Grade: "",
    institute: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEducationDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e);
  };

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const HandleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        USERSERVICE +
          `Save_user_educational_details/${user.id}`,
        educationDetails,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      // Handle success
      console.log("Success:", response.data);
      setOpen(false);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <div onClick={handleClickOpen("body")}>{button}</div>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" style={{ padding: "10px 40px" }}>
          Education
        </DialogTitle>
        <FormHelperText
          style={{
            marginTop: "0px",
            lineHeight: "0px",
            padding: "0px 18px",
            textWrap: "wrap",
          }}
          className="mb-3 mt-2"
        >
          Details like course, university, and more, help recruiters identify
          your educational background
        </FormHelperText>
        <DialogContent
          dividers={scroll === "paper"}
          style={{ padding: "10px 24px 0px 16px", borderRadius: "20px" }}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{ padding: "10px 20px", borderRadius: "10px" }}
          >
            <Typography style={{ padding: "10px 40px 0px 15px" }}>
              Education
            </Typography>
            <MultipleSelectPlaceholder
              placeholder="Graduation"
              data="data"
              fullwidth
              renderData={names}
              onChange={handleChange}
              named="graduation_type"
            />
            <Typography style={{ margin: "10px 0px" }}>
              Specialization
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="specilization"
              value={educationDetails.specilization}
              onChange={handleChange}
            />
            <Typography style={{ margin: "10px 0px" }}>University</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="university"
              value={educationDetails.university}
              onChange={handleChange}
            />
            <FormControl style={{ display: "flex" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ margin: "10px 0px" }}
              >
                Grade System
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gradeSystem"
                style={{ display: "flex", justifyContent: "space-around" }}
                onChange={handleChange}
                value={educationDetails.gradeSystem}
              >
                <FormControlLabel
                  value="Marks"
                  control={<Radio />}
                  label="Marks"
                />
                <FormControlLabel
                  value="Grade"
                  control={<Radio />}
                  label="Grade"
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ margin: "10px 0px" }}>Grade/Marks</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="marks_Grade"
              value={educationDetails.marks_Grade}
              onChange={handleChange}
            />
            <Typography style={{ margin: "10px 0px" }}>Course</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="course"
              value={educationDetails.course}
              onChange={handleChange}
            />
            <Typography style={{ margin: "10px 0px" }}>
              Name of Institute
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="institute"
              value={educationDetails.institute}
              onChange={handleChange}
            />

            <Typography style={{ margin: "10px 0px" }}>
              Course Duration
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: 5,
              }}
            >
              <div style={{ width: "50%" }}>
                <MultipleSelectPlaceholder
                  placeholder="SatrtDate"
                  fullwidth
                  data="data"
                  renderData={Year}
                  onChange={handleChange}
                  named="startDate"
                />
              </div>{" "}
              To
              <div style={{ width: "50%" }}>
                <MultipleSelectPlaceholder
                  placeholder="EndDate"
                  fullwidth
                  data="data"
                  renderData={Year}
                  onChange={handleChange}
                  named="endDate"
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={HandleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

































export const PersonalDewtails = ({ button }: { button: any }) => {
  const {user} = React.useContext<any>(UserContext);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [personaldetails, setPersonaldetails] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "Male",
    maritualStaus: "Single",
    Date:"",
    Month:"",
    Year:"",
    physicallyChallenged: "No",
    languageKnown: "",
    fresher_Experienced: "Fresher",
    experienced: 0,
    role: "",
  });
  const [address, setAddress] = useState([
    { hometown: "", placeholder: "Enter your Hometown",name:"hometown" },
    { state: "", placeholder: "Enter your State",name:"state"},
    { district: "", placeholder: "Enter your District",name:"district" },
    { pincode: "", placeholder: "Enter your Pincode",name:"pincode" },
    { country: "", placeholder: "Enter your Country",name:"country" },
    { loandmark: "", placeholder: "Enter your Landmark",name:"loandmark" },
  ]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setPersonaldetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };

  
const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

const AddressChange = (e:any,index:Number)=>{
  const { name, value } = e.target;
    setAddress(prevAddress =>
      prevAddress.map((item, i) => 
        i === index ? { ...item, [name]: value } : item
      )
    );
  
}
  const handleClose = () => {
    setOpen(false);
  };
  const HandleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("personal details",personaldetails,address);
    const formData = new FormData();
    formData.append("email",personaldetails.email);
    formData.append("name",personaldetails.name);
    formData.append("mobilenumber",personaldetails.mobile);
    formData.append("gender",personaldetails.gender);
    formData.append("maritualStaus",personaldetails.maritualStaus);
    formData.append("dateOfBirth",`${personaldetails.Year}-${personaldetails.Month}-${personaldetails.Date}`);
    formData.append("physicallyChallenged",personaldetails.physicallyChallenged);
    formData.append("hometown", address[0].hometown || ""); 
    formData.append("state", address[1].state || ""); 
    formData.append("district", address[2].district || ""); 
    formData.append("pincode", address[3].pincode || ""); 
    formData.append("country", address[4].country || "");
    formData.append("landmark", address[5].loandmark || "");
    formData.append("languageKnown",personaldetails.languageKnown);
    formData.append("fresher_Experienced",personaldetails.fresher_Experienced);
    formData.append("experienced",personaldetails.experienced.toString());
    formData.append("role",personaldetails.role);


    try{
        const response = await axios.patch(USERSERVICE+`update_user_personal_details/${user.id}`,formData,
          {
            headers:{
                 "Content-Type": "application/json"
            }
          }
        )
     console.log(response.data);
     setOpen(false);
    }catch(error:any){
             console.log(error.message);
    }
    
  };
console.log(address)
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <div onClick={handleClickOpen("body")}>{button}</div>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{ padding: "10px" }}
      >
        <Typography style={{ margin: "20px 20px 0px 20px" }}>
          Personal Details
        </Typography>

        <DialogContent
          dividers={scroll === "paper"}
          style={{ padding: "10px 24px 0px 16px", borderRadius: "20px" }}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{
              padding: "0px 24px 0px 20px",
              borderRadius: "10px",
              width: "500px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <Typography>Name</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="name"
                value={personaldetails.name}
                onChange={handleChange}
                placeholder="Enter your Name......."
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography>Email</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="email"
                value={personaldetails.email}
                onChange={handleChange}
                placeholder="Enter your email......."
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography>MobileNumber</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="mobile"
                value={personaldetails.mobile}
                onChange={handleChange}
                placeholder="Enter your mobilenumber......."
              />
            </div>
            <FormControl style={{ display: "flex" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ margin: "10px 0px" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                defaultValue="Male"
                style={{ display: "flex", justifyContent: "space-around"}}
                onChange={handleChange}
                value={personaldetails.gender}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            <div>
              <Typography>Date of birth</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  columnGap: 5,
                }}
              >
                <div style={{ width: "33%" }}>
                  <MultipleSelectPlaceholder
                    placeholder="Date"
                    fullwidth
                    data="data"
                    renderData={Dates}
                    onChange={handleChange}
                    named="Date"
                  />
                </div>

                <div style={{ width: "33%" }}>
                  <MultipleSelectPlaceholder
                    placeholder="Month"
                    fullwidth
                    data="data"
                    renderData={months}
                    onChange={handleChange}
                    named="Month"
                  />
                </div>
                <div style={{ width: "33%" }}>
                  <MultipleSelectPlaceholder
                    placeholder="Year"
                    fullwidth
                    data="data"
                    renderData={Year}
                    onChange={handleChange}
                    named="Year"
                  />
                </div>
              </div>
            </div>
            <FormControl style={{ display: "flex" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ margin: "10px 0px" }}
              >
                Maritual Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="maritualStaus"
                defaultValue="Single"
                style={{ display: "flex", justifyContent: "space-around"}}
                onChange={handleChange}
                value={personaldetails.maritualStaus}
              >
                <FormControlLabel
                  value="Single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="Married"
                  control={<Radio />}
                  label="Married"
                />

              </RadioGroup>
            </FormControl>
            <div
              style={{
                border: "1px solid red",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography>Permenant Address</Typography>
              <div
                style={{
                  gap: 4,
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "10px",
                }}
              >
                {address && address?.map((data:any,index:Number) => {
                  return (
                    
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      style={{ marginBottom: "20px" }}
                      className="custom-textfield"
                      name={data.name}
                      value={data[data.name]}
                      onChange={(e)=>AddressChange(e,index)}
                      placeholder={`${data.placeholder}...`} />
                   
                  );
                })}
              </div>
            </div>
            <FormControl style={{ display: "flex" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ margin: "10px 0px" }}
              >
                Are you physically handicapped?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="physicallyChallenged"
                defaultValue="Yes"
                style={{ display: "flex", justifyContent: "space-around"}}
                onChange={handleChange}
                value={personaldetails.physicallyChallenged}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                />

              </RadioGroup>
            </FormControl>

            <div style={{ marginBottom: "20px" }}>
              <Typography>Language Known</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="languageKnown"
                helperText="Please separate skills by comma(,)"
                value={personaldetails.languageKnown}
                onChange={handleChange}
                placeholder="Language known......."
              />
            </div>
            <FormControl style={{ display: "flex" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ margin: "10px 0px" }}
              >
                Fresher/Experienced
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="fresher_Experienced"
                defaultValue="Fresher"
                style={{ display: "flex", justifyContent: "space-around"}}
                onChange={handleChange}
                value={personaldetails.fresher_Experienced}
              >
                <FormControlLabel
                  value="Fresher"
                  control={<Radio />}
                  label="Fresher"
                />
                <FormControlLabel
                  value="Experienced"
                  control={<Radio />}
                  label="Experienced"
                />

              </RadioGroup>
            </FormControl>
            <div style={{ marginBottom: "20px" }}>
              <Typography>Experience years</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="experienced"
                value={personaldetails.experienced}
                onChange={handleChange}
                placeholder="Enter your Experience......"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography>Role</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                className="custom-textfield"
                name="role"
                value={personaldetails.role}
                onChange={handleChange}
                placeholder="Enter your Role......"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={HandleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
