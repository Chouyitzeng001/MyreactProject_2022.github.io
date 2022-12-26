import { Component } from "react";
import React from 'react';

class MyStateAndProps extends Component{
    constructor(props){ //建構子
        super(props);
        this.state={
            name:'Apple',
            price:0,
            desc:'蘋果 含有大量的膳食纖維及維他命C'
        }
    }

    render(){
        return(
            <div style={{width:'25vw'}}>
                <h3>{this.props.subject}</h3>
                <p>{this.state.name} 每斤 {this.state.price}</p>
                <button onClick={()=>{this.state.price>=1000?this.setState({price:1000}):this.setState({price:this.state.price+10})}}>按一下增加售價</button>
                <button onClick={()=>{this.state.price<=0?this.setState({price:0}):this.setState({price:this.state.price-10})}}>按一下減少售價</button>
                <YourProps desc={this.state.desc}/>
            </div>
        )
    }
}

class YourProps extends Component{
    render(){
        return(
            <p>{this.props.desc}</p>
        )
    }
}


export default MyStateAndProps;