import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Code Playgrounds</h1>
    <ul>
      <li>
        <strong>Coding:</strong> <Link to="/coding">Fruit basket</Link>
      </li>
      <li>
        <strong>Debugging:</strong> <a href="/">???</a>
      </li>
      <li>
        <strong>Data flow:</strong> <a href="/">???</a>
      </li>
      <li>
        <strong>Modeling:</strong> <a href="/">???</a>
      </li>
    </ul>
  </div>
);

export default Home;
