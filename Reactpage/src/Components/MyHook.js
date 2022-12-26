import {useState} from 'react';
import React from 'react';



//Hook React 16.8 新增功能,不必使用class ,即可使用state及其他React 功能
const MyHook=()=>{
    const [qty,setQty]=useState(0);
    return(
        <div style={{width:'25vw'}}>
        <h3>Hook 的應用</h3>
        <p>{qty}</p>
        {/* <button onClick={()=>setQty(qty+1)}>按一下增加訂購數量</button>
        <button onClick={()=>setQty(qty-1)}>按一下減少訂購數量</button> */}

        <button onClick={()=>{qty>=100?setQty(100):setQty(qty+1)}}>按一下增加訂購數量</button>
        <button onClick={()=>{qty<=0?setQty(0):setQty(qty-1)}}>按一下減少訂購數量</button>
        </div>
    );
}

export default MyHook;