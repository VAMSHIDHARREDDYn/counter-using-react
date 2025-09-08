import { Component } from "react";
import "./index.css";
class Counter extends Component
{
    state = {count :0}
    onIncrement=()=>
    {
       this.setState(prevState=>{
        return {count : prevState.count +1}
       })
    }
    onDecrease=()=>
    {
         this.setState(prevState=>{
        return {count : prevState.count -1}
       })
    }

    render()
    {
    
    const { count }=this.state
        return(
            
            <div className="counter">
                <h1 className="heading">Counter</h1>
                <p className="count">{count}</p>
                <div className="button">
                <button onClick={this.onIncrement}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default Counter