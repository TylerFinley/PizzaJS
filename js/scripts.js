function pizzaOrder(size, number, topping) {
  this.size = size;
  this.number = number;
  this.topping = topping;
}

pizzaOrder.prototype.totalCost = function() {
  var toppingList = this.topping.split(' ');
  var toppingCost = ((toppingList.length * 1.25) * this.number);
  var costOfSize = 0;

  if (this.size === "Huge") {
    costOfSize = 7;
  } else if (this.size === "Kinda Big") {
    costOfSize = 5;
  } else if (this.size === "Pretty small") {
    costOfSize = 4;
  }

  var totalCost = toppingCost + (costOfSize * (parseInt(this.number)));
  return totalCost;
};
