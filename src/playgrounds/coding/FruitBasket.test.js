import React from 'react';
import { mount } from 'enzyme';

import FruitBasket from './FruitBasket';
import { addFruits, makeValue } from './utils';

let basket;

beforeEach(() => {
  basket = mount(
    <FruitBasket />
  );
});

it('1. renders the fruit basket', () => {
  expect(basket).toContainReact(
    <h1>Fruit Basket</h1>
  );
});

it('2. renders the list of fruits', () => {
  expect(basket).toContainReact(
    <ul>
      <li>apple</li>
      <li>banana</li>
    </ul>
  );
});

it('3. adds limes on button click', () => {
  const button = basket.find('button');
  button.simulate('click');
  button.simulate('click');
  expect(basket).toContainReact(
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>lime</li>
      <li>lime</li>
    </ul>
  );
});

it('4. adds user-input fruits', () => {
  const input = basket.find('input');
  const button = basket.find('button');

  input.simulate('change', makeValue('cantaloupe'));
  button.simulate('click');

  input.simulate('change', makeValue('orange'));
  button.simulate('click');

  expect(basket).toContainReact(
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>cantaloupe</li>
      <li>orange</li>
    </ul>
  );
});

it('5. bolds special fruits', () => {
  basket = mount(
    <FruitBasket specialFruits={['banana', 'orange']} />
  );

  addFruits(basket, ['cantaloupe', 'orange']);

  expect(basket).toContainReact(
    <ul>
      <li>apple</li>
      <li><strong>banana</strong></li>
      <li>cantaloupe</li>
      <li><strong>orange</strong></li>
    </ul>
  );
});
