import React from "react";
//import fruit from '../images/fruit/apple.jpg';
import heart from '../images/heart.svg';
import like from '../images/like.svg';
import Supplier from "./Supplier";

const Fruit=(props)=>{
    return(
        <div className="fruit-div">
            <img src={props.fruit} className="fruit-img" alt=""/>
            <div>
                <img src={heart} className="fruit-svg" alt=""/>
                <span className="fruit-font">{props.heart}</span>
                <span className="fruit-font"> | {props.word} | </span>
                <img src={like} className="fruit-svg" alt=""/>
                <span className="fruit-font"> | 售價{props.price} |</span>
                <p className="fruit-font">{props.desc}</p>
                <Supplier 
                    id={10}
                    name="台灣好農"
                    address="高雄市中山路10000號"
                    tel="(07)123-4567" />
            </div>
            
        </div>
    )
}

export default Fruit;