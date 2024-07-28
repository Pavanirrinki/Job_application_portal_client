import React from "react";
import "./ViewAllCompanies.css";
import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Allfilters from "../AllFilters/Allfilters";
function ViewAllCompanies() {
  const theme = useTheme();
  return (
    <>
      <Container className="bg-secondary p-4 mt-4 mb-20 rounded-4 d-flex align-items-center gap-3 custom-container ">
        <div className="bg-white pd-10 rounded-circle">
          <ChevronLeftIcon />
        </div>

        {[1, 2, 3, 4, 5].map((data) => {
          return (
            <Box key={data} sx={{minWidth:"17%"}}>
              <Card sx={{ display: "flex"}}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      MNC'S
                    </Typography>
             
                    <Typography
                      variant="subtitle2"
                      className="text-primary fw-500 fs-16"
                      
                    >
                      1.9k+ companies
                      <ChevronRightIcon />
                    </Typography>
                
                  </CardContent>
                </Box>
              </Card>
            </Box>
          );
        })}

        <div className="bg-white pd-10 rounded-circle">
          <ChevronRightIcon />
        </div>
      </Container>

      <Container className="p-0 mb-20 rounded-4">
        <Grid container>
          <Grid item xs={3}>
           <Allfilters />
          </Grid>

          {[1, 2].map((data) => {
            return (
              <Grid item xs={4} className="ml-50">
                {[1, 2, 3, 4, 5].map((data) => {
                  return (
                    <Paper className="rounded-4 mb-3" elevation={5}>
                      <Box
                        style={{
                          padding: "19px 16px",
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box className="d-flex gap-3 align-items-center">
                          <Stack>
                            <img
                              src="/CompanyProfiles/692902.gif"
                              alt="company-logo"
                              className="company_img"
                            />
                          </Stack>
                          <Stack spacing={0} className="m-0 p-0" gap={0}>
                            <p className="fw-bold fs-18 m-0 p-0">Pfizer</p>
                            <div
                              className="d-flex align-items-center"
                              style={{ marginTop: "-5px" }}
                            >
                              <StarIcon className="text-warning fs-15" />
                              <Typography
                                style={{
                                  color: "#717b9e",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                }}
                              >
                                4.1
                              </Typography>
                              <Divider
                                style={{
                                  border: "1px solid red",
                                  margin: "5px",
                                }}
                                flexItem
                                orientation="vertical"
                              />
                              <Typography
                                style={{
                                  color: "#717b9e",
                                  fontSize: "15px",
                                  fontWeight: 500,
                                }}
                              >
                                1.7k+ reviews
                              </Typography>
                            </div>
                            <div className="d-flex align-items-center flex-wrap">
                              {[1, 2, 3].map((data) => {
                                return (
                                  <div className="border border-secondary rounded-pill px-2 py-0 mt-1 pb-0 working-tech-tag">
                                    Remove
                                  </div>
                                );
                              })}
                            </div>
                          </Stack>
                        </Box>
                        <Box>
                          <ChevronRightIcon
                            style={{
                              height: "30px",
                              width: "30px",
                              opacity: 0.7,
                            }}
                          />
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
        <Stack spacing={2} className="d-flex align-items-end">
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
      </Container>
    </>
  );
}

export default ViewAllCompanies;
