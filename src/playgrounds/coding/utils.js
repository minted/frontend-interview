export const makeValue = (value) => ({ target: { value } });

export const addFruits = (basket, fruits) => {
  const input = basket.find('input');
  const button = basket.find('button');

  fruits.forEach(fruit => {
    input.simulate('change', makeValue(fruit));
    button.simulate('click');
  });
};
