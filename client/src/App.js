import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    customers: []
  }

  componentDidMount(){
    fetch('/customers/').then(res => res.json())
    .then((customers) => {
      this.setState({customers})
    })

  }

  render(){
    return(
      <div className ="App">
        <h1>Customers</h1>
        <ul>
          {this.state.customers.map((customer, i) => {
            return (
             customer.address && 
             <li>
               <h2>{customer.address.address_line_1}</h2>
             </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default App;