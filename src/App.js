import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Interview Playgrounds</h1>
        <ul>
          <li>
            <strong>Coding:</strong> <a href="/" onClick={e => e.target.port = 3005}>Fruit basket</a> (test runner)
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
