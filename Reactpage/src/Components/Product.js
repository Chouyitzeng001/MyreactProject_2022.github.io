import React from "react";
import {useParams} from 'react-router-dom';

const Proudct=()=>{
    let {fruitName}=useParams();
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h1>這是Product</h1>
            <p>{fruitName} 大特價,每斤打9折</p>
        </div>
    );
}

export default Proudct;