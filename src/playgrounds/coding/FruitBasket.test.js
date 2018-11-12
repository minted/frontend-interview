import FruitBasket from './FruitBasket';

// TODO write code to make each test pass

it('gets the fruits', () => {  // already passes!
  const widget = new FruitBasket(['apple', 'banana']);
  const response = widget.getFruits();
  expect(response).toEqual(['apple', 'banana']);
});

it('gets the total number of fruits', () => {
  const widget = new FruitBasket(['apple', 'banana']);
  const response = widget.getFruitCount();
  expect(response).toEqual(2);
});

it('adds a fruit', () => {
  const widget = new FruitBasket(['apple', 'banana']);
  widget.addFruit('lime');
  const fruits = widget.getFruits();
  expect(fruits).toEqual(['apple', 'banana', 'lime']);
});

it('checks for a fruit', () => {
  const widget = new FruitBasket(['apple', 'banana']);
  expect(widget.hasFruit('banana')).toBe(true);
  expect(widget.hasFruit('lime')).toBe(false);
});

it('reports the number of each fruit', () => {
  const widget = new FruitBasket(['apple', 'banana', 'banana', 'lime']);
  const report = widget.getFruitReport();
  expect(report).toEqual({
    'apple': 1,
    'banana': 2,
    'lime': 1,
  });
});
