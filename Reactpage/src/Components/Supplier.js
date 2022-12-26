import React from "react";

export default function Supplier({id,name,address,tel}){
    return(
        <div>
            <span>{id} | </span>
            <span>{name} | </span>
            <span>{address} | </span>
            <span>{tel} | </span>
        </div>
    );
}