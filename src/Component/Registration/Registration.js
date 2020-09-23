import React, { Component } from 'react'
import axios from "axios";
import "./Registration.css"
import {Link} from "react-router-dom";



class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             firstname:"",
             lastname:"",
             email:"",
             phone:"",

             password:"",
             cpassword:"",

              
        }
    }
    changeHandler= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/users",this.state)
        .then(response => {
            console.log(response)
        })

        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const { fname,lname,phone,email, password ,cpassword}=this.state
        return (
            
                

    
                <div class="regis">
        
                <div class="card-body">
               <h5 class="card-title">Registration-Form</h5> 
   
               <form onSubmit={this.submitHandler}>
               
               <div class="form-group">
               <label for="exampleInput">First Name</label>
               <input  class="form-control" name="id"  value={fname} onChange={this.changeHandler}></input>
               </div>
               
               <div class="form-group ">
               <label for="exampleInput">Last Name</label>
               <input  class="form-control" name="password"  value={lname} onChange={this.changeHandler}></input>
               </div>
           

               <div class="form-group">
               <label for="exampleInput">Email</label>
               <input  class="form-control" name="id"  value={email} onChange={this.changeHandler}></input>
               </div>
               
               <div class="form-group ">
               <label for="exampleInput">Contact Number</label>
               <input  class="form-control" name="password"  value={phone} onChange={this.changeHandler}></input>
               </div>

              
               
               <div class="form-group ">
               <label for="exampleInput">password</label>
               <input  class="form-control" name="password"  value={password} onChange={this.changeHandler}></input>
               </div>

               <div class="form-group ">
               <label for="exampleInput">Confirm password</label>
               <input  class="form-control" name="password"  value={cpassword} onChange={this.changeHandler}></input>
               </div>

               <button type="submit" class="btn btn-success" >Submit</button>
               </form>

               
              </div>
              <div>
                  
              
                  <Link  to="/Login" class="btn btn-success">Login</Link>
                  </div>

              
             </div>
             
             
        )
    }
}

export default Registration


