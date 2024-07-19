import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./NotificationsContainer.css";

type Props = {
  setNotifications:any;
  notification:any;
};

const NotificationsContainer = (props: Props) => {

 
  return (
    <Paper
      className="position-absolute rounded"
      style={{
        top: "100%",
        marginTop: "10px",
        zIndex: 100,
        right: 0,
        width: "24vw",
        overflowY: "auto",
        maxHeight: "90vh",
        overflowX: "hidden",
      }}
      elevation={10}
    
    >
      <Container className="width-100">
        <Box
          style={{
            zIndex: 200,
            background: "white",
            position: "fixed",
            width: "20.5vw",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0px",
          }}
        >
          <Typography>Notifications</Typography>
          <SettingsOutlinedIcon />
        </Box>
        <Divider
          className="mb-10 position-fixed "
          style={{
            marginTop: "44px",
            width: "20.5vw",
            border: "2px solid black",
            zIndex: 200,
          }}
        />
      </Container>

      <Box style={{ marginTop: "60px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (data) => {
            return (
              <Container className="width-100 md-10">
                <Box className="d-flex justify-content-between align-items-center gap-3">
                  <Box className="image-container" position="relative">
                    <img
                      src="/userdp.svg"
                      className="notifications_profile-image"
                      alt="profile_pic"
                    />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    className="notification-renderer"
                  >
                    your Resume Shortlisted by TCS company...
                  </Typography>
                </Box>
              </Container>
            );
          }
        )}
      </Box>
    </Paper>
  );
};

export default NotificationsContainer;
