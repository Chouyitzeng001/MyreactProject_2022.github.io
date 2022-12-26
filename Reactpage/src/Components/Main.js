import React from "react";
import MyHook from "./MyHook";
import MyStateAndProps from "./MyStateAndProps";
import Fruit from "./Fruit";
import MyForm from "./MyForm";

export default function Main(){

    const mystyle={
        paddingLeft:'3vw',
        backgroundImage:'./images/logo.svg',
        backgroundRepeat:'no-repeat',
        backgroundPositionX:'right' ,
        backgroundSize:'75%'       
    }

    const fruit=['Mango','litchi','watermelog'];
    const d=new Date();
    const myMonth=d.getMonth()+1;
    return(
        <main style={mystyle}>
            <hr />
            <p>{myMonth}月水果:{fruit.map((e)=>(<li>{e}</li>))}</p>
            <p style={{color:'red'}}>Let's go, take a fruit journey</p>
            <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. 
            Let us visit the gardens all over Taiwan.</p>  
            <hr />    
            <div style={{display:'inline-flex'}}>       
                <MyHook />
                <MyStateAndProps subject='State And Props 的應用'/>
            </div>
            
            <div style={{display:'inline-flex', margin:'0.85vw'}}>
            <Fruit 
                fruit={require('../images/fruit/apple.jpg')}
                heart={5.0}
                word="店長強力推薦"
                price='每顆100元'
                desc='蘋果 含有大量的膳食纖維及維他命C'
            />

            <Fruit 
                fruit={require('../images/fruit/banana.jpg')}
                heart={4.5}
                word="蕉農值營"
                price='每斤50元'
                desc='香蕉 富含膳食纖維中的果膠，可促進腸蠕動'
            />

            <Fruit 
                fruit={require('../images/fruit/watermelon.jpg')}
                heart={4.7}
                word="有機裁培"
                price='每斤100元'
                desc='香甜多汁，被稱為「夏季瓜果之王」'
            />
        </div>

        <hr />
        <MyForm />
       

        </main>
    );
}

