import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ResultRow from "../Resultrow";
import API from "../../utils/API";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function BasicTable() {
  const classes = useStyles();
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        getEmployees()
    },[])
    
    const getEmployees = ()=> {
        API.getRandomEmployees().then(res =>{
            console.log(res.data.results);
            setEmployees(res.data.results)
        }).catch((err) => console.log(err));
    }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Photo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <ResultRow image={emp.picture.thumbnail} first_name={emp.name.first} last_name={emp.name.last}  email={emp.email} phone_number={emp.phone}/>
          ))}
        </ TableBody>
      </Table>
    </TableContainer>
  );
}