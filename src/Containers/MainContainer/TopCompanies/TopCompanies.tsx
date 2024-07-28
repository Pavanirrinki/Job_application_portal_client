import { Container, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMovement from "../../CustomHooks/HandleForwardandBackward";
import { Star } from '@mui/icons-material';
import "./TopCompanies.css"
import { useNavigate } from 'react-router-dom';
type Props = {
  data?:any;
  title?:string;
}

const TopCompanies = (props: Props) => {
  const navigate = useNavigate();
  const {currentIndex,currentItem,moveForward,moveBackward} = useMovement(0, (props&&props.data != undefined ? props.data?.length:0));
console.log("datadata",props.data)
  return (
    <Paper>
    <Container  className="mb-10 pt-20 pb-20 p-0">
      <Container
        className="d-flex justify-content-between md-10"
      
      > <Typography className='fs-18 fw-700'>
      Top Companies
     </Typography>
     <Typography

      style={{ fontSize: "13px", color: "#275df5", fontWeight: "700",cursor:"pointer" }}
      onClick={()=>navigate("/View_all_jobs")}
    >
      View All

     </Typography>
     </Container>
     <Container className='d-flex flex-nowrap align-items-center position-relative'>
          {currentIndex != 0 && props.data.length >= 3  && (
            <div className='forward_Icon'
            >
              <ChevronLeftIcon onClick={moveBackward} />
            </div>
          )}
          {props?.data?.slice(currentIndex, currentItem).map((data: any,index:number) => {
            console.log(data,"data");
            return (
              <Paper
                key={index}
            className='paper_contaner'
                elevation={4}
              >
                <Container className="d-flex justify-content-center align-items-start pt-3 pb-2">
                  <img
                    src={data?.img}
                    alt="logo"
                    className='company_logo'
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
          {currentIndex != 4 && props.data.length >= 3 && (
            <div className='backward_Icon'
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