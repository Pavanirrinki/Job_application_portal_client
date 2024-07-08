import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Role: string,
  Applied: number,
  No_of_vancies: number,
 
) {
  return { Role, Applied, No_of_vancies};
}

const rows = [
  createData('Backend Developers', 45, 60),
  createData('Frontened Developers', 23, 25),
  createData('QA-Tester', 20, 40),
  createData('Devops Engineers',30, 40),
  createData('Designers', 6, 16),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="center">Applied</TableCell>
            <TableCell align="center">No_of_vancies</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Role}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
