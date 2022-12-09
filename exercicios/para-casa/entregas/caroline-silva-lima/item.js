class Item {
  name;
  netWeight;
  price;
  amount;

  constructor(name, netWeight, price, amount) {
    this.name = name;
    this.netWeight = netWeight;
    this.price = price;
    this.amount = amount;
  }
}
module.exports = Item;
