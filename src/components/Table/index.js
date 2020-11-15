import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ResultRow from "../Resultrow";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
    console.log("table" , props)
  const classes = useStyles();
    


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Photo</TableCell>
            <TableCell align="right">First</TableCell>
            <TableCell align="right">last</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {props.list.map(emp =>{ return <ResultRow image={emp.image} first={emp.first} last={emp.last} email={emp.email} phone={emp.phone} /> } )}
        </ TableBody>
      </Table>
    </TableContainer>
  );
}