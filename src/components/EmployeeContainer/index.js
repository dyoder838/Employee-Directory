import React, { Component } from 'react';
import API from "../../utils/API";
import Test from "../Test";
import Navbar from "../Navbar"

export default class EmployeeContainer extends Component {

    state = {
        employees: [],
        filteredEmployees: [],
        search: ""
    };
     
    componentDidMount() {
        this.getRandomEmployees();
    }

    getRandomEmployees() {
        API.searchEmployee().then((res) => {
            console.log(res.data) 
            let allEmployees = res.data.results.map((emp) => {
                return {
                    image: emp.picture.thumbnail,
                    first: emp.name.first,
                    last: emp.name.last,
                    email: emp.email,
                    phone: emp.phone

                };
            });
            
            this.setState({
                employees: allEmployees,
                filteredEmployees: allEmployees,       
            });

        }).catch((err) => console.log(err));
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value,
        });
    };

    render() {
        return(
            <div>
                <Navbar>

                </Navbar> 
                <Test  list={this.state.employees} handleSubmit={this.handleSubmit} />

         </div>
        )
    }


};