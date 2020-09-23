import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Component/Navbar/Navbar";
import Popularplaces from "./Component/popularplaces/Popularplaces"
import Home from "./Component/Home" 
import Login from "./Component/Login/Login"
import Booking from "./Component/Booking/Booking"
import Registration from "./Component/Registration/Registration"
import Contact from "./Component/Contact/Contact"
import Hotel from "./Component/Hotel/Hotel";


function App () {
    return(   
            
          <>
            <div className="container-fluid nav_bg">
              <div className="row"> 
                <div className="col-10 mx-auto"> 

                 
                  <Navbar/> 
                  
 
                    <Switch>

                    
                    <Route  path="/Home" component ={Home}/> 
                    <Route  path="/Popularplaces" component ={Popularplaces}/> 
            
                    <Route  path="/Hotel" component ={Hotel}/> 
              
                    <Route  path="/Login" component ={Login}/> 

                    <Route  path="/Booking" component ={Booking}/> 
                    <Route  path="/Contact" component ={Contact}/> 
                    <Route  path="/Registration" component ={Registration}/> 


                    


              





                   </Switch>
                  
                
                </div>
              </div>
            
            </div>
            
          </>

)}
export default App; 








