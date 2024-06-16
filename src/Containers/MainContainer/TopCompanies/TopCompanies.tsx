import { Container, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMovement from "../../CustomHooks/HandleForwardandBackward";
import { Star } from '@mui/icons-material';

type Props = {
  data?:any;
  title?:string;
}

const TopCompanies = (props: Props) => {
  const {currentIndex,currentItem,moveForward,moveBackward} = useMovement(0, (props&&props.data != undefined ? props.data?.length:0));

  return (
    <Paper>
    <Container style={{ padding: "20px 0px", marginBottom: "10px" }}>
      <Container
        className="d-flex justify-content-between"
        style={{ margin: "10px" }}
      > <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
      Top Companies
     </Typography>
     <Typography
       style={{ fontSize: "13px", color: "#275df5", fontWeight: "700" }}
     >
       View All
     </Typography>
     </Container>
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
              >
                <Container className="d-flex justify-content-center align-items-start pt-3 pb-2">
                  <img
                    src={data?.img}
                    alt="logo"
                    style={{ height: "50px", width: "50px" }}
                  />
              
                </Container>
               
                <Container className="d-flex justify-content-center align-items-center">
                  <Typography className="fs-12 fw-bold">
                  {data?.company_name ? (data.company_name.length > 15 ? `${data.company_name.substring(0, 15)}....` : data.company_name) : ''}
                  </Typography>
                </Container>
                <Container className='gap-3 d-flex justify-content-center align-items-center pb-2'>
                <div className="align-items-center">
                    <Star className="text-warning fs-12" />
                    <Typography className="fs-14">{data?.rating}</Typography>
                   </div>
                <Typography className="fs-14">{data.reviews}<span className='fs-12 ml-3'>reviews</span></Typography>
                </Container>
                <Typography className='fs-14 text-center text-primary fw-bolder'>View jobs</Typography>
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
  )
}

export default TopCompanies