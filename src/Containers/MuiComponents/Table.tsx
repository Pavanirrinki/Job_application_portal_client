import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserContext } from '../useContext/Context';


function createData(
  id:string,
  Role: string,
  Applied: number,
  No_of_vancies: number,
 
) {
  return {id, Role, Applied, No_of_vancies};
}

export default function BasicTable({setJobId}:{setJobId:any}) {
  const { user,setUser,allJobsofCompany } = React.useContext<any>(UserContext);
const [rows,setRows] = React.useState<any>(null);
const HandleDataSubmit =(e:any,row:any)=>{
  e.preventDefault();
  setJobId(row);
}
React.useEffect(()=>{
  if(allJobsofCompany){
 const row = allJobsofCompany?.map((job: any) =>
    createData(job.job.id,job.job.jobTitle,job?.job.applied?.length, job.job.openings)
  );
  setRows(row);
}
},[allJobsofCompany]);

const data: any = allJobsofCompany && allJobsofCompany.map((job:any)=>console.log(job.job.id,"powergoat"));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400,cursor:"default" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="center">Applied</TableCell>
            <TableCell align="center">No_of_vancies</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody sx={{cursor:"pointer"}}>
          {rows && rows.map((row:any) => (
            <TableRow
              key={row.Role}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e)=>HandleDataSubmit(e,row.id)}
            >
              <TableCell component="th" scope="row">
                {row.Role}
              </TableCell>
              <TableCell align="center" className='text-primary'>{row.Applied}</TableCell>
              <TableCell align="center" className='text-primary'>{row.No_of_vancies}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
