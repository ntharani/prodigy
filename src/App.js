import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const posts = [
      { id: 1, likes: [] },
      { id: 2, likes: ['Peter'] },
      { id: 3, likes: ['John', 'Mark'] },
      { id: 4, likes: ['Paul', 'Lilly', 'Alex'] },
      { id: 5, likes: ['Sarah', 'Michelle', 'Alex', 'John'] }
    ];    

    // const expectedOutput = [
    //   { id: 1, text: 'No one likes this' },
    //   { id: 2, text: 'Peter likes this' },
    //   { id: 3, text: 'John and Mark like this' },
    //   { id: 4, text: 'Paul, Lilly and Alex like this' },
    //   { id: 5, text: 'Sarah, Michelle and 2 others like this' }
    // ];
  
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
          {posts.map((obj) => {

            let response;
            console.log("This iteration ", obj.likes.length)
            switch(obj.likes.length) {
              case 0:
                response = "No one likes this";
                break;
              case 1:
                response = `${obj.likes[0]} likes this`;
                break;
              case 2:
                response = `${obj.likes[0]} and ${obj.likes[1]} like this`;
                break;
              case 3:
                response = `${obj.likes[0]}, ${obj.likes[1]} and ${obj.likes[2]} like this`;
                break;
              default: 
                response = `${obj.likes[0]}, ${obj.likes[1]} and ${obj.likes.length - 2} others like this`;
            }

            return (
            <li className="feed-li" key={obj.id}>
              <div className="feed-index">{obj.id}</div>
              <div className="feed-text">{response}</div>
            </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
