import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {test: ""};  
  }

  componentDidMount() {
    fetch("/auth/test")
      .then(res => res.json())
      .then(test => this.setState({ test: test.test }))
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{this.state.test}</div>
      </header>
    </div>
    )
  }
}

export default App;
