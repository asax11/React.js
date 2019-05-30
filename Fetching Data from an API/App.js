import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      isLoading:false,
      character:{}
    }
  }
  componentDidMount(){
    fetch("https://swapi.co/api/people/1")
    
    .then(response=>response.json())
    .then(data=>{
      this.setState({character:data})
    })
    
    // .then(data=>{
    // this.setState({
    //     character:data
    // })
    // })
  }
  
  render(){
    return(
      <div>

      <h2>{this.state.character.name}</h2>
      </div>
       

    )
  }

}
  
export default App;
