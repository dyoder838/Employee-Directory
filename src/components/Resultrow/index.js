import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



export default function Resultrow(props) {
    
    return (
        <TableRow key={props.name}>
            <TableCell align="right" src={props.image} ><img src={props.image} alt="employee" /> </TableCell>
            <TableCell align="right">{props.first}</TableCell>
            <TableCell align="right">{props.last}</TableCell>
            <TableCell align="right">{props.email}</TableCell>
            <TableCell align="right">{props.phone}</TableCell>
        </TableRow>
    )
}
