import React, { Component } from 'react';
import API from "../../utils/API";
import ResultRow from "../Resultrow";
import Table from "../Table";
import Navbar from "../Navbar"




export default class EmployeeContainer extends Component {

    state = {
        employees: [],
        filteredEmployees: [],
        search: "",
        sortId: 0,
        sortName: 0,
        sortPhone: 0,
        sortEmail: 0,
        sortDob: 0,
        sortAge: 0,
      };

    getEmployees = () => {
     API.getRandomEmployees().then(res => {
        console.log(res.data.results);
        setEmployees(res.data.results)
    }).catch((err) => console.log(err));
    }

{
    employees.map((emp) => (
        <ResultRow image={emp.picture.thumbnail} first_name={emp.name.first} last_name={emp.name.last} email={emp.email} phone_number={emp.phone} />
    ))
}

};