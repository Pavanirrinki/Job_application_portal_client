import React, { useContext, useEffect, useState } from "react";
import "./UpdateProfile.css";
import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ScrollDialog, {
  Education,
  PersonalDewtails,
} from "../../Containers/Dialog/Dialog";
import { USERSERVICE } from "../../Containers/Env/Env";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { UserContext } from "../../Containers/useContext/Context";

type Props = {};

const UpdateProfile = (props: Props) => {
  const { user, userProfileData, educational_details } =
    useContext<any>(UserContext);
  const [image, setImage] = useState<any>(null);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  console.log(userProfileData, "power", user);
  const handleprofilechange = async (e: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async function () {
      console.log(reader.result, "reads.result");
      await setImage(reader.result);
      const formData = new FormData();
      formData.append("profile", e.target.files[0]);
      await axios
        .put(USERSERVICE + `Update_profile/${user.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.message));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  console.log(userProfileData, "userProfileData");
  return (
    <Container className="mb-5">
      <Paper className="p-5 rounded d-flex justify-content-center gap-5 align-items-center mb-3">
        <Stack className="profile-container">
          <label htmlFor="input">
            <Stack className="progress-circle">
              <Paper className="completion-text">87%</Paper>
              <div className="image-container">
                <img
                  src={
                    image
                      ? image
                      : userProfileData && userProfileData.userId.profile_pic
                      ? `data:image/png;base64,${userProfileData.userId.profile_pic}`
                      : "userdp.svg"
                  }
                  className="profile-image"
                  alt="profile_pic"
                />
                <div className="add-icon">
                  <AddCircleOutlineIcon className="fs-50" />
                </div>
              </div>
              <input
                id="input"
                type="file"
                className="d-none"
                onChange={handleprofilechange}
              />
            </Stack>
          </label>
        </Stack>
        <Stack>
          <div className="d-flex flex-row gap-3 align-items-center">
            <Typography>
              {userProfileData && userProfileData.userId.name}
            </Typography>
            <ScrollDialog button={<ModeOutlinedIcon />} />
          </div>
          <Typography className="mb-3">
            Profile last updated - 06Feb , 2024
          </Typography>
          <div className="border border-1 w-100"></div>
          <Box className="d-flex justify-content-between gap-5 mt-3">
            <Stack className="row-gap-3">
              <div className="d-flex flex-row gap-3 align-items-center">
                <LocationOnOutlinedIcon />
                <Typography>Hyderabad,INDIA</Typography>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center">
                <WorkOutlineOutlinedIcon />
                <Typography>Fresher</Typography>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center">
                <CalendarTodayOutlinedIcon />
                <Typography>Availability to join</Typography>
              </div>
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              className="border border-danger"
            />
            <Stack className="row-gap-3">
              <div className="d-flex flex-row gap-3 align-items-center">
                <LocalPhoneOutlinedIcon />
                <Typography>
                  +91 {userProfileData && userProfileData.userId.mobilenumber}
                </Typography>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center details_container">
                <EmailOutlinedIcon />
                <Typography>
                  {userProfileData && userProfileData.userId.email}
                </Typography>
              </div>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      <Paper className="p-4 rounded mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Typography className="pb-2">Resume</Typography>
            <Typography>
              {userProfileData && userProfileData.resumename}
            </Typography>
            <Typography>
              Uploaded on{" "}
              {userProfileData && formatDate(userProfileData.uploadeddate)}
            </Typography>
          </div>
          <div className="gap-4 d-flex">
            <a
              href={`data:image/${
                userProfileData &&
                userProfileData.resumename.substring(
                  userProfileData.resumename.lastIndexOf(".") + 1,
                  userProfileData.resumename.length
                )
              };base64,${userProfileData && userProfileData.pdf}`}
              download={userProfileData && userProfileData.resumename}
            >
              <div className="rounded-circle Resume_Icons">
                <FileDownloadOutlinedIcon className="Resume_Icons_dimensions" />
              </div>
            </a>
            <div className="rounded-circle Resume_Icons">
              <DeleteOutlineOutlinedIcon className="Resume_Icons_dimensions" />
            </div>
          </div>
        </div>
        <Container className="p-5 mt-3 rounded d-flex justify-content-center align-items-center flex-column Resume_border">
          <div className="file-input-wrapper">
            <input type="file" id="file-input" className="file-input" />
            <label htmlFor="file-input" className="file-input-label">
              Upload Resume
            </label>
          </div>
          <Typography>
            Supported Formats: doc, docx, rtf, pdf, upto 2 MB
          </Typography>
        </Container>
      </Paper>

      <Paper className="p-4 rounded mb-3">
        <div className="d-flex flex-row gap-3 align-items-center">
          <Typography>Resume headline</Typography>
        </div>
        <div>
          <Typography>
            B.Tech in Computer Science. Ability to work with FRONTEND AND
            BACKEND technologies like, MERNSTACK. Can work well under pressure
            and make the best of any situation. Passionate individual with great
            interpersonal and communication skills
          </Typography>
        </div>
      </Paper>

      <Paper className="p-4 rounded mb-3">
        <div className="d-flex flex-row gap-3 align-items-center">
          <Typography className="mb-2">Key Skills</Typography>
        </div>
        {userProfileData &&
          userProfileData.skills.map((data: any) => {
            return (
              <div className="border rounded-pill d-inline-flex ml-15 p-2 mb-2">
                {data}
              </div>
            );
          })}
      </Paper>

      <Paper className="p-4 rounded mb-3 ">
        <div className="d-flex flex-row gap-3 align-items-center mb-2">
          <Typography>Education</Typography>
          <Education button={<ModeOutlinedIcon />} />
        </div>

        <Container className="d-flex gap-5 justify-content-center">
          <Stack spacing={2}>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>Graduation</Typography>
              <Typography className="ml-20">:</Typography>
              <Typography>
                {educational_details && educational_details.graduation_type}
              </Typography>
            </div>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>Specialization</Typography>
              <Typography>:</Typography>
              <Typography>
                {educational_details && educational_details.specilization}
              </Typography>
            </div>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>University</Typography>
              <Typography className="ml-30">:</Typography>
              <Typography>
                {educational_details && educational_details.university}
              </Typography>
            </div>
          </Stack>
          <Divider className="border border-2" />

          <Stack spacing={2}>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>Marks/Grade</Typography>
              <Typography className="ml-45">:</Typography>
              <Typography>
                {educational_details && educational_details.marks_Grade}
              </Typography>
            </div>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>Course_Start_Date</Typography>
              <Typography>:</Typography>
              <Typography>
                {educational_details && educational_details.startDate}
              </Typography>
            </div>
            <div className="d-flex gap-5 justify-content-start">
              <Typography>Course_End_Date</Typography>
              <Typography className="ml-5px">:</Typography>
              <Typography>
                {educational_details && educational_details.endDate}
              </Typography>
            </div>
          </Stack>
        </Container>
      </Paper>

      <Paper className="p-4 rounded mb-3">
        <div className="d-flex flex-row gap-3 align-items-center mb-2">
          <Typography>Personal Information</Typography>
          <PersonalDewtails button={<ModeOutlinedIcon />} />
        </div>
        <div className="mb-4">
          <Typography>Gender</Typography>
          <Typography>
            {userProfileData && userProfileData.userId.gender}
          </Typography>
        </div>

        <div className="mb-4">
          <Typography>Date of birth</Typography>
          <Typography>
            {userProfileData && userProfileData.userId.dateOfBirth}
          </Typography>
        </div>

        <div className="mb-4">
          <Typography>Address</Typography>
          <Typography>
            {userProfileData && userProfileData.userId.hometown}{" "}
            {userProfileData && userProfileData.userId.state}
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default UpdateProfile;
