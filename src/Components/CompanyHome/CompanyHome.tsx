import { Box, Grid, Paper } from "@mui/material";
import { Applications } from "./Applications";
import Applicants from "./Applicants";
import TablePaginationDemo from "../../Containers/MuiComponents/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Containers/useContext/Context";

type Props = {};

const CompanyHome = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [jobId, setJobId] = React.useState<String | null>(null);
  const { allJobsofCompany } = useContext<any>(UserContext);
  const [particularJobAppliedData, setParticularJobAppliedData] = useState<any>(null);
  
  useEffect(() => {
    const particularJobusers = allJobsofCompany?.filter(
      (job: any) => job.job.id == jobId
    );
    setParticularJobAppliedData(particularJobusers);
  }, [jobId]);
  console.log("pooowersTop", jobId, allJobsofCompany, particularJobAppliedData);
  particularJobAppliedData &&
    particularJobAppliedData.map((data: any) =>
      console.log(data.userDetails, "poowersTop")
    );


    console.log(page,rowsPerPage,"page")
  return (
    <Box className="d-flex justify-content-center gap-3 px-5">
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <Applications setJobId={setJobId} />
        </Grid>
        <Grid item xs={7}>
          {particularJobAppliedData &&
            particularJobAppliedData?.map(
              (data: any) =>
                data &&
                data.userDetails.length >= 1 &&
                data.userDetails
                  .slice(page * rowsPerPage, page * rowsPerPage+rowsPerPage)
                  .map((row: any, index: number) => {
                    return (
                      <div>
                        <Applicants row={row} />
                      </div>
                    );
                  })
            )}

          {particularJobAppliedData &&
            particularJobAppliedData?.map(
              (data: any) =>
                data &&
                data.userDetails.length >= 1 && (
                  <Paper className="mb-3">
                    <TablePaginationDemo
                      page={page}
                      setPage={setPage}
                      rowsPerPage={rowsPerPage}
                      setRowsPerPage={setRowsPerPage}
                    />
                  </Paper>
                )
            )}

 {/* {[
  1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,39,40,
  41,42,43,44,45,46,47,48,49,50,
  51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,
  71,72,73,74,75,76,77,78,79,80,
  81,82,83,84,85,86,87,88,89,90,
  91,92,93,94,95,96,97,98,99,100,
  
].slice(page * rowsPerPage, page * rowsPerPage+rowsPerPage).map((item:any, index:any) => (
        <div key={index}>
         
          {item}
        </div>
      ))}
 <Paper className="mb-3">
                    <TablePaginationDemo
                      page={page}
                      setPage={setPage}
                      rowsPerPage={rowsPerPage}
                      setRowsPerPage={setRowsPerPage}
                    />
                  </Paper>  */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyHome;
