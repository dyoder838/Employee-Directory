import React from "react"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default function Resultrow(props) {

    return (
        <TableRow key={props.name}>
            <TableCell align="right" src={props.image} roundedCircle><img src={props.image} roundedCircle /> </TableCell>
            <TableCell align="right">{props.first_name} {props.last_name}</TableCell>
            <TableCell align="right">{props.email}</TableCell>
            <TableCell align="right">{props.phone_number}</TableCell>
        </TableRow>
    )
}
