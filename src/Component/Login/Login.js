import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             id:"",
             password:"",
              
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
        const { id, password }=this.state
        return (
            
                

    
                <div class="cardss">
        
                <div class="card-body">
               <h5 class="card-title">Login-Form</h5> 
   
               <form onSubmit={this.submitHandler}>
               
               <div class="form-group">
               <label for="exampleInput">Email id</label>
               <input  class="form-control" name="id"  value={id} onChange={this.changeHandler}></input>
               </div>
               
               <div class="form-group ">
               <label for="exampleInput">password</label>
               <input  class="form-control" name="password"  value={password} onChange={this.changeHandler}></input>


               
               </div>
           
  
               <button type="submit" class="btn btn-primary"  >Submit</button>
               </form>

               
              </div>

              <div>
                  
              
              <Link  to="/Registration" class="btn btn-success">Registration</Link>
              </div>

             </div>
             
        )
    }
}

export default Login
