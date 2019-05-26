import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

    constructor(){
      super()
      this.state = {
        count:1,
        isLoggedIn: true
      }
      this.eventHandaled = this.eventHandaled.bind(this)
      this.event2Handaled = this.event2Handaled.bind(this)

    }

    eventHandaled(){
      this.setState(prevState=>{
          return{   // This will return new state 
            count : prevState.count * (2*2)
         
          }
      })
    }

    event2Handaled(){
      this.setState(prevState2=>{
        return {
          isLoggedIn: !prevState2.isLoggedIn
        }
      })
    }
  render(){
    let status;
    if(this.state.isLoggedIn){
        status = "Logged In"
    }
    else{
      status = "Logged Out"
    }
    return (
      <div className="App">
      <h1>{this.state.count}</h1>
      <button onClick = {this.eventHandaled}>Counter</button>
  
      <button onClick={this.event2Handaled}>{status}</button>
      <h3>{status}</h3>
      {/* <h2>{status}</h2> */}
      </div>
    );
  }
  
  }
  
export default App;
