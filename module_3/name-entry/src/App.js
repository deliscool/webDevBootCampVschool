import facepic from './facepic.png';
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class App extends Component {
  state = {
    currentName: '',
    names: []
  }


  handleChange = e => {
    this.setState({currentName: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({names: [...prevState.names, prevState.currentName]}))}

  render() {
    const allNames = this.state.names.map(name => {
      return (
        <li>
            {name}
        </li>
      )
    })
  
  return(
    <div className="App">
      <header className="App-header">
      <Card border="danger" style={{ width: '450px' }} >
      <Card.Title text="centeralign">What is your name?</Card.Title>
        <img src={facepic} stle={{width: '200px'}} className="App-logo" alt="logo" />
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" value={this.state.nameOutput} onChange={this.handleChange} />
          <button> Submit</button>
      </form>
      <h1>{this.state.nameInput}</h1>
      <ul>
      {allNames}
      </ul>
      </Card>
      </header>
    </div>
  )}
}
export default App