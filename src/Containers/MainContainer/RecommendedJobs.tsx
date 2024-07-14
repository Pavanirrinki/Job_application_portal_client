import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlaceIcon from "@mui/icons-material/Place";
import { Star } from "@mui/icons-material";
import "./RecommendedJobs.css";
import useMovement from "../CustomHooks/HandleForwardandBackward";
import moment from "moment";
import { useNavigate } from "react-router-dom";
export interface DataProps {
    id:number;
    job_name:string;
    company_name:string;
    img:string;
    location:string;
    rating:string;
    posted:string;
  }

type Props = {
    data?:DataProps[];
    title?:string;
};

const ContentComponent = (props: Props) => {
 
  const [recommended, setRecommended] = useState(true);
  const {currentIndex,currentItem,moveForward,moveBackward} = useMovement(0, (props&&props.data != undefined ? props.data?.length:0));
  const navigate = useNavigate();
console.log(props.data,"data1233455")
  return (
    <Paper>
      <Container style={{ padding: "20px 0px", marginBottom: "10px" }}>
        <Container
          className="d-flex justify-content-between"
          style={{ margin: "10px" }}
        >
          <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
           {props.title}
          </Typography>
          <Typography
            style={{ fontSize: "13px", color: "#275df5", fontWeight: "700",cursor:"pointer" }}
            onClick={()=>navigate("/View_all_jobs")}
          >
            View All
          </Typography>
        </Container>
        <Container
          className="d-flex justify-content-start"
          style={{ gap: 17, marginBottom: "5px", marginLeft: "10px" }}
        >
          <Typography
            className={recommended ? "highlight_profile" : "cursor-pointer"}
            onClick={() => setRecommended(true)}
          >
            Recommended (10)
          </Typography>
          <Typography
            onClick={() => setRecommended(false)}
            className={!recommended ? "highlight_profile" : "cursor-pointer"}
          >
            You might like(10)
          </Typography>
        </Container>
        <Divider />
        <Container
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            position: "relative",
          }}
        >
          {currentIndex != 0 && (
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(30, 10, 58, .5)",
                color: "white",
                borderRadius: "50%",
                padding: "3px",
                display: "flex",
              }}
            >
              <ChevronLeftIcon onClick={moveBackward} />
            </div>
          )}
          {props?.data?.slice(currentIndex, currentItem).map((data: any,index:number) => {
            console.log(data,"data");
            return (
              <Paper
                key={index}
                style={{
                  height: "150px",
                  minWidth: "200px",
                  maxWidth: "200px",
                  margin: "10px 10px 0px 10px",
                  borderRadius: "10px",
                }}
                elevation={4}
                onClick={()=>navigate(`/ParticularJob/${data.id}`)}
              >
               
                <Container className="d-flex justify-content-between align-items-start pt-3" >
                  <img
                    src={data?.companyId?.comapany_profile_pic}
                    alt="logo"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <Typography className="fs-12 fw-bold text-secondary">{moment(data.posted).fromNow()}</Typography>
                </Container>
                <div className="fs-15 fw-medium m-1">
  {data?.jobTitle ? (data.jobTitle.length > 25 ? `${data.jobTitle.substring(0, 25)}....` : data.jobTitle) : ''}
</div>

                <Box className="d-flex justify-content-around align-items-center">
                  <Typography className="fs-11 fw-bold text-secondary">
                  {data?.companyId ? (data.companyId.name.length > 15 ? `${data.companyId.name.substring(0, 15)}....` : data.companyId.name) : ''}
                  </Typography>
                  <div className="d-flex align-items-center">
                    <Star className="text-warning fs-12" />
                    <Typography className="fs-12">{data?.rating ? data.rating:"4.0"}</Typography>
                  </div>
                </Box>
                <div className="d-flex align-items-center">
                  <PlaceIcon className="place_Icon" />
                  <Typography className="place_Icon">
                    {data.location}
                  </Typography>
                </div>
              </Paper>
            );
          })}
          {currentIndex != 4 && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(30, 10, 58, .5)",
                borderRadius: "50%",
                padding: "3px",
                display: "flex",
                color: "white",
              }}
            >
              <ChevronRightIcon onClick={moveForward} />
            </div>
          )}
        </Container>
      </Container>
    </Paper>
  );
};
export default ContentComponent;
