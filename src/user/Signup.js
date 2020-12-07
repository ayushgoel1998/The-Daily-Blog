//const { Component } = require("react")

import React, {Component} from "react"

class Signup extends Component{
    constructor(){
        super()
        this.state={
            name: "",
            email:"",
            password:"",
            error:""
        }
    }

    handleChange =(name) =>(event)=>{
        this.setState({[name]:event.target.value});
    }
    render(){
        const {name,email,password}=this.state;
        return (
            <div className="container">

                <h2 className="mt-5 mb-5">Signup</h2>     
                <form>
                    <div className="form-group">
                    <label className="text-muted ">Name</label>
                    <input onChange={this.handleChange("name")} type="text"  
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={name} />
                    </div>

                    <div className="form-group">
                    <label className="text-muted ">Email</label>
                    <input onChange={this.handleChange("email")} type="email" 
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email} />
                    </div>
                    <div className="form-group">
                    <label className="text-muted ">Password</label>
                    <input onChange={this.handleChange("password")} type="password" 
                     placeholder="Enter Your Password"
                    className="form-control"
                     value={password} /> <br></br>
                    <div>
                    <button className="btn btn-raised btn-primary">Submit</button>
                    </div>
                    
                    </div>
                </form>
            </div>
        );
    }
}
export default Signup;
