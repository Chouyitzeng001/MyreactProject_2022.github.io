import React from "react";
import { Component } from "react";


//class Component
class Header extends Component{
    render(){
        const mystyle={paddingLeft:'3vw'}
        return(
            <header style={mystyle}>
                <h1>Welcome to Taiwan Fruit Stand</h1>
            </header>
        )
    }
}

export default Header;