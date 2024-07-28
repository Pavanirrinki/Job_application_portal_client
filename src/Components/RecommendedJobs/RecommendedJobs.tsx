import React from 'react';
import "./RecommendedJobs.css";
import { Container, Divider, Paper, Typography } from '@mui/material';
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceIcon from "@mui/icons-material/Place";
type Props = {}

export const RecommendedJobs = (props: Props) => {
  return (
    <Container className="pt-3 pb-3">
    <Typography
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "#121224",
        fontStretch: "ultra-condensed",
      }}
    >
      Web Developer
    </Typography>
    <div className="d-flex align-items-center justify-content-start">
      <Typography
        variant="body2"
        gutterBottom
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        Infosource Techsystems
      </Typography>
      <StarIcon
        className="text-warning fs-6"
        style={{ marginLeft: "0.5rem" }}
      />
      <Typography
        variant="body2"
        style={{
          marginTop: "0",
          marginLeft: "0.1rem",
          fontWeight: 600,
        }}
      >
        5.0
      </Typography>
      <Typography
        variant="body2"
        style={{
          marginTop: "0",
          marginLeft: "0.5rem",
          fontWeight: "bolder",
        }}
      >
        5
      </Typography>
      <Typography
        variant="body2"
        style={{
          marginTop: "0",
          marginLeft: "0.1rem",
          fontWeight: "bolder",
        }}
      >
        Reviews
      </Typography>
    </div>

    <div className="d-flex align-items-center justify-content-start">
      <BusinessCenterOutlinedIcon className="text-secondary fs-6 place_Icon" />
      <Typography
        variant="body2"
        style={{
          marginTop: "0",
          marginLeft: "0.5rem",
          fontWeight: "bold",
        }}
        className="place_Icon"
      >
        0-3 years
      </Typography>

      <Typography
        variant="body2"
        style={{
          marginTop: "0",
          marginLeft: "2rem",
          fontWeight: "bolder",
        }}
        className="place_Icon"
      >
        $ Not disclosed
      </Typography>
    </div>
    <div className="d-flex justify-content-between">
        <div className='d-flex align-items-center'>
      <PlaceIcon className="place_Icon" />
      <Typography className="place_Icon">Hyderabad</Typography>
      </div>
      <Typography className="place_Icon">Posted 10 days ago</Typography>
    </div>
    <Divider
      sx={{
        mt: 1,
        border: "0.1px solid #717b9e",
        width: "100%",
        marginBottom: "10px",
      }}
    />

  
  </Container>
  )
}