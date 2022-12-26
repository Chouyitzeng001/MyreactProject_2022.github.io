import React from "react";
import logo from '../images/logo.svg' ;


//Function Component
const Navbar=()=>{
    return(       
       <nav>      
         
           <ul> 
           <li><img src={logo}  className="nav-img"/>  </li> 
                <li><a href="#" >Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Proudct</a></li>   
                <li><a href="#">Service</a></li>             
            </ul>
      </nav>       
    )
}

export default Navbar;