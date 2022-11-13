import React, { Component, useState } from "react";
import './Form.css';


const INITIAL_VALUE = {
    fullname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
}
// const personalinfo = {
//     fullname: "Full Name",
//     email: "Email",
//     address1: "Address 1",
//     address2: "Address 2",
//     city: "City",
//     province: "Province",
//     postalCode: "Postal Code",
// }



export default class Personal extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {INITIAL_VALUE}
        this.cities = ["[--SELECT CITY--]", "Toronto", "Quebec", "Vancuber", "Calgary", "Ottawa"]
        this.province = ["[--SELECT province--]", "Ontario", "Quebec", "Alberta", "Nova scotia"]
    }

    onSubmitLogin = (event) => {
        event.preventDefault()
        INITIAL_VALUE.fullname = this.state.fullname
        INITIAL_VALUE.email = this.state.email
        INITIAL_VALUE.address1 = this.state.address1
        INITIAL_VALUE.address2 = this.state.address2
        INITIAL_VALUE.city = this.state.city
        INITIAL_VALUE.province = this.state.province
        INITIAL_VALUE.postalCode= this.state.postalCode
        
        console.log(INITIAL_VALUE)
        this.forceUpdate()
        
        
    

        //console.log(event.target)
    }
    

    clearForm = (event) => {
        event.preventDefault()
        this.setState({...INITIAL_VALUE})
    }

    onValueChanged = (event) => {
        ///console.log(event.target.value)

        this.setState({[event.target.name]: event.target.value})
       
    }
   

    render= () => {
        return(
            <>
                <h1>Personal info FORM Lab10</h1>
                <form onSubmit={this.onSubmitLogin}>
                    <input 
                        type="text" 
                        name="fullname" 
                        placeholder="Enter Fullname"
                        value={this.state.fullname}
                        onChange={event => this.onValueChanged(event)} />
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter email"
                        value={this.state.email} 
                        onChange={event => this.onValueChanged(event)} />
                        <input 
                        type="text" 
                        name="address1" 
                        placeholder="Enter address"
                        value={this.state.address1}
                        onChange={event => this.onValueChanged(event)} />
                        <input 
                        type="text" 
                        name="address2"
                        placeholder="Enter address"
                        value={this.state.address2}
                        onChange={event => this.onValueChanged(event)} />
                    <select onChange={this.onValueChanged} name="city">
                        {
                            this.cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))
                        }
                    </select>
                    <select onChange={this.onValueChanged} name="province">
                        {
                            this.province.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                    <input 
                        type="text" 
                        name="postalCode" 
                        placeholder="Enter Postal Code"
                        value={this.state.postalCode}
                        onChange={event => this.onValueChanged(event)} />
                    <input 
                        type="submit" 
                        name="btnSubmit" 
                        value="Sumbit form" 
                         />
                    <div>
                    <h1>email : {INITIAL_VALUE.email}</h1>
                    <h1>fullname : {INITIAL_VALUE.fullname}</h1>
                    <h1>address : {INITIAL_VALUE.address1}</h1>
                    <h1>address2 : {INITIAL_VALUE.address2}</h1>
                    <h1>city: {INITIAL_VALUE.city}</h1>
                    <h1>province : {INITIAL_VALUE.province}</h1>
                    <h1>postalCode : {INITIAL_VALUE.postalCode}</h1>
                    
                    </div>
                </form>

                
                
                
                
            </>
        )
    }
}