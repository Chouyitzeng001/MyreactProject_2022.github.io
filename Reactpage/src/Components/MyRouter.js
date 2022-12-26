import React from "react";
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";//npm i react-router-dom --save
import Home from "./Home";
import About from "./About";
import News from "./News";
import Proudct from "./Product";
import Service from "./Service";
import Error from "./Error";
import logo from '../images/logo.svg' ;
import Header from "./Header";

const MyRouter=(props)=>{
    return(      

        <BrowserRouter>    
            <nav>
                <div className="link-div">
                    <img src={logo}  style={{width:'4vw',marginRight:'1.2rem'}}/>
                    <Link to="/" className="link-to">Home</Link>
                    <Link to="/About" className="link-to">About</Link>
                    <Link to="/News" className="link-to">News</Link>
                    <Link to={`/Product/${props.fruit}`} className="link-to">Product</Link>
                    <Link to="/Service" className="link-to">Service</Link>
                </div>
            </nav>
            <Header />
          

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/News" element={<News />}></Route>
                <Route path="/Product/:fruitName" element={<Proudct />}></Route>
                <Route path="/Service" element={<Service />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;