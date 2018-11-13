import FruitBasket from './FruitBasket';

// TODO write code to make each test pass

it('gets the fruits', () => {  // already passes!
  const widget = new FruitBasket(['apple', 'banana']);
  const fruits = widget.getFruits();
  expect(fruits).toEqual(['apple', 'banana']);
});

it('gets the total number of fruits', () => {
  const widget = new FruitBasket(['apple', 'banana']);
  const fruitCount = widget.getFruitCount();
  expect(fruitCount).toEqual(2);
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

it('understands fruit characteristics', () => {
  const widget = new FruitBasket([
    { name: 'apple', isCitrus: true },
    { name: 'banana', isCitrus: false },
    { name: 'lime', isCitrus: true },
  ]);

  const report = widget.getCitrusFruits();
  expect(report).toEqual(['apple', 'lime']);
});

it('fully handles fruit objects with characteristics', () => {
  const widget = new FruitBasket([
    { name: 'apple', isCitrus: true },
    { name: 'banana', isCitrus: false },
  ]);

  let fruits = widget.getFruits();
  expect(fruits).toEqual(['apple', 'banana']);

  const fruitCount = widget.getFruitCount();
  expect(fruitCount).toEqual(2);

  widget.addFruit({ name: 'lime', isCitrus: true });
  fruits = widget.getFruits();
  expect(fruits).toEqual(['apple', 'banana', 'lime']);

  expect(widget.hasFruit('banana')).toBe(true);
  expect(widget.hasFruit('orange')).toBe(false);

  widget.addFruit({ name: 'banana', isCitrus: false });
  const report = widget.getFruitReport();
  expect(report).toEqual({
    'apple': 1,
    'banana': 2,
    'lime': 1,
  });
});
