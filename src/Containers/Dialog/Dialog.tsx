import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Dialog.css";
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
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function ScrollDialog({ button }: { button: any }) {
 
  const { user,userProfileData,setWaitforLoad } = React.useContext<any>(UserContext);
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
    formData.append("pdf", pdf ? pdf : userProfileData.pdf);
    formData.append("resumename", resumeName ? resumeName.toString() : userProfileData.resumename);
    formData.append("uploaddate", new Date().toString());
    try {
     
      const response = await (userProfileData ? axios.put : axios.post)(
        USERSERVICE + "upload_user_data",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      toast.success('Resume Successfully updated', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
      setPdf(null);
      setSkills("");
      handleClose();
      setWaitforLoad(true);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            
          setPdf((reader.result as string)?.split(',')[1]);
            console.log(reader.result, "reader");
        };

        reader.readAsDataURL(file);
        setresumeName(file.name);

        console.log(file);
    }
};


console.log("user-dialog",userProfileData,pdf,resumeName)
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
        <DialogTitle id="scroll-dialog-title">{userProfileData ? "Edit Details":"Upload Details"}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="Dialog_Container"
          >
            <Container className="p-5 mt-3 rounded d-flex justify-content-center align-items-center flex-column resume_border">
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="file-input"
                  className="file-input"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-input" className="file-input-label">
                  Upload Resume
                </label>
              </div>
              
                <Typography>
                 {resumeName ? resumeName :(userProfileData &&userProfileData?.resumename ? userProfileData?.resumename:"Supported Formats: doc, docx, rtf, pdf, up to 2 MB")}
                </Typography>
           
            </Container>

            <Typography className="mt-3 mb-3">Update Skills</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Add Skills"
              variant="outlined"
              fullWidth
              value={(!skills && userProfileData && userProfileData?.skills) ? userProfileData.skills:skills}
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
  const { user,educational_details,setWaitforLoad } = React.useContext<any>(UserContext);
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
const EducationalDetails = {
  graduation_type:educationDetails?.graduation_type ?educationDetails?.graduation_type :educational_details?.graduation_type,
  university: educationDetails?.university ? educationDetails?.university: educational_details?.university,
  course: educationDetails?.course ? educationDetails?.course : educational_details?.course,
  specilization: educationDetails?.specilization ? educationDetails?.specilization : educational_details?.specilization,
  startDate: educationDetails?.startDate ? educationDetails?.startDate:educational_details?.startDate,
  endDate: educationDetails?.endDate ? educationDetails?.endDate:educational_details?.endDate,
  gradeSystem: educationDetails?.gradeSystem ? educationDetails?.gradeSystem : educational_details?.gradeSystem,
  marks_Grade: educationDetails?.marks_Grade ? educationDetails?.marks_Grade: educational_details?.marks_Grade,
  institute: educationDetails?.institute ? educationDetails?.institute : educational_details?.institute,
}
    try {
      const response = await (educational_details ? axios.put : axios.post)(
        USERSERVICE + `Save_user_educational_details/${user.id}`,
        EducationalDetails,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      
      console.log("Success:", response.data);
      toast.success('Educational Details Successfully updated', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
        setWaitforLoad(true)
        handleClose()
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
console.log("educate",educational_details)
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
        <DialogTitle id="scroll-dialog-title" className="pt-20 pl-10 pb-0 ml-8">
          Education
        </DialogTitle>
        <FormHelperText className="mb-3 mt-1 lh-0 text-wrap pt-0 pb-0 pl-18 pr-18">
          Details like course, university, and more, help recruiters identify
          your educational background
        </FormHelperText>
        <DialogContent
          dividers={scroll === "paper"}
          className="rounded-4 pt-10 pr-24 pb-0 pl-16"
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="pt-10 pb-10 pl-20 pr-20"
          >
            <Typography>Education</Typography>
            <MultipleSelectPlaceholder
              placeholder="Select Graduation..."
              data="data"
              fullwidth
              value={educationDetails?.graduation_type ?educationDetails?.graduation_type :educational_details?.graduation_type}
              renderData={names}
              onChange={handleChange}
              named="graduation_type"
            />
            <Typography className="pt-10 pb-10">Specialization</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="specilization"
              value={educationDetails?.specilization ? educationDetails?.specilization : educational_details?.specilization}
              onChange={handleChange}
            />
            <Typography className="pt-10 pb-10">University</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="university"
              value={educationDetails?.university ? educationDetails?.university: educational_details?.university}
              onChange={handleChange}
            />
            <FormControl className="d-flex">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="mt-10 mb-10 mr-0 ml-0"
              >
                Grade System
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gradeSystem"
                className="d-flex justify-content-around"
                onChange={handleChange}
                value={educationDetails?.gradeSystem ? educationDetails?.gradeSystem : educational_details?.gradeSystem}
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
            <Typography className="pt-10 pb-10">Grade/Marks</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="marks_Grade"
              value={educationDetails?.marks_Grade ? educationDetails?.marks_Grade: educational_details?.marks_Grade}
              onChange={handleChange}
            />
            <Typography className="pt-10 pb-10">Course</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="course"
              value={educationDetails?.course ? educationDetails?.course : educational_details?.course}
              onChange={handleChange}
            />
            <Typography className="pt-10 pb-10">Name of Institute</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              className="custom-textfield"
              name="institute"
              value={educationDetails?.institute ? educationDetails?.institute : educational_details?.institute}
              onChange={handleChange}
            />

            <Typography className="pt-10 pb-10">Course Duration</Typography>
            <div className="d-flex align-items-center w-100 gap-2">
              <div className="width-50">
                <MultipleSelectPlaceholder
                  placeholder="Select SatrtDate..."
                  fullwidth
                  data="data"
                  value ={educationDetails?.startDate ? educationDetails?.startDate:educational_details?.startDate}
                  renderData={Year}
                  onChange={handleChange}
                  named="startDate"
                />
              </div>{" "}
              To
              <div className="width-50">
                <MultipleSelectPlaceholder
                  placeholder="Select EndDate..."
                  fullwidth
                  data="data"
                  value={educationDetails?.endDate ? educationDetails?.endDate : educational_details?.endDate}
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
  const { user } = React.useContext<any>(UserContext);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [personaldetails, setPersonaldetails] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "Male",
    maritualStaus: "Single",
    Date: "",
    Month: "",
    Year: "",
    physicallyChallenged: "No",
    languageKnown: "",
    fresher_Experienced: "Fresher",
    experienced: 0,
    role: "",
  });
  const [address, setAddress] = useState([
    { hometown: "", placeholder: "Enter your Hometown", name: "hometown" },
    { state: "", placeholder: "Enter your State", name: "state" },
    { district: "", placeholder: "Enter your District", name: "district" },
    { pincode: "", placeholder: "Enter your Pincode", name: "pincode" },
    { country: "", placeholder: "Enter your Country", name: "country" },
    { loandmark: "", placeholder: "Enter your Landmark", name: "loandmark" },
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

  const AddressChange = (e: any, index: Number) => {
    const { name, value } = e.target;
    setAddress((prevAddress) =>
      prevAddress.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("personal details", personaldetails, address);
    const parsedDate = moment(user?.dateOfBirth, "YYYY-MMM-D");
    const formData = new FormData();
    formData.append("email", personaldetails.email ? personaldetails.email : user.email);
    formData.append("name", personaldetails.name ? personaldetails.name:user.name);
    formData.append("mobilenumber", personaldetails.mobile ? personaldetails.mobile:user.mobilenumber);
    formData.append("gender", personaldetails.gender ? personaldetails.gender:user.gender);
    formData.append("maritualStaus", personaldetails.maritualStaus ? personaldetails.maritualStaus: user.maritualStaus);
    formData.append(
      "dateOfBirth",
      `${ personaldetails.Year?personaldetails.Year: parsedDate.year() }-
      ${personaldetails.Month ? personaldetails.Month: parsedDate.format("MMMM")}-
      ${personaldetails.Date ? personaldetails.Date:parsedDate.date()}`
    );
    formData.append(
      "physicallyChallenged",
      personaldetails.physicallyChallenged ? personaldetails.physicallyChallenged : user.physicallyChallenged
      
    );
    formData.append("hometown", address[0].hometown  ? address[0].hometown : user.hometown);
    formData.append("state", address[1].state  ? address[1].state : user.state);
    formData.append("district", address[2].district ? address[2].district:user.district);
    formData.append("pincode", address[3].pincode ? address[3].pincode : user.pincode);
    formData.append("country", address[4].country ? address[4].country:user.country);
    formData.append("landmark", address[5].loandmark ? address[5].loandmark: user.landmark);
    formData.append("languageKnown", personaldetails.languageKnown ? personaldetails.languageKnown : user.languageKnow);
    formData.append("fresher_Experienced", personaldetails.fresher_Experienced ? personaldetails.fresher_Experienced:user.fresher_Experienced);
    formData.append("experienced", personaldetails.experienced.toString() ? personaldetails.experienced.toString():user.experienced);
    formData.append("role", personaldetails.role  ? personaldetails.role:user.role);

    try {
      const response = await axios.patch(
        USERSERVICE + `update_user_personal_details/${user.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },

        }
      );
      console.log(response.data);
      localStorage.setItem(
        `Job_application_user_data`,
        JSON.stringify(response.data)
      );
   
      setOpen(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  console.log(address);
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


console.log("data",'fdata',user)
  return (
    <React.Fragment>
      <div onClick={handleClickOpen("body")}>{button}</div>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="pd-10"
      >
        <Typography className="mt-20 mb-20 mr-0 ml-20">
          Personal Details
        </Typography>

        <DialogContent
          dividers={scroll === "paper"}
          className="rounded-4 pt-10 pr-24 pb-0 pl-16"
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="Dialog_content_text"
          >
            <div className="mb-20">
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
            <div className="mb-20">
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
            <div className="mb-20">
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
            <FormControl className="d-flex">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="mt-10 mb-10 mr-0 ml-0"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                defaultValue="Male"
                className="d-flex justify-content-around"
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
              <div className="Date_of_birth">
                <div className="width-33">
                  <MultipleSelectPlaceholder
                    placeholder="Select Date..."
                    fullwidth
                    data="data"
                    renderData={Dates}
                    onChange={handleChange}
                    named="Date"
                  />
                </div>

                <div className="width-33">
                  <MultipleSelectPlaceholder
                    placeholder="Select Month..."
                    fullwidth
                    data="data"
                    renderData={months}
                    onChange={handleChange}
                    named="Month"
                  />
                </div>
                <div className="width-33">
                  <MultipleSelectPlaceholder
                    placeholder="Select Year..."
                    fullwidth
                    data="data"
                    renderData={Year}
                    onChange={handleChange}
                    named="Year"
                  />
                </div>
              </div>
            </div>
            <FormControl className="d-flex">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="mt-10 mb-10 pl-0 pr-0"
              >
                Maritual Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="maritualStaus"
                defaultValue="Single"
                className="d-flex justify-content-around"
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
            <div className="address_main_container">
              <Typography>Permenant Address</Typography>
              <div className="address_container gap-1">
                {address &&
                  address?.map((data: any, index: Number) => {
                    return (
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className="custom-textfield mb-20"
                        name={data.name}
                        value={data[data.name]}
                        onChange={(e) => AddressChange(e, index)}
                        placeholder={`${data.placeholder}...`}
                      />
                    );
                  })}
              </div>
            </div>
            <FormControl className="d-flex">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="mt-10 mb-10 mr-0 ml-0"
              >
                Are you physically handicapped?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="physicallyChallenged"
                defaultValue="Yes"
                className="d-flex justify-content-around"
                onChange={handleChange}
                value={personaldetails.physicallyChallenged}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <div className="mb-20">
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
            <FormControl className="d-flex">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="mt-10 mb-10 mr-0 ml-0"
              >
                Fresher/Experienced
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="fresher_Experienced"
                defaultValue="Fresher"
                className="d-flex justify-content-around"
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
            <div className="mb-20">
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
            <div className="mb-20">
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
