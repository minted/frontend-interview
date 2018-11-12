export default class FruitBasket {
  constructor(fruits = []) {
    this.fruits = fruits;
  }

  getFruits() {
    return this.fruits;
  }
}
