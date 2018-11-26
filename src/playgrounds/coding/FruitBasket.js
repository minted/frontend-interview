import React, { Component } from 'react';

// TODO make each test in FruitBasket.test.js pass

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
        {/* TODO 1. nothing to do here :) */}
        <h1>Fruit Basket</h1>
        <div>
          <a href={window.location.protocol + '//' + window.location.hostname + ':3005'}>Open test runner &raquo;</a>
        </div>
        <ul>
          {/* TODO 2. make this render the list of fruits */}
          {/* TODO 5. make special fruits from props bold */}
          <li> ...fruit here... </li>
        </ul>

        {/* TODO 3. make this add a lime on button click */}
        {/* TODO 4. make this add fruit from input on button click (default text to "lime" to pass previous test) */}
        {/* <input /> */}
        <button>Add lime</button>
      </div>
    );
  }
}

export default FruitBasket;
