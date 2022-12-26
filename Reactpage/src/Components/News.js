import React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";


const News=()=>{
    const navigate=useNavigate();  
    const [fruit,setFruit]=useState('');

    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>這是News</h3>
            <input type="text" placeholder="Enter Fruit Name" onChange={(e)=>setFruit(e.target.value)} />
            <button onClick={()=>navigate(`/Product/${fruit}`)}>{fruit} 賀呷</button>           
        </div>
    );
}

export default News;