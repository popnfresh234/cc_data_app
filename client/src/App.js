import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: 'Test'
  }

  componentDidMount(){
    fetch('/customers/').then(res => res.json())
    .then((results) => {
      console.log(results)
    })

  }

  render(){
    return(
      <div className ="App">
        <h1>Customers</h1>
        <h2>{this.state.data}</h2>
      </div>
    )
  }
}


export default App;