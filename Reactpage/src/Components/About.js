import React from "react";
import Data from "./Data";

const About=()=>{
    const [pattern,setPattern]=React.useState(Data);
    const element=pattern.map(d=>(
        <div>
           { d.id}
        </div>
    ));

    return(
        <div style={{paddingLeft:'3vw'}}>
            <h1>這是 About Me</h1>
            {element}
        </div>
    );
}

export default About;