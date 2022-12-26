import React from "react";


const MyForm=()=>{
    const [fruit,setFruit]=React.useState('');
    const [price,setPrice]=React.useState(0);
    const [qty,setQty]=React.useState(0);
    const [total,setTotal]=React.useState(0);

    function showFruit(e){
        setFruit(e.target.value)
    }
    return(
        <div style={{marginBottom:'3em'}}>
            <input type='text' 
                placeholder="Enter Name"
                onChange={showFruit} />
            <span>{fruit}</span>  <br/>
            <input type='number' 
                placeholder="Enter Price"
                onChange={(e)=>setPrice(e.target.value)} />
            <span>{price}</span> <br/>
            <input type='number' 
                placeholder="Enter Qty"
                onChange={(e)=>setQty(e.target.value)} />
            <span>{qty}</span>   <br/>
            <button onClick={()=>setTotal(price*qty)}>OK</button><span>總計為{total} 元</span>
        </div>

    );
}

export default MyForm;