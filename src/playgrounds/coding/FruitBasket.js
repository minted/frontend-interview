import React, { Component } from 'react';

class FruitBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        'apple',
        'banana',
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Fruit Basket</h1>
        <div>
          <a href="/" onClick={e => e.target.port = 3005}>Open test runner &raquo;</a>
        </div>
        <ul>
          {/* TODO make this render the list of fruits */}
          <li> ...fruit here... </li>
        </ul>

        {/* TODO take fruit name from text input
          <input /> <button>Add fruit</button>
        */}

        {/* TODO make these buttons add their respective fruits */}
        <button>Add lime</button>
        <button>Add orange</button>
      </div>
    );
  }
}

export default FruitBasket;
