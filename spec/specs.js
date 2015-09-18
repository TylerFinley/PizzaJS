describe('pizzaOrder', function() {
  it('make a pizza with toppings', function() {
    var Pizza = new pizzaOrder("Kinda big", 1, "ham");
    expect(Pizza.size).to.equal("Kinda big");
    expect(Pizza.number).to.equal(1);
    expect(Pizza.topping).to.equal("ham");
  });

  it('calculates total value of pizza based on size, toppings, and number', function() {
    var Pizza = new pizzaOrder("Huge", 1, "pineapple");

    expect(Pizza.totalCost()).to.equal(8.25);
  });

});
