import React from "react";
import "./PostReviews.css";
import {
  Button,
  Container,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { USERSERVICE } from "../Env/Env";
import { useNavigate } from "react-router-dom";
type Props = {};

const PostReviews = (props: Props) => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("Job_application_user_data");
  const parsedData = userData ? JSON.parse(userData) : null;
  const [value, setValue] = React.useState<any>(0);
  const [postReview, setPostReview] = React.useState<any>(null);
  const HandlePostReview = (e: any) => {
    setPostReview(e.target.value);
  };

  const HandleReviewSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      rating: value,
      review: postReview,
      userId: parsedData.id,
    };
    if (value || postReview) {
      axios
        .post(USERSERVICE + "Post_Review_for_portal", formData)
        .then((res) => {
          console.log(res.data);
          setValue(0);
          setPostReview(null);
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper sx={{ m: 3, width: "40%" }}>
          <Container>
            <Typography variant="h6" className="fw-bold opacity07">
              Post Review
            </Typography>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue: any) => {
                setValue(newValue);
              }}
            />
            <Typography>Review</Typography>
            <TextField
              id="outlined-textarea"
              placeholder="Provide Review........."
              multiline
              minRows={6}
              sx={{ marginBottom: "10px" }}
              fullWidth
              value={postReview}
              onChange={HandlePostReview}
            />
            <Stack className="d-flex justify--content-end">
              <Button
                variant="contained"
                className="mb-10"
                onClick={HandleReviewSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Container>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default PostReviews;
