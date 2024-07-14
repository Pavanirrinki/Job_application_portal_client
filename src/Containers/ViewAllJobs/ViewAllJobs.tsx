import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { JOBSSERVICE } from "../Env/Env";

const ViewAllJobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [card, setCard] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getCardData = async () => {
    try {
      const res = await axios.get(
        location.state
          ? `${JOBSSERVICE}fetch_jobs_by_category_pagination/${page}/${location.state.data}`
          : `${JOBSSERVICE}fetch_jobs/${page}`
      );
      if (res.data.content.length > 0) {
        setCard((prev) => {
          const newData = res.data.content.filter(
            (job: any) => !prev.some((existingJob) => existingJob.id === job.id)
          );
          setLoading(false);
          return [...prev, ...newData];
        });
      } else {
        setHasMore(false);
        setLoading(false); 
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      getCardData();
    }
  }, [page, hasMore, location.state]); 

  const handleInfiniteScroll = () => {
    
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  useEffect(() => {
    setCard([]);
     setPage(0);
    setHasMore(true);
    setLoading(true);
  }, [location.state]); 

  return (
    <Container className="d-flex justify-content-center flex-column width-50">
      {card.map((job, index) => (
        <Paper className="rounded-4 mb-4" key={index}>
          <Container className="pt-3 pb-3">
            <Typography className="fs-20 fw-bold Job-Title">
              {job.jobTitle}
            </Typography>
            <div className="d-flex align-items-center justify-content-start">
              <Typography
                variant="body2"
                gutterBottom
                className="mb-0 pb-0 mr-8 text-secondary"
              >
                {job.companyName}
              </Typography>
              <StarIcon className="text-warning fs-6 ml-8" />
              <Typography variant="body2" className="mt-0 ml-1 fw-600">
                {job.rating}
              </Typography>
              <Typography variant="body2" className="mt-0 ml-5px fw-600">
                {job.reviewsCount}
              </Typography>
              <Typography variant="body2" className="mt-0 ml-5px fw-600">
                Reviews
              </Typography>
            </div>

            <div className="d-flex align-items-center justify-content-start">
              <BusinessCenterOutlinedIcon className="text-secondary fs-6 place_Icon" />
              <Typography
                variant="body2"
                className="place_Icon mt-0 ml-15 fw-600"
              >
                {job.minExp} - {job.maxExp} years
              </Typography>

              <Typography
                variant="body2"
                className="place_Icon mt-0 ml-15 fw-600"
              >
                {job.minSal} - {job.maxSal}
              </Typography>
            </div>
            <div className="d-flex align-items-center">
              <PlaceIcon className="place_Icon" />
              <Typography className="place_Icon">{job.location}</Typography>
            </div>

            <div className="d-flex align-items-center gap-2 justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <Typography className="place_Icon">
                  Posted:
                  <span>{job.postedFromNow}</span>
                </Typography>

                <Divider
                  sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                  orientation="vertical"
                  flexItem
                />
                <Typography className="place_Icon">
                  Openings:
                  <span>{job.openings}</span>
                </Typography>

                <Divider
                  sx={{ mt: 1, border: "0.1px solid #717b9e" }}
                  orientation="vertical"
                  flexItem
                />
                <Typography className="place_Icon">
                  Applicants:<span>{job.applicants}</span>
                </Typography>
              </div>

              <div className="d-flex gap-3">
                <Button variant="text" className="rounded-pill">
                  <BookmarkBorderIcon />
                </Button>
              </div>
            </div>
          </Container>
        </Paper>
      ))}
      {!loading && card.length > 4 && (
        <Stack className="m-auto">
          <CircularProgress />
        </Stack>
      )}
      {!hasMore  && (
        <Typography className="text-center">
          No more jobs available.
        </Typography>
      )}
    </Container>
  );
};

export default ViewAllJobs;
