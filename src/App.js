import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const expectedOutput = [
      { id: 1, text: 'No one likes this' },
      { id: 2, text: 'Peter likes this' },
      { id: 3, text: 'John and Mark like this' },
      { id: 4, text: 'Paul, Lilly and Alex like this' },
      { id: 5, text: 'Sarah, Michelle and 2 others like this' }
    ];
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Prodigy User Feed</h1>
        </header>
        <p className="App-intro">
          To see code, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {expectedOutput.map((obj) => {
            return (
            <li className="feed-li" key={obj.id}>
              <div className="feed-index">{obj.id}</div>
              <div className="feed-text">{obj.text}</div>
            </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
