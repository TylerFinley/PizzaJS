describe('pizzaOrder', function() {
  it('make a pizza with toppings', function() {
    var Pizza = new pizzaOrder("Kinda big", 1, "ham");
    expect(testPizza.size).to.equal("Kinda big");
    expect(testPizza.number).to.equal(1);
    expect(testPizza.topping).to.equal("ham");
  });

  it('calculates total value of pizza based on size, toppings, and number', function() {
    var testPizza = new pizzaOrder("Huge", 1, "pineapple");

    expect(testPizza.totalCost()).to.equal(8.25);
  });

});
